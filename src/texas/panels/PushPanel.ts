module kelvin.texas {
	export class PushPanel extends BasePanel {

		public constructor() {
			super(true);
		}

		public on_closeBtn(e:egret.Event):void{
			this.dispose();
		}

	}
}