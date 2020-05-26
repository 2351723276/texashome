module kelvin.texas {
	export class ColorUtil {

		/**
		 * 设置对象颜色为灰色
		 */
		public static setGray(display: egret.DisplayObject): void {
			var colorMatrix = [
				0.3, 0.6, 0, 0, 0,
				0.3, 0.6, 0, 0, 0,
				0.3, 0.6, 0, 0, 0,
				0, 0, 0, 1, 0
			];
			var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
			display.filters = [colorFlilter];
		}

		/**
		 * 
		 * 设置对象颜色变黑一点
		 */
		public static setLittleBlack(display: egret.DisplayObject): void {
			let colorMatrix = [
				0.6, 0, 0, 0, 0,
				0, 0.6, 0, 0, 0,
				0, 0, 0.6, 0, 0,
				0, 0, 0, 1, 0
			];
			let colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
			display.filters = [colorFlilter];
		}

		/**
		 * 清除颜色
		 */
		public static clearColor(display: egret.DisplayObject): void {
			display.filters = null;
		}

	}
}