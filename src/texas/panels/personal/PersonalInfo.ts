/**
 * 
 * 
 * 
 * 个人信息的详细面板
 */


module kelvin.texas {

    export class PersonalInfo extends BasePanel {
        public constructor() {
            super();


            this.createGameScene();

        }

        private bg: egret.Bitmap;

        private phoneTxt: egret.TextField;

        private idTxt: egret.TextField;

        private nameTxt: egret.TextField;

        private chooseXtBtn: starlingswf.SwfButton;

        private chooseZdyBtn: starlingswf.SwfButton;

        private view: starlingswf.SwfSprite;

        private createGameScene(): void {

            this.view = <starlingswf.SwfSprite>this.$children[0];


            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.idTxt.text = RoleData.getRole().uid;
            this.nameTxt.text = RoleData.getRole().name;




            this.createChangeHeadUI();
            this.createImgUI();

            this.hideChooseHeadUI();

            this.updateHeadImg();
        }



        //创建

        private headSp: egret.Sprite;

        private headBgSp: egret.Sprite;

        private scrollview: eui.Scroller;

        private scSp: eui.Group;

        private scImg: eui.Image;



        private createChangeHeadUI(): void {
            this.headBgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);
            this.addChild(this.headBgSp);
            this.headBgSp.touchEnabled = true;
            this.headBgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideChooseHeadUI, this);

            this.headSp = new egret.Sprite();
            this.addChild(this.headSp);

            let bg = Tool.createBitmapByName("img_img_gersz_tc");


            this.headSp.width = bg.width;
            this.headSp.height = bg.height;
            this.headSp.addChild(bg);
            this.headSp.x = 50;
            this.headSp.y = (App.stageHeight - this.headSp.height) / 2;


            this.scrollview = new eui.Scroller();
            this.scrollview.scrollPolicyH = 'off';
            this.scrollview.scrollPolicyV = "auto";
            this.scrollview.width = this.headSp.width;
            this.scrollview.height = this.headSp.height - 20;
            this.scrollview.y = 10;
            this.headSp.addChild(this.scrollview);
            this.scSp = new eui.Group();
            this.scrollview.viewport = this.scSp;

            this.scImg = new eui.Image();
            this.scImg.width = this.scrollview.width;
            this.scSp.addChild(this.scImg);





        }

        public showChooseHeadUI(): void {
            this.headBgSp.visible = true;
            this.headSp.visible = true;
        }


        public hideChooseHeadUI(): void {
            this.headBgSp.visible = false;
            this.headSp.visible = false;
        }



        private imgArr: egret.Bitmap[];

        private frame: egret.Bitmap;

        private async createImgUI(): Promise<void> {

            this.imgArr = [];

            let numY: number = -1;
            for (let i = 0; i < 6; i++) {
                if (i % 3 == 0) {
                    numY++;
                }

                let img: egret.Bitmap = new egret.Bitmap();
                let imgurl = "head_" + (i + 1) + "_png"
                img.texture = await Tool.getTextureByUrlOrName(imgurl);
                img.name = imgurl;
                img.x = (i - (numY * 3)) * 130 + 130;
                img.y = numY * 170 + 55;
                img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touImg, this);
                img.touchEnabled = true;
                this.scSp.addChild(img);
                this.imgArr.push(img);

            }
            this.scImg.height = (numY + 1) * 170 + 75;

            this.frame = Tool.createBitmapByName("img_img_gersz_xzk");
            this.scSp.addChild(this.frame);
            this.frame.visible = false;

            for (let i = 0; i < this.imgArr.length; i++) {

                if (this.imgArr[i].name == RoleData.getRole().head) {
                    this.frame.visible = true;
                    this.frame.x = this.imgArr[i].x - 12;
                    this.frame.y = this.imgArr[i].y - 12;
                    break;
                }
            }

            this.initImg();

        }


        public touImg(e: egret.TouchEvent): void {
            RoleData.getRole().head = e.target.name;
            this.frame.visible = true;
            this.frame.x = e.target.x - 12;
            this.frame.y = e.target.y - 12;

            this.updateHeadImg();
        }

        public initImg(): void {
            if (!RoleData.getRole().head) {
                RoleData.getRole().head = "head_1_png";
            }
            this.frame.visible = true;
            this.frame.x = this.imgArr[0].x - 12;
            this.frame.y = this.imgArr[0].y - 12;

            this.updateHeadImg();
        }


        private showHead: egret.Bitmap;
        public async updateHeadImg(): Promise<void> {
            if (!RoleData.getRole().head) {
                return;
            }

            if (!this.showHead) {
                this.showHead = new egret.Bitmap();
                this.view.addChild(this.showHead);
                this.showHead.width = 187;
                this.showHead.height = 187;
                Tool.center(this.showHead);
                this.showHead.x = App.stageWidth / 2;
                this.showHead.y = 250;
            }

            let texture = await Tool.getTextureByUrlOrName(RoleData.getRole().head);
            this.showHead.texture = texture;

        }



        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }




        public on_chooseXtBtn(e: egret.TouchEvent): void {
            this.showChooseHeadUI();
        }

        public on_chooseZdyBtn(e: egret.TouchEvent): void {

        }

        public mainAssetName(): string {
            return "spr_personal_info_view";
        }

        public dispose(): void {
            super.dispose();
            this.headBgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideChooseHeadUI, this);

            if (this.imgArr) {
                for (let i = 0; i < this.imgArr.length; i++) {
                    this.imgArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touImg, this);
                }
            }
        }
    }
}