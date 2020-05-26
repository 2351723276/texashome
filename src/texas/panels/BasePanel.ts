module kelvin.texas {
	export class BasePanel extends lzm.BasePanel {




		public mainAsset: starlingswf.SwfSprite;
		public closeBtn: starlingswf.SwfButton;

		public scrollView: ScrollView;
		public refreshData: boolean = false;

		protected recursiveBind: boolean;

		public constructor(needScrollView: boolean = false, recursiveBind: boolean = true, createLater: boolean = false) {
			super();

			if (needScrollView) {
				this.scrollView = new ScrollView();
				this.scrollView.scrollPolicyV = "on";
				this.scrollView.scrollPolicyH = "off";
				this.scrollView.setShowSize(App.stageWidth, App.stageHeight);
				this.scrollView.setScrollSize(App.stageWidth, App.stageHeight);
				this.addChild(this.scrollView);
			}

			this.recursiveBind = recursiveBind;
			if (!createLater) this.createLater();
		}

		protected createLater() {
			if (this.mainAssetName() != null && this.assetSwf() != null) {
				this.mainAsset = this.assetSwf().createSprite(this.mainAssetName());
				this.addChild(this.mainAsset);
				InterfaceVariablesUtil.initVariables(this, this.mainAsset, this.recursiveBind);
			}
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this._addToStage_, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this._removeFromStage_, this);
			this.init();
		}

		private _addToStage_(e: egret.Event): void {
			this.layout();
			this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
			this.addToStage(e);
		}
		private _removeFromStage_(e: egret.Event): void {
			this.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
		}
		private onResize(e: egret.Event): void {
			this.layout();
		}

		public addToStage(e: egret.Event): void {

		}

		/**
		 * 初始化下拉刷新  true是下拉刷新 false 是上拉刷新
		 */

		private refreshType: boolean = true;
		public initDownRefresh(type: boolean = true) {
			if (this.scrollView != null) {
				this.refreshType = type;
				this.addEventListener(egret.TouchEvent.TOUCH_END, this.scrollViewEndMoveHandler, this);
				this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.scrollViewEndMoveHandler, this);
				this.scrollView.addEventListener(eui.UIEvent.CHANGE, this.scrollViewMoveHandler, this);
			}
		}

		/**
		 * 设置刷新回调
		 * 
		 */
		private callBank: Function
		public setDownRefresh(callback: Function): void {
			this.callBank = callback;
		}

		/**
		 * 刷新回掉
		 */
		public onDownRefresh() {
			if (this.callBank) {
				this.callBank();
			}
		}


		/**
		 * 下拉刷新完成
		 */
		public downRefreshOver(): void {
			this.refreshData = false;
			this.scrollView.reStartAnimation();
			RefreshUI.ins.hide();
		}

		/**
		 * 移除下拉刷新
		 */
		public disposeDownRefresh(): void {
			if (this.scrollView != null) {
				this.removeEventListener(egret.TouchEvent.TOUCH_END, this.scrollViewEndMoveHandler, this);
				this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.scrollViewEndMoveHandler, this);
				this.scrollView.removeEventListener(eui.UIEvent.CHANGE, this.scrollViewMoveHandler, this);
			}
		}

		private scrollViewMoveHandler(evt: eui.UIEvent): void {


			if (this.refreshType == true) {
				if (this.refreshData && this.scrollView.viewport.scrollV > -120) {
					this.scrollView.viewport.scrollV = -120;
					this.scrollView.stopAnimation();
				}
			} else {

				if (this.refreshData && this.scrollView.viewport.scrollV < this.scrollView.viewport.contentHeight - this.scrollView.height + 120) {
					this.scrollView.viewport.scrollV = this.scrollView.viewport.contentHeight - this.scrollView.height + 120;
					this.scrollView.stopAnimation();
				}
			}
		}
		private scrollViewEndMoveHandler(evt: eui.UIEvent): void {
			if (this.refreshType == true) {
				if (!this.refreshData && this.scrollView.viewport.scrollV < -120) {
					this.refreshData = true;
					this.onDownRefresh();
				}
			} else {
				if (!this.refreshData && this.scrollView.viewport.scrollV > this.scrollView.viewport.contentHeight - this.scrollView.height + 120) {
					this.refreshData = true;
					this.onDownRefresh();
				}

			}
		}

		public init(): void { }

		public layout(): void { }

		public on_closeBtn(e: egret.Event): void {
			this.dispose();
		}

		public dispose(): void {
			super.dispose();
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._addToStage_, this);
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._removeFromStage_, this);
			this.disposeDownRefresh();
			InterfaceVariablesUtil.disposeVariables(this);


			if (ExtGameHelper.popupPanelArr) {
				let index = ExtGameHelper.popupPanelArr.indexOf(this);
				if (index != -1) {
					ExtGameHelper.popupPanelArr.splice(index, 1);
				}
			}
		}

		public mainAssetName(): string {
			return null;
		}

		public assetSwf(): starlingswf.Swf {
			return AssetManager.mainSwf;
		}


	}
}