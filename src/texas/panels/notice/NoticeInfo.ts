/**
 * 
 * 
 * 
 * 
 * 公告或者活动的详细信息
 */


module kelvin.texas {

    export class NoticeInfo extends BasePanel {
        public constructor(urlArr: string[]) {
            super(true);


            // this.urlArr = ["img_advice_png", "img_advice_png", "img_advice_png", "img_advice_png", "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",
            //     "img_advice_png",];
            
            this.urlArr = urlArr;
            this.createGameScene();

        }





        private urlArr: string[];

        private bg: egret.Bitmap;


        private createGameScene(): void {
            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 100);
            this.scrollView.y = 100;


            egret.setTimeout(() => {

                this.createImg();
            }, this, 100)
        }

        private async createImg(): Promise<void> {
            let imgAllH: number = 0;
            for (let i = 0; i < this.urlArr.length; i++) {
                let img = new egret.Bitmap();
                img.x = 8;
                img.width = App.stageWidth - 16;
                img.texture = await Tool.getTextureByUrlOrName(this.urlArr[i]);
                img.y = imgAllH;
                this.scrollView.container.addChild(img);
                imgAllH = imgAllH + img.height;
                this.scrollView.setScrollSize(App.stageWidth, imgAllH);


            }
        }

        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }

        public mainAssetName(): string {
            return "spr_active_view";
        }


        public dispose(): void {
            super.dispose();
        }

    }


}