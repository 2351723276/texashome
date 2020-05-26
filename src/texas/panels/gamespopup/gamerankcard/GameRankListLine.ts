/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
module kelvin.texas {

    export class GameRankListLine extends eui.ItemRenderer {
        public constructor() {
            super();

            this.createGameScene();
        }

        private view: starlingswf.SwfSprite;

        private nameTxt: egret.TextField;

        private rankingTxt: egret.TextField;

        private rankimg3Img: egret.Bitmap;

        private rankimg2Img: egret.Bitmap;

        private rankimg1Img: egret.Bitmap;


        private rebuyImg: egret.Bitmap;

        private tableTxt: egret.TextField;

        private scoreTxt: egret.TextField;

        private rebuyTxt: egret.TextField;

        public data: GameRankListIF;

        private createGameScene(): void {
            this.view = this.assetSwf().createSprite("spr_game_rank_line_ui");
            this.addChild(this.view);
            this.width = this.view.width;
            this.height = this.view.height;

            this.nameTxt = <egret.TextField>this.view.getChildByName("nameTxt");
            this.rebuyTxt = <egret.TextField>this.view.getChildByName("rebuyTxt");

            this.rankingTxt = <egret.TextField>this.view.getChildByName("rankingTxt");
            this.rankimg3Img = <egret.Bitmap>this.view.getChildByName("rankimg3Img");
            this.rankimg2Img = <egret.Bitmap>this.view.getChildByName("rankimg2Img");
            this.rankimg1Img = <egret.Bitmap>this.view.getChildByName("rankimg1Img");


            this.rebuyImg = <egret.Bitmap>this.view.getChildByName("rebuyImg");

            this.tableTxt = <egret.TextField>this.view.getChildByName("tableTxt");

            this.scoreTxt = <egret.TextField>this.view.getChildByName("scoreTxt");
            this.rebuyTxt = <egret.TextField>this.view.getChildByName("rebuyTxt");

        }



        public dataChanged() {
            if (!this.data) {
                return;
            }

            this.initState();
            this.showUI();

        }


        private showUI(): void {
            this.nameTxt.text = StrUtil.cutOutName(this.data.name, 5);
         

            if (this.data.rebuy > 0) {
                this.rebuyImg.visible = true;
                this.rebuyImg.x = this.nameTxt.x + this.nameTxt.textWidth + 5;
                this.rebuyTxt.x = this.rebuyImg.x + this.rebuyImg.width + 5;
                this.rebuyTxt.text = "" + this.data.rebuy;
            } else {
                this.rebuyImg.visible = false;
                this.rebuyTxt.text = "";
            }


            this.tableTxt.text = "" + this.data.showId;
            if (this.data.showId == 0) {
                this.tableTxt.text = "-";
            }
            this.scoreTxt.text = "" + this.data.score;

            if (this.data.rank == 1) {
                this.rankimg1Img.visible = true;
            } else if (this.data.rank == 2) { 
                this.rankimg2Img.visible = true;
            } else if (this.data.rank == 3) {
                this.rankimg3Img.visible = true;
            } else {
                this.rankingTxt.text = "" + this.data.rank;
            }

        }


        public initState(): void {


            this.rebuyImg.visible = false;

            this.rankimg1Img.visible = false;
            this.rankimg2Img.visible = false;
            this.rankimg3Img.visible = false;
            this.rankingTxt.text = "";
        }


        public assetSwf(): starlingswf.Swf {
            return AssetManager.mainSwf;
        }






    }
}