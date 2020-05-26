module kelvin.texas {
	export class NetWorkError extends egret.DisplayObjectContainer {

		public static show(): void {
			// var error:NetWorkError = new NetWorkError();
			// error.y = App.stageHeight / 2;
			// error.x = App.stageWidth / 2;
			// if(App.isLandscape){
			// 	error.rotation = App.getRotationValue();
			// }
			// lzm.Alert.alert(error,false);

			lzm.Alert.alert(new CommonPopup("网络断开，3秒后将刷新页面重新连接", () => {
				window.location.reload();
			}));
			egret.setTimeout(() => {
				window.location.reload();
			}, this, 3000)

		}

		public mainAsset: starlingswf.SwfSprite;

		public constructor() {
			super(); 
			// this.mainAsset = AssetManager.mainSwf().createSprite("spr_netword_error");
			// this.addChild(this.mainAsset);
			// this.mainAsset.getButton("okBtn").addEventListener(starlingswf.SwfButton.onClick,this.onOkBtn,this);
		}

		public onOkBtn(e: egret.Event) {
			// window.location.reload();
		}

	}
}
