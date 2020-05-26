module kelvin.texas {
	export class NativeTools {

		public static clazz: string = "com.kelvin.NativeTools";

		public static copyString: string = "";

		public static init() {
			egret.ExternalInterface.addCallback("onGetCopy", NativeTools.onCopy);
			egret.ExternalInterface.addCallback("onAppUpdate", NativeTools.onAppUpdate);
		}

		public static openUrl(url: string): void {
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "openUrl";
			objs["url"] = url;
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}

		public static copy(content: string): void {
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "copy";
			objs["content"] = content;
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}

		public static chageOriention(landScape: string): void {
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "chageOriention";
			objs["landScape"] = landScape;
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}

		public static hideLoading() {
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "hideLoading";
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
		}

		public static openWeixin() {
			if (App.isAndroid()) {
				let objs = {};
				objs["clazz"] = NativeTools.clazz;
				objs["method"] = "openWeixin";
				egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			} else {
				window.open("weixin://");
			}
		}

		public static openZhifubao() {
			if (App.isAndroid()) {
				let objs = {};
				objs["clazz"] = NativeTools.clazz;
				objs["method"] = "openZhifubao";
				egret.ExternalInterface.call("callNative", JSON.stringify(objs));

			} else {
				window.open("alipay://");
			}

		}

		public static getCopy() {
			NativeTools.copyString = "";
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "getCopy";
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));
			window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
		}

		private static onCopy(data): void {
			Log.log("copyData:" + data);
			data = JSON.parse(data);
			NativeTools.copyString = data.copyString;
		}

		public static appUpdate(): void {
			let objs = {};
			objs["clazz"] = NativeTools.clazz;
			objs["method"] = "appUpdate";
			egret.ExternalInterface.call("callNative", JSON.stringify(objs));

			egret.ExternalInterface.addCallback("onAppUpdate",NativeTools.onAppUpdate.bind(NativeTools));
		}

		public static onAppUpdate(data: string) {
			NativeBase.dispatchCmd("onAppUpdate", data);
		}
	}
}