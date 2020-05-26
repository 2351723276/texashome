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
 * 刷新的动画
 */

module kelvin.texas {



    export class RefreshUI extends BasePanel {

        public constructor() {
            super();

            this.createGameScene();

        }

        private static _ins: RefreshUI;


        public static get ins(): RefreshUI {
            if (!RefreshUI._ins) {
                RefreshUI._ins = new RefreshUI();
            }
            return RefreshUI._ins;
        }



        private loadImg: egret.Bitmap;
        private createGameScene(): void {

            this.loadImg = Tool.createBitmapByName("img_pyqdz_gongyong_jiaz");
            this.addChild(this.loadImg);
            Tool.center(this.loadImg);
            this.loadImg.x = App.stageWidth / 2;
            this.loadImg.y = App.stageHeight / 2;


            this.loadImg.visible = false;

        }



        public show(x: number = App.stageWidth / 2, y: number = App.stageHeight / 2): void {




            egret.Tween.removeTweens(this.loadImg);

            this.loadImg.x = x;
            this.loadImg.y = y;

            this.loadImg.visible = true;
            this.loadImg.scaleX = this.loadImg.scaleY = 0.5;

            egret.Tween.get(this.loadImg).to({ scaleX: 1, scaleY: 1 }, 100);

            egret.Tween.get(this.loadImg, { loop: true }).to({ rotation: 360 }, 500);

        }


        public hide(): void {

            egret.Tween.removeTweens(this.loadImg);
            egret.Tween.get(this.loadImg, { loop: true }).to({ rotation: 360 }, 500);

            egret.Tween.get(this.loadImg).to({ scaleX: 0.5, scaleY: 0.5 }, 100).call(() => {
                this.loadImg.visible = false;
                egret.Tween.removeTweens(this.loadImg);
            }, this)

        }


        public dispose(): void {
            super.dispose();



        }



    }
}