/**
 * 
 * 
 * 
 * 
 * 消息主界面
 */


module kelvin.texas {

    export class NewsView extends BasePanel {
        public constructor() {
            super(true);


            this.createGameScene();

        }

        private bg: egret.Bitmap;


        private clearBtn: starlingswf.SwfButton;

        private createGameScene(): void {

            this.bg = Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, App.stageWidth, App.stageHeight);
            this.addChildAt(this.bg, 0);


            this.scrollView.y = 100;
            this.scrollView.setShowSize(App.stageWidth, App.stageHeight - 100);

            // this.getInfo();

            RoleApi.getMessage(this.getInfo.bind(this));
        }

        private infoArr: NewsInfoIF[];
        private getInfo(data: any): void {

            this.infoArr = [];

            // this.infoArr = [{ title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", state: 6, time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", state: 1, time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", state: 0, time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
            // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", time: "4月3日 10:00" },]

            if (data.msg) {
                for (let i = 0; i < data.msg.length; i++) {
                    let min: NewsInfoIF;
                    if (data.msg[i].tag == "getGold") {
                        min = {
                            type: "xt",
                            title: "系统提示：" + data.msg[i].source,
                            content: "金币" + data.msg[i].goldVal + "已返还",
                            time: data.msg[i].gettime,
                        }
                    } else if (data.msg[i].tag == "getScore") {
                        min = {
                            type: "xt",
                            title: "系统提示：" + data.msg[i].source,
                            content:"积分" + data.msg[i].score + "已返还",
                            time: data.msg[i].gettime,
                        }
                    }
                    if (min) {
                        this.infoArr.push(min);
                    }

                }

            }

            this.createUI();

        }


        public uiArr: NewsLineUI[];
        private createUI(): void {

            if (this.uiArr) {
                for (let i = 0; i < this.uiArr.length; i++) {
                    Tool.removeFromParent(this.uiArr[i]);
                }
            }
            this.uiArr = [];

            for (let i = 0; i < this.infoArr.length; i++) {
                let line: NewsLineUI = new NewsLineUI(this.infoArr[i]);
                this.scrollView.container.addChild(line);
                this.uiArr.push(line);
                line.y = 170 * i;
            }

            this.scrollView.setScrollSize(App.stageWidth, this.infoArr.length * 170);
            this.scrollView.viewport.scrollV = 0;
        }

        public on_clearBtn(e: egret.TouchEvent): void {

            RoleApi.clearMessage(this.clearSuccess.bind(this))

        }


        public clearSuccess(): void {
            ApiState.showText("清除成功");
            this.infoArr = [];

            this.createUI();
        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)
            PanelTween.popPanel();
            EventManager.dispatchCmd(Events.gotoMatchView, null);

        }


        public mainAssetName(): string { 
            return "spr_news_view";
        }

        public dispose(): void {
            super.dispose();

        }



    }


}