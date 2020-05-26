module kelvin.texas {
	export class JSAnalyzer extends RES.BinAnalyzer {

        static jsDic:any;

		public constructor() {
			super();
			this._dataFormat = egret.HttpResponseType.TEXT;
            JSAnalyzer.jsDic = {};
		}

		/**
         * 解析并缓存加载成功的数据
         */
        public analyzeData(resItem:RES.ResourceItem, data:any):void {
            let name:string = resItem.name;
            if (this.fileDic[name] || !data) {
                return;
            }

            if(JSAnalyzer.jsDic[name] == 1) return;

            let str:string = <string> data;
            this.fileDic[name] = str;
            
            var content = `
            kelvin = window.kelvin;
            ${str};
            `
            var func = new Function(content);
            func();

            JSAnalyzer.jsDic[name] = 1;
        }
	}
}