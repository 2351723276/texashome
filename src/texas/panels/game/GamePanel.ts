module kelvin.texas {
	export class GamePanel extends BasePanel {


		public game: ExtGame;

		public constructor() {
			super(true);
			ExtGameHelper.extGamePanel = this;

			SoundManager.setGameConfig();
			var clazz: any = egret.getDefinitionByName(AppConfig.clientMainClass);
			this.game = new clazz();

			BaseApi.registerCmd("gameMessage", this.game.onGameMessage, this.game);

			BaseApi.registerCmd("gameMessage",this.onGameMessage,this);

			if (this.game.getBackGround() != null) {
				this.addChild(this.game.getBackGround());
			}
			this.addChild(this.game);



			if (RoomData.getCurrentRoom() != null) {
				this.game.onInit();
			} else {
				this.game.onInitByMovie(null);
			}
    
			App.gameing = true;

		}

		public onGameMessage(data:any):void{
			console.log("大厅的打印");
			console.log(data);

			
			
		}








		public layout(): void {
			if (this.game != null) {
				this.game.rotation = 0;
				this.scaleGame();
				this.game.layout();

			}
		}
		public scaleGame() {
			// if (!this.gameData.autoScale) {
			// 	return;
			// }
			this.game.anchorOffsetX = App.designWidth / 2;
			this.game.anchorOffsetY = App.designHeight / 2;

			var sx: number = App.stageWidth / App.designWidth;
			var sy: number = App.stageHeight / App.designHeight;
			if (sx > sy) {
				this.game.scaleX = this.game.scaleY = sy;
			} else {
				this.game.scaleX = this.game.scaleY = sx;
			}
			this.game.x = App.stageWidth / 2;
			this.game.y = App.stageHeight / 2;

		}

		public dispose(): void {
			if (this.game != null) {

				BaseApi.removeCmd("gameMessage", this.game.onGameMessage, this.game);
				BaseApi.removeCmd("gameMessage",this.onGameMessage,this);

				if (this.game.getBackGround() != null) {
					this.game.getBackGround().dispose();
				}
				this.game.dispose();
			}

			super.dispose();

			// App.setOrientationMode(egret.OrientationMode.LANDSCAPE);
			App.gameing = false;
		}



	}
}