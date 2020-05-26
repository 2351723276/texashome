module kelvin.texas {
	export class ClipBoard {
		
		public static copy(msg:string){
			if(App.isWeiDuan()){
				NativeTools.copy(msg);
			}else{
				var input = document.createElement("input");
				input.value = msg;
				document.body.appendChild(input);
				input.select();
				input.setSelectionRange(0, input.value.length);
				document.execCommand('Copy');
				document.body.removeChild(input);
			}
		}

	}
}