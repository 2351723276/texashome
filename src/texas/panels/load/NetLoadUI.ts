/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 网络load
 * 
 */
module kelvin.texas {

    export class NetLoadUI extends BasePanel {

        public constructor() {
            super();

            this.createGameScene();
        }


        private txt: egret.TextField;



        private loadimg: egret.Bitmap;



        private imgArr: egret.Bitmap[];

        public createGameScene(): void {

            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;

            Tool.center(this.loadimg);

        }



        private timeid1: number;

        public show(): void {
            this.x = App.stageWidth / 2;
            this.y = App.stageHeight / 2;
            Starup.stageSp.addChild(this);

            egret.Tween.removeTweens(this.loadimg);

            egret.Tween.get(this.loadimg, { loop: true }).to({ rotation: 360 }, 1000);



        }



        public hide(): void {

            Tool.removeFromParent(this);
            egret.Tween.removeTweens(this.loadimg);
        }


        public mainAssetName(): string {
            return "spr_net_load";
        }

        public dispose(): void {
            super.dispose();

        }


    }
}
