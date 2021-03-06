module lzm {
	export class BasePanel extends egret.DisplayObjectContainer {

		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
		}


		public addToStage(e:egret.Event){

		}

		public removeFromStage(e:egret.Event){
			
		}

		public gotoPanel(panel:lzm.BasePanel){
			this.parent.addChildAt(panel,0);
			this.dispose();
		}

		public dispose(){
			if(this.parent != null){
				this.parent.removeChild(this);
			}
			this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
		}
		


	}
}