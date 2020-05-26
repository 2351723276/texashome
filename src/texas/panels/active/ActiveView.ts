/**
 * 
 * 
 * 
 * 
 * 活动主界面
 */


module kelvin.texas {

    export class ActiveView extends BasePanel {
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

            NoticeApi.getActivityNotices(this.getInfo.bind(this));


        }

        private infoArr: ActiveInfoIF[];
        private getInfo(data: any): void {

            this.infoArr = [];

            // this.infoArr = [{ imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
            // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },]

            if (data.notices != null) {

                for (let i in data.notices) {
                    let mindata: ActiveInfoIF = {
                        imgurl: data.notices[i].titleUrl,
                        imglengthArr: data.notices[i].urls,
                    }
                    this.infoArr.push(mindata);
                }

            }


            this.createUI();
        }


        public uiArr: egret.Bitmap[];
        private async createUI(): Promise<void> {
            this.uiArr = [];
            // for(let i = 0 ; i< this.infoArr.length;i++){
            //     let line:ActiveLineUI = new ActiveLineUI(this.infoArr[i]);
            //     this.scrollView.container.addChild(line);
            //     this.uiArr.push(line);
            //     line.y = 800*i;
            // }

            let imgAllH: number = 0;
            for (let i = 0; i < this.infoArr.length; i++) {
                let img = new egret.Bitmap();
                img.x = 8;
                img.width = App.stageWidth - 16;
                img.texture = await Tool.getTextureByUrlOrName(this.infoArr[i].imgurl);
                img.y = imgAllH;
                img.name = this.infoArr[i].imgurl;
                this.scrollView.container.addChild(img);
                imgAllH = imgAllH + img.height + 15;
                this.scrollView.setScrollSize(App.stageWidth, imgAllH);
                this.uiArr.push(img);
                img.touchEnabled = true;
                img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchImg, this);

            }

            // this.scrollView.setScrollSize(App.stageWidth,this.infoArr.length*800);
        }


        private touchImg(e: egret.TouchEvent): void {
            for (let i = 0; i < this.uiArr.length; i++) {
                if (e.target.name == this.infoArr[i].imgurl) {
                    if (this.infoArr[i].imglengthArr != null && this.infoArr[i].imglengthArr.length > 0) {
                        PanelTween.pushPanel(new NoticeInfo(this.infoArr[i].imglengthArr));
                    }
                    break;
                }
            }
        }


        public on_backBtn(e: egret.TouchEvent): void {
            // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
            //     this.dispose();
            // }, this)

            PanelTween.popPanel();

        }


        public mainAssetName(): string {
            return "spr_active_view";
        }

        public dispose(): void {
            super.dispose();
            for (let i = 0; i < this.uiArr.length; i++) {
                this.uiArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchImg, this);
            }

        }



    }


}