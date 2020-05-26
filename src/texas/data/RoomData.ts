module kelvin.texas {
	export class RoomData {

		public static getCurrentRoom():Room{
			return CacheData.getRAMData("currentRoom");
		}
		
		public static putCurrentRoom(room:Room):void{
			CacheData.saveRAMData("currentRoom",room);
		}

		/**
		 * 保存当前房间中的玩家数据
		 */
		public static saveRoles(roles:any):void{
			CacheData.saveRAMData("currentRoom_roles",roles);
		}

		/**
		 * 获取当前房间中的所有角色
		 */
		public static getRoles():any{
			return CacheData.getRAMData("currentRoom_roles");
		}

		/**
		 * 保存一个玩家信息到房间角色列表
		 */
		public static saveRole(role:Role):void{
			var roles:any = RoomData.getRoles();
			if(roles == null){
				roles = {};
			}
			roles[role.uid] = role;
			RoomData.saveRoles(roles);
		}

		/**
		 * 获取当前房间的某个角色
		 */
		public static getRole(uid:string):Role{
			var roles:any = RoomData.getRoles();
			if(roles == null){
				return null;
			}
			return roles[uid];
		}

		/**
		 * 记录休闲区和竞技区和相应游戏的选择   数组, 0位是大区,1位是游戏
		 */

		public static set recordChooseZoneAndGame(arr: any[]) {
			CacheData.saveRAMData("recordChooseZoneAndGame", arr);
			// egret.localStorage.setItem("recordChooseZoneAndGame", JSON.stringify(arr));
		}

		public static get recordChooseZoneAndGame(): any[] {
			let arr = CacheData.getRAMData("recordChooseZoneAndGame");
			// let arr = JSON.parse(egret.localStorage.getItem("recordChooseZoneAndGame"));

			if (!arr) {
				arr = [null, null];
			}
			return arr;
		}

	}
}