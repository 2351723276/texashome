module kelvin.texas {
	export class Openinstall {
		public static clazz:string = "com.k.zj.OpenInstallConstant";

		public static init(){
			egret.ExternalInterface.addCallback("onOpeninstallParams",Openinstall.onOpeninstallParams);
		}

		public static timeoutId = -1;
		public static getRegisterParams():void{
			let objs = {};
			objs["clazz"] = Openinstall.clazz;
			objs["method"] = "getRegisterParams";
			egret.ExternalInterface.call("callNative",JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));

			if(App.isWeiDuan()){
				Openinstall.timeoutId = egret.setTimeout(function():void{
					Log.log("再次拉取登陆参数");
					Openinstall.getRegisterParams();
				},Openinstall,10000);//10秒后再次请求
			}
		}


		public static onOpeninstallParams(objs:any){
			egret.clearInterval(Openinstall.timeoutId);
			let dataObj = JSON.parse(objs);
			let data = dataObj.data;
			if(data == null){
				return;
			}
			if(App.isWeiDuan() && App.isAndroid() && (typeof(data)  == "string")){
				data = JSON.parse(data);
			}
			if(data.recommend){
				//同步推荐者
				if(RoleData.getRole().recommend == null){
					let par2 = { "api": "role", "c": "syncRecommend", "recommend": data.recommend};
					BaseApi.requestLogic(par2,null,null);
				}
			}
		}




	}
}