/**
 * 
 * 
 * 
 * 
 * 背包主界面
 */


module kelvin.texas {

    export class PackView extends BasePanel {
        public constructor(type: number) {  //1是背包  2是背包记录
            super(true);

            this.type = type;
            this.createGameScene();


        }

        private type: number;

        private bg: egret.Bitmap;

        private titleTxt: egret.TextField;

        private historyBtn: starlingswf.SwfButton;

        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);

            if (this.type == 1) {
                this.historyBtn.visible = true;
                this.titleTxt.text = "背包";
            } else {
                this.historyBtn.visible = false;
                this.titleTxt.text = "背包记录";
            }


            this.scrollView.y = 100;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 100);

            // NoticeApi.getActivityNotices(this.getInfo.bind(this));

            this.getInfo(null);

        }

        private infoArr: PackInfoIF[];
        private getInfo(data: any): void {

            this.infoArr = [];

            // this.infoArr = [{ name: "门票1", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
            // { name: "门票2", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
            // { name: "门票3", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
            // { name: "门票4", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
            // { name: "门票5", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
            // { name: "门票6", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
            // { name: "门票7", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
            // { name: "门票8", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
            // { name: "门票9", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
            // { name: "门票10", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
            // { name: "门票11", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
            // ]

            let serverdata = MatchData.getUserPropInfo();
            for (let j in serverdata.data) {
                for (let i in serverdata.data[j]) {
                    let configs: any;
                    let libdata = serverdata.data[j][i];

                    for (let k in serverdata.configs) {
                        if (libdata.cfgId == serverdata.configs[k].cfgId) {
                            configs = serverdata.configs[k];
                            break;
                        }
                    }

                    if (!configs) {
                        continue;
                    }

                    let mindata: PackInfoIF = {
                        name: configs.name,
                        startTime: DateUtils.formatDate(libdata.get_time * 1000),
                        endTime: DateUtils.formatDate(libdata.get_time * 1000 + configs.expirationDate * 1000),
                        type: configs.describe1,
                        desc: configs.describe2,
                        state: -1,
                    }

                    if (libdata.type == 0) {
                        let nowtime = new Date().getTime();
                        if (nowtime <= libdata.get_time * 1000 + configs.expirationDate * 1000) {
                            mindata.state = 1;
                        } else {
                            mindata.state = 3;
                        }
                    } else if (libdata.type == 1) {
                        mindata.state = 2;
                    }

                    if (this.type == 1) {
                        if (mindata.state == 1) {
                            this.infoArr.push(mindata);
                        }
                    } else if (this.type == 2) {
                        if (mindata.state == 2 || mindata.state == 3) {
                            this.infoArr.push(mindata);
                        }
                    }

                }


            }


            this.createUI();
        }


        public uiArr: PackLineUI[];
        private async createUI(): Promise<void> {
            this.uiArr = [];

            for (let i = 0; i < this.infoArr.length; i++) {
                let min = new PackLineUI(this.infoArr[i]);
                this.uiArr.push(min);
                this.scrollView.container.addChild(min);
                min.y = i * 240 + 20;
            }

            this.scrollView.setScrollSize(this.width, this.infoArr.length * 240 + 10);

        }


        public on_historyBtn(e: egret.TouchEvent): void {
            PanelTween.pushPanel(new PackView(2));
        }

        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)

            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_pack_view";
        }

        public dispose(): void {
            super.dispose();


        }



    }


}