var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var openAdSdkEvents = {
            RewardVideoAd: "RewardVideoAd",
            SplashAd: "SplashAd",
            FullScreenVideoAd: "FullScreenVideoAd",
            BannerExpressAd: "BannerExpressAd",
            InteractionAd: "InteractionAd",
        };
        var OpenAdSdk = (function () {
            function OpenAdSdk() {
            }
            /**
             * 展示激励广告
             */
            OpenAdSdk.showSplashAd = function () {
                OpenAdSdk.SplashAd(function () { }, OpenAdSdk, "");
            };
            /**
             * 展示激励广告
             */
            OpenAdSdk.showRewardVideoAd = function (uid, suc, error, callBackObj) {
                if (!texas.App.isWeiDuan()) {
                    texas.Log.log("showRewardVideoAd on H5");
                    suc.apply(callBackObj, []);
                    return;
                }
                var data = {
                    is_horizontal: false,
                    userID: uid + "",
                    rewardAmount: 1,
                    rewardName: "金币"
                };
                OpenAdSdk.RewardVideoAd(function (json) {
                    texas.Log.log("激励广告事件:" + json);
                    var jsonData = JSON.parse(json);
                    var isVerify = false;
                    if (jsonData.event === "onRewardVerify") {
                        if (jsonData.verify) {
                            isVerify = true;
                            // RoleApi.useAdCount();
                            suc.apply(callBackObj, []);
                        }
                    }
                    else if (jsonData.event === "onAdShow") {
                        texas.Log.log("广告显示");
                    }
                    else if (jsonData.event === "onAdVideoBarClick") {
                        texas.Log.log("点击banner");
                    }
                    else if (jsonData.event === "onAdClose") {
                        texas.Log.log("关闭广告");
                        if (!isVerify) {
                            error.apply(callBackObj, []);
                        }
                    }
                    else if (jsonData.event === "onVideoComplete") {
                        texas.Log.log("视频播放完毕");
                    }
                    else if (jsonData.event === "onVideoError") {
                        texas.Log.log("视频播放错误");
                        error.apply(callBackObj, []);
                    }
                    else if (jsonData.event === "onSkippedVideo") {
                        texas.Log.log("跳过");
                        error.apply(callBackObj, []);
                    }
                }, OpenAdSdk, JSON.stringify(data));
            };
            /**
             * 激励广告
             */
            OpenAdSdk.RewardVideoAd = function (callBack, callObj, json) {
                OpenAdSdk.addCallBack(openAdSdkEvents.RewardVideoAd, callBack, callObj, json);
            };
            /**
             * 开屏广告
             */
            OpenAdSdk.SplashAd = function (callBack, callObj, json) {
                OpenAdSdk.addCallBack(openAdSdkEvents.SplashAd, callBack, callObj, json);
            };
            /**
             * 全屏广告
             */
            OpenAdSdk.FullScreenVideoAd = function (callBack, callObj, json) {
                OpenAdSdk.addCallBack(openAdSdkEvents.FullScreenVideoAd, callBack, callObj, json);
            };
            /**
             * banner广告
             */
            OpenAdSdk.BannerExpressAd = function (callBack, callObj, json) {
                OpenAdSdk.addCallBack(openAdSdkEvents.BannerExpressAd, callBack, callObj, json);
            };
            /**
             * 插图广告
             */
            OpenAdSdk.InteractionAd = function (callBack, callObj, json) {
                OpenAdSdk.addCallBack(openAdSdkEvents.InteractionAd, callBack, callObj, json);
            };
            OpenAdSdk.addCallBack = function (type, callBack, callObj, json) {
                egret.ExternalInterface.addCallback("TT" + type + "-js", function (message) {
                    if (callBack && callObj) {
                        callBack.apply(callObj, [message]);
                    }
                });
                egret.ExternalInterface.call("TT" + type, json);
            };
            return OpenAdSdk;
        }());
        texas.OpenAdSdk = OpenAdSdk;
        __reflect(OpenAdSdk.prototype, "kelvin.texas.OpenAdSdk");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
