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
 * 可以玩家输入的输入框
 * 
 */


module kelvin.texas {
    export class InputText extends egret.DisplayObjectContainer {
        /**
         * @param text 如果text已经放入舞台上，则本容器不需要再放入了   
         * @param issige
         */
        public constructor(text: egret.TextField, issingle: boolean = true) {
            super();

            this.issingle = issingle;
            this.inputText = text;
            this.inputText.verticalAlign = "top";
            this.inputText.multiline = true;
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.dispose, this);

            this.createGameScene();

        }

        private issingle: boolean;

        private inputText: egret.TextField;

        private createGameScene(): void {
            this.width = this.inputText.width;
            this.height = this.inputText.height;

            this.x = this.inputText.x;
            this.y = this.inputText.y;

            this.inputText.x = 0;
            this.inputText.y = 0;

            let parent = this.inputText.parent;
            this.addChild(this.inputText);
            if (parent) {
                parent.addChild(this);
            }


            this.inputText.type = "input";

            this.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
            this.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);


            this.inColor = this.inputText.textColor;
            this.outColor = this.inputText.textColor;


            if (this.issingle == true) {
                // this.addSingle();
            }
        }


        public addSingle(): void {
            this.changesingle = false;
            let self = this;
            document.addEventListener("keydown", (evt: any) => {
                if (evt.key == "Enter") {
                    evt.preventDefault();
                    // if (self.changesingle == true) {
                    //     egret.setTimeout(() => {
                    //         self.inputText.text = self.inputText.text.substring(0, self.inputText.text.length - 1);
                    //     }, self, 50);
                    // }
                }
            })
        }

        public changesingle: boolean;





        //玩家在准备输入时调动
        private focusIn(): void {
            this.inputText.textColor = this.inColor;
            this.changesingle = true;
            if (this.inCallBack) {
                if (this.inself) {
                    this.inCallBack(this.inself);
                } else {
                    this.inCallBack();
                }
            }

            if (typeof this.isClear == "number") {
                if (this.isClear >= 1) {
                    this.inputText.text = "";
                    this.isClear--;
                }
            }

            if (this.isClear == true) {
                this.inputText.text = "";
            }

        }


        // 玩家在输入完后调动
        private focusOut(): void {
            this.changesingle = false;
            this.inputText.textColor = this.outColor;
            if (this.inputText.text == "" && this.defaultStr) {

                if (this.frequency >= 1 || this.frequency < 0) {
                    this.inputText.text = this.defaultStr;
                }

                if (this.frequency >= 1) {
                    this.frequency--;
                }
            }

            if (this.outCallBack) {
                if (this.outself) {
                    this.outCallBack(this.outself);
                } else {
                    this.outCallBack();
                }
            }
        }

        /**
         * 再次输入时是否清除之前内容  true为清除，false为不清除  数字为清除几次后不清除   默认为true清除    
         */
        private _isClear: boolean | number = true;

        public set isClear(bool: boolean | number) {
            this._isClear = bool;
        }

        public get isClear(): boolean | number {
            return this._isClear;
        }
        /**
         * 
         */

        /**
         * 设置输入状态下的文本颜色
         * @param  color 颜色  格式  0x000000
         */
        private inColor: number;
        public setInPutColor(color: number): void {
            this.inColor = color;
        }



        /**
         * 设置输入后的文本颜色
         * @param  color 颜色  格式  0x000000
         */
        private outColor: number;
        public setOutPutColor(color: number): void {
            this.outColor = color;
        }


        /**
         * 设置默认文本  就是当文本为空时应该显示的内容
         * @param str 默认的文本内容
         * @param frequency 文本内容改换的次数  =-1  是无限次 ;  >=0  就是改变相应的次数 ； 
         */

        private defaultStr: string;
        private frequency: number;

        public setDefaultText(str: string, frequency: number = -1): void {
            this.defaultStr = str;

            this.frequency = frequency;
        }


        /**
         * 玩家在准备输入时的回调函数
         * @param callback 回调函数
         */

        private inCallBack: Function;
        private inself: any;
        public setInCallBack(callback: Function, self?: any): void {
            this.inCallBack = callback;
            this.inself = self;
        }

        /**
         * 玩家在输入完成后的回调函数
         * @param callback 回调函数
         */

        private outCallBack: Function;
        private outself: any;
        public setOutCallBack(callback: Function, self?: any): void {
            this.outCallBack = callback;
            this.outself = self;
        }


        /**
         * 是否为密码文本
         */
        private _ispassword: boolean = false;
        public set ispassword(bool: boolean) {
            this._ispassword = bool;
            if (bool == true) {
                // this.inputText.inputType = egret.TextFieldInputType.PASSWORD;
                //  this.inputText.inputType = egret.TextFieldInputType.PASSWORD;
                this.inputText.displayAsPassword = true;
                this.inputText.displayAsPassword = true;
            } else {
                this.inputText.displayAsPassword = false;
                this.inputText.displayAsPassword = false;
            }
        }

        public get ispassword(): boolean {
            return this._ispassword;
        }



        public dispose(): void {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.dispose, this);
            this.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
            this.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
        }

    }















}