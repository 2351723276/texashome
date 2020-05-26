/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 活动条
 */
module kelvin.texas {

    export class ActiveLineUI extends BasePanel {
        public constructor(data: ActiveInfoIF) {
            super();

            this.data = data;
            this.createGameScene();

        }

        private data: ActiveInfoIF;

        private timeTxt: egret.TextField;

        private titleTxt: egret.TextField;
        private contentTxt: egret.TextField;
        private nameTxt: egret.TextField;

        private icon: egret.Bitmap;

        private downLine: egret.Bitmap;

        private activeimg: egret.Bitmap;

        public contentH: number;
        private createGameScene(): void {
            this.contentH = 0;

            this.timeTxt.text = this.data.time;

            this.nameTxt.text = this.data.name;
            this.titleTxt.text = "【" + this.data.title + "】";
            Tool.removeFromParent(this.contentTxt);

            this.contentTxt = Tool.createTextFiled(53, 578, 612, null, "", 24, 0xffffff, 'left', "top");
            this.addChild(this.contentTxt);

            this.contentTxt.text = this.data.content;
            this.contentH = this.contentTxt.textHeight;

            this.downLine.y = this.downLine.y + this.contentH - 24;
            this.nameTxt.y = this.nameTxt.y + this.contentH - 24;
            this.icon.y = this.icon.y + this.contentH - 24;


            Tool.removeFromParent(this.activeimg);

            this.activeimg = new egret.Bitmap();
             this.activeimg.width = 720;
            this.activeimg.height = 420;
            this.addChild(this.activeimg);
            this.activeimg. y =67.5;
           

            this.createImg();
        }

        private async createImg(): Promise<void> {
            this.activeimg.texture = await Tool.getTextureByUrlOrName(this.data.imgurl);
            this.activeimg.width = 720;
            this.activeimg.height = 420;
        }


        public mainAssetName(): string {
            return "spr_active_line_ui";
        }

        public dispose(): void {
            super.dispose();

        }
    }
}