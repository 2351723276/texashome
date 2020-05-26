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
 * 游戏赛事详情
 */
module kelvin.texas {
    export class GameBsxqUI extends BasePanel {
        public constructor(data: MatchMaxInfoIF) {
            super();
            this.data = data;
            this.createGameScene();
        }


        private data: MatchMaxInfoIF;

        private jcTxt: egret.TextField;

        private jlqTxt: egret.TextField;


        private createGameScene(): void {




            this.getJlInfo();
            this.getMzInfo();
            this.updateUI();

            this.createJlUI();
            this.createMzUI()

        }

        private mzinfoArr: MZJGBInfoIF[];

        private getMzInfo(): void {

            this.mzinfoArr = [];
            for (let i in this.data.mzTable) {
                let mindata: MZJGBInfoIF = {
                    level: this.data.mzTable[i].level,
                    blind: this.data.mzTable[i].xm + "/" + this.data.mzTable[i].dm,
                    bet: this.data.mzTable[i].qz,
                }
                this.mzinfoArr.push(mindata);
            }

        }

        private mzlistContainer: ScrollView;

        public mzminSpArr: egret.Sprite[];

        private createMzUI(): void {
            this.mzlistContainer = new ScrollView();
            this.addChild(this.mzlistContainer);
            this.mzlistContainer.x = 0;
            this.mzlistContainer.y = 400;
            this.mzlistContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
            this.mzlistContainer.scrollPolicyH = "off";

            this.mzlistContainer.setShowSize(this.width, 640);


            this.mzminSpArr = [];

            for (let i = 0; i < this.mzinfoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(70, 0, 200, 40, "" + this.mzinfoArr[i].level, 22, 0xffffff, "left");
                minsp.addChild(levelTxt);


                let ratioTxt = Tool.createTextFiled(195, 0, 200, 40, "" + this.mzinfoArr[i].blind, 22, 0xffffff, "center");
                minsp.addChild(ratioTxt);

                let rewardTxt = Tool.createTextFiled(340 - 10, 0, 200, 40, "" + this.mzinfoArr[i].bet, 22, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                if (this.mzinfoArr[i].level == this.data.mz_level) {
                    let img1 = Tool.createBitmapByName("img_img_zuoer_xuanzong", false, 30, 10);
                    minsp.addChildAt(img1, 0);

                    let blue = Tool.createBitmapByName("img_img_zuoer_xuanzkuang", false, 10, 2);
                    minsp.addChildAt(blue, 0);
                }


                if (this.mzinfoArr[i].level == this.data.apply_max_mz_level) {
                    let ximg = Tool.createBitmapByName("img_img_youer_jz", false, levelTxt.x + levelTxt.textWidth + 10, 10);
                    let text = Tool.createTextFiled(levelTxt.x + levelTxt.textWidth + 10, -2, 200, 40, "x", 22, 0xffffff, "left");
                    minsp.addChild(ximg);
                } else if (this.mzinfoArr[i].level < this.data.apply_max_mz_level) {
                    let img2 = Tool.createBitmapByName("img_img_youer_xin", false, levelTxt.x + levelTxt.textWidth + 10, 12);
                    minsp.addChild(img2);
                }

                // let line = Tool.createBitmapByName("img_img_pyqdz_mangzhu_fjiexian", false, 5, 70);

                // minsp.addChild(line);

                minsp.y = i * 60;
                this.mzlistContainer.container.addChild(minsp);
                this.mzminSpArr.push(minsp);

            }

            this.mzlistContainer.setScrollSize(this.width, this.mzinfoArr.length * 60);

        }


        private jlinfoArr: JLRatioIF[];

        private getJlInfo(): void {

            this.jlinfoArr = [];

            // this.data.moneyCircle = ["337", "36", [["1", "0.2209 "], ["2", "0.1550 "], ["3", "0.0997 "], ["4", "0.0738 "], ["5", "0.0554 "], ["6", "0.0443 "], ["7", "0.0368 "], ["8", "0.0295 "], ["9", "0.0221 "], ["12", "0.0161 "], ["15", "0.0134 "], ["18", "0.0115 "], ["21", "0.0099 "], ["24", "0.0092 "], ["27", "0.0082 "], ["36", "0.0072 "]]];


            let arr: any[] = this.data.moneyCircle[2];
            // console.log(arr);

            let allmoney = this.data.reward;

            if (allmoney < this.data.min_reward) {
                allmoney = this.data.min_reward;
            }

            for (let i = 0; i < arr.length; i++) {
                let mindata: JLRatioIF = {
                    level: arr[i][0],
                    ratio: arr[i][1],
                    reward: Number((allmoney * arr[i][1]).toFixed(2)),
                }
                if (i >= 9) {
                    let num = Number(arr[i - 1][0]) + 1;
                    mindata.level = num + "-" + arr[i][0];
                }

                this.jlinfoArr.push(mindata);
            }



        }

        private jllistContainer: ScrollView;



        public jsminSpArr: egret.Sprite[];
        private createJlUI(): void {

            this.jllistContainer = new ScrollView();
            this.addChild(this.jllistContainer);
            this.jllistContainer.x = 0;
            this.jllistContainer.y = 125;
            this.jllistContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
            this.jllistContainer.scrollPolicyH = "off";

            this.jllistContainer.width = this.width;
            this.jllistContainer.height = 200;

            this.jsminSpArr = [];

            for (let i = 0; i < this.jlinfoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(70, 0, 200, 40, this.jlinfoArr[i].level, 22, 0xffffff, "left");
                minsp.addChild(levelTxt);

                let rationum = Math.round(this.jlinfoArr[i].ratio * 10000) / 100 + "%";

                let ratioTxt = Tool.createTextFiled(195, 0, 200, 40, rationum, 22, 0xffffff, "center");
                minsp.addChild(ratioTxt);

                let rewardTxt = Tool.createTextFiled(340 - 10, 0, 200, 40, "" + this.jlinfoArr[i].reward, 22, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                // let line = Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiex", false, 5, 70);
                // minsp.addChild(line);

                minsp.y = i * 60;
                this.jllistContainer.container.addChild(minsp);
                this.jsminSpArr.push(minsp);

            }

            this.jllistContainer.setScrollSize(this.width, this.jlinfoArr.length * 60);


        }



        public updateUI(): void {
            console.log(this.data);


            let allmoney = this.data.reward;

            if (allmoney < this.data.min_reward) {
                allmoney = this.data.min_reward;
            }

            this.jcTxt.text = "" + allmoney;

            this.jlqTxt.text = this.data.moneyCircle[1];

        }



        public mainAssetName(): string {
            return "spr_game_ssxq_ui";
        }



        public dispose(): void {
            super.dispose();


        }

    }
}