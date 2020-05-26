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
 * 比赛详情的玩家UI
 */

module kelvin.texas {

    export class BsxqWjUI extends BasePanel {

        public constructor(data: MatchMaxInfoIF) {
            super(true);
            this.data = data;

            this.createGameScene();

        }

        private data: MatchMaxInfoIF;

        private listbg: egret.Bitmap;

        private csrsTxt: egret.TextField;

        private csrcTxt: egret.TextField;

        private pljfTxt: egret.TextField;


        public listContainer: ScrollView;



        private inputTxt: egret.TextField;

        private searchBtn: starlingswf.SwfButton;

        private input1: InputText;

        public clearBtn: starlingswf.SwfButton;
        private createGameScene(): void {

            this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);

            this.listbg.height = App.stageHeight - 590;

            this.listContainer = this.scrollView;
            this.addChild(this.listContainer);
            this.listContainer.x = this.listbg.x;
            this.listContainer.y = this.listbg.y + 70;
            this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;

            this.listContainer.width = this.listbg.width;
            this.listContainer.height = this.listbg.height - 20 - 70;

            this.list = new eui.List();

            this.list.width = this.listContainer.width;

            this.list.itemRenderer = BsxqWjLine;
            this.list.layout = new eui.VerticalLayout();

            Tool.replaceSwfTxt("inputTxt", this);

            this.input1 = new InputText(this.inputTxt);
            this.input1.setDefaultText("搜索玩家id");
            this.inputTxt.text = "搜索玩家id";

            this.scrollView.viewport = this.list;
            this.initDownRefresh(false);

            this.setDownRefresh(this.refreshCall.bind(this));

            this.infoArr = [];

            this.getInfoNum = 0;
            this.collection = new eui.ArrayCollection();
            this.list.dataProvider = this.collection;

            this.pljfTxt.touchEnabled = true;
            this.pljfTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toupl, this);

            this.crateSingeInfo();

            this.updateUI();

            MatchApi.getMatchRoleInfo(this.getInfoNum + 1, this.data.id, this.getInfo.bind(this))

        }


        private toupl(e: egret.TouchEvent): void {

            // PanelTween.pushPanel(new CardScoreView());
        }

        private singleUI: BsxqWjLine;
        private crateSingeInfo(): void {

            this.singleUI = new BsxqWjLine();
            this.singleUI.x = this.scrollView.x;
            this.singleUI.y = this.scrollView.y;
            this.addChild(this.singleUI);
            this.singleUI.visible = false;

        }


        private singleGetSuccess(data: any): void {

            let min: WJInfoIF = {
                name: data.data[1],
                uid: data.data[0],
                heart: data.data[4]-1,
                score: data.data[3],
                rank: 1,
                money: data.data[2],
                matchtype: this.data.matchtype,
                matchId: this.data.id,
            }

            this.singleUI.setData(min);
            this.scrollView.visible = false;
            this.singleUI.visible = true;


        }
        private gthImg: egret.Bitmap;
        public updateUI(): void {
            this.csrsTxt.text = "" + this.data.havepeople;

            this.csrcTxt.text = String(this.data.cur_buy_count);

            if (this.data.matchtype == "wcaa") {
                this.pljfTxt.visible = false;
                this.gthImg.visible = false;
            }


        }

        public refreshCall(): void {


            if (this.infoArr.length >= this.data.havepeople) {
                this.downRefreshOver();
                // ApiState.showText("当前房间玩家已经全部展示完毕");
            } else {
                RefreshUI.ins.show(App.stageWidth / 2, App.stageHeight - 300);
                this.getInfoNum++;
                MatchApi.getMatchRoleInfo(this.getInfoNum + 1, this.data.id, this.getInfo.bind(this));
            }

        }

        private infoArr: WJInfoIF[];


        private getInfoNum: number;
        private getInfo(data: any): void {
            let infoArr = [];

            // = [{ heart: 3, name: "2142353535", score: 20, money: 123544, rank: 1, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 2, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 3, matchtype: "common" },
            // { heart: 0, name: "2142353f d 535", score: 20, money: 123544, rank: 4, matchtype: "common" },
            // { heart: 4, name: "2142353535", score: 20, money: 123544, rank: 5, matchtype: "common" },
            // { heart: 12, name: "2142353535", score: 20, money: 123544, rank: 6, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 7, matchtype: "common" },
            // { heart: 8, name: "2142353535", score: 20, money: 123544, rank: 8, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 9, matchtype: "common" },
            // { heart: 0, name: "214235qqqqqq3535", score: 20, money: 123544, rank: 10, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 11, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 12, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 13, matchtype: "common" },
            // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 14, matchtype: "common" },
            // ];

            for (let i = 0; i < data.data.length; i++) {
                let min: WJInfoIF = {
                    name: data.data[i][1],
                    uid: data.data[i][0],
                    heart: data.data[i][4] - 1,
                    score: data.data[i][3],
                    rank: i,
                    money: data.data[i][2],
                    matchtype: this.data.matchtype,
                    matchId: this.data.id,
                    serverstate:this.data.serverstate,
                }
                infoArr.push(min);
            }


            for (let i = 0; i < infoArr.length; i++) {
                this.infoArr.push(infoArr[i]);
            }
            
            this.createListUI(infoArr);

        }


        public minSpArr: egret.Sprite[];

        private list: eui.List;

        private collection: eui.ArrayCollection;

        public createListUI(infoArr: WJInfoIF[]): void {

            this.minSpArr = [];


            for (let i = 0; i < infoArr.length; i++) {
                this.collection.addItem(infoArr[i]);
            }

            if (this.getInfoNum > 0) {
                this.downRefreshOver();
                // ApiState.showText("刷新成功");
            }


        }


        public on_clearBtn(e: egret.TouchEvent): void {

            this.scrollView.visible = true;
            this.singleUI.visible = false;
            this.inputTxt.text = "搜索玩家id";

        }

        public on_searchBtn(e: egret.TouchEvent): void {

            if (this.inputTxt.text == "搜索玩家id") {
                this.scrollView.visible = true;
                this.singleUI.visible = false;
            } else {
                MatchApi.getPlayerInfo(this.inputTxt.text, this.data.id, this.singleGetSuccess.bind(this), this.singleGetError.bind(this));
            }

        }

        public singleGetError(data: any): void {

            if (data.state == -4) {
                ApiState.showText("该玩家不存在，请输入正确的玩家id");
            }

        }

        public mainAssetName(): string {
            return "spr_bsxq_wj_ui";
        }


        public dispose(): void {
            super.dispose();
            this.pljfTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.toupl, this);
            // for (let i = 0; i < this.minSpArr.length; i++) {
            //     this.minSpArr[i].dispo
            // }

        }

    }
}