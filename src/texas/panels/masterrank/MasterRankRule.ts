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
 * 大师分排行榜UI
*/

module kelvin.texas {

    export class MasterRankRule extends BasePanel {
        public constructor() {
            super();


            this.createGameScene();

        }


        private ruleImg:egret.Bitmap;



        private createGameScene(): void {

            this.ruleImg = Tool.createBitmapByName("img_dzpyq_dsphb_zi_png");
            this.addChild(this.ruleImg);
            this.ruleImg.x = 27.5;
            this.ruleImg.y = 63.5;

        }


        public mainAssetName(): string {
            return "spr_master_rank_rule";
        }


        public dispose(): void {
            super.dispose();
        }

    }
}