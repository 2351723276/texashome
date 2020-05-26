module kelvin.texas {

    export class BsxqWjLine extends eui.ItemRenderer {
        public constructor() {
            super();

            this.createGameScene();
        }


        public data: WJInfoIF;

        private nameTxt: egret.TextField;

        private ratioTxt: egret.TextField;

        private rewardTxt: egret.TextField;

        private line: egret.Bitmap;

        private img: egret.Bitmap;

        private levelTxt: egret.TextField;

        private heartimg: egret.Bitmap;


        private heartTxt: egret.TextField;
        private numdisy: number = 2;


        private createGameScene(): void {




            this.ratioTxt = Tool.createTextFiled(270, 25 - this.numdisy, 200, 40, "", 26, 0xffffff, "center");
            this.addChild(this.ratioTxt);


            this.rewardTxt = Tool.createTextFiled(420, 25 - this.numdisy, 200, 40, "", 26, 0xffffff, "right");
            this.addChild(this.rewardTxt);

            this.line = Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiexian", false, 5, 70);
            this.addChild(this.line);


            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.floatUid, this);

            this.height = 70;

            this.iscanTouch = false;

            EventManager.registerCmd(Events.controlHContanier, this.controlHContanier, this);

        }


        private floatUid(): void {
            if (this.iscanTouch == false) {
                return;
            }

            // ApiState.showText("该玩家id为：" + this.data.uid);
            RoomApi.getPlayerMatchRoomId(this.data.matchId, this.data.uid, this.getroomid.bind(this),this.getError.bind(this));
        }

        private getroomid(data: any): void {
            let roomid = data.room_id;
            if (!roomid) {
                let text = "当前时间该玩家暂无房间信息";
        
                if (this.data.serverstate == 0) {
                    text = "比赛未开始";
                }else  if (this.data.money <= 0) {
                    text = "该玩家已淘汰";
                }
                ApiState.showText(text);
                return;
            }

            lzm.Alert.alert(new WaitRoomUI((this.data.matchId), Number(roomid)));

        }

        private getError(data:any):void{
            if(data.state == -4){
                   ApiState.showText("该玩家已淘汰");
            }else{
                ApiState.show(data.state);
            }
        }


        private iscanTouch: boolean = true;
        private controlHContanier(data: boolean): void {

            this.iscanTouch = data;

        }

        public dataChanged() {
            if (!this.data) {
                return;
            }


            this.showUI();

        }

        public setData(data: WJInfoIF): void {
            this.data = data;
            this.showUI();
        }

        private showUI(): void {



            this.rewardTxt.text = "" + this.data.money;

            if (this.data.matchtype == "wcaa") {
                this.ratioTxt.text = "";
            } else {
                this.ratioTxt.text = "" + this.data.score;
            }


            if (this.img) {
                Tool.removeFromParent(this.img);
            }

            if (this.levelTxt) {
                Tool.removeFromParent(this.levelTxt);
            }

            if (this.heartimg) {
                Tool.removeFromParent(this.heartimg);
            }

            if (this.nameTxt) {
                Tool.removeFromParent(this.nameTxt);
            }

            if (this.heartTxt) {
                Tool.removeFromParent(this.heartTxt);
            }

            let text = StrUtil.cutOutName(this.data.name, 6);
            this.nameTxt = Tool.createTextFiled(75, 25 - this.numdisy, 200, 40, text, 26, 0xffffff, "left");
            this.addChild(this.nameTxt);



            if (this.data.rank == 0) {
                this.img = Tool.createBitmapByName("img_img_pyqdz_jiangli_jinbei", false, 10, 15 - this.numdisy);
                this.addChild(this.img);
            } else if (this.data.rank == 1) {
                this.img = Tool.createBitmapByName("img_img_pyqdz_jiangli_yinbei", false, 10, 15 - this.numdisy);
                this.addChild(this.img);
            } else if (this.data.rank == 2) {
                this.img = Tool.createBitmapByName("img_img_pyqdz_jiangli_tongbei", false, 10, 15 - this.numdisy);
                this.addChild(this.img);
            } else if (this.data.rank == -1) {

            }
            else {
                this.levelTxt = Tool.createTextFiled(30, 25 - this.numdisy, 200, 40, String(this.data.rank + 1), 26, 0xffffff, "left");
                this.addChild(this.levelTxt);
            }


            if (this.data.heart > 0) {
                this.heartimg = Tool.createBitmapByName("img_img_pyqdz_jiangli_xin");
                this.heartimg.y = 35 - this.numdisy;
                this.heartimg.x = 74 + this.nameTxt.textWidth + 5;
                this.addChild(this.heartimg);
                this.heartTxt = Tool.createTextFiled(this.heartimg.x + this.heartimg.width + 5, 25 - this.numdisy, 50, 40, String(this.data.heart), 22, 0x91b4ff, "left");
                this.addChild(this.heartTxt);
            }


        }


        public dispose(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.floatUid, this);

            EventManager.removeCmd(Events.controlHContanier, this.controlHContanier, this);

        }

    }
}