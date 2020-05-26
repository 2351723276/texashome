/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 战绩的每一行
 */

module kelvin.texas {

    export class RankLine extends BasePanel {
        public constructor(data: RankDeInfoIF) {
            super();

            this.data = data;

            this.createGameScene();

        }
        private data: RankDeInfoIF;

        private rect: egret.Sprite;

        private mttIcon: egret.Bitmap;

        private sngIcon: egret.Bitmap;

        private titleTxt: egret.TextField;

        private scroeTxt: egret.TextField;

        private rankTxt: egret.TextField;

        private peopleTxt: egret.TextField;

        private buyTxt: egret.TextField;

        private timeTxt: egret.TextField;

        private jbBtn: starlingswf.SwfButton;

        private goldImg: egret.Bitmap;

        private scoreImg: egret.Bitmap;

        private createGameScene(): void {

            this.rect = Tool.createRectSprite(this.width, this.height, 0x000000, 0, 0, 0);
            this.addChildAt(this.rect, 0);

            this.rankTxt = (this.jbBtn.skin as starlingswf.SwfSprite).getTextField("rankTxt");

            this.initState();
            this.upDateUI();

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);

        }


        private touch(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new RankInfoView(this.data));

        }

        private initState(): void {

            this.mttIcon.visible = false;
            this.sngIcon.visible = false;
            this.goldImg.visible = false;
            this.scoreImg.visible = false;

        }


        private upDateUI(): void {
            if (this.data.type == "sng") {
                this.sngIcon.visible = true;
            } else if (this.data.type == "mtt") {
                this.mttIcon.visible = true;
            }

            this.timeTxt.text = this.data.time;

            if (this.data.buy) {
                this.buyTxt.text = "" + this.data.buy;
                if (this.data.matchtype == "wcaa") {
                    this.buyTxt.text = this.buyTxt.text + "(积分)";
                } else {
                    this.buyTxt.text = this.buyTxt.text + "(金币)";
                }
            } else {
                this.buyTxt.text = "0";
            }


            this.titleTxt.text = this.data.title;
            this.peopleTxt.text = this.data.matchJackpot;
            this.rankTxt.text = "" + this.data.rank;
            this.scroeTxt.text = "" + this.data.score;

            if (this.data.score == 0) {
                this.scroeTxt.textColor = 0xffffff;
            } else if (this.data.score < 0) {
                this.scroeTxt.textColor = 0x00c609;
            } else {
                this.scroeTxt.textColor = 0xe58c00;
            }

            if (this.data.reward_type == 2) {
                this.goldImg.visible = true;
                // this.goldImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
            } else {
                this.scoreImg.visible = true;
                // this.scoreImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
            }
        }


        public mainAssetName(): string {
            return "spr_rank_line_ui";
        }

        public dispose(): void {
            super.dispose();
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }




    }
}