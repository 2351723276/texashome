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
 * 比赛详情的牌桌UI
 */

module kelvin.texas {

    export class BsxqPzUI extends BasePanel {

        public constructor(data: MatchMaxInfoIF) {
            super(true);
            this.data = data;

            this.createGameScene();

        }

        private data: MatchMaxInfoIF;

        private listbg: egret.Bitmap;

        private alljcTxt: egret.TextField;

        private jlqTxt: egret.TextField;

        private listContainer: ScrollView;


        private createGameScene(): void {

            this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);

            this.listbg.height = App.stageHeight - 520;


            this.listContainer = this.scrollView;
            this.addChild(this.listContainer);
            this.listContainer.x = this.listbg.x;
            this.listContainer.y = this.listbg.y + 70;
            this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;

            // this.initDownRefresh();
            this.setDownRefresh(this.refreshCall.bind(this));
            this.listContainer.setShowSize(this.listbg.width, this.listbg.height - 90);


            // this.scrollView = this.listContainer;

            this.getInfoNum = 0;



            this.updateUI();

            this.iscanTouch = true;
            EventManager.registerCmd(Events.controlHContanier, this.controlHContanier, this);

        }

        private iscanTouch: boolean = true;
        private controlHContanier(data: boolean): void {

            this.iscanTouch = data;

        }


        public updateUI(): void {
            MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));
        }
        private infoArr: PZInfoIF[];

        private getInfoNum: number;
        private getInfo(data: any): void {
            this.infoArr = [];

            // this.infoArr = [{ tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
            // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
            // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
            // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },];

         
            
            let showArr: PZInfoIF[] = [];
            for (let i in data.rooms) {
                let mindata: PZInfoIF = {
                    tableid: data.rooms[i].id,
                    usersnum: Object.keys(data.rooms[i].players).length,
                    players: data.rooms[i].players,
                    max: data.rooms[i].maxScore,
                    min: data.rooms[i].minScore,
                    match_id: data.rooms[i].match_id,
                    showId:  data.rooms[i].table_num + 1,
                }
                if (mindata.max == -1) {
                    mindata.max = this.data.init_game_score;
                }

                if (mindata.min == -1) {
                    mindata.min = this.data.init_game_score;
                }
                this.infoArr.push(mindata);
                showArr.push(mindata);
            }

             ArrayUtil.AscendingArray("showId", this.infoArr);
            for (let i = 0; i < showArr.length; i++) {
                // showArr[i].showId = i + 1;
            }

            this.data.roomInfo = this.infoArr;


            this.createListUI();

            this.alljcTxt.text = "" + this.infoArr.length;
            let maxnum = 0;
            for (let i = 0; i < this.infoArr.length; i++) {
                if (maxnum < this.infoArr[i].usersnum) {
                    maxnum = this.infoArr[i].usersnum;
                }
            }

            // this.jlqTxt.text = "" + maxnum;
            this.jlqTxt.text =""+this.data.table_people;
        }


        public minSpArr: egret.Sprite[];


        public createListUI(): void {
            if (this.minSpArr) {
                for (let i = 0; i < this.minSpArr.length; i++) {
                    this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                    Tool.removeFromParent(this.minSpArr[i]);
                }
            }

            this.minSpArr = [];

            for (let i = 0; i < this.infoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(45, 29, 200, 40, "" + this.infoArr[i].showId, 26, 0xffffff, "left");
                minsp.addChild(levelTxt);

                let ratioTxt = Tool.createTextFiled(210, 29, 200, 40, "" + this.infoArr[i].usersnum, 26, 0xffffff, "center");
                minsp.addChild(ratioTxt);

                let rewardTxt = Tool.createTextFiled(420, 29, 200, 40, "" + this.infoArr[i].max + "/" + this.infoArr[i].min, 26, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                let line = Tool.createBitmapByName("img_img_pyqdz_paizuo_fjx", false, 5, 70);

                minsp.addChild(line);

                minsp.y = i * 70;
                this.scrollView.container.addChild(minsp);
                this.minSpArr.push(minsp);

                minsp.name = this.infoArr[i].tableid;

                minsp.touchEnabled = true;
                minsp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);

            }


            this.scrollView.setScrollSize(this.listbg.width, this.infoArr.length * 70);


            if (this.getInfoNum > 0) {
                this.downRefreshOver();
                // ApiState.showText("刷新成功");
            }
        }


        public refreshCall(): void {

            RefreshUI.ins.show(App.stageWidth / 2, 370);
            this.getInfoNum++;
            MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));

        }

        private gotoGame(e: egret.TouchEvent): void {
            if (this.iscanTouch == false) {
                return;
            }

            let data: PZInfoIF;
            for (let i = 0; i < this.infoArr.length; i++) {
                if (String(this.infoArr[i].tableid) == e.target.name) {
                    data = this.infoArr[i];
                    break;
                }
            }

            lzm.Alert.alert(new WaitRoomUI((data.match_id), Number(data.tableid)));
        }



        public mainAssetName(): string {
            return "spr_bsxq_pz_ui";
        }


        public dispose(): void {
            super.dispose();
            EventManager.removeCmd(Events.controlHContanier, this.controlHContanier, this);
            for (let i = 0; i < this.minSpArr.length; i++) {
                this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
            }
        }

    }
}