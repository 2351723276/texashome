module kelvin.texas {

	export class ExtGameHelper {

		public static homePanel: BasePanel;

		public static extGamePanel: GamePanel;
		public static exitBackPanelClass: any;//退出游戏之后返回的界面

		private static _ramDatas: any = {};

		public static getRAMData(key: string) {
			return ExtGameHelper._ramDatas[key];
		}


		public static saveRAMData(key: string, data: any) {
			ExtGameHelper._ramDatas[key] = data;
		}

		public static removeRAMData(key: string) {
			delete ExtGameHelper._ramDatas[key];
		}

		public static clearRAMData() {
			ExtGameHelper._ramDatas = {};
		}



		/**
		 * 初始化
		 */


		public static init() {

		}


		/**
		 * 是否需要退出界面
		 */

		public static isneedPop: boolean = true;

		/**
		 * 退出游戏界面
		 */
		public static exitExtGamePanel() {
			// App.setOrientationMode(egret.OrientationMode.LANDSCAPE);

			lzm.Alert.closeAllAlert();
			ExtGameHelper.removePopupPanle();
			// ExtGameHelper.clearRAMData();
			// if (ExtGameHelper.exitBackPanelClass == null) {
			if (ExtGameHelper.extGamePanel) {
				// ExtGameHelper.extGamePanel.gotoPanel(new MainPanel());
				ExtGameHelper.extGamePanel.dispose();
				ExtGameHelper.homePanel.visible = true;
				// ExtGameHelper.homePanel.x = 0;
			} else {
				// ExtGameHelper.homePanel.gotoPanel(new MainPanel());
				ExtGameHelper.homePanel.visible = true;
				// ExtGameHelper.homePanel.x = 0;
			}
			// } else {
			// 	let clazz = ExtGameHelper.exitBackPanelClass;
			// 	if (ExtGameHelper.extGamePanel) {
			// 		ExtGameHelper.extGamePanel.gotoPanel(new clazz());
			// 	} else {
			// 		ExtGameHelper.homePanel.gotoPanel(new clazz());
			// 	}
			// }
			ExtGameHelper.isneedPop = true;
			ExtGameHelper.extGamePanel = null;
			EventManager.dispatchCmd(Events.backGame, null);

		}

		/**
		 * 进入游戏界面
		 */

		public static joinExtGamePanel() {

			if (!ExtGameHelper.extGamePanel) {
				ExtGameHelper.homePanel.visible = false;
				ExtGameHelper.extGamePanel = new GamePanel();
				Starup.stageSp.gameSp.addChild(ExtGameHelper.extGamePanel);
			}

		}

		/**
		 * 离开房间
		 */
		public static leaveRoom() {
			// TipPanel.create("您确定要离开房间吗？",ExtGameHelper,ExtGameHelper._leaveRoom);
			ExtGameHelper._leaveRoom();
		}

		/**
		 * 解散房间
		 */
		public static disbandRoom() {
			// TipPanel.create("您确定要离开房间吗？",ExtGameHelper,ExtGameHelper._leaveRoom);
			ExtGameHelper._leaveRoom();
		}

		/**
		 * 离开房间确认按钮之后调用
		 */
		private static _leaveRoom(): void {
			RoomApi.leaveGame(function (data: any): void {
				ExtGameHelper.exitExtGamePanel();
			});
		}

		/**
		 * 向游戏发送数据
		 */
		public static sendGameMessage(data: any, finishOnClient: boolean = false) {
			RoomApi.gameMessage(data, finishOnClient);
		}


		/**
		 * 弹窗弹窗
		 * @param ui 需要弹出的容器
		 */
		public static popAnyView(ui: egret.DisplayObjectContainer) {
			lzm.Alert.alert(ui);
		}




		/**
		 * 得到游戏的缩放倍数
		 * 
		 */

		public static getGameScalex(): number {
			var sx: number = App.stageWidth / App.designWidth;
			var sy: number = App.stageHeight / App.designHeight;
			if (sx > sy) {
				return sy;
			} else {
				return sx;
			}
		}


		/**
		 * 显示我的比赛按钮
		 */

		public static matchBtn: GameMatchBtn;
		public static showMatchBtn(x: number, y: number, matchid?: number, callback?: Function, error?: Function): GameMatchBtn {
			if (this.matchBtn) {
				Tool.removeFromParent(this.matchBtn);
			}

			this.matchBtn = new GameMatchBtn(matchid, callback, error);
			Starup.stageSp.popupSp.addChild(this.matchBtn);

			this.matchBtn.x = x;
			this.matchBtn.y = y;
			return this.matchBtn;

		}


		/**
	 * 隐藏我的比赛按钮
	 */

		public static hideMatchBtn(): void {
			if (this.matchBtn) {
				Tool.removeFromParent(this.matchBtn);
			}
		}

		/**
	 * 
	 * 调用我的赛事弹窗
	 * 
	 * @param  callback    点击返回场次回调的函数，数据会传进去
	 * 
	 */
		public static popMyMatchView(matchid: string, callback?: Function, error?: Function): void {
			let view = new GameMatchView(matchid, callback, error);
			Starup.stageSp.popupSp.addChild(view);
			ExtGameHelper.popupPanelArr.push(view);
			view.show();
		}


		/**
	 * 
	 * 调用实时战绩弹窗
	 * @param  roomid   当前房间的id
	 * @param  callback    点击返回场次回调的函数，数据会传进去
	 * @param  cardData   牌局回顾的数据
	 */
		public static popGameRankView(matchid: string, roomid: number, cardData: any, watchPeople: number): void {
			let view = new GameRankView(matchid, roomid, cardData, watchPeople);
			Starup.stageSp.popupSp.addChild(view);
			ExtGameHelper.popupPanelArr.push(view);
			view.show();
		}

		/**
		 * 调用赛事详情弹窗
		 * @param matchid 比赛id
		 * @param reward  当前奖池
		 * @param min_reward  保底奖励
		 * @param mz_level  当前盲注等级
		 * @param iswatch  0是操作玩家   1是观战玩家
		 * @param  apply_max_mz_level    报名截止盲注等级
		 */

		public static popGameSsxqView(matchid: string, reward: number, min_reward: number, mz_level: number, iswatch: number, apply_max_mz_level: number): void {
			let view = new GameBsqxView(matchid, reward, min_reward, mz_level, iswatch, apply_max_mz_level);
			Starup.stageSp.popupSp.addChild(view);
			ExtGameHelper.popupPanelArr.push(view);
			view.show();
		}


		/**
		 * 弹窗出指定面板
		 * @param view 要弹出的面板
		 * @param animatypes //1 从左边出来     2 从右边出来   3从上面出来
		 * @param animatypee  //1往左边回去   2往右边回去    3往上面回去
		 */

		public static popAppointPanel(view: BasePanel, animatypes: number, animatypee: number, alpha: number = 0.7) {
			let ui = new PopupContainer(view);
			Starup.stageSp.popupSp.addChild(ui);
			ExtGameHelper.popupPanelArr.push(view);
			ui.show(animatypes, animatypee, alpha);
		}


		/**
		 * 移除所有弹窗
		 * 
		 * 
		 */
		public static popupPanelArr: BasePanel[] = [];
		public static removePopupPanle(): void {

			for (let i = 0; i < ExtGameHelper.popupPanelArr.length; i++) {
				ExtGameHelper.popupPanelArr[i].dispose();
			}

			ExtGameHelper.popupPanelArr = [];

		}

		/**
		 * 
		 * 隐藏房间匹配弹窗
		 */
		public static hideRoomWaitUI(): void {
			if (WaitRoomUI.waitRoomUI) {
				WaitRoomUI.waitRoomUI.hide();
			}

		}


		/**
		 * 弹出填写获奖信息的弹窗
		 * @param  callback弹唱关闭的时候回调
		 */
		public static popGetPrize(callback?: Function): void {
			lzm.Alert.alert(new GetPrizeView(callback, true));
		}

		/**
		 * 判断是否填写过
		 * @return true是填过  false 是没填过
		 */
		public static isSetPrizeInfo(): boolean {
			if (RoleData.getRolePrizeInfo()) {
				return true;
			} else {
				return false;
			}

		}

		/**
		 * 
		 * 是否可以报名
		 * @param starttime  比赛开始时间  ps:09:00:00  apply_time
		 * @param endtime  比赛结束时间 ps:18:00:00   apply_time_end
		 * @param dealytime 延迟时间  单位是秒  3600    apply_delay_time
		 * @param signmoney  报名费用  apply_gold
		 * @param  nowmz 当前的盲注等级  mz_level
		 * @param  maxmz  报名截止最大的盲注等级   apply_max_mz_level
		 * @param apply_score 报名所需积分  apply_score
		 * @param maxapplypeople 最大报名人数  apply_max_people
		 * @param nowapplypeople  当前报名人数  people
 		 * @return  number   0是可以报名  1 金币不够报名   2积分不够报名  3当前盲注等级过大，不能报名 4 当前尚未到报名时间,不能报名  5 比赛时间已过，不能报名   6 报名人数已满   7奖励圈人数已定
		 */

		public static isCansignup(data: MatchConfig): number {
  
			let matchid = data.id;
			let starttime = data.apply_time;
			let endtime = data.apply_time_end;
			let dealytime = data.apply_delay_time;
			let signmoney = data.apply_gold;
			let apply_score = data.apply_score;

			let nowmz = data.mz_level;
			let maxmz = data.apply_max_mz_level;
			let maxapplypeople = data.apply_max_people;
			let nowapplypeople = data.people;


			let service_gold = data.service_gold;
			let service_score = data.service_score;


			let nowtime = new Date().getTime();
			let result: boolean = true;

			if (RoleData.getRole().gold < signmoney + service_gold) {
				Log.log("金币不够报名");
				return 1;
			}


			if (RoleData.getRole().scores < apply_score + service_score) {
				Log.log("积分不够报名");
				return 2;
			}

			if (nowmz > maxmz) {
				Log.log("当前盲注等级过大，不能报名");
				return 3;
			}

			let myDate = new Date();

			let nowDate = DateUtils.formatDate(myDate);


			let timestrstart = nowDate + " " + starttime;
			let timestampstart = new Date(timestrstart).getTime();
			if (nowtime < timestampstart) {
				Log.log('当前尚未到报名时间,不能报名');
				return 4;
			}


			let timestrend = nowDate + " " + endtime;
			let timestampend = new Date(timestrend).getTime() + dealytime * 1000;
			if (nowtime > timestampend) {
				Log.log("比赛时间已过，不能报名");
				return 5;
			}

			// if (maxapplypeople > 0) {
			// 	if (nowapplypeople >= maxapplypeople) {
			// 		Log.log("报名人数已满");
			// 		return 6;
			// 	}
			// }

			if (data.inMoneyCircle == 1) {
				Log.log("奖励圈已经确定无法报名");
				return 7;
			}

			return 0;

		}

		/**
		 * 弹窗报名费不足的提示
		 * @param type  1是金币不足，2是积分不足
		 */
		public static popApplyFailMsg(type: number): void {
			lzm.Alert.alert(new ApplyPrompt(type));
		}

		/**
		 * 
		 * 重新报名
		 * rebuy
		 * @param id 比赛id
		 * @param  error  错误回调函数
		 */

		public static rebuy(id: string, error: Function): void {
			MatchApi.apply(String(id), () => {
				MatchApi.getPlayerProps(null);
				lzm.Alert.alert(new WaitRoomUI(id));
			}, error)
		}


		/**
		 * 是否能用门票报名
		 * @param cfgid ticket_cfgId
		 * @return string  "xx"可以  ""是不可以
		 */
		public static isUsePropApply(cfgid: any, callback?: Function): string {
			let serverdata = MatchData.getUserPropInfo();
			let libdataArr = [];
			for (let k in serverdata.data) {
				for (let i in serverdata.data[k]) {
					let libdata = serverdata.data[k][i];
					if (libdata.cfgId == cfgid) {
						libdataArr.push(libdata);
					}
				}
			}

			let configs: any;
			for (let k in serverdata.configs) {
				if (serverdata.configs[k].cfgId == cfgid) {
					configs = serverdata.configs[k];
				}
			}

			if (!configs) {
				egret.warn("门票道具配置出错");
				return "";
			}

			let ishave: string = ""; 

			let nowTime = new Date().getTime();
			for (let i = 0; i < libdataArr.length; i++) {
				if (libdataArr[i].type == 0) {
					if (nowTime <= libdataArr[i].get_time * 1000 + configs.expirationDate * 1000) {
						ishave = configs.name;
						break;
					}
				}
			}
			return ishave;
		}


	}

}