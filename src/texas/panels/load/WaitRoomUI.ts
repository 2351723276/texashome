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
 * 等待分配房间的
 */


module kelvin.texas {

    export class WaitRoomUI extends BasePanel {

        public constructor(match_id: string, roomid: number = -1) {
            super();

            if (WaitRoomUI.waitRoomUI) {
                WaitRoomUI.waitRoomUI.hide();
            }

            WaitRoomUI.waitRoomUI = this;
            this.roomid = roomid;
            this.match_id = match_id;
            this.createGameScene();

            

        }

        public static waitRoomUI: WaitRoomUI;


        private roomid: number;

        private match_id: string;

        private promptTxt: egret.TextField;


        public sendnum: number;//请求次数

        private time1: number;

        private mateAnima: starlingswf.SwfMovieClip;

        private changeAnima: starlingswf.SwfMovieClip;


        public bg: egret.Sprite;
        private createGameScene(): void {

            // this.promptTxt = Tool.createTextFiled(0, 0, 600, 40, "正在进行房间分配，请耐心等待", 30, 0xffffff, "center");
            // this.addChild(this.promptTxt);
            this.bg = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0);
            this.addChildAt(this.bg, 0);

            this.width = this.bg.width;
            this.height = this.bg.height;



            this.sendnum = 0;


            this.loadGame();

            this.mateAnima.visible = false;
            this.changeAnima.visible = false;

            this.visible = false;
        }


        public showPointerAnima(): void {

        }

        public hidePointerAnima(): void {

        }


      

        public loadGame(): void {
            console.log("开始加载游戏");
            new GameAssetLoader().loadGame(this.loadSuccess.bind(this), this);

        }

        private loadSuccess(data: any): void {
            console.log("游戏资源加载成功");
            
            EventManager.dispatchCmd(Events.gotoGameView, null);

            ExtGameHelper.joinExtGamePanel();

            this.joinGame();
        }


        //三秒已请求
        public delayJoin(): void {
            this.sendnum++;
            this.time1 = egret.setInterval(this.joinGame, this, 3000);
        }
          public joinGame(): void {
            RoomApi.joinGame(this.match_id, this.roomid, this.joinback.bind(this));
        }

        //加入房间的回调
        public joinback(data: any): void {

            if (data.room == null && this.sendnum == 0) {
                this.delayJoin();
                this.visible = true;
                if (ExtGameHelper.extGamePanel && this.roomid != -1) {
                    this.changeAnima.visible = true;
                } else {
                    this.mateAnima.visible = true;
                }
            }

            if (data.room) {
                this.joinSuccess();
            }

        }

        public joinSuccess(): void {
            this.hidePointerAnima();


            egret.setTimeout(() => {
                this.dispose();
            }, this, 100)

        }



        public hide(): void {
            this.dispose();

        }

        public dispose(): void {

            super.dispose();
            egret.clearInterval(this.time1);
            WaitRoomUI.waitRoomUI = null;
            this.mateAnima.stop();
            this.changeAnima.stop();

            if (ExtGameHelper.isneedPop == true) {
                lzm.Alert.closeAllAlert();
                PanelTween.popPanel();
                ExtGameHelper.isneedPop = false;
            }

        }



        public mainAssetName(): string {
            return "spr_wait_room_anima_view";
        }



    }
}