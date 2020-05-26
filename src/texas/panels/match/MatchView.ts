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
 * 比赛专区的主界面
 * 
 */
module kelvin.texas {

    export class MatchView extends BasePanel {

        public constructor() {
            super(true);

            this.createGameScene();

        }

        private waccBtn: starlingswf.SwfButton;

        private jbsBtn: starlingswf.SwfButton;

        private waccPeopleTxt: egret.TextField;

        private jbsPeopleTxt: egret.TextField;

        private createGameScene(): void {

            this.waccBtn = this.assetSwf().createButton("btn_wacc_join_btn");

            this.jbsBtn = this.assetSwf().createButton("btn_jbs_join_btn");
            this.waccBtn.touchScale = 1.02;
            this.jbsBtn.touchScale = 1.02;

            this.waccPeopleTxt = <egret.TextField>(this.waccBtn.$children[0] as egret.DisplayObjectContainer).getChildByName("peopleNumTxt");
            this.jbsPeopleTxt = <egret.TextField>(this.jbsBtn.$children[0] as egret.DisplayObjectContainer).getChildByName("peopleNumTxt");

            this.waccPeopleTxt.text = "" + Math.ceil(Math.random() * 1000); 

            this.jbsPeopleTxt.text = "" + Math.ceil(Math.random() * 1000);

            this.scrollView.container.addChild(this.waccBtn);

            this.scrollView.container.addChild(this.jbsBtn);

            this.scrollView.scrollPolicyV = "auto";
            this.waccBtn.x = 11;
            this.waccBtn.y = 195;
            this.jbsBtn.x = 11;
            this.jbsBtn.y = 670;

            this.scrollView.setScrollSize(App.stageWidth, this.jbsBtn.y + this.jbsBtn.height);

            this.jbsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.on_jbsBtn, this);
            this.waccBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.on_waccBtn, this);



        }


        public setPeopleNumTxt(wcaa: number, jbs: number): void {
            this.waccPeopleTxt.text = "" + wcaa;
            this.jbsPeopleTxt.text = "" + jbs;
        }

        public on_jbsBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new JbsView("common"));
            // EventManager.dispatchCmd(Events.createJBSView, null);

        }
        public on_waccBtn(e: egret.TouchEvent): void {
            PanelTween.pushPanel(new JbsView("wcaa"));
        }


        public dispose(): void {
            super.dispose();
            this.jbsBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.on_jbsBtn, this);
            this.jbsBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.on_waccBtn, this);
        }

    }
}
