/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 商城的每一个小块
 */


module kelvin.texas {

    export class ShopMinUI extends BasePanel {
        public constructor(data: ShopInfoIF) {
            super();

            this.data = data;
            this.createGameScene();

        }

        private data: ShopInfoIF;

        private goldTxt: egret.TextField;

        private rmbTxt: egret.TextField;


        private buyBtn: starlingswf.SwfButton;

        private createGameScene(): void {
            this.rmbTxt= <egret.TextField>this.buyBtn.skin.$children[1];

            this.goldTxt.text = "" + this.data.gold;
            this.rmbTxt.text = "" + this.data.rmb + "元";

        }


        public on_buyBtn(e:egret.TouchEvent):void{


        }


        public mainAssetName(): string {
            return "spr_shop_min_ui";
        }

        public dispose(): void {
            super.dispose();

        }
    }
}