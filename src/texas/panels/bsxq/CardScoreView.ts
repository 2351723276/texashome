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
 * 牌力积分介绍
 */



module kelvin.texas {

    export class CardScoreView extends BasePanel {

        public constructor() {
            super(true);


            this.createGameScene();

        }


        private bg: egret.Bitmap;
        private title:egret.TextField;


        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);
            
            this.title .text = "牌力积分";

            this.scrollView.y = 100;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight-100);
            this.scrollView.bounces =false;
            this.addChild(this.scrollView);
            
            egret.setTimeout(() => {
                this.createImgs();
            }, this, 100)
        }

        private async createImgs(): Promise<void> {
            let allH:number = 0;
            for (let i = 1; i < 6; i++) {
                let img = new egret.Bitmap();
                img.texture = await Tool.getTextureByUrlOrName("img_dt_ct" + i + "_png");
                img.y = allH;
                allH = allH + img.height;
                this.scrollView.container.addChild(img);
            }

            this.scrollView.setScrollSize(App.stageWidth,allH);

        }





        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)

            PanelTween.popPanel();

        }

        public mainAssetName(): string {
            return "spr_mzjgb_view";
        }



        public dispose(): void {
            super.dispose();


        }


    }
}