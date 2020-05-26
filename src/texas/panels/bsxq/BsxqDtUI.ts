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
 * 比赛详情的大厅UI
 */

module kelvin.texas {

    export class BsxqDtUI extends BasePanel {

        public constructor(data: MatchMaxInfoIF) {
            super();
            this.data = data;

            this.createGameScene();

        }

        private data: MatchMaxInfoIF;


        private csjfpTxt: egret.TextField;

        private ybmTxt: egret.TextField;

        private mrcssxTxt: egret.TextField;

        private bmfTxt: egret.TextField;

        private titleTxt: egret.TextField;

        private ssTxt1: egret.TextField;
        private jcphTxt: egret.TextField;
        private plTxt: egret.TextField;


        private mzjgbTxt: egret.TextField;

        private nowLevelTxt: egret.TextField;

        private nextLevelTxt: egret.TextField;

        private zmsjTxt: egret.TextField;

        private jfpTxt: egret.TextField;

        private line5Txt: egret.TextField;

        private icon1: egret.Bitmap;

        private icon2: egret.Bitmap;


        private baomingTxt: egret.TextField;

        private gthImg3: egret.Bitmap;

        private createGameScene(): void {

            if (this.data.matchtype == "wcaa") {
                this.mzjgbTxt.text = "WCAA盲注结构表";
                this.ssTxt1.visible = false;
                this.jcphTxt.visible = false;
                this.plTxt.visible = false;
                this.icon1.visible = false;
                this.icon2.visible = false;
            } else {
                if (this.data.type == "sng") {
                    this.mzjgbTxt.text = "SNG盲注结构表"
                } else if (this.data.type = "mtt") {
                    this.mzjgbTxt.text = "MTT盲注结构表"
                }
            }
            this.gthImg3.x = this.mzjgbTxt.textWidth + 5 + this.mzjgbTxt.x;

            this.titleTxt.text = this.data.titie;


            this.mzjgbTxt.touchEnabled = true;
            this.mzjgbTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMZB, this);

            this.jcphTxt.touchEnabled = true;
            this.jcphTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showJLPH, this);

            this.plTxt.touchEnabled = true;
            this.plTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPL, this);


        }


        public updateUI(): void {



            this.csjfpTxt.text = "" + this.data.init_game_score;



            this.mrcssxTxt.text = "" + this.data.buy_count;
            this.bmfTxt.text = "" + this.data.signmoney;

            if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                this.bmfTxt.text = "免费";
            } else if (this.data.signmoney == 0) {
                this.baomingTxt.text = "报名费（积分）";
                if (this.data.service_score == 0) {
                    this.bmfTxt.text = "" + this.data.apply_score;
                } else {
                    this.bmfTxt.text = "" + this.data.apply_score + "+" + this.data.service_score;
                }
            } else {
                this.baomingTxt.text = "报名费（金币）";
                if (this.data.service_gold == 0) {
                    this.bmfTxt.text = "" + this.data.signmoney;
                } else {
                    this.bmfTxt.text = "" + this.data.signmoney + "+" + this.data.service_gold;
                }
            }



            if (this.data.serverstate == 1 || this.data.serverstate == 2) {

                

                let nowmzdata = this.data.mzTable[String(this.data.mz_level)];

                if (nowmzdata) {
                    this.nowLevelTxt.text = "当前等级" + this.data.mz_level + " : " + nowmzdata.xm + "/" + nowmzdata.dm + " " + "前注" + nowmzdata.qz;
                }
                let nextmzdate = this.data.mzTable[String(this.data.mz_level + 1)];
                if (nextmzdate) {
                    this.nextLevelTxt.text = "下一等级" + (this.data.mz_level + 1) + " : " + nextmzdate.xm + "/" + nextmzdate.dm + " " + "前注" + nextmzdate.qz;
                }


                this.zmsjTxt.text = "涨盲时间 : " + this.data.mz_interval / 60 + "分钟";
                this.line5Txt.text = "";


                if (this.data.type == "sng") {
                    this.ybmTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                } else if (this.data.type == "mtt") {
                    this.ybmTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                }


                egret.setTimeout(() => {
                    let min = 10000000000;
                    let max = 0;

                    let index = 0;

                    if (this.data.roomInfo) {
                        for (let i = 0; i < this.data.roomInfo.length; i++) {
                            if (max < this.data.roomInfo[i].max) {
                                max = this.data.roomInfo[i].max;
                            };
                            if (min > this.data.roomInfo[i].min) {
                                min = this.data.roomInfo[i].min;
                            }
                            index++;
                        }
                    }

                    let all = this.data.init_game_score * this.data.cur_buy_count;
                    let ave = all / (this.data.havepeople - this.data.over_people);
                    if (index == 0 || this.data.havepeople == 0) {
                        ave = 0;
                        max = 0;
                        min = 0;
                    }
                    this.jfpTxt.text = "记分牌 : " + " 最大" + Math.floor(max) + " 平均" + Math.floor(ave) + " 最小" + Math.floor(min);
                }, this, 100)


            } else {


                if (this.data.type == "sng") {
                    this.ybmTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                } else if (this.data.type == "mtt") {
                    this.ybmTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                    if (this.data.apply_max_people > 9999) {
                        this.ybmTxt.text = "" + (this.data.havepeople);
                    }
                }

                this.nowLevelTxt.text = "涨盲时间：" + Math.round(this.data.mz_interval / 60 * 100) / 100 + "分钟";
                this.nextLevelTxt.text = "单桌人数：" + this.data.table_people;
                this.jfpTxt.text = "终止报名：第" + this.data.apply_max_mz_level + "盲注等级开始";
                this.zmsjTxt.text = "重购次数：" + this.data.buy_count;

                if (!this.data.break_time_long || this.data.break_time_long == -1 || this.data.break_time_long == 0) {
                    this.line5Txt.text = "中场休息：" + "无";
                } else {
                    this.line5Txt.text = "中场休息：" + "每隔" + Math.round(this.data.break_interval / 60 * 100) / 100 + "分钟休息" + Math.round(this.data.break_time_long / 60 * 100) / 100 + "分钟";
                }


            }



        }


        public showSSJF(): void {
            this.ssTxt1.visible = true;
            this.jcphTxt.visible = true;
            this.plTxt.visible = true;
            this.icon1.visible = true;
            this.icon2.visible = true;

        }

        public hideSSJF(): void {
            this.ssTxt1.visible = false;
            this.jcphTxt.visible = false;
            this.plTxt.visible = false;
            this.icon1.visible = false;
            this.icon2.visible = false;
        }


        private showMZB(): void {
            // EventManager.dispatchCmd(Events.createMZJGBView, this.data);

            PanelTween.pushPanel(new MzjgbView(this.data));

        }


        private showJLPH(): void {
            EventManager.dispatchCmd(Events.gotoJLPage, null);


        }


        private showPL(): void {

            // PanelTween.pushPanel(new CardScoreView());

        }


        public mainAssetName(): string {
            return "spr_bsxq_dt_ui";
        }


        public dispose(): void {
            super.dispose();
            this.mzjgbTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showMZB, this);
            this.jcphTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showJLPH, this);
            this.plTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showPL, this);

        }

    }
}