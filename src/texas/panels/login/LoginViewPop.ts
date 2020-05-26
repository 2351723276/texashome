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
 * 登录主界面弹窗
 */



module kelvin.texas {
    export class LoginViewPop extends BasePanel {
        public constructor(mainview: egret.DisplayObjectContainer, loginscene: LoginView) {
            super();
            this.mainView = mainview;
            this.loginScene = loginscene;
            this.createGameScene();

        }
        public mainView: egret.DisplayObjectContainer;

        public loginScene: LoginView;

        private accountText: egret.TextField;





        private view: starlingswf.SwfSprite;

        private accountTitle: egret.Bitmap;

        private accountBg: egret.Bitmap;

        private passwordTitle: egret.Bitmap;

        private passwordBg: egret.Bitmap;

        private bg: egret.Bitmap;


        private createGameScene(): void {
            this.view = <starlingswf.SwfSprite>this.$children[0];
            Tool.replaceSwfTxt("accountText", this);
            this.accountText.text = "";

            this.bg.touchEnabled = true;
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toucBg, this);
            this.bgimg.touchEnabled = true;

            this.accountBg.touchEnabled = true;
            this.accountBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeArea, this);
            this.accountBg.name = "up";

            egret.setTimeout(() => {
                this.createDropDownArea();
            }, this, 100)


        }

        //创建下拉区域
        private dropBtn: starlingswf.SwfButton;
        private upBtn: starlingswf.SwfButton;


        private dropAreaSc: egret.ScrollView;
        private dropAreaSp: egret.Sprite;

        private accountBtnArr: egret.TextField[];

        private deleteBtnArr: egret.Bitmap[];

        private bgimg: egret.Bitmap;
        private createDropDownArea(): void {

            let info = AccountData.loginInfo;
            if (!info) {
                this.bgimg.visible = false;
                this.upBtn.visible = false;
                this.dropBtn.visible = false;
                if (this.dropAreaSc) {
                    this.dropAreaSp.removeChildren();
                    this.clearBtn();
                }
                // this.on_loginOtherBtn(null);
                return;
            }


            if (!this.dropAreaSc) {
                this.dropAreaSc = new egret.ScrollView();
                this.dropAreaSc.verticalScrollPolicy = "auto";
                this.dropAreaSc.horizontalScrollPolicy = "off";
                this.dropAreaSc.x = this.bgimg.x;
                this.dropAreaSc.y = this.bgimg.y;
                this.bgimg.height = 200;
                this.dropAreaSc.width = this.bgimg.width;
                this.dropAreaSc.height = this.bgimg.height - 10;
                this.view.addChild(this.dropAreaSc);
                this.dropAreaSc.visible = false;

                this.dropAreaSp = new egret.Sprite();
                this.dropAreaSc.setContent(this.dropAreaSp);
                this.upBtn.visible = false;
                this.bgimg.visible = false;

                let bgmask = Tool.createRectSprite(this.bgimg.width, this.bgimg.height, 0x000000, this.bgimg.x, this.bgimg.y, 0);
                this.bgimg.parent.addChild(bgmask);
                this.bgimg.mask = bgmask;
                this.bgimg.touchEnabled = true;
                this.bgimgY = this.bgimg.y;

            } else {
                this.dropAreaSp.removeChildren();
                this.clearBtn();
                let isexist = false;
                for (let i in info) {
                    if (info[i]) {
                        info[i]["account"] == this.accountText.text;
                        isexist = true;
                    }
                };

                if (isexist == false) {
                    this.accountText.text = "";
                    this.info = null;
                }
            }


            this.accountBtnArr = [];
            this.deleteBtnArr = [];
            let num = 0;
            let accountInfoArr: any[] = [];
            for (let i in info) {
                if (info[i]) {
                    accountInfoArr.push(info[i]);
                }
            };

            ArrayUtil.AscendingArray("time", accountInfoArr);
            accountInfoArr.reverse();

            this.txtSpArr = [];
            this.deleteSpArr = [];


            for (let i = 0; i < accountInfoArr.length; i++) {

                let txt = Tool.createTextFiled(this.accountText.x - 180, this.accountText.y, null, this.accountText.height, accountInfoArr[i]["account"], 24, 0xffffff, "left");
                txt.name = accountInfoArr[i]["account"];
                this.dropAreaSp.addChild(txt);
                this.accountBtnArr.push(txt);
                txt.x = 20;
                txt.y = num * 60 + 25;
                num++;
                let txtSp = Tool.createRectSprite(txt.width + 100, txt.height + 10, 0xffffff, txt.x - 40, txt.y - 10, 0);
                txtSp.name = txt.name;
                txtSp.touchEnabled = true;
                this.dropAreaSp.addChild(txtSp);
                txtSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                this.txtSpArr.push(txtSp);


                // let deleteBtn = Tool.createTextFiled(txt.x + 275, txt.y + 4, null, this.accountText.height, "删除", 24, 0xB04D43, "left");

                let deleteBtn = Tool.createBitmapByName("img_img_dly_xld_sc", false, txt.x + 250, txt.y + 4);
                this.dropAreaSp.addChild(deleteBtn);
                this.deleteBtnArr.push(deleteBtn);
                deleteBtn.name = accountInfoArr[i]["account"];
                let deleteSp = Tool.createRectSprite(deleteBtn.width + 30, deleteBtn.height + 10, 0xffffff, deleteBtn.x - 20, deleteBtn.y - 10, 0);
                deleteSp.name = deleteBtn.name;
                deleteSp.touchEnabled = true;
                this.dropAreaSp.addChild(deleteSp);
                deleteSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                this.deleteSpArr.push(deleteSp);

            }


            let bg = Tool.createRectSprite(this.dropAreaSc.width - 10, this.accountBtnArr.length * 60 + 10, 0x000000, 0, 0, 0);
            this.dropAreaSp.addChild(bg);
            if (accountInfoArr[0]) {
                this.info = accountInfoArr[0];
                this.accountText.text = this.info["account"];
            }


        }

        private txtSpArr: egret.Sprite[];
        private deleteSpArr: egret.Sprite[];


        private deleteAccount(e: egret.TouchEvent): void {
            AccountData.deleteLoginInfo(e.target.name);

            this.createDropDownArea();
        }


        private changeArea(e: egret.TouchEvent): void {
            if (e.target.name == "up") {
                this.ondropBtn();
                e.target.name = "drop";
            } else {
                this.onupBtn();
                e.target.name = "up"
            }

        }

        private bgimgY: number;
        private ondropBtn(): void {
            let info = AccountData.loginInfo;
            if (!info) {
                return;
            }


            egret.Tween.removeTweens(this.bgimg);
            this.bgimg.visible = true;

            this.bgimg.y = this.bgimgY - this.bgimg.height;
            egret.Tween.get(this.bgimg).to({ y: this.bgimgY }, 250).call(() => { this.dropAreaSc.visible = true }, this);
            this.dropBtn.visible = false;
            this.upBtn.visible = true;
        }



        private onupBtn(): void {
            let info = AccountData.loginInfo;
            if (!info) {
                return;
            }

            egret.Tween.removeTweens(this.bgimg);
            this.dropAreaSc.visible = false;
            this.bgimg.y = this.bgimgY;
            egret.Tween.get(this.bgimg).to({ y: this.bgimgY - this.bgimg.height }, 250).call(() => { this.bgimg.visible = false }, this);
            this.dropBtn.visible = true;
            this.upBtn.visible = false;
        }


        private info: any;
        private touchTxt(e: egret.TouchEvent): void {

            let info = AccountData.loginInfo[e.target.name];
            AccountData.addLoginInfo(info["account"], info["password"]);
            this.accountText.text = info["account"];
            this.info = info;
            this.onupBtn();

        }
        private toucBg(): void {
            this.onupBtn();
        }



        public on_sureBtn(e: egret.TouchEvent): void {

            if (!this.info) {
                ApiState.showText("请选择要登录的账号");
                return;
            }

            let thisObj = this;

            // UserApi.login(this.info["account"], this.info["password"], function (data: any): void {
            //     App.heart();
            //     thisObj.mainView.addChild(new MainPanel());
            //     Tool.removeFromParent(thisObj);
            //     lzm.Alert.closeAllAlert();
            // });
            AccountData.addLoginInfo(this.info["account"], this.info["password"]);
            LoginUtil.login(this.info["account"], this.info["password"], this.loginScene);
        }


        public on_againPasswordBtn(e: egret.TouchEvent): void {
            lzm.Alert.alert(new RegisterPanel("againPassword"));
        }



        public on_loginOtherBtn(e: egret.TouchEvent): void {
            lzm.Alert.alert(new LoginInputPop(this.mainView, this.loginScene));

        }


        public layout(): void {


            // LayoutUtil.layout_up(this.accountText);
            // LayoutUtil.layout_up(this.passwordText);
            // LayoutUtil.layout_up(this.accountTitle);
            // LayoutUtil.layout_up(this.accountBg);
            // LayoutUtil.layout_up(this.passwordTitle);
            // LayoutUtil.layout_up(this.passwordBg);
        }



        public clearBtn(): void {
            if (this.accountBtnArr) {
                for (let i = 0; i < this.accountBtnArr.length; i++) {
                    this.accountBtnArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                }

            }

            if (this.deleteBtnArr) {
                for (let i = 0; i < this.deleteBtnArr.length; i++) {
                    this.deleteBtnArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                }
            }

        }

        public dispose(): void {
            super.dispose();

            this.clearBtn();
            egret.Tween.removeTweens(this.bgimg);

            this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.toucBg, this);

            if (this.txtSpArr) {
                for (let i = 0; i < this.txtSpArr.length; i++) {
                    this.txtSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                }
            }

            if (this.deleteSpArr) {
                for (let i = 0; i < this.deleteSpArr.length; i++) {
                    this.deleteSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                }
            }

        }

        public mainAssetName(): string {
            return "spr_denglu_view";
        }

    }
}