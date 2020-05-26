/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 工具类
 */

module kelvin.texas {
    export class Tool {

        public constructor() {

        }

        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         * @param name:生成纹理的索引名字  touchEnabled,是否打开点击事件
         */
        public static createBitmapByName(name: string, touchEnabled: boolean = false, X: number = 0, Y: number = 0, W?: number, H?: number): egret.Bitmap {
            if (name == null) {
                return new egret.Bitmap();
            }
            try {
                let result: egret.Bitmap = new egret.Bitmap(); let texture: egret.Texture = RES.getRes(name);
                if (texture == null) { RES.getResAsync(name, (e: any) => { result.texture = e; }, this); }
                result.texture = texture; result.name = name; result.touchEnabled = touchEnabled; result.x = X; result.y = Y;
                if (W) { result.width = W; } if (H) { result.height = H; }
                return result;
            } catch (e) {
                let result: egret.Bitmap = new egret.Bitmap()
                egret.warn("图片加载出错", e, name);
                return result;
            }
        }


        //
        /**
         * 根据纹理集生成eui.Image
         * @param ruleImgs  egret.SpriteSheet name 资源名
         */
        public static createBitmapBySheet(ruleImgs: egret.SpriteSheet, name: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = ruleImgs.getTexture(name);
            result.texture = texture;
            return result;
        }

        /**
        * 用url生成Bitmap
        * @param url 资源url Sp 需要纹理的Bitmap self 作用域
        */
        public static createBitmapByUrl(url: string, Sp: egret.Bitmap, self: any): any {
            let Url = url; RES.getResByUrl(Url, (event: any) => { let img: egret.Texture = <egret.Texture>event; Sp.texture = img; }, self, RES.ResourceItem.TYPE_IMAGE);
        }


        /**
        * 用url得到纹理
        * @param url 资源url 
        */
        public static async getTextureByUrl(url: string): Promise<any> {
            return new Promise((resolve, reject) => {
                // let Url = url; RES.getResByUrl(Url, (event: any) => { let img: egret.Texture = <egret.Texture>event; resolve(img); }, self, RES.ResourceItem.TYPE_IMAGE);

                let loader: egret.ImageLoader = new egret.ImageLoader();
                loader.addEventListener(egret.Event.COMPLETE, () => {
                    let bitmapData: egret.BitmapData = loader.data;
                    let texture: egret.Texture = new egret.Texture();
                    texture._setBitmapData(bitmapData);
                    resolve(texture);
                }, this);
                loader.load(url);
            })
        }
        /**
         * 用url加载文本
         */
        public static async getTxtByUrl(url: string): Promise<any> {
            return new Promise((resolve, reject) => {
                RES.getResByUrl(url, (event: any) => { let txt: string = <string>event; resolve(txt); }, self, RES.ResourceItem.TYPE_JSON);
            })
        }


        /**
        * 用name得到纹理
        * @param name 资源名  ps:该名字必须在资源组内 
        */
        public static async getTextureByName(name: string): Promise<any> {
            return new Promise((resolve, reject) => {
                let texture: egret.Texture = RES.getRes(name);
                if (texture == null) {
                    RES.getResAsync(name, (e: any) => { texture = e; resolve(texture) }, this);
                } else {
                    resolve(texture)
                }
            })
        }

        /**
        * 用name得到纹理
        * @param name 资源名或者url  
        */
        public static async getTextureByUrlOrName(name: string): Promise<any> {

            try {
                return new Promise(async (resolve, reject) => {
                    let texture: egret.Texture;
                    if (name.indexOf("http") != -1) {
                        name = name.replace("\r", "");
                        texture = await Tool.getTextureByUrl(name);
                    } else {
                        texture = await Tool.getTextureByName(name);
                    }


                    resolve(texture);


                })
            } catch (e) {
                console.log("加载图片出错");
                return new Promise(async (resolve, reject) => {
                    resolve(null);
                });

            }
        }


        /**
        * 获取对应的bitmaptext
        */
        public static createBitmapText(bfont: string, X: number = 0, Y: number = 0): egret.BitmapText {
            let font = RES.getRes(bfont); let btxt = new egret.BitmapText; btxt.font = font; btxt.x = X; btxt.y = Y; btxt.textAlign = "center";
            return btxt;
        }

        /**
         * 创建一个对应的动画
         */
        public static createMovieClip(mcName: string, NameJson: string = "", NamePng: string = ""): egret.MovieClip {
            if (NameJson == "") { NameJson = mcName; } if (NamePng == "") { NamePng = mcName; } let resJs = RES.getRes(NameJson + "_json"); let resPng = RES.getRes(NamePng + "_png");
            let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(resJs, resPng); let movieclipData = mcFactory.generateMovieClipData(mcName);
            let mc1: egret.MovieClip = new egret.MovieClip(movieclipData); return mc1;
        }


        /**
         * 创建矩形
         * 
         */
        public static createRectSprite(_width: number, _height: number, color: number = null, X: number = 0, Y: number = 0, Alpha: number = 1): egret.Sprite {
            let result: egret.Sprite = new egret.Sprite(); if (color == null) { result.graphics.beginFill(0x000000, 0); } else { result.graphics.beginFill(color, 1); }
            result.graphics.drawRect(0, 0, _width, _height); result.graphics.endFill(); result.x = X; result.y = Y; result.width = _width, result.height = _height, result.alpha = Alpha;
            return result;
        }


        /**
         * 创建一个Sprite
         * @param  center 是否居中
         */

        public static createSprite(X: number = 0, Y: number = 0, W: number = 0, H: number = 0, center: boolean = false): egret.Sprite {
            let result: egret.Sprite = new egret.Sprite();

            result.width = W; result.height = H;
            if (center) { Tool.center(result); }
            result.x = X; result.y = Y;
            return result;
        }

        /**
         * 创建一个Text对象
         * @param 
         */
        public static createTextFiled(x: number, y: number, width: number, height: number, str: string = "", size: number = 35, color: number = 0x000000, iscenter: string = "left", isvalign: string = "middle", bold: boolean = false): egret.TextField {
            let result: egret.TextField = new egret.TextField(); result.fontFamily = "SimHei"; result.x = x; result.y = y; if (width > 0) { result.width = width }; if (height > 0) { result.height = height };
            result.text = str; result.size = size; result.textColor = color; result.bold = bold; result.textAlign = iscenter; result.verticalAlign = isvalign; return result;
        }


        /**
         * Text可以输入
         * @param obj: 文本对象, defaultStr: 默认字符, inputColor: 输入时颜色 outColor:输入完成后的对象, isclear: 未再次输入文本是否内容置空
         */

        public static setInputTextFiled(obj: egret.TextField, defaultStr: string, inputColor: number = 0xffffff, outColor: number = 0xaaaaaa, isclear: boolean = true) {
            obj.type = "input";
            if (isclear) {
                obj.addEventListener(egret.FocusEvent.FOCUS_IN, () => { obj.text = ""; obj.textColor = inputColor; }, this);
            } else {
                obj.once(egret.FocusEvent.FOCUS_IN, () => { obj.text = ""; obj.textColor = inputColor; }, this);
            }
            obj.addEventListener(egret.FocusEvent.FOCUS_OUT, () => { if (obj.text == "") { obj.text = defaultStr; } obj.textColor = outColor; }, this);
        }


        //把方形图片变为圆形图片
        /**
       *把方形图片变为圆形图片
       * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
       */
        public static createCircularMask(Sp: egret.DisplayObject, X: number = 0, Y: number = 0, ): egret.Sprite {
            let CirSp = new egret.Sprite(); let diameter: number; if (Sp.width > Sp.height) { diameter = Sp.height; } else { diameter = Sp.width; }
            let SpMask = new egret.Sprite(); SpMask.graphics.beginFill(0x000000); SpMask.graphics.drawCircle(Sp.width / 2 + Sp.x, Sp.height / 2 + Sp.y, diameter / 2);
            SpMask.graphics.endFill(); Sp.mask = SpMask; CirSp.addChild(Sp); CirSp.addChild(SpMask); CirSp.x = X; CirSp.y = Y; return CirSp;
        }

        //

        /**
        *将方形变为圆角矩形图片
        * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
        */
        public static createRectMask(Sp: egret.DisplayObject, EW: number, EY: number): egret.Sprite {
            let CirSp = new egret.Sprite(); let SpMask = new egret.Sprite(); SpMask.graphics.beginFill(0x000000); SpMask.graphics.drawRoundRect(0, 0, Sp.width, Sp.height, EW, EY);
            SpMask.graphics.endFill(); Sp.mask = SpMask; CirSp.addChild(Sp); CirSp.addChild(SpMask); CirSp.x = Sp.x; CirSp.y = Sp.y; Sp.x = 0, Sp.y = 0; return CirSp;
        }


        /**
         * 
         *将方形图片变为上或下的圆角矩形//
         * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角，false,为下圆角
         */
        public static createRectUpOrDownMask(Sp: egret.DisplayObject, EW: number, EY: number, aspect: boolean = true): egret.Sprite {
            let CirSp = new egret.Sprite(); let SpMask = new egret.Sprite(); SpMask.graphics.beginFill(0x000000); SpMask.graphics.drawRoundRect(0, 0, Sp.width, Sp.height, EW, EY);
            SpMask.graphics.endFill(); let Reck = new egret.Sprite(); Reck.graphics.beginFill(0x000000); Reck.graphics.drawRect(0, 0, Sp.width, EY); Reck.graphics.endFill(); SpMask.addChild(Reck);
            if (aspect == true) { Reck.y = Sp.height - EY; } else { }
            Sp.mask = SpMask; CirSp.addChild(Sp); CirSp.addChild(SpMask); CirSp.x = Sp.x; CirSp.y = Sp.y; Sp.x = 0, Sp.y = 0; return CirSp;
        }


        /**
         * 
         *适配背景图片  width是宽与屏幕一样大，高无法完全显示,height是高与屏幕一样高,宽无法完全显示
         * @param displayObj 背景图片   align:显示方式
         */
        static scaleBg(displayObj: egret.Bitmap, align: string = "center"): void {
            var scale = 1
            if (align == "width") {
                scale = egret.MainContext.instance.stage.stageWidth / displayObj.width;
            } else if (align == "height") {
                scale = egret.MainContext.instance.stage.height / displayObj.height;
            } else {
                if (egret.MainContext.instance.stage.scaleMode == egret.StageScaleMode.FIXED_HEIGHT) {
                    scale = egret.MainContext.instance.stage.stageWidth / displayObj.width;
                } else {
                    scale = egret.MainContext.instance.stage.height / displayObj.height;
                }
            }

            displayObj.scaleX = displayObj.scaleY = scale;
        }
        /**
         * 将一个容器的锚点移到中心
         *  @param  obj 要居中的对象，is居中后是否回到原位
         */
        public static center(obj: egret.DisplayObject, is: Boolean = false): void {
            if (obj.anchorOffsetX != obj.width >> 1) {
                obj.anchorOffsetX = obj.width >> 1; obj.anchorOffsetY = obj.height >> 1; if (is) { return; }
                obj.x += obj.anchorOffsetX; obj.y += obj.anchorOffsetY;
            }
        }
        /**
        * 将一个容器的锚点移到中心
        *  @param  obj 要宽居中的对象，is居中后是否回到原位
        */
        public static centerWidth(obj: egret.DisplayObject, is: Boolean = false): void {
            if (obj.anchorOffsetX != obj.width >> 1) {
                obj.anchorOffsetX = obj.width >> 1; if (is) { return; }
                obj.x += obj.anchorOffsetX;
            }
        }
        /**
        * 将一个类的锚点移到中心
        *  @param  obj 要高居中的对象，is居中后是否回到原位
        */
        public static centerHeight(obj: egret.DisplayObject, is: Boolean = false): void {
            if (obj.anchorOffsetY != obj.height >> 1) {
                obj.anchorOffsetY = obj.height >> 1; if (is) { return; }
                obj.y += obj.anchorOffsetY;
            }
        }

        /**
            * 从父级移除childss
            * @param child
            */
        public static removeFromParent(child: egret.DisplayObject) {
            if (!child) return;
            if (!child.parent) return;
            if (child.parent.contains(child)) { child.parent.removeChild(child); }
        }

        /**
            * 锁屏
            */
        public static lock(): void { egret.MainContext.instance.stage.touchEnabled = egret.MainContext.instance.stage.touchChildren = false; }

        /**
         * 解屏
         */
        public static unlock(): void { egret.MainContext.instance.stage.touchEnabled = egret.MainContext.instance.stage.touchChildren = true; }

        //阻止容器出界 
        public static checkImage(obj: egret.DisplayObjectContainer): void {
            if (obj.x < egret.MainContext.instance.stage.stageWidth - obj.width) { obj.x = egret.MainContext.instance.stage.stageWidth - obj.width; } else if (obj.x > 0) { obj.x = 0; }
            if (obj.y < egret.MainContext.instance.stage.stageHeight - obj.height) { obj.y = egret.MainContext.instance.stage.stageHeight - obj.height; } else if (obj.y > 0) { obj.y = 0; }
        }

        /**
        * @param frame 根据帧频返回偏移量
        */
        public static frameRate(frame: number): number { return (frame / egret.MainContext.instance.stage.frameRate); }
        /**
       * @param base64 字符串
       */
        public static getTexture(base64: string): egret.Texture {
            let img: HTMLImageElement = new Image(); img.src = base64; let texture = new egret.Texture(); let bitmapdata = new egret.BitmapData(img);
            texture._setBitmapData(bitmapdata); return texture;
        }


        /**
         * 开始点击按钮变小 
         * 
         */

        public static ButtonNarrow(btn: egret.DisplayObject, self: any) {
            if (btn.anchorOffsetX == btn.width / 2) {
                Tool.center(btn, true);
            } else {
                Tool.center(btn);
            }
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { btn.scaleX = btn.scaleY = 1.1 }, self)
            btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, () => { btn.scaleX = btn.scaleY = 1 }, self)
            btn.addEventListener(egret.TouchEvent.TOUCH_END, () => { btn.scaleX = btn.scaleY = 1 }, self)
        }

        //打印堆栈
        public static trace(count) {
            var caller = arguments.callee.caller;
            var i = 0;
            count = count || 10;
            Log.log("***----------------------------------------  ** " + (i + 1));
            while (caller && i < count) {
                Log.log(caller.toString());
                caller = caller.caller;
                i++;
                Log.log("***---------------------------------------- ** " + (i + 1));
            }
        }


        /**
         * 重新 替换掉swf的 文本
         * @param txt变量名
         * @param self  作用域
         */

        public static replaceSwfTxt(txt: string, self: any): void {

            let copyTxt = self[txt];


            self[txt] = kelvin.texas.Tool.createTextFiled(copyTxt.x, copyTxt.y, copyTxt.width, copyTxt.height, copyTxt.text, copyTxt.size, copyTxt.textColor, copyTxt.textAlign);
            self[txt].verticalAlign = copyTxt.verticalAlign;
            self[txt].multiline = copyTxt.multiline;


            self[txt].text = copyTxt.text;

            //  self[txt].height =  copyTxt.size;


            let index = copyTxt.parent.getChildIndex(self[txt])
            copyTxt.parent.addChildAt(self[txt], index);
            kelvin.texas.Tool.removeFromParent(copyTxt);



        }

    }





}