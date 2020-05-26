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
 * 实时战绩的ui
 */

module kelvin.texas {
    export class GameRankUI extends BasePanel {
        public constructor(matchid: string, roomid: number, watchPeople: number) {
            super(true);
            this.roomid = roomid;
            this.watchPeople = watchPeople;
            this.matchid = matchid;
            this.createGameScene();

        }
        private matchid: string;

        private watchPeople: number;

        private roomid: number;

        private titleTxt: egret.TextField;

        private timeTxt: egret.TextField;

        private frontScoreTxt: egret.TextField;

        private allScoreTxt: egret.TextField;

        private averageScoreTxt: egret.TextField;

        private myrankTxt: egret.TextField;

        private rebuyTxt: egret.TextField;

        private joinMatchTxt: egret.TextField;

        private joinMatchNumTxt: egret.TextField;

        private watchPeopleTxt: egret.TextField;

        private lookupBtn: starlingswf.SwfButton;

        private lookup2Btn: starlingswf.SwfButton;


        private timer: egret.Timer;


        private createGameScene(): void {


            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeRun, this);
            this.timer.start();

            this.dateUtil = new DateUtils();

            this.lookupstate = true;

            this.lookup2Btn.visible = false;
            MatchApi.getShiShiZhanJi(this.matchid, this.getInfo.bind(this));


            // this.getInfo();


        }


        private list: eui.List;

        private createList(): void {
            this.list = new eui.List();

            // this.list.y = 450;
            this.list.width = App.stageWidth;
            // this.list.height = App.stageHeight - 450;

            this.list.itemRenderer = GameRankListLine;

            this.list.layout = new eui.VerticalLayout();

            this.scrollView.x = 20;
            this.scrollView.y = 310;
            this.height = 1184;
            this.scrollView.setShowSize(this.width - 20, this.height - 520);
            this.scrollView.viewport = this.list;

            this.listnum = 0;

            this.data100 = new eui.ArrayCollection();

            this.dataRoom = new eui.ArrayCollection();


        }
        private infoArr: PZInfoIF[];

        private getRoomsInfo(data: any): void {
            this.infoArr = [];
            let showArr: PZInfoIF[] = [];
            for (let i in data.rooms) {
                let mindata: PZInfoIF = {
                    tableid: data.rooms[i].id,
                    usersnum: Object.keys(data.rooms[i].players).length,
                    players: data.rooms[i].players,
                    max: 0,
                    min: 10000000000,
                    match_id: data.rooms[i].match_id,
                    showId: 0,
                }
                this.infoArr.push(mindata);
                showArr.push(mindata);
            }
            ArrayUtil.AscendingArray("tableid", showArr);
            for (let i = 0; i < showArr.length; i++) {
                showArr[i].showId = i + 1;
            }




            MatchApi.getMatchRoleInfo(1, String(this.matchid), this.getList100.bind(this));
            MatchApi.getMatchRoomRoleInfo(this.roomid, this.getListRoom.bind(this));

        }

        private data100: eui.ArrayCollection;

        private listnum: number = 0;

        private getList100(data: any): void {
            this.listnum++;

            for (let i = 0; i < data.data.length; i++) {
                let min: GameRankListIF = {
                    name: data.data[i][1],
                    uid: data.data[i][0],
                    score: data.data[i][2],
                    rank: i,
                    rebuy: data.data[i][4] - 1,
                    tableid: "1111",
                    showId: 0,
                }
                for (let k = 0; k < this.infoArr.length; k++) {
                    for (let j in this.infoArr[k].players) {
                        if (this.infoArr[k].players[j] == min.uid) {
                            min.tableid = this.infoArr[k].tableid;
                            min.showId = this.infoArr[k].showId;
                        }
                    }
                }

                this.data.list.push(min);
                min.rank = this.data.list.length;
            }



            for (let i = 0; i < this.data.list.length; i++) {
                this.data100.addItem(this.data.list[i]);
            }


            if (this.data.list.length < 50 && this.data.nowpeople > 50) {
                if (this.listnum < 10) {
                    MatchApi.getMatchRoleInfo(2, String(this.matchid), this.getList100.bind(this));
                }
            } else {
                this.showList100();
            }


        }

        public showList100(): void {
            this.scrollView.viewport.scrollV = 0;
            this.list.dataProvider = this.data100;
        }

        private dataRoom: eui.ArrayCollection;


        private roomlistArr: GameRankListIF[];
        private getListRoom(data: any): void {
            this.roomlistArr = []


            for (let i = 0; i < data.data.length; i++) {
                let min: GameRankListIF = {
                    name: data.data[i][1],
                    uid: data.data[i][0],
                    score: data.data[i][2],
                    rank: i,
                    rebuy: data.data[i][4] - 1,
                    tableid: String(this.roomid),
                    showId: 0,
                }

                for (let i = 0; i < this.infoArr.length; i++) {
                    if (this.infoArr[i].tableid == min.tableid) {
                        min.showId = this.infoArr[i].showId;
                    }
                }
                this.roomlistArr.push(min);
                min.rank = this.roomlistArr.length;

            }

            ArrayUtil.AscendingArray("score", this.roomlistArr);

            this.roomlistArr.reverse();

            for (let i = 0; i < this.roomlistArr.length; i++) {
                this.roomlistArr[i].rank = i + 1;
            }

            for (let i = 0; i < this.roomlistArr.length; i++) {
                this.dataRoom.addItem(this.roomlistArr[i]);
            }

        }

        public showListRoom(): void {
            this.scrollView.viewport.scrollV = 0;
            this.list.dataProvider = this.dataRoom;
        }




        private watchContainer: ScrollView;

        private watchBg: egret.Bitmap;


        private headSpArr: egret.Sprite[];

        private async createWatchUI(): Promise<void> {

            // this.watchPeople = [];
            // for (let i = 0; i < 10; i++) {
            //     let role = new Role();
            //     role.name = "名字" + i;
            //     role.head = "head_1_png";
            //     this.watchPeople.push(role);
            // }
            if (this.watchPeople == null) {
                this.watchPeople = 0;
            }


            this.watchContainer = new ScrollView();
            this.watchContainer.setShowSize(this.watchBg.width, this.watchBg.height);
            this.watchContainer.x = this.watchBg.x;
            this.watchContainer.y = this.watchBg.y;
            this.addChild(this.watchContainer);
            this.watchContainer.scrollPolicyV = "off";
            this.watchContainer.scrollPolicyH = "on";
            this.watchContainer.visible = false;
            this.headSpArr = [];
            this.watchPeopleTxt.text = "旁观人数（" + this.watchPeople + "）";
            // for (let i = 0; i < this.watchPeople.length; i++) {
            //     let role: Role = this.watchPeople[i];

            //     let sp = new egret.Sprite();
            //     let head = new egret.Bitmap();
            //     head.width = 80;
            //     head.height = 80;
            //     head.texture = await Tool.getTextureByUrlOrName(role.head);
            //     let headsp = Tool.createCircularMask(head);
            //     sp.addChild(headsp);
            //     headsp.x = 10;
            //     headsp.y = 0;

            //     let nametxt = Tool.createTextFiled(0, 100, 100, 30, StrUtil.cutOutName(role.name, 8), 22, 0xffffff, "center");
            //     sp.addChild(nametxt);
            //     sp.x = i * 120 + 10;
            //     sp.y = 30;
            //     this.watchContainer.container.addChild(sp);

            // }
            // this.watchContainer.setScrollSize(this.watchPeople.length * 120, this.watchBg.height);



        }


        private dateUtil: DateUtils;
        private timeRun(): void {
            if (!this.data) {
                return;
            }


            let nowTime = new Date().getTime();
            let distance = nowTime - this.data.starttime;
            let timestr = this.dateUtil.getFormatBySecond(Math.floor(distance / 1000), 1);
            this.timeTxt.text = "比赛时长：" + timestr;

        }


        private data: GameRankInfoIF;
        private getInfo(data: any): void {

            // this.data = {
            //     title: "这是一个标题",
            //     starttime: new Date().getTime(),
            //     frontscore: 100000,
            //     allscore: 20000,
            //     avescore: 50000,
            //     myrank: 100,
            //     rebuy: 10,
            //     nowpeople: 100,
            //     joinpeople: 200,
            //     realpeople: 400,
            //     list: [{ uid: "100010", rank: 1, name: "名字而已", rebuy: 4, tableid: "100100", score: 25645464 },
            //     { uid: "100010", rank: 2, name: "名字而已11111", rebuy: 4, tableid: "100000", score: 25645464 },
            //     ]
            // }         
            this.data = {
                title: data.match.name,
                starttime: data.match.match_start_time * 1000,
                frontscore: data.score100,
                allscore: data.match.init_game_score * data.match.cur_buy_count,
                avescore: data.match.init_game_score * data.match.cur_buy_count / (data.match.cur_buy_count- data.match.over_people),
                myrank: data.rank + 1,
                rebuy: data.reBuyCount - 1,
                nowpeople: data.match.people,

                joinpeople: data.match.apply_max_people,
                realpeople: data.match.cur_buy_count,
                over_people: data.match.over_people,
                cur_buy_count: data.match.cur_buy_count,

                list: [],
            }

    
            this.showUI();

            this.createWatchUI();

            this.createList();

            MatchApi.getMatchRooms(String(this.matchid), this.getRoomsInfo.bind(this));

        }


        public lookupstate: boolean;// true 是查看前一百名  false是查看当前桌的人 
        public on_lookupBtn(): void {
            this.lookupstate = !this.lookupstate;

            this.lookupBtn.visible = this.lookupstate;
            this.lookup2Btn.visible = !this.lookupstate;
            if (this.lookupstate == true) {
                this.showList100();
            } else {
                this.showListRoom();
            }

        }

        public on_lookup2Btn(): void {
            this.on_lookupBtn();
        }


        private showUI(): void {
            this.titleTxt.text = this.data.title;
            this.frontScoreTxt.text = "前100记分牌：" + Math.floor(this.data.frontscore);
            this.allScoreTxt.text = "总记分牌：" + Math.floor(this.data.allscore);

            this.averageScoreTxt.text = "平均记分牌：" + Math.floor(this.data.avescore);

            if (this.data.myrank != -1 && this.data.myrank != 0) {
                this.myrankTxt.text = "" + this.data.myrank;
                this.rebuyTxt.text = "" + this.data.rebuy;
            } else {
                this.myrankTxt.text = "-";
                this.rebuyTxt.text = "-";
            }


            // this.joinMatchTxt.text = "" + this.data.nowpeople + "/" + this.data.joinpeople;
            // console.log(this.data.over_people);
            

            this.joinMatchTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.nowpeople;


            this.joinMatchNumTxt.text = "" + this.data.realpeople;

        }


        public mainAssetName(): string {
            return "spr_game_rank_ui";
        }

        public dispose(): void {
            super.dispose();
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timeRun, this);
        }

    }
}