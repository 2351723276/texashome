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
 * 登录输入框
 */


module kelvin.texas {
    export class LoginInputPop extends BasePanel {
        public constructor(mainview: egret.DisplayObjectContainer, loginscene: LoginView) {
            super();
            this.mainView = mainview;
            this.loginScene = loginscene;
            ;
            this.createGameScene();

        }
        public mainView: egret.DisplayObjectContainer;
        public loginScene: LoginView;




        public accountTxt: egret.TextField;

        public passwordTxt: egret.TextField;

        private txt1: InputText;

        private txt2: InputText;


        private createGameScene(): void {

            Tool.replaceSwfTxt("accountTxt", this);
            Tool.replaceSwfTxt("passwordTxt", this);

            this.txt1 = new InputText(this.accountTxt);

            this.txt2 = new InputText(this.passwordTxt);

            this.passwordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)
            this.passwordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);


            // this.getInputs();

        }




        private focusIn(e: egret.Event): void {

            (e.target as egret.TextField).text = "";
            e.target.displayAsPassword = true;

        }

        private focusOut(e: egret.Event): void {
            let txt: egret.TextField;
            if (e) {
                txt = e.target;
            } else {
                txt = this.passwordTxt;
            }

            if (txt.text == "" || txt.text == "请重复输入6-20位密码") {
                txt.text = "请重复输入6-20位密码";
                txt.displayAsPassword = false;
            } else {
                txt.displayAsPassword = true;
            }


        }


        public on_againPasswordBtn(e: egret.TouchEvent): void {
            lzm.Alert.alert(new RegisterPanel("againPassword"));
        }



        public on_loginBtn(): void {
            // if (StrUtil.isPhoneNumber(this.accountTxt.text) == false) {
            //     this.showIphonePrompt();
            //     return;
            // }

            // if (this.passwordTxt.text == "请输入6-20位密码" || this.passwordTxt.text.length < 6 || this.passwordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.passwordTxt.text) == true) {
            //     this.showNewError();
            //     return;
            // }
            if (egret.getOption("type")) {
                this.testLogin();
            } else {
                let thisObj = this;

                LoginUtil.login(this.accountTxt.text, this.passwordTxt.text, this.loginScene, () => { AccountData.addLoginInfo(this.accountTxt.text, this.passwordTxt.text) })
            }



        }

        private testLogin(): void {
            console.log("测试注册");
            let account = this.accountTxt.text;
            UserApi.register(account, "", "", () => {
                console.log("测试账号未注册");
                LoginUtil.login(account, "", this.loginScene);
                egret.setTimeout(() => {
                    PhoneApi.genCode(this.accountTxt.text, (self: any, data: any) => {
                        PhoneApi.vert(self.accountTxt.text, self.passwordTxt.text, "123456", (self: any, data: any) => {
                            // LoginUtil.login(self.accountTxt.text, self.passwordTxt.text, self.loginScene, () => { AccountData.addLoginInfo(self.accountTxt.text, self.passwordTxt.text) });
                            this.dispose();
                        }, this);
                    }, this);
                }, this, 500)
            }, null, () => {
                 console.log("测试账号已经注册");
                LoginUtil.login(account, "", this.loginScene);
            });



        }

        public dispose(): void {
            super.dispose();

            this.passwordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)
            this.passwordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);

        }

        public mainAssetName(): string {
            return "spr_denglu_input";
        }





    }
}