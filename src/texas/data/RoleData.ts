module kelvin.texas {
	export class RoleData {

		// private static _updateOnLineTimeId = -1;//更新在线时间的定时器id
		// private static _updateOnlineTimeSec;//登陆时间戳

		public static getRole(): Role {
			return CacheData.getRAMData("role");
		}
		public static putRole(role: Role): void {
			CacheData.saveRAMData("role", role);
			// if(RoleData._updateOnLineTimeId == -1){
			// 	RoleData._updateOnlineTimeSec = Math.round(new Date().getTime()/1000);
			// 	RoleData._updateOnLineTimeId = egret.setInterval(function():void{
			// 		let onLineTime = RoleData.getOnlineTime();
			// 		let time = Math.round(new Date().getTime()/1000);

			// 		RoleData._updateOnlineTimeSec = time;
			// 	},RoleData,1000);
			// }
		}

		public static getRoleName(uid: string): string {
			return CacheData.getRAMData("roleNamesCache:" + uid);
		}
		public static putRoleName(uid: string, name: string): void {
			CacheData.saveRAMData("roleNamesCache:" + uid, name);
		}


		public static putRolePrizeInfo(data: any) {
			CacheData.saveRAMData("RolePrizeInfo", data);
		}

		public static getRolePrizeInfo() {
			return CacheData.getRAMData("RolePrizeInfo");
		}



		/**
		 * 更新玩家金币,会派发更新界面显示金币的事件
		 */
		public static updateRoleGold(gold: number) {
			RoleData.getRole().gold = gold;
			EventManager.dispatchCmd(Events.refreshShowGold, gold);
		}

		/**
		 * 保存玩家在线时长
		 */
		public static updateOnLineTime(time: number) {
			CacheData.saveRAMData("onlineTime", parseInt(time.toString()));
		}

		public static getOnlineTime(): number {
			return CacheData.getRAMData("onlineTime");
		}

	}
}