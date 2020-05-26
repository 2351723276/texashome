module kelvin.texas {
	export class App {

		public static stageRealWidth: number = 720;//舞台实际的宽度
		public static stageRealHeight: number = 1280;//舞台实际的高度

		public static designWidth: number = 720;//设计时 使用的宽度
		public static designHeight: number = 1280;//设计时 使用的高度

		public static stageWidth: number = 720;//缩放之后舞台的宽度
		public static stageHeight: number = 1280;//缩放之后舞台的高度

		public static stage: egret.Stage;//舞台
		public static appRoot: egret.DisplayObjectContainer;//根容器
		public static topContainer: egret.DisplayObjectContainer;//最上层的容器

		public static _isLandscape: boolean = false;

		public static alertScale: number;

		public static gameing = false;

		private static gamelandscapeRotation270:boolean = false;

		public static init(stage: egret.Stage, appRoot: egret.DisplayObjectContainer): void {
			stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;

			stage.addEventListener(egret.Event.RESIZE, App.onResize, App);
			stage.addEventListener(egret.Event.ACTIVATE, App.onActive, App);
			stage.addEventListener(egret.Event.DEACTIVATE, App.onDeActive, App);
			// stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;
			stage.frameRate = 60;
			App.stage = stage;
			App.appRoot = appRoot;
			App.topContainer = new egret.DisplayObjectContainer();

			stage.addChild(App.topContainer);

			App.setOrientationMode(egret.OrientationMode.PORTRAIT);
		}

		public static setOrientationMode(mode:string):void{
			if(mode == egret.OrientationMode.LANDSCAPE){
				App.designWidth = 1280;
				App.designHeight = 720;
			}else{
				App.designWidth = 720;
				App.designHeight = 1280;
			}
			App.stage.orientation = mode;

			App.stageRealWidth = App.stage.stageWidth;
			App.stageRealHeight = App.stage.stageHeight;
			App.stageWidth = App.stage.stageWidth;
			App.stageHeight = App.stage.stageHeight;

			var sx: number = App.stageWidth / App.designWidth;
			var sy: number = App.stageHeight / App.designHeight;
			if (sx > sy) {
				App.alertScale = sy;
			} else {
				App.alertScale = sx;
			}
			lzm.Alert.init(Starup.stageSp.commonPopSp, App.stageWidth, App.stageHeight, App.alertScale,App.getRotationValue());
		}

		private static onActive(e: egret.Event): void {
			// SoundManager.SetSoundMute(false);
		}

		private static onDeActive(e: egret.Event): void {
			// SoundManager.SetSoundMute(true);
		}
		
		public static onResize(e: egret.Event): void {
			App.stageRealWidth = App.stage.stageWidth;
			App.stageRealHeight = App.stage.stageHeight;
			App.stageWidth = App.stage.stageWidth;
			App.stageHeight = App.stage.stageHeight;

			var sx: number = App.stageWidth / App.designWidth;
			var sy: number = App.stageHeight / App.designHeight;
			if (sx > sy) {
				App.alertScale = sy;
			} else {
				App.alertScale = sx;
			}

			lzm.Alert.init(App.appRoot, App.stageWidth, App.stageHeight, App.alertScale,App.getRotationValue());
		}

		public static get isLandscape(): boolean {
			return App._isLandscape;
		}

		public static set isLandscape(value: boolean) {
			App._isLandscape = value;
		}

		public static heart(): void {
			egret.setTimeout(function (): void {
				App.heartFun();
			}, App, 20000);
		}

		public static heartFun(): void {
			if (RoleData.getRole() != null) {
				RoleApi.syncRole();
			}
			App.heart();
		}

		/**
		 * 设置游戏横屏时 是否旋转270度
		 */
		public static setGamelandscapeRotation270(val:boolean):void{
			App.gamelandscapeRotation270 = val;
			lzm.Alert.init(App.appRoot, App.stageWidth, App.stageHeight, App.alertScale,App.getRotationValue());
		}

		/**
		 * 获取游戏横屏时 是否旋转270度
		 */
		public static getGamelandscapeRotation270():boolean{
			let os = egret.Capabilities.os;
			if(os == "Windows PC" || os == "Mac OS"){
				return false;
			}
			if(window.orientation != null && (window.orientation == 90 || window.orientation == -90)){
				return false;
			}
			return App.gamelandscapeRotation270;
		}

		/**
		 * 获取横屏旋转角度
		 */
		public static getRotationValue():number{
			// if(App.getGamelandscapeRotation270()){
			// 	return 270;
			// }
			// return 90;
			return 270;
		}

		/**
		 * 操作系统是否为iOS
		 */
		publi
		public static isiOS():boolean{
			return egret.Capabilities.os == "iOS";
		}
		/**
		 * 操作系统是否为android
		 */
		public static isAndroid():boolean{
			return egret.Capabilities.os == "Android";
		}
		/**
		 * 是否在微端中运行
		 */
		public static isWeiDuan():boolean{
			if (!egret.RuntimeType["RUNTIME2"]) {
				return false;
			}
			return egret.Capabilities.runtimeType == egret.RuntimeType.RUNTIME2;
		}
		/**
		 * 关闭微端启动页
		 */
		public static closeWeiduanLoadingPage(){
			if(window['closeLoadingView']){
				window['closeLoadingView']();
			}
		}

		public static openUrl(url:string){
			if(App.isWeiDuan()){
				NativeTools.openUrl(url);
			}else{
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i).toString() == "micromessenger"){//微信的话 直接跳转
					location.href = url;
				}else{
					window.open(url);
				}
			}
		}
	}
}