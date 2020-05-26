module kelvin.texas {
	export class TweenQueue {

		private static _queueMap:any;
		private static _currentTween:any;
		private static _currentTimeout:any;


		public static getQueue(key:string):any[]{
			if(TweenQueue._queueMap == null){
				TweenQueue._queueMap = {};
				TweenQueue._currentTween = {};
				TweenQueue._currentTimeout = {};
			}
			let queue:any[] = TweenQueue._queueMap[key];
			if(queue == null){
				queue = [];
				TweenQueue._queueMap[key] = queue;
			}
			return queue;
		}

		public static get(target:any,props:any,duration:number,ease:Function = null,wait:number = 0,callBack:Function = null,callBackObj:any = null,callBackParams:any[] = null,queueKey:string = null){
			if(queueKey == null){
				queueKey = "__def__";
			}
			let queue = TweenQueue.getQueue(queueKey);
			queue.push([target,props,duration,ease,wait,callBack,callBackObj,callBackParams]);
			if(queue.length == 1){
				TweenQueue._currentTween[queueKey] = egret.Tween.get(target).to(props,duration,ease).call(TweenQueue.callBack,TweenQueue,[queue,queueKey]);
			}
		}

		public static addWait(wait:number,callBack:Function = null,callBackObj:any = null,callBackParams:any[] = null,queueKey:string = null):void{
			if(queueKey == null){
				queueKey = "__def__";
			}
			let queue = TweenQueue.getQueue(queueKey);
			queue.push([wait,callBack,callBackObj,callBackParams]);
			if(queue.length == 1){
				TweenQueue.callBack(queue,queueKey);
			}
		}

		public static getWithKey(queueKey:string,target:any,props:any,duration:number,ease:Function = null,wait:number = 0,callBack:Function = null,callBackObj:any = null,callBackParams:any[] = null){
			TweenQueue.get(target,props,duration,ease,wait,callBack,callBackObj,callBackParams,queueKey);
		}

		public static addWaitWithKey(queueKey:string,wait:number,callBack:Function = null,callBackObj:any = null,callBackParams:any[] = null):void{
			TweenQueue.addWait(wait,callBack,callBackObj,callBackParams,queueKey);
		}

		public static getWithNoQueue(target:any,props:any,duration:number,ease:Function = null,wait:number = 0,callBack:Function = null,callBackObj:any = null,callBackParams:any[] = null){
			TweenQueue.get(target,props,duration,ease,wait,callBack,callBackObj,callBackParams,(Math.random() * 9999999).toString());
		}

		private static callBack(queue:any[],queueKey:string):void{
			if(queue.length == 0){
				return;
			}
			let tweenObjects:any[] = queue[0];
			let wait:number;
			let callBack:Function;
			let callBackObj:any;
			let callBackParams:any[];
			if(tweenObjects.length == 4 ){
				wait = tweenObjects[0];
				callBack = tweenObjects[1];
				callBackObj = tweenObjects[2];
				callBackParams = tweenObjects[3];
			}else{
				wait = tweenObjects[4];
				callBack = tweenObjects[5];
				callBackObj = tweenObjects[6];
				callBackParams = tweenObjects[7];
			}
			if(wait > 0){
				TweenQueue._currentTimeout[queueKey] = egret.setTimeout(function():void{
					TweenQueue.callBack2(callBack,callBackObj,callBackParams,queue,queueKey);
				},TweenQueue,wait);
			}else{
				TweenQueue.callBack2(callBack,callBackObj,callBackParams,queue,queueKey);
			}
		}

		private static callBack2(callBack:Function,callBackObj:any,callBackParams:any[],queue:any[],queueKey:string):void{
			if(callBack != null){
				if(callBackObj == null){
					callBack(callBackParams);
				}else{
					callBack.apply(callBackObj,[callBackParams]);
				}
			}

			TweenQueue._currentTween[queueKey] = null;
			TweenQueue._currentTimeout[queueKey] = null;

			queue.shift();
			if(queue.length > 0){
				if(queue[0].length == 4){
					TweenQueue.callBack(queue,queueKey);
				}else{
					TweenQueue._currentTween[queueKey] = egret.Tween.get(queue[0][0]).to(queue[0][1],queue[0][2],queue[0][3]).call(TweenQueue.callBack,TweenQueue,[queue,queueKey]);
				}
			}
		}

		public static clearQueue(key:string = "__def__"):void{
			if(TweenQueue._queueMap == null) return;
			let queue:any[] = TweenQueue._queueMap[key];
			if(queue != null){
				queue.splice(0,queue.length);
			}
			if(TweenQueue._currentTween[key]){
				egret.Tween.removeTweens(TweenQueue._currentTween[key]);
			}
			if(TweenQueue._currentTimeout[key]){
				egret.clearTimeout(TweenQueue._currentTimeout[key]);
			}
		}

		public static clearAllQueue():void{
			if(TweenQueue._queueMap == null) return;
			for(let k in TweenQueue._queueMap){
				let queue:any[] = TweenQueue._queueMap[k];
				queue.splice(0,queue.length);
				if(TweenQueue._currentTween[k]){
					egret.Tween.removeTweens(TweenQueue._currentTween[k]);
				}
				if(TweenQueue._currentTimeout[k]){
					egret.clearTimeout(TweenQueue._currentTimeout[k]);
				}
			}
		}
	}
}