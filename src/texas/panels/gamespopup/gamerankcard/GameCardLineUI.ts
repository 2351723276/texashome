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
 * 
 * 
 * 
 * 
 * 
 * 牌局回顾的每一行
 */

module kelvin.texas {
    export class GameCardLineUI extends BasePanel {
        public constructor(data: GameCardLineIF, selfDis: number, havenum: number) {
            super();

            this.data = data;
            this.selfDis = selfDis;
            this.havenum = havenum;

            this.createGameScene();

        }

        private data: GameCardLineIF;

        private discardTxt: egret.TextField;

        private nameTxt: egret.TextField;

        private scoreTxt: egret.TextField;


        private cardType: string[];

        private createGameScene(): void {

            this.cardType = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];

            this.nameTxt.text = StrUtil.cutOutName(this.data.name, 5);

            this.scoreTxt.text = "" + this.data.score;
            if (!this.data.score) {
                this.scoreTxt.text = "0";
            }  

            if (this.data.score >= 0) {
                this.scoreTxt.textColor = 0xff0000;
            } else {
                this.scoreTxt.textColor = 0x66ff00;
            }
            this.discardTxt.visible = true;
            if (this.data.isdis == -1) {
                this.discardTxt.text = "弃牌";
            } else if (this.data.isdis == 0) {
                this.discardTxt.text = "";
            } else {
                this.discardTxt.text = this.cardType[this.data.isdis - 1];

            }

            this.createMycard();


            this.createCommonCard();

            this.createHead();



        }


        private selfDis: number;


        private havenum: number;

        private createMycard(): void {


            for (let i = 0; i < this.data.mycard.length; i++) {
                let str = this.data.mycard[i];
                if (this.data.uid == RoleData.getRole().uid) {

                } else {

                    if (this.data.isdis < 1) { //这个玩家弃牌
                        str = "-1";
                    } else {
                        if (this.selfDis < 1) { //我弃牌了
                            if (this.havenum < 2) {
                                str = "-1";
                                this.discardTxt.text = "";
                            } else { //不变

                            }
                        }
                    }
                }

                // if (this.data.isdis < 1 && ) {
                //     str = "-1";
                // }

                let cardimg = Tool.createBitmapByName("img_pk_" + str);
                cardimg.width = 52;
                cardimg.height = 72;
                cardimg.x = i * 55 + 140;
                cardimg.y = 30;

                this.addChild(cardimg);

            }

        }


        private createCommonCard(): void {
            for (let i = 0; i < this.data.commoncard.length; i++) {
                let str = this.data.commoncard[i];

                let cardimg = Tool.createBitmapByName("img_pk_" + str);
                cardimg.width = 52;
                cardimg.height = 72;
                cardimg.x = i * 55 + 260;
                cardimg.y = 30;

                this.addChild(cardimg);

            }
        }

        private headsp: egret.Sprite;

        private async createHead(): Promise<void> {
            if (this.data.headurl == null) {
                this.data.headurl = "head_1_png";
            }

            let head = new egret.Bitmap();
            head.width = 80;
            head.height = 80;
            head.texture = await Tool.getTextureByUrlOrName(this.data.headurl);
            this.headsp = Tool.createCircularMask(head);
            this.addChild(this.headsp);
            this.headsp.x = 22;
            this.headsp.y = 10;
        }






        public mainAssetName(): string {
            return "spr_game_card_line_ui";
        }

        public dispose(): void {
            super.dispose();

        }

    }
}