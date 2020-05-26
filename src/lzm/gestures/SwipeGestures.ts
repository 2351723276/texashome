module lzm {
	export class SwipeGestures extends Gestures {

		public static UP: String = "up";
		public static DOWN: String = "down";
		public static LEFT: String = "left";
		public static RIGHT: String = "right";
		private static DISTIME: number = 100;
		private static DIS: number = 20;
		private _downPoint: egret.Point;
		private _downTime: number;

		public constructor(target: egret.DisplayObject, callBack: Function = null) {
			super(target, callBack);
		}


		public is_over = true;//是否结束


		public checkGestures(touch: Touch): void {


			if (touch.type == egret.TouchEvent.TOUCH_BEGIN) {
				this._downPoint = touch.stagePoint;
				this._downTime = Math.round(new Date().getTime() / 1000);
				this.is_over = false;
			} else if (touch.type == egret.TouchEvent.TOUCH_MOVE) {
				if (this._downPoint == null) {
					this._downPoint = touch.stagePoint;
					this._downTime = Math.round(new Date().getTime() / 1000);
					// this.is_over = false;
				}
				if (this.is_over == true) {
					return;
				}
				if (this._downPoint == null) return;
				let timeDis: number = Math.round(new Date().getTime() / 1000) - this._downTime;
				let releasePoint: egret.Point = touch.stagePoint;
				//trace("时间差：", timeDis);
				if (SwipeGestures.DISTIME < timeDis) return;
				let xDis: number = releasePoint.x - this._downPoint.x;
				let yDis: number = releasePoint.y - this._downPoint.y;
				
				if (Math.abs(xDis) > Math.abs(yDis)) {
					if (Math.abs(xDis) > SwipeGestures.DIS && this._callBack != null) {
						this._callBack(xDis > 0 ? SwipeGestures.RIGHT : SwipeGestures.LEFT);
						this._downPoint = null;
						this.is_over = true;
					}

				} else {
					if (Math.abs(yDis) > SwipeGestures.DIS && this._callBack != null) {
						this._callBack(yDis > 0 ? SwipeGestures.DOWN : SwipeGestures.UP);
						this._downPoint = null;
						this.is_over = true;
					}
				}

			} else if (touch.type == egret.TouchEvent.TOUCH_END || touch.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
				// if (this._downPoint == null) return;
				// let timeDis: number = Math.round(new Date().getTime() / 1000) - this._downTime;
				// let releasePoint: egret.Point = touch.stagePoint;
				// //trace("时间差：", timeDis);
				// if (SwipeGestures.DISTIME < timeDis) return;
				// let xDis: number = releasePoint.x - this._downPoint.x;
				// let yDis: number = releasePoint.y - this._downPoint.y;
				// if (Math.abs(xDis) > Math.abs(yDis)) {
				// 	if (Math.abs(xDis) > SwipeGestures.DIS && this._callBack != null)
				// 		this._callBack(xDis > 0 ? SwipeGestures.RIGHT : SwipeGestures.LEFT);
				// } else {
				// 	if (Math.abs(yDis) > SwipeGestures.DIS && this._callBack != null)
				// 		this._callBack(yDis > 0 ? SwipeGestures.DOWN : SwipeGestures.UP);
				// }
				this._downPoint = null;
				this.is_over = true;
			}
		}

	}
}