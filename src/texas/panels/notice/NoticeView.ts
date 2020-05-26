/**
 * 
 * 
 * 
 * 
 * 活动主界面
 */


module kelvin.texas {

    export class NoticeView extends BasePanel {
        public constructor() {
            super(true);


            this.createGameScene();

        }

        private bg: egret.Bitmap;

        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.scrollView.y = 100;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 100);

            this.clearBtn.visible =false;


            NoticeApi.getNotices(this.getInfo.bind(this));


        }

        private clearBtn:starlingswf.SwfButton;
        private infoArr: ActiveInfoIF[];
        private getInfo(data: any): void {

            this.infoArr = [];
          

            // this.infoArr = [{ time: "4月1日 04:00", imgurl: "", content: "测试哈哈哈啊哈哈哈哈啊哈哈", name: "朋友圈德州", title: "赛事通知" },
            // { time: "4月1日 04:00", imgurl: "", content: "测试哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦 哦哦哦哦哦哦哦哦哦哦哦", name: "朋友圈德州", title: "赛事通知" },
            // { time: "4月1日 04:00", imgurl: "", content: "测试期期IQIQIQ已诶诶诶IE诶法卡萨积分卡就反复E", name: "朋友圈德州", title: "赛事通知" },
            // { time: "4月1日 04:00", imgurl: "", content: "测试", name: "朋友圈德州", title: "赛事通知" },
            // { time: "4月1日 04:00", imgurl: "", content: "测试哈哈哈哈哈hi随风is广东省广东省刚开始国际快递回顾的看后感看到过黑客帝国和端口号光电开关的看低功耗关卡等级疯狂夺金疯狂夺金分开打飞机", name: "朋友圈德州", title: "赛事通知" },]
            if (data.notices != null) {
                for (let i in data.notices) {
                    let mindata: ActiveInfoIF = {
                        time: data.notices[i].gettime,
                        imgurl: data.notices[i].url,
                        name: "朋友圈德州",
                        content: data.notices[i].text,
                        title: data.notices[i].title,
                    }
                    this.infoArr.push(mindata);
                }

            }
            
            

            this.createUI();
        }


        public uiArr: ActiveLineUI[];
        private createUI(): void {
            this.uiArr = [];
            let allTextH: number = 0;
            for (let i = 0; i < this.infoArr.length; i++) {
                let line: ActiveLineUI = new ActiveLineUI(this.infoArr[i]);
                this.scrollView.container.addChild(line);
                this.uiArr.push(line);
                line.y = 700 * i + allTextH;
                allTextH = allTextH + line.contentH;
            }

            this.scrollView.setScrollSize(App.stageWidth, this.infoArr.length * 700 + allTextH);
        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_gonggao_view";
        }

        public dispose(): void {
            super.dispose();

        }



    }


}