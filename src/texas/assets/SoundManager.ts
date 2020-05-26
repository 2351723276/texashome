module kelvin.texas {
	export class SoundManager {


		public static currentGameSounds: any;
		public static currentGameSoundChannels: any;
		public static currentGameSoundUrls: any;
		public static currentBgName: string;

		public static changyongSounds: any;
		public static changyongSoundChannels: any;

		public static setGameConfig(): void {

			if (SoundManager.currentGameSounds == null) {
				SoundManager.currentGameSounds = {};
				SoundManager.currentGameSoundChannels = {};
				SoundManager.currentGameSoundUrls = {};
			}

		}

		public static setCurrentGameSoundVolume(volume: number): void {
			if (SoundManager.currentGameSoundChannels) {
				for (let i in SoundManager.currentGameSoundChannels) {
					if (SoundManager.currentGameSoundChannels[i] && SoundManager.currentGameSoundChannels[i].position) {
						SoundManager.currentGameSoundChannels[i].volume = volume;
					}
				}
			}
		}


		public static recoveryCurrentGameSoundVolume(): void {
			if (SoundManager.currentGameSoundChannels) {
				for (let i in SoundManager.currentGameSoundChannels) {
					if (SoundManager.currentGameSoundChannels[i] && SoundManager.currentGameSoundChannels[i].position) {
						SoundManager.currentGameSoundChannels[i].volume = VoiceData.soundNum;
					}
				}
			}
		}

		public static playPreSound(name: string, loops: number = 1): void {
			var sound: egret.Sound = RES.getRes(name);
			if (sound != null) {
				var soundChannel = sound.play(0, loops);
				soundChannel.volume = VoiceData.soundNum;
			}
		}

		public static playGameSound(name: string, loops: number = 1, volume: number = 1): void {
			if (this._isMute) return;

			if (RES.hasRes(name)) {
				SoundManager.playPreSound(name, loops);
				return;
			}
			if (volume == 1) {
				volume = VoiceData.soundNum;
			}
			if (volume > 0) {
				SoundManager.playSound(name, loops, volume);
			}
		}

		public static playBgSound(name: string): void {
			if (this._isMute) return;

			if (SoundManager.currentBgName) SoundManager.stopGameSound(SoundManager.currentBgName);
			SoundManager.currentBgName = name;

			var volume: number = VoiceData.musicNum;
			if (volume > 0) {
				SoundManager.playSound(name, 0, volume);
			}
		}

		public static stopGameSound(name: string): void {
			var channel: egret.SoundChannel = SoundManager.currentGameSoundChannels[name];
			if (channel != null) {
				channel.stop();
				channel = null;
				SoundManager.currentGameSoundChannels[name] = null;
			}
		}
		private static _isMute: boolean = false;
		public static setSoundMute(ismute: boolean): void {
			if (this._isMute == ismute) return;
			this._isMute = ismute;
			var bgVolume: number = 0;
			if (!this._isMute)//如果静音就停掉背景音乐
			{
				bgVolume = VoiceData.musicNum;
			}
			if (SoundManager.currentBgName != undefined || SoundManager.currentBgName != null) {
				var channel: egret.SoundChannel = SoundManager.currentGameSoundChannels[SoundManager.currentBgName];
				if (channel != null) {
					channel.volume = bgVolume;
				}
			}
		}



		private static playSound(name: string, loops: number = 1, volume: number = 1): void {
			var sound: egret.Sound = SoundManager.currentGameSounds[name];
			var channel: egret.SoundChannel;
			if (sound != null) {
				channel = sound.play(0, loops);
				channel.volume = volume;
				SoundManager.currentGameSoundChannels[name] = channel;
			} else {
				var loadUrl: string = AppConfig.res_url + AppConfig.resVer + "/sound/" + name + "?v=" + AppConfig.resVer;
				RES.getResByUrl(loadUrl, function (sound: egret.Sound): void {
					SoundManager.currentGameSounds[name] = sound;
					channel = sound.play(0, loops);
					channel.volume = volume;
					SoundManager.currentGameSoundChannels[name] = channel;
					SoundManager.currentGameSoundUrls[name] = loadUrl;
				}, SoundManager, RES.ResourceItem.TYPE_SOUND);


			}
		}

		public static disposeSounds(): void {
			var sound: egret.Sound;
			var channel: egret.SoundChannel;
			for (var k in SoundManager.currentGameSounds) {
				sound = SoundManager.currentGameSounds[k];
				channel = SoundManager.currentGameSoundChannels[k];
				if (channel != null) channel.stop();
				if (sound != null) sound.close();

				RES.destroyRes(SoundManager.currentGameSoundUrls[k]);
			}
			SoundManager.currentGameSounds = {};
			SoundManager.currentGameSoundChannels = {};
			SoundManager.currentGameSoundUrls = {};
		}

		/**
		 * 播放常用语
		 */
		public static playChangYongYu(name: string): void {
			if (SoundManager.changyongSounds == null) {
				SoundManager.changyongSounds = {};
				SoundManager.changyongSoundChannels = {};
			}
			var sound: egret.Sound = SoundManager.changyongSounds[name];
			var channel: egret.SoundChannel;
			if (sound != null) {
				channel = sound.play(0, 1);
				channel.volume = VoiceData.soundNum;
				SoundManager.changyongSoundChannels[name] = channel;
			} else {
				var loadUrl: string = AppConfig.res_url + "changyongSound/" + name + "?v=" + AppConfig.resVer;
				RES.getResByUrl(loadUrl, function (sound: egret.Sound): void {
					SoundManager.changyongSounds[name] = sound;
					channel = sound.play(0, 1);
					channel.volume = VoiceData.soundNum;
					SoundManager.changyongSoundChannels[name] = channel;
				}, SoundManager, RES.ResourceItem.TYPE_SOUND);
			}
		}



		private static _messageStete: boolean = false;  //false 是打开  true 是关闭
		public static setMessageState(bool: boolean): void {
			this._messageStete = bool;
		}

		public static playMessage(name: string, volume: number = 1, loops: boolean = false): void {
			if (this._isMute == true) {
				return;
			}

			if (RES.getRes(name)) {
				SoundManager.playMsgPreSound(name, volume, loops);
			} else {
				SoundManager.playMsNoPreSound(name, volume, loops);
			}


		}

		public static playMsgPreSound(name: string, volume: number, loops: boolean): void {
			let homeSound = RES.getRes(name);
			if (homeSound != null) {
				let homeSoundChannel = homeSound.play(0, loops);
				homeSoundChannel.volume = volume;
			}
		}


		public static playMsNoPreSound(name: string, volume: number, loops: boolean): void {
			RES.getResAsync(name, (e: any) => {


				let homeSound = e;
				if (homeSound != null) {
					let homeSoundChannel = homeSound.play(0, loops);
					homeSoundChannel.volume = volume;
				}

			}, this);
		}




	}
}