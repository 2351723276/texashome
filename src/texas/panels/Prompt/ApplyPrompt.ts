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
 * 报名费不够提示
 */



module kelvin.texas {

    export class ApplyPrompt extends BasePanel {

        public constructor(type) {  //1是金币不足，2是积分不足
            super();

            this.type = type;


            this.createGameScene();
        }


        private type: number;

        private promptTxt: egret.TextField;

        private goBtn: starlingswf.SwfButton;

        private btnTxt: egret.TextField;

        public createGameScene(): void {

            this.btnTxt = <egret.TextField>(this.goBtn.skin as egret.DisplayObjectContainer).getChildByName("btntxt");

            if (this.type == 1) {
                this.promptTxt.text = "金币不足，补充金币参与比赛";

                this.btnTxt.text = "确定";
            } else if (this.type == 2) {
                this.promptTxt.text = "参赛积分不足，请前往平台金标赛参与比赛获得积分";

                this.btnTxt.text = "前往锦标赛";
            }


        }


        public on_goBtn(e: egret.TouchEvent): void {

            if (ExtGameHelper.extGamePanel) {
                if (this.type == 2) {
                    EventManager.dispatchCmd(Events.goToJBSMatch, null);
                    ExtGameHelper.exitExtGamePanel();
                } else if (this.type == 1) {
                    EventManager.dispatchCmd(Events.goToShop, null);
                    PanelTween.popPanel();
                    PanelTween.pushPanel(new ShopView());
                    ExtGameHelper.exitExtGamePanel();
                } else {

                }
            } else {
                if (this.type == 2) {
                    EventManager.dispatchCmd(Events.goToJBSMatch, null);
                    PanelTween.popPanel();
                } else if (this.type == 1) {
                    EventManager.dispatchCmd(Events.goToShop, null);
                    PanelTween.pushPanel(new ShopView());

                } else {

                }
            }
            this.dispose();




        }




        public mainAssetName(): string {
            return "spr_prompt_apply_ui";
        }

        public dispose(): void {
            super.dispose();
        }



    }
}