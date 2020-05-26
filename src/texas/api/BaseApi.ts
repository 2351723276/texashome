module kelvin.texas {
	export class BaseApi {

		private static _host: string;
		private static _port: number;
		private static _socketClient: lzm.JSONWebSocketClient;
		private static _sendQueue: any[];//发送消息的队列
		private static _sendTimerQueue: any[];//发送消息的延迟设置队列,用来记录Netloading出现的计时器id的
		private static _callBackQueue: Function[];//回调队列
		private static _currentSendObject: any;//当前往服务器发送的对象
		private static _commands: any;//命令
		private static _commandsThisObjects: any;//回调绑定的对象

		private static _cmdDataQueue:any[];

		private static _isError: boolean = false;

		public static ms:number = 0;
		public static msTotal:number = 0;
		public static msDelay:number = 0;
		public static msDelayTimer:number = -1;
		public static msStartTime:number;
		public static msRequestCount:number = 0;

		/**
		 * 初始化baseapi
		 */
		public static init(host: string, port: number) {
			BaseApi._host = host;
			BaseApi._port = port;
			BaseApi._socketClient = new lzm.JSONWebSocketClient(host, port);
			BaseApi._sendQueue = [];
			BaseApi._sendTimerQueue = [];
			BaseApi._callBackQueue = [];
			BaseApi._currentSendObject = null;

			BaseApi._socketClient.onConnectCallBack = BaseApi.onConnect;
			BaseApi._socketClient.onCloseCallBack = BaseApi.onConnectClose;
			BaseApi._socketClient.onIOErrorCallBack = BaseApi.onIOError;
			BaseApi._socketClient.onDataCallBack = BaseApi.onData;

			BaseApi._cmdDataQueue = [];

			BaseApi.clearCmd();
			BaseApiCmdInit.initCmds();

			if(BaseApi.msDelayTimer != -1){
				clearInterval(BaseApi.msDelayTimer);
				setInterval(BaseApi.msDelayRefresh,1000);
			}
		}

		private static onConnect() {
			Log.log("connect");
			BaseApi._isError = false;
			if (BaseApi._currentSendObject == null && BaseApi._sendQueue.length > 0) {
				BaseApi._currentSendObject = BaseApi._sendQueue.shift();
			}
			if (AccountData.getSessionToken() != null) {
				UserApi.resetfd();
			}
			if (BaseApi._currentSendObject != null) {
				BaseApi.sendObject(BaseApi._currentSendObject);
			}
		}

		private static onConnectClose() {
			Log.log("connectClose");
			NetWorkError.show();
			BaseApi._isError = true;
		}

		private static onIOError() {
			Log.log("onIOError");
			NetWorkError.show();
			BaseApi._isError = true;
		}

		private static onData(data: any) {
			if (data.cmd && BaseApi._currentSendObject == null) {
				Log.log("reponseData:" + JSON.stringify(data));
				BaseApi.dispatchCmd(data.cmd, data);
			}else if(data.cmd){
				BaseApi._cmdDataQueue.push(data);
			} else if (BaseApi._callBackQueue.length > 0) {
				Log.log("reponseData:" + JSON.stringify(data));

				BaseApi.msEnd();
				Log.log("ms:"+BaseApi.ms);

				if(data.finishOnClient == null) NetworkLoading.hide();
				if (BaseApi._sendQueue.length == 0) {
					BaseApi._currentSendObject = null;
				}
				//停止对应的计时器
				var timer: number = BaseApi._sendTimerQueue.shift();
				egret.clearTimeout(timer);
				var callBack: Function = BaseApi._callBackQueue.shift();
				callBack(data);

				let cmdLen = BaseApi._cmdDataQueue.length;
				if(cmdLen > 0){
					for(let i = 0 ; i < cmdLen ; i++){
						Log.log("reponseData:" + JSON.stringify(BaseApi._cmdDataQueue[i]));
						BaseApi.dispatchCmd(BaseApi._cmdDataQueue[i].cmd, BaseApi._cmdDataQueue[i]);
					}
					BaseApi._cmdDataQueue = [];
				}

				if (BaseApi._sendQueue.length > 0) {
					BaseApi._currentSendObject = BaseApi._sendQueue.shift();
					BaseApi.sendObject(BaseApi._currentSendObject);
				}
			}
		}

		public static requestUser(pars: any, callBack: Function, errorCallBack: Function) {
			BaseApi.request("login", pars, callBack, errorCallBack);
		}
		public static requestLogic(pars: any, callBack: Function, errorCallBack: Function,finishOnClient:boolean = false) {
			pars['sessionToken'] = AccountData.getSessionToken();
			BaseApi.request("logic", pars, callBack, errorCallBack,finishOnClient);
		}

		public static request(path: string, pars: any, callBack: Function, errorCallBack: Function,finishOnClient:boolean = false) {
			if (BaseApi._isError) return;
			
			BaseApi._callBackQueue.push((data: any) => {
				if (data.state != 0) {
					if (errorCallBack != null) {
						errorCallBack(data);
					} else {
						if (data.state == -5) {
							NetWorkError.show();
						} else {
							ApiState.show(data.state);
						}
					}
				} else {
					if (callBack != null) callBack(data);
				}
			});
			
			if(finishOnClient){
				pars["__"] = 1;
			}
			var dataObject: Object = { "path": path, "pars": pars};

			if (BaseApi._currentSendObject == null) {
				BaseApi._currentSendObject = dataObject;
				BaseApi.sendObject(BaseApi._currentSendObject);
			} else {
				BaseApi._sendQueue.push(dataObject);
			}
		}

		/**
		 * 发送数据
		 */
		private static sendObject(obj: any) {
			if (!BaseApi._socketClient.isConnect) {
				BaseApi._socketClient.connect();
				return;
			}

			Log.log("req path:" + obj.path);
			Log.log("req data:" + JSON.stringify(obj.pars));

			BaseApi.msStart();

			var sendObj: Object = { "path": obj.path, "reqData": obj.pars };
			BaseApi._socketClient.sendData(sendObj);
			if(obj.pars["__"] == 1){
				BaseApi.onData({"state":0,"finishOnClient":1});
			}else{
				var timer: number = NetworkLoading.show();
				BaseApi._sendTimerQueue.push(timer);
			}
		}

		/***
		 * 清除所有命令
		 */
		public static clearCmd() {
			BaseApi._commands = {};
			BaseApi._commandsThisObjects = {};
		}

		/**
		 * 注册命令
		 */
		public static registerCmd(cmd: string, callBack: Function, thisObj: any, isHead: boolean = false) {
			var cmds: any[] = BaseApi._commands[cmd];
			if (cmds == null) {
				cmds = [];
			}
			if (isHead) {
				cmds.unshift([callBack, thisObj]);
			} else {
				cmds.push([callBack, thisObj]);
			}
			BaseApi._commands[cmd] = cmds;
		}

		/**
		 * 移除命令
		 */
		public static removeCmd(cmd: string, callBack: Function, thisObj: any) {
			var cmds: any[] = BaseApi._commands[cmd];
			if (cmds == null) {
				cmds = [];
			}
			var index: number = -1;
			var len: number = cmds.length;
			for (var i: number = 0; i < len; i++) {
				if (cmds[i][0] == callBack && cmds[i][1] == thisObj) index = i;
			}
			if (index != -1) {
				cmds.splice(index, 1);
			}
			BaseApi._commands[cmd] = cmds;
		}

		/**
		 * 派发命令消息
		 */
		public static dispatchCmd(cmd: string, data: any) {
			var cmds: any[] = BaseApi._commands[cmd];
			if (cmds == null) {
				cmds = [];
			}
			var thisObj: any;
			var fun: Function;
			for (var i: number = 0; i < cmds.length; i++) {
				thisObj = cmds[i][1];
				fun = cmds[i][0];
				fun.apply(thisObj, [data])
			}
		}

		public static msStart(){
			BaseApi.msStartTime = new Date().getTime();
			BaseApi.msDelay = 0;
			BaseApi.msRequestCount++;
		}

		public static msEnd(){
			BaseApi.msTotal += new Date().getTime() - BaseApi.msStartTime;
			BaseApi.ms = Math.ceil(BaseApi.msTotal / BaseApi.msRequestCount);
			BaseApi.msStartTime = -1;
		}

		public static msDelayRefresh(){
			if(BaseApi.msStartTime != -1){
				BaseApi.ms = Math.ceil((BaseApi.msTotal + BaseApi.msDelay) / BaseApi.msRequestCount);
			}
		}





	}
}