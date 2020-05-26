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
 * 登录主界面
 */


module kelvin.texas {

    export class LoginView extends BasePanel {

        public constructor() {
            super();


            this.createGameScene();
        }


        private bg: egret.Bitmap;

        private wxBtn: starlingswf.SwfButton;


        private loginBtn: starlingswf.SwfButton;

        public createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij");
            this.addChildAt(this.bg, 0);

            if (!egret.getOption("type")) {
                this.automaticLogin();
            }


        }

        public automaticLogin(): void {
            if (AccountData.isNeedAutomaticLogin == "1") {
                Log.log("不需要自动登录")
                return;
            }

            let info = AccountData.getLastAccount();

            if (info) {
                if (info["iswx"]) {
                    this.on_wxBtn(null);
                } else {
                    LoginUtil.login(info["account"], info["password"], this);
                }
            }



        }

        public wxAccount: string;
        public wxInfo: Object;
        public on_wxBtn(e: egret.TouchEvent): void {
            if (egret.getOption("type")) {

                this.testLogin();

            } else if (App.isWeiDuan()) {
                Log.log("要去微信得到账号");
                NativeBase.registerCmd("wxLoginCallBack", (data: any) => {
                    Log.log(JSON.stringify(data));//{"openid":"o5okswuQ5FIuWpmG58XGOk_zD3s8","nickname":"赛文奥特曼","sex":0,"language":"zh_CN","city":"","province":"","country":"","headimgurl":"","privilege":[],"unionid":"oA8Am08306DS7y-8AJrqPwe-A8FI"}
                    this.wxAccount = data["unionid"];
                    this.wxInfo = data;
                    AccountData.loginInfo_wx = { account: data["unionid"], password: "" };
                    AccountData.wxInfoTime = new Date().getTime();
                    this.wxLogin();
                }, this);

                AppWx.login();

            } else {
                this.commonlogin();

            }

        }


        public testLogin(): void {
                   
            console.log("测试登陆");
            lzm.Alert.alert(new LoginInputPop(this.parent, this)); 

        }

        public wxLogin(): void {
            let promoCodeStr: string;
            if (egret.getOption("recommend") != null && egret.getOption("recommend") != "") {
                promoCodeStr = (egret.getOption("recommend"));
            } else {
                promoCodeStr = "";
            }
            let self = this;
            if (this.wxInfo) {
                UserApi.register(this.wxAccount, "", promoCodeStr, (data: any) => { self.registersuccess_wx(data) }, this.wxInfo, this.wxresgistered.bind(this));
            } else {
                UserApi.register(this.wxAccount, "", promoCodeStr, (data: any) => { self.registersuccess_wx(data) }, null, this.wxresgistered.bind(this));
            }

        }


        private registersuccess_wx(data: any): void {

            LoginUtil.login(this.wxAccount, "", this);

        }



        public wxresgistered(data: any): void {
            if (data.state == -8) {
                this.registersuccess_wx(null);
            } else {
                ApiState.show(data.state);
            }
        }




        public commonlogin(): void {

            let account = egret.localStorage.getItem("localAccount");

            if (account == "" || account == null) {
                account = RandomUtils.guid();
                egret.localStorage.setItem("localAccount", account);
            }

            if (egret.getOption("account")) {
                account = egret.getOption("account");
            }
            let thisObj = this;
            UserApi.register(account, "", "", function (data: any): void {

                LoginUtil.login(account, "", thisObj, () => {
                    AccountData.loginInfo_visitor = { account: account, password: "" };
                });

            }, null, function (data: any): void {
                LoginUtil.login(account, "", thisObj, () => {
                    AccountData.loginInfo_visitor = { account: account, password: "" };
                });

            });
        }


        public on_loginBtn(e: egret.TouchEvent): void {

            let info = AccountData.loginInfo;
            if (!info) {
                lzm.Alert.alert(new LoginInputPop(this.parent, this));
            } else {
                lzm.Alert.alert(new LoginViewPop(this.parent, this));
            }

        }


        public layout(): void {

            this.bg.width = App.stageWidth;
            this.bg.height = App.stageHeight;

        }


        public mainAssetName(): string {
            return "spr_login_view";
        }



        public dispose(): void {
            super.dispose();

        }

    }


}