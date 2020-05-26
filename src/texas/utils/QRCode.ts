module kelvin.texas {
	export class QRCode {
		/**html中<img>标签二维码*/
		private htmlCode: HTMLImageElement;
		private shape:egret.Shape;
		/**
		 * @param htmlCodeUrl htmlCode二维码链接
		 */
		public constructor(htmlCodeUrl:string){
			var gameDiv = document.getElementById("gameDiv");
			this.htmlCode = document.createElement("img");
			this.htmlCode.src = htmlCodeUrl;
			this.htmlCode.style.position = "absolute";
			this.htmlCode.style.display = "none";
			gameDiv.appendChild(this.htmlCode);

			this.shape = new egret.Shape();
			this.shape.touchEnabled = true;
			this.shape.addEventListener(egret.TouchEvent.TOUCH_TAP,this.on_Shape,this);
		}

		public on_Shape(e:egret.Event):void{
			this.destroy();
		}

		/**
		 * 显示二维码
		 */ 
		public showHtmlCode(): void {
			if(this.htmlCode){
				this.htmlCode.style.display = "inline";
				this.shape.graphics.clear();
				this.shape.graphics.beginFill(0x000000,0.7);
				this.shape.graphics.drawRect(0,0,App.stage.stageWidth,App.stage.stageHeight);
				this.shape.graphics.endFill();
				App.stage.addChild(this.shape);
			}
		}
		
		/**隐藏二维码*/
		public hideHtmlCode(): void {
			if(this.htmlCode) {
				this.htmlCode.style.display = "none";
				App.stage.removeChild(this.shape);
			}
		}
		/**
		 * 设置二维码图片位置
		 * @param xPos x坐标
		 * @param yPos y坐标
		 * @param width 宽度
		 * @param height 高度
		 */
		public setPosition(xPos:number, yPos:number, width:number, height:number){
			if(this.htmlCode == null){
				return;
			}
			//竖屏
			if(document.body.clientWidth < document.body.clientHeight){
				var wScale = document.body.clientWidth / App.stage.stageWidth;
				var hScale = document.body.clientHeight / App.stage.stageHeight;
				this.htmlCode.style.width = width * wScale + "px";
				this.htmlCode.style.height = height * hScale + "px";
				this.htmlCode.style.left = xPos * wScale + "px";
				this.htmlCode.style.top = yPos * hScale + "px";
			//横屏
			}else{
				var wScale = document.body.clientWidth / App.stage.stageHeight;
				var hScale = document.body.clientHeight / App.stage.stageWidth;
				this.htmlCode.style.width =height*wScale + "px";
				this.htmlCode.style.height = width*hScale + "px";
				this.htmlCode.style.top = (App.stage.stageWidth - xPos -width)*hScale + "px";
				this.htmlCode.style.left = yPos*wScale + "px";
			}
		}
		
		/**销毁*/
		public destroy(){
			if(this.htmlCode){
				this.htmlCode.parentNode.removeChild(this.htmlCode);
				this.htmlCode = null;
				this.shape.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.on_Shape,this);
				if(this.shape.parent){
					App.stage.removeChild(this.shape);
				}
			}
		}
	}
}