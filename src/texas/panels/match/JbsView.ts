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
 * 锦标赛
 */
module kelvin.texas {

    export class JbsView extends BasePanel {

        public constructor(type: string) {
            super();

            this.type = type;

            if (this.type == "common") {
                this.servertype = 1;
            } else if (this.type == "wcaa") {
                this.servertype = 2;
            }

            this.createGameScene();

        }

        private type: string;

        private servertype: number;

        private bg: egret.Bitmap;


        private sngUI: BasePanel;

        private mttUI: BasePanel;


        private chooseLine: egret.Bitmap;


        private pageView: PagePanel;


        public sngBtn: starlingswf.SwfButton;

        public mttBtn: starlingswf.SwfButton;


        public titleSng: egret.TextField;

        public titleMtt: egret.TextField;


        private titleImg: egret.Bitmap;


        private timer: egret.Timer;


        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);

            Tool.removeFromParent(this.chooseLine);

            this.titleSng = <egret.TextField>this.sngBtn.skin.$children[1];
            this.titleMtt = <egret.TextField>this.mttBtn.skin.$children[1];
            this.titleSng.verticalAlign = 'middle';
            this.titleMtt.verticalAlign = 'middle';

            Tool.removeFromParent(this.sngBtn);
            Tool.removeFromParent(this.mttBtn);

            this.pageView = new PagePanel(80, 720);
            this.pageView.y = 100;

            this.pageView.scrollViewH.setShowSize(App.stageWidth, App.stageHeight);
            this.pageView.scrollViewH.setScrollSize(App.stageWidth, App.stageHeight);

            this.addChild(this.pageView);



            if (this.type == "wcaa") {
                this.titleImg.texture = RES.getRes("img_img_pyqdz_wcaazq");
                this.titleImg.x = 250;
            }

            MatchApi.getTitleConfig(this.servertype, this.getTitleInfo.bind(this));

            this.dateUtils = new DateUtils();
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
            this.timer.start();

            EventManager.registerCmd(Events.backGame, this.backView, this);

            EventManager.registerCmd(Events.goToJBSMatch, this.switchJBSUI, this);



        }


        private titleArr: egret.TextField[];

        private uiArr: BasePanel[];

        private getTitleInfo(data: any): void {
            this.titleArr = [];
            this.uiArr = [];

            for (let i in data.title_list) {
                let txt = Tool.createTextFiled(0, 0, null, 70, data.title_list[i].name, 28, 0xffffff, "center");
                txt.name = data.title_list[i].id;
                this.titleArr.push(txt);
            }

            for (let i = 0; i < this.titleArr.length; i++) {
                let ui: BasePanel = new BasePanel(true);
                ui.width = 720;
                ui.scrollView.setShowSize(App.stageWidth, App.stageHeight - 186);
                ui.initDownRefresh();
                ui.setDownRefresh(this.refreshCall.bind(this));
                this.uiArr.push(ui);
                ui.name = this.titleArr[i].name;
                this.pageView.addPage(this.titleArr[i], ui, this.titleArr[i].name, this.getMatchInfo.bind(this));
            }

            this.infoArr = {};
            this.lineUIArr = {};

            if (this.titleArr[0]) {
                this.getMatchInfo(this.titleArr[0].name);
            }

            this.updateAllUI();

        }

        private updateAllUI(): void {
            if (this.chooseTitleId) {
                // this.getMatchInfo(this.titleArr[0].name);
                // let obj = {
                //     target: {
                //         name: this.titleArr[0].name,
                //     }
                // }
                this.getMatchInfo(this.chooseTitleId);
            }
        }

        private chooseTitleId: string;

        private getMatchInfo(name: string): void {

            if (name == null || name == undefined) {
                return;
            }

            this.chooseTitleId = name;
            MatchApi.getMatchListWithType1(this.servertype, name, this.getInfoSuccess.bind(this));

        }

        private infoArr: Object;

        private getInfoSuccess(data: any): void {
            let matchlist = data.matchConfigs;

            if (!this.infoArr[this.chooseTitleId]) {
                this.infoArr[this.chooseTitleId] = [];
            } else {
                this.infoArr[this.chooseTitleId] = [];
            }

            for (let i in matchlist) {
                if (i == "") {
                    continue;
                }
                if (data.matchConfigs[i].state != 0 && data.matchConfigs[i].state != 1 && data.matchConfigs[i].state != 2) {
                    continue;
                }

                let mindata: SngInfoIF = {
                    id: data.matchConfigs[i].id,
                    type: "",
                    matchtype: this.type,
                    signed: 2,
                    titie: data.matchConfigs[i].name,
                    signmoney: data.matchConfigs[i].apply_gold,
                    havepeople: data.matchConfigs[i].people,
                    allpeople: data.matchConfigs[i].apply_max_people,
                    explain: "",
                    state: null,

                    apply_date: null,
                    apply_time: null,
                    apply_date_end: null,
                    apply_time_end: null,
                    start_date: null,
                    start_time: null,
                    apply_delay_time: data.matchConfigs[i].apply_delay_time,
                    serverstate: data.matchConfigs[i].state,
                    init_game_score: data.matchConfigs[i].init_game_score,
                    buy_count: data.matchConfigs[i].buy_count,
                    mz_level: data.matchConfigs[i].mz_level,
                    mz_interval: data.matchConfigs[i].mz_interval,
                    reward: data.matchConfigs[i].reward,
                    min_reward: data.matchConfigs[i].min_reward,
                    cur_buy_count: data.matchConfigs[i].cur_buy_count,
                    apply_score: data.matchConfigs[i].apply_score,
                    apply_max_people: data.matchConfigs[i].apply_max_people,
                    apply_max_mz_level: data.matchConfigs[i].apply_max_mz_level,
                    table_people: data.matchConfigs[i].table_people,
                    service_gold: data.matchConfigs[i].service_gold,
                    service_score: data.matchConfigs[i].service_score,
                    break_time_long: data.matchConfigs[i].break_time_long,
                    break_interval: data.matchConfigs[i].break_interval,
                    poker_score_rate: data.matchConfigs[i].poker_score_rate,
                    reward_poker_score: data.matchConfigs[i].reward_poker_score,
                    over_people: data.matchConfigs[i].over_people,
                    match_start_time: data.matchConfigs[i].match_start_time,
                    inMoneyCircle: data.matchConfigs[i].inMoneyCircle,
                    start_time_str: data.matchConfigs[i].start_time,
                    start_date_str: data.matchConfigs[i].start_date,
                    master_points_id: data.matchConfigs[i].master_points_id,
                    masterRule: data.masterRule,
                    satellite: data.matchConfigs[i].satellite,
                    player_buy_count: data.matchConfigs[i].player_buy_count,
                    apply_time_str:data.matchConfigs[i].apply_time,
                    ticket_cfgId:data.matchConfigs[i].ticket_cfgId,
                    reBuyCount: 0,
                }

                if (data.reBuyCounts[mindata.id]) {
                    mindata.reBuyCount = data.reBuyCounts[mindata.id];
                }



                if (data.matchConfigs[i].type == 1) {
                    mindata.type = "sng";
                } else if (data.matchConfigs[i].type == 2) {
                    mindata.type = "mtt";
                }

                let datestrstart = data.matchConfigs[i].apply_date;

                let datestampstart = new Date(datestrstart).getTime();
                datestampstart = datestampstart - 8 * 3600 * 1000;
                mindata.apply_date = datestampstart;

                let datestrend = data.matchConfigs[i].apply_date_end;

                let datestampend = new Date(datestrend).getTime();
                datestampend = datestampend - 8 * 3600 * 1000 + 24 * 3600 * 1000;
                mindata.apply_date_end = datestampend;

                let myDate = new Date();

                let nowDate = DateUtils.formatDate(myDate);

                let timestrstart = nowDate + " " + data.matchConfigs[i].apply_time;
                let timestampstart = new Date(timestrstart).getTime();
                mindata.apply_time = timestampstart;

                let timestrend = nowDate + " " + data.matchConfigs[i].apply_time_end;
                let timestampend = new Date(timestrend).getTime();
                mindata.apply_time_end = timestampend;


                let datestrgame = data.matchConfigs[i].start_date;

                let datestampgame = new Date(datestrgame).getTime();
                datestampgame = datestampgame - 8 * 3600 * 1000;
                mindata.start_date = datestampgame;


                let timestrgame = nowDate + " " + data.matchConfigs[i].start_time;
                let timestampgame = new Date(timestrgame).getTime();
                mindata.start_time = timestampgame;

                this.infoArr[this.chooseTitleId].push(mindata);
            }

            for (let i = 0; i < data.myMatchIds.length; i++) {
                for (let k = 0; k < this.infoArr[this.chooseTitleId].length; k++) {
                    if (data.myMatchIds[i] == this.infoArr[this.chooseTitleId][k].id) {
                        this.infoArr[this.chooseTitleId][k].signed = 1;
                    }
                }
            }
            this.infoArr[this.chooseTitleId] = ArrayUtil.sortGameData(this.infoArr[this.chooseTitleId]);



            this.updataUI();

            // if (this.snggetInfoNum > 0) {
            //     // ApiState.showText("刷新成功");
            // }


            for (let i = 0; i < this.uiArr.length; i++) {
                if (this.uiArr[i].name == this.chooseTitleId) {
                    this.uiArr[i].downRefreshOver();
                    break;
                }
            }
            // this.sngUI.downRefreshOver();

        }
        private lineUIArr: Object;
        private updataUI(): void {
            if (!this.lineUIArr[this.chooseTitleId]) {
                this.lineUIArr[this.chooseTitleId] = [];
            } else {
                for (let i = 0; i < this.lineUIArr[this.chooseTitleId].length; i++) {
                    this.lineUIArr[this.chooseTitleId][i].dispose();
                }
                this.lineUIArr[this.chooseTitleId] = [];
            }

            let ui: BasePanel;
            for (let i = 0; i < this.uiArr.length; i++) {
                if (this.uiArr[i].name == this.chooseTitleId) {
                    ui = this.uiArr[i];
                    break;
                }
            }
            if (ui) {
                for (let i = 0; i < this.infoArr[this.chooseTitleId].length; i++) {
                    let minsp = new JbsLineUI(this.infoArr[this.chooseTitleId][i], i);
                    ui.scrollView.container.addChild(minsp);
                    minsp.y = i * 183;
                    this.lineUIArr[this.chooseTitleId].push(minsp);
                }
                ui.scrollView.container.width = App.stageWidth;
                ui.scrollView.container.height = this.infoArr[this.chooseTitleId].length * 183;
                ui.scrollView.setScrollSize(App.stageWidth, this.infoArr[this.chooseTitleId].length * 183);
            }



        }

        private refreshCall(): void {
            RefreshUI.ins.show(App.stageWidth / 2, 250);
            // this.snggetInfoNum++;
            // this.getSngInfo();


            this.getMatchInfo(this.chooseTitleId);
        }



        private switchJBSUI(): void {
            this.type = "common";
            this.servertype = 1;
            if (this.type == "common") {
                this.titleImg.texture = RES.getRes("img_img_pyqdz_jinbiaos_jbs");
                this.titleImg.x = 282.95;
            }

        }

        private dateUtils: DateUtils;
        private delayTimeRun(): void {

            // if (this.sngUIArr) {
            //     for (let i = 0; i < this.sngUIArr.length; i++) {
            //         if (this.sngUIArr[i].data.state == 2) {
            //             let distancetime = this.sngUIArr[i].data.start_time + this.sngUIArr[i].data.apply_delay_time * 1000 - new Date().getTime();
            //             let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
            //             this.sngUIArr[i].delayTxt.text = "" + str;
            //         } else {
            //             this.sngUIArr[i].delayTxt.text = "";
            //         }

            //     }
            // }

            let uiarr: JbsLineUI[] = this.lineUIArr[this.chooseTitleId];
            if (uiarr) {
                for (let i = 0; i < uiarr.length; i++) {
                    if (uiarr[i].data.state == 2) {
                        let distancetime = uiarr[i].data.match_start_time * 1000 + uiarr[i].data.apply_delay_time * 1000 - new Date().getTime();
                        let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                        uiarr[i].delayTxt.text = "" + str;
                    } else {
                        uiarr[i].delayTxt.text = "";
                    }

                }
            }

        }




        public backView(): void {
            this.updateAllUI();

        }

        // public snggetInfoNum: number;
        // public mttgetInfoNum: number;




        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();
            EventManager.dispatchCmd(Events.gotoMatchView, null);
        }



        public mainAssetName(): string {
            return "spr_jbs_view";
        }


        public dispose(): void {
            super.dispose();
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
            EventManager.removeCmd(Events.backGame, this.backView, this);
            EventManager.removeCmd(Events.goToJBSMatch, this.switchJBSUI, this);


        }


        private sngInfo: SngInfoIF[];
        // private getSngInfo(): void {
        //     this.sngInfo = [];
        //     // this.sngInfo = [{ type: "sng", signed: 1, titie: "谁与争锋锦标赛1", signmoney: 1000, havepeople: 1, allpeople: 10, explain: "获得门票一张", state: 1 },
        //     // { type: "sng", signed: 2, titie: "谁与争锋锦标赛2", signmoney: 1002, havepeople: 2, allpeople: 10, explain: "获得门票一张", state: 2},
        //     // { type: "sng", signed: 3, titie: "谁与争锋锦标赛3", signmoney: 1003, havepeople: 3, allpeople: 10, explain: "获得门票一张", state: 3 },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛4", signmoney: 1004, havepeople: 4, allpeople: 10, explain: "获得门票一张", state: 4,  },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛5", signmoney: 1005, havepeople: 5, allpeople: 10, explain: "获得门票一张", state: 1,},
        //     // { type: "sng", signed: 3, titie: "谁与争锋锦标赛6", signmoney: 1006, havepeople: 6, allpeople: 10, explain: "获得门票一张", state: 2,  },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛7", signmoney: 1007, havepeople: 7, allpeople: 10, explain: "获得门票一张", state: 3, },
        //     // { type: "sng", signed: 2, titie: "谁与争锋锦标赛8", signmoney: 1008, havepeople: 8, allpeople: 10, explain: "获得门票一张", state: 4, },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛9", signmoney: 1009, havepeople: 9, allpeople: 10, explain: "获得门票一张", state: 1,  },
        //     // { type: "sng", signed: 2, titie: "谁与争锋锦标赛10", signmoney: 1010, havepeople: 10, allpeople: 10, explain: "获得门票一张", state: 2,  },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛11", signmoney: 1011, havepeople: 11, allpeople: 10, explain: "获得门票一张", state: 3,},
        //     // { type: "sng", signed: 2, titie: "谁与争锋锦标赛12", signmoney: 1012, havepeople: 12, allpeople: 10, explain: "获得门票一张", state: 4,  },
        //     // { type: "sng", signed: 1, titie: "谁与争锋锦标赛13", signmoney: 1013, havepeople: 13, allpeople: 10, explain: "获得门票一张", state: 1,  },]

        //     MatchApi.getMatchList(this.servertype, "1", this.getSngInfoSuccess.bind(this));


        // }

        // private getSngInfoSuccess(data: any): void {

        //     let matchlist = data.matchConfigs;

        //     for (let i in matchlist) {
        //         if (i == "") {
        //             continue;
        //         }
        //         if (data.matchConfigs[i].state != 0 && data.matchConfigs[i].state != 1 && data.matchConfigs[i].state != 2) {
        //             continue;
        //         }

        //         let mindata: SngInfoIF = {
        //             id: data.matchConfigs[i].id,
        //             type: "sng",
        //             matchtype: this.type,
        //             signed: 2,
        //             titie: data.matchConfigs[i].name,
        //             signmoney: data.matchConfigs[i].apply_gold,
        //             havepeople: data.matchConfigs[i].people,
        //             allpeople: data.matchConfigs[i].apply_max_people,
        //             explain: "",
        //             state: null,

        //             apply_date: null,
        //             apply_time: null,
        //             apply_date_end: null,
        //             apply_time_end: null,
        //             start_date: null,
        //             start_time: null,
        //             apply_delay_time: data.matchConfigs[i].apply_delay_time,
        //             serverstate: data.matchConfigs[i].state,
        //             init_game_score: data.matchConfigs[i].init_game_score,
        //             buy_count: data.matchConfigs[i].buy_count,
        //             mz_level: data.matchConfigs[i].mz_level,
        //             mz_interval: data.matchConfigs[i].mz_interval,
        //             reward: data.matchConfigs[i].reward,
        //             min_reward: data.matchConfigs[i].min_reward,
        //             cur_buy_count: data.matchConfigs[i].cur_buy_count,
        //             apply_score: data.matchConfigs[i].apply_score,
        //             apply_max_people: data.matchConfigs[i].apply_max_people,
        //             apply_max_mz_level: data.matchConfigs[i].apply_max_mz_level,
        //             table_people: data.matchConfigs[i].table_people,
        //             service_gold: data.matchConfigs[i].service_gold,
        //             service_score: data.matchConfigs[i].service_score,
        //             break_time_long: data.matchConfigs[i].break_time_long,
        //             break_interval: data.matchConfigs[i].break_interval,
        //             poker_score_rate: data.matchConfigs[i].poker_score_rate,
        //             reward_poker_score: data.matchConfigs[i].reward_poker_score,
        //             over_people: data.matchConfigs[i].over_people,
        //             match_start_time: data.matchConfigs[i].match_start_time,
        //             inMoneyCircle: data.matchConfigs[i].inMoneyCircle,

        //         }

        //         let datestrstart = data.matchConfigs[i].apply_date;

        //         let datestampstart = new Date(datestrstart).getTime();
        //         datestampstart = datestampstart - 8 * 3600 * 1000;
        //         mindata.apply_date = datestampstart;

        //         let datestrend = data.matchConfigs[i].apply_date_end;

        //         let datestampend = new Date(datestrend).getTime();
        //         datestampend = datestampend - 8 * 3600 * 1000 + 24 * 3600 * 1000;
        //         mindata.apply_date_end = datestampend;

        //         let myDate = new Date();

        //         let nowDate = DateUtils.formatDate(myDate);


        //         let timestrstart = nowDate + " " + data.matchConfigs[i].apply_time;
        //         let timestampstart = new Date(timestrstart).getTime();
        //         mindata.apply_time = timestampstart;

        //         let timestrend = nowDate + " " + data.matchConfigs[i].apply_time_end;
        //         let timestampend = new Date(timestrend).getTime();
        //         mindata.apply_time_end = timestampend;


        //         let datestrgame = data.matchConfigs[i].start_date;

        //         let datestampgame = new Date(datestrgame).getTime();
        //         datestampgame = datestampgame - 8 * 3600 * 1000;
        //         mindata.start_date = datestampgame;


        //         let timestrgame = nowDate + " " + data.matchConfigs[i].start_time;
        //         let timestampgame = new Date(timestrgame).getTime();
        //         mindata.start_time = timestampgame;

        //         this.sngInfo.push(mindata);
        //     }

        //     for (let i = 0; i < data.myMatchIds.length; i++) {
        //         for (let k = 0; k < this.sngInfo.length; k++) {
        //             if (data.myMatchIds[i] == this.sngInfo[k].id) {
        //                 this.sngInfo[k].signed = 1;
        //             }
        //         }
        //     }
        //     this.sngInfo = ArrayUtil.sortGameData(this.sngInfo);



        //     this.updataSngUI();

        //     // if (this.snggetInfoNum > 0) {
        //     //     // ApiState.showText("刷新成功");
        //     // }
        //     this.sngUI.downRefreshOver();
        // }




        // private sngUIArr: JbsLineUI[];
        // private updataSngUI(): void {


        //     if (!this.sngUIArr) {
        //         this.sngUIArr = [];
        //     } else {
        //         for (let i = 0; i < this.sngUIArr.length; i++) {
        //             this.sngUIArr[i].dispose();
        //         }
        //         this.sngUIArr = [];
        //     }


        //     for (let i = 0; i < this.sngInfo.length; i++) {
        //         let minsp = new JbsLineUI(this.sngInfo[i], i);
        //         this.sngUI.scrollView.container.addChild(minsp);
        //         minsp.y = i * 183;
        //         this.sngUIArr.push(minsp);

        //     }

        //     // this.sngUI.visible = true;
        //     // this.mttUI.visible = false;

        //     this.sngUI.scrollView.container.width = App.stageWidth;
        //     this.sngUI.scrollView.container.height = this.sngInfo.length * 183;

        //     this.sngUI.scrollView.setScrollSize(App.stageWidth, this.sngInfo.length * 183);

        // }

        // public sngRefreshCall(): void {
        //     RefreshUI.ins.show(App.stageWidth / 2, 250);
        //     // this.snggetInfoNum++;
        //     this.getSngInfo();

        // }

    }
}