module kelvin.texas {
	export class Starup extends egret.DisplayObjectContainer {

		public starupUi: starlingswf.SwfSprite;

		public homeSp: egret.Sprite;

		public gameSp: egret.Sprite;

		public popupSp: egret.Sprite;

		public commonPopSp: egret.Sprite;

		public promptSp: egret.Sprite;

		public static stageSp: Starup;

		public constructor() {
			super();

			//初始化微信端
			AppWx.init();

			Starup.stageSp = this;

			this.homeSp = new egret.Sprite();
			this.addChild(this.homeSp);

			this.gameSp = new egret.Sprite();
			this.addChild(this.gameSp);

			this.popupSp = new egret.Sprite();
			this.addChild(this.popupSp);


			this.commonPopSp = new egret.Sprite();
			this.addChild(this.commonPopSp);

			this.promptSp = new egret.Sprite();

			this.addChild(this.promptSp);

			// let assetAdapter = new AssetAdapter();
			// egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
			// egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

			RES.setMaxRetryTimes(100);
			egret.MainContext.instance.stage.maxTouches = 1;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);



		}

		private onAddToStage(event: egret.Event) {
			BaseApi.init(AppConfig.server_ip, AppConfig.server_port);
			App.init(this.stage, this);
			AssetManager.initWithStart(this.loadResConfigCallBack, this);
		}

		/**
		 * 资源配置加载完成
		 */
		private loadResConfigCallBack(data: any): void {
			Log.log("初始化配置加载完成");

			// let theme = new eui.Theme("resource/default.thm.json", this.stage);
			// theme.addEventListener(eui.UIEvent.COMPLETE, () => {
			AssetManager.loadGroup("preload", this.loadResCallBack, this);
			// }, this);

			// AssetManager.loadGroup("starup", this.loadResCallBack, this);
			// AssetManager.loadGroup("loading", this.loadResCallBack, this);
			// AssetManager.loadGroup("preload", this.loadResCallBack, this);
		}






		/**
		 * 初始化资源组 加载回调
		 */
		private loadResCallBack(data: any) {
			var callBackType: string = data[0];
			var e: RES.ResourceEvent = data[1];

			if (callBackType == "onResourceLoadComplete") {
				if (e.groupName == "preload") {


					this.homeSp.addChild(new LoginView());

					ExtGameHelper.init();
					this.addChild(RefreshUI.ins);

					EventManager.dispatchCmd("StarupLoadResComplete", null);


				}
			} else if (callBackType == "onResourceProgress" && e.groupName == "preload") {
				EventManager.dispatchCmd("StarupLoadResProgress", parseInt(((e.itemsLoaded / e.itemsTotal) * 100).toString()));
			}
		}





	}
}