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
 * 下面部分
 */

module kelvin.texas {

    export class ViewBottom extends BasePanel {

        public constructor() {
            super();


            this.createGameScene();

        }


        public jlbBtn: starlingswf.SwfButton;
        public scBtn: starlingswf.SwfButton;
        public bszqBtn: starlingswf.SwfButton;
        public phBtn: starlingswf.SwfButton;
        public grxxBtn: starlingswf.SwfButton;



        public bszqcover: egret.Bitmap;
        public othercover: egret.Bitmap;



        private createGameScene(): void {

            this.bszqcover.touchEnabled = true;
            this.othercover.touchEnabled = true;
            this.othercover.visible = false;


            EventManager.registerCmd(Events.gotoMatchView, this.gotoMatchView, this);
        }

        private gotoMatchView(): void {
            this.on_bszqBtn(null);
        }


        public layout(): void {

        }



        public on_jlbBtn(e: egret.TouchEvent): void {

            ApiState.showText("敬请期待");
            // this.bszqcover.visible = false;
            // this.othercover.visible = true;
            // this.othercover.touchEnabled = true;
            // this.othercover.x = 0;

        }
        public on_scBtn(e: egret.TouchEvent): void {
            this.bszqcover.visible = false;
            this.othercover.visible = true;
            this.othercover.touchEnabled = true;
            this.othercover.x = 148;
            PanelTween.pushPanel(new ShopView());

        }
        public on_bszqBtn(e: egret.TouchEvent): void {
            this.bszqcover.visible = true;
            this.othercover.visible = false;


        }
        public on_phBtn(e: egret.TouchEvent): void {
            this.bszqcover.visible = false;
            this.othercover.visible = true;
            this.othercover.touchEnabled = true;
            this.othercover.x = 430;
            // PanelTween.pushPanel(new NewsView());
            lzm.Alert.alert(new MasterRankView());

        }
        public on_grxxBtn(e: egret.TouchEvent): void {
            this.bszqcover.visible = false;
            this.othercover.visible = true;
            this.othercover.touchEnabled = false;
            this.othercover.x = 575;
            EventManager.dispatchCmd(Events.createPersonalView, null);
        }



        public mainAssetName(): string {
            return "spr_main_bottom";
        }

        public dispose(): void {
            super.dispose();
            EventManager.removeCmd(Events.gotoMatchView, this.gotoMatchView, this);
        }

    }
}