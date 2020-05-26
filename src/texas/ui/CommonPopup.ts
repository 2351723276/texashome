
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
 * 公用弹窗
 */

module kelvin.texas {
    export class CommonPopup extends BasePanel {

        public constructor(content: string | Array<egret.ITextElement>, success: Function = null, fail: Function = null, title: string | Array<egret.ITextElement> = "提示") {
            super();

            this.contentStr = content;
            this.titleStr = title;

            this.fail = fail;
            this.success = success;

            this.createGameScene();
        }


        public contentStr: string | Array<egret.ITextElement>;

        public titleStr: string | Array<egret.ITextElement>;

        public success: Function;

        public fail: Function;

        public contentText: egret.TextField;

        public titleTxt: egret.TextField;


        public cancelBtn: starlingswf.SwfButton;

        public sureBtn: starlingswf.SwfButton;


        private createGameScene(): void {


            if (this.fail == null && this.success == null) {
                // egret.warn("CommonPopup--","没有传入成功或失败得回调函数")
                this.sureBtn.visible = false;
                this.cancelBtn.visible = false;
            } else if (this.fail == null) {
                this.sureBtn.x = 230;
                this.cancelBtn.visible = false;
            } else if (this.success == null) {
                this.cancelBtn.x = 230;
                this.sureBtn.visible = false;
            }

            // this.contentText = Tool.createTextFiled(50, 90, 610, 184, "", 28, 0xccf2fb, "center");
            this.contentText.verticalAlign = "middle";
            this.contentText.wordWrap = true;
            this.addChild(this.contentText);
            this.contentText.lineSpacing = 10;
            if (typeof (this.contentStr) == "string") {
                this.contentText.text = this.contentStr;
            } else {
                this.contentText.textFlow = this.contentStr;
            }

             if (typeof (this.titleStr) == "string") {
                this.titleTxt.text = this.titleStr;
            } else {
                this.titleTxt.textFlow = this.titleStr;
            }
        }


        public on_sureBtn(e: egret.Event): void {
            if (this.success) {
                this.success();
            }

            this.dispose();
        }

        public on_cancelBtn(e: egret.Event): void {
            if (this.fail) {
                this.fail();
            }

            this.dispose();
        }

        public mainAssetName(): string {
            return "spr_gongyongtanchuang_scene";
        }
    }
}
