module kelvin.texas {
	export class User {
		/**
		 * 用户账号
		 * */
		public $account:string;
			/**
		 * 用户密码
		 * */
		public pwd:string;
		/**
		 * 用户uid
		 * */
		public uid:string;
		/**
		 * 注册时间
		 * */
		public gettime:number | string;
        /**
         * 联合ID
         * @var
         */
		public union_id:string;
	}
}