/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 游戏load
 * 
 */
module kelvin.texas {

    export class LoadGameUI extends BasePanel {

        public constructor() {
            super();

            this.createGameScene();
        }


        private txt: egret.TextField;

        private img1: egret.Bitmap;

        private img2: egret.Bitmap;

        private img3: egret.Bitmap;

        private img4: egret.Bitmap;



        private imgArr: egret.Bitmap[];

        public createGameScene(): void {

            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;

            this.imgArr = [this.img1, this.img2, this.img3, this.img4];

        }



        private timeid1: number;

        public show(num: number = 0): void {
            this.x = App.stageWidth / 2;
            this.y = App.stageHeight / 2;
            Starup.stageSp.addChild(this);
            this.txt.text = "" + num + "%...";

            egret.clearInterval(this.timeid1);

            this.index = 0;
            for (let i = 0; i < this.imgArr.length; i++) {

                this.imgArr[i].visible = false;

            }

            this.timeid1 = egret.setInterval(this.runAnima, this, 500)


        }

        private index: number;
        private runAnima(): void {
            for (let i = 0; i < this.imgArr.length; i++) {
                if (i < this.index) {
                    this.imgArr[i].visible = true;
                } else {
                    this.imgArr[i].visible = false;
                }
            }

            this.index++;

            if (this.index > 4) {
                this.index = 0;
            }

        }

        public setProgress(num: number): void {
            this.txt.text = "" + num + "%...";
        }


        public hide(): void {
            egret.clearInterval(this.timeid1);
            Tool.removeFromParent(this);
        }


        public mainAssetName(): string {
            return "spr_load_game_ui";
        }

        public dispose(): void {
            super.dispose();

        }


    }
}
