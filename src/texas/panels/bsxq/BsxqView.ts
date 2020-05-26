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
 * 比赛详情  主界面
 */
module kelvin.texas {

    export class BsxqView extends BasePanel {

        public constructor(data: SngInfoIF) {
            super();
            this.data = data;

            this.createGameScene();

        }

        private data: SngInfoIF;
        private bg: egret.Bitmap;




        public backBtn: starlingswf.SwfButton;

        public bottomSp: starlingswf.SwfSprite;


        public timeTxt: egret.TextField;

        public stopSignBtn: starlingswf.SwfButton;

        public signBtn: starlingswf.SwfButton;

        public outBtn: starlingswf.SwfButton;

        public goBackGameBtn: starlingswf.SwfButton;

        public ybmBtn: starlingswf.SwfButton;

        public wdbmsjBtn: starlingswf.SwfButton;

        public delaySignBtn: starlingswf.SwfButton;



        public dtTxt: egret.TextField;

        public jlTxt: egret.TextField;

        public wjTxt: egret.TextField;

        public pzTxt: egret.TextField;

        public dtView: BsxqDtUI;

        public jlView: BsxqJlUI;

        public wjView: BsxqWjUI;

        public pzView: BsxqPzUI;

        public view: egret.DisplayObjectContainer;


        private timer: egret.Timer;


        private pageView: PagePanel;



        private createGameScene(): void {

            this.dateUtils = new DateUtils();

            this.view = <starlingswf.SwfSprite>this.$children[0];

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);

            this.bottomSp.y = App.stageHeight - this.bottomSp.height;

            this.dtTxt = Tool.createTextFiled(0, 0, 100, 40, "大厅", 28, 0xffffff, "center");
            this.jlTxt = Tool.createTextFiled(0, 0, 100, 40, "奖励", 28, 0xffffff, "center");
            this.wjTxt = Tool.createTextFiled(0, 0, 100, 40, "玩家", 28, 0xffffff, "center");
            this.pzTxt = Tool.createTextFiled(0, 0, 100, 40, "牌桌", 28, 0xffffff, "center");


            this.pageView = new PagePanel(80, 720);
            this.pageView.y = 100;

            this.pageView.scrollViewH.setShowSize(App.stageWidth, App.stageHeight);
            this.pageView.scrollViewH.setScrollSize(App.stageWidth, App.stageHeight);

            this.view.addChildAt(this.pageView, 1);

            this.jlHide();
            this.wjHide();
            this.pzHide();

            this.initState();


            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);

            this.timer.start();


            // this.on_dtBtn(null);


            this.spData = {};

            for (let i in this.data) {
                this.spData[i] = this.data[i];
            }

            MatchApi.getMatchInfo(this.data.id, this.getSpData.bind(this));


            this.ispop = false;

            EventManager.registerCmd(Events.gotoJLPage, this.gotoJLPage, this);


            this.startintervalUpdate();
            BaseApi.registerCmd("matchStart", this.acceptMatch, this);

        }


        private acceptMatch(data: any): void {

            this.spData.serverstate = data.match.state;
            this.data.serverstate = data.match.state;
            this.data.match_start_time = data.match.match_start_time;

            this.timerun();

        }


        private delayTimeTxt: egret.TextField;

        private delayTimeRun(): void {

            if (this.data.state == 2) {

                let distancetime = this.data.match_start_time * 1000 + this.data.apply_delay_time * 1000 - new Date().getTime();
                let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                this.delayTimeTxt.text = "报名剩余时间：" + str;
                this.showSignTime();

            } else {
                this.delayTimeTxt.text = "";
                this.showSignTime();
            }


        }



        private timeId1: number;

        private startintervalUpdate(): void {
            this.timeId1 = egret.setInterval(() => { MatchApi.getMatchInfo(this.data.id, this.intervalGetInfo.bind(this)); }, this, 10000);
        }

        private intervalGetInfo(data: any): void {

            console.log("拉取一次最新的消息");
            this.data.serverstate = data.match.state;
            this.data.match_start_time = data.match.match_start_time;



            this.spData.serverstate = data.match.state;
            this.spData.mz_level = data.match.mz_level;
            this.spData.reward = data.match.reward;
            this.spData.cur_buy_count = data.match.cur_buy_count;
            this.spData.havepeople = data.match.people;
            this.spData.inMoneyCircle = data.match.inMoneyCircle;


            this.spData.over_people = data.match.over_people;
            this.spData.serverstate = data.match.state;
            this.spData.mzTable = data.mzTable;
            this.spData.roles = data.roles;
            this.spData.pokerScores = data.pokerScores;
            this.spData.gameScores = data.gameScores;
            this.spData.rooms = data.rooms;
            this.spData.moneyCircle = data.moneyCircle;
            this.spData.reBuyCount = data.reBuyCount;
            this.spData.hasTicket = data.hasTicket;


            this.timerun();

        }


        private updateUI(): void {

            if (this.dtView) {
                this.dtView.updateUI();
            }

            if (this.jlView) {
                this.jlView.updateUI();
            }

            if (this.wjView) {
                this.wjView.updateUI();
            }
            if (this.pzView) {
                this.pzView.updateUI();
            }


        }



        private gotoJLPage(): void {

            let e = { target: { name: "jl" } };
            this.pageView.mouseClick(<egret.TouchEvent>e);
        }


        public onInterfaceTweenOver(): void {
            if (this.data.serverstate == 4 || this.data.serverstate == 5) {
                this.openFailBack();
            }
            if (this.data.serverstate == 6) {
                this.gameend();
            }
        }
        public openFailBack(): void {
            // this.timer.stop();

            lzm.Alert.alert(new CommonPopup("该比赛开始失败，请点击确定返回", this.on_backBtn.bind(this)))

        }

        public gameend(): void {
            lzm.Alert.alert(new CommonPopup("该比赛已经结束，请点击确定返回", this.on_backBtn.bind(this)))
        }


        private getSpData(data): void {


            this.data.serverstate = data.match.state;
            this.data.match_start_time = data.match.match_start_time;


            this.spData.serverstate = data.match.state;
            this.spData.mz_level = data.match.mz_level;
            this.spData.reward = data.match.reward;
            this.spData.cur_buy_count = data.match.cur_buy_count;
            this.spData.havepeople = data.match.people;
            this.spData.poker_score_rate = data.match.poker_score_rate;
            this.spData.reward_poker_score = data.match.reward_poker_score;
            this.spData.inMoneyCircle = data.match.inMoneyCircle;

            this.spData.over_people = data.match.over_people;
            this.spData.mzTable = data.mzTable;
            this.spData.roles = data.roles;
            this.spData.pokerScores = data.pokerScores;
            this.spData.gameScores = data.gameScores;
            this.spData.rooms = data.rooms;
            this.spData.moneyCircle = data.moneyCircle;
            this.spData.isOver = data.isOver;
            this.spData.reBuyCount = data.reBuyCount;
            this.spData.hasTicket = data.hasTicket;


            this.dtView = new BsxqDtUI(this.spData);

            this.jlView = new BsxqJlUI(this.spData);

            this.wjView = new BsxqWjUI(this.spData);

            this.pzView = new BsxqPzUI(this.spData);


            this.pageView.addPage(this.dtTxt, this.dtView, "dt", null, false, this.dtShow.bind(this), this.dtHide.bind(this));
            this.pageView.addPage(this.jlTxt, this.jlView, "jl", null, false, this.jlShow.bind(this), this.jlHide.bind(this));
            this.pageView.addPage(this.wjTxt, this.wjView, "wj", null, false, this.wjShow.bind(this), this.wjHide.bind(this));
            this.pageView.addPage(this.pzTxt, this.pzView, "pz", null, false, this.pzShow.bind(this), this.pzHide.bind(this));

            this.pzView.y = this.pzView.y + 20;

            this.timerun();


        }




        public spData: MatchMaxInfoIF;




        private dtShow(): void {
            this.dtTxt.textColor = 0xffffff;
        }

        private dtHide(): void {
            this.dtTxt.textColor = 0x46557e;
        }

        private jlShow(): void {
            this.jlTxt.textColor = 0xffffff;
        }

        private jlHide(): void {
            this.jlTxt.textColor = 0x46557e;
        }


        private wjShow(): void {
            this.wjTxt.textColor = 0xffffff;
        }

        private wjHide(): void {
            this.wjTxt.textColor = 0x46557e;
        }


        private pzShow(): void {
            this.pzTxt.textColor = 0xffffff;
        }

        private pzHide(): void {
            this.pzTxt.textColor = 0x46557e;
        }



        public initState(): void {

            this.signBtn.visible = false;
            this.stopSignBtn.visible = false;
            this.stopSignBtn.touchEnabled = false;
            this.outBtn.visible = false;
            this.outBtn.touchEnabled = false;
            this.goBackGameBtn.visible = false;
            // this.ybmBtn.touchEnabled = false;
            this.ybmBtn.visible = false;
            this.wdbmsjBtn.visible = false;
            this.wdbmsjBtn.touchEnabled = false;
            this.delaySignBtn.visible = false;


            this.timeTxt.text = "";



        }


        //每秒更新状态



        private updateState(): void {
            // let zeroTime1 = (new Date(new Date().toLocaleDateString()).getTime()); // 当天0点
            // state  1是报名中   2是延长报名  ps：延长报名情况下，先调加入房间 数据为null 延迟3再调一次  一直到成功为止   3是截止报名   4是游戏中   5是暂时不能报名

            // signed  1 是已经报名  2 是未报名  3是已经淘汰
            let nowtime = new Date().getTime();
            // console.log("nowtime",nowtime);
            // console.log("this.data.apply_time_end",this.data.apply_time_end);


            if (this.data.serverstate == 0) {
                if (this.data.type == "mtt") {
                    if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.apply_time && nowtime <= this.data.apply_time_end) { //说明在正常报名时间内
                        this.data.state = 1;

                    } else if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime <= this.data.start_time && nowtime >= this.data.apply_time_end) {
                        //说明在游戏开始前不能报名的时间段
                        this.data.state = 3;
                    } else if (nowtime >= this.data.apply_time_end + this.data.apply_delay_time * 1000 || nowtime > this.data.apply_date_end + this.data.apply_delay_time * 1000) {
                        //截止报名
                        this.data.state = 3;
                    }
                    else {
                        this.data.state = 5;
                    }

                    if (this.data.state != 5) {
                        if (this.spData.mz_level > this.spData.apply_max_mz_level) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.spData.havepeople >= this.spData.apply_max_people) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.spData.inMoneyCircle == 1) {
                            //截止报名
                            this.data.state = 3;
                        }
                    }
                } else if (this.data.type == "sng") {
                    this.data.state = 1;
                }


            } else {
                // console.log("nowtime",nowtime);
                //      console.log(" this.data.apply_date_end + this.data.delaytime * 1000",this.data.apply_time_end + this.data.apply_delay_time * 1000);



                if (this.data.signed == 1) {
                    this.data.state = 4;
                } else {



                    if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.match_start_time * 1000 && nowtime <= this.data.match_start_time * 1000 + this.data.apply_delay_time * 1000) {
                        // console.log("到了这里");
                        //说明在延迟报名时间内
                        this.data.state = 2;
                        if (this.spData.mz_level > this.spData.apply_max_mz_level) {
                            //截止报名
                            this.data.state = 3;
                        }

                        if (this.spData.havepeople >= this.spData.apply_max_people && this.spData.reBuyCount <= 0) {
                            //截止报名
                            this.data.state = 3;

                        } else if (this.spData.cur_buy_count >= this.spData.buy_count || this.spData.reBuyCount >= this.spData.player_buy_count) {
                            this.data.state = 3;
                        }
                        if (this.spData.inMoneyCircle == 1) {
                            //截止报名
                            this.data.state = 3;
                        }
                    } else {
                        this.data.state = 3;
                    }
                }

            }



            if (this.data.state == 3) {

                if (this.spData.isOver == true) {
                    this.data.signed = 3;
                }
            }


            // console.log("this.data.state", this.data.state);


        }


        private ispop: boolean;

        private timerun(): void {

            this.updateState();

            this.initState();
            // console.log("this.data.signed", this.data.signed);
            // console.log("this.data.state", this.data.state);

            if (this.data.signed == 1) {
                if (this.data.state == 4) {
                    this.goBackGameBtn.visible = true;
                    if (this.ispop == false) {
                        console.log("弹出回到游戏弹窗");
                        this.ispop = true;
                        lzm.Alert.alert(new CommonPopup("点击确定回到游戏", () => {
                            // this.timer.stop();
                            this.startJoinGame();
                            this.ispop = false;
                        }))
                    }
                } else {
                    this.ybmBtn.visible = true;
                }

            } else if (this.data.signed == 2) {

                if (this.data.state == 2) {
                    this.delaySignBtn.visible = true;
                } else if (this.data.state == 3 || this.data.state == 4) {
                    this.stopSignBtn.visible = true;
                } else if (this.data.state == 1) {
                    this.signBtn.visible = true;
                } else if (this.data.state == 5) {
                    this.wdbmsjBtn.visible = true;

                }
            } else if (this.data.signed == 3) {
                this.outBtn.visible = true;
            }




            // if (this.data.state == 4) {
            //     this.showGameTime();
            // } else {
            this.showSignTime();
            // }


            this.updateUI();

        }

        public showSignTime(): void {

            // if (this.data.state == 5) { //还没开始报名


            // let distancetime = this.data.apply_time - new Date().getTime();
            // let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
            // this.timeTxt.text = "距离开始报名时间：" + str;

            // } else { //
            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                this.timeTxt.text = "比赛进行中";
                // let distancetime = this.data.apply_time_end + this.data.apply_delay_time * 1000 - new Date().getTime();



                if (this.data.match_start_time && this.data.match_start_time > 0) {
                    let distancetime = new Date().getTime() - this.data.match_start_time * 1000;
                    let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                    this.timeTxt.text = "比赛进行中：" + str;
                }

            } else {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.timeTxt.text = "人满即开";
                    if (this.data.state == 5) {
                        let datetime: number = 0;
                        let nowtime = new Date().getTime();
                        if (nowtime < this.data.apply_date) {
                            datetime = this.data.apply_date;
                        } else {
                            datetime = nowtime;
                        }

                        this.delayTimeTxt.text = "报名开始时间：" + DateUtils.formatDate(datetime) + " " + this.data.apply_time_str;
                    }

                } else if (this.data.type == "mtt") {
                    this.timeTxt.text = "开赛时间:" + this.data.start_date_str + " " + this.data.start_time_str;
                }
            }



            // }

        }

        private dateUtils: DateUtils;
        public showGameTime(): void {
            let distancetime = new Date().getTime() - this.data.match_start_time * 1000;
            let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
            this.timeTxt.text = "游戏进行中：" + str;
        }



        public on_signBtn(e: egret.TouchEvent): void {
            if (AppConfig.applyisneedPhone == 1) {
                if (PhoneData.phoneNumber == null || PhoneData.phoneNumber == "") {
                    ApiState.showText("绑定手机才可以进行报名");
                    lzm.Alert.alert(new RegisterPanel("register"));
                    return;
                }
            }

            let str = "";
            if (this.data.signmoney == 0) {
                str = "" + (this.data.apply_score + this.data.service_score) + "积分";
            } else {
                str = "" + (this.data.signmoney + this.data.service_gold) + "金币";

            }


            if (this.spData.hasTicket == false) {
                if (RoleData.getRole().gold < this.data.signmoney + this.data.service_gold) {
                    lzm.Alert.alert(new ApplyPrompt(1))
                    return;
                } else if (RoleData.getRole().scores < this.data.apply_score + this.data.service_score) {

                    lzm.Alert.alert(new ApplyPrompt(2))
                    return;
                }
            }



            if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                MatchApi.apply(this.data.id, this.signSuccess.bind(this));
            } else {
                let strprompt = "";
                if (this.spData.hasTicket == false) {
                    strprompt = "报名费用为" + str + "，请点击确定进行报名";
                } else {
                    let matchname = MatchData.getUserPropInfo().configs[this.data.ticket_cfgId].name;
                    strprompt = "确定消耗" + matchname + "门票报名?";
                }
                lzm.Alert.alert(new CommonPopup(strprompt, () => {
                    MatchApi.apply(this.data.id, this.signSuccess.bind(this));
                }, () => { }))
            }


        }

        public signSuccess(data: any): void {
            this.data.signed = 1;
            // console.log(this.data.signed);

            ApiState.showText("报名成功");

            if (this.spData.hasTicket == false) {
                RoleData.getRole().gold = RoleData.getRole().gold - this.data.signmoney - this.data.service_gold;
                RoleData.getRole().scores = RoleData.getRole().scores - this.data.apply_score - this.data.service_score;
                EventManager.dispatchCmd(Events.goldChange, null);
            }

            this.data.havepeople = data.people;
            this.spData.havepeople = this.data.havepeople;

            if (this.spData.hasTicket == true) {
                MatchApi.getPlayerProps(null);
            }

            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                // this.timer.stop();
                this.startJoinGame();
            } else {
                MatchApi.getMatchInfo(this.data.id, this.intervalGetInfo.bind(this));
                this.timerun();
            }


        }

        public on_delaySignBtn(e: egret.TouchEvent): void {
            if (AppConfig.applyisneedPhone == 1) {
                if (PhoneData.phoneNumber == null || PhoneData.phoneNumber == "") {
                    ApiState.showText("绑定手机才可以进行报名");
                    lzm.Alert.alert(new RegisterPanel("register"));
                    return;
                }
            }
            let str = "";
            if (this.data.signmoney == 0) {
                str = "" + (this.data.apply_score + this.data.service_score) + "积分";
            } else {
                str = "" + (this.data.signmoney + this.data.service_gold) + "金币";
            }

            if (this.spData.hasTicket == false) {
                if (RoleData.getRole().gold < this.data.signmoney + this.data.service_gold) {
                    lzm.Alert.alert(new ApplyPrompt(1));
                    return;
                } else if (RoleData.getRole().scores < this.data.apply_score + this.data.service_score) {

                    lzm.Alert.alert(new ApplyPrompt(2));
                    return;
                }
            }

            if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                MatchApi.apply(this.data.id, this.signSuccess.bind(this));
            } else {
                let strprompt = "";
                if (this.spData.hasTicket == false) {
                    strprompt = "报名费用为" + str + "，请点击确定进行报名?";
                } else {
                    let matchname = MatchData.getUserPropInfo().configs[this.data.ticket_cfgId].name;
                    strprompt = "确定消耗" + matchname + "门票报名";
                }
                lzm.Alert.alert(new CommonPopup(strprompt, () => {
                    MatchApi.apply(this.data.id, this.signSuccess.bind(this));
                }, () => { }))
            }




        }


        //取消报名
        public on_ybmBtn(e: egret.TouchEvent): void {
            MatchApi.cancelApply(this.data.id, this.cancelApplySuccess.bind(this));
        }

        public cancelApplySuccess(data: any): void {
            this.data.signed = 2;
            ApiState.showText("取消报名成功");
            this.data.havepeople = data.people;
            this.spData.havepeople = this.data.havepeople;
            if (this.spData.hasTicket == false) {
                RoleData.getRole().gold = RoleData.getRole().gold + this.data.signmoney + this.data.service_gold;
                RoleData.getRole().scores = RoleData.getRole().scores + this.data.apply_score + this.data.service_score;
            }
            EventManager.dispatchCmd(Events.goldChange, null);
            MatchApi.getPlayerProps(null);
            this.timerun();
            MatchApi.getMatchInfo(this.data.id, this.intervalGetInfo.bind(this));
        } 


        public startJoinGame(): void {
            egret.clearInterval(this.timeId1);
            lzm.Alert.alert(new WaitRoomUI((this.data.id)), true);
        }

        public on_goBackGameBtn(e: egret.TouchEvent): void {      

            this.startJoinGame();

        }



        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            BaseApi.removeCmd("matchStart", this.acceptMatch, this);
            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_bsxq_view";
        }

        public dispose(): void {
            super.dispose();
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
            EventManager.removeCmd(Events.gotoJLPage, this.gotoJLPage, this);
            BaseApi.removeCmd("matchStart", this.acceptMatch, this);
            egret.Tween.removeTweens(this);
            egret.clearInterval(this.timeId1);
        }

    }
}