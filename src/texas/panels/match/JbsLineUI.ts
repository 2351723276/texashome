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
 * 锦标赛的每一行
 */


module kelvin.texas {

    export class JbsLineUI extends BasePanel {

        public constructor(data: SngInfoIF, index: number) {
            super();

            this.data = data;
            this.index = index;
            this.createGameScene();

        }

        public data: SngInfoIF;

        private index: number;

        public alreadysignimg: egret.Bitmap;

        public mtticon: egret.Bitmap;

        public sngicon: egret.Bitmap;

        public lightBg: egret.Bitmap;

        public darkBg: egret.Bitmap;

        public delayImg: starlingswf.SwfButton;

        public gameImg: starlingswf.SwfButton;

        public stopImg: starlingswf.SwfButton;

        public sginImg: starlingswf.SwfButton;

        public titleTxt: egret.TextField;

        public sginmoneyTxt: egret.TextField;

        public peopleNumTxt: egret.TextField;

        public promptTxt: egret.TextField;

        public explainTxt: egret.TextField;

        public delayTxt: egret.TextField;



        public masterBtn: starlingswf.SwfButton;

        private initUI(): void {

            this.alreadysignimg.visible = false;
            this.mtticon.visible = false;
            this.sngicon.visible = false;
            this.lightBg.visible = false;
            this.darkBg.visible = false;
            this.delayImg.visible = false;
            this.gameImg.visible = false;
            this.stopImg.visible = false;
            this.sginImg.visible = false;

            this.delayImg.touchEnabled = false;
            this.gameImg.touchEnabled = false;
            this.stopImg.touchEnabled = false;
            this.sginImg.touchEnabled = false;

            this.masterBtn.visible = false;
            this.masterBtn.isScale = false;
        }



        private createGameScene(): void {
            this.updateState();
            this.touchEnabled = true;

            this.initUI();

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this, false, 1000000);
            this.updateUI();

            EventManager.registerCmd(Events.controlHContanier, this.controlHContanier, this);
        }

        private controlHContanier(data: boolean): void {

            this.iscanTouch = data;

        }

        private iscanTouch: boolean = true;
        private touch(): void {
            // EventManager.dispatchCmd(Events.createBSXQView, this.data);

            if (this.iscanTouch == false) {
                return;
            }

            PanelTween.pushPanel(new BsxqView(this.data));
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
                    if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end &&nowtime >= this.data.match_start_time * 1000 && nowtime <= this.data.match_start_time * 1000  + this.data.apply_delay_time * 1000) {
                        // console.log("到了这里");
                        //说明在延迟报名时间内
                        this.data.state = 2;
                        if (this.data.mz_level > this.data.apply_max_mz_level) {
                            //截止报名
                            this.data.state = 3;
                        }
                        if (this.data.havepeople >= this.data.apply_max_people&& this.data.reBuyCount <= 0) {
                            //截止报名
                            this.data.state = 3;
                        }
                        else if (this.data.cur_buy_count >= this.data.buy_count || this.data.reBuyCount >= this.data.player_buy_count) {
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
      
            
            if (this.data.type == "sng"|| this.data.satellite == 1) {
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


            if (this.data.signed == 1 || this.data.signed == 3) {
                this.alreadysignimg.visible = true;
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
            }

            this.titleTxt.text = this.data.titie;

            if (this.data.master_points_id != -1 && this.data.masterRule) {
                let myDate = new Date();
                let nowDate = DateUtils.formatDate(myDate);

                let zerotime = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
                  
                let datestrstart: string = this.data.masterRule.start_date;
                datestrstart = datestrstart.replace("/", "-").replace("/", "-");
                let datestampstart = new Date(datestrstart).getTime();  //大师赛开始的时间
                datestampstart = datestampstart - 8 * 3600 * 1000;

                let timestrstart = nowDate + " " + this.data.masterRule.start_time;
                let timestampstart = new Date(timestrstart).getTime();


                let masterstarttime = datestampstart + (timestampstart - zerotime);


                let datestrend: string = this.data.masterRule.end_date;
                datestrend = datestrend.replace("/", "-").replace("/", "-");
                let datestampend = new Date(datestrend).getTime();  //大师赛开始的时间
                datestampend = datestampend - 8 * 3600 * 1000;

                let timestrend = nowDate + " " + this.data.masterRule.end_time;
                let timestampend = new Date(timestrend).getTime();


                let masterendtime = datestampend + (timestampend - zerotime);


                // console.log("masterstarttime", masterstarttime);
                // console.log("masterendtime", masterendtime);

                let nowtime = new Date().getTime();

                if (nowtime > masterstarttime && nowtime < masterendtime) {

                    this.masterBtn.visible = true;
                    this.masterBtn.x = this.titleTxt.x + this.titleTxt.textWidth + 20;
                }


            }



            // this.sginmoneyTxt.text = String(this.data.signmoney);
            if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                this.sginmoneyTxt.text = "免费";
                
            } else if (this.data.signmoney == 0) {   
                let money = this.data.apply_score + this.data.service_score;
                this.sginmoneyTxt.text = "" + money;

            } else {
                let money = this.data.signmoney + this.data.service_gold;
                this.sginmoneyTxt.text = "" + money;
            }

            this.explainTxt.text = this.data.explain;

            if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                } else if (this.data.type == "mtt") {
                    this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                }
            } else {
                if (this.data.type == "sng"|| this.data.satellite == 1) {
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
            return "spr_jbs_line_ui";
        }


        public dispose(): void {
            super.dispose();
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            EventManager.removeCmd(Events.controlHContanier, this.controlHContanier, this);
        }


    }
}