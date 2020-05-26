module kelvin.texas {
	export class MainPanel extends BasePanel {

		public constructor() {
			super();

			PanelTween.rootPanel = this;


			this.createGameScene();
		}



		public bg: egret.Bitmap;

		private topview: ViewTop;

		private bottomView: ViewBottom;

		private matchView: MatchView;

		private popup: PopupView;

		private createGameScene(): void {
			ExtGameHelper.homePanel = this;

			this.bg = Tool.createBitmapByName("img_pyqdz_beij");
			this.addChild(this.bg);

			this.matchView = new MatchView();
			this.addChild(this.matchView);

			this.topview = new ViewTop();
			this.addChild(this.topview);


			this.bottomView = new ViewBottom();
			this.addChild(this.bottomView);

			this.popup = new PopupView();
			this.addChild(this.popup);

			EventManager.registerCmd(Events.createPersonalView, this.createPersonalView, this);

			egret.setTimeout(() => {

				// console.log(ExtGameHelper.isCansignup(1,"14:10:10","18:00:00",20,100,0,1,2,100,2));
				// ExtGameHelper.popGameSsxqView(1005, 1000, 1000, 5, 0, 10);
				// ExtGameHelper.showMatchBtn(200,200,1001);
				// ExtGameHelper.popMyMatchView(1001);
				// ExtGameHelper.popGameRankView(770384,486733,null,100);
				// this.topview.touchEnabled = true;
				// PanelTween.pushPanel(new RankView());

				// lzm.Alert.alert(new GameMatchView(-1, null, null, "home"));
				// lzm.Alert.alert(new WaitRoomUI(-1));
				// this.popNoticePop();   

				// LoadingUI.ins.show(1);
				// ExtGameHelper.popApplyFailMsg(2);  
				// PanelTween.popPanel();
				// PanelTween.pushPanel(new ShopView());
				// console.log(ExtGameHelper.isUsePropApply(1));
				
				
			}, this, 2000)
			// if (egret.getOption("type")) {
			// } else {
			this.isBandingPhone();
			// }

			if (AccountData.loginData.alertNotice != null) {
				this.popNoticePop();
			}

			MatchApi.getMyMatch(this.isHaveGameStart.bind(this));
			MatchApi.getPlayerProps(null);

		}

		private getRewardInfo(data: any): void {
			
			if (!data.info && AccountData.loginData.lastWcaaReward && AccountData.loginData.lastWcaaReward[2] > 0) {
				lzm.Alert.alert(new GetPrizePopup());
			}

		}



		//是否有游戏开始
		public isHaveGameStart(data: any): void {
			let have: boolean = false;
			for (let i in data.matchs) {
				if (data.matchs[i].state == 1 || data.matchs[i].state == 2) {
					have = true;
					break;
				}
			}


			if (have == true) {
				lzm.Alert.alert(new GameMatchView("0", null, null, "home"));
			} else {
				RoleApi.getRewardInfo(this.getRewardInfo.bind(this));
			}

		}


		//没隔30秒拉一次

		private timeid1: number;

		private isCanGetPeople: boolean;

		public startGetPeopleNum(): void {
			this.timeid1 = egret.setInterval(this.getPeopleNum, this, 30000);
			this.isCanGetPeople = true;

		}


		//得到人的回调
		public getPeopleNum(): void {


		}

		public peopleInfo(data: any): void {

		}


		//离开这个界面
		public leaveView(): void {
			this.isCanGetPeople = false;
		}

		//回到这个界面的调用
		public backView(): void {
			this.isCanGetPeople = true;
		}


		//判断是否绑定过手机
		public isBandingPhone(): void {
			PhoneApi.isVert((data: any) => {
				console.log(data);
				if (data == null || data == "") {
					lzm.Alert.alert(new RegisterPanel("register"));
				}
			})
		}

		private popNoticePop(): void {

			egret.setTimeout(() => {
				let nowtime = new Date().getTime();
				if (nowtime - TimeData.noticeTime < 24 * 3600 * 1000) {
					Log.log("今天不用再弹公告了");
					return;
				}
				lzm.Alert.alert(new NoticePopup());
			}, this, 100)

		}

		private personal: PersonalView;
		private createPersonalView(): void {
			if (this.personal && this.contains(this.personal)) {
				Tool.removeFromParent(this.personal);
			}

			this.personal = new PersonalView();
			this.addChild(this.personal);
			this.personal.show();

		}

		public layout(): void {

			this.bg.width = App.stageWidth;
			this.bg.height = App.stageHeight;

			this.bottomView.y = App.stageHeight - this.bottomView.height;

		}

		public mainAssetName(): string {
			return "spr_main";
		}

		public dispose(): void {
			super.dispose();
			ExtGameHelper.homePanel = null;
			EventManager.removeCmd(Events.createPersonalView, this.createPersonalView, this);
			PanelTween.clearAllPanel();
			lzm.Alert.closeAllAlert();
			ExtGameHelper.removePopupPanle();
		}

	}
}