module lzm {
	export class Gestures {

		protected _target:egret.DisplayObject;
		protected _callBack:Function;

		private _enabled:boolean = true;

		public constructor(target:egret.DisplayObject,callBack:Function=null) {
			this._target = target;
			this._callBack = callBack;

			this._target.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			this._target.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
			this._target.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onTouch,this);
			this._target.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouch,this);
			this._target.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouch,this);
			this._target.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
		}

		public onTouch(e:egret.TouchEvent):void{
			let touch = new Touch();
			touch.type = e.type;
			touch.localPoint = new egret.Point(e.localX,e.localY);
			touch.stagePoint = new egret.Point(e.stageX,e.stageY);
			this.checkGestures(touch);
		}

		/**
		 * 检测手势
		 * */
		public checkGestures(touch:Touch):void{
			
		}

		public get target():egret.DisplayObject{
			return this._target;
		}
		
		public setEnabled(value:boolean):void{
			this._enabled = value;
			if(this._enabled)
				this._target.touchEnabled = true;
			else
				this._target.touchEnabled = false;
		}
		
		public getenabled():boolean{
			return this._enabled;
		}
		
		public dispose():void{
			this._target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			this._target.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
			this._target.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onTouch,this);
			this._target.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouch,this);
			this._target.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouch,this);
			this._target.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
			this._target = null;
			this._callBack = null;
		}

	}
}