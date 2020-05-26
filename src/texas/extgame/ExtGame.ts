module kelvin.texas {

	/**
	 * 游戏主体
	 */
	export class ExtGame extends egret.DisplayObjectContainer {

		public constructor() {
			super();
		}

		/** 初始化房间 */
		public onInit() {
			Log.log("ExtGame ---> onInit");
		}

		/** 根据录像来初始化游戏 */
		public onInitByMovie(movie: any) {

		}

		/** 有玩家加入房间 */
		public onJoinRoom(data: any) {
			Log.log("ExtGame ---> onJoinRoom");
		}

		/** 玩家返回游戏 */
		public onReturnGame(data: any) {
			Log.log("ExtGame ---> onReturnGame");
		}

		/** 有玩家离开房间 */
		public onLeaveRoom(data: any) {
			Log.log("ExtGame ---> onLeaveRoom");
		}

		/** 玩家离线 */
		public onLeaveGame(data: any) {
			Log.log("ExtGame ---> onLeaveGame");
		}

		/** 解散房间 */
		public onDisbandRoom(data: any) {
			Log.log("ExtGame ---> onDisbandRoom");
		}

		/** 收到游戏消息 */
		public onGameMessage(data: any) {
			Log.log("ExtGame ---> onGameMessage");
		}

		/** 收到余额不足，被迫离开房间的消息 */
		public onLeaveRoomByJoinMoneyError(data: any) {
			Log.log("ExtGame ---> onLeaveRoomByJoinMoneyError");
		}

		/** 返回游戏自定义背景 */
		public getBackGround(): ExtGameBackground {
			return null;
		}

		/** 当界面大小变化 触发重新布局的操作 */
		public layout() {
			Log.log("ExtGame ---> layout");
		}

		/**获取游戏版本号 */
		public getGameVersion(): string {
			return "";
		}

		/** 销毁游戏 */
		public dispose() {
			Log.log("ExtGame ---> dispose");
		}

	}
}