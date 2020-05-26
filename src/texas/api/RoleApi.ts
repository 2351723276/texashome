module kelvin.texas {
	export class RoleApi extends BaseApi {

		public static syncRole(): void {
			var pars: any = { "api": "role", "c": "syncRole" };
			BaseApi.requestLogic(pars, null, null);
		}




		public static getMessage(callBack: Function): void {
			let pars: any = { "api": "role", "c": "getMessage" };
			BaseApi.requestLogic(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, null);
		}


		public static clearMessage(callBack: Function): void {
			let pars: any = { "api": "role", "c": "clearMessage" };
			BaseApi.requestLogic(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, null);
		}


		public static getRewardInfo(callBack: Function): void {
			let pars: any = { "api": "role", "c": "getRewardInfo" };
			BaseApi.requestLogic(pars, function (data: any) {
				if (data.info) {
					RoleData.putRolePrizeInfo(data.info)
				}
				if (callBack != null) callBack(data);
			}, null);
		}

		public static updateRewardInfo(name: string, pid: string, aliAccount: string, callBack: Function): void {
			let pars: any = { "api": "role", "c": "updateRewardInfo", name: name, pid: pid, aliAccount: aliAccount };
			BaseApi.requestLogic(pars, function (data: any) {
				let info = {
					name: name,
					pid: pid,
					aliAccount: aliAccount,
				};
				RoleData.putRolePrizeInfo(info);
				if (callBack != null) callBack(data);
			}, null);
		}

	}
}