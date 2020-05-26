module kelvin.texas {
	export class Room {

		/** 房间id */
		public id;
		/** 创建时间 */
		public ct;
		/** 房间成员列表 */
		public players;
		/** 最大玩家数量 */
		public max_player;
		/** 比赛id */
		public $match_id;
		/** 庄家位 */
		public zj;
		/** 最大计分牌 */
		public maxScore = -1;
		/** 最小计分牌 */
		public minScore = -1;
		/** 是否已经准备开始游戏 */
		public ready = true;
		/** 桌号 */
		public table_num = 0;



	}
}