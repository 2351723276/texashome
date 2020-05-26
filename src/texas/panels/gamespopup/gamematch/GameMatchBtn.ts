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
 * 
 * 
 * 
 * 我的比赛按钮入口
 */
module kelvin.texas {
    export class GameMatchBtn extends BasePanel {
        public constructor( matchid: number,callback: Function, error: Function) {
            super();

            this.matchid = matchid;
            this.callback = callback;
            this.error = error;
            this.createGameScene();
        }


        private matchid:number;
        private callback: Function;

        private error: Function;

        private btn: starlingswf.SwfButton;
        private createGameScene(): void {

            this.btn = this.assetSwf().createButton("btn_img_youxdat_wodesais");
            this.addChild(this.btn);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBtn, this);
            this.touchEnabled = true;
            
        }


        private touchBtn(e: egret.TouchEvent): void {
            if (!GameMatchView.gamematchView) {
                // ExtGameHelper.popMyMatchView(this.matchid,this.callback,this.error);
            } else {
                GameMatchView.gamematchView.hide();
            }

        }



        public dispose(): void {
            super.dispose();
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBtn, this);
        }
    }
}