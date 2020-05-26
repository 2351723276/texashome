module kelvin.texas {
	export class GameAssetLoader {


		public static lastLoadGameRes: any;

		public callBack: Function;
		public CallBackThisObj: any;

		/**
		 * 加载游戏资源
		 */
		public loadGame(callBack: Function, callBackThisObj: any) {


			this.callBack = callBack;
			this.CallBackThisObj = callBackThisObj;

			// if (GameAssetLoader.lastLoadGame != null && GameAssetLoader.lastLoadGame.id != game.id) {
			// 	RES.destroyRes("game_res_" + GameAssetLoader.lastLoadGame.id);
			// 	this.unConfig(GameAssetLoader.lastLoadGameRes);
			// }
			// GameAssetLoader.lastLoadGame = game;
			console.log("RES.isGroupLoaded(game_res_ + AppConfig.gameId)",RES.isGroupLoaded("game_res_" + AppConfig.gameId));
			

			if (!RES.isGroupLoaded("game_res_" + AppConfig.gameId)) {
				LoadingUI.ins.show(1);
				AssetManager.loadConfig(
					AppConfig.res_url + AppConfig.resVer + "/default.res.json",
					AppConfig.res_url + AppConfig.resVer + "/",
					this.onLoadAssetConfComplete,
					this
				);
			} else {
				this.callBack.apply(this.CallBackThisObj, []);
			}
		}


		public onLoadAssetConfComplete(data: any) {
			GameAssetLoader.lastLoadGameRes = data[1];
			AssetManager.loadGroup("game_res_" + AppConfig.gameId, this.onLoadAssetComplete, this);
		}

		public onLoadAssetComplete(data: any) {
			var callBackType: string = data[0];
			var e: RES.ResourceEvent = data[1];
			if (callBackType == "onResourceLoadComplete") {
				LoadingUI.ins.hide();
				this.callBack.apply(this.CallBackThisObj, []);
			} else if (callBackType == "onResourceProgress") {
				var val: number = parseInt(((e.itemsLoaded / e.itemsTotal) * 100).toString())
				LoadingUI.ins.setProgress(val);
			}
		}

		/**
		 * 卸载资源配置
		 */
		public unConfig(config: any): void {
			var res: any = RES;

			var configInstance: any = res.configInstance;

			var groups: any[] = config.groups;
			var resources: any[] = config.resources;

			var len: number = groups.length;
			var obj: any;
			var subkeys: string[];
			var subkeysLen: number;
			for (var i: number = 0; i < len; i++) {
				obj = groups[i];
				delete configInstance.groupDic[obj.name];
			}

			len = resources.length;
			for (var i: number = 0; i < len; i++) {
				obj = resources[i];
				subkeys = obj.subkeys;
				delete configInstance.keyMap[obj.name];
				if (subkeys == null) continue;
				subkeysLen = subkeys.length;
				for (var j: number = 0; j < subkeysLen; j++) {
					delete configInstance.keyMap[subkeys[j]];
				}
			}
		}

	}
}