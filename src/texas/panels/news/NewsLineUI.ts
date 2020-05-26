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
 * 
 * 
 * 消息的每一行
 */

module kelvin.texas {

    export class NewsLineUI extends BasePanel {
        public constructor(data: NewsInfoIF) {
            super();

            this.data = data;
            this.createGameScene();

        }


        private data: NewsInfoIF;

        private xtImg: egret.Bitmap;

        private sngImg: egret.Bitmap;

        private mttImg: egret.Bitmap;

        private timeTxt: egret.TextField;

        private titleTxt: egret.TextField;

        private contentTxt: egret.TextField;

        private stateTxt: egret.TextField;

        private jrpjBtn: starlingswf.SwfButton;

        private ckxqBtn: starlingswf.SwfButton;


        private createGameScene(): void {
            this.initState();

            this.titleTxt.text = "【" + this.data.title + "】 " + this.data.content;
            this.contentTxt.text = "";


            if (this.data.type == "sng") {
                this.sngImg.visible = true;
            } else if (this.data.type == "mtt") {
                this.mttImg.visible = true;
            } else {
                this.xtImg.visible = true;
                this.ckxqBtn.visible = true;
            }

            this.timeTxt.text = this.data.time;

            // if (this.data.state) {
            //     if (this.data.state == 0) {
            //         this.stateTxt.text = "正在报名";
            //         this.stateTxt.textColor = 0x8EA10;
            //     } else if (this.data.state == 1) {
            //         this.stateTxt.text = "正在游戏";
            //         this.stateTxt.textColor = 0x8EA10;
            //         this.jrpjBtn.visible = true;
            //     } else if (this.data.state == 2) {
            //         this.stateTxt.text = "正在休息";
            //         this.stateTxt.textColor = 0x8EA10;
            //     } else if (this.data.state == 5 || this.data.state == 4 || this.data.state == 6) {
            //         this.stateTxt.text = "比赛结束";
            //         this.stateTxt.textColor = 0xC50000;
            //     }
            // }



        }


        private initState(): void {

            this.jrpjBtn.visible = false;
            this.ckxqBtn.visible = false;
            this.sngImg.visible = false;
            this.mttImg.visible = false;
            this.xtImg.visible = false;

        }

        public on_jrpjBtn(e: starlingswf.SwfButton): void {

        }

        public on_ckxqBtn(e: starlingswf.SwfButton): void {
            lzm.Alert.alert(new NewsXqPopup(this.data));
        }

        public mainAssetName(): string {
            return "spr_news_line_ui";
        }

        public dispose(): void {
            super.dispose();

        }
    }
}