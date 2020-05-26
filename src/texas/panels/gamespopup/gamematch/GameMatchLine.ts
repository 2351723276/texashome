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
 * 我的赛事的每一行
 */


module kelvin.texas {

    export class GameMatchLine extends BasePanel {

        public constructor(data: SngInfoIF, index: number, stageview: GameMatchView, matchid: string, callback: Function, error: Function, type: string = "game") {
            super();

            this.data = data;
            this.index = index;
            this.stageview = stageview;
            this.callback = callback;
            this.error = error;
            this.matchid = matchid;
            this.type = type;
            this.createGameScene();

        }

        private type: string;

        private matchid: string;

        private callback: Function;

        private error: Function;

        private stageview: GameMatchView;

        public data: SngInfoIF;

        private index: number;



        public mtticon: egret.Bitmap;

        public sngicon: egret.Bitmap;

        public lightBg: egret.Bitmap;

        public darkBg: egret.Bitmap;



        public stopImg: starlingswf.SwfButton;

        public sginImg: starlingswf.SwfButton;

        private delayImg: starlingswf.SwfButton;

        private gameImg: starlingswf.SwfButton;

        public titleTxt: egret.TextField;

        public sginmoneyTxt: egret.TextField;

        public peopleNumTxt: egret.TextField;

        public promptTxt: egret.TextField;

        public explainTxt: egret.TextField;

        public delayTxt: egret.TextField;

        private goToBtn: starlingswf.SwfButton;


        private initUI(): void {


            this.mtticon.visible = false;
            this.sngicon.visible = false;
            this.lightBg.visible = false;
            this.darkBg.visible = false;

            this.stopImg.visible = false;
            this.sginImg.visible = false;


            this.stopImg.touchEnabled = false;
            this.sginImg.touchEnabled = false;


            this.delayImg.visible = false;
            this.gameImg.visible = false;

            this.goToBtn.visible = false;

        }



        private createGameScene(): void {
            this.updateState();
            this.touchEnabled = true;

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            this.initUI();

            this.updateUI();
        }

        private touch(): void {

            this.goToBtnTouch(null);

        }




        private goToBtnTouch(e: egret.TouchEvent): void {

            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                if (String(this.matchid) != this.data.id) {
                    Log.log("进去比赛----" + this.data.id);

                    if (this.callback) {
                        this.callback(this.data.id);
                    }
                    this.stageview.dispose();
                    lzm.Alert.alert(new WaitRoomUI((this.data.id)));
                }
            }


        }

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
                        if (this.data.mz_level > this.data.apply_max_mz_level) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.data.havepeople >= this.data.apply_max_people) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.data.inMoneyCircle == 1) {
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
                    if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.start_time && nowtime <= this.data.start_time + this.data.apply_delay_time * 1000) {
                        // console.log("到了这里");
                        //说明在延迟报名时间内
                        this.data.state = 2;
                        if (this.data.mz_level > this.data.apply_max_mz_level) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.data.havepeople >= this.data.apply_max_people) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.data.inMoneyCircle == 1) {
                            //截止报名
                            this.data.state = 3;
                        }
                    } else {
                        this.data.state = 3;
                    }



                }




            }
        }


        private updateUI(): void {


            if (this.data.type == "sng" || this.data.satellite == 1) {
                this.sngicon.visible = true;
                this.promptTxt.text = "人满即开";
            } else if (this.data.type == "mtt") {
                this.mtticon.visible = true;
                if (this.data.serverstate == 1) {
                    this.promptTxt.text = "比赛进行中";
                } else {
                    let myDate = new Date();
                    let nowDate = DateUtils.formatDate(myDate);
                    this.promptTxt.text = "开赛时间 " + nowDate + " " + this.data.start_time_str;
                }

            }

            if (this.index % 2 == 0) {
                this.lightBg.visible = true;
            } else {
                this.darkBg.visible = true;
            }


            if (this.data.state == 1) {
                this.sginImg.visible = true;

            } else if (this.data.state == 2) {
                this.delayImg.visible = true;
            } else if (this.data.state == 3) {
                this.stopImg.visible = true;
            }
            else if (this.data.state == 4) {
                this.gameImg.visible = true;
                this.promptTxt.text = "牌局进行中";
            } else if (this.data.state == 0) {

            }


            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                if (String(this.matchid) != this.data.id) {
                    this.goToBtn.visible = true;
                }
            }

            this.titleTxt.text = this.data.titie;
            if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                this.sginmoneyTxt.text = "免费";
            } else if (this.data.signmoney == 0) {
                let money = this.data.apply_score + this.data.service_score;
                this.sginmoneyTxt.text = "" + money;

            } else {
                let money = this.data.signmoney + this.data.service_gold;
                this.sginmoneyTxt.text = "" + money;
            }

            // this.sginmoneyTxt.text = String(this.data.signmoney);


            this.explainTxt.text = this.data.explain;
            // this.peopleNumTxt.text = this.data.havepeople + "/" + this.data.allpeople;
            // if (this.data.allpeople > 9999) {
            //     this.peopleNumTxt.text = "" + this.data.havepeople;
            // }
            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                } else if (this.data.type == "mtt") {
                    this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                }
            } else {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                } else if (this.data.type == "mtt") {
                    this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                    if (this.data.apply_max_people > 9999) {
                        this.peopleNumTxt.text = "" + (this.data.havepeople);
                    }
                }
            }

            if (this.data.state == 2) { //延迟开局
                // let time = this.data.apply_delay_time - this.data.time;

                // let dateTool = new DateUtils();

                // let timestr = dateTool.getFormatBySecond(time, 6);

                // this.delayTxt.text = "剩余" + timestr;

            }


        }




        public mainAssetName(): string {
            return "spr_game_match_line_ui";
        }


        public dispose(): void {


            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }


    }
}