module kelvin.texas {
	export class AppConfig {

		public static server_ip: string = "172.17.1.105";
		public static server_port: number = 7104;
		

		/** 平台资源配置地址 */
		public static platform_res_config_url: string = "resource/default.res.json";
		/** 平台资源配加载前缀 */
		public static platform_res_url: string = "resource/";
		/** 微信appid */
		public static wxAppId = "";
		/** universalLink */
		public static universalLink = "";
		/** 微信角色信息请求 */
		public static wxApiUrl = "";
		/** 下载地址 */
		public static downUrl = "";



		/** 资源路径*/
		public static res_url = "http://172.17.1.105/aptana/texas_game/";  
		
		/** 资源配置文件*/
		public static res_config = "";
		/** 游戏主类*/
		public static clientMainClass = "kelvin.texas.game.GameRoot";
		/** 版本号*/
		public static resVer = "2";
	
		/**游戏id */
		public static gameId = 6001;

		/**是否需要绑定手机才能报名 */  //1是需要   2是不需要
		public static applyisneedPhone: number = 2;

	}
}