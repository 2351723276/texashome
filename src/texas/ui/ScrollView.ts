module kelvin.texas {
	export class ScrollView extends eui.Scroller {

		public container: eui.Group;
		public scrollSize: eui.Image;

		public constructor() {
			super();

			this.scrollSize = new eui.Image();
			this.scrollSize.visible = false;

			this.container = new eui.Group();
			this.container.addChild(this.scrollSize);

			this.viewport = this.container;
		}

		/**
		 * 设置展示区域大小
		 */
		public setShowSize(w: number, h: number) {
			this.width = w;
			this.height = h;
		}

		/**
		 * 设置滚动区域大小
		 */
		public setScrollSize(w: number, h: number) {
			this.scrollSize.width = w;
			this.scrollSize.height = h;
		}

		public removeAllChild(): void {
			this.container.removeChildren();
			this.container.addChild(this.scrollSize);
		}

		public reStartAnimation(): void {
			let values = this.$Scroller;
			values[8]["started"] = true;
			values[8]["velocity"] = 0;
			values[8]["previousTime"] = 0;
			values[8]["previousVelocity"] = [];
			values[9]["started"] = true;
			values[9]["velocity"] = 0;
			values[9]["previousTime"] = 0;
			values[9]["previousVelocity"] = [];
			this["onTouchEnd"](null);
		}
	}
}