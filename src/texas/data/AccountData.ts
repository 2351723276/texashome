module kelvin.texas {
	export class AccountData {

		public static getSessionToken(): string {
			return CacheData.getRAMData("sessionToken");
		}
		public static putSessionToken(token: string): void {
			CacheData.saveRAMData("sessionToken", token);
		}

		public static getUser(): User {
			return CacheData.getRAMData("user");
		}

		public static putUser(user: User): void {
			CacheData.saveRAMData("user", user);
		}

		public static set loginInfo_wx(json: Object) {
			let obj;
			if (json) {
				obj = { account: "", password: "", time: 0, iswx: "yes" };
				obj.account = json["account"];
				obj.password = json["password"];
				obj.time = new Date().getTime();
			} else {
				obj = null;
			}
			egret.localStorage.setItem("AccountData_loginInfo_wx", JSON.stringify(obj));
		}

		public static get loginInfo_wx(): Object {
			let result = egret.localStorage.getItem("AccountData_loginInfo_wx");
			if (result && result != "null") {
				return JSON.parse(result);
			} else {
				return null;
			}
		}

		public static set wxInfoTime(time: number) {
			egret.localStorage.setItem("AccountData_wxInfoTime", String(time));
		}
		//正式信息 手机的
		public static set loginInfo(json: Object) {
			egret.localStorage.setItem("AccountData_loginInfo", JSON.stringify(json));
		}

		public static get loginInfo(): Object {
			let result = egret.localStorage.getItem("AccountData_loginInfo");
			if (result) {
				return JSON.parse(result);
			} else {
				return null;
			}
		}



		//向缓存里面增加信息
		public static addLoginInfo(account: string, password: string): void {
			let info = AccountData.loginInfo;
			let date = new Date();
			if (!info) {
				info = {};
			}
			info[account] = {};
			info[account]["account"] = account;
			info[account]["password"] = password;

			info[account]["time"] = date.getTime();

			AccountData.loginInfo = info;
		}


		//向缓存里删除信息
		public static deleteLoginInfo(account: string): void {
			let info = AccountData.loginInfo;
			if (!info) {
				return;
			}

			if (!info[account]) {
				return;
			}
			delete info[account];
			AccountData.loginInfo = info;
		}

		public static set loginInfo_visitor(json: Object) {
			let obj;
			if (json) {
				obj = { account: "", password: "", time: 0, };
				obj.account = json["account"];
				obj.password = json["password"];
				obj.time = new Date().getTime();
			} else {
				obj = null;
			}
			egret.localStorage.setItem("AccountData_loginInfo_visitor", JSON.stringify(obj));
		}

		public static get loginInfo_visitor(): Object {
			let result = egret.localStorage.getItem("AccountData_loginInfo_visitor");
			if (result && result != "null") {
				return JSON.parse(result);
			} else {
				return null;
			}
		}

		//得到最后登录的账号密码  info为空就是没有   info   account password time   如果是wx 会有iswx
		public static getLastAccount(): any {
			let phoneInfo = AccountData.getLastPhoneAccount();
			let wxinfo = AccountData.loginInfo_wx;
			let visitorinfo = AccountData.loginInfo_visitor;

			if (!wxinfo && !phoneInfo) {
				return null;
			}
			if (!wxinfo && !visitorinfo) {
				return phoneInfo;
			}
			if (!phoneInfo && !visitorinfo) {
				return wxinfo;
			}
			if (!phoneInfo && !wxinfo) {
				return visitorinfo;
			}

			let info: any;
			if (phoneInfo && wxinfo) {
				if (phoneInfo["time"] > wxinfo["time"]) {
					info = phoneInfo;
				} else {
					info = wxinfo;
				}
			} else if (phoneInfo && visitorinfo) {
				if (phoneInfo["time"] > visitorinfo["time"]) {
					info = phoneInfo;
				} else {
					info = visitorinfo;
				}
			}
			return info;

		}

		//得到缓存里最后登录的手机账号密码  info为空就是没有   info   account password time
		public static getLastPhoneAccount(): any {

			let phoneinfo = AccountData.loginInfo;
			if (!phoneinfo) {
				return null;
			}
			let time: number = 0;
			let info: any;
			for (let i in phoneinfo) {
				if (phoneinfo[i]["time"] > time) {
					time = phoneinfo[i]["time"];
					info = phoneinfo[i];
				}
			}
			return info;
		}

		//需不需要自动登录  1是不需要  2是需要
		public static set isNeedAutomaticLogin(str: string) {
			egret.localStorage.setItem("AccountData_isNeedAutomaticLogin", str);
		}

		public static get isNeedAutomaticLogin(): string {
			let result = egret.localStorage.getItem("AccountData_isNeedAutomaticLogin");
			if (result) {
				return result;
			} else {
				return "1";
			}
		}



		//登录消息
		public static set loginData(data: any) {
			CacheData.saveRAMData("loginData", data);
		}
		public static get loginData(): any {
			return CacheData.getRAMData("loginData");
		}

	}
}