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
 * 大师分排行榜
*/

module kelvin.texas {

    export class MasterRankView extends BasePanel {
        public constructor() {
            super();


            this.createGameScene();

        }


        public timeTxt: egret.TextField;

        public backBtn: starlingswf.SwfButton;

        public ruleBtn: starlingswf.SwfButton;


        private rankUI: MasterRankUI;

        private ruleUI: MasterRankRule;

        private createGameScene(): void {

            this.rankUI = new MasterRankUI();
            this.addChild(this.rankUI);
            this.rankUI.x = 58;
            this.rankUI.y = 175;

            this.ruleUI = new MasterRankRule();
            this.addChild(this.ruleUI);
            this.ruleUI.visible = false;
            this.ruleUI.x = 58;
            this.ruleUI.y = 175;

            this.on_backBtn(null);

            MatchApi.getMasterPoints(this.getInfo.bind(this));

        }

        private infoarr: MasterRankIF[];

        public getInfo(data: any): void {

            this.infoarr = [];
            let selfData: MasterRankIF;
            if (data.myData) {
                selfData = {
                    name: data.myData.name,
                    uid: data.myData.uid,
                    score: data.myData.val,
                    time: DateUtils.timestampToTime(data.myData.time).slice(5),
                    rank: -1,
                }
                if (data.myData.time.time == false || data.myData.time.time == "false") {
                    selfData.time = "无";
                }
            }

    
            if (data.masterPoints) {
                for (let i = 0; i < data.masterPoints.length; i++) {
                    let min: MasterRankIF = {
                        name: data.masterPoints[i].name,
                        uid: data.masterPoints[i].uid,
                        score: data.masterPoints[i].val,
                        time: DateUtils.timestampToTime(data.masterPoints[i].time).slice(5),
                        rank: i + 1,
                    }

                    if (data.masterPoints[i].time == false || data.masterPoints[i].time == "false") {
                        min.time = "无";
                    }

                    this.infoarr.push(min);
                    if (selfData) {
                        if (selfData.uid == min.uid) {
                            selfData.rank = min.rank;
                        } 
                    }
                }
            }



            this.rankUI.createUi(this.infoarr);
            if (selfData) {
                this.rankUI.createSelfUI(selfData);
            }


            if (data.masterRule) {
                let starttime: string = data.masterRule.start_date;
                let endtime: string = data.masterRule.end_date;
                starttime = starttime.replace("/", "-").replace("/", "-");
                endtime = endtime.replace("/", "-").replace("/", "-");
                this.timeTxt.text = "活动时间：" + starttime + "至" + endtime;

            } else {
                this.timeTxt.text = "";
            }


        }

        public on_ruleBtn(e: egret.TouchEvent): void {

            this.ruleBtn.visible = false;
            this.backBtn.visible = true;
            this.rankUI.visible = false;
            this.ruleUI.visible = true;

        }

        public on_backBtn(e: egret.TouchEvent): void {

            this.ruleBtn.visible = true;
            this.backBtn.visible = false;
            this.rankUI.visible = true;
            this.ruleUI.visible = false;

        }





        public mainAssetName(): string {
            return "spr_master_rank_view_scene";
        }


        public dispose(): void {
            super.dispose();
        }

    }
}