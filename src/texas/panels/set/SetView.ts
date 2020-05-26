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
 * 设置面板
 * 
 */

module kelvin.texas {

    export class SetView extends BasePanel {

        public constructor() {
            super();


            this.createGameScene();
        }


        private bg: egret.Bitmap;


        private mopenBtn: starlingswf.SwfButton;

        private mcloseBtn: starlingswf.SwfButton;

        private mopenTxt: egret.TextField;

        private mcloseTxt: egret.TextField;

        private gopenBtn: starlingswf.SwfButton;

        private gcloseBtn: starlingswf.SwfButton;

        private gopenTxt: egret.TextField;

        private gcloseTxt: egret.TextField;


        private verTxt: egret.TextField;

        private verBg: egret.TextField;

        private back2Btn: starlingswf.SwfButton;

        

        public createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.back2Btn.y = App.stageHeight - 120;

            this.verTxt.y = App.stageHeight - 280;

            this.verBg.y = this.verTxt.y - 35;


            NativeBase.registerCmd("onAppUpdate", (data) => {
                Log.log("版本号:" + data);
                this.verTxt.text = data;
            }, this);

            NativeTools.appUpdate();


            this.initState();


            this.upState();

        }

        public initState(): void {
            this.mopenBtn.visible = false;
            this.mcloseBtn.visible = false;
            this.mopenTxt.visible = false;
            this.mcloseTxt.visible = false;


            this.gopenBtn.visible = false;
            this.gcloseBtn.visible = false;
            this.gopenTxt.visible = false;
            this.gcloseTxt.visible = false;
        }

        public upState(): void {
            if (VoiceData.musicNum == 1) {
                this.mopenTxt.visible = true;
                this.mcloseBtn.visible = true;
            } else {
                this.mcloseTxt.visible = true;
                this.mopenBtn.visible = true;
            }

            if (VoiceData.soundNum == 1) {
                this.gopenTxt.visible = true;
                this.gcloseBtn.visible = true;
            } else {
                this.gcloseTxt.visible = true;
                this.gopenBtn.visible = true;
            }

        }

        public on_mopenBtn(e: egret.TouchEvent): void {

            VoiceData.musicNum = 1;
            this.initState();
            this.upState();

            SoundManager.setMessageState(false);

        }

        public on_mcloseBtn(e: egret.TouchEvent): void {

            VoiceData.musicNum = 0;
            this.initState();
            this.upState();
            SoundManager.setMessageState(true);

        }

        public on_gopenBtn(e: egret.TouchEvent): void {
            VoiceData.soundNum = 1;
            this.initState();
            this.upState();
            SoundManager.setSoundMute(false);
        }

        public on_gcloseBtn(e: egret.TouchEvent): void {

            VoiceData.soundNum = 0;
            this.initState();
            this.upState();
            SoundManager.setSoundMute(true);

        }



        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }

        public on_back2Btn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            // PanelTween.popPanel();
            AccountData.isNeedAutomaticLogin = "1";
            ExtGameHelper.homePanel.gotoPanel(new LoginView());
        }


        public mainAssetName(): string {
            return "spr_set_view";
        }

        public dispose(): void {
            super.dispose();
        }



    }
}