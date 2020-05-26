module kelvin.texas {
	/**
	 * 界面缓动效果累
	 */
	export class PanelTween {

		/**
		 * 基础面板，所有的pushPanel都跟他在一个容器，并且所有pushPanel销毁之后会显示改对象
		 */
		public static rootPanel: egret.DisplayObject;
		/**
		 * 推入的界面列表
		 */
		public static pushPanelList: egret.DisplayObject[] = [];

		/**
		 * 替换当前界面 
		 */
		public static switchPanel(currentObj: egret.DisplayObject, newObj: egret.DisplayObject) {
			currentObj.visible = newObj.visible = true;
			newObj.x = App.stageWidth;

			TweenQueue.getWithKey("switchPanel", currentObj, { x: -App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0);
			TweenQueue.get(newObj, { x: 0 }, 300, egret.Ease.quartOut, 0, function (): void {
				currentObj.visible = false;
				PanelTween.callBackTweenOver(newObj);
			});
		}

		/** 推入一个界面 */
		public static pushPanel(panel: egret.DisplayObject) {
			panel.visible = true;
			panel.x = App.stageWidth;
			PanelTween.rootPanel.parent.addChild(panel);

			if (PanelTween.pushPanelList.length > 0) {
				TweenQueue.getWithKey("switchPanel", PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1], { x: -App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0, () => {
					if (PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["leaveView"]) {
						PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["leaveView"]();
					}
				});
			} else {
				TweenQueue.getWithKey("switchPanel", PanelTween.rootPanel, { x: -App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0, () => {
					if (PanelTween.rootPanel["leaveView"]) {
						PanelTween.rootPanel["leaveView"]();
					}
				});
			}

			TweenQueue.get(panel, { x: 0 }, 300, egret.Ease.quartOut, 0, function (): void {
				if (PanelTween.pushPanelList.length > 0) {
					PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1].visible = false;
				} else {
					PanelTween.rootPanel.visible = false;
				}
				PanelTween.pushPanelList.push(panel);
				PanelTween.callBackTweenOver(panel);
			});

		}

		/**
		 * 推出一个界面
		 */
		public static popPanel() {
			if (PanelTween.pushPanelList.length == 0) {
				return;
			}
			let popPanel = PanelTween.pushPanelList.pop();
			if (popPanel != null) {
				TweenQueue.getWithKey("switchPanel", popPanel, { x: App.stageWidth }, 300, egret.Ease.quartOut, 0, function (): void {
					if (popPanel.parent) popPanel.parent.removeChild(popPanel);
					if (popPanel["dispose"]) {
						popPanel["dispose"]();
					}
				});
			}

			if (PanelTween.pushPanelList.length > 0) {
				let panel = PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1];
				panel.visible = true;
				TweenQueue.get(panel, { x: 0 }, 300, egret.Ease.quartOut, 0, () => {
					if (PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["backView"]) {
						PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["backView"]();
					}
				});
			} else {
				PanelTween.rootPanel.visible = true;
				TweenQueue.get(PanelTween.rootPanel, { x: 0 }, 300, egret.Ease.quartOut, 0, () => {
					if (PanelTween.rootPanel["backView"]) {
						PanelTween.rootPanel["backView"]();
					}
				});
			}
		}

		/**
		 * 移除所有界面
		 */

		public static clearAllPanel(): void {
			for (let i = 0; i < PanelTween.pushPanelList.length; i++) {
				Tool.removeFromParent(PanelTween.pushPanelList[i]);

			}
			PanelTween.pushPanelList = [];
		}


		public static callBackTweenOver(obj: egret.DisplayObject) {
			if (obj["onInterfaceTweenOver"]) {
				let fun: Function = obj["onInterfaceTweenOver"];
				fun.apply(obj);
			}
		}



	}
}