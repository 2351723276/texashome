/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 战绩的主面板
 */


module kelvin.texas {
    export class GameRankView extends BasePanel {
        public constructor(matchid: string, roomid: number, cardData: any, watchPeople: number) {
            super();

            this.roomid = roomid;
            this.watchPeople = watchPeople;
            this.cardData = cardData;
            this.matchid = matchid;
            this.createGameScene();

        }

        private cardData: any;

        private watchPeople: number;

        private roomid: number;

        private matchid: string;

        private view: starlingswf.SwfSprite;

        private bgSp: egret.Sprite;

        private bg: egret.Bitmap;


        public unchooseRank: egret.TextField;

        public unchooseCard: egret.TextField;

        public chooseRankBtn: starlingswf.SwfButton;

        public chooseCardBtn: starlingswf.SwfButton;


        private rankUI: GameRankUI;


        private cardUI: GameCardUI;
        private createGameScene(): void {
            this.view = <starlingswf.SwfSprite>this.$children[0];


            this.visible = false;

            this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);
            this.addChildAt(this.bgSp, 0);
            this.bgSp.touchEnabled = true;
            this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);

            this.bg.touchEnabled = true;


            this.chooseRankBtn.visible = false;
            this.unchooseCard.visible = false;

            this.rankUI = new GameRankUI(this.matchid, this.roomid, this.watchPeople);

            this.view.addChild(this.rankUI);

            this.rankUI.x = 40;
            this.rankUI.y = 80;


            this.cardUI = new GameCardUI(this.cardData);

            this.view.addChild(this.cardUI);

            this.cardUI.x = 40;
            this.cardUI.y = 80;
            this.cardUI.visible = false;

        }

        public on_chooseRankBtn(e: egret.TouchEvent): void {
            this.chooseRankBtn.visible = false;
            this.chooseCardBtn.visible = true;
            this.unchooseRank.visible = true;
            this.unchooseCard.visible = false;

            this.cardUI.visible = false;
            this.rankUI.visible = true;


        }

        public on_chooseCardBtn(e: egret.TouchEvent): void {

            this.chooseRankBtn.visible = true;
            this.chooseCardBtn.visible = false;
            this.unchooseRank.visible = false;
            this.unchooseCard.visible = true;

            this.cardUI.visible = true;
            this.rankUI.visible = false;
        }



        public show(): void {
            this.view.anchorOffsetX = this.view.width;
            this.view.anchorOffsetY = this.view.height;

            this.view.y = App.stageHeight;
            this.view.x = App.stageWidth + this.view.width;
            this.visible = true;
            this.view.scaleX = this.view.scaleY = ExtGameHelper.getGameScalex();

            egret.Tween.get(this.view).to({ x: App.stageWidth }, 250, egret.Ease.quartOut).call(() => {
                

            });

        }



        public hide(): void {
            egret.Tween.get(this.view).to({ x: App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(() => {
                this.dispose();
            });
        }


        public mainAssetName(): string {
            return "spr_game_rank_view";
        }

        public dispose(): void {
            super.dispose();
            this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
        }



    }
}