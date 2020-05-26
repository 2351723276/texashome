module kelvin.texas {
	export class Fingerprint2Utils {


		public static fingerprint2:any;
		public static fingerprintData:any;

		public static init(callBack:Function):void{
			if(Fingerprint2Utils.fingerprint2 == null){
				if(callBack != null){
					callBack();
				}
				return;
			}
			NetworkLoading.show();
			if(Fingerprint2Utils.fingerprintData != null){
				NetworkLoading.hide();
				if(callBack != null){
					callBack();
				}
				return;
			}
			Fingerprint2Utils.fingerprint2.get(function(result, components){
				NetworkLoading.hide();
				Fingerprint2Utils.fingerprintData = result;
				if(callBack != null){
					callBack();
				}
			});
		}

		public static getId():string{
			if(Fingerprint2Utils.fingerprintData == null){
				return null;
			}
			if(App.isAndroid()){
				return new md5().hex_md5(Fingerprint2Utils.getBuild());
			}else{
				let len = Fingerprint2Utils.fingerprintData.length;
				for(let i = 0; i < len ; i++){
					let val = Fingerprint2Utils.fingerprintData[i];
					if(val["key"] == "canvas"){
						return new md5().hex_md5(val["value"][1]);
					}
				}
			}
		}

		public static getBuild():string{
			if(Fingerprint2Utils.fingerprintData == null){
				return null;
			}
			let len = Fingerprint2Utils.fingerprintData.length;
			for(let i = 0; i < len ; i++){
				let val = Fingerprint2Utils.fingerprintData[i];
				if(val["key"] == "userAgent"){
					let buildVal = val["value"].toString().split(")");
					buildVal = buildVal[0];
					buildVal = buildVal.split(";");
					buildVal = buildVal[buildVal.length-1];
					return buildVal;
				}
			}
			return null;
		}

		public static getAvailableScreenResolution():string{
			return window.screen.availWidth + "_" + window.screen.availHeight;
		}




	}
}