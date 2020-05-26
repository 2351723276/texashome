/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 大师分排行榜
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MasterRankView = (function (_super) {
            __extends(MasterRankView, _super);
            function MasterRankView() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            MasterRankView.prototype.createGameScene = function () {
                this.rankUI = new texas.MasterRankUI();
                this.addChild(this.rankUI);
                this.rankUI.x = 58;
                this.rankUI.y = 175;
                this.ruleUI = new texas.MasterRankRule();
                this.addChild(this.ruleUI);
                this.ruleUI.visible = false;
                this.ruleUI.x = 58;
                this.ruleUI.y = 175;
                this.on_backBtn(null);
                texas.MatchApi.getMasterPoints(this.getInfo.bind(this));
            };
            MasterRankView.prototype.getInfo = function (data) {
                this.infoarr = [];
                var selfData;
                if (data.myData) {
                    selfData = {
                        name: data.myData.name,
                        uid: data.myData.uid,
                        score: data.myData.val,
                        time: texas.DateUtils.timestampToTime(data.myData.time).slice(5),
                        rank: -1,
                    };
                    if (data.myData.time.time == false || data.myData.time.time == "false") {
                        selfData.time = "无";
                    }
                }
                if (data.masterPoints) {
                    for (var i = 0; i < data.masterPoints.length; i++) {
                        var min = {
                            name: data.masterPoints[i].name,
                            uid: data.masterPoints[i].uid,
                            score: data.masterPoints[i].val,
                            time: texas.DateUtils.timestampToTime(data.masterPoints[i].time).slice(5),
                            rank: i + 1,
                        };
                        if (data.masterPoints[i].time == false || data.masterPoints[i].time == "false") {
                            min.time = "无";
                        }
                        this.infoarr.push(min);
                        if (selfData) {
                            if (selfData.uid == min.uid) {
                                selfData.rank = min.rank;
                            }
                        }
                    }
                }
                this.rankUI.createUi(this.infoarr);
                if (selfData) {
                    this.rankUI.createSelfUI(selfData);
                }
                if (data.masterRule) {
                    var starttime = data.masterRule.start_date;
                    var endtime = data.masterRule.end_date;
                    starttime = starttime.replace("/", "-").replace("/", "-");
                    endtime = endtime.replace("/", "-").replace("/", "-");
                    this.timeTxt.text = "活动时间：" + starttime + "至" + endtime;
                }
                else {
                    this.timeTxt.text = "";
                }
            };
            MasterRankView.prototype.on_ruleBtn = function (e) {
                this.ruleBtn.visible = false;
                this.backBtn.visible = true;
                this.rankUI.visible = false;
                this.ruleUI.visible = true;
            };
            MasterRankView.prototype.on_backBtn = function (e) {
                this.ruleBtn.visible = true;
                this.backBtn.visible = false;
                this.rankUI.visible = true;
                this.ruleUI.visible = false;
            };
            MasterRankView.prototype.mainAssetName = function () {
                return "spr_master_rank_view_scene";
            };
            MasterRankView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return MasterRankView;
        }(texas.BasePanel));
        texas.MasterRankView = MasterRankView;
        __reflect(MasterRankView.prototype, "kelvin.texas.MasterRankView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
