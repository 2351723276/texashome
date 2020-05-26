module kelvin.texas {
    export class GameCardUI extends BasePanel {
        public constructor(cardData: any) {
            super(true);

            this.cardData = cardData;
            this.createGameScene();

        }

        private cardData: any;

        private pageTxt: egret.TextField;

        private leftBtn: starlingswf.SwfButton;

        private rightBtn: starlingswf.SwfButton;

        private maxLeftBtn: starlingswf.SwfButton;

        private maxRightBtn: starlingswf.SwfButton;

        private createGameScene(): void {

            this.scrollView.setShowSize(this.width, this.height - 200);
            this.scrollView.y = 80;

            egret.setTimeout(() => {
                this.getInfo();

                this.updateUI();
            }, this, 100)

        }


        private dataArr: GameCardLineIF[];

        private cutDateArr: GameCardLineIF[][];

        private selfDis: number[];

        private haveNum: number[];

        private linenum: number;



        private getInfo(): void {

            this.linenum = 6;
            this.dataArr = [];

            // this.dataArr = [{ name: "这是一个名字啊1", headurl: "head_1_png", score: 20, isdis: -1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_2_png", score: -20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 3, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_2_png", score: -20, isdis: 4, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: -20, isdis: 5, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_5_png", score: -20, isdis: 6, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_4_png", score: 20, isdis: 7, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 8, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: -20, isdis: 9, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_6_png", score: -20, isdis: 10, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: -1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_2_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_3_png", score: 20, isdis: 1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 5, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 6, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 7, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
            // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 8, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },]

            // this.cardData = { "1": { "comCards": [206, 303, 402, 205, 211], "player_info": { "100013": { "uid": 100013, "name": "游客100013", "head": null, "cards": [107, 312], "score": -20, "card_type": -1 }, "100014": { "uid": 100014, "name": "游客100014", "head": null, "cards": [406, 411], "score": -30, "card_type": -1 }, "100015": { "uid": 100015, "name": "游客100015", "head": null, "cards": [204, 407], "score": -10, "card_type": -1 }, "100017": { "uid": 100017, "name": "游客100017", "head": null, "cards": [105, 408], "score": 2040, "card_type": 2 }, "100024": { "uid": 100024, "name": "游客100024", "head": null, "cards": [309, 412], "score": -2000, "card_type": 1 }, "100036": { "uid": 100036, "name": "游客100036", "head": null, "cards": [409, 202], "score": -10, "card_type": -1 } } } }


            // RoleData.getRole().uid = "100015";

            this.cutDateArr = [];
            this.selfDis = [];
            this.haveNum = [];

            let index: number = -1;


            for (let i in this.cardData) {
                index++;
                let arr = [];
                this.cutDateArr.push(arr);
                let selfDis = -1;

                let haveNum = 0;

                for (let k in this.cardData[i].player_info) {
                    let serverdata = this.cardData[i].player_info[k];

                    let mindata: GameCardLineIF = {
                        name: serverdata.name,
                        uid: serverdata.uid,
                        headurl: serverdata.head,
                        isdis: serverdata.card_type,
                        mycard: serverdata.cards,
                        score: serverdata.score,
                        commoncard: this.cardData[i].comCards,
                    }
                    if (serverdata.uid == RoleData.getRole().uid) {
                        selfDis = serverdata.card_type;
                    }
                    if (serverdata.card_type > 0) {
                        haveNum++;
                    }
                    if (mindata.commoncard.length < 5) {
                        for (let j = 0; j < 5; j++) {
                            mindata.commoncard.push("-1");
                            if (mindata.commoncard.length >= 5) {
                                break;
                            }
                        }
                    }



                    this.cutDateArr[index].push(mindata);
                }
                this.selfDis.push(selfDis);
                this.haveNum.push(haveNum);
            }



            // for (let i = 0; i < this.dataArr.length; i++) {
            //     if (i % this.linenum == 0) {


            //     }

            //     this.cutDateArr[index].push(this.dataArr[i]);
            // }

            // this.cutDateArr.reverse();

            if (this.cutDateArr.length == 0) {
                this.cutDateArr.push([]);
            }

            this.pageindex = this.cutDateArr.length - 1;

        }



        private uiArr: GameCardLineUI[];

        private pageindex: number;
        private updateUI(): void {

            this.pageTxt.text = "" + (this.pageindex + 1) + "/" + this.cutDateArr.length;

            if (this.uiArr) {
                for (let i = 0; i < this.uiArr.length; i++) {
                    this.uiArr[i].dispose();
                }
            }

            this.uiArr = [];

            let arr: GameCardLineIF[] = this.cutDateArr[this.pageindex];

            for (let i = 0; i < arr.length; i++) {


                let lineui = new GameCardLineUI(arr[i], this.selfDis[this.pageindex], this.haveNum[this.pageindex]);
                this.scrollView.container.addChild(lineui);
                lineui.y = i * 140 + 20;
                lineui.x = 15;
                this.uiArr.push(lineui);
            }

            this.scrollView.setScrollSize(this.width, arr.length * 140);


        }


        public on_leftBtn(e: egret.TouchEvent): void {
            let index = this.pageindex - 1;

            if (index < 0) {
                ApiState.showText("已经是第一页了");
                return;
            }

            this.pageindex = index;
            this.updateUI();

        }


        public on_rightBtn(e: egret.TouchEvent): void {
            let index = this.pageindex + 1;

            if (index > this.cutDateArr.length - 1) {
                ApiState.showText("已经是最后一页了");
                return;
            }

            this.pageindex = index;
            this.updateUI();
        }



        public on_maxLeftBtn(e: egret.TouchEvent): void {
            this.pageindex = 0;
            this.updateUI();
        }



        public on_maxRightBtn(e: egret.TouchEvent): void {
            this.pageindex = this.cutDateArr.length - 1;
            this.updateUI();
        }


        public mainAssetName(): string {
            return "spr_game_card_ui";
        }

        public dispose(): void {
            super.dispose();

        }

    }
}