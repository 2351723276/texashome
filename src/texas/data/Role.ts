module kelvin.texas {
	export class Role {
		/** 角色uid */
		public uid;
		/** 注册时间*/
		public gettime;
		/** 角色名 */
		public name;
		/** 头像地址 */
		public head;
		/** 性别 */
		public sex = 0;
		/** ip */
		public ip;
		/** 推荐人id */
		public recommend;
		/** 地址 */
		public addr;
		/** 金币数量 */
		public gold = 0;
		/** 积分 */
		public scores = 0;
	}
}