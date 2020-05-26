module kelvin.texas {
	export class ExtGameBackground extends BasePanel {
		
		public constructor() {
			super();
		}

		public getStageWidth():number{
			return App.stageWidth;
		}

		public getStageHeight():number{
			return App.stageHeight;
		}

	}
}