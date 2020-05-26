class xLoader {

	private static isInit:boolean;
	private static currentLoading:any[];
	private static loadQueue:any[];

	public static init(){
		if(xLoader.isInit) return;
		xLoader.isInit = true;

		RES.setMaxLoadingThread(8);
		RES.setMaxRetryTimes(3);

		xLoader.loadQueue = [];
		xLoader.currentLoading = null;
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,xLoader.onConfigComplete,xLoader);
		RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR,xLoader.onConfigError,xLoader);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,xLoader.onGroupProgress,xLoader);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,xLoader.onGroupComplete,xLoader);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,xLoader.onGroupError,xLoader);
	}

	private static onConfigComplete(conf){
		let callback:Function = xLoader.currentLoading[3];
		let callBackThisObj = xLoader.currentLoading[5];
		if(callBackThisObj && callback) callback.apply(callBackThisObj,[["loadConfigComplete",conf]]);
		xLoader.loadNext();
	}

	private static onConfigError(e:RES.ResourceEvent){
		let callback:Function = xLoader.currentLoading[4];
		let callBackThisObj = xLoader.currentLoading[5];
		if(callBackThisObj && callback) callback.apply(callBackThisObj,[["loadConfigError",e]]);
	}

	private static onGroupProgress(e:RES.ResourceEvent){
		if(e.groupName == "RES__CONFIG"){
			return;
		}
		let callback:Function = xLoader.currentLoading[2];
		let callBackThisObj = xLoader.currentLoading[5];
		if(callBackThisObj && callback) callback.apply(callBackThisObj,[["onResourceProgress",e]]);
	}

	private static onGroupComplete(e:RES.ResourceEvent){
		let callback:Function = xLoader.currentLoading[3];
		let callBackThisObj = xLoader.currentLoading[5];
		if(callBackThisObj && callback) callback.apply(callBackThisObj,[["onResourceLoadComplete",e]]);
		xLoader.loadNext();
	}

	private static onGroupError(e:RES.ResourceEvent){
		let callback:Function = xLoader.currentLoading[4];
		let callBackThisObj = xLoader.currentLoading[5];
		if(callBackThisObj && callback) callback.apply(callBackThisObj,[["onResourceLoadError",e]]);
	}

	private static loadNext(){
		xLoader.currentLoading = null;
		if(xLoader.loadQueue.length == 0) return;

		xLoader.currentLoading = xLoader.loadQueue.shift();
		let type:string = xLoader.currentLoading[0];
		if(type == "config"){
			RES.loadConfig(xLoader.currentLoading[1],xLoader.currentLoading[2]);
		}else if(type == "group"){
			RES.loadGroup(xLoader.currentLoading[1]);
		}
	}

	public static loadConfig(url:string,resourceRoot:string,callBackThisObj:any = null,onComplete:Function = null,onError:Function = null){
		if(xLoader.currentLoading != null){
			xLoader.loadQueue.push(["config",url,resourceRoot,onComplete,onError,callBackThisObj]);
		}else{
			xLoader.currentLoading = ["config",url,resourceRoot,onComplete,onError,callBackThisObj];
			lzm.HttpClient.send(url,{},function(data:string):void{
				var conf:any = JSON.parse(data);
				RES.parseConfig(conf,resourceRoot);
				xLoader.onConfigComplete(conf);
			});
		}
	}

	public static loadGroup(group:string,callBackThisObj:any = null,onProgress:Function = null,onComplete:Function = null,onError:Function = null){
		if(xLoader.currentLoading != null){
			xLoader.loadQueue.push(["group",group,onProgress,onComplete,onError,callBackThisObj]);
		}else{
			xLoader.currentLoading = ["group",group,onProgress,onComplete,onError,callBackThisObj];
			RES.loadGroup(group);
		}
	}


}