module kelvin.texas {
	export class UserApi extends BaseApi {

		public static register(account: string, pwd: string, recommend: string, callBack: Function,wxRole:any = null,error:Function = null) {
			var pars: any = { "api": "user", "c": "register", "account": account, "pwd": pwd };
			if (egret.Capabilities.os == "iOS") {
				pars['plat_id'] = "0";
			} else if (egret.Capabilities.os == "Android") {
				pars['plat_id'] = "1";
			} else {
				pars['plat_id'] = "2";
			}
			if (recommend != null && recommend != "") {
				pars['recommend'] = recommend;
			} else if (egret.getOption("recommend") != "") {
				pars['recommend'] = egret.getOption("recommend");
			}

			if(wxRole != null){
				pars['wxRole'] = wxRole;
			}

			BaseApi.requestUser(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, error);
		}

		public static login(account: string, pwd: string, callBack: Function,errcall?:Function) {
			var pars: any = { "api": "user", "c": "login", "account": account, "pwd": pwd };
			BaseApi.requestUser(pars, function (data: any) {
				AccountData.putSessionToken(data.sessionToken);
				AccountData.putUser(data.user);
				UserApi.initLoginData(data.loginData);
				App.heart();
				if (callBack != null) callBack(data);
			}, errcall);
		}

		public static resetfd(): void {
			var pars: any = { "api": "user", "c": "resetfd", "sessionToken": AccountData.getSessionToken() };
			BaseApi.requestUser(pars, function (data:any) {
				UserApi.initLoginData(data.loginData);
				EventManager.dispatchCmd(Events.reloadLoginData,null);
			},function (data:any) {

			});
		}

		public static initLoginData(data: any) {
			if (data.role == null) return;
			RoleData.putRole(data.role);
			AccountData.loginData = data;
		
		}
		
		//登录界面获得验证码
		public static loginGetCode(account: string, callBack: Function): void {
			var pars: any = { "api": "user", "c": "getCode", "account": account };
			BaseApi.requestUser(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, null);
		}

		//登录界面重置密码
		public static loginAgainPassword(account: string, newPwd: string,code:string,callBack: Function,error?:Function): void {
			var pars: any = { "api": "user", "c": "resetPwd", "account": account ,"newPwd":newPwd,"code":code};
			BaseApi.requestUser(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, error);
		}


	}
}