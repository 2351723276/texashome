module kelvin.texas {
	export class AppWx extends NativeBase {

		public static clazz: string = "com.kelvin.WXConstant";

		public static init() {
			egret.ExternalInterface.addCallback("onWxResp", AppWx.onWxResp);
			NativeBase.registerCmd("onWxResp", AppWx.onWxResp, null);
			window["callJS"] = function (funcName, data) {
				if (data) {
					data = JSON.parse(data);
					data.ios = true;
					data = JSON.stringify(data);
				}
				NativeBase.dispatchCmd(funcName, data);
			}
			AppWx.registerApp(AppConfig.wxAppId);
		}

		public static onWxResp(objs: any) {
			Log.log("onWxResp:" + objs);
			objs = JSON.parse(objs);
			if (objs["type"] == 1) {
				NetworkLoading.show(true);
				let params = { "code": objs["code"] };
				lzm.HttpClient.send(AppConfig.wxApiUrl, params, function (str: string) {
					let obj = { "loginData": JSON.parse(str), "time": Math.round(new Date().getTime()/1000) };
					egret.localStorage.setItem("login_cat_wx_data", JSON.stringify(obj))
					NativeBase.dispatchCmd("wxLoginCallBack", JSON.parse(str));
				});
				NetworkLoading.hide();
			}
		}

		public static registerApp(appId: string): void {
			let objs = {};
			objs["clazz"] = AppWx.clazz;
			objs["method"] = "registerApp";
			objs["appId"] = appId;
			objs["universalLink"] = AppConfig.universalLink;
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}

		public static login(): void {
			let data = JSON.parse(egret.localStorage.getItem("login_cat_wx_data"));
			if (data == null || parseInt(data.time) + 24 * 60 * 60 <= Math.round(new Date().getTime()/1000)) {//不存在或者超时
				let objs = {};
				objs["clazz"] = AppWx.clazz;
				objs["method"] = "login";
				egret.ExternalInterface.call("callNative", JSON.stringify(objs));
				window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
			} else {
				NativeBase.dispatchCmd("wxLoginCallBack", data.loginData);
			}
		}

		public static shareWxImage(imageObject: egret.DisplayObject, scene: string = "session") {//timeline
			var renderTexture: egret.RenderTexture = new egret.RenderTexture();
			renderTexture.drawToTexture(imageObject, new egret.Rectangle(0, 0, imageObject.width, imageObject.height));
			let imgData = renderTexture.toDataURL("image/png", new egret.Rectangle(0, 0, imageObject.width, imageObject.height));

			let objs = {};
			objs["clazz"] = AppWx.clazz;
			objs["method"] = "shareWxImage";
			objs["scene"] = scene;
			objs["imageData"] = imgData;
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}
	}
}