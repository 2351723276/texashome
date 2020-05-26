module kelvin.texas {
	export class NetworkLoading {

		private static loading:starlingswf.SwfSprite;
		private static background:egret.Shape;
		private static showCount:number;

		public static show(now:boolean = false):number{
			Log.log("NetworkLoading =========== show");
			// if(NetworkLoading.loading == null){
			// 	NetworkLoading.loading = AssetManager.loadingSwf.createSprite("spr_loading");
			// 	NetworkLoading.loading.getImage("resImage").visible = false;
			// 	NetworkLoading.loading.getTextField("radioText").visible = false;
			// 	NetworkLoading.background = new egret.Shape();
			// 	NetworkLoading.background.touchEnabled = true;
			// 	NetworkLoading.showCount = 0;
			// }
			var timer:number = 0;
			// if(now){
			// 	NetworkLoading.showCount++;
			// 	NetworkLoading.realyShow();
			// }else{
			// 	App.appRoot.addChild(NetworkLoading.background);
			// 	NetworkLoading.background.graphics.clear();
			// 	NetworkLoading.background.graphics.beginFill(0x000000,0);
			// 	NetworkLoading.background.graphics.drawRect(0,0,App.stageWidth,App.stageHeight);
			// 	NetworkLoading.background.graphics.endFill();
				
			// 	NetworkLoading.showCount++;
			// 	timer = egret.setTimeout(function():void{
			// 		if(NetworkLoading.showCount > 0) NetworkLoading.realyShow();
			// 	},NetworkLoading,2000);
			// }
			return timer;
		}

		public static hideBackGround(){
			// if(NetworkLoading.loading.parent == null){
			// 	Tool.removeFromParent(NetworkLoading.background);
			// }
		}

		public static realyShow():void{
			// App.appRoot.addChild(NetworkLoading.background);
			// NetworkLoading.background.graphics.clear();
			// NetworkLoading.background.graphics.beginFill(0x000000,0.7);
			// NetworkLoading.background.graphics.drawRect(0,0,App.stageWidth,App.stageHeight);
			// NetworkLoading.background.graphics.endFill();
			// App.appRoot.addChild(NetworkLoading.loading);
			// NetworkLoading.loading.x = App.stageWidth / 2;
			// NetworkLoading.loading.y = App.stageHeight * 0.3;
		}

		public static hide(){
			Log.log("NetworkLoading =========== hide");
			NetworkLoading.showCount--;
			// if(NetworkLoading.background != null && NetworkLoading.showCount <= 0){
			// 	if(NetworkLoading.background.parent) NetworkLoading.background.parent.removeChild(NetworkLoading.background);
			// 	if(NetworkLoading.loading.parent) NetworkLoading.loading.parent.removeChild(NetworkLoading.loading);
			// }
		}

	}
}