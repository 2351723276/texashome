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
 * 战绩面板
 */

module kelvin.texas {

    export class RankView extends BasePanel {
        public constructor() {
            super(true);


            this.createGameScene();

        }
        private bg: egret.Bitmap;

        private view: starlingswf.SwfSprite;


        private allBtn: egret.Bitmap;

        private downImg: egret.Bitmap;

        private upImg: egret.Bitmap;

        public isdrop_down: boolean;



        private createGameScene(): void {

            this.view = <starlingswf.SwfSprite>this.$children[1];

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.isdrop_down = false;

            this.allBtn.touchEnabled = true;
            this.allBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchChoose, this);

            this.downImg.visible = false;

            this.createChooseSp();


            this.scrollView.y = 165;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 165);

            // this.getInfo();



            MatchApi.getRoleZhanJi(this.getInfo.bind(this));


        }



        private infoArr: RankDeInfoIF[];

        private getInfo(data: any): void {

            this.infoArr = [];

            // this.infoArr = [{ type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 0 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 0 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
            // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },]


            if (data.logs) {

                for (let i = 0; i < data.logs.length; i++) {
                    let min: RankDeInfoIF = {
                        type: "sng",
                        time: DateUtils.timestampToTime(data.logs[i].startTime),
                        title: data.logs[i].title,
                        buy: data.logs[i].buy,
                        rank: data.logs[i].rank,
                        matchid: data.logs[i].mid,
                        zhanjiId: data.logs[i].zhanjiId,
                        matchWin: data.logs[i].winCount,
                        reward: data.logs[i].reward,
                        matchLive: data.logs[i].totalCount,
                        matchJackpot: data.logs[i].people,
                        score: data.logs[i].reward,
                        reward_type: data.logs[i].rewardType,
                        matchtype: "",
                    }
                    if (data.logs[i].type == 1) {
                        min.type = "sng";
                    } else if (data.logs[i].type == 2) {
                        min.type = "mtt";
                    }

                    if (data.logs[i].type1 == 1) {
                        min.matchtype = "common";
                    } else {
                        min.matchtype = "wcaa";
                    }

                    this.infoArr.push(min);
                }
            }

            this.updateUI("all");
        }


        private uiArr: RankLine[];
        private updateUI(name: string): void {

            if (this.uiArr) {
                for (let i = 0; i < this.uiArr.length; i++) {
                    this.uiArr[i].dispose();
                }
            }
            this.uiArr = [];

            let infoArr: RankDeInfoIF[] = [];
            if (name == "all") {
                for (let i = 0; i < this.infoArr.length; i++) {
                    infoArr.push(this.infoArr[i]);
                }
            } else {
                for (let i = 0; i < this.infoArr.length; i++) {
                    if (this.infoArr[i].type == name) {
                        infoArr.push(this.infoArr[i])
                    }

                }
            }




            for (let i = 0; i < infoArr.length; i++) {
                let ui = new RankLine(infoArr[i]);
                this.scrollView.container.addChild(ui);
                this.uiArr.push(ui);
                ui.y = i * 165;
            }



            this.scrollView.setScrollSize(App.stageWidth, this.infoArr.length * 165);

            this.scrollView.viewport.scrollV = 0;

        }


        private chooseSp: egret.Sprite;

        private chooseTypeArr = [{ name: "sng", type: 1 }, { name: "mtt", type: 2 }];

        private choosebg: egret.Bitmap;

        private maskSc: ScrollView;

        private chooseUIArr: egret.Sprite[];
        private createChooseSp(): void {

            this.chooseUIArr = [];

            this.chooseSp = new egret.Sprite();

            this.choosebg = Tool.createBitmapByName("img_img_zj_xailk");
            this.chooseSp.addChild(this.choosebg);

            let singh = 210 / 3;

            for (let i = 0; i < this.chooseTypeArr.length; i++) {
                let minsp = new egret.Sprite();
                let rect = Tool.createRectSprite(this.width, singh, 0x000000, 0, 0, 0);
                rect.name = String(this.chooseTypeArr[i]["name"]);
                rect.touchEnabled = true;
                rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchRect, this);
                this.chooseUIArr.push(rect);
                minsp.addChild(rect);
                let line = Tool.createBitmapByName("img_img_zj_fjx");
                minsp.addChild(line);
                let txt = Tool.createTextFiled(30, 15, 200, 30, this.chooseTypeArr[i].name, 28, 0xa7a7a7, "left");
                minsp.addChild(txt);
                minsp.y = i * singh + singh;
                this.chooseSp.addChild(minsp);

            }

            this.choosebg.scale9Grid = new egret.Rectangle(20, 20, this.choosebg.width - 20, this.choosebg.height - 20);
            this.choosebg.height = this.chooseTypeArr.length * singh + singh;

            this.chooseSp.width = this.choosebg.width;
            this.chooseSp.height = this.choosebg.height;


            this.maskSc = new ScrollView();
            this.maskSc.scrollPolicyV = "off";
            this.maskSc.scrollPolicyH = "off";
            this.view.addChildAt(this.maskSc, 0);

            this.maskSc.setShowSize(this.width, singh);
            this.maskSc.container.addChild(this.chooseSp);
            this.maskSc.y = this.allBtn.y;

            this.chooseSp.visible = false;
        }

        private touchRect(e: egret.TouchEvent): void {
            // if(e.target.name == "sng"){

            // }else if(e.target.name)


            this.updateUI(e.target.name);
            this.touchChoose(null);

        }


        private touchChoose(e: egret.TouchEvent): void {
            this.isdrop_down = !this.isdrop_down;

            this.upImg.visible = !this.isdrop_down;
            this.downImg.visible = this.isdrop_down;

            if (this.isdrop_down == true) {
                this.showChoose();
            } else {
                this.hideChoose();
            }
        }


        public showChoose(): void {
            this.chooseSp.visible = true;
            this.allBtn.alpha = 0;

            egret.Tween.removeTweens(this.maskSc);
            egret.Tween.get(this.maskSc).to({ height: this.chooseSp.height }, 100);


        }


        public hideChoose(): void {

            let singh = 210 / 3;
            egret.Tween.removeTweens(this.maskSc);
            egret.Tween.get(this.maskSc).to({ height: singh }, 100).call(() => {
                this.chooseSp.visible = false;
                this.allBtn.alpha = 1;
            }, this)


        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_rank_view";
        }

        public dispose(): void {
            super.dispose();

            this.allBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchChoose, this);

        }
    }
}