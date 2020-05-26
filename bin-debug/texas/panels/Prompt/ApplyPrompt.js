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
 * 报名费不够提示
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
        var ApplyPrompt = (function (_super) {
            __extends(ApplyPrompt, _super);
            function ApplyPrompt(type) {
                var _this = _super.call(this) || this;
                _this.type = type;
                _this.createGameScene();
                return _this;
            }
            ApplyPrompt.prototype.createGameScene = function () {
                this.btnTxt = this.goBtn.skin.getChildByName("btntxt");
                if (this.type == 1) {
                    this.promptTxt.text = "金币不足，补充金币参与比赛";
                    this.btnTxt.text = "确定";
                }
                else if (this.type == 2) {
                    this.promptTxt.text = "参赛积分不足，请前往平台金标赛参与比赛获得积分";
                    this.btnTxt.text = "前往锦标赛";
                }
            };
            ApplyPrompt.prototype.on_goBtn = function (e) {
                if (texas.ExtGameHelper.extGamePanel) {
                    if (this.type == 2) {
                        texas.EventManager.dispatchCmd(texas.Events.goToJBSMatch, null);
                        texas.ExtGameHelper.exitExtGamePanel();
                    }
                    else if (this.type == 1) {
                        texas.EventManager.dispatchCmd(texas.Events.goToShop, null);
                        texas.PanelTween.popPanel();
                        texas.PanelTween.pushPanel(new texas.ShopView());
                        texas.ExtGameHelper.exitExtGamePanel();
                    }
                    else {
                    }
                }
                else {
                    if (this.type == 2) {
                        texas.EventManager.dispatchCmd(texas.Events.goToJBSMatch, null);
                        texas.PanelTween.popPanel();
                    }
                    else if (this.type == 1) {
                        texas.EventManager.dispatchCmd(texas.Events.goToShop, null);
                        texas.PanelTween.pushPanel(new texas.ShopView());
                    }
                    else {
                    }
                }
                this.dispose();
            };
            ApplyPrompt.prototype.mainAssetName = function () {
                return "spr_prompt_apply_ui";
            };
            ApplyPrompt.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return ApplyPrompt;
        }(texas.BasePanel));
        texas.ApplyPrompt = ApplyPrompt;
        __reflect(ApplyPrompt.prototype, "kelvin.texas.ApplyPrompt");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
