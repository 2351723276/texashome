/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 我的赛事面板
 */


module kelvin.texas {
    export class GameMatchView extends BasePanel {
        public constructor(matchid: string, callback: Function, error: Function, type: string = "game") { //game是在游戏中弹出   home是大厅中弹出
            super(true);

            GameMatchView.gamematchView = this;
            this.callBack = callback;
            this.error = error;
            this.matchid = matchid;
            this.type = type;
            this.createGameScene();

        }

        private type: string;

        public static gamematchView: GameMatchView;

        private matchid: string;

        private callBack: Function;

        private error: Function;


        private view: starlingswf.SwfSprite;

        private bgSp: egret.Sprite;

        private bg: egret.Bitmap;

        public closeBtn: starlingswf.SwfButton;


        private timer: egret.Timer;


        private createGameScene(): void {
            this.view = <starlingswf.SwfSprite>this.$children[1];

            if (this.type == "home") {
                this.scrollView.x = 34;
                this.scrollView.y = 100;
                this.scrollView.setShowSize(this.width - 34, this.height - 100);

            } else {
                this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);

                this.addChildAt(this.bgSp, 0);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.closeBtn.visible = false;
                this.visible = false;
            }

            this.bg.touchEnabled = true;
            this.addChild(this.scrollView);

            MatchApi.getMyMatch(this.getInfo.bind(this));

            this.dateUtils = new DateUtils();
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
            this.timer.start();
        }
        private dateUtils: DateUtils;
        private delayTimeRun(): void {

            if (this.uiArr) {
                for (let i = 0; i < this.uiArr.length; i++) {
                    if (this.uiArr[i].data.state == 2) {
                        let distancetime = this.uiArr[i].data.start_time + this.uiArr[i].data.apply_delay_time * 1000 - new Date().getTime();
                        let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                        this.uiArr[i].delayTxt.text = "" + str;
                    } else {
                        this.uiArr[i].delayTxt.text = "";
                    }

                }
            }

        }

        private infoArr: SngInfoIF[]
        private getInfo(data: any): void {


            this.infoArr = [];
            // this.infoArr = [{ type: "sng", signed: 1, titie: "谁与争锋锦标赛1", signmoney: 1000, havepeople: 1, allpeople: 10, explain: "获得门票一张", state: 1 },
            // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛2", signmoney: 1002, havepeople: 2, allpeople: 10, explain: "获得门票一张", state: 3 },
            // { type: "sng", signed: 3, titie: "谁与争锋锦标赛3", signmoney: 1003, havepeople: 3, allpeople: 10, explain: "获得门票一张", state: 3 },
            // { type: "sng", signed: 1, titie: "谁与争锋锦标赛4", signmoney: 1004, havepeople: 4, allpeople: 10, explain: "获得门票一张", state: 3, },
            // { type: "ntt", signed: 1, titie: "谁与争锋锦标赛5", signmoney: 1005, havepeople: 5, allpeople: 10, explain: "获得门票一张", state: 1, },
            // { type: "sng", signed: 3, titie: "谁与争锋锦标赛6", signmoney: 1006, havepeople: 6, allpeople: 10, explain: "获得门票一张", state: 1, },
            // { type: "sng", signed: 1, titie: "谁与争锋锦标赛7", signmoney: 1007, havepeople: 7, allpeople: 10, explain: "获得门票一张", state: 1, },
            // { type: "mtt", signed: 3, titie: "谁与争锋锦标赛8", signmoney: 1008, havepeople: 8, allpeople: 10, explain: "获得门票一张", state: 3, },
            // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛9", signmoney: 1009, havepeople: 9, allpeople: 10, explain: "获得门票一张", state: 1, },
            // { type: "sng", signed: 3, titie: "谁与争锋锦标赛10", signmoney: 1010, havepeople: 10, allpeople: 10, explain: "获得门票一张", state: 1, },
            // { type: "sng", signed: 1, titie: "谁与争锋锦标赛11", signmoney: 1011, havepeople: 11, allpeople: 10, explain: "获得门票一张", state: 3, },
            // { type: "mtt", signed: 3, titie: "谁与争锋锦标赛12", signmoney: 1012, havepeople: 12, allpeople: 10, explain: "获得门票一张", state: 3, },
            // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛13", signmoney: 1013, havepeople: 13, allpeople: 10, explain: "获得门票一张", state: 1, },]


            for (let i in data.matchs) {
                if (i == "") {
                    continue;
                }
                if (data.matchs[i].state != 0 && data.matchs[i].state != 1 && data.matchs[i].state != 2) {
                    continue;
                }

                let mindata: SngInfoIF = {
                    id: data.matchs[i].id,
                    type: "",
                    signed: 2,
                    titie: data.matchs[i].name,
                    signmoney: data.matchs[i].apply_gold,
                    havepeople: data.matchs[i].people,
                    allpeople: data.matchs[i].apply_max_people,
                    explain: "",
                    state: null,

                    apply_date: null,
                    apply_time: null,
                    apply_date_end: null,
                    apply_time_end: null,
                    start_date: null,
                    start_time: null,
                    apply_delay_time: data.matchs[i].apply_delay_time,
                    serverstate: data.matchs[i].state,
                    mz_level: data.matchs[i].mz_level,
                    mz_interval: data.matchs[i].mz_interval,
                    reward: data.matchs[i].reward,
                    min_reward: data.matchs[i].min_reward,
                    cur_buy_count: data.matchs[i].cur_buy_count,
                    apply_score: data.matchs[i].apply_score,
                    apply_max_people: data.matchs[i].apply_max_people,
                    apply_max_mz_level: data.matchs[i].apply_max_mz_level,
                    service_gold: data.matchs[i].service_gold,
                    service_score: data.matchs[i].service_score,
                    over_people: data.matchs[i].over_people,
                    start_time_str: data.matchs[i].start_time,
                    start_date_str: data.matchs[i].start_date,

                    master_points_id: data.matchs[i].master_points_id,
                    masterRule: data.masterRule,
                     satellite: data.matchs[i].satellite,
                }

                if (data.matchs[i].type == 1) {
                    mindata.type = "sng";
                } else if (data.matchs[i].type == 2) {
                    mindata.type = "mtt";
                }

                let datestrstart = data.matchs[i].apply_date;

                let datestampstart = new Date(datestrstart).getTime();
                datestampstart = datestampstart - 8 * 3600 * 1000;
                mindata.apply_date = datestampstart;

                let datestrend = data.matchs[i].apply_date_end;

                let datestampend = new Date(datestrend).getTime();
                datestampend = datestampend - 8 * 3600 * 1000 + 24 * 3600 * 1000;
                mindata.apply_date_end = datestampend;

                let myDate = new Date();

                let nowDate = DateUtils.formatDate(myDate);

                let timestrstart = nowDate + " " + data.matchs[i].apply_time;
                let timestampstart = new Date(timestrstart).getTime();
                mindata.apply_time = timestampstart;

                let timestrend = nowDate + " " + data.matchs[i].apply_time_end;
                let timestampend = new Date(timestrend).getTime();
                mindata.apply_time_end = timestampend;

                let datestrgame = data.matchs[i].start_date;

                let datestampgame = new Date(datestrgame).getTime();
                datestampgame = datestampgame - 8 * 3600 * 1000;
                mindata.start_date = datestampgame;

                let timestrgame = nowDate + " " + data.matchs[i].start_time;
                let timestampgame = new Date(timestrgame).getTime();
                mindata.start_time = timestampgame;

                this.infoArr.push(mindata);
            }


            this.updataUI();
        }

        private uiArr: GameMatchLine[];
        private updataUI(): void {


            if (!this.uiArr) {
                this.uiArr = [];
            } else {
                for (let i = 0; i < this.uiArr.length; i++) {
                    this.uiArr[i].dispose();
                }
                this.uiArr = [];
            }


            for (let i = 0; i < this.infoArr.length; i++) {
                let minsp = new GameMatchLine(this.infoArr[i], i, this, this.matchid, this.callBack, this.error, this.type);
                this.scrollView.container.addChild(minsp);
                minsp.y = i * 183;
                this.uiArr.push(minsp);
            }


            this.scrollView.container.width = this.view.width;
            this.scrollView.container.height = this.infoArr.length * 183;

            this.scrollView.setScrollSize(this.view.width, this.infoArr.length * 183);


        }


        public show(): void {


            this.view.anchorOffsetX = this.view.width;
            this.view.anchorOffsetY = this.view.height;

            this.view.y = App.stageHeight;
            this.view.x = App.stageWidth + this.view.width;


            this.view.scaleX = this.view.scaleY = ExtGameHelper.getGameScalex();
            this.visible = true;
            this.scrollView.y = 100;
            this.scrollView.setShowSize(this.view.width, this.view.height - 140);
            // this.scrollView.setScrollSize(this.view.width, this.view.height - 140);
            this.view.addChild(this.scrollView);
            this.scrollView.x = 35;
            egret.Tween.get(this.view).to({ x: App.stageWidth }, 250, egret.Ease.quartOut).call(() => {


            });



        }

        public hide(): void {
            egret.Tween.removeTweens(this.view);
            egret.Tween.get(this.view).to({ x: App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(() => {
                this.dispose();
            });
        }


        public mainAssetName(): string {
            return "spr_game_match_list_view";
        }

        public dispose(): void {
            super.dispose();
            if (this.bgSp) {
                this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            }

            GameMatchView.gamematchView = null;
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
        }



    }
}