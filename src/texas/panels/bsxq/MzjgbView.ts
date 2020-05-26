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
 * 盲注结构表
 */


module kelvin.texas {

    export class MzjgbView extends BasePanel {

        public constructor(data: MatchMaxInfoIF) {
            super();
            this.data = data;

            this.createGameScene();

        }

        private data: MatchMaxInfoIF;
        private bg: egret.Bitmap;


        private listbg: egret.Bitmap;


        private listContainer: eui.Scroller;

        private listimg: eui.Image;

        private container: eui.Group;

        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);

            this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);

            this.listbg.height = App.stageHeight - 200;

            this.listContainer = new eui.Scroller();
            this.addChild(this.listContainer);
            this.listContainer.x = this.listbg.x;
            this.listContainer.y = this.listbg.y;
            this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;

            this.listContainer.width = this.listbg.width;
            this.listContainer.height = this.listbg.height - 20;

            this.listimg = new eui.Image();
            this.listimg.width = this.listContainer.width;
            this.container = new eui.Group();
            this.container.addChild(this.listimg);

            this.listContainer.viewport = this.container;

            this.getInfo();
            this.createListUI();

        }


        private infoArr: MZJGBInfoIF[];

        private getInfo(): void {
            this.infoArr = [];
            // this.infoArr = [{ level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },
            // { level: 1, blind: "50/100", bet: 100 },];


            for (let i in this.data.mzTable) {
                let mindata: MZJGBInfoIF = {
                    level: this.data.mzTable[i].level,
                    blind: this.data.mzTable[i].xm + "/" + this.data.mzTable[i].dm,
                    bet: this.data.mzTable[i].qz,
                }
                this.infoArr.push(mindata);

            }




        }


        public minSpArr: egret.Sprite[];


        public createListUI(): void {

            this.minSpArr = [];

            for (let i = 0; i < this.infoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(30, 15, 200, 40, "" + this.infoArr[i].level, 26, 0xffffff, "left");
                minsp.addChild(levelTxt);

                let ratioTxt = Tool.createTextFiled(221, 15, 200, 40, "" + this.infoArr[i].blind, 26, 0xffffff, "center");
                minsp.addChild(ratioTxt);

                let rewardTxt = Tool.createTextFiled(415, 15, 200, 40, "" + this.infoArr[i].bet, 26, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                let line = Tool.createBitmapByName("img_img_pyqdz_mangzhu_fjiexian", false, 5, 70);

                minsp.addChild(line);
                if (this.infoArr[i].level == this.data.apply_max_mz_level) {
                    let ximg = Tool.createBitmapByName("img_img_youer_jz", false, levelTxt.x + levelTxt.textWidth + 14, 26);
                    let text = Tool.createTextFiled(levelTxt.x + levelTxt.textWidth + 14, 15, 200, 40, "x", 22, 0xffffff, "left");
                    minsp.addChild(ximg);
                } else if (this.infoArr[i].level < this.data.apply_max_mz_level) {
                    let img2 = Tool.createBitmapByName("img_img_youer_xin", false, levelTxt.x + levelTxt.textWidth + 10, 27);
                    minsp.addChild(img2);
                }

                minsp.y = i * 70;
                this.container.addChild(minsp);
                this.minSpArr.push(minsp);

            }

            this.listimg.height = this.infoArr.length * 70;

        }

        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)

            PanelTween.popPanel();

        }

        public mainAssetName(): string {
            return "spr_mzjgb_view";
        }



        public dispose(): void {
            super.dispose();


        }


    }
}