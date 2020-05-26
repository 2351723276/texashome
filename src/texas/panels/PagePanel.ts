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
 * 分页面板
 */

module kelvin.texas {

    export interface PageTitleIF {
        core: egret.TextField | egret.Bitmap,
        key: string,
        isscale: boolean,
        offsetX: number,
        offsetY: number,
        chooseFt?: Function,
        unchooseFt?: Function,
        callBack: Function
        length: number,

    }

    export class PagePanel extends egret.DisplayObjectContainer {

        public constructor(titleH: number, singleH: number, ) {
            super();

            this.titleH = titleH;
            this.singleH = singleH;

            this.init();

            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        }


        private titleH: number;//标题的高度

        private singleH: number;//单个子容器的理论宽度

        /** 标题的容器 */
        private titleContainer: ScrollView;



        /** 横向的滑动容器 */
        public scrollViewH: ScrollView;


        /**  横向的容器*/
        public containerH: egret.Sprite;
        public touSpRect: egret.Sprite;



        public slideJudge: lzm.SwipeGestures;


        public init(): void {
            this.scrollViewH = new ScrollView();
            this.scrollViewH.scrollPolicyH = 'off';
            this.scrollViewH.scrollPolicyV = 'off';
            this.scrollViewH.bounces = false;
            this.scrollViewH.throwSpeed = 0;
            this.addChild(this.scrollViewH);




            this.titleContainer = new ScrollView();


            this.titleContainer.scrollPolicyH = "off";
            this.titleContainer.scrollPolicyV = "off";
            this.titleContainer.setShowSize(App.stageWidth, this.titleH + 5);
            // this.titleContainer.throwSpeed = 0;
            // this.titleContainer.bounces = false;

            this.addChild(this.titleContainer);


            this.containerH = new egret.Sprite();
            this.scrollViewH.container.addChild(this.containerH);
            this.scrollViewH.y = this.titleH;

            this.touSpRect = Tool.createRectSprite(App.stageWidth, App.stageHeight - this.titleH, 0xffffff, 0, this.titleH, 0);

            this.containerH.addChild(this.touSpRect);

            this.chooseLine = Tool.createBitmapByName("img_img_pyqdz_xuanz");
            this.chooseLine.scale9Grid = new egret.Rectangle(5, 0, this.chooseLine.width - 5, this.chooseLine.height);
            this.titleContainer.container.addChild(this.chooseLine);
            this.chooseLine.y = this.titleH;

            this.slideJudge = new lzm.SwipeGestures(this.containerH, this.slideCallback.bind(this));


            this.containerH.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
            this.containerH.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.movePanel, this);
            // this.containerH.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetSlide, this);

            this.containerH.addEventListener(egret.TouchEvent.TOUCH_END, this.resetSlide, this);
            this.containerH.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.resetSlide, this);
            this.containerH.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.resetSlide, this);


            this.containerH.touchEnabled = false;

        }
        public addToStage(): void {

            let length = Object.keys(this.pageTitleData).length;

            this.scrollViewH.setScrollSize(App.stageWidth, App.stageHeight - this.y - this.titleH - 10);
            this.touSpRect.width = App.stageWidth * length;

            this.touSpRect.height = App.stageHeight - this.y - this.titleH - 10;
        }


        private beginTouch(e: egret.TouchEvent): void {


            this.startTime = new Date().getTime();
            this.startTouchX = e.stageX;
            // console.log(this.startTime);

        }


        public movePanel(e: egret.TouchEvent): void {
            if (this.direction == "left" || this.direction == "right") {

                if (!this.startPoint) {
                    this.startPoint = new egret.Point();
                    this.startPoint.x = e.stageX;
                    this.startPoint.y = e.stageY;
                }

                let distancex = (this.startPoint.x - e.stageX);

                this.startPoint.x = e.stageX;
                this.startPoint.y = e.stageY;

                let nextX = this.containerH.x - distancex;
                if (nextX > 0) {
                    return;
                }

                let length = Object.keys(this.pageTitleData).length;

                if (nextX < -App.stageWidth * (length - 1)) {
                    return;
                }

                let rationum = distancex / this.titleArr.length;

                this.chooseLine.x = this.chooseLine.x + rationum;

                this.containerH.x = nextX;

            }
        }


        private startPoint: egret.Point;

        private startTime: number;

        private startTouchX: number;

        public resetSlide(e: egret.TouchEvent): void {

            console.log("结束滑动");

            let nowtime = new Date().getTime();
            let timedistance = nowtime - this.startTime;

            let distancerange = Math.abs(e.stageX - this.startTouchX);

            let data: PageTitleIF;
            if (timedistance < 300 || distancerange > 200) {
                console.log("触发自动换页");

                let index: number = 0; //看需要滑动到哪个
                for (let i = 0; i < this.titleArr.length; i++) {
                    if (this.titleArr[i].name == this.nowChoose) {
                        index = i;
                    }
                }

                if (this.direction == "right") {
                    let leftindex = index - 1;
                    if (leftindex < 0) {
                        leftindex = 0;
                    }
                    index = leftindex;
                } else if (this.direction == "left") {
                    let rightindex = index + 1;
                    if (rightindex > this.titleArr.length - 1) {
                        rightindex = this.titleArr.length - 1;
                    }
                    index = rightindex;
                }

                this.nowChoose = this.titleArr[index].name;

                data = this.pageTitleData[this.nowChoose];

                let scV: ScrollView = this.scrollViewVs[this.nowChoose].scrollView;

                let h = (data.length - 1) * this.singleH;

                // h = 2160
                egret.Tween.removeTweens(this.chooseLine);
                egret.Tween.get(this.chooseLine).to({ x: this.titleArr[index].x }, 300, egret.Ease.quartOut);
                // console.log("this.scrollViewVs[this.nowChoose].x", this.titleArr[this.nowChoose].x);

                egret.Tween.removeTweens(this.containerH);
                egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(() => {

                }, this);



            } else { //这是靠中心线判断

                let index: string = "";//离中心线最近的面板的key

                let lastabsnum = 1000000000;

                let seat: number = 0;

                let realseat: number = 0;
                for (let i in this.scrollViewVs) {
                    let nowx = this.scrollViewVs[i].x + this.containerH.x;
                    let abs = Math.abs(0 - nowx);
                    if (abs < lastabsnum) {
                        index = i;
                        lastabsnum = abs;
                        realseat = seat;
                    }
                    seat++;
                }

                this.nowChoose = index;

                data = this.pageTitleData[this.nowChoose];

                let scV: ScrollView = this.scrollViewVs[this.nowChoose].scrollView;

                let h = (data.length - 1) * this.singleH;

                // h = 2160
                egret.Tween.removeTweens(this.chooseLine);
                egret.Tween.get(this.chooseLine).to({ x: this.titleArr[realseat].x }, 300, egret.Ease.quartOut);
                // console.log("this.scrollViewVs[this.nowChoose].x", this.titleArr[this.nowChoose].x);

                egret.Tween.removeTweens(this.containerH);
                egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(() => {

                }, this);

            }

            for (let i in this.pageTitleData) {
                let titledata: PageTitleIF = this.pageTitleData[i];
                if (i != e.target.name) {
                    if (titledata.unchooseFt) {
                        titledata.unchooseFt();
                    }

                }
            }
            if (data.chooseFt) {
                data.chooseFt();
            }
            if (data.callBack) {
                data.callBack();
            }


            this.direction = "";
            this.containerH.touchEnabled = false;
            this.touSpRect.touchEnabled = false;
            this.isJuge = true;
            this.startPoint = null;
            this.startTouchX = 0;
            this.startTime = 0;
            egret.setTimeout(() => {
                EventManager.dispatchCmd(Events.controlHContanier, true);
            }, this, 50)

            this.containerH.touchEnabled = false;
            this.touSpRect.touchEnabled = false;
            for (let i in this.scrollViewVs) {
                if (this.scrollViewVs[i].scrollView) {
                    this.scrollViewVs[i].scrollView.scrollPolicyV = "on";
                }
            }



        }

        private direction: string;

        public isJuge: boolean = true;

        public slideCallback(data: any): void {

            console.log(data);


            if (this.isJuge == false) {
                return;
            }

            if (data == "left" || data == "right") {
                this.direction = data;
                this.containerH.touchEnabled = true;
                this.touSpRect.touchEnabled = true;
                for (let i in this.scrollViewVs) {
                    if (this.scrollViewVs[i].scrollView) {
                        this.scrollViewVs[i].scrollView.scrollPolicyV = "off";
                    }
                }
                this.isJuge = false;
                EventManager.dispatchCmd(Events.controlHContanier, false);



            } else {

                this.direction = data;
                this.containerH.touchEnabled = false;
                this.touSpRect.touchEnabled = false;
                for (let i in this.scrollViewVs) {
                    if (this.scrollViewVs[i].scrollView) {
                        this.scrollViewVs[i].scrollView.scrollPolicyV = "on";
                    }
                }
                this.isJuge = false;
            }

        }


        //分页的标题
        private pageTitleData = {};


        private scrollViewVs = {};



        public addPage(core: egret.TextField | egret.Bitmap, sc: BasePanel, key: string, callBack: Function, isscale: boolean = false, chooseFt: Function = null, unchooseFt: Function = null, offsetX: number = 0, offsetY: number = 0): void {
            if (!this.pageTitleData[key]) {
                this.pageTitleData[key] = {};
            }

            this.pageTitleData[key]["core"] = core;
            this.pageTitleData[key]["key"] = key;
            this.pageTitleData[key]["isscale"] = isscale;
            this.pageTitleData[key]["offsetX"] = offsetX;
            this.pageTitleData[key]["offsetY"] = offsetY;
            this.pageTitleData[key]["chooseFt"] = chooseFt;
            this.pageTitleData[key]["unchooseFt"] = unchooseFt;
            this.pageTitleData[key]["callBack"] = callBack;


            let length = Object.keys(this.pageTitleData).length;

            this.pageTitleData[key]["length"] = length;

            this.scrollViewVs[key] = sc;
            sc.x = App.stageWidth * (length - 1);
            let distancex = this.singleH - sc.width;
            sc.x = sc.x + distancex / 2;
            // sc.y = this.titleH + 10;

            this.containerH.addChild(sc);

            this.updateTitle();

            if (length == 1) {
                this.nowChoose = key;
            }



        }

        public getContainerByKey(key: string): BasePanel {
            return this.scrollViewVs[key]
        }


        private titleArr: egret.Sprite[] = [];

        private chooseLine: egret.Bitmap;
        public updateTitle(): void {
            for (let i = 0; i < this.titleArr.length; i++) {
                this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.mouseUp, this);
                this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.mouseClick, this);
            }
            this.titleArr = [];
            this.titleContainer.removeAllChild();
            this.titleContainer.container.addChild(this.chooseLine);
            let length = Object.keys(this.pageTitleData).length;
            let numtitle = length;
            if (length > 4) {
                numtitle = 4;
                console.log(length * App.stageWidth / 4);

                this.titleContainer.setScrollSize(length * App.stageWidth / 4, this.titleH);
                this.titleContainer.scrollPolicyH = "on";
            }

            let w = App.stageWidth / numtitle;

            this.chooseLine.width = w;
            this.chooseLine.anchorOffsetX = this.chooseLine.width / 2;

            let index = 0;



            for (let i in this.pageTitleData) {
                index++;
                let titlesp = Tool.createSprite(0, 0, w, this.titleH);
                let disp = Tool.createRectSprite(w, this.titleH, 0xffffff, 0, 0, 0);
                titlesp.addChild(disp);
                // titlesp.width = w;
                // titlesp.height = this.titleH;
                Tool.center(titlesp);
                titlesp.x = index * w - w / 2;
                titlesp.y = this.titleH / 2;
                let core = this.pageTitleData[i].core;
                titlesp.addChild(core);


                core.x = titlesp.width / 2 - core.width / 2;
                core.y = titlesp.height / 2 - core.height / 2;
                //  core.y =  titlesp.height / 2;
                titlesp.touchEnabled = true;
                titlesp.name = i;
                titlesp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                titlesp.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                titlesp.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.mouseUp, this);
                titlesp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mouseClick, this);
                this.titleContainer.container.addChild(titlesp);
                this.titleArr.push(titlesp);

            }

            if (this.titleArr[0]) {
                this.chooseLine.x = this.titleArr[0].x;
            }

        }




        public nowChoose: string;

        public mouseClick(e: egret.TouchEvent): void {



            if (this.nowChoose == e.target.name) {
                console.log("选择了同一页，不做动画");
                return;
            }
            this.nowChoose = e.target.name;

            let data: PageTitleIF = this.pageTitleData[e.target.name];

            let scV: ScrollView = this.scrollViewVs[e.target.name].scrollView;
            let h = (data.length - 1) * this.singleH;
            // h = 2160

            let target = e.target;
            for (let i = 0; i < this.titleArr.length; i++) {
                if (this.titleArr[i].name == e.target.name) {
                    target = this.titleArr[i];
                }
            }

            egret.Tween.removeTweens(this.chooseLine);
            egret.Tween.get(this.chooseLine).to({ x: target.x }, 300, egret.Ease.quartOut);

            // egret.Tween.removeTweens(this.scrollViewH.viewport);
            // egret.Tween.get(this.scrollViewH.viewport).to({ scrollH: h }, 300).call(() => {

            // }, this);
            egret.Tween.removeTweens(this.containerH);
            egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(() => {

            }, this);


            for (let i in this.pageTitleData) {
                let titledata: PageTitleIF = this.pageTitleData[i];
                if (i != e.target.name) {
                    if (titledata.unchooseFt) {
                        titledata.unchooseFt();
                    }

                }
            }
            if (data.chooseFt) {
                data.chooseFt();
            }
            if (data.callBack) {
                data.callBack(e.target.name);
            }


        }

        public mouseDown(e: egret.TouchEvent): void {
            if (this.pageTitleData[e.target.name].isscale == false) {
                return;
            }
            e.target.scaleX = 1.1;
            e.target.scaleY = 1.1;

        }

        public mouseUp(e: egret.TouchEvent): void {
            e.target.scaleX = 1;
            e.target.scaleY = 1;
        }


        public dispose(): void {

            this.containerH.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
            this.containerH.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.movePanel, this);
            this.containerH.removeEventListener(egret.TouchEvent.TOUCH_END, this.resetSlide, this);
            this.containerH.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.resetSlide, this);
            this.containerH.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.resetSlide, this);
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        }



    }
}