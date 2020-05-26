module kelvin.texas {
	export class RoomApi extends BaseApi {


		//加入游戏
		public static joinGame(mid: string, room_id: number, callBack: Function): void {
			var pars: any = { "api": "room", "c": "joinGame", "mid": mid, "room_id": room_id };
			BaseApi.requestLogic(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, null);
		}



		//离开游戏
		public static leaveGame(callBack: Function): void {
			var pars: any = { "api": "room", "c": "leaveGame" };
			BaseApi.requestLogic(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, null);
		}



		//获取某个玩家在比赛的哪个房间中
		public static getPlayerMatchRoomId(mid: string, targetUid: string, callBack: Function,error?:Function): void {
			var pars: any = { "api": "room", "c": "getPlayerMatchRoomId", mid: mid, targetUid: targetUid };
			BaseApi.requestLogic(pars, function (data: any) {
				if (callBack != null) callBack(data);
			}, error);
		}




		/**
		 * 向游戏发送数据
		 */
		public static gameMessage(messageData: any, finishOnClient: boolean = false): void {
			messageData['api'] = "room";
			messageData['c'] = "gameMessage";
			BaseApi.requestLogic(messageData, function (data: any) { }, null, finishOnClient);
		}

		public static on_joinRoom(data: any): void {
			// RoomData.saveRole(data.role);
			// RoomData.putCurrentRoom(data.room);
		}
		public static on_leaveRoom(data: any): void { }
		public static on_leaveGame(data: any): void { }
		public static on_returnGame(data: any): void { }

	}
}