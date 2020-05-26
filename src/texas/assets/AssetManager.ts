module kelvin.texas {
	export class AssetManager {

		public static is_local = true;

		/**
		 * 游戏启动的时候 初始化一波资源
		 */
		public static initWithStart(callBack:Function,callBackThisObj:any){
			RES.registerAnalyzer("swf",starlingswf.SwfAnalyzer);
			RES.registerAnalyzer("js",JSAnalyzer);
			xLoader.init();    
			egret.ImageLoader.crossOrigin  = "Anonymous";
			if(AssetManager.is_local){
				AssetManager.loadConfig(AppConfig.platform_res_config_url, AppConfig.platform_res_url,callBack,callBackThisObj);
			}else{
				AssetManager.loadConfig(
					"http://172.17.1.105/texas_ziyuan/default.res.json", 
					"http://172.17.1.105/texas_ziyuan/",
					callBack,callBackThisObj); 
			}
		}

		/**
		 * 加载资源配置
		 */
		public static loadConfig(url:string,resourceRoot:string,callBack:Function,callBackThisObj:any){
			xLoader.loadConfig(url,resourceRoot,callBackThisObj,callBack,callBack);
		}

		/**
		 * 加载资源组
		 */
		public static loadGroup(name:string,callBack:Function,callBackThisObj:any):void{
			xLoader.loadGroup(name,callBackThisObj,callBack,callBack,callBack);
		}

		public static get starupSwf():starlingswf.Swf{
			return RES.getRes("starup_swf");
		}

		public static get loadingSwf():starlingswf.Swf{
			return RES.getRes("loading_swf");
		}

		public static get mainSwf():starlingswf.Swf{
			return RES.getRes("main_swf");
		}


	}
}