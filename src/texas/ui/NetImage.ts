module kelvin.texas {

	/**
	 * 网络图片
	 */
	export class NetImage extends egret.DisplayObjectContainer {

		public image:egret.Bitmap;
		public loader:egret.ImageLoader;
		public setNativSize:boolean;

	

		public constructor(url:string,setNativSize:boolean = false) {
			super();
			this.image = new egret.Bitmap();
			this.setNativSize = setNativSize;
		
			this.addChild(this.image);
			this.reload(url);
		}

		public reload(url):void{
			if(url == null || url == ""){
				return;
			}
			if(this.loader == null) {
				this.loader = new egret.ImageLoader();
				this.loader.addEventListener(egret.Event.COMPLETE,this.loadComplete,this);
			}
			this.loader.load(url);
		}

		public loadComplete(e:egret.Event):void{
			if(this.image.texture != null) this.image.texture.dispose();
			var bitmapData:egret.BitmapData = this.loader.data;
			var texture:egret.Texture = new egret.Texture();
            texture._setBitmapData(bitmapData);
			this.image.texture = texture;
			if(this.setNativSize){
				this.image.width = this.image.texture.textureWidth;
				this.image.height = this.image.texture.textureHeight;
			}
		}

		public dispose():void{
			if(this.loader != null) {
				this.loader.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this);
			}
			if(this.image.texture != null && this.image.texture != RES.getRes("defUser")){
				this.image.texture.dispose();
				this.image.texture = null;
			}
			
		}

		public $setWidth(value: number): boolean{
			this.image.width = value;
			return true;
		}

		public $getWidth(): number{
			return this.image.width;
		}

		public $setHeight(value: number): boolean{
			this.image.height = value;
			return true;
		}

		public $getHeight(): number{
			return this.image.height;
		}



	}
}