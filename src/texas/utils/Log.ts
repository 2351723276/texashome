module kelvin.texas {
	export class Log {
		public static enabled:boolean = true;
		public static log(data:any){
			if(this.enabled)
				egret.log(data);
		}

		public tracktrace(count: number = 10): void {
			var caller = arguments.callee.caller;
			var i = 0;
			count = count || 10;
			console.log("***----------------------------------------  ** " + (i + 1));
			while (caller && i < count) {
				console.log(caller.toString());
				caller = caller.caller;
				i++;
				console.log("***---------------------------------------- ** " + (i + 1));
			}
		}

	}
}
