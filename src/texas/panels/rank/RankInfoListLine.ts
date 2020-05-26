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

    export class RankInfoListLine extends eui.ItemRenderer {
        public constructor() {

            super();


            this.createGameScene();
        }




        private view: starlingswf.SwfSprite;

        private headImg: egret.Bitmap;

        private nameTxt: egret.TextField;

        private resultTxt: egret.TextField;

        private rankingTxt: egret.TextField;

        private rankimg3Img: egret.Bitmap;

        private rankimg2Img: egret.Bitmap;

        private rankimg1Img: egret.Bitmap;

        private bgImg: egret.Bitmap;

        private line: egret.Bitmap;

        private goldImg: egret.Bitmap;

        private scoreImg: egret.Bitmap;

        public data: RankDeInfoLineIF;
        private createGameScene(): void {
            this.view = this.assetSwf().createSprite("spr_rank_list_line_ui");
            this.addChild(this.view);
            this.width = this.view.width;
            this.height = this.view.height - 10;



            this.headImg = <egret.Bitmap>this.view.getChildByName("headImg");
            this.nameTxt = <egret.TextField>this.view.getChildByName("nameTxt");
            this.resultTxt = <egret.TextField>this.view.getChildByName("resultTxt");
            this.rankingTxt = <egret.TextField>this.view.getChildByName("rankingTxt");
            this.rankimg3Img = <egret.Bitmap>this.view.getChildByName("rankimg3Img");
            this.rankimg2Img = <egret.Bitmap>this.view.getChildByName("rankimg2Img");
            this.rankimg1Img = <egret.Bitmap>this.view.getChildByName("ranking1Img");
            this.bgImg = <egret.Bitmap>this.view.getChildByName("bgImg");
            this.line = <egret.Bitmap>this.view.getChildByName("line");


            this.goldImg = <egret.Bitmap>this.view.getChildByName("goldImg");
            this.scoreImg = <egret.Bitmap>this.view.getChildByName("scoreImg");


        }

        public setData(data: RankDeInfoLineIF) {
            this.data = data;
            this.dataChanged();
            this.bgImg.visible = true;
        }







        public dataChanged() {
            if (!this.data) {
                return;
            }

            this.initState();


            this.showUI();

            this.showHead();


        }


        private showUI(): void {
            this.nameTxt.text = this.data.name;
            this.resultTxt.text = this.data.result;
            this.resultTxt.verticalAlign = "middle";
            this.resultTxt.text = "" + this.data.reward;
            if (this.data.rank == 1) {
                this.rankimg1Img.visible = true; 
            } else if (this.data.rank == 2) {
                this.rankimg2Img.visible = true;
            } else if (this.data.rank == 3) { 
                this.rankimg3Img.visible = true;
            } else {
                this.rankingTxt.text = "" + this.data.rank;
            }


            if (this.data.reward_type == 2) {
                this.goldImg.visible = true;
                // this.goldImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
            } else {
                this.scoreImg.visible = true;
                // this.scoreImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
            }

            

        }

        private async showHead(): Promise<void> {
            if (this.data.headurl == null) {
                this.data.headurl = "head_1_png";
            }
            if (this.data.headurl) {
                this.headImg.texture = await Tool.getTextureByUrlOrName(this.data.headurl);
                this.headImg.width = this.headImg.height = 80;
            }
        }

        public initState(): void {
            this.bgImg.visible = false;
            this.line.visible = true;

            this.headImg.texture = RES.getRes("img_img_zjixiangq_toux");

            this.rankimg1Img.visible = false;
            this.rankimg2Img.visible = false;
            this.rankimg3Img.visible = false;
            this.rankingTxt.text = "";
            this.goldImg.visible = false;
            this.scoreImg.visible = false;
        }


        public assetSwf(): starlingswf.Swf {
            return AssetManager.mainSwf;
        }









    }
}