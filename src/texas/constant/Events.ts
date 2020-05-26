module kelvin.texas {
	export class Events {

		/** 重连事件，需要刷新界面 */
		public static reloadLoginData = "reloadLoginData";

		/** 刷新界面显示金币 */
		public static refreshShowGold = "refreshShowGold";

		/** 金币额度发生变化 */
		public static goldChange = "goldChange";

		/** 生成锦标赛界面*/
		public static createJBSView = "DT_createJBSView";

		/** 生成比赛详情界面 */
		public static createBSXQView = "DT_createBSXQView";

		/** 生成盲注结构表界面 */
		public static createMZJGBView = "DT_createMZJGBView";


		/**生成个人信息界面 */
		public static createPersonalView = "DT_createPersonalView";

		/** 去游戏界面 */
		public static gotoGameView = "DT_gotoGameView";

		/** 返回赛事界面 */
		public static gotoMatchView = "DT_gotoMatchView";

		/** 去奖励页卡 */
		public static gotoJLPage = "DT_gotoJLPage";//去奖励页卡



		/** 退出游戏事件 */
		public static backGame = "DT_backGame";//退出游戏事件

		/**游戏去到锦标赛界面 */
		public static goToJBSMatch = "DT_goToJBSMatch";

		/** 游戏 去到商城*/
		public static goToShop = "DT_goToShop";


		/** 横向容器滑动时不响应点击事件 */
		public static controlHContanier = "DT_controlHContanier";// 控制横向容器的点击事件  false是不能点击  true是可以


	}
}