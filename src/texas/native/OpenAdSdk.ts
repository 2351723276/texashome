
module kelvin.texas {
    const openAdSdkEvents = {
        RewardVideoAd: "RewardVideoAd",
        SplashAd: "SplashAd",
        FullScreenVideoAd: "FullScreenVideoAd",
        BannerExpressAd: "BannerExpressAd",
        InteractionAd: "InteractionAd",
    }
    export class OpenAdSdk {

        /**
         * 展示激励广告
         */
        public static showSplashAd():void{
            OpenAdSdk.SplashAd(function():void{},OpenAdSdk,"");
        }

        /**
         * 展示激励广告
         */
        public static showRewardVideoAd(uid:string,suc:Function,error:Function,callBackObj:any):void{
            if(!App.isWeiDuan()){
                Log.log("showRewardVideoAd on H5");
                suc.apply(callBackObj,[]);
                return;
            }

            let data = {
                is_horizontal: false,
                userID: uid + "",
                rewardAmount: 1,
                rewardName: "金币"
            };

            OpenAdSdk.RewardVideoAd(function(json:string):void{
                Log.log("激励广告事件:" + json);
                const jsonData = JSON.parse(json);
                let isVerify = false;
                if(jsonData.event === "onRewardVerify"){
                    if(jsonData.verify){//是否有效
                        isVerify = true;
                        // RoleApi.useAdCount();
                        suc.apply(callBackObj,[]);
                    }
                }else if(jsonData.event === "onAdShow"){
                    Log.log("广告显示");
                }else if(jsonData.event === "onAdVideoBarClick"){
                    Log.log("点击banner");
                }else if(jsonData.event === "onAdClose"){
                    Log.log("关闭广告");
                    if(!isVerify){
                        error.apply(callBackObj,[]);
                    }
                }else if(jsonData.event === "onVideoComplete"){
                    Log.log("视频播放完毕");
                }else if(jsonData.event === "onVideoError"){
                    Log.log("视频播放错误");
                    error.apply(callBackObj,[]);
                }else if(jsonData.event === "onSkippedVideo"){
                    Log.log("跳过");
                    error.apply(callBackObj,[]);
                }
            },OpenAdSdk,JSON.stringify(data));
        }
        
        /**
         * 激励广告
         */
        private static RewardVideoAd(callBack: Function, callObj: any, json: string) {
            OpenAdSdk.addCallBack(openAdSdkEvents.RewardVideoAd, callBack, callObj, json);
        }
        /**
         * 开屏广告
         */
        private static SplashAd(callBack: Function, callObj: any, json: string) {
            OpenAdSdk.addCallBack(openAdSdkEvents.SplashAd, callBack, callObj, json);
        }
        /**
         * 全屏广告
         */
        private static FullScreenVideoAd(callBack: Function, callObj: any, json: string) {
            OpenAdSdk.addCallBack(openAdSdkEvents.FullScreenVideoAd, callBack, callObj, json);
        }
        /**
         * banner广告
         */
        private static BannerExpressAd(callBack: Function, callObj: any, json: string) {
            OpenAdSdk.addCallBack(openAdSdkEvents.BannerExpressAd, callBack, callObj, json);
        }
        /**
         * 插图广告
         */
        private static InteractionAd(callBack: Function, callObj: any, json: string) {
            OpenAdSdk.addCallBack(openAdSdkEvents.InteractionAd, callBack, callObj, json);
        }

        private static addCallBack(type: string, callBack: Function, callObj: any, json: string) {
            egret.ExternalInterface.addCallback("TT" + type + "-js", function (message: string) {
                if (callBack && callObj) {
                    callBack.apply(callObj, [message]);
                }
            });
            egret.ExternalInterface.call("TT" + type, json);
        }
    }
}
