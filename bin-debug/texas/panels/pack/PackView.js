/**
 *
 *
 *
 *
 * 背包主界面
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PackView = (function (_super) {
            __extends(PackView, _super);
            function PackView(type) {
                var _this = _super.call(this, true) || this;
                _this.type = type;
                _this.createGameScene();
                return _this;
            }
            PackView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                if (this.type == 1) {
                    this.historyBtn.visible = true;
                    this.titleTxt.text = "背包";
                }
                else {
                    this.historyBtn.visible = false;
                    this.titleTxt.text = "背包记录";
                }
                this.scrollView.y = 100;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                // NoticeApi.getActivityNotices(this.getInfo.bind(this));
                this.getInfo(null);
            };
            PackView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ name: "门票1", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
                // { name: "门票2", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
                // { name: "门票3", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
                // { name: "门票4", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
                // { name: "门票5", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
                // { name: "门票6", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
                // { name: "门票7", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
                // { name: "门票8", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 2 },
                // { name: "门票9", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 3 },
                // { name: "门票10", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
                // { name: "门票11", startTime: "2020-2-20", endTime: "有效期2020-2-20", type: "线上门票", desc: "卫星赛", state: 1 },
                // ]
                var serverdata = texas.MatchData.getUserPropInfo();
                for (var j in serverdata.data) {
                    for (var i in serverdata.data[j]) {
                        var configs = void 0;
                        var libdata = serverdata.data[j][i];
                        for (var k in serverdata.configs) {
                            if (libdata.cfgId == serverdata.configs[k].cfgId) {
                                configs = serverdata.configs[k];
                                break;
                            }
                        }
                        if (!configs) {
                            continue;
                        }
                        var mindata = {
                            name: configs.name,
                            startTime: texas.DateUtils.formatDate(libdata.get_time * 1000),
                            endTime: texas.DateUtils.formatDate(libdata.get_time * 1000 + configs.expirationDate * 1000),
                            type: configs.describe1,
                            desc: configs.describe2,
                            state: -1,
                        };
                        if (libdata.type == 0) {
                            var nowtime = new Date().getTime();
                            if (nowtime <= libdata.get_time * 1000 + configs.expirationDate * 1000) {
                                mindata.state = 1;
                            }
                            else {
                                mindata.state = 3;
                            }
                        }
                        else if (libdata.type == 1) {
                            mindata.state = 2;
                        }
                        if (this.type == 1) {
                            if (mindata.state == 1) {
                                this.infoArr.push(mindata);
                            }
                        }
                        else if (this.type == 2) {
                            if (mindata.state == 2 || mindata.state == 3) {
                                this.infoArr.push(mindata);
                            }
                        }
                    }
                }
                this.createUI();
            };
            PackView.prototype.createUI = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var i, min;
                    return __generator(this, function (_a) {
                        this.uiArr = [];
                        for (i = 0; i < this.infoArr.length; i++) {
                            min = new texas.PackLineUI(this.infoArr[i]);
                            this.uiArr.push(min);
                            this.scrollView.container.addChild(min);
                            min.y = i * 240 + 20;
                        }
                        this.scrollView.setScrollSize(this.width, this.infoArr.length * 240 + 10);
                        return [2 /*return*/];
                    });
                });
            };
            PackView.prototype.on_historyBtn = function (e) {
                texas.PanelTween.pushPanel(new PackView(2));
            };
            PackView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            PackView.prototype.mainAssetName = function () {
                return "spr_pack_view";
            };
            PackView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return PackView;
        }(texas.BasePanel));
        texas.PackView = PackView;
        __reflect(PackView.prototype, "kelvin.texas.PackView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
