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
 * 商店购买
 */



module kelvin.texas {

    export class ShopView extends BasePanel {
        public constructor() {
            super(true);


            this.createGameScene();

        }

        private bg: egret.Bitmap;

        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.scrollView.y = 120;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 150);

            this.getInfo();
            this.createUI();


        }

        private infoArr: ShopInfoIF[];
        private getInfo(): void { 

            this.infoArr = [];

            this.infoArr = [{ gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
            { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
            { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
            { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },]

        }

        public uiArr: ShopMinUI[];

        private createUI(): void {
            this.uiArr = [];
            let numY = -1;
            for (let i = 0; i < this.infoArr.length; i++) {
                if (i % 3 == 0) {
                    numY++;
                }

                let line: ShopMinUI = new ShopMinUI(this.infoArr[i]);
                this.scrollView.container.addChild(line);
                this.uiArr.push(line);
                line.y = 400 * numY;
                line.x = 238 * (i - (numY * 3)) + 20;
            }

            this.scrollView.setScrollSize(App.stageWidth, Math.ceil(this.infoArr.length / 3) * 400);
        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();
            EventManager.dispatchCmd(Events.gotoMatchView, null);
        }


        public mainAssetName(): string {
            return "spr_shop_view";
        }

        public dispose(): void {
            super.dispose();

        }



    }


}