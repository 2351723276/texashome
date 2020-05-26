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
 * 战绩详情界面
 */

module kelvin.texas {

    export class RankInfoView extends BasePanel {
        public constructor(data: any) {
            super(true);

            this.data = data;


            this.switchData();
            this.createGameScene();

        }

        private switchData(): void {
            // this.data = {
            //     title: "这是标题",
            //     time: "2020/2/4 10:10:10",
            //     matchTime: "01:00:00",
            //     matchJoinNum: "100/100",
            //     matchJackpot: "10000",
            //     matchWin: "10",
            //     matchLive: "20",
            //     allPeople: "100",
            //     list: [{ uid: "100010", rank: 1, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 2, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 3, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 4, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 5, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 6, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 7, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 8, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 9, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 10, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 11, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 12, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 13, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 14, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 15, headurl: null, name: "名字而已", result: "最终结果" },
            //     { uid: "100010", rank: 16, headurl: null, name: "名字而已", result: "最终结果" },],
            // }
        }


        private data: RankDeInfoIF;

        private bg: egret.Bitmap;


        private titleTxt: egret.TextField;

        private timeTxt: egret.TextField;

        private matchTimeTxt: egret.TextField;

        private matchJoinNumTxt: egret.TextField;

        private matchJackpotTxt: egret.TextField;

        private matchWinTxt: egret.TextField;

        private matchLiveTxt: egret.TextField;

        private allPeopleTxt: egret.TextField;

        private selfLine: RankInfoListLine;

        private createGameScene(): void {
            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);



            MatchApi.getMatchZhanji(this.data.zhanjiId, this.getInfo.bind(this))


        }


        private selfData: RankDeInfoLineIF;
        public getInfo(data: any): void {



            this.data.title = data.zhanji.match.name;

            this.data.time = DateUtils.timestampToTime(data.zhanji.match.match_start_time);
            // this.data.matchTime
            this.data.matchJoinNum = data.zhanji.match.people;
            this.data.matchJackpot = data.zhanji.match.cur_buy_count;
            this.data.allPeople = Object.keys(data.roles).length;

            this.data.matchTime = data.zhanji.endTime - data.zhanji.match.match_start_time;

            let list: RankDeInfoLineIF[] = [];

            for (let i in data.zhanji.logs) {
                let minlist: RankDeInfoLineIF = {
                    rank: Number(i),
                    reward: data.zhanji.logs[i].reward,
                    uid: data.zhanji.logs[i].uid,
                    name: data.roles[data.zhanji.logs[i].uid].name,
                    headurl: data.roles[data.zhanji.logs[i].uid].head,
                    result: "",
                    matchtype: "",
                    reward_type: this.data.reward_type,
                }

                if (data.zhanji.match.type1 == 1) {
                    minlist.matchtype = "common";
                } else {
                    minlist.matchtype = "wcaa";
                }
                list.push(minlist);
            }

            this.data.list = list;

            this.titleTxt.text = this.data.title;
            this.timeTxt.text = this.data.time;

            this.matchJoinNumTxt.text = this.data.matchJoinNum;

            let reward =  data.zhanji.match.reward;
            if(reward < data.zhanji.match.min_reward){
                reward = data.zhanji.match.min_reward;
            }
            this.matchJackpotTxt.text =reward;
            this.matchWinTxt.text = this.data.matchWin;
            this.matchLiveTxt.text = this.data.matchLive;
            // this.allPeopleTxt.text = "玩家（" + this.data.allPeople + "）";
            this.allPeopleTxt.text = "玩家";

            let dateUtil = new DateUtils();

            this.matchTimeTxt.text = dateUtil.getFormatBySecond(this.data.matchTime);


            this.selfData = {
                uid: RoleData.getRole().uid,
                headurl: RoleData.getRole().head,
                rank: this.data.rank,
                reward: this.data.reward,
                result: "",
                name: RoleData.getRole().name,
                matchtype: "",
                reward_type: this.data.reward_type,
            }
            if (data.zhanji.match.type1 == 1) {
                this.selfData.matchtype = "common";
            } else {
                this.selfData.matchtype = "wcaa";
            }

            this.selfLine = new RankInfoListLine();
            this.selfLine.setData(this.selfData);
            this.addChild(this.selfLine);
            this.selfLine.y = 435;
            this.createList();
        }

        private list: eui.List;

        private createList(): void {

            this.list = new eui.List();

            // this.list.y = 450;
            this.list.width = App.stageWidth;
            // this.list.height = App.stageHeight - 450;

            this.list.itemRenderer = RankInfoListLine;

            var collection = new eui.ArrayCollection();
            for (var i = 0; i < this.data.list.length; i++) {
                collection.addItem(this.data.list[i]);
            }
            this.list.layout = new eui.VerticalLayout();
            this.list.dataProvider = collection;

            this.scrollView.y = 435 + 120;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 435 - 120);
            this.scrollView.viewport = this.list;


        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_rank_info_view";
        }

        public dispose(): void {
            super.dispose();

        }

    }
}