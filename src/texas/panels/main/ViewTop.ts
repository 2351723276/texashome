/**
 * 
 * 
 * 
 * 主界面的上面
 * 
 */

module kelvin.texas {

    export class ViewTop extends BasePanel {

        public constructor() {
            super();


            this.createGameScene();

        }


        public nameTxt: egret.TextField;

        public uidTxt: egret.TextField;

        public goldTxt: egret.TextField;

        public scoreTxt: egret.TextField;

        public setBtn: starlingswf.SwfButton;

        public setView: starlingswf.SwfSprite;

        public huodongBtn: starlingswf.SwfButton;

        public gonggaoBtn: starlingswf.SwfButton;

        public xiaoxiBtn: starlingswf.SwfButton;

        private headImg: egret.Bitmap;

        private headSp: egret.Sprite;

        private topSclexImg: egret.Bitmap;

        private setBg:egret.Bitmap;
    
        private createGameScene(): void {

            this.setBg.touchEnabled = true;

            this.nameTxt.text = RoleData.getRole().name;
            this.goldTxt.text = "" + RoleData.getRole().gold;
            this.scoreTxt.text = "" + RoleData.getRole().scores;

            this.uidTxt.text = "" + RoleData.getRole().uid;

            this.setView.visible = false;
            EventManager.registerCmd(Events.goldChange, this.goldChange, this);

            this.initHead();


            // console.log(App.stageWidth);
            // console.log(App.stageHeight);
            // console.log(App.stageHeight / App.stageWidth);

            egret.setTimeout(() => {
                if (App.isiOS() == true) {//适配挖孔屏
                    Log.log("需要适配挖孔屏")
                    this.topSclexImg.height = this.topSclexImg.height + 50;
                    this.topSclexImg.y = -50;
                    this.y = 50;
                }
            }, this, 100)


        }

        private goldChange(): void {

            this.goldTxt.text = "" + RoleData.getRole().gold;
            this.scoreTxt.text = "" + RoleData.getRole().scores;

        }



        private async initHead(): Promise<void> {
            let headurl = RoleData.getRole().head;
            if (!headurl) {
                headurl = "head_1_png";
            }


            this.headImg = new egret.Bitmap();
            let texture = await Tool.getTextureByUrlOrName(headurl);
            this.headImg.texture = texture;
            this.headImg.width = 90;
            this.headImg.height = 90;
            this.headSp = Tool.createCircularMask(this.headImg, 10, 10);
            this.addChild(this.headSp);


        }


        public layout(): void {

        }

        public on_setBtn(e: egret.TouchEvent): void {
            this.setView.visible = !this.setView.visible;

        }

        public on_huodongBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new ActiveView());
        }

        public on_gonggaoBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new NoticeView());
        }

        public on_xiaoxiBtn(e: egret.TouchEvent): void {
            PanelTween.pushPanel(new NewsView());
        }



        public mainAssetName(): string {
            return "spr_main_top";
        }

        public dispose(): void {
            super.dispose();
            EventManager.removeCmd(Events.goldChange, this.goldChange, this);
        }

    }


}