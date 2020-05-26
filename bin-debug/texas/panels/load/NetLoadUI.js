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
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 网络load
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NetLoadUI = (function (_super) {
            __extends(NetLoadUI, _super);
            function NetLoadUI() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            NetLoadUI.prototype.createGameScene = function () {
                this.anchorOffsetX = this.width / 2;
                this.anchorOffsetY = this.height / 2;
                texas.Tool.center(this.loadimg);
            };
            NetLoadUI.prototype.show = function () {
                this.x = texas.App.stageWidth / 2;
                this.y = texas.App.stageHeight / 2;
                texas.Starup.stageSp.addChild(this);
                egret.Tween.removeTweens(this.loadimg);
                egret.Tween.get(this.loadimg, { loop: true }).to({ rotation: 360 }, 1000);
            };
            NetLoadUI.prototype.hide = function () {
                texas.Tool.removeFromParent(this);
                egret.Tween.removeTweens(this.loadimg);
            };
            NetLoadUI.prototype.mainAssetName = function () {
                return "spr_net_load";
            };
            NetLoadUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NetLoadUI;
        }(texas.BasePanel));
        texas.NetLoadUI = NetLoadUI;
        __reflect(NetLoadUI.prototype, "kelvin.texas.NetLoadUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
