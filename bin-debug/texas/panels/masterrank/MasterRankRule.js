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
 * 大师分排行榜UI
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
        var MasterRankRule = (function (_super) {
            __extends(MasterRankRule, _super);
            function MasterRankRule() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            MasterRankRule.prototype.createGameScene = function () {
                this.ruleImg = texas.Tool.createBitmapByName("img_dzpyq_dsphb_zi_png");
                this.addChild(this.ruleImg);
                this.ruleImg.x = 27.5;
                this.ruleImg.y = 63.5;
            };
            MasterRankRule.prototype.mainAssetName = function () {
                return "spr_master_rank_rule";
            };
            MasterRankRule.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return MasterRankRule;
        }(texas.BasePanel));
        texas.MasterRankRule = MasterRankRule;
        __reflect(MasterRankRule.prototype, "kelvin.texas.MasterRankRule");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
