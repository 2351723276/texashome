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
 * 公告弹窗
 */

module kelvin.texas {

    export class NoticePopup extends BasePanel {
        public constructor() {
            super(false);

           

            this.createGameScene();

        }

        private imgurl: string;


        private bgSp: egret.Sprite;

        private noticeimg: egret.Bitmap;

        private whiteImg: egret.Bitmap;

        private gouImg: egret.Bitmap;

        private txt: egret.TextField;

        public closeBtn: starlingswf.SwfButton;

        private createGameScene(): void {
            this.imgurl = AccountData.loginData.alertNotice.titleUrl;
            console.log(AccountData.loginData.alertNotice.titleUrl);
            


            this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0);
            this.addChild(this.bgSp);
            this.bgSp.touchEnabled = true;
            this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);


            this.noticeimg = new egret.Bitmap();
            this.noticeimg.width = 564;
            this.noticeimg.height = 841;
            this.addChild(this.noticeimg);
            this.noticeimg.touchEnabled = true;
            this.noticeimg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchNotice, this);


            this.noticeimg.x = App.stageWidth / 2 - this.noticeimg.width / 2;
            this.noticeimg.y = App.stageHeight / 2 - 70 - this.noticeimg.height / 2;



            this.whiteImg = Tool.createBitmapByName("img_img_gg_xz");

            this.whiteImg.y = this.noticeimg.y + this.noticeimg.height + 10;
            this.whiteImg.x = this.noticeimg.x + 150;
            this.addChild(this.whiteImg);

            this.gouImg = Tool.createBitmapByName("img_img_gg_xz_dg");
            this.gouImg.x = this.whiteImg.x + 4;
            this.gouImg.y = this.whiteImg.y + 6;
            this.addChild(this.gouImg);
            this.gouImg.visible = false;


            this.txt = Tool.createTextFiled(this.whiteImg.x + 0, this.whiteImg.y, 300, 40, "今日不在显示此消息", 22, 0xffffff, "center");
            this.addChild(this.txt);
            this.txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.choose, this);
            this.txt.touchEnabled = true;

            this.closeBtn = this.assetSwf().createButton("btn_img_gg_gb");
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            this.closeBtn.x = this.whiteImg.x + 35;
            this.closeBtn.y = this.whiteImg.y + 80;
            this.addChild(this.closeBtn);

            this.createImg();



        }

        private choose(): void {
            this.gouImg.visible = !this.gouImg.visible;
        }


        private async createImg(): Promise<void> {

            this.noticeimg.texture = await Tool.getTextureByUrlOrName(this.imgurl);
        }


        private touchNotice(e: egret.TouchEvent): void {

            if (AccountData.loginData.alertNotice && AccountData.loginData.alertNotice.urls && AccountData.loginData.alertNotice.urls.length > 0) {
                PanelTween.pushPanel(new NoticeInfo(AccountData.loginData.alertNotice.urls));
                this.hide();
            }


        }



        public hide(): void {
            if (this.gouImg && this.gouImg.visible == true) {
                let start = new Date(new Date().toLocaleDateString()).getTime();
                TimeData.noticeTime = start;
            }
            this.dispose();
        }



        public dispose(): void {
            super.dispose();
            if (this.noticeimg) {
                this.noticeimg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchNotice, this);
            }
            if (this.bgSp) {
                this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            }
            if (this.closeBtn) {
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            }
            if (this.txt) {
                this.txt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.choose, this);
            }

        }


    }
}

