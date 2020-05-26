module kelvin.texas {
    export class LoadingUI extends egret.Sprite {

        private static _instance: LoadingUI;

        public static get ins(): LoadingUI {
            if (!LoadingUI._instance) {
                LoadingUI._instance = new LoadingUI();
            };
            return LoadingUI._instance;
        }


        //type 1是游戏load界面    2是网络load
        public show(type: number) {
            Starup.stageSp.addChild(this.loadBg)
            if (type == 1) {
                this.gameloadui.show();
            } else if (type == 2) {
                this.netLoad.show();
            }


        }

        public showText(str: string): void {

        }


        public time1: number;
        public hide() {
            Tool.removeFromParent(this.loadBg);
            this.gameloadui.hide();
            this.netLoad.hide();

        }

        public setProgress(current: number): void {
            this.gameloadui.setProgress(current);
        }


        private gameloadui: LoadGameUI;
        private netLoad: NetLoadUI;

        private loadBg:egret.Sprite;
        public constructor() {
            super();

            this.gameloadui = new LoadGameUI();
            this.netLoad = new NetLoadUI();

            this.loadBg = Tool.createRectSprite(App.stageWidth,App.stageHeight,0x000000,0,0,0.7);
            this.loadBg.touchEnabled = true;
        }

        private touchBtn(e: egret.TouchEvent): void {
        }



    }
}

