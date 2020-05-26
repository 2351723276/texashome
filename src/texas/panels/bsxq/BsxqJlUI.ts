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
 * 比赛详情的奖励UI
 */

module kelvin.texas {

    export class BsxqJlUI extends BasePanel {

        public constructor(data: MatchMaxInfoIF) {
            super();
            this.data = data;

            this.createGameScene();

        }

        private data: MatchMaxInfoIF;

        private listbg: egret.Bitmap;

        private alljcTxt: egret.TextField;

        private jlqTxt: egret.TextField;


        private listContainer: ScrollView;

        private listimg: eui.Image;

        private container: eui.Group;

        private createGameScene(): void {

            this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);

            this.listbg.height = App.stageHeight - 590;


            this.listContainer = new ScrollView();
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

            this.scrollView = this.listContainer;


            this.updateUI();
        }

        public updateUI(): void {

            let allmoney = this.data.reward;

            if (allmoney < this.data.min_reward) {
                allmoney = this.data.min_reward;
            }

            this.alljcTxt.text = "" + allmoney;


            if (this.data.poker_score_rate > 0) {
                if (this.data.matchtype == "wcaa") {
                    this.alljcTxt.text = this.alljcTxt.text;
                } else {

                    console.log("牌力积分系数为------", this.data.poker_score_rate);

                    console.log("已经消耗的牌力积分------", this.data.reward_poker_score);
                    this.alljcTxt.text = this.alljcTxt.text + "（含牌力积分：" + (allmoney * this.data.poker_score_rate - this.data.reward_poker_score) + "）";
                }

            }

            this.jlqTxt.text = this.data.moneyCircle[1];


            this.getInfo();
            this.createListUI();
        }

        private infoArr: JLRatioIF[];

        private getInfo(): void {
            this.infoArr = [];
            // this.infoArr = [{ level: "1", ratio: 10.20, reward: 12354.55 },
            // { level: "2", ratio: 11.20, reward: 12354.55 },
            // { level: "3", ratio: 12.20, reward: 12354.55 },
            // { level: "4", ratio: 13.20, reward: 12354.55 },
            // { level: "5", ratio: 14.20, reward: 12354.55 },
            // { level: "6", ratio: 15.20, reward: 12354.55 },
            // { level: "7", ratio: 16.20, reward: 12354.55 },
            // { level: "8", ratio: 17.20, reward: 12354.55 },
            // { level: "9", ratio: 12.20, reward: 12354.55 },
            // { level: "10", ratio: 1340.20, reward: 12354.55 },
            // { level: "11", ratio: 1340.20, reward: 12354.55 },
            // { level: "12", ratio: 13430.20, reward: 12354.55 },
            // { level: "13", ratio: 1110.20, reward: 12354.55 },
            // { level: "14", ratio: 1067.20, reward: 12354.55 },
            // { level: "15", ratio: 17680.20, reward: 12354.55 },
            // { level: "16", ratio: 134650.20, reward: 12354.55 },
            // { level: "17", ratio: 16870.20, reward: 12354.55 },
            // { level: "18", ratio: 1435340.20, reward: 12354.55 },
            // { level: "19", ratio: 14360.20, reward: 12354.55 },
            // { level: "20", ratio: 1054345.20, reward: 12354.55 },
            // { level: "21", ratio: 154350.20, reward: 12354.55 },
            // { level: "22", ratio: 17970.20, reward: 12354.55 },
            // { level: "23", ratio: 105345.20, reward: 12354.55 },
            // { level: "24", ratio: 105464.20, reward: 12354.55 },];

            // this.data.moneyCircle = ["337", "36", [["1", "0.2209 "], ["2", "0.1550 "], ["3", "0.0997 "], ["4", "0.0738 "], ["5", "0.0554 "], ["6", "0.0443 "], ["7", "0.0368 "], ["8", "0.0295 "], ["9", "0.0221 "], ["12", "0.0161 "], ["15", "0.0134 "], ["18", "0.0115 "], ["21", "0.0099 "], ["24", "0.0092 "], ["27", "0.0082 "], ["36", "0.0072 "]]];


            let arr: any[] = this.data.moneyCircle[2];
            // console.log(arr);

            let allmoney = this.data.reward;

            if (allmoney < this.data.min_reward) {
                allmoney = this.data.min_reward;
            }


            let realmoney: number;
            if (this.data.matchtype == "wcaa") {
                realmoney = allmoney;
            } else {
                realmoney = allmoney - this.data.reward_poker_score;
            }

         



            for (let i = 0; i < arr.length; i++) {
                let mindata: JLRatioIF = {
                    level: arr[i][0],
                    ratio: arr[i][1],
                    reward: Number((realmoney * arr[i][1]).toFixed(2)),
                }

                if (this.data.matchtype == "wcaa") {

                } else {
                    mindata.reward = Math.floor(realmoney * arr[i][1]);
                }

               

                if (i >= 9) {
                    let num = Number(arr[i - 1][0]) + 1;
                    mindata.level = num + "-" + arr[i][0];
                }
                this.infoArr.push(mindata);
            }


        }


        public minSpArr: egret.Sprite[];


        public createListUI(): void {
            if (this.minSpArr) {
                for (let i = 0; i < this.minSpArr.length; i++) {
                    Tool.removeFromParent(this.minSpArr[i]);
                }
            }

            this.minSpArr = [];


            for (let i = 0; i < this.infoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(25, 29, 200, 40, this.infoArr[i].level, 26, 0xffffff, "left");
                minsp.addChild(levelTxt);

                let rationum = Math.round(this.infoArr[i].ratio * 10000) / 100 + "%";

                let ratioTxt = Tool.createTextFiled(221, 29, 200, 40, "" + rationum, 26, 0xffffff, "center");
                minsp.addChild(ratioTxt);


                let rewardTxt = Tool.createTextFiled(420, 29, 200, 40, "" + this.infoArr[i].reward, 26, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                if(this.data.matchtype == "common"){
                    rewardTxt.text = rewardTxt.text + "参赛积分"; 
                }


                let line = Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiex", false, 5, 70);


                minsp.addChild(line);


                minsp.y = i * 70;
                this.container.addChild(minsp);
                this.minSpArr.push(minsp);

            }

            this.listimg.height = this.infoArr.length * 70;

        }



        public mainAssetName(): string {
            return "spr_bsxq_jl_ui";
        }


        public dispose(): void {
            super.dispose();


        }

    }
}