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
 * 
 * 得到奖品
 */


module kelvin.texas {

    export class GetPrizeView extends BasePanel {
        public constructor(callback?: Function, isgame: boolean = false) {
            super();

            this.callback = callback;

            this.isgame = isgame;

            this.createGameScene();

        }

        private callback: Function;

        private submitBtn: starlingswf.SwfButton;

        private isgame: boolean;

        private nameTxt: egret.TextField;

        private idcardTxt: egret.TextField;

        private zfbTxt: egret.TextField;


        private nameInputTxt: InputText;

        private idcardInputTxt: InputText;

        private zfbInputTxt: InputText;

        private text: egret.TextField;

        private close: starlingswf.SwfButton;

        private createGameScene(): void {

            Tool.replaceSwfTxt("nameTxt", this);
            Tool.replaceSwfTxt("idcardTxt", this);
            Tool.replaceSwfTxt("zfbTxt", this);


            this.nameInputTxt = new InputText(this.nameTxt);
            this.idcardInputTxt = new InputText(this.idcardTxt);
            this.zfbInputTxt = new InputText(this.zfbTxt);


            this.nameTxt.text = "请输入姓名";
            this.idcardTxt.text = "请输入身份证号";
            this.zfbTxt.text = "请输入支付宝账号";
            this.nameInputTxt.setDefaultText("请输入姓名", 0xffffff);
            this.idcardInputTxt.setDefaultText("请输入身份证号", 0xffffff);
            this.zfbInputTxt.setDefaultText("请输入支付宝账号", 0xffffff);


            this.text = <egret.TextField>this.submitBtn.$children[0].$children[1];

            if(this.isgame == true){
                this.closeBtn.visible = false;
            }

            if (ExtGameHelper.isSetPrizeInfo()) {
                this.text.text = "修改";
                let data = RoleData.getRolePrizeInfo();
                this.nameTxt.text = data.name;
                this.idcardTxt.text = data.pid;
                this.zfbTxt.text = data.aliAccount;

                this.nameInputTxt.setDefaultText(data.name, 0xffffff);
                this.idcardInputTxt.setDefaultText(data.pid, 0xffffff);
                this.zfbInputTxt.setDefaultText(data.aliAccount, 0xffffff);
            }

        }



        public on_submitBtn(e: egret.TouchEvent): void {
            let data = RoleData.getRolePrizeInfo();



            if (this.nameTxt.text == "" || this.nameTxt.text == "请输入姓名") {
                ApiState.showText("请输入姓名");
                return;
            }
            if (this.idcardTxt.text == "" || this.idcardTxt.text == "请输入身份证号") {
                ApiState.showText("请输入身份证号");
                return;
            }
            if (this.zfbTxt.text == "" || this.zfbTxt.text == "请输入支付宝账号") {
                ApiState.showText("请输入支付宝账号");
                return;
            }
            if (data) {
                if (this.nameTxt.text != data.name || this.idcardTxt.text != data.pid || this.zfbTxt.text != data.aliAccount) {
                    RoleApi.updateRewardInfo(this.nameTxt.text, this.idcardTxt.text, this.zfbTxt.text, this.subminSuccess.bind(this));
                } else {
                    ApiState.showText("请修改后再点击按钮")
                }
            } else {
                RoleApi.updateRewardInfo(this.nameTxt.text, this.idcardTxt.text, this.zfbTxt.text, this.subminSuccess.bind(this));
            }








        }



        public subminSuccess(data: any): void {
            ApiState.showText("提交成功");
            this.dispose();



        }

        public mainAssetName(): string {
            return "spr_submit_view";
        }

        public dispose(): void {
            super.dispose();
            if (this.callback) {
                this.callback();
            }

        }
    }
}