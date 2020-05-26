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
 * 消息详情弹窗
 */


module kelvin.texas {

    export class NewsXqPopup extends BasePanel {
        public constructor(data: NewsInfoIF) {
            super();

            this.data = data;
            this.createGameScene();

        }
        private data: NewsInfoIF;


        private titleTxt: egret.TextField;

        private contentTxt: egret.TextField;

        private goldTxt: egret.TextField;



        private getBtn: starlingswf.SwfButton;

        public createGameScene(): void {

            this.contentTxt.text = this.data.content;
            this.goldTxt.text = "";
            this.contentTxt.verticalAlign = "middle";

        }


        public on_getBtn(e:egret.TouchEvent):void{
            this.dispose();
        }

        public mainAssetName(): string {
            return "spr_news_xq_view";
        }

        public dispose(): void {
            super.dispose();

        }

    }
}