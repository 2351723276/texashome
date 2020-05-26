/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 个人信息主页
 */

module kelvin.texas {

    export class PersonalView extends BasePanel {
        public constructor() {
            super();


            this.createGameScene();

        }

        private changeHeadBtn: starlingswf.SwfButton;

        private changeImg: starlingswf.SwfButton;

        private nameTxt: egret.TextField;

        private idTxt: egret.TextField;

        private zjBtn: starlingswf.SwfButton;

        private szBtn: starlingswf.SwfButton;

        private bbBtn: starlingswf.SwfButton;

        private hjxxdjBtn: starlingswf.SwfButton;

        private bg: egret.Bitmap;

        public view: starlingswf.SwfSprite;

        public bgSp: egret.Sprite;

        private createGameScene(): void {


            this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);
            this.bgSp.touchEnabled = true;
            this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            this.addChildAt(this.bgSp, 0);

            this.view = <starlingswf.SwfSprite>this.$children[1];


            this.bg.touchEnabled = true;

            this.changeHeadBtn.isScale = false;

            this.nameTxt.text = RoleData.getRole().name;

            this.idTxt.text = RoleData.getRole().uid;

            this.view.visible = false;

            this.view.y = (App.stageHeight - this.view.height) / 2;

            this.initHead();
        }

        private headImg: egret.Bitmap;

        private headSp: egret.Sprite;
        private async initHead(): Promise<void> {
            let headurl = RoleData.getRole().head;
            if (!headurl) {
                headurl = "head_1_png";
            }


            this.headImg = new egret.Bitmap();
            let texture = await Tool.getTextureByUrlOrName(headurl);
            this.headImg.texture = texture;
            this.headImg.width = this.changeHeadBtn.width - 20;
            this.headImg.height = this.changeHeadBtn.height - 20;
            this.headSp = Tool.createCircularMask(this.headImg, this.changeHeadBtn.x + 10, this.changeHeadBtn.y + 10);
            this.view.addChild(this.headSp);


        }


        public show(): void {
            this.view.x = - this.view.width;
            this.view.visible = true;

            egret.Tween.get(this.view).to({ x: 0 }, 250);

        }

        public hide(): void {
            egret.Tween.get(this.view).to({ x: -this.view.width }, 250).call(() => {
                this.dispose();
                EventManager.dispatchCmd(Events.gotoMatchView, null);
            }, this)
        }


        public on_changeHeadBtn(e: egret.TouchEvent): void {
            // PanelTween.pushPanel(new PersonalInfo());
        }

        public on_zjBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new RankView());

        }

        public on_bbBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new PackView(1));

        }


        public on_hjxxdjBtn(e: egret.TouchEvent): void {
            lzm.Alert.alert(new GetPrizeView());
        }


        public on_szBtn(e: egret.TouchEvent): void {

            PanelTween.pushPanel(new SetView());

        }




        public mainAssetName(): string {
            return "spr_personal_view";
        }

        public dispose(): void {
            super.dispose();
            this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
        }
    }
}