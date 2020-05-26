module kelvin.texas {
	export class ApiState {

		static stateTxt: any = {
			"-1": "api错误",
			"-2": "方法传递错误",
			"-3": "参数不足",
			"-4": "参数非法",
			"-5": "请先登陆",
			"-6": "用户不存在",
			"-7": "用户名已经存在",
			"-8": "账户已存在",
			"-9": "已被封号",
			"-10": "密码错误",
			"-11": "金币不足",
			"-12": "不是报名时间",
			"-13": "延迟报名结束",
			"-14": "盲注等级过大不能报名了",
			"-15": "已经报名",
			"-16": "门票不足",
			"-17": "报名人数已满",
			"-18": "房间ID错误",
			"-19": "比赛id错误",
			"-20": "奖励圈人数已确定，停止报名",
			"-21": "60秒只能获取一次短信验证码",
			"-22": "验证码错误",
			"-23": "买入次数达到上限",
		};

		public static show(state: string) {
			if (ApiState.stateTxt[state]) {
				ApiState.showText(ApiState.stateTxt[state]);
			} else {
				ApiState.showText(state);
			}
		}

		public static showText(text: string | Array<egret.ITextElement>) {
			Log.log("ApiStateText:" + text);
			let txt: egret.TextField;
			if (typeof (text) == "string") {
				txt = kelvin.texas.Tool.createTextFiled(0, 0, 800, 80, text, 30, 0xffffff, "center");
			} else {
				txt = kelvin.texas.Tool.createTextFiled(0, 0, 800, 80, "", 30, 0xffffff, "center");
				txt.textFlow = text;
			}

			txt.verticalAlign = "middle";

			kelvin.texas.Tool.center(txt);


			let bgimg = kelvin.texas.Tool.createBitmapByName("img_youxdat_tistanchuang_png");
			bgimg.scale9Grid = new egret.Rectangle(bgimg.width / 2 - 5, 0, 10, 0);

			let addwidth = txt.textWidth - 100;
			if (addwidth < 0) {
				addwidth = 0;
			}
			bgimg.width = bgimg.width + addwidth;


			let sp: egret.Sprite = new egret.Sprite();
			sp.width = bgimg.width;
			sp.height = bgimg.height;
			sp.addChild(bgimg);
			sp.addChild(txt);
			txt.x = sp.width / 2;
			txt.y = sp.height / 2;
			kelvin.texas.Tool.center(sp);
			sp.x = App.stageWidth / 2 - 512;
			sp.y = App.stageHeight / 2;

			sp.alpha = 0;
			if (App.isLandscape) {
				sp.rotation = App.getRotationValue();
			}

			Starup.stageSp.promptSp.addChild(sp);
			egret.Tween.get(sp).to({ x: App.stageWidth / 2, alpha: 1 }, 200).wait(1500).call(() => {
				kelvin.texas.Tool.removeFromParent(sp);
			}, this, [sp])


		}

	}
}