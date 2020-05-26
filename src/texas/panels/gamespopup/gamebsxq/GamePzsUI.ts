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
 * 游戏牌桌数
 */

module kelvin.texas {
    export class GamePzsUI extends BasePanel {
        public constructor(data: MatchMaxInfoIF, iswatch: number) {
            super();

            this.data = data;
            this.iswatch = iswatch;
            this.createGameScene();
        }


        public data: MatchMaxInfoIF;
        private iswatch: number;


        private createGameScene(): void {

            MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));

        }
        private infoArr: PZInfoIF[];

        public minSpArr: egret.Sprite[];

        private getInfo(data: any): void {
            this.infoArr = [];
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
            // for (let i = 0; i < showArr.length; i++) {
            //     showArr[i].showId = i + 1;
            // }

            this.createUI();

        
           
            

        }

        private listContainer: ScrollView;

        private createUI(): void {
            this.listContainer = new ScrollView();
            this.addChild(this.listContainer);
            this.listContainer.x = 0;
            this.listContainer.y = 80;
            this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
            this.listContainer.scrollPolicyH = "off";

            this.listContainer.setShowSize(this.width, 990);

            this.minSpArr = [];

            for (let i = 0; i < this.infoArr.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                let levelTxt = Tool.createTextFiled(30, 0, 200, 40,""+ this.infoArr[i].showId, 24, 0xffffff, "left");
                minsp.addChild(levelTxt);

                let ratioTxt = Tool.createTextFiled(190, 0, 200, 40, "" + this.infoArr[i].usersnum, 24, 0xffffff, "center");
                minsp.addChild(ratioTxt);

                let rewardTxt = Tool.createTextFiled(170, 0, 400, 40, "" + this.infoArr[i].max + "/" + this.infoArr[i].min, 24, 0xffffff, "right");
                minsp.addChild(rewardTxt);

                // let line = Tool.createBitmapByName("img_img_pyqdz_paizuo_fjx", false, 5, 70);

                // minsp.addChild(line);

                minsp.y = i * 60;
                this.listContainer.container.addChild(minsp);
                this.minSpArr.push(minsp);

                minsp.name = this.infoArr[i].tableid;

                minsp.touchEnabled = true;
                minsp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);

            }

            this.listContainer.setScrollSize(this.width, this.infoArr.length * 60);


        }


        private gotoGame(e: egret.TouchEvent): void {
            if (this.iswatch == 0) {
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
            return "spr_game_pzs_ui";
        }



        public dispose(): void {
            super.dispose();
            for (let i = 0; i < this.minSpArr.length; i++) {
                this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
            }

        }

    }
}