module kelvin.texas {
	export class LayoutUtil {

		/**
		 * 靠上对其
		 */
		public static layout_up(display: egret.DisplayObject) { }
		/**
		 * 靠下对其
		 */
		public static layout_down(display: egret.DisplayObject) {
			display.y = App.stageHeight - (App.designHeight - LayoutUtil.getLayoutY(display));
		}
		/**
		 * 左对其
		 */
		public static layout_left(display: egret.DisplayObject) { }
		/**
		 * 左上
		 */
		public static layout_left_up(display: egret.DisplayObject) {
			LayoutUtil.layout_left(display);
			LayoutUtil.layout_up(display);
		}
		/**
		 * 左下
		 */
		public static layout_left_down(display: egret.DisplayObject) {
			LayoutUtil.layout_left(display);
			LayoutUtil.layout_down(display);
		}
		/**
		 * 右对齐
		 */
		public static layout_right(display: egret.DisplayObject) {
			display.x = App.stageWidth - (App.designWidth - LayoutUtil.getLayoutX(display));
		}
		/**
		 * 右上
		 */
		public static layout_right_up(display: egret.DisplayObject) {
			LayoutUtil.layout_right(display);
			LayoutUtil.layout_up(display);
		}
		/**
		 * 右下
		 */
		public static layout_right_down(display: egret.DisplayObject) {
			LayoutUtil.layout_right(display);
			LayoutUtil.layout_down(display);
		}
		/**
		 * X居中
		 */
		public static layout_center_x(display: egret.DisplayObject) {
			display.x = (App.stageWidth - display.width) / 2;
		}
		/**
		 * Y居中
		 */
		public static layout_center_y(display: egret.DisplayObject) {
			display.y = (App.stageHeight - display.height) / 2;
		}
		/**
		 * 正中间
		 */
		public static layout_center_xy(display: egret.DisplayObject) {
			LayoutUtil.layout_center_x(display);
			LayoutUtil.layout_center_y(display);
		}
		/**
		 * 中上
		 */
		public static layout_center_up(display: egret.DisplayObject) {
			LayoutUtil.layout_center_x(display);
			LayoutUtil.layout_up(display);
		}
		/**
		 * 中下
		 */
		public static layout_center_down(display: egret.DisplayObject) {
			LayoutUtil.layout_center_x(display);
			LayoutUtil.layout_down(display);
		}
		/**
		 * 填充
		 */
		public static layout_fill(display: egret.DisplayObject) {
			display.width = App.stageWidth;
			display.height = App.stageHeight;
		}

		public static getLayoutX(display: egret.DisplayObject): number {
			if (display["_layout_x_"]) {
				return display["_layout_x_"];
			}
			display["_layout_x_"] = display.x;
			return display.x;
		}

		public static getLayoutY(display: egret.DisplayObject): number {
			if (display["_layout_y_"]) {
				return display["_layout_y_"];
			}
			display["_layout_y_"] = display.y;
			return display.y;
		}
		/**
		 * 缩放
		 */
		public static layout_scale(display: egret.DisplayObject): void {
			let commonscale = App.designWidth / App.designHeight   //正常的缩放比
			// console.log("commonscale",commonscale);

			let nowscale = App.stageWidth / App.stageHeight;
			// console.log("nowscale",nowscale);

			let changscale = commonscale / nowscale;
			// console.log("changscale",changscale);
			if(changscale  < 0.8){
				changscale = 0.8;
			}

			if (changscale > 0.9) {
				display.scaleX = display.scaleY = changscale;
			} else {
				display.scaleX = display.scaleY = changscale ;
			}

		}


	}
}