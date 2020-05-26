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
 * 游戏load
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoadGameUI = (function (_super) {
            __extends(LoadGameUI, _super);
            function LoadGameUI() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            LoadGameUI.prototype.createGameScene = function () {
                this.anchorOffsetX = this.width / 2;
                this.anchorOffsetY = this.height / 2;
                this.imgArr = [this.img1, this.img2, this.img3, this.img4];
            };
            LoadGameUI.prototype.show = function (num) {
                if (num === void 0) { num = 0; }
                this.x = texas.App.stageWidth / 2;
                this.y = texas.App.stageHeight / 2;
                texas.Starup.stageSp.addChild(this);
                this.txt.text = "" + num + "%...";
                egret.clearInterval(this.timeid1);
                this.index = 0;
                for (var i = 0; i < this.imgArr.length; i++) {
                    this.imgArr[i].visible = false;
                }
                this.timeid1 = egret.setInterval(this.runAnima, this, 500);
            };
            LoadGameUI.prototype.runAnima = function () {
                for (var i = 0; i < this.imgArr.length; i++) {
                    if (i < this.index) {
                        this.imgArr[i].visible = true;
                    }
                    else {
                        this.imgArr[i].visible = false;
                    }
                }
                this.index++;
                if (this.index > 4) {
                    this.index = 0;
                }
            };
            LoadGameUI.prototype.setProgress = function (num) {
                this.txt.text = "" + num + "%...";
            };
            LoadGameUI.prototype.hide = function () {
                egret.clearInterval(this.timeid1);
                texas.Tool.removeFromParent(this);
            };
            LoadGameUI.prototype.mainAssetName = function () {
                return "spr_load_game_ui";
            };
            LoadGameUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return LoadGameUI;
        }(texas.BasePanel));
        texas.LoadGameUI = LoadGameUI;
        __reflect(LoadGameUI.prototype, "kelvin.texas.LoadGameUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
