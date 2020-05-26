module kelvin.texas {
	export class InterfaceVariablesUtil {

		public static initVariables(obj:any,interFace:egret.DisplayObjectContainer,recursiveBind:boolean = false,hasEventBtns = null,hasEventBtnNames = null){
			if(hasEventBtns == null) hasEventBtns = [];
			if(hasEventBtnNames == null) hasEventBtnNames = [];

			var len:number = interFace.$children.length;
			var name:string;
			var display:egret.DisplayObject;
			var btnClickFunName:string;
			for(var i:number = 0; i < len ; i++){
				display = interFace.$children[i];
				name = display.name;
				let clazzName = egret.getQualifiedClassName(display);
				if(name != null && name != ""){
					if(obj[name] != null){
						Log.log("变量名字定义重复:" + name);
						// throw new Error("变量名字定义重复");
					}
					obj[name] = display;
				}
				if(clazzName == "starlingswf.SwfButton"){
					btnClickFunName = "on_" + name;
					if(obj[btnClickFunName]){
						display.addEventListener(starlingswf.SwfButton.onClick,obj[btnClickFunName],obj);
						hasEventBtns.push(display);
						hasEventBtnNames.push(name);
					}
				}
				if(recursiveBind && clazzName == "starlingswf.SwfSprite"){
					InterfaceVariablesUtil.initVariables(obj,display as egret.DisplayObjectContainer,recursiveBind,hasEventBtns,hasEventBtnNames);
				}
			}
			obj["_hasEventBtns_"] = hasEventBtns;
			obj["_hasEventBtnNames_"] = hasEventBtnNames;
		}

		public static disposeVariables(obj:any){
			var hasEventBtns:starlingswf.SwfButton[] = obj["_hasEventBtns_"];
			var hasEventBtnNames:string[] = obj["_hasEventBtnNames_"];
			if(hasEventBtns == null || hasEventBtnNames == null) return;
			var len:number = hasEventBtns.length;
			for(var i:number = 0; i < len ; i++){
				hasEventBtns[i].removeEventListener(starlingswf.SwfButton.onClick,obj[hasEventBtnNames[i]],obj);
			}
		}



		public static initVariablesWithType(obj:any,interFace:egret.DisplayObjectContainer,clazz:any){
			
		    var cName:string;
			var len:number = interFace.$children.length;
			var display:egret.DisplayObject;

			for(var i:number = 0; i < len ; i++){
				display = interFace.$children[i];
				cName = display.name;
				if(cName != null && cName != "" && display instanceof clazz){
					obj[cName] = display;
				}

			}

		}



	}
}