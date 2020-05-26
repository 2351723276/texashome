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
 *注册面板
 */

module kelvin.texas {
    export class RegisterPanel extends BasePanel {

        public constructor(type: string) {
            super();
            this.type = type;

            this.createGameScene();


        }

        private type: string;//"register"   注册界面     "againPassword"    重置密码界面

        private sureBtn: starlingswf.SwfButton;

        private sureAgainBtn: starlingswf.SwfButton;

        private againTitle: egret.Bitmap;

        private registerTitle: egret.Bitmap;


        private createGameScene(): void {

            if (this.type == "register") {
                this.sureBtn.visible = true;
                this.sureAgainBtn.visible = false;
                this.registerTitle.visible = true;
                this.againTitle.visible = false;

                // SoundManager.playHomeSound("binding_sound_mp3");
            } else {
                this.sureBtn.visible = false;
                this.sureAgainBtn.visible = true;
                this.registerTitle.visible = false;
                this.againTitle.visible = true;

            }



            this.createIphoneUI();


            this.createAPUI();

        }



        private againSendBtn: starlingswf.SwfButton;

        private sendBtn: starlingswf.SwfButton;

        private iphoneInputText: egret.TextField;

        private codeInputText: egret.TextField;

        private timeText: egret.TextField;

        private redPrompt: egret.TextField;

        private createIphoneUI(): void {
            Tool.replaceSwfTxt("iphoneInputText", this);
            Tool.replaceSwfTxt("codeInputText", this);

            // this.iphoneInputText = Tool.createTextFiled(260, 112 + 11, 300, 24, "请输入正确的手机号", 24, 0xffffff, "center");
            // this.addChild(this.iphoneInputText);

            this.iphoneInputText.verticalAlign = "top";

            // this.codeInputText = Tool.createTextFiled(235, 182 + 14, 200, 24, "请输入正确的验证码", 24, 0xffffff, "center");
            // this.addChild(this.codeInputText);

            this.codeInputText.verticalAlign = "top";


            let text = new InputText(this.iphoneInputText);
            text.setDefaultText("请输入手机号");
            text.setInPutColor(0xffffff);


            let text1 = new InputText(this.codeInputText);
            text1.setDefaultText("请输入验证码");
            text1.setInPutColor(0xffffff);

            this.timeText = Tool.createTextFiled(this.againSendBtn.x + 100, this.againSendBtn.y + 14, this.againSendBtn.width, 20, "(50s)", 17, 0xffffff, "center");
            this.addChild(this.timeText);
            this.timeText.visible = false;

            this.againSendBtn.visible = false;


            this.redPrompt = Tool.createTextFiled(0, 415, this.width, 40, "提示：绑定手机才能参与报名", 18, 0xff0000, "center");
            this.addChild(this.redPrompt);

            this.createTimeDown();

        }

        private recordNum: number = 60;

        private timeTimer: egret.Timer
        private createTimeDown(): void {
            this.timeTimer = new egret.Timer(1000);
            this.timeTimer.addEventListener(egret.TimerEvent.TIMER, this.runTime, this);


        }

        private startTimeDown(): void {
            this.recordNum = 60;
            this.sendBtn.visible = false;
            this.againSendBtn.visible = true;
            this.againSendBtn.setEnable(false);
            this.timeText.visible = true;

            this.timeTimer.start();


        }

        private stopTimeDown(): void {
            this.timeTimer.stop();
            this.sendBtn.visible = true;
            this.againSendBtn.visible = false;
            this.againSendBtn.setEnable(true);
            this.timeText.visible = false;

        }


        private runTime(): void {
            this.recordNum--;
            this.timeText.text = "(" + this.recordNum + "s)";
            if (this.recordNum <= 0) {
                this.stopTimeDown()
            }
        }





        public on_sendBtn(): void {

            // if (StrUtil.isPhoneNumber(this.iphoneInputText.text) == false) {
            //     this.showIphonePrompt();
            //     return;
            // }



            this.startTimeDown();

            if (this.type == "register") {
                PhoneApi.genCode(this.iphoneInputText.text, (self, data) => { self.startTimeDown() }, this);
            } else {
                UserApi.loginGetCode(this.iphoneInputText.text, null);
            }


        }



        public newPasswordTxt: egret.TextField;

        public againPasswordTxt: egret.TextField;

        private txt2: InputText;

        private txt3: InputText;


        private createAPUI(): void {

            Tool.replaceSwfTxt("newPasswordTxt", this);
            Tool.replaceSwfTxt("againPasswordTxt", this);

            this.newPasswordTxt.verticalAlign = 'top';
            this.againPasswordTxt.verticalAlign = 'top';

            this.newPasswordTxt.multiline = true;
            this.againPasswordTxt.multiline = true;

            this.txt2 = new InputText(this.newPasswordTxt);

            this.newPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)

            this.newPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);

            this.txt3 = new InputText(this.againPasswordTxt);
            this.againPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)

            this.againPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);



        }

        private focusIn(e: egret.Event): void {


            (e.target as egret.TextField).text = "";
            e.target.displayAsPassword = true;
        }

        private focusOut(e: egret.Event): void {

            if (this.newPasswordTxt.text == "") {
                this.newPasswordTxt.text = "请输入密码";
                this.newPasswordTxt.displayAsPassword = false;
            }
            if (this.againPasswordTxt.text == "") {
                this.againPasswordTxt.text = "请再次输入密码";
                this.againPasswordTxt.displayAsPassword = false;
            }

        }



        public on_sureBtn(e: egret.TouchEvent): void {
            this.sendMsg();

        }

       
        public on_sureAgainBtn(e: egret.TouchEvent): void {
            this.sendMsg();


        }


        private sendMsg(): void {
            // if (StrUtil.isPhoneNumber(this.iphoneInputText.text) == false) {
            //     this.showIphonePrompt();
            //     return;
            // }

            // if (this.codeInputText.text.length > 6 || this.codeInputText.text.length <= 0) {
            //     this.showCodeInputText();
            //     return;
            // }
            // if (this.newPasswordTxt.text == "请输入6-20位密码" || this.newPasswordTxt.text.length < 6 || this.newPasswordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.newPasswordTxt.text) == true) {
            //     this.showNewError();
            //     return;
            // }

            // if (this.againPasswordTxt.text == "请重复输入6-20位密码" || this.againPasswordTxt.text.length < 6 || this.againPasswordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.againPasswordTxt.text) == true || this.newPasswordTxt.text != this.againPasswordTxt.text) {
            //     this.showAgainError();
            //     return;
            // }

            if(this.newPasswordTxt.text != this.againPasswordTxt.text){
                ApiState.showText("两次输入的密码不相同，请重新输入密码");
                return;
            }

            Log.log("可以注册");

            let self = this;

            if (this.type == "register") {
                PhoneApi.vert(this.iphoneInputText.text, this.againPasswordTxt.text, this.codeInputText.text, (self: any, data: any) => { self.registersuccess(data) }, this);
            } else {
                UserApi.loginAgainPassword((this.iphoneInputText.text), (this.againPasswordTxt.text), this.codeInputText.text, (data: any) => { self.againpassword(data) },this.againFailError.bind(this))
            }

        }

        public againFailError(data:any):void{
            if(data.state == -4){
                ApiState.showText("用户不存在");
            }else {
                ApiState.show(data.state);
            }
        }

        private againpassword(data: any): void {
            AccountData.addLoginInfo(this.iphoneInputText.text, this.againPasswordTxt.text);
            ApiState.showText("密码重置成功");
            EventManager.dispatchCmd("DT_registersuccess", null);
            this.dispose();
        }

        private registersuccess(data: any): void {
            // console.log("注册成功回调", data);
            // RoleData.getRole().gold = data.gold;
            // EventManager.dispatchCmd("DT_changeMoney", null);
            AccountData.addLoginInfo(this.iphoneInputText.text, this.againPasswordTxt.text);
            // AccountData.loginInfo_visitor = null;
            EventManager.dispatchCmd("DT_registersuccess", null);
            ApiState.showText("账号绑定成功");
            this.dispose();
        }


        public dispose(): void {
            super.dispose();

            this.newPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)
            this.newPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);

            this.againPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this)
            this.againPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);



        }


        public mainAssetName(): string {
            return "spr_zhuce_scene";
        }




    }
}