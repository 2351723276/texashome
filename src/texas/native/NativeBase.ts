module kelvin.texas {
	export class NativeBase {

		public static wxRespCallBacks:any = {};

		/**
		 * 注册命令
		 */
		public static registerCmd(cmd: string, callBack: Function, thisObj: any, isHead: boolean = false) {
			var cmds: any[] = NativeBase.wxRespCallBacks[cmd];
			if (cmds == null) {
				cmds = [];
			}
			if (isHead) {
				cmds.unshift([callBack, thisObj]);
			} else {
				cmds.push([callBack, thisObj]);
			}
			NativeBase.wxRespCallBacks[cmd] = cmds;
		}

		/**
		 * 移除命令
		 */
		public static removeCmd(cmd: string, callBack: Function, thisObj: any) {
			var cmds: any[] = NativeBase.wxRespCallBacks[cmd];
			if (cmds == null) {
				cmds = [];
			}
			var index: number = -1;
			var len: number = cmds.length;
			for (var i: number = 0; i < len; i++) {
				if (cmds[i][0] == callBack && cmds[i][1] == thisObj) index = i;
			}
			if (index != -1) {
				cmds.splice(index, 1);
			}
			NativeBase.wxRespCallBacks[cmd] = cmds;
		}

		/**
		 * 派发命令消息
		 */
		public static dispatchCmd(cmd: string, data: any) {
			var cmds: any[] = NativeBase.wxRespCallBacks[cmd];
			if (cmds == null) {
				cmds = [];
			}
			var thisObj: any;
			var fun: Function;
			for (var i: number = 0; i < cmds.length; i++) {
				thisObj = cmds[i][1];
				fun = cmds[i][0];
				fun.apply(thisObj, [data])
			}
		}
	}
}