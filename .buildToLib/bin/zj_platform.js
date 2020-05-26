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
var lzm;
(function (lzm) {
    var BasePanel = (function (_super) {
        __extends(BasePanel, _super);
        function BasePanel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
            return _this;
        }
        BasePanel.prototype.addToStage = function (e) {
        };
        BasePanel.prototype.removeFromStage = function (e) {
        };
        BasePanel.prototype.gotoPanel = function (panel) {
            this.parent.addChildAt(panel, 0);
            this.dispose();
        };
        BasePanel.prototype.dispose = function () {
            if (this.parent != null) {
                this.parent.removeChild(this);
            }
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
        };
        return BasePanel;
    }(egret.DisplayObjectContainer));
    lzm.BasePanel = BasePanel;
    __reflect(BasePanel.prototype, "lzm.BasePanel");
})(lzm || (lzm = {}));
var lzm;
(function (lzm) {
    var Gestures = (function () {
        function Gestures(target, callBack) {
            if (callBack === void 0) { callBack = null; }
            this._enabled = true;
            this._target = target;
            this._callBack = callBack;
            this._target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            this._target.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
            this._target.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouch, this);
            this._target.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
            this._target.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouch, this);
            this._target.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        }
        Gestures.prototype.onTouch = function (e) {
            var touch = new lzm.Touch();
            touch.type = e.type;
            touch.localPoint = new egret.Point(e.localX, e.localY);
            touch.stagePoint = new egret.Point(e.stageX, e.stageY);
            this.checkGestures(touch);
        };
        /**
         * 检测手势
         * */
        Gestures.prototype.checkGestures = function (touch) {
        };
        Object.defineProperty(Gestures.prototype, "target", {
            get: function () {
                return this._target;
            },
            enumerable: true,
            configurable: true
        });
        Gestures.prototype.setEnabled = function (value) {
            this._enabled = value;
            if (this._enabled)
                this._target.touchEnabled = true;
            else
                this._target.touchEnabled = false;
        };
        Gestures.prototype.getenabled = function () {
            return this._enabled;
        };
        Gestures.prototype.dispose = function () {
            this._target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            this._target.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
            this._target.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouch, this);
            this._target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
            this._target.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouch, this);
            this._target.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this._target = null;
            this._callBack = null;
        };
        return Gestures;
    }());
    lzm.Gestures = Gestures;
    __reflect(Gestures.prototype, "lzm.Gestures");
})(lzm || (lzm = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**Sprite*/
    var SwfSprite = (function (_super) {
        __extends(SwfSprite, _super);
        function SwfSprite() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SwfSprite.prototype.getTextField = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getMovie = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getSprite = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getImage = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getButton = function (name) {
            return this.getChildByName(name);
        };
        return SwfSprite;
    }(egret.DisplayObjectContainer));
    starlingswf.SwfSprite = SwfSprite;
    __reflect(SwfSprite.prototype, "starlingswf.SwfSprite");
})(starlingswf || (starlingswf = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BaseApi = (function () {
            function BaseApi() {
            }
            /**
             * 初始化baseapi
             */
            BaseApi.init = function (host, port) {
                BaseApi._host = host;
                BaseApi._port = port;
                BaseApi._socketClient = new lzm.JSONWebSocketClient(host, port);
                BaseApi._sendQueue = [];
                BaseApi._sendTimerQueue = [];
                BaseApi._callBackQueue = [];
                BaseApi._currentSendObject = null;
                BaseApi._socketClient.onConnectCallBack = BaseApi.onConnect;
                BaseApi._socketClient.onCloseCallBack = BaseApi.onConnectClose;
                BaseApi._socketClient.onIOErrorCallBack = BaseApi.onIOError;
                BaseApi._socketClient.onDataCallBack = BaseApi.onData;
                BaseApi._cmdDataQueue = [];
                BaseApi.clearCmd();
                texas.BaseApiCmdInit.initCmds();
                if (BaseApi.msDelayTimer != -1) {
                    clearInterval(BaseApi.msDelayTimer);
                    setInterval(BaseApi.msDelayRefresh, 1000);
                }
            };
            BaseApi.onConnect = function () {
                texas.Log.log("connect");
                BaseApi._isError = false;
                if (BaseApi._currentSendObject == null && BaseApi._sendQueue.length > 0) {
                    BaseApi._currentSendObject = BaseApi._sendQueue.shift();
                }
                if (texas.AccountData.getSessionToken() != null) {
                    texas.UserApi.resetfd();
                }
                if (BaseApi._currentSendObject != null) {
                    BaseApi.sendObject(BaseApi._currentSendObject);
                }
            };
            BaseApi.onConnectClose = function () {
                texas.Log.log("connectClose");
                texas.NetWorkError.show();
                BaseApi._isError = true;
            };
            BaseApi.onIOError = function () {
                texas.Log.log("onIOError");
                texas.NetWorkError.show();
                BaseApi._isError = true;
            };
            BaseApi.onData = function (data) {
                if (data.cmd && BaseApi._currentSendObject == null) {
                    texas.Log.log("reponseData:" + JSON.stringify(data));
                    BaseApi.dispatchCmd(data.cmd, data);
                }
                else if (data.cmd) {
                    BaseApi._cmdDataQueue.push(data);
                }
                else if (BaseApi._callBackQueue.length > 0) {
                    texas.Log.log("reponseData:" + JSON.stringify(data));
                    BaseApi.msEnd();
                    texas.Log.log("ms:" + BaseApi.ms);
                    if (data.finishOnClient == null)
                        texas.NetworkLoading.hide();
                    if (BaseApi._sendQueue.length == 0) {
                        BaseApi._currentSendObject = null;
                    }
                    //停止对应的计时器
                    var timer = BaseApi._sendTimerQueue.shift();
                    egret.clearTimeout(timer);
                    var callBack = BaseApi._callBackQueue.shift();
                    callBack(data);
                    var cmdLen = BaseApi._cmdDataQueue.length;
                    if (cmdLen > 0) {
                        for (var i = 0; i < cmdLen; i++) {
                            texas.Log.log("reponseData:" + JSON.stringify(BaseApi._cmdDataQueue[i]));
                            BaseApi.dispatchCmd(BaseApi._cmdDataQueue[i].cmd, BaseApi._cmdDataQueue[i]);
                        }
                        BaseApi._cmdDataQueue = [];
                    }
                    if (BaseApi._sendQueue.length > 0) {
                        BaseApi._currentSendObject = BaseApi._sendQueue.shift();
                        BaseApi.sendObject(BaseApi._currentSendObject);
                    }
                }
            };
            BaseApi.requestUser = function (pars, callBack, errorCallBack) {
                BaseApi.request("login", pars, callBack, errorCallBack);
            };
            BaseApi.requestLogic = function (pars, callBack, errorCallBack, finishOnClient) {
                if (finishOnClient === void 0) { finishOnClient = false; }
                pars['sessionToken'] = texas.AccountData.getSessionToken();
                BaseApi.request("logic", pars, callBack, errorCallBack, finishOnClient);
            };
            BaseApi.request = function (path, pars, callBack, errorCallBack, finishOnClient) {
                if (finishOnClient === void 0) { finishOnClient = false; }
                if (BaseApi._isError)
                    return;
                BaseApi._callBackQueue.push(function (data) {
                    if (data.state != 0) {
                        if (errorCallBack != null) {
                            errorCallBack(data);
                        }
                        else {
                            if (data.state == -5) {
                                texas.NetWorkError.show();
                            }
                            else {
                                texas.ApiState.show(data.state);
                            }
                        }
                    }
                    else {
                        if (callBack != null)
                            callBack(data);
                    }
                });
                if (finishOnClient) {
                    pars["__"] = 1;
                }
                var dataObject = { "path": path, "pars": pars };
                if (BaseApi._currentSendObject == null) {
                    BaseApi._currentSendObject = dataObject;
                    BaseApi.sendObject(BaseApi._currentSendObject);
                }
                else {
                    BaseApi._sendQueue.push(dataObject);
                }
            };
            /**
             * 发送数据
             */
            BaseApi.sendObject = function (obj) {
                if (!BaseApi._socketClient.isConnect) {
                    BaseApi._socketClient.connect();
                    return;
                }
                texas.Log.log("req path:" + obj.path);
                texas.Log.log("req data:" + JSON.stringify(obj.pars));
                BaseApi.msStart();
                var sendObj = { "path": obj.path, "reqData": obj.pars };
                BaseApi._socketClient.sendData(sendObj);
                if (obj.pars["__"] == 1) {
                    BaseApi.onData({ "state": 0, "finishOnClient": 1 });
                }
                else {
                    var timer = texas.NetworkLoading.show();
                    BaseApi._sendTimerQueue.push(timer);
                }
            };
            /***
             * 清除所有命令
             */
            BaseApi.clearCmd = function () {
                BaseApi._commands = {};
                BaseApi._commandsThisObjects = {};
            };
            /**
             * 注册命令
             */
            BaseApi.registerCmd = function (cmd, callBack, thisObj, isHead) {
                if (isHead === void 0) { isHead = false; }
                var cmds = BaseApi._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                if (isHead) {
                    cmds.unshift([callBack, thisObj]);
                }
                else {
                    cmds.push([callBack, thisObj]);
                }
                BaseApi._commands[cmd] = cmds;
            };
            /**
             * 移除命令
             */
            BaseApi.removeCmd = function (cmd, callBack, thisObj) {
                var cmds = BaseApi._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var index = -1;
                var len = cmds.length;
                for (var i = 0; i < len; i++) {
                    if (cmds[i][0] == callBack && cmds[i][1] == thisObj)
                        index = i;
                }
                if (index != -1) {
                    cmds.splice(index, 1);
                }
                BaseApi._commands[cmd] = cmds;
            };
            /**
             * 派发命令消息
             */
            BaseApi.dispatchCmd = function (cmd, data) {
                var cmds = BaseApi._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var thisObj;
                var fun;
                for (var i = 0; i < cmds.length; i++) {
                    thisObj = cmds[i][1];
                    fun = cmds[i][0];
                    fun.apply(thisObj, [data]);
                }
            };
            BaseApi.msStart = function () {
                BaseApi.msStartTime = new Date().getTime();
                BaseApi.msDelay = 0;
                BaseApi.msRequestCount++;
            };
            BaseApi.msEnd = function () {
                BaseApi.msTotal += new Date().getTime() - BaseApi.msStartTime;
                BaseApi.ms = Math.ceil(BaseApi.msTotal / BaseApi.msRequestCount);
                BaseApi.msStartTime = -1;
            };
            BaseApi.msDelayRefresh = function () {
                if (BaseApi.msStartTime != -1) {
                    BaseApi.ms = Math.ceil((BaseApi.msTotal + BaseApi.msDelay) / BaseApi.msRequestCount);
                }
            };
            BaseApi._isError = false;
            BaseApi.ms = 0;
            BaseApi.msTotal = 0;
            BaseApi.msDelay = 0;
            BaseApi.msDelayTimer = -1;
            BaseApi.msRequestCount = 0;
            return BaseApi;
        }());
        texas.BaseApi = BaseApi;
        __reflect(BaseApi.prototype, "kelvin.texas.BaseApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NativeBase = (function () {
            function NativeBase() {
            }
            /**
             * 注册命令
             */
            NativeBase.registerCmd = function (cmd, callBack, thisObj, isHead) {
                if (isHead === void 0) { isHead = false; }
                var cmds = NativeBase.wxRespCallBacks[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                if (isHead) {
                    cmds.unshift([callBack, thisObj]);
                }
                else {
                    cmds.push([callBack, thisObj]);
                }
                NativeBase.wxRespCallBacks[cmd] = cmds;
            };
            /**
             * 移除命令
             */
            NativeBase.removeCmd = function (cmd, callBack, thisObj) {
                var cmds = NativeBase.wxRespCallBacks[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var index = -1;
                var len = cmds.length;
                for (var i = 0; i < len; i++) {
                    if (cmds[i][0] == callBack && cmds[i][1] == thisObj)
                        index = i;
                }
                if (index != -1) {
                    cmds.splice(index, 1);
                }
                NativeBase.wxRespCallBacks[cmd] = cmds;
            };
            /**
             * 派发命令消息
             */
            NativeBase.dispatchCmd = function (cmd, data) {
                var cmds = NativeBase.wxRespCallBacks[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var thisObj;
                var fun;
                for (var i = 0; i < cmds.length; i++) {
                    thisObj = cmds[i][1];
                    fun = cmds[i][0];
                    fun.apply(thisObj, [data]);
                }
            };
            NativeBase.wxRespCallBacks = {};
            return NativeBase;
        }());
        texas.NativeBase = NativeBase;
        __reflect(NativeBase.prototype, "kelvin.texas.NativeBase");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BasePanel = (function (_super) {
            __extends(BasePanel, _super);
            function BasePanel(needScrollView, recursiveBind, createLater) {
                if (needScrollView === void 0) { needScrollView = false; }
                if (recursiveBind === void 0) { recursiveBind = true; }
                if (createLater === void 0) { createLater = false; }
                var _this = _super.call(this) || this;
                _this.refreshData = false;
                /**
                 * 初始化下拉刷新  true是下拉刷新 false 是上拉刷新
                 */
                _this.refreshType = true;
                if (needScrollView) {
                    _this.scrollView = new texas.ScrollView();
                    _this.scrollView.scrollPolicyV = "on";
                    _this.scrollView.scrollPolicyH = "off";
                    _this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight);
                    _this.scrollView.setScrollSize(texas.App.stageWidth, texas.App.stageHeight);
                    _this.addChild(_this.scrollView);
                }
                _this.recursiveBind = recursiveBind;
                if (!createLater)
                    _this.createLater();
                return _this;
            }
            BasePanel.prototype.createLater = function () {
                if (this.mainAssetName() != null && this.assetSwf() != null) {
                    this.mainAsset = this.assetSwf().createSprite(this.mainAssetName());
                    this.addChild(this.mainAsset);
                    texas.InterfaceVariablesUtil.initVariables(this, this.mainAsset, this.recursiveBind);
                }
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this._addToStage_, this);
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this._removeFromStage_, this);
                this.init();
            };
            BasePanel.prototype._addToStage_ = function (e) {
                this.layout();
                this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
                this.addToStage(e);
            };
            BasePanel.prototype._removeFromStage_ = function (e) {
                this.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            };
            BasePanel.prototype.onResize = function (e) {
                this.layout();
            };
            BasePanel.prototype.addToStage = function (e) {
            };
            BasePanel.prototype.initDownRefresh = function (type) {
                if (type === void 0) { type = true; }
                if (this.scrollView != null) {
                    this.refreshType = type;
                    this.addEventListener(egret.TouchEvent.TOUCH_END, this.scrollViewEndMoveHandler, this);
                    this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.scrollViewEndMoveHandler, this);
                    this.scrollView.addEventListener(eui.UIEvent.CHANGE, this.scrollViewMoveHandler, this);
                }
            };
            BasePanel.prototype.setDownRefresh = function (callback) {
                this.callBank = callback;
            };
            /**
             * 刷新回掉
             */
            BasePanel.prototype.onDownRefresh = function () {
                if (this.callBank) {
                    this.callBank();
                }
            };
            /**
             * 下拉刷新完成
             */
            BasePanel.prototype.downRefreshOver = function () {
                this.refreshData = false;
                this.scrollView.reStartAnimation();
                texas.RefreshUI.ins.hide();
            };
            /**
             * 移除下拉刷新
             */
            BasePanel.prototype.disposeDownRefresh = function () {
                if (this.scrollView != null) {
                    this.removeEventListener(egret.TouchEvent.TOUCH_END, this.scrollViewEndMoveHandler, this);
                    this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.scrollViewEndMoveHandler, this);
                    this.scrollView.removeEventListener(eui.UIEvent.CHANGE, this.scrollViewMoveHandler, this);
                }
            };
            BasePanel.prototype.scrollViewMoveHandler = function (evt) {
                if (this.refreshType == true) {
                    if (this.refreshData && this.scrollView.viewport.scrollV > -120) {
                        this.scrollView.viewport.scrollV = -120;
                        this.scrollView.stopAnimation();
                    }
                }
                else {
                    if (this.refreshData && this.scrollView.viewport.scrollV < this.scrollView.viewport.contentHeight - this.scrollView.height + 120) {
                        this.scrollView.viewport.scrollV = this.scrollView.viewport.contentHeight - this.scrollView.height + 120;
                        this.scrollView.stopAnimation();
                    }
                }
            };
            BasePanel.prototype.scrollViewEndMoveHandler = function (evt) {
                if (this.refreshType == true) {
                    if (!this.refreshData && this.scrollView.viewport.scrollV < -120) {
                        this.refreshData = true;
                        this.onDownRefresh();
                    }
                }
                else {
                    if (!this.refreshData && this.scrollView.viewport.scrollV > this.scrollView.viewport.contentHeight - this.scrollView.height + 120) {
                        this.refreshData = true;
                        this.onDownRefresh();
                    }
                }
            };
            BasePanel.prototype.init = function () { };
            BasePanel.prototype.layout = function () { };
            BasePanel.prototype.on_closeBtn = function (e) {
                this.dispose();
            };
            BasePanel.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._addToStage_, this);
                this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._removeFromStage_, this);
                this.disposeDownRefresh();
                texas.InterfaceVariablesUtil.disposeVariables(this);
                if (texas.ExtGameHelper.popupPanelArr) {
                    var index = texas.ExtGameHelper.popupPanelArr.indexOf(this);
                    if (index != -1) {
                        texas.ExtGameHelper.popupPanelArr.splice(index, 1);
                    }
                }
            };
            BasePanel.prototype.mainAssetName = function () {
                return null;
            };
            BasePanel.prototype.assetSwf = function () {
                return texas.AssetManager.mainSwf;
            };
            return BasePanel;
        }(lzm.BasePanel));
        texas.BasePanel = BasePanel;
        __reflect(BasePanel.prototype, "kelvin.texas.BasePanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 战绩的主面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameRankView = (function (_super) {
            __extends(GameRankView, _super);
            function GameRankView(matchid, roomid, cardData, watchPeople) {
                var _this = _super.call(this) || this;
                _this.roomid = roomid;
                _this.watchPeople = watchPeople;
                _this.cardData = cardData;
                _this.matchid = matchid;
                _this.createGameScene();
                return _this;
            }
            GameRankView.prototype.createGameScene = function () {
                this.view = this.$children[0];
                this.visible = false;
                this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                this.addChildAt(this.bgSp, 0);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.bg.touchEnabled = true;
                this.chooseRankBtn.visible = false;
                this.unchooseCard.visible = false;
                this.rankUI = new texas.GameRankUI(this.matchid, this.roomid, this.watchPeople);
                this.view.addChild(this.rankUI);
                this.rankUI.x = 40;
                this.rankUI.y = 80;
                this.cardUI = new texas.GameCardUI(this.cardData);
                this.view.addChild(this.cardUI);
                this.cardUI.x = 40;
                this.cardUI.y = 80;
                this.cardUI.visible = false;
            };
            GameRankView.prototype.on_chooseRankBtn = function (e) {
                this.chooseRankBtn.visible = false;
                this.chooseCardBtn.visible = true;
                this.unchooseRank.visible = true;
                this.unchooseCard.visible = false;
                this.cardUI.visible = false;
                this.rankUI.visible = true;
            };
            GameRankView.prototype.on_chooseCardBtn = function (e) {
                this.chooseRankBtn.visible = true;
                this.chooseCardBtn.visible = false;
                this.unchooseRank.visible = false;
                this.unchooseCard.visible = true;
                this.cardUI.visible = true;
                this.rankUI.visible = false;
            };
            GameRankView.prototype.show = function () {
                this.view.anchorOffsetX = this.view.width;
                this.view.anchorOffsetY = this.view.height;
                this.view.y = texas.App.stageHeight;
                this.view.x = texas.App.stageWidth + this.view.width;
                this.visible = true;
                this.view.scaleX = this.view.scaleY = texas.ExtGameHelper.getGameScalex();
                egret.Tween.get(this.view).to({ x: texas.App.stageWidth }, 250, egret.Ease.quartOut).call(function () {
                });
            };
            GameRankView.prototype.hide = function () {
                var _this = this;
                egret.Tween.get(this.view).to({ x: texas.App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(function () {
                    _this.dispose();
                });
            };
            GameRankView.prototype.mainAssetName = function () {
                return "spr_game_rank_view";
            };
            GameRankView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            };
            return GameRankView;
        }(texas.BasePanel));
        texas.GameRankView = GameRankView;
        __reflect(GameRankView.prototype, "kelvin.texas.GameRankView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**
     * Swf文档类
     * */
    var Swf = (function () {
        function Swf(swfData, fps) {
            if (fps === void 0) { fps = 24; }
            this._swfData = swfData;
            this._createDisplayFuns = new Object();
            this._createDisplayFuns[Swf.dataKey_Sprite] = this.createSprite;
            this._createDisplayFuns[Swf.dataKey_MovieClip] = this.createMovie;
            this._createDisplayFuns[Swf.dataKey_Button] = this.createButton;
            this._createDisplayFuns[Swf.dataKey_Image] = this.createImage;
            this._createDisplayFuns[Swf.dataKey_Scale9] = this.createS9Image;
            this._createDisplayFuns[Swf.dataKey_ShapeImg] = this.createShapeImage;
            this._createDisplayFuns[Swf.dataKey_TextField] = this.createTextField;
            this.swfUpdateManager = starlingswf.SwfUpdateManager.createSwfUpdateManager(fps);
        }
        Swf.prototype.createSprite = function (name, data, sprData) {
            if (data === void 0) { data = null; }
            if (sprData === void 0) { sprData = null; }
            if (sprData == null) {
                sprData = this._swfData[Swf.dataKey_Sprite][name];
            }
            var sprite = new starlingswf.SwfSprite();
            var length = sprData.length;
            var objData;
            var display;
            var fun;
            var swf;
            for (var i = 0; i < length; i++) {
                objData = sprData[i];
                fun = this._createDisplayFuns[objData[1]];
                if (fun == null)
                    continue;
                display = fun.apply(this, [objData[0], objData]);
                display.name = objData[9];
                display.x = objData[2];
                display.y = objData[3];
                if (objData[1] == Swf.dataKey_TextField) {
                    display.y += 6;
                }
                if (objData[1] != Swf.dataKey_Scale9 && objData[1] != Swf.dataKey_ShapeImg) {
                    display.scaleX = objData[4];
                    display.scaleY = objData[5];
                }
                display.skewX = objData[6];
                display.skewY = objData[7];
                display.alpha = objData[8];
                sprite.addChild(display);
            }
            if (data != null) {
                starlingswf.SwfBlendMode.setBlendMode(sprite, data[11]);
            }
            return sprite;
        };
        Swf.prototype.createMovie = function (name, data) {
            if (data === void 0) { data = null; }
            var movieClipData = this._swfData[Swf.dataKey_MovieClip][name];
            var objectCountData = movieClipData["objCount"];
            var displayObjects = {};
            var displayObjectArray;
            var type;
            var count;
            var fun;
            var objName;
            for (objName in objectCountData) {
                type = objectCountData[objName][0];
                count = objectCountData[objName][1];
                displayObjectArray = displayObjects[objName] == null ? [] : displayObjects[objName];
                for (var i = 0; i < count; i++) {
                    fun = this._createDisplayFuns[type];
                    if (fun == null)
                        continue;
                    displayObjectArray.push(fun.apply(this, [objName, null]));
                }
                displayObjects[objName] = displayObjectArray;
            }
            var mc = new starlingswf.SwfMovieClip(movieClipData["frames"], movieClipData["labels"], displayObjects, this, movieClipData["frameEvents"]);
            mc.loop = movieClipData["loop"];
            if (data != null) {
                starlingswf.SwfBlendMode.setBlendMode(mc, data[11]);
            }
            return mc;
        };
        /**
         * 创建按钮
         * */
        Swf.prototype.createButton = function (name, data) {
            if (data === void 0) { data = null; }
            var sprData = this._swfData[Swf.dataKey_Button][name];
            var skin = this.createSprite(null, null, sprData);
            var button = new starlingswf.SwfButton(skin);
            return button;
        };
        Swf.prototype.createImage = function (name, data) {
            if (data === void 0) { data = null; }
            var imageData = this._swfData[Swf.dataKey_Image][name];
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(name);
            bitmap.anchorOffsetX = imageData[0];
            bitmap.anchorOffsetY = imageData[1];
            if (data != null) {
                starlingswf.SwfBlendMode.setBlendMode(bitmap, data[11]);
            }
            return bitmap;
        };
        Swf.prototype.createS9Image = function (name, data) {
            if (data === void 0) { data = null; }
            var scale9Data = this._swfData[Swf.dataKey_Scale9][name];
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(name);
            bitmap.scale9Grid = new egret.Rectangle(scale9Data[0], scale9Data[1], scale9Data[2], scale9Data[3]);
            if (data != null) {
                bitmap.width = data[10];
                bitmap.height = data[11];
                starlingswf.SwfBlendMode.setBlendMode(bitmap, data[13]);
            }
            return bitmap;
        };
        Swf.prototype.createShapeImage = function (name, data) {
            if (data === void 0) { data = null; }
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(name);
            bitmap.fillMode = egret.BitmapFillMode.REPEAT;
            if (data != null) {
                bitmap.width = data[10];
                bitmap.height = data[11];
                starlingswf.SwfBlendMode.setBlendMode(bitmap, data[13]);
            }
            return bitmap;
        };
        Swf.prototype.createTextField = function (name, data) {
            if (data === void 0) { data = null; }
            var textfield = new egret.TextField();
            if (data != null) {
                textfield.width = data[10];
                textfield.height = data[11];
                textfield.fontFamily = data[12];
                textfield.textColor = data[13];
                textfield.size = data[14];
                textfield.textAlign = data[15];
                //textfield.italic = data[16];
                //textfield.bold = data[17];
                textfield.text = data[18];
                this.createTextFieldFilter(textfield, data[19]);
                starlingswf.SwfBlendMode.setBlendMode(textfield, data[20]);
            }
            return textfield;
        };
        /** 创建文本的滤镜 */
        Swf.prototype.createTextFieldFilter = function (textField, filterObjects) {
            for (var filterName in filterObjects) {
                if (filterName == "flash.filters::GlowFilter") {
                    textField.stroke = filterObjects[filterName]["strength"];
                    textField.strokeColor = filterObjects[filterName]["color"];
                }
            }
        };
        Swf.dataKey_Sprite = "spr";
        Swf.dataKey_Image = "img";
        Swf.dataKey_MovieClip = "mc";
        Swf.dataKey_TextField = "text";
        Swf.dataKey_Button = "btn";
        Swf.dataKey_Scale9 = "s9";
        Swf.dataKey_ShapeImg = "shapeImg";
        Swf.dataKey_Component = "comp";
        Swf.dataKey_Particle = "particle";
        return Swf;
    }());
    starlingswf.Swf = Swf;
    __reflect(Swf.prototype, "starlingswf.Swf");
})(starlingswf || (starlingswf = {}));
var starlingswf;
(function (starlingswf) {
    var SwfAnalyzer = (function (_super) {
        __extends(SwfAnalyzer, _super);
        function SwfAnalyzer() {
            var _this = _super.call(this) || this;
            _this._dataFormat = egret.HttpResponseType.TEXT;
            return _this;
        }
        /**
         * 解析并缓存加载成功的数据
         */
        SwfAnalyzer.prototype.analyzeData = function (resItem, data) {
            var name = resItem.name;
            if (this.fileDic[name] || !data) {
                return;
            }
            try {
                var str = data;
                this.fileDic[name] = new starlingswf.Swf(JSON.parse(str), 30);
            }
            catch (e) {
                egret.$warn(1017, resItem.url, data);
            }
        };
        return SwfAnalyzer;
    }(RES.BinAnalyzer));
    starlingswf.SwfAnalyzer = SwfAnalyzer;
    __reflect(SwfAnalyzer.prototype, "starlingswf.SwfAnalyzer");
})(starlingswf || (starlingswf = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /** 动画更新管理器 */
    var SwfUpdateManager = (function () {
        function SwfUpdateManager() {
        }
        SwfUpdateManager.createSwfUpdateManager = function (fps) {
            var updateManager = new SwfUpdateManager();
            updateManager._animations = [];
            updateManager._addQueue = [];
            updateManager._removeQueue = [];
            updateManager._currentTime = 0;
            updateManager.setFps(fps);
            egret.Ticker.getInstance().register(updateManager.update, updateManager);
            return updateManager;
        };
        SwfUpdateManager.prototype.setFps = function (fps) {
            this._fps = fps;
            this._fpsTime = 1000 / fps;
        };
        SwfUpdateManager.prototype.addSwfAnimation = function (animation) {
            this._addQueue.push(animation);
        };
        SwfUpdateManager.prototype.removeSwfAnimation = function (animation) {
            this._removeQueue.push(animation);
        };
        SwfUpdateManager.prototype.updateAdd = function () {
            var len = this._addQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._addQueue.pop();
                index = this._animations.indexOf(animation);
                if (index == -1) {
                    this._animations.push(animation);
                }
            }
        };
        SwfUpdateManager.prototype.updateRemove = function () {
            var len = this._removeQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._removeQueue.pop();
                index = this._animations.indexOf(animation);
                if (index != -1) {
                    this._animations.splice(index, 1);
                }
            }
        };
        SwfUpdateManager.prototype.update = function (time) {
            this._currentTime += time;
            if (this._currentTime < this._fpsTime) {
                return;
            }
            this._currentTime -= this._fpsTime;
            if (this._currentTime > this._fpsTime) {
                this._currentTime = 0;
            }
            this.updateRemove();
            this.updateAdd();
            var len = this._animations.length;
            var ani;
            for (var i = 0; i < len; i++) {
                ani = this._animations[i];
                if (ani.getStage() != null)
                    ani.update();
            }
        };
        return SwfUpdateManager;
    }());
    starlingswf.SwfUpdateManager = SwfUpdateManager;
    __reflect(SwfUpdateManager.prototype, "starlingswf.SwfUpdateManager");
})(starlingswf || (starlingswf = {}));
/**
 * Created by zmliu on 14-9-25.
 */
var starlingswf;
(function (starlingswf) {
    var SwfBlendMode = (function () {
        function SwfBlendMode() {
        }
        SwfBlendMode.setBlendMode = function (display, blendMode) {
            if (SwfBlendMode.modes[blendMode]) {
                display.blendMode = blendMode;
            }
        };
        SwfBlendMode.modes = {
            "normal": true,
            "add": true
        };
        return SwfBlendMode;
    }());
    starlingswf.SwfBlendMode = SwfBlendMode;
    __reflect(SwfBlendMode.prototype, "starlingswf.SwfBlendMode");
})(starlingswf || (starlingswf = {}));
var starlingswf;
(function (starlingswf) {
    var SwfButton = (function (_super) {
        __extends(SwfButton, _super);
        function SwfButton(skin) {
            var _this = _super.call(this) || this;
            _this.defScale = -1;
            _this.touchScale = 1.1;
            _this.isScale = true;
            _this.skin = skin;
            _this._w = _this.skin.width;
            _this._h = _this.skin.height;
            _this.addChild(skin);
            _this.touchEnabled = true;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.mouseUp, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.mouseUp, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.mouseClick, _this);
            return _this;
        }
        SwfButton.prototype.mouseDown = function (evt) {
            if (this.isScale == false) {
                return;
            }
            this.skin.scaleX = this.touchScale;
            this.skin.scaleY = this.touchScale;
            this.skin.x = (1.0 - this.touchScale) / 2.0 * this._w;
            this.skin.y = (1.0 - this.touchScale) / 2.0 * this._h;
        };
        SwfButton.prototype.mouseUp = function (evt) {
            if (this.isScale == false) {
                return;
            }
            this.skin.scaleX = 1;
            this.skin.scaleY = 1;
            this.skin.x = this.skin.y = 0;
        };
        SwfButton.prototype.mouseClick = function (evt) {
            this.dispatchEventWith(starlingswf.SwfButton.onClick);
            if (SwfButton.defSound != null)
                SwfButton.defSound.play(0, 1);
        };
        SwfButton.prototype.setEnable = function (val) {
            this.touchEnabled = val;
            if (val) {
                this.filters = null;
            }
            else {
                var colorMatrix = [
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                this.filters = [colorFlilter];
            }
        };
        SwfButton.prototype.dispose = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.mouseUp, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.mouseClick, this);
        };
        SwfButton.onClick = "SwfButton.onClick";
        return SwfButton;
    }(starlingswf.SwfSprite));
    starlingswf.SwfButton = SwfButton;
    __reflect(SwfButton.prototype, "starlingswf.SwfButton");
})(starlingswf || (starlingswf = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    var SwfMovieClip = (function (_super) {
        __extends(SwfMovieClip, _super);
        function SwfMovieClip(frames, labels, displayObjects, ownerSwf, frameEvents) {
            if (frameEvents === void 0) { frameEvents = null; }
            var _this = _super.call(this) || this;
            _this._isPlay = false;
            _this.loop = true;
            _this._completeFunction = null; //播放完毕的回调
            _this._hasCompleteListener = false; //是否监听过播放完毕的事件
            _this._frames = frames;
            _this._labels = labels;
            _this._displayObjects = displayObjects;
            _this._frameEvents = frameEvents;
            _this._startFrame = 0;
            _this._endFrame = _this._frames.length - 1;
            _this._ownerSwf = ownerSwf;
            _this.setCurrentFrame(0);
            _this.play();
            return _this;
        }
        SwfMovieClip.prototype.getStage = function () {
            if (this.$visible) {
                return this.stage;
            }
            return null;
        };
        SwfMovieClip.prototype.update = function () {
            if (!this._isPlay)
                return;
            if (this._currentFrame >= this._endFrame) {
                var isReturn = false;
                if (!this.loop || this._startFrame == this._endFrame) {
                    if (this._ownerSwf)
                        this.stop(false);
                    isReturn = true;
                }
                if (this._completeFunction)
                    this._completeFunction(this);
                if (this._hasCompleteListener)
                    this.dispatchEventWith(egret.Event.COMPLETE);
                if (isReturn)
                    return;
                this._currentFrame = this._startFrame;
            }
            else {
                this._currentFrame++;
            }
            this.setCurrentFrame(this._currentFrame);
        };
        SwfMovieClip.prototype.setCurrentFrame = function (frame) {
            //dirty hack this.removeChildren();
            // this.$children.length = 0;
            this.removeAllChilds();
            this._currentFrame = frame;
            this.__frameInfos = this._frames[this._currentFrame];
            var data;
            var display;
            var textfield;
            var useIndex;
            var length = this.__frameInfos.length;
            for (var i = 0; i < length; i++) {
                data = this.__frameInfos[i];
                useIndex = data[10];
                display = this._displayObjects[data[0]][useIndex];
                display.$setSkewX(data[6]);
                display.$setSkewY(data[7]);
                ;
                display.$setAlpha(data[8]);
                display.name = data[9];
                //                if(data[1] == Swf.dataKey_Particle){
                //                    display["setPostion"](data[2],data[3]);
                //                }else{
                display.$setX(data[2]);
                display.$setY(data[3]);
                //                }
                switch (data[1]) {
                    case starlingswf.Swf.dataKey_Scale9:
                        display.width = data[11];
                        display.height = data[12];
                        starlingswf.SwfBlendMode.setBlendMode(display, data[13]);
                        break;
                    case starlingswf.Swf.dataKey_ShapeImg:
                        display.width = data[11];
                        display.height = data[12];
                        starlingswf.SwfBlendMode.setBlendMode(display, data[13]);
                        break;
                    case starlingswf.Swf.dataKey_TextField:
                        textfield = display;
                        textfield.width = data[11];
                        textfield.height = data[12];
                        textfield.fontFamily = data[13];
                        textfield.textColor = data[14];
                        textfield.size = data[15];
                        textfield.textAlign = data[16];
                        //                        textfield["italic"] = data[17];
                        //                        textfield["bold"] = data[18];
                        if (data[19] && data[19] != "\r" && data[19] != "") {
                            textfield.text = data[19];
                        }
                        starlingswf.SwfBlendMode.setBlendMode(textfield, data[20]);
                        break;
                    default:
                        display.$setScaleX(data[4]);
                        display.$setScaleY(data[5]);
                        starlingswf.SwfBlendMode.setBlendMode(display, data[11]);
                        break;
                }
                this.$doAddChild(display, length, false);
                // this.addChildNew(display);
                // this.$children.push(display);
                // display.$parent = this;
            }
            if (this._frameEvents != null && this._frameEvents[this._currentFrame] != null) {
                this.dispatchEventWith(this._frameEvents[this._currentFrame]);
            }
        };
        SwfMovieClip.prototype.getCurrentFrame = function () {
            return this._currentFrame;
        };
        /**
         * 播放
         * */
        SwfMovieClip.prototype.play = function () {
            this._isPlay = true;
            this._ownerSwf.swfUpdateManager.addSwfAnimation(this);
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].play();
                    }
                }
            }
        };
        /**
         * 停止
         * @param	stopChild	是否停止子动画
         * */
        SwfMovieClip.prototype.stop = function (stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this._isPlay = false;
            this._ownerSwf.swfUpdateManager.removeSwfAnimation(this);
            if (!stopChild)
                return;
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].stop(stopChild);
                    }
                }
            }
        };
        SwfMovieClip.prototype.gotoAndStop = function (frame, stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this.goTo(frame);
            this.stop(stopChild);
        };
        SwfMovieClip.prototype.gotoAndPlay = function (frame) {
            this.goTo(frame);
            this.play();
        };
        SwfMovieClip.prototype.goTo = function (frame) {
            if (typeof (frame) == "string") {
                var labelData = this.getLabelData(frame);
                this._currentLabel = labelData[0];
                this._currentFrame = this._startFrame = labelData[1];
                this._endFrame = labelData[2];
            }
            else if (typeof (frame) == "number") {
                this._currentFrame = this._startFrame = frame;
                this._endFrame = this._frames.length - 1;
            }
            this.setCurrentFrame(this._currentFrame);
        };
        SwfMovieClip.prototype.getLabelData = function (label) {
            var length = this._labels.length;
            var labelData;
            for (var i = 0; i < length; i++) {
                labelData = this._labels[i];
                if (labelData[0] == label) {
                    return labelData;
                }
            }
            return null;
        };
        /**
         * 是否再播放
         * */
        SwfMovieClip.prototype.isPlay = function () {
            return this._isPlay;
        };
        /**
         * 总共有多少帧
         * */
        SwfMovieClip.prototype.totalFrames = function () {
            return this._frames.length;
        };
        /**
         * 返回当前播放的是哪一个标签
         * */
        SwfMovieClip.prototype.currentLabel = function () {
            return this._currentLabel;
        };
        /**
         * 获取所有标签
         * */
        SwfMovieClip.prototype.labels = function () {
            var length = this._labels.length;
            var returnLabels = [];
            for (var i = 0; i < length; i++) {
                returnLabels.push(this._labels[i][0]);
            }
            return returnLabels;
        };
        /**
         * 是否包含某个标签
         * */
        SwfMovieClip.prototype.hasLabel = function (label) {
            var ls = this.labels();
            return !(ls.indexOf(label) == -1);
        };
        SwfMovieClip.prototype.addEventListener1 = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this.addEventListener(type, listener, thisObject, useCapture, priority);
            this._hasCompleteListener = this.hasEventListener(egret.Event.COMPLETE);
        };
        SwfMovieClip.prototype.removeEventListener1 = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this.removeEventListener(type, listener, thisObject, useCapture);
            this._hasCompleteListener = this.hasEventListener(egret.Event.COMPLETE);
        };
        SwfMovieClip.prototype.addChildNew = function (child) {
            // this.$children.push(child);
            // child.$parent = this;
            // child.$stage = this.stage;
        };
        SwfMovieClip.prototype.removeAllChilds = function () {
            // let children = this.$children;
            // let len = children.length;
            // for (let i: number = 0; i < len; i++) {
            //     this.$children[i].$parent = null;
            //     this.$children[i].$stage = null;
            // }
            // this.$children.splice(0,len);
            var children = this.$children;
            for (var i = children.length - 1; i >= 0; i--) {
                this.$doRemoveChild(i, false);
            }
        };
        SwfMovieClip.prototype.getDisplay = function (name) {
            for (var k in this._displayObjects) {
                var arr = this._displayObjects[k];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    if (arr[i].name == name) {
                        return arr[i];
                    }
                }
            }
            return null;
        };
        return SwfMovieClip;
    }(starlingswf.SwfSprite));
    starlingswf.SwfMovieClip = SwfMovieClip;
    __reflect(SwfMovieClip.prototype, "starlingswf.SwfMovieClip", ["starlingswf.ISwfAnimation"]);
})(starlingswf || (starlingswf = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var lzm;
(function (lzm) {
    var HttpClient = (function () {
        function HttpClient() {
        }
        /**
         * 请求url
         */
        HttpClient.send = function (url, params, completeFunction, timeoutFunction, method) {
            if (completeFunction === void 0) { completeFunction = null; }
            if (timeoutFunction === void 0) { timeoutFunction = null; }
            if (method === void 0) { method = "get"; }
            var request = new egret.HttpRequest();
            var parStr = lzm.HttpClient.getRequestPars(params);
            var callback = function (e) {
                request.removeEventListener(egret.Event.COMPLETE, callback, request);
                request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
                if (completeFunction != null) {
                    completeFunction(request.response);
                }
            };
            var timeout = function (e) {
                request.removeEventListener(egret.Event.COMPLETE, callback, request);
                request.removeEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
                if (timeoutFunction != null) {
                    timeoutFunction(request.response);
                }
            };
            request.addEventListener(egret.Event.COMPLETE, callback, request);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, timeout, request);
            request.responseType = egret.HttpResponseType.TEXT;
            if (method == "get") {
                if (parStr != "") {
                    request.open(url + "?" + parStr, egret.HttpMethod.GET);
                }
                else {
                    request.open(url, egret.HttpMethod.GET);
                }
                request.send();
            }
            else if (method == "post") {
                request.open(url, egret.HttpMethod.POST);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send(parStr);
            }
        };
        HttpClient.getRequestPars = function (params) {
            var pars = "";
            var k;
            for (k in params) {
                pars += k + "=" + params[k] + "&";
            }
            return pars.substr(0, pars.length - 1);
        };
        return HttpClient;
    }());
    lzm.HttpClient = HttpClient;
    __reflect(HttpClient.prototype, "lzm.HttpClient");
})(lzm || (lzm = {}));
var lzm;
(function (lzm) {
    var JSONWebSocketClient = (function () {
        function JSONWebSocketClient(host, port) {
            this.isConnect = false;
            this.host = host;
            this.port = port;
            this.socket = new egret.WebSocket();
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
        }
        JSONWebSocketClient.prototype.connect = function () {
            this.socket.connectByUrl("ws://" + this.host + ":" + this.port);
            // this.socket.connect(this.host,this.port);
        };
        JSONWebSocketClient.prototype.sendData = function (data) {
            this.socket.writeUTF(JSON.stringify(data));
        };
        JSONWebSocketClient.prototype.onSocketOpen = function () {
            this.isConnect = true;
            if (this.onConnectCallBack != null)
                this.onConnectCallBack();
        };
        JSONWebSocketClient.prototype.onReceiveMessage = function (e) {
            var msg = this.socket.readUTF();
            if (this.onDataCallBack != null)
                this.onDataCallBack(JSON.parse(msg));
        };
        JSONWebSocketClient.prototype.onSocketClose = function (e) {
            this.isConnect = false;
            if (this.onCloseCallBack != null)
                this.onCloseCallBack();
        };
        JSONWebSocketClient.prototype.onSocketIOError = function (e) {
            if (this.onIOErrorCallBack != null)
                this.onIOErrorCallBack();
        };
        JSONWebSocketClient.prototype.dispose = function () {
            this.socket.close();
            this.onConnectCallBack = null;
            this.onIOErrorCallBack = null;
            this.onCloseCallBack = null;
            this.onDataCallBack = null;
        };
        return JSONWebSocketClient;
    }());
    lzm.JSONWebSocketClient = JSONWebSocketClient;
    __reflect(JSONWebSocketClient.prototype, "lzm.JSONWebSocketClient");
})(lzm || (lzm = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Starup = (function (_super) {
            __extends(Starup, _super);
            function Starup() {
                var _this = _super.call(this) || this;
                //初始化微信端
                texas.AppWx.init();
                Starup.stageSp = _this;
                _this.homeSp = new egret.Sprite();
                _this.addChild(_this.homeSp);
                _this.gameSp = new egret.Sprite();
                _this.addChild(_this.gameSp);
                _this.popupSp = new egret.Sprite();
                _this.addChild(_this.popupSp);
                _this.commonPopSp = new egret.Sprite();
                _this.addChild(_this.commonPopSp);
                _this.promptSp = new egret.Sprite();
                _this.addChild(_this.promptSp);
                // let assetAdapter = new AssetAdapter();
                // egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
                // egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
                RES.setMaxRetryTimes(100);
                egret.MainContext.instance.stage.maxTouches = 1;
                _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
                return _this;
            }
            Starup.prototype.onAddToStage = function (event) {
                texas.BaseApi.init(texas.AppConfig.server_ip, texas.AppConfig.server_port);
                texas.App.init(this.stage, this);
                texas.AssetManager.initWithStart(this.loadResConfigCallBack, this);
            };
            /**
             * 资源配置加载完成
             */
            Starup.prototype.loadResConfigCallBack = function (data) {
                texas.Log.log("初始化配置加载完成");
                // let theme = new eui.Theme("resource/default.thm.json", this.stage);
                // theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                texas.AssetManager.loadGroup("preload", this.loadResCallBack, this);
                // }, this);
                // AssetManager.loadGroup("starup", this.loadResCallBack, this);
                // AssetManager.loadGroup("loading", this.loadResCallBack, this);
                // AssetManager.loadGroup("preload", this.loadResCallBack, this);
            };
            /**
             * 初始化资源组 加载回调
             */
            Starup.prototype.loadResCallBack = function (data) {
                var callBackType = data[0];
                var e = data[1];
                if (callBackType == "onResourceLoadComplete") {
                    if (e.groupName == "preload") {
                        this.homeSp.addChild(new texas.LoginView());
                        texas.ExtGameHelper.init();
                        this.addChild(texas.RefreshUI.ins);
                        texas.EventManager.dispatchCmd("StarupLoadResComplete", null);
                    }
                }
                else if (callBackType == "onResourceProgress" && e.groupName == "preload") {
                    texas.EventManager.dispatchCmd("StarupLoadResProgress", parseInt(((e.itemsLoaded / e.itemsTotal) * 100).toString()));
                }
            };
            return Starup;
        }(egret.DisplayObjectContainer));
        texas.Starup = Starup;
        __reflect(Starup.prototype, "kelvin.texas.Starup");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var lzm;
(function (lzm) {
    var Alert = (function () {
        function Alert() {
        }
        Alert.init = function (root, stageWidth, stageHeight, alertScale, landscapeRotation) {
            if (alertScale === void 0) { alertScale = 1; }
            if (landscapeRotation === void 0) { landscapeRotation = 90; }
            lzm.Alert.root = root;
            lzm.Alert.stageWidth = stageWidth;
            lzm.Alert.stageHeight = stageHeight;
            lzm.Alert.alertScale = alertScale;
            lzm.Alert.landscapeRotation = landscapeRotation;
            lzm.Alert.initBackGround();
        };
        Alert.container = function () {
            return lzm.Alert.root;
        };
        Alert.width = function () {
            return lzm.Alert.stageWidth;
        };
        Alert.height = function () {
            return lzm.Alert.stageHeight;
        };
        Alert.initBackGround = function () {
            if (lzm.Alert.background == null) {
                lzm.Alert.background = new egret.Shape();
                lzm.Alert.background.alpha = 0.7;
                lzm.Alert.background.touchEnabled = true;
            }
            lzm.Alert.background.graphics.clear();
            lzm.Alert.background.graphics.beginFill(0x000000);
            lzm.Alert.background.graphics.drawRect(0, 0, lzm.Alert.stageWidth, lzm.Alert.stageHeight);
            lzm.Alert.background.graphics.endFill();
        };
        Alert.show = function (display) {
            lzm.Alert.container().addChild(display);
        };
        Alert.alertLandscape = function (display) {
            lzm.Alert.alert(display);
            display.rotation = lzm.Alert.landscapeRotation;
        };
        Alert.alert = function (dialog, setXY) {
            if (setXY === void 0) { setXY = true; }
            if (lzm.Alert.dialogs.indexOf(dialog) != -1) {
                return;
            }
            dialog.addEventListener(egret.Event.ADDED_TO_STAGE, lzm.Alert.dialogAddToStage, dialog);
            lzm.Alert.container().addChild(lzm.Alert.background);
            lzm.Alert.container().addChild(dialog);
            if (setXY) {
                dialog.anchorOffsetX = dialog.width / 2;
                dialog.anchorOffsetY = dialog.height / 2;
                dialog.x = lzm.Alert.stageWidth / 2;
                dialog.y = lzm.Alert.stageHeight / 2;
            }
            dialog.scaleX = dialog.scaleY = 0.1;
            egret.Tween.get(dialog).to({ scaleX: lzm.Alert.alertScale, scaleY: lzm.Alert.alertScale }, 300, egret.Ease.backOut);
        };
        Alert.dialogAddToStage = function (e) {
            var dialog = e.currentTarget;
            dialog.removeEventListener(egret.Event.ADDED_TO_STAGE, lzm.Alert.dialogAddToStage, dialog);
            dialog.addEventListener(egret.Event.REMOVED_FROM_STAGE, lzm.Alert.dialogRemoveFromStage, dialog);
            lzm.Alert.dialogs.push(dialog);
        };
        Alert.dialogRemoveFromStage = function (e) {
            var dialog = e.currentTarget;
            dialog.removeEventListener(egret.Event.REMOVED_FROM_STAGE, lzm.Alert.dialogRemoveFromStage, dialog);
            lzm.Alert.dialogs.pop();
            if (lzm.Alert.dialogs.length == 0) {
                if (lzm.Alert.background.parent == lzm.Alert.container())
                    lzm.Alert.container().removeChild(lzm.Alert.background);
            }
            else {
                while (lzm.Alert.dialogs.length > 0) {
                    dialog = lzm.Alert.dialogs[lzm.Alert.dialogs.length - 1];
                    if (dialog.parent == lzm.Alert.container()) {
                        lzm.Alert.container().swapChildren(lzm.Alert.background, dialog);
                        break;
                    }
                    else {
                        lzm.Alert.dialogs.pop();
                    }
                }
                if (lzm.Alert.dialogs.length == 0) {
                    if (lzm.Alert.background.parent == lzm.Alert.container())
                        lzm.Alert.container().removeChild(lzm.Alert.background);
                }
            }
        };
        Alert.closeAllAlert = function () {
            var len = Alert.dialogs.length;
            var obj;
            var disposeFun;
            var tmpArr = [];
            for (var i = 0; i < len; i++) {
                tmpArr.push(Alert.dialogs[i]);
            }
            for (var i = 0; i < len; i++) {
                obj = tmpArr[i];
                disposeFun = obj["dispose"];
                if (disposeFun instanceof Function) {
                    disposeFun.apply(obj, []);
                }
                if (obj.parent != null)
                    obj.parent.removeChild(obj);
            }
        };
        Alert.dialogs = [];
        return Alert;
    }());
    lzm.Alert = Alert;
    __reflect(Alert.prototype, "lzm.Alert");
})(lzm || (lzm = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BaseApiCmdInit = (function () {
            function BaseApiCmdInit() {
            }
            BaseApiCmdInit.initCmds = function () {
            };
            return BaseApiCmdInit;
        }());
        texas.BaseApiCmdInit = BaseApiCmdInit;
        __reflect(BaseApiCmdInit.prototype, "kelvin.texas.BaseApiCmdInit");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 比赛接口
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MatchApi = (function (_super) {
            __extends(MatchApi, _super);
            function MatchApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //获取比赛列表
            MatchApi.getMatchList = function (type1, type, callBack) {
                var pars = { "api": "match", "c": "getMatchList", "type": type, "type1": type1 };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取比赛列表
            MatchApi.getMatchListWithType1 = function (type1, title_id, callBack) {
                var pars = { "api": "match", "c": "getMatchListWithType1", "title_id": title_id, "type1": type1 };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取比赛详情	
            MatchApi.getMatchInfo = function (mid, callBack) {
                var pars = { "api": "match", "c": "getMatchInfo", "mid": mid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取比赛的房间数据	
            MatchApi.getMatchRooms = function (mid, callBack) {
                var pars = { "api": "match", "c": "getMatchRooms", "mid": mid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //报名
            MatchApi.apply = function (id, callBack, error) {
                var pars = { "api": "match", "c": "apply", "id": id };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //取消报名
            MatchApi.cancelApply = function (id, callBack, error) {
                var pars = { "api": "match", "c": "cancelApply", "id": id };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获取我的比赛
            MatchApi.getMyMatch = function (callBack) {
                var pars = { "api": "match", "c": "getMyMatch", };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //分页获取比赛玩家	
            MatchApi.getMatchRoleInfo = function (page, mid, callBack) {
                var pars = { "api": "match", "c": "getMatchRoleInfo", page: page, mid: mid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取房间玩家信息	
            MatchApi.getMatchRoomRoleInfo = function (room_id, callBack) {
                var pars = { "api": "match", "c": "getMatchRoomRoleInfo", room_id: room_id };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取单个玩家比赛数据
            MatchApi.getPlayerInfo = function (uid, mid, callBack, error) {
                var pars = { "api": "match", "c": "getPlayerInfo", uid: uid, mid: mid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获取实时战绩
            MatchApi.getShiShiZhanJi = function (mid, callBack, error) {
                var pars = { "api": "match", "c": "getShiShiZhanJi", mid: mid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获取玩家战绩
            MatchApi.getRoleZhanJi = function (callBack, error) {
                var pars = { "api": "match", "c": "getRoleZhanJi" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获取比赛战绩	
            MatchApi.getMatchZhanji = function (id, callBack, error) {
                var pars = { "api": "match", "c": "getMatchZhanji", id: id };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获取大师分排名
            MatchApi.getMasterPoints = function (callBack, error) {
                var pars = { "api": "match", "c": "getMasterPoints" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获得标题
            MatchApi.getTitleConfig = function (type1, callBack, error) {
                var pars = { "api": "match", "c": "getTitleConfig", type1: type1 };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            //获得道具信息
            MatchApi.getPlayerProps = function (callBack, error) {
                var pars = { "api": "match", "c": "getPlayerProps" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    var info = {
                        configs: data.configs,
                        data: data.data,
                    };
                    texas.MatchData.putUserPropInfo(info);
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            return MatchApi;
        }(texas.BaseApi));
        texas.MatchApi = MatchApi;
        __reflect(MatchApi.prototype, "kelvin.texas.MatchApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 * 公告Api
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NoticeApi = (function (_super) {
            __extends(NoticeApi, _super);
            function NoticeApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //获取公告	
            NoticeApi.getNotices = function (callBack) {
                var pars = { "api": "notice", "c": "getNotices" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取活动公告		
            NoticeApi.getActivityNotices = function (callBack) {
                var pars = { "api": "notice", "c": "getActivityNotices" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            return NoticeApi;
        }(texas.BaseApi));
        texas.NoticeApi = NoticeApi;
        __reflect(NoticeApi.prototype, "kelvin.texas.NoticeApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PhoneApi = (function () {
            function PhoneApi() {
            }
            //判断是否绑定
            PhoneApi.isVert = function (callBack) {
                if (texas.PhoneData.phoneNumber != null) {
                    if (callBack != null) {
                        callBack(texas.PhoneData.phoneNumber);
                        return;
                    }
                }
                var pars = { "api": "phone", "c": "isVert" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    texas.PhoneData.phoneNumber = data.tel;
                    if (callBack != null)
                        callBack(texas.PhoneData.phoneNumber);
                }, null);
            };
            //发送验证码
            PhoneApi.genCode = function (tel, callBack, self) {
                var pars = { "tel": tel, "api": "phone", "c": "genCode" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(self, data);
                }, null);
            };
            //绑定手机
            PhoneApi.vert = function (tel, pwd, code, callBack, self) {
                var pars = { "tel": tel, "pwd": pwd, "code": code, "api": "phone", "c": "vert" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    texas.PhoneData.phoneNumber = tel;
                    texas.ApiState.showText("绑定手机成功");
                    if (callBack != null)
                        callBack(self, data);
                }, null);
            };
            return PhoneApi;
        }());
        texas.PhoneApi = PhoneApi;
        __reflect(PhoneApi.prototype, "kelvin.texas.PhoneApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RoleApi = (function (_super) {
            __extends(RoleApi, _super);
            function RoleApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleApi.syncRole = function () {
                var pars = { "api": "role", "c": "syncRole" };
                texas.BaseApi.requestLogic(pars, null, null);
            };
            RoleApi.getMessage = function (callBack) {
                var pars = { "api": "role", "c": "getMessage" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            RoleApi.clearMessage = function (callBack) {
                var pars = { "api": "role", "c": "clearMessage" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            RoleApi.getRewardInfo = function (callBack) {
                var pars = { "api": "role", "c": "getRewardInfo" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (data.info) {
                        texas.RoleData.putRolePrizeInfo(data.info);
                    }
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            RoleApi.updateRewardInfo = function (name, pid, aliAccount, callBack) {
                var pars = { "api": "role", "c": "updateRewardInfo", name: name, pid: pid, aliAccount: aliAccount };
                texas.BaseApi.requestLogic(pars, function (data) {
                    var info = {
                        name: name,
                        pid: pid,
                        aliAccount: aliAccount,
                    };
                    texas.RoleData.putRolePrizeInfo(info);
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            return RoleApi;
        }(texas.BaseApi));
        texas.RoleApi = RoleApi;
        __reflect(RoleApi.prototype, "kelvin.texas.RoleApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RoomApi = (function (_super) {
            __extends(RoomApi, _super);
            function RoomApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //加入游戏
            RoomApi.joinGame = function (mid, room_id, callBack) {
                var pars = { "api": "room", "c": "joinGame", "mid": mid, "room_id": room_id };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //离开游戏
            RoomApi.leaveGame = function (callBack) {
                var pars = { "api": "room", "c": "leaveGame" };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //获取某个玩家在比赛的哪个房间中
            RoomApi.getPlayerMatchRoomId = function (mid, targetUid, callBack, error) {
                var pars = { "api": "room", "c": "getPlayerMatchRoomId", mid: mid, targetUid: targetUid };
                texas.BaseApi.requestLogic(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            /**
             * 向游戏发送数据
             */
            RoomApi.gameMessage = function (messageData, finishOnClient) {
                if (finishOnClient === void 0) { finishOnClient = false; }
                messageData['api'] = "room";
                messageData['c'] = "gameMessage";
                texas.BaseApi.requestLogic(messageData, function (data) { }, null, finishOnClient);
            };
            RoomApi.on_joinRoom = function (data) {
                // RoomData.saveRole(data.role);
                // RoomData.putCurrentRoom(data.room);
            };
            RoomApi.on_leaveRoom = function (data) { };
            RoomApi.on_leaveGame = function (data) { };
            RoomApi.on_returnGame = function (data) { };
            return RoomApi;
        }(texas.BaseApi));
        texas.RoomApi = RoomApi;
        __reflect(RoomApi.prototype, "kelvin.texas.RoomApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var UserApi = (function (_super) {
            __extends(UserApi, _super);
            function UserApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserApi.register = function (account, pwd, recommend, callBack, wxRole, error) {
                if (wxRole === void 0) { wxRole = null; }
                if (error === void 0) { error = null; }
                var pars = { "api": "user", "c": "register", "account": account, "pwd": pwd };
                if (egret.Capabilities.os == "iOS") {
                    pars['plat_id'] = "0";
                }
                else if (egret.Capabilities.os == "Android") {
                    pars['plat_id'] = "1";
                }
                else {
                    pars['plat_id'] = "2";
                }
                if (recommend != null && recommend != "") {
                    pars['recommend'] = recommend;
                }
                else if (egret.getOption("recommend") != "") {
                    pars['recommend'] = egret.getOption("recommend");
                }
                if (wxRole != null) {
                    pars['wxRole'] = wxRole;
                }
                texas.BaseApi.requestUser(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            UserApi.login = function (account, pwd, callBack, errcall) {
                var pars = { "api": "user", "c": "login", "account": account, "pwd": pwd };
                texas.BaseApi.requestUser(pars, function (data) {
                    texas.AccountData.putSessionToken(data.sessionToken);
                    texas.AccountData.putUser(data.user);
                    UserApi.initLoginData(data.loginData);
                    texas.App.heart();
                    if (callBack != null)
                        callBack(data);
                }, errcall);
            };
            UserApi.resetfd = function () {
                var pars = { "api": "user", "c": "resetfd", "sessionToken": texas.AccountData.getSessionToken() };
                texas.BaseApi.requestUser(pars, function (data) {
                    UserApi.initLoginData(data.loginData);
                    texas.EventManager.dispatchCmd(texas.Events.reloadLoginData, null);
                }, function (data) {
                });
            };
            UserApi.initLoginData = function (data) {
                if (data.role == null)
                    return;
                texas.RoleData.putRole(data.role);
                texas.AccountData.loginData = data;
            };
            //登录界面获得验证码
            UserApi.loginGetCode = function (account, callBack) {
                var pars = { "api": "user", "c": "getCode", "account": account };
                texas.BaseApi.requestUser(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, null);
            };
            //登录界面重置密码
            UserApi.loginAgainPassword = function (account, newPwd, code, callBack, error) {
                var pars = { "api": "user", "c": "resetPwd", "account": account, "newPwd": newPwd, "code": code };
                texas.BaseApi.requestUser(pars, function (data) {
                    if (callBack != null)
                        callBack(data);
                }, error);
            };
            return UserApi;
        }(texas.BaseApi));
        texas.UserApi = UserApi;
        __reflect(UserApi.prototype, "kelvin.texas.UserApi");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var AssetManager = (function () {
            function AssetManager() {
            }
            /**
             * 游戏启动的时候 初始化一波资源
             */
            AssetManager.initWithStart = function (callBack, callBackThisObj) {
                RES.registerAnalyzer("swf", starlingswf.SwfAnalyzer);
                RES.registerAnalyzer("js", texas.JSAnalyzer);
                xLoader.init();
                egret.ImageLoader.crossOrigin = "Anonymous";
                if (AssetManager.is_local) {
                    AssetManager.loadConfig(texas.AppConfig.platform_res_config_url, texas.AppConfig.platform_res_url, callBack, callBackThisObj);
                }
                else {
                    AssetManager.loadConfig("http://172.17.1.105/texas_ziyuan/default.res.json", "http://172.17.1.105/texas_ziyuan/", callBack, callBackThisObj);
                }
            };
            /**
             * 加载资源配置
             */
            AssetManager.loadConfig = function (url, resourceRoot, callBack, callBackThisObj) {
                xLoader.loadConfig(url, resourceRoot, callBackThisObj, callBack, callBack);
            };
            /**
             * 加载资源组
             */
            AssetManager.loadGroup = function (name, callBack, callBackThisObj) {
                xLoader.loadGroup(name, callBackThisObj, callBack, callBack, callBack);
            };
            Object.defineProperty(AssetManager, "starupSwf", {
                get: function () {
                    return RES.getRes("starup_swf");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetManager, "loadingSwf", {
                get: function () {
                    return RES.getRes("loading_swf");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetManager, "mainSwf", {
                get: function () {
                    return RES.getRes("main_swf");
                },
                enumerable: true,
                configurable: true
            });
            AssetManager.is_local = true;
            return AssetManager;
        }());
        texas.AssetManager = AssetManager;
        __reflect(AssetManager.prototype, "kelvin.texas.AssetManager");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameAssetLoader = (function () {
            function GameAssetLoader() {
            }
            /**
             * 加载游戏资源
             */
            GameAssetLoader.prototype.loadGame = function (callBack, callBackThisObj) {
                this.callBack = callBack;
                this.CallBackThisObj = callBackThisObj;
                // if (GameAssetLoader.lastLoadGame != null && GameAssetLoader.lastLoadGame.id != game.id) {
                // 	RES.destroyRes("game_res_" + GameAssetLoader.lastLoadGame.id);
                // 	this.unConfig(GameAssetLoader.lastLoadGameRes);
                // }
                // GameAssetLoader.lastLoadGame = game;
                console.log("RES.isGroupLoaded(game_res_ + AppConfig.gameId)", RES.isGroupLoaded("game_res_" + texas.AppConfig.gameId));
                if (!RES.isGroupLoaded("game_res_" + texas.AppConfig.gameId)) {
                    texas.LoadingUI.ins.show(1);
                    texas.AssetManager.loadConfig(texas.AppConfig.res_url + texas.AppConfig.resVer + "/default.res.json", texas.AppConfig.res_url + texas.AppConfig.resVer + "/", this.onLoadAssetConfComplete, this);
                }
                else {
                    this.callBack.apply(this.CallBackThisObj, []);
                }
            };
            GameAssetLoader.prototype.onLoadAssetConfComplete = function (data) {
                GameAssetLoader.lastLoadGameRes = data[1];
                texas.AssetManager.loadGroup("game_res_" + texas.AppConfig.gameId, this.onLoadAssetComplete, this);
            };
            GameAssetLoader.prototype.onLoadAssetComplete = function (data) {
                var callBackType = data[0];
                var e = data[1];
                if (callBackType == "onResourceLoadComplete") {
                    texas.LoadingUI.ins.hide();
                    this.callBack.apply(this.CallBackThisObj, []);
                }
                else if (callBackType == "onResourceProgress") {
                    var val = parseInt(((e.itemsLoaded / e.itemsTotal) * 100).toString());
                    texas.LoadingUI.ins.setProgress(val);
                }
            };
            /**
             * 卸载资源配置
             */
            GameAssetLoader.prototype.unConfig = function (config) {
                var res = RES;
                var configInstance = res.configInstance;
                var groups = config.groups;
                var resources = config.resources;
                var len = groups.length;
                var obj;
                var subkeys;
                var subkeysLen;
                for (var i = 0; i < len; i++) {
                    obj = groups[i];
                    delete configInstance.groupDic[obj.name];
                }
                len = resources.length;
                for (var i = 0; i < len; i++) {
                    obj = resources[i];
                    subkeys = obj.subkeys;
                    delete configInstance.keyMap[obj.name];
                    if (subkeys == null)
                        continue;
                    subkeysLen = subkeys.length;
                    for (var j = 0; j < subkeysLen; j++) {
                        delete configInstance.keyMap[subkeys[j]];
                    }
                }
            };
            return GameAssetLoader;
        }());
        texas.GameAssetLoader = GameAssetLoader;
        __reflect(GameAssetLoader.prototype, "kelvin.texas.GameAssetLoader");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var JSAnalyzer = (function (_super) {
            __extends(JSAnalyzer, _super);
            function JSAnalyzer() {
                var _this = _super.call(this) || this;
                _this._dataFormat = egret.HttpResponseType.TEXT;
                JSAnalyzer.jsDic = {};
                return _this;
            }
            /**
             * 解析并缓存加载成功的数据
             */
            JSAnalyzer.prototype.analyzeData = function (resItem, data) {
                var name = resItem.name;
                if (this.fileDic[name] || !data) {
                    return;
                }
                if (JSAnalyzer.jsDic[name] == 1)
                    return;
                var str = data;
                this.fileDic[name] = str;
                var content = "\n            kelvin = window.kelvin;\n            " + str + ";\n            ";
                var func = new Function(content);
                func();
                JSAnalyzer.jsDic[name] = 1;
            };
            return JSAnalyzer;
        }(RES.BinAnalyzer));
        texas.JSAnalyzer = JSAnalyzer;
        __reflect(JSAnalyzer.prototype, "kelvin.texas.JSAnalyzer");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var SoundManager = (function () {
            function SoundManager() {
            }
            SoundManager.setGameConfig = function () {
                if (SoundManager.currentGameSounds == null) {
                    SoundManager.currentGameSounds = {};
                    SoundManager.currentGameSoundChannels = {};
                    SoundManager.currentGameSoundUrls = {};
                }
            };
            SoundManager.setCurrentGameSoundVolume = function (volume) {
                if (SoundManager.currentGameSoundChannels) {
                    for (var i in SoundManager.currentGameSoundChannels) {
                        if (SoundManager.currentGameSoundChannels[i] && SoundManager.currentGameSoundChannels[i].position) {
                            SoundManager.currentGameSoundChannels[i].volume = volume;
                        }
                    }
                }
            };
            SoundManager.recoveryCurrentGameSoundVolume = function () {
                if (SoundManager.currentGameSoundChannels) {
                    for (var i in SoundManager.currentGameSoundChannels) {
                        if (SoundManager.currentGameSoundChannels[i] && SoundManager.currentGameSoundChannels[i].position) {
                            SoundManager.currentGameSoundChannels[i].volume = texas.VoiceData.soundNum;
                        }
                    }
                }
            };
            SoundManager.playPreSound = function (name, loops) {
                if (loops === void 0) { loops = 1; }
                var sound = RES.getRes(name);
                if (sound != null) {
                    var soundChannel = sound.play(0, loops);
                    soundChannel.volume = texas.VoiceData.soundNum;
                }
            };
            SoundManager.playGameSound = function (name, loops, volume) {
                if (loops === void 0) { loops = 1; }
                if (volume === void 0) { volume = 1; }
                if (this._isMute)
                    return;
                if (RES.hasRes(name)) {
                    SoundManager.playPreSound(name, loops);
                    return;
                }
                if (volume == 1) {
                    volume = texas.VoiceData.soundNum;
                }
                if (volume > 0) {
                    SoundManager.playSound(name, loops, volume);
                }
            };
            SoundManager.playBgSound = function (name) {
                if (this._isMute)
                    return;
                if (SoundManager.currentBgName)
                    SoundManager.stopGameSound(SoundManager.currentBgName);
                SoundManager.currentBgName = name;
                var volume = texas.VoiceData.musicNum;
                if (volume > 0) {
                    SoundManager.playSound(name, 0, volume);
                }
            };
            SoundManager.stopGameSound = function (name) {
                var channel = SoundManager.currentGameSoundChannels[name];
                if (channel != null) {
                    channel.stop();
                    channel = null;
                    SoundManager.currentGameSoundChannels[name] = null;
                }
            };
            SoundManager.setSoundMute = function (ismute) {
                if (this._isMute == ismute)
                    return;
                this._isMute = ismute;
                var bgVolume = 0;
                if (!this._isMute) {
                    bgVolume = texas.VoiceData.musicNum;
                }
                if (SoundManager.currentBgName != undefined || SoundManager.currentBgName != null) {
                    var channel = SoundManager.currentGameSoundChannels[SoundManager.currentBgName];
                    if (channel != null) {
                        channel.volume = bgVolume;
                    }
                }
            };
            SoundManager.playSound = function (name, loops, volume) {
                if (loops === void 0) { loops = 1; }
                if (volume === void 0) { volume = 1; }
                var sound = SoundManager.currentGameSounds[name];
                var channel;
                if (sound != null) {
                    channel = sound.play(0, loops);
                    channel.volume = volume;
                    SoundManager.currentGameSoundChannels[name] = channel;
                }
                else {
                    var loadUrl = texas.AppConfig.res_url + texas.AppConfig.resVer + "/sound/" + name + "?v=" + texas.AppConfig.resVer;
                    RES.getResByUrl(loadUrl, function (sound) {
                        SoundManager.currentGameSounds[name] = sound;
                        channel = sound.play(0, loops);
                        channel.volume = volume;
                        SoundManager.currentGameSoundChannels[name] = channel;
                        SoundManager.currentGameSoundUrls[name] = loadUrl;
                    }, SoundManager, RES.ResourceItem.TYPE_SOUND);
                }
            };
            SoundManager.disposeSounds = function () {
                var sound;
                var channel;
                for (var k in SoundManager.currentGameSounds) {
                    sound = SoundManager.currentGameSounds[k];
                    channel = SoundManager.currentGameSoundChannels[k];
                    if (channel != null)
                        channel.stop();
                    if (sound != null)
                        sound.close();
                    RES.destroyRes(SoundManager.currentGameSoundUrls[k]);
                }
                SoundManager.currentGameSounds = {};
                SoundManager.currentGameSoundChannels = {};
                SoundManager.currentGameSoundUrls = {};
            };
            /**
             * 播放常用语
             */
            SoundManager.playChangYongYu = function (name) {
                if (SoundManager.changyongSounds == null) {
                    SoundManager.changyongSounds = {};
                    SoundManager.changyongSoundChannels = {};
                }
                var sound = SoundManager.changyongSounds[name];
                var channel;
                if (sound != null) {
                    channel = sound.play(0, 1);
                    channel.volume = texas.VoiceData.soundNum;
                    SoundManager.changyongSoundChannels[name] = channel;
                }
                else {
                    var loadUrl = texas.AppConfig.res_url + "changyongSound/" + name + "?v=" + texas.AppConfig.resVer;
                    RES.getResByUrl(loadUrl, function (sound) {
                        SoundManager.changyongSounds[name] = sound;
                        channel = sound.play(0, 1);
                        channel.volume = texas.VoiceData.soundNum;
                        SoundManager.changyongSoundChannels[name] = channel;
                    }, SoundManager, RES.ResourceItem.TYPE_SOUND);
                }
            };
            SoundManager.setMessageState = function (bool) {
                this._messageStete = bool;
            };
            SoundManager.playMessage = function (name, volume, loops) {
                if (volume === void 0) { volume = 1; }
                if (loops === void 0) { loops = false; }
                if (this._isMute == true) {
                    return;
                }
                if (RES.getRes(name)) {
                    SoundManager.playMsgPreSound(name, volume, loops);
                }
                else {
                    SoundManager.playMsNoPreSound(name, volume, loops);
                }
            };
            SoundManager.playMsgPreSound = function (name, volume, loops) {
                var homeSound = RES.getRes(name);
                if (homeSound != null) {
                    var homeSoundChannel = homeSound.play(0, loops);
                    homeSoundChannel.volume = volume;
                }
            };
            SoundManager.playMsNoPreSound = function (name, volume, loops) {
                RES.getResAsync(name, function (e) {
                    var homeSound = e;
                    if (homeSound != null) {
                        var homeSoundChannel = homeSound.play(0, loops);
                        homeSoundChannel.volume = volume;
                    }
                }, this);
            };
            SoundManager._isMute = false;
            SoundManager._messageStete = false; //false 是打开  true 是关闭
            return SoundManager;
        }());
        texas.SoundManager = SoundManager;
        __reflect(SoundManager.prototype, "kelvin.texas.SoundManager");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var App = (function () {
            function App() {
            }
            App.init = function (stage, appRoot) {
                stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
                stage.addEventListener(egret.Event.RESIZE, App.onResize, App);
                stage.addEventListener(egret.Event.ACTIVATE, App.onActive, App);
                stage.addEventListener(egret.Event.DEACTIVATE, App.onDeActive, App);
                // stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;
                stage.frameRate = 60;
                App.stage = stage;
                App.appRoot = appRoot;
                App.topContainer = new egret.DisplayObjectContainer();
                stage.addChild(App.topContainer);
                App.setOrientationMode(egret.OrientationMode.PORTRAIT);
            };
            App.setOrientationMode = function (mode) {
                if (mode == egret.OrientationMode.LANDSCAPE) {
                    App.designWidth = 1280;
                    App.designHeight = 720;
                }
                else {
                    App.designWidth = 720;
                    App.designHeight = 1280;
                }
                App.stage.orientation = mode;
                App.stageRealWidth = App.stage.stageWidth;
                App.stageRealHeight = App.stage.stageHeight;
                App.stageWidth = App.stage.stageWidth;
                App.stageHeight = App.stage.stageHeight;
                var sx = App.stageWidth / App.designWidth;
                var sy = App.stageHeight / App.designHeight;
                if (sx > sy) {
                    App.alertScale = sy;
                }
                else {
                    App.alertScale = sx;
                }
                lzm.Alert.init(texas.Starup.stageSp.commonPopSp, App.stageWidth, App.stageHeight, App.alertScale, App.getRotationValue());
            };
            App.onActive = function (e) {
                // SoundManager.SetSoundMute(false);
            };
            App.onDeActive = function (e) {
                // SoundManager.SetSoundMute(true);
            };
            App.onResize = function (e) {
                App.stageRealWidth = App.stage.stageWidth;
                App.stageRealHeight = App.stage.stageHeight;
                App.stageWidth = App.stage.stageWidth;
                App.stageHeight = App.stage.stageHeight;
                var sx = App.stageWidth / App.designWidth;
                var sy = App.stageHeight / App.designHeight;
                if (sx > sy) {
                    App.alertScale = sy;
                }
                else {
                    App.alertScale = sx;
                }
                lzm.Alert.init(App.appRoot, App.stageWidth, App.stageHeight, App.alertScale, App.getRotationValue());
            };
            Object.defineProperty(App, "isLandscape", {
                get: function () {
                    return App._isLandscape;
                },
                set: function (value) {
                    App._isLandscape = value;
                },
                enumerable: true,
                configurable: true
            });
            App.heart = function () {
                egret.setTimeout(function () {
                    App.heartFun();
                }, App, 20000);
            };
            App.heartFun = function () {
                if (texas.RoleData.getRole() != null) {
                    texas.RoleApi.syncRole();
                }
                App.heart();
            };
            /**
             * 设置游戏横屏时 是否旋转270度
             */
            App.setGamelandscapeRotation270 = function (val) {
                App.gamelandscapeRotation270 = val;
                lzm.Alert.init(App.appRoot, App.stageWidth, App.stageHeight, App.alertScale, App.getRotationValue());
            };
            /**
             * 获取游戏横屏时 是否旋转270度
             */
            App.getGamelandscapeRotation270 = function () {
                var os = egret.Capabilities.os;
                if (os == "Windows PC" || os == "Mac OS") {
                    return false;
                }
                if (window.orientation != null && (window.orientation == 90 || window.orientation == -90)) {
                    return false;
                }
                return App.gamelandscapeRotation270;
            };
            /**
             * 获取横屏旋转角度
             */
            App.getRotationValue = function () {
                // if(App.getGamelandscapeRotation270()){
                // 	return 270;
                // }
                // return 90;
                return 270;
            };
            App.isiOS = function () {
                return egret.Capabilities.os == "iOS";
            };
            /**
             * 操作系统是否为android
             */
            App.isAndroid = function () {
                return egret.Capabilities.os == "Android";
            };
            /**
             * 是否在微端中运行
             */
            App.isWeiDuan = function () {
                if (!egret.RuntimeType["RUNTIME2"]) {
                    return false;
                }
                return egret.Capabilities.runtimeType == egret.RuntimeType.RUNTIME2;
            };
            /**
             * 关闭微端启动页
             */
            App.closeWeiduanLoadingPage = function () {
                if (window['closeLoadingView']) {
                    window['closeLoadingView']();
                }
            };
            App.openUrl = function (url) {
                if (App.isWeiDuan()) {
                    texas.NativeTools.openUrl(url);
                }
                else {
                    var ua = navigator.userAgent.toLowerCase();
                    if (ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i).toString() == "micromessenger") {
                        location.href = url;
                    }
                    else {
                        window.open(url);
                    }
                }
            };
            App.stageRealWidth = 720; //舞台实际的宽度
            App.stageRealHeight = 1280; //舞台实际的高度
            App.designWidth = 720; //设计时 使用的宽度
            App.designHeight = 1280; //设计时 使用的高度
            App.stageWidth = 720; //缩放之后舞台的宽度
            App.stageHeight = 1280; //缩放之后舞台的高度
            App._isLandscape = false;
            App.gameing = false;
            App.gamelandscapeRotation270 = false;
            return App;
        }());
        texas.App = App;
        __reflect(App.prototype, "kelvin.texas.App");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var AppConfig = (function () {
            function AppConfig() {
            }
            AppConfig.server_ip = "172.17.1.105";
            AppConfig.server_port = 7104;
            /** 平台资源配置地址 */
            AppConfig.platform_res_config_url = "resource/default.res.json";
            /** 平台资源配加载前缀 */
            AppConfig.platform_res_url = "resource/";
            /** 微信appid */
            AppConfig.wxAppId = "";
            /** universalLink */
            AppConfig.universalLink = "";
            /** 微信角色信息请求 */
            AppConfig.wxApiUrl = "";
            /** 下载地址 */
            AppConfig.downUrl = "";
            /** 资源路径*/
            AppConfig.res_url = "http://172.17.1.105/aptana/texas_game/";
            /** 资源配置文件*/
            AppConfig.res_config = "";
            /** 游戏主类*/
            AppConfig.clientMainClass = "kelvin.texas.game.GameRoot";
            /** 版本号*/
            AppConfig.resVer = "2";
            /**游戏id */
            AppConfig.gameId = 6001;
            /**是否需要绑定手机才能报名 */ //1是需要   2是不需要
            AppConfig.applyisneedPhone = 2;
            return AppConfig;
        }());
        texas.AppConfig = AppConfig;
        __reflect(AppConfig.prototype, "kelvin.texas.AppConfig");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Events = (function () {
            function Events() {
            }
            /** 重连事件，需要刷新界面 */
            Events.reloadLoginData = "reloadLoginData";
            /** 刷新界面显示金币 */
            Events.refreshShowGold = "refreshShowGold";
            /** 金币额度发生变化 */
            Events.goldChange = "goldChange";
            /** 生成锦标赛界面*/
            Events.createJBSView = "DT_createJBSView";
            /** 生成比赛详情界面 */
            Events.createBSXQView = "DT_createBSXQView";
            /** 生成盲注结构表界面 */
            Events.createMZJGBView = "DT_createMZJGBView";
            /**生成个人信息界面 */
            Events.createPersonalView = "DT_createPersonalView";
            /** 去游戏界面 */
            Events.gotoGameView = "DT_gotoGameView";
            /** 返回赛事界面 */
            Events.gotoMatchView = "DT_gotoMatchView";
            /** 去奖励页卡 */
            Events.gotoJLPage = "DT_gotoJLPage"; //去奖励页卡
            /** 退出游戏事件 */
            Events.backGame = "DT_backGame"; //退出游戏事件
            /**游戏去到锦标赛界面 */
            Events.goToJBSMatch = "DT_goToJBSMatch";
            /** 游戏 去到商城*/
            Events.goToShop = "DT_goToShop";
            /** 横向容器滑动时不响应点击事件 */
            Events.controlHContanier = "DT_controlHContanier"; // 控制横向容器的点击事件  false是不能点击  true是可以
            return Events;
        }());
        texas.Events = Events;
        __reflect(Events.prototype, "kelvin.texas.Events");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var AccountData = (function () {
            function AccountData() {
            }
            AccountData.getSessionToken = function () {
                return texas.CacheData.getRAMData("sessionToken");
            };
            AccountData.putSessionToken = function (token) {
                texas.CacheData.saveRAMData("sessionToken", token);
            };
            AccountData.getUser = function () {
                return texas.CacheData.getRAMData("user");
            };
            AccountData.putUser = function (user) {
                texas.CacheData.saveRAMData("user", user);
            };
            Object.defineProperty(AccountData, "loginInfo_wx", {
                get: function () {
                    var result = egret.localStorage.getItem("AccountData_loginInfo_wx");
                    if (result && result != "null") {
                        return JSON.parse(result);
                    }
                    else {
                        return null;
                    }
                },
                set: function (json) {
                    var obj;
                    if (json) {
                        obj = { account: "", password: "", time: 0, iswx: "yes" };
                        obj.account = json["account"];
                        obj.password = json["password"];
                        obj.time = new Date().getTime();
                    }
                    else {
                        obj = null;
                    }
                    egret.localStorage.setItem("AccountData_loginInfo_wx", JSON.stringify(obj));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccountData, "wxInfoTime", {
                set: function (time) {
                    egret.localStorage.setItem("AccountData_wxInfoTime", String(time));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccountData, "loginInfo", {
                get: function () {
                    var result = egret.localStorage.getItem("AccountData_loginInfo");
                    if (result) {
                        return JSON.parse(result);
                    }
                    else {
                        return null;
                    }
                },
                //正式信息 手机的
                set: function (json) {
                    egret.localStorage.setItem("AccountData_loginInfo", JSON.stringify(json));
                },
                enumerable: true,
                configurable: true
            });
            //向缓存里面增加信息
            AccountData.addLoginInfo = function (account, password) {
                var info = AccountData.loginInfo;
                var date = new Date();
                if (!info) {
                    info = {};
                }
                info[account] = {};
                info[account]["account"] = account;
                info[account]["password"] = password;
                info[account]["time"] = date.getTime();
                AccountData.loginInfo = info;
            };
            //向缓存里删除信息
            AccountData.deleteLoginInfo = function (account) {
                var info = AccountData.loginInfo;
                if (!info) {
                    return;
                }
                if (!info[account]) {
                    return;
                }
                delete info[account];
                AccountData.loginInfo = info;
            };
            Object.defineProperty(AccountData, "loginInfo_visitor", {
                get: function () {
                    var result = egret.localStorage.getItem("AccountData_loginInfo_visitor");
                    if (result && result != "null") {
                        return JSON.parse(result);
                    }
                    else {
                        return null;
                    }
                },
                set: function (json) {
                    var obj;
                    if (json) {
                        obj = { account: "", password: "", time: 0, };
                        obj.account = json["account"];
                        obj.password = json["password"];
                        obj.time = new Date().getTime();
                    }
                    else {
                        obj = null;
                    }
                    egret.localStorage.setItem("AccountData_loginInfo_visitor", JSON.stringify(obj));
                },
                enumerable: true,
                configurable: true
            });
            //得到最后登录的账号密码  info为空就是没有   info   account password time   如果是wx 会有iswx
            AccountData.getLastAccount = function () {
                var phoneInfo = AccountData.getLastPhoneAccount();
                var wxinfo = AccountData.loginInfo_wx;
                var visitorinfo = AccountData.loginInfo_visitor;
                if (!wxinfo && !phoneInfo) {
                    return null;
                }
                if (!wxinfo && !visitorinfo) {
                    return phoneInfo;
                }
                if (!phoneInfo && !visitorinfo) {
                    return wxinfo;
                }
                if (!phoneInfo && !wxinfo) {
                    return visitorinfo;
                }
                var info;
                if (phoneInfo && wxinfo) {
                    if (phoneInfo["time"] > wxinfo["time"]) {
                        info = phoneInfo;
                    }
                    else {
                        info = wxinfo;
                    }
                }
                else if (phoneInfo && visitorinfo) {
                    if (phoneInfo["time"] > visitorinfo["time"]) {
                        info = phoneInfo;
                    }
                    else {
                        info = visitorinfo;
                    }
                }
                return info;
            };
            //得到缓存里最后登录的手机账号密码  info为空就是没有   info   account password time
            AccountData.getLastPhoneAccount = function () {
                var phoneinfo = AccountData.loginInfo;
                if (!phoneinfo) {
                    return null;
                }
                var time = 0;
                var info;
                for (var i in phoneinfo) {
                    if (phoneinfo[i]["time"] > time) {
                        time = phoneinfo[i]["time"];
                        info = phoneinfo[i];
                    }
                }
                return info;
            };
            Object.defineProperty(AccountData, "isNeedAutomaticLogin", {
                get: function () {
                    var result = egret.localStorage.getItem("AccountData_isNeedAutomaticLogin");
                    if (result) {
                        return result;
                    }
                    else {
                        return "1";
                    }
                },
                //需不需要自动登录  1是不需要  2是需要
                set: function (str) {
                    egret.localStorage.setItem("AccountData_isNeedAutomaticLogin", str);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccountData, "loginData", {
                get: function () {
                    return texas.CacheData.getRAMData("loginData");
                },
                //登录消息
                set: function (data) {
                    texas.CacheData.saveRAMData("loginData", data);
                },
                enumerable: true,
                configurable: true
            });
            return AccountData;
        }());
        texas.AccountData = AccountData;
        __reflect(AccountData.prototype, "kelvin.texas.AccountData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var CacheData = (function () {
            function CacheData() {
            }
            CacheData.getRAMData = function (key) {
                return CacheData._ramDatas[key];
            };
            CacheData.saveRAMData = function (key, data) {
                CacheData._ramDatas[key] = data;
            };
            CacheData.removeRAMData = function (key) {
                delete CacheData._ramDatas[key];
            };
            CacheData.clearRAMData = function () {
                CacheData._ramDatas = {};
            };
            CacheData._ramDatas = {};
            return CacheData;
        }());
        texas.CacheData = CacheData;
        __reflect(CacheData.prototype, "kelvin.texas.CacheData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MatchConfig = (function () {
            function MatchConfig() {
                /** 比赛种类(1-普通比赛 2-wcaa) */
                this.type1 = 1;
                /** 单个玩家可买入次数 */
                this.player_buy_count = 5;
                /** 每一桌的最大人数 */
                this.table_people = 9;
                /** 牌力分占比 */
                this.poker_score_rate = 0.3;
                /** 休息间隔 -1 表示不休息*/
                this.break_interval = -1;
                /** 休息时长 */
                this.break_time_long = 0;
                /** 场馆系数 */
                this.stage_rate = 1;
                /** 服务费-金币 */
                this.service_gold = 0;
                /** 服务费-积分 */
                this.service_score = 0;
                /** 思考时间 */
                this.think_time = 30;
                /** 奖励类型 1-积分 2-金币 */
                this.reward_type = 1;
                /** 门票配置 id */
                this.ticket_cfgId = -1;
                /** 当前报名人数 */
                this.people = 0;
                /** 当前奖池 */
                this.reward = 0;
                /** 已经分发的牌力分 */
                this.reward_poker_score = 0;
                /** 当前买入次数 */
                this.cur_buy_count = 0;
                /** 开始时间戳 */
                this.match_start_time = 0;
                /** 当前盲注等级 */
                this.mz_level = 1;
                /** 比赛状态(0报名中，1进行中，2休息中) */
                this.state = 0;
                /** 休息次数 */
                this.break_count = 0;
                /** 上一次休息结束的时间 */
                this.last_break_end_time = 0;
                /** 等待休息的房间数量 */
                this.break_room_count = 0;
                /** 休息的开始时间 */
                this.break_start_time = -1;
                /** 进入休息状态的时间戳 */
                this.break_state_time = -1;
                /** 总共休息的时常 */
                this.break_total_time = 0;
                /**当前被淘汰的人 */
                this.over_people = 0;
                /** 桌号 */
                this.cur_table_num = 0;
                /** 钱圈 */ //0是没有 1是有
                this.inMoneyCircle = 0;
                /** 大师分 id */
                this.master_points_id = -1;
                /**标题id */
                this.title_id = 0;
                /** 循环赛 1是 0否 */
                this.satellite = 0;
            }
            return MatchConfig;
        }());
        texas.MatchConfig = MatchConfig;
        __reflect(MatchConfig.prototype, "kelvin.texas.MatchConfig");
        // match_state_wait = 0;//未开始 
        // match_state_game = 1;//进行中
        // match_state_reset = 2;//休息中
        // match_state_fail = 4; //比赛开启失败
        // match_state_stop = 5;//人为终止比赛 
        // match_state_over = 6;//比赛结束
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 * 比赛数据缓存
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MatchData = (function () {
            function MatchData() {
            }
            MatchData.getNowMatchId = function () {
                return texas.CacheData.getRAMData("NowMatchId");
            };
            MatchData.putNowMatchId = function (id) {
                texas.CacheData.saveRAMData("NowMatchId", id);
            };
            //个人道具的缓存
            MatchData.getUserPropInfo = function () {
                return texas.CacheData.getRAMData("UserPropInfo");
            };
            MatchData.putUserPropInfo = function (data) {
                texas.CacheData.saveRAMData("UserPropInfo", data);
            };
            return MatchData;
        }());
        texas.MatchData = MatchData;
        __reflect(MatchData.prototype, "kelvin.texas.MatchData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Mzconfig = (function () {
            function Mzconfig() {
            }
            return Mzconfig;
        }());
        texas.Mzconfig = Mzconfig;
        __reflect(Mzconfig.prototype, "kelvin.texas.Mzconfig");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PhoneData = (function () {
            function PhoneData() {
            }
            Object.defineProperty(PhoneData, "phoneNumber", {
                get: function () {
                    return texas.CacheData.getRAMData("PhoneData_phoneNumber");
                },
                set: function (data) {
                    texas.CacheData.saveRAMData("PhoneData_phoneNumber", data);
                },
                enumerable: true,
                configurable: true
            });
            return PhoneData;
        }());
        texas.PhoneData = PhoneData;
        __reflect(PhoneData.prototype, "kelvin.texas.PhoneData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Role = (function () {
            function Role() {
                /** 性别 */
                this.sex = 0;
                /** 金币数量 */
                this.gold = 0;
                /** 积分 */
                this.scores = 0;
            }
            return Role;
        }());
        texas.Role = Role;
        __reflect(Role.prototype, "kelvin.texas.Role");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RoleData = (function () {
            function RoleData() {
            }
            // private static _updateOnLineTimeId = -1;//更新在线时间的定时器id
            // private static _updateOnlineTimeSec;//登陆时间戳
            RoleData.getRole = function () {
                return texas.CacheData.getRAMData("role");
            };
            RoleData.putRole = function (role) {
                texas.CacheData.saveRAMData("role", role);
                // if(RoleData._updateOnLineTimeId == -1){
                // 	RoleData._updateOnlineTimeSec = Math.round(new Date().getTime()/1000);
                // 	RoleData._updateOnLineTimeId = egret.setInterval(function():void{
                // 		let onLineTime = RoleData.getOnlineTime();
                // 		let time = Math.round(new Date().getTime()/1000);
                // 		RoleData._updateOnlineTimeSec = time;
                // 	},RoleData,1000);
                // }
            };
            RoleData.getRoleName = function (uid) {
                return texas.CacheData.getRAMData("roleNamesCache:" + uid);
            };
            RoleData.putRoleName = function (uid, name) {
                texas.CacheData.saveRAMData("roleNamesCache:" + uid, name);
            };
            RoleData.putRolePrizeInfo = function (data) {
                texas.CacheData.saveRAMData("RolePrizeInfo", data);
            };
            RoleData.getRolePrizeInfo = function () {
                return texas.CacheData.getRAMData("RolePrizeInfo");
            };
            /**
             * 更新玩家金币,会派发更新界面显示金币的事件
             */
            RoleData.updateRoleGold = function (gold) {
                RoleData.getRole().gold = gold;
                texas.EventManager.dispatchCmd(texas.Events.refreshShowGold, gold);
            };
            /**
             * 保存玩家在线时长
             */
            RoleData.updateOnLineTime = function (time) {
                texas.CacheData.saveRAMData("onlineTime", parseInt(time.toString()));
            };
            RoleData.getOnlineTime = function () {
                return texas.CacheData.getRAMData("onlineTime");
            };
            return RoleData;
        }());
        texas.RoleData = RoleData;
        __reflect(RoleData.prototype, "kelvin.texas.RoleData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Room = (function () {
            function Room() {
                /** 最大计分牌 */
                this.maxScore = -1;
                /** 最小计分牌 */
                this.minScore = -1;
                /** 是否已经准备开始游戏 */
                this.ready = true;
                /** 桌号 */
                this.table_num = 0;
            }
            return Room;
        }());
        texas.Room = Room;
        __reflect(Room.prototype, "kelvin.texas.Room");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RoomData = (function () {
            function RoomData() {
            }
            RoomData.getCurrentRoom = function () {
                return texas.CacheData.getRAMData("currentRoom");
            };
            RoomData.putCurrentRoom = function (room) {
                texas.CacheData.saveRAMData("currentRoom", room);
            };
            /**
             * 保存当前房间中的玩家数据
             */
            RoomData.saveRoles = function (roles) {
                texas.CacheData.saveRAMData("currentRoom_roles", roles);
            };
            /**
             * 获取当前房间中的所有角色
             */
            RoomData.getRoles = function () {
                return texas.CacheData.getRAMData("currentRoom_roles");
            };
            /**
             * 保存一个玩家信息到房间角色列表
             */
            RoomData.saveRole = function (role) {
                var roles = RoomData.getRoles();
                if (roles == null) {
                    roles = {};
                }
                roles[role.uid] = role;
                RoomData.saveRoles(roles);
            };
            /**
             * 获取当前房间的某个角色
             */
            RoomData.getRole = function (uid) {
                var roles = RoomData.getRoles();
                if (roles == null) {
                    return null;
                }
                return roles[uid];
            };
            Object.defineProperty(RoomData, "recordChooseZoneAndGame", {
                get: function () {
                    var arr = texas.CacheData.getRAMData("recordChooseZoneAndGame");
                    // let arr = JSON.parse(egret.localStorage.getItem("recordChooseZoneAndGame"));
                    if (!arr) {
                        arr = [null, null];
                    }
                    return arr;
                },
                /**
                 * 记录休闲区和竞技区和相应游戏的选择   数组, 0位是大区,1位是游戏
                 */
                set: function (arr) {
                    texas.CacheData.saveRAMData("recordChooseZoneAndGame", arr);
                    // egret.localStorage.setItem("recordChooseZoneAndGame", JSON.stringify(arr));
                },
                enumerable: true,
                configurable: true
            });
            return RoomData;
        }());
        texas.RoomData = RoomData;
        __reflect(RoomData.prototype, "kelvin.texas.RoomData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 * 记录一些时间点
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var TimeData = (function () {
            function TimeData() {
            }
            Object.defineProperty(TimeData, "noticeTime", {
                get: function () {
                    var num = egret.localStorage.getItem("TimeData_noticeTime");
                    if (num == null) {
                        num = "0";
                    }
                    return Number(num);
                },
                //公告被关闭的当天时间的0点时间戳
                set: function (num) {
                    egret.localStorage.setItem("TimeData_noticeTime", String(num));
                },
                enumerable: true,
                configurable: true
            });
            return TimeData;
        }());
        texas.TimeData = TimeData;
        __reflect(TimeData.prototype, "kelvin.texas.TimeData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var User = (function () {
            function User() {
            }
            return User;
        }());
        texas.User = User;
        __reflect(User.prototype, "kelvin.texas.User");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * 声音的数据缓存
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var VoiceData = (function () {
            function VoiceData() {
            }
            Object.defineProperty(VoiceData, "musicNum", {
                //得到音乐大小ps: 0是关闭   1是打开
                get: function () {
                    var num = egret.localStorage.getItem("VoiceData_musicNum");
                    if (num == null) {
                        num = "1";
                    }
                    // console.log("设置消息开关：", num);
                    return Number(num);
                },
                set: function (num) {
                    egret.localStorage.setItem("VoiceData_musicNum", String(num));
                    // console.log("设置消息开关：", num);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(VoiceData, "soundNum", {
                //得到音效大小ps: 0是关闭   1是打开 
                get: function () {
                    var num = egret.localStorage.getItem("VoiceData_soundNum");
                    if (num == null) {
                        num = "1";
                    }
                    // console.log("设置游戏开关：", num);
                    return Number(num);
                },
                set: function (num) {
                    egret.localStorage.setItem("VoiceData_soundNum", String(num));
                    // console.log("设置游戏开关：", num);
                },
                enumerable: true,
                configurable: true
            });
            return VoiceData;
        }());
        texas.VoiceData = VoiceData;
        __reflect(VoiceData.prototype, "kelvin.texas.VoiceData");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        /**
         * 游戏主体
         */
        var ExtGame = (function (_super) {
            __extends(ExtGame, _super);
            function ExtGame() {
                return _super.call(this) || this;
            }
            /** 初始化房间 */
            ExtGame.prototype.onInit = function () {
                texas.Log.log("ExtGame ---> onInit");
            };
            /** 根据录像来初始化游戏 */
            ExtGame.prototype.onInitByMovie = function (movie) {
            };
            /** 有玩家加入房间 */
            ExtGame.prototype.onJoinRoom = function (data) {
                texas.Log.log("ExtGame ---> onJoinRoom");
            };
            /** 玩家返回游戏 */
            ExtGame.prototype.onReturnGame = function (data) {
                texas.Log.log("ExtGame ---> onReturnGame");
            };
            /** 有玩家离开房间 */
            ExtGame.prototype.onLeaveRoom = function (data) {
                texas.Log.log("ExtGame ---> onLeaveRoom");
            };
            /** 玩家离线 */
            ExtGame.prototype.onLeaveGame = function (data) {
                texas.Log.log("ExtGame ---> onLeaveGame");
            };
            /** 解散房间 */
            ExtGame.prototype.onDisbandRoom = function (data) {
                texas.Log.log("ExtGame ---> onDisbandRoom");
            };
            /** 收到游戏消息 */
            ExtGame.prototype.onGameMessage = function (data) {
                texas.Log.log("ExtGame ---> onGameMessage");
            };
            /** 收到余额不足，被迫离开房间的消息 */
            ExtGame.prototype.onLeaveRoomByJoinMoneyError = function (data) {
                texas.Log.log("ExtGame ---> onLeaveRoomByJoinMoneyError");
            };
            /** 返回游戏自定义背景 */
            ExtGame.prototype.getBackGround = function () {
                return null;
            };
            /** 当界面大小变化 触发重新布局的操作 */
            ExtGame.prototype.layout = function () {
                texas.Log.log("ExtGame ---> layout");
            };
            /**获取游戏版本号 */
            ExtGame.prototype.getGameVersion = function () {
                return "";
            };
            /** 销毁游戏 */
            ExtGame.prototype.dispose = function () {
                texas.Log.log("ExtGame ---> dispose");
            };
            return ExtGame;
        }(egret.DisplayObjectContainer));
        texas.ExtGame = ExtGame;
        __reflect(ExtGame.prototype, "kelvin.texas.ExtGame");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ExtGameBackground = (function (_super) {
            __extends(ExtGameBackground, _super);
            function ExtGameBackground() {
                return _super.call(this) || this;
            }
            ExtGameBackground.prototype.getStageWidth = function () {
                return texas.App.stageWidth;
            };
            ExtGameBackground.prototype.getStageHeight = function () {
                return texas.App.stageHeight;
            };
            return ExtGameBackground;
        }(texas.BasePanel));
        texas.ExtGameBackground = ExtGameBackground;
        __reflect(ExtGameBackground.prototype, "kelvin.texas.ExtGameBackground");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ExtGameHelper = (function () {
            function ExtGameHelper() {
            }
            ExtGameHelper.getRAMData = function (key) {
                return ExtGameHelper._ramDatas[key];
            };
            ExtGameHelper.saveRAMData = function (key, data) {
                ExtGameHelper._ramDatas[key] = data;
            };
            ExtGameHelper.removeRAMData = function (key) {
                delete ExtGameHelper._ramDatas[key];
            };
            ExtGameHelper.clearRAMData = function () {
                ExtGameHelper._ramDatas = {};
            };
            /**
             * 初始化
             */
            ExtGameHelper.init = function () {
            };
            /**
             * 退出游戏界面
             */
            ExtGameHelper.exitExtGamePanel = function () {
                // App.setOrientationMode(egret.OrientationMode.LANDSCAPE);
                lzm.Alert.closeAllAlert();
                ExtGameHelper.removePopupPanle();
                // ExtGameHelper.clearRAMData();
                // if (ExtGameHelper.exitBackPanelClass == null) {
                if (ExtGameHelper.extGamePanel) {
                    // ExtGameHelper.extGamePanel.gotoPanel(new MainPanel());
                    ExtGameHelper.extGamePanel.dispose();
                    ExtGameHelper.homePanel.visible = true;
                    // ExtGameHelper.homePanel.x = 0;
                }
                else {
                    // ExtGameHelper.homePanel.gotoPanel(new MainPanel());
                    ExtGameHelper.homePanel.visible = true;
                    // ExtGameHelper.homePanel.x = 0;
                }
                // } else {
                // 	let clazz = ExtGameHelper.exitBackPanelClass;
                // 	if (ExtGameHelper.extGamePanel) {
                // 		ExtGameHelper.extGamePanel.gotoPanel(new clazz());
                // 	} else {
                // 		ExtGameHelper.homePanel.gotoPanel(new clazz());
                // 	}
                // }
                ExtGameHelper.isneedPop = true;
                ExtGameHelper.extGamePanel = null;
                texas.EventManager.dispatchCmd(texas.Events.backGame, null);
            };
            /**
             * 进入游戏界面
             */
            ExtGameHelper.joinExtGamePanel = function () {
                if (!ExtGameHelper.extGamePanel) {
                    ExtGameHelper.homePanel.visible = false;
                    ExtGameHelper.extGamePanel = new texas.GamePanel();
                    texas.Starup.stageSp.gameSp.addChild(ExtGameHelper.extGamePanel);
                }
            };
            /**
             * 离开房间
             */
            ExtGameHelper.leaveRoom = function () {
                // TipPanel.create("您确定要离开房间吗？",ExtGameHelper,ExtGameHelper._leaveRoom);
                ExtGameHelper._leaveRoom();
            };
            /**
             * 解散房间
             */
            ExtGameHelper.disbandRoom = function () {
                // TipPanel.create("您确定要离开房间吗？",ExtGameHelper,ExtGameHelper._leaveRoom);
                ExtGameHelper._leaveRoom();
            };
            /**
             * 离开房间确认按钮之后调用
             */
            ExtGameHelper._leaveRoom = function () {
                texas.RoomApi.leaveGame(function (data) {
                    ExtGameHelper.exitExtGamePanel();
                });
            };
            /**
             * 向游戏发送数据
             */
            ExtGameHelper.sendGameMessage = function (data, finishOnClient) {
                if (finishOnClient === void 0) { finishOnClient = false; }
                texas.RoomApi.gameMessage(data, finishOnClient);
            };
            /**
             * 弹窗弹窗
             * @param ui 需要弹出的容器
             */
            ExtGameHelper.popAnyView = function (ui) {
                lzm.Alert.alert(ui);
            };
            /**
             * 得到游戏的缩放倍数
             *
             */
            ExtGameHelper.getGameScalex = function () {
                var sx = texas.App.stageWidth / texas.App.designWidth;
                var sy = texas.App.stageHeight / texas.App.designHeight;
                if (sx > sy) {
                    return sy;
                }
                else {
                    return sx;
                }
            };
            ExtGameHelper.showMatchBtn = function (x, y, matchid, callback, error) {
                if (this.matchBtn) {
                    texas.Tool.removeFromParent(this.matchBtn);
                }
                this.matchBtn = new texas.GameMatchBtn(matchid, callback, error);
                texas.Starup.stageSp.popupSp.addChild(this.matchBtn);
                this.matchBtn.x = x;
                this.matchBtn.y = y;
                return this.matchBtn;
            };
            /**
         * 隐藏我的比赛按钮
         */
            ExtGameHelper.hideMatchBtn = function () {
                if (this.matchBtn) {
                    texas.Tool.removeFromParent(this.matchBtn);
                }
            };
            /**
         *
         * 调用我的赛事弹窗
         *
         * @param  callback    点击返回场次回调的函数，数据会传进去
         *
         */
            ExtGameHelper.popMyMatchView = function (matchid, callback, error) {
                var view = new texas.GameMatchView(matchid, callback, error);
                texas.Starup.stageSp.popupSp.addChild(view);
                ExtGameHelper.popupPanelArr.push(view);
                view.show();
            };
            /**
         *
         * 调用实时战绩弹窗
         * @param  roomid   当前房间的id
         * @param  callback    点击返回场次回调的函数，数据会传进去
         * @param  cardData   牌局回顾的数据
         */
            ExtGameHelper.popGameRankView = function (matchid, roomid, cardData, watchPeople) {
                var view = new texas.GameRankView(matchid, roomid, cardData, watchPeople);
                texas.Starup.stageSp.popupSp.addChild(view);
                ExtGameHelper.popupPanelArr.push(view);
                view.show();
            };
            /**
             * 调用赛事详情弹窗
             * @param matchid 比赛id
             * @param reward  当前奖池
             * @param min_reward  保底奖励
             * @param mz_level  当前盲注等级
             * @param iswatch  0是操作玩家   1是观战玩家
             * @param  apply_max_mz_level    报名截止盲注等级
             */
            ExtGameHelper.popGameSsxqView = function (matchid, reward, min_reward, mz_level, iswatch, apply_max_mz_level) {
                var view = new texas.GameBsqxView(matchid, reward, min_reward, mz_level, iswatch, apply_max_mz_level);
                texas.Starup.stageSp.popupSp.addChild(view);
                ExtGameHelper.popupPanelArr.push(view);
                view.show();
            };
            /**
             * 弹窗出指定面板
             * @param view 要弹出的面板
             * @param animatypes //1 从左边出来     2 从右边出来   3从上面出来
             * @param animatypee  //1往左边回去   2往右边回去    3往上面回去
             */
            ExtGameHelper.popAppointPanel = function (view, animatypes, animatypee, alpha) {
                if (alpha === void 0) { alpha = 0.7; }
                var ui = new texas.PopupContainer(view);
                texas.Starup.stageSp.popupSp.addChild(ui);
                ExtGameHelper.popupPanelArr.push(view);
                ui.show(animatypes, animatypee, alpha);
            };
            ExtGameHelper.removePopupPanle = function () {
                for (var i = 0; i < ExtGameHelper.popupPanelArr.length; i++) {
                    ExtGameHelper.popupPanelArr[i].dispose();
                }
                ExtGameHelper.popupPanelArr = [];
            };
            /**
             *
             * 隐藏房间匹配弹窗
             */
            ExtGameHelper.hideRoomWaitUI = function () {
                if (texas.WaitRoomUI.waitRoomUI) {
                    texas.WaitRoomUI.waitRoomUI.hide();
                }
            };
            /**
             * 弹出填写获奖信息的弹窗
             * @param  callback弹唱关闭的时候回调
             */
            ExtGameHelper.popGetPrize = function (callback) {
                lzm.Alert.alert(new texas.GetPrizeView(callback, true));
            };
            /**
             * 判断是否填写过
             * @return true是填过  false 是没填过
             */
            ExtGameHelper.isSetPrizeInfo = function () {
                if (texas.RoleData.getRolePrizeInfo()) {
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             *
             * 是否可以报名
             * @param starttime  比赛开始时间  ps:09:00:00  apply_time
             * @param endtime  比赛结束时间 ps:18:00:00   apply_time_end
             * @param dealytime 延迟时间  单位是秒  3600    apply_delay_time
             * @param signmoney  报名费用  apply_gold
             * @param  nowmz 当前的盲注等级  mz_level
             * @param  maxmz  报名截止最大的盲注等级   apply_max_mz_level
             * @param apply_score 报名所需积分  apply_score
             * @param maxapplypeople 最大报名人数  apply_max_people
             * @param nowapplypeople  当前报名人数  people
             * @return  number   0是可以报名  1 金币不够报名   2积分不够报名  3当前盲注等级过大，不能报名 4 当前尚未到报名时间,不能报名  5 比赛时间已过，不能报名   6 报名人数已满   7奖励圈人数已定
             */
            ExtGameHelper.isCansignup = function (data) {
                var matchid = data.id;
                var starttime = data.apply_time;
                var endtime = data.apply_time_end;
                var dealytime = data.apply_delay_time;
                var signmoney = data.apply_gold;
                var apply_score = data.apply_score;
                var nowmz = data.mz_level;
                var maxmz = data.apply_max_mz_level;
                var maxapplypeople = data.apply_max_people;
                var nowapplypeople = data.people;
                var service_gold = data.service_gold;
                var service_score = data.service_score;
                var nowtime = new Date().getTime();
                var result = true;
                if (texas.RoleData.getRole().gold < signmoney + service_gold) {
                    texas.Log.log("金币不够报名");
                    return 1;
                }
                if (texas.RoleData.getRole().scores < apply_score + service_score) {
                    texas.Log.log("积分不够报名");
                    return 2;
                }
                if (nowmz > maxmz) {
                    texas.Log.log("当前盲注等级过大，不能报名");
                    return 3;
                }
                var myDate = new Date();
                var nowDate = texas.DateUtils.formatDate(myDate);
                var timestrstart = nowDate + " " + starttime;
                var timestampstart = new Date(timestrstart).getTime();
                if (nowtime < timestampstart) {
                    texas.Log.log('当前尚未到报名时间,不能报名');
                    return 4;
                }
                var timestrend = nowDate + " " + endtime;
                var timestampend = new Date(timestrend).getTime() + dealytime * 1000;
                if (nowtime > timestampend) {
                    texas.Log.log("比赛时间已过，不能报名");
                    return 5;
                }
                // if (maxapplypeople > 0) {
                // 	if (nowapplypeople >= maxapplypeople) {
                // 		Log.log("报名人数已满");
                // 		return 6;
                // 	}
                // }
                if (data.inMoneyCircle == 1) {
                    texas.Log.log("奖励圈已经确定无法报名");
                    return 7;
                }
                return 0;
            };
            /**
             * 弹窗报名费不足的提示
             * @param type  1是金币不足，2是积分不足
             */
            ExtGameHelper.popApplyFailMsg = function (type) {
                lzm.Alert.alert(new texas.ApplyPrompt(type));
            };
            /**
             *
             * 重新报名
             * rebuy
             * @param id 比赛id
             * @param  error  错误回调函数
             */
            ExtGameHelper.rebuy = function (id, error) {
                texas.MatchApi.apply(String(id), function () {
                    texas.MatchApi.getPlayerProps(null);
                    lzm.Alert.alert(new texas.WaitRoomUI(id));
                }, error);
            };
            /**
             * 是否能用门票报名
             * @param cfgid ticket_cfgId
             * @return string  "xx"可以  ""是不可以
             */
            ExtGameHelper.isUsePropApply = function (cfgid, callback) {
                var serverdata = texas.MatchData.getUserPropInfo();
                var libdataArr = [];
                for (var k in serverdata.data) {
                    for (var i in serverdata.data[k]) {
                        var libdata = serverdata.data[k][i];
                        if (libdata.cfgId == cfgid) {
                            libdataArr.push(libdata);
                        }
                    }
                }
                var configs;
                for (var k in serverdata.configs) {
                    if (serverdata.configs[k].cfgId == cfgid) {
                        configs = serverdata.configs[k];
                    }
                }
                if (!configs) {
                    egret.warn("门票道具配置出错");
                    return "";
                }
                var ishave = "";
                var nowTime = new Date().getTime();
                for (var i = 0; i < libdataArr.length; i++) {
                    if (libdataArr[i].type == 0) {
                        if (nowTime <= libdataArr[i].get_time * 1000 + configs.expirationDate * 1000) {
                            ishave = configs.name;
                            break;
                        }
                    }
                }
                return ishave;
            };
            ExtGameHelper._ramDatas = {};
            /**
             * 是否需要退出界面
             */
            ExtGameHelper.isneedPop = true;
            /**
             * 移除所有弹窗
             *
             *
             */
            ExtGameHelper.popupPanelArr = [];
            return ExtGameHelper;
        }());
        texas.ExtGameHelper = ExtGameHelper;
        __reflect(ExtGameHelper.prototype, "kelvin.texas.ExtGameHelper");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var AppWx = (function (_super) {
            __extends(AppWx, _super);
            function AppWx() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AppWx.init = function () {
                egret.ExternalInterface.addCallback("onWxResp", AppWx.onWxResp);
                texas.NativeBase.registerCmd("onWxResp", AppWx.onWxResp, null);
                window["callJS"] = function (funcName, data) {
                    if (data) {
                        data = JSON.parse(data);
                        data.ios = true;
                        data = JSON.stringify(data);
                    }
                    texas.NativeBase.dispatchCmd(funcName, data);
                };
                AppWx.registerApp(texas.AppConfig.wxAppId);
            };
            AppWx.onWxResp = function (objs) {
                texas.Log.log("onWxResp:" + objs);
                objs = JSON.parse(objs);
                if (objs["type"] == 1) {
                    texas.NetworkLoading.show(true);
                    var params = { "code": objs["code"] };
                    lzm.HttpClient.send(texas.AppConfig.wxApiUrl, params, function (str) {
                        var obj = { "loginData": JSON.parse(str), "time": Math.round(new Date().getTime() / 1000) };
                        egret.localStorage.setItem("login_cat_wx_data", JSON.stringify(obj));
                        texas.NativeBase.dispatchCmd("wxLoginCallBack", JSON.parse(str));
                    });
                    texas.NetworkLoading.hide();
                }
            };
            AppWx.registerApp = function (appId) {
                var objs = {};
                objs["clazz"] = AppWx.clazz;
                objs["method"] = "registerApp";
                objs["appId"] = appId;
                objs["universalLink"] = texas.AppConfig.universalLink;
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            AppWx.login = function () {
                var data = JSON.parse(egret.localStorage.getItem("login_cat_wx_data"));
                if (data == null || parseInt(data.time) + 24 * 60 * 60 <= Math.round(new Date().getTime() / 1000)) {
                    var objs = {};
                    objs["clazz"] = AppWx.clazz;
                    objs["method"] = "login";
                    egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                    window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
                }
                else {
                    texas.NativeBase.dispatchCmd("wxLoginCallBack", data.loginData);
                }
            };
            AppWx.shareWxImage = function (imageObject, scene) {
                if (scene === void 0) { scene = "session"; }
                var renderTexture = new egret.RenderTexture();
                renderTexture.drawToTexture(imageObject, new egret.Rectangle(0, 0, imageObject.width, imageObject.height));
                var imgData = renderTexture.toDataURL("image/png", new egret.Rectangle(0, 0, imageObject.width, imageObject.height));
                var objs = {};
                objs["clazz"] = AppWx.clazz;
                objs["method"] = "shareWxImage";
                objs["scene"] = scene;
                objs["imageData"] = imgData;
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            AppWx.clazz = "com.kelvin.WXConstant";
            return AppWx;
        }(texas.NativeBase));
        texas.AppWx = AppWx;
        __reflect(AppWx.prototype, "kelvin.texas.AppWx");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var lzm;
(function (lzm) {
    var SwipeGestures = (function (_super) {
        __extends(SwipeGestures, _super);
        function SwipeGestures(target, callBack) {
            if (callBack === void 0) { callBack = null; }
            var _this = _super.call(this, target, callBack) || this;
            _this.is_over = true; //是否结束
            return _this;
        }
        SwipeGestures.prototype.checkGestures = function (touch) {
            if (touch.type == egret.TouchEvent.TOUCH_BEGIN) {
                this._downPoint = touch.stagePoint;
                this._downTime = Math.round(new Date().getTime() / 1000);
                this.is_over = false;
            }
            else if (touch.type == egret.TouchEvent.TOUCH_MOVE) {
                if (this._downPoint == null) {
                    this._downPoint = touch.stagePoint;
                    this._downTime = Math.round(new Date().getTime() / 1000);
                    // this.is_over = false;
                }
                if (this.is_over == true) {
                    return;
                }
                if (this._downPoint == null)
                    return;
                var timeDis = Math.round(new Date().getTime() / 1000) - this._downTime;
                var releasePoint = touch.stagePoint;
                //trace("时间差：", timeDis);
                if (SwipeGestures.DISTIME < timeDis)
                    return;
                var xDis = releasePoint.x - this._downPoint.x;
                var yDis = releasePoint.y - this._downPoint.y;
                if (Math.abs(xDis) > Math.abs(yDis)) {
                    if (Math.abs(xDis) > SwipeGestures.DIS && this._callBack != null) {
                        this._callBack(xDis > 0 ? SwipeGestures.RIGHT : SwipeGestures.LEFT);
                        this._downPoint = null;
                        this.is_over = true;
                    }
                }
                else {
                    if (Math.abs(yDis) > SwipeGestures.DIS && this._callBack != null) {
                        this._callBack(yDis > 0 ? SwipeGestures.DOWN : SwipeGestures.UP);
                        this._downPoint = null;
                        this.is_over = true;
                    }
                }
            }
            else if (touch.type == egret.TouchEvent.TOUCH_END || touch.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
                // if (this._downPoint == null) return;
                // let timeDis: number = Math.round(new Date().getTime() / 1000) - this._downTime;
                // let releasePoint: egret.Point = touch.stagePoint;
                // //trace("时间差：", timeDis);
                // if (SwipeGestures.DISTIME < timeDis) return;
                // let xDis: number = releasePoint.x - this._downPoint.x;
                // let yDis: number = releasePoint.y - this._downPoint.y;
                // if (Math.abs(xDis) > Math.abs(yDis)) {
                // 	if (Math.abs(xDis) > SwipeGestures.DIS && this._callBack != null)
                // 		this._callBack(xDis > 0 ? SwipeGestures.RIGHT : SwipeGestures.LEFT);
                // } else {
                // 	if (Math.abs(yDis) > SwipeGestures.DIS && this._callBack != null)
                // 		this._callBack(yDis > 0 ? SwipeGestures.DOWN : SwipeGestures.UP);
                // }
                this._downPoint = null;
                this.is_over = true;
            }
        };
        SwipeGestures.UP = "up";
        SwipeGestures.DOWN = "down";
        SwipeGestures.LEFT = "left";
        SwipeGestures.RIGHT = "right";
        SwipeGestures.DISTIME = 100;
        SwipeGestures.DIS = 20;
        return SwipeGestures;
    }(lzm.Gestures));
    lzm.SwipeGestures = SwipeGestures;
    __reflect(SwipeGestures.prototype, "lzm.SwipeGestures");
})(lzm || (lzm = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NativeTools = (function () {
            function NativeTools() {
            }
            NativeTools.init = function () {
                egret.ExternalInterface.addCallback("onGetCopy", NativeTools.onCopy);
                egret.ExternalInterface.addCallback("onAppUpdate", NativeTools.onAppUpdate);
            };
            NativeTools.openUrl = function (url) {
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "openUrl";
                objs["url"] = url;
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            NativeTools.copy = function (content) {
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "copy";
                objs["content"] = content;
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            NativeTools.chageOriention = function (landScape) {
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "chageOriention";
                objs["landScape"] = landScape;
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            NativeTools.hideLoading = function () {
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "hideLoading";
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
            };
            NativeTools.openWeixin = function () {
                if (texas.App.isAndroid()) {
                    var objs = {};
                    objs["clazz"] = NativeTools.clazz;
                    objs["method"] = "openWeixin";
                    egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                }
                else {
                    window.open("weixin://");
                }
            };
            NativeTools.openZhifubao = function () {
                if (texas.App.isAndroid()) {
                    var objs = {};
                    objs["clazz"] = NativeTools.clazz;
                    objs["method"] = "openZhifubao";
                    egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                }
                else {
                    window.open("alipay://");
                }
            };
            NativeTools.getCopy = function () {
                NativeTools.copyString = "";
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "getCopy";
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
            };
            NativeTools.onCopy = function (data) {
                texas.Log.log("copyData:" + data);
                data = JSON.parse(data);
                NativeTools.copyString = data.copyString;
            };
            NativeTools.appUpdate = function () {
                var objs = {};
                objs["clazz"] = NativeTools.clazz;
                objs["method"] = "appUpdate";
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                egret.ExternalInterface.addCallback("onAppUpdate", NativeTools.onAppUpdate.bind(NativeTools));
            };
            NativeTools.onAppUpdate = function (data) {
                texas.NativeBase.dispatchCmd("onAppUpdate", data);
            };
            NativeTools.clazz = "com.kelvin.NativeTools";
            NativeTools.copyString = "";
            return NativeTools;
        }());
        texas.NativeTools = NativeTools;
        __reflect(NativeTools.prototype, "kelvin.texas.NativeTools");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Openinstall = (function () {
            function Openinstall() {
            }
            Openinstall.init = function () {
                egret.ExternalInterface.addCallback("onOpeninstallParams", Openinstall.onOpeninstallParams);
            };
            Openinstall.getRegisterParams = function () {
                var objs = {};
                objs["clazz"] = Openinstall.clazz;
                objs["method"] = "getRegisterParams";
                egret.ExternalInterface.call("callNative", JSON.stringify(objs));
                window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.callNative.postMessage(JSON.stringify(objs));
                if (texas.App.isWeiDuan()) {
                    Openinstall.timeoutId = egret.setTimeout(function () {
                        texas.Log.log("再次拉取登陆参数");
                        Openinstall.getRegisterParams();
                    }, Openinstall, 10000); //10秒后再次请求
                }
            };
            Openinstall.onOpeninstallParams = function (objs) {
                egret.clearInterval(Openinstall.timeoutId);
                var dataObj = JSON.parse(objs);
                var data = dataObj.data;
                if (data == null) {
                    return;
                }
                if (texas.App.isWeiDuan() && texas.App.isAndroid() && (typeof (data) == "string")) {
                    data = JSON.parse(data);
                }
                if (data.recommend) {
                    //同步推荐者
                    if (texas.RoleData.getRole().recommend == null) {
                        var par2 = { "api": "role", "c": "syncRecommend", "recommend": data.recommend };
                        texas.BaseApi.requestLogic(par2, null, null);
                    }
                }
            };
            Openinstall.clazz = "com.k.zj.OpenInstallConstant";
            Openinstall.timeoutId = -1;
            return Openinstall;
        }());
        texas.Openinstall = Openinstall;
        __reflect(Openinstall.prototype, "kelvin.texas.Openinstall");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var lzm;
(function (lzm) {
    var Touch = (function () {
        function Touch() {
        }
        return Touch;
    }());
    lzm.Touch = Touch;
    __reflect(Touch.prototype, "lzm.Touch");
})(lzm || (lzm = {}));
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
 * 分页面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PagePanel = (function (_super) {
            __extends(PagePanel, _super);
            function PagePanel(titleH, singleH) {
                var _this = _super.call(this) || this;
                _this.isJuge = true;
                //分页的标题
                _this.pageTitleData = {};
                _this.scrollViewVs = {};
                _this.titleArr = [];
                _this.titleH = titleH;
                _this.singleH = singleH;
                _this.init();
                _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
                return _this;
            }
            PagePanel.prototype.init = function () {
                this.scrollViewH = new texas.ScrollView();
                this.scrollViewH.scrollPolicyH = 'off';
                this.scrollViewH.scrollPolicyV = 'off';
                this.scrollViewH.bounces = false;
                this.scrollViewH.throwSpeed = 0;
                this.addChild(this.scrollViewH);
                this.titleContainer = new texas.ScrollView();
                this.titleContainer.scrollPolicyH = "off";
                this.titleContainer.scrollPolicyV = "off";
                this.titleContainer.setShowSize(texas.App.stageWidth, this.titleH + 5);
                // this.titleContainer.throwSpeed = 0;
                // this.titleContainer.bounces = false;
                this.addChild(this.titleContainer);
                this.containerH = new egret.Sprite();
                this.scrollViewH.container.addChild(this.containerH);
                this.scrollViewH.y = this.titleH;
                this.touSpRect = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight - this.titleH, 0xffffff, 0, this.titleH, 0);
                this.containerH.addChild(this.touSpRect);
                this.chooseLine = texas.Tool.createBitmapByName("img_img_pyqdz_xuanz");
                this.chooseLine.scale9Grid = new egret.Rectangle(5, 0, this.chooseLine.width - 5, this.chooseLine.height);
                this.titleContainer.container.addChild(this.chooseLine);
                this.chooseLine.y = this.titleH;
                this.slideJudge = new lzm.SwipeGestures(this.containerH, this.slideCallback.bind(this));
                this.containerH.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
                this.containerH.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.movePanel, this);
                // this.containerH.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetSlide, this);
                this.containerH.addEventListener(egret.TouchEvent.TOUCH_END, this.resetSlide, this);
                this.containerH.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.resetSlide, this);
                this.containerH.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.resetSlide, this);
                this.containerH.touchEnabled = false;
            };
            PagePanel.prototype.addToStage = function () {
                var length = Object.keys(this.pageTitleData).length;
                this.scrollViewH.setScrollSize(texas.App.stageWidth, texas.App.stageHeight - this.y - this.titleH - 10);
                this.touSpRect.width = texas.App.stageWidth * length;
                this.touSpRect.height = texas.App.stageHeight - this.y - this.titleH - 10;
            };
            PagePanel.prototype.beginTouch = function (e) {
                this.startTime = new Date().getTime();
                this.startTouchX = e.stageX;
                // console.log(this.startTime);
            };
            PagePanel.prototype.movePanel = function (e) {
                if (this.direction == "left" || this.direction == "right") {
                    if (!this.startPoint) {
                        this.startPoint = new egret.Point();
                        this.startPoint.x = e.stageX;
                        this.startPoint.y = e.stageY;
                    }
                    var distancex = (this.startPoint.x - e.stageX);
                    this.startPoint.x = e.stageX;
                    this.startPoint.y = e.stageY;
                    var nextX = this.containerH.x - distancex;
                    if (nextX > 0) {
                        return;
                    }
                    var length_1 = Object.keys(this.pageTitleData).length;
                    if (nextX < -texas.App.stageWidth * (length_1 - 1)) {
                        return;
                    }
                    var rationum = distancex / this.titleArr.length;
                    this.chooseLine.x = this.chooseLine.x + rationum;
                    this.containerH.x = nextX;
                }
            };
            PagePanel.prototype.resetSlide = function (e) {
                console.log("结束滑动");
                var nowtime = new Date().getTime();
                var timedistance = nowtime - this.startTime;
                var distancerange = Math.abs(e.stageX - this.startTouchX);
                var data;
                if (timedistance < 300 || distancerange > 200) {
                    console.log("触发自动换页");
                    var index = 0; //看需要滑动到哪个
                    for (var i = 0; i < this.titleArr.length; i++) {
                        if (this.titleArr[i].name == this.nowChoose) {
                            index = i;
                        }
                    }
                    if (this.direction == "right") {
                        var leftindex = index - 1;
                        if (leftindex < 0) {
                            leftindex = 0;
                        }
                        index = leftindex;
                    }
                    else if (this.direction == "left") {
                        var rightindex = index + 1;
                        if (rightindex > this.titleArr.length - 1) {
                            rightindex = this.titleArr.length - 1;
                        }
                        index = rightindex;
                    }
                    this.nowChoose = this.titleArr[index].name;
                    data = this.pageTitleData[this.nowChoose];
                    var scV = this.scrollViewVs[this.nowChoose].scrollView;
                    var h = (data.length - 1) * this.singleH;
                    // h = 2160
                    egret.Tween.removeTweens(this.chooseLine);
                    egret.Tween.get(this.chooseLine).to({ x: this.titleArr[index].x }, 300, egret.Ease.quartOut);
                    // console.log("this.scrollViewVs[this.nowChoose].x", this.titleArr[this.nowChoose].x);
                    egret.Tween.removeTweens(this.containerH);
                    egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(function () {
                    }, this);
                }
                else {
                    var index = ""; //离中心线最近的面板的key
                    var lastabsnum = 1000000000;
                    var seat = 0;
                    var realseat = 0;
                    for (var i in this.scrollViewVs) {
                        var nowx = this.scrollViewVs[i].x + this.containerH.x;
                        var abs = Math.abs(0 - nowx);
                        if (abs < lastabsnum) {
                            index = i;
                            lastabsnum = abs;
                            realseat = seat;
                        }
                        seat++;
                    }
                    this.nowChoose = index;
                    data = this.pageTitleData[this.nowChoose];
                    var scV = this.scrollViewVs[this.nowChoose].scrollView;
                    var h = (data.length - 1) * this.singleH;
                    // h = 2160
                    egret.Tween.removeTweens(this.chooseLine);
                    egret.Tween.get(this.chooseLine).to({ x: this.titleArr[realseat].x }, 300, egret.Ease.quartOut);
                    // console.log("this.scrollViewVs[this.nowChoose].x", this.titleArr[this.nowChoose].x);
                    egret.Tween.removeTweens(this.containerH);
                    egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(function () {
                    }, this);
                }
                for (var i in this.pageTitleData) {
                    var titledata = this.pageTitleData[i];
                    if (i != e.target.name) {
                        if (titledata.unchooseFt) {
                            titledata.unchooseFt();
                        }
                    }
                }
                if (data.chooseFt) {
                    data.chooseFt();
                }
                if (data.callBack) {
                    data.callBack();
                }
                this.direction = "";
                this.containerH.touchEnabled = false;
                this.touSpRect.touchEnabled = false;
                this.isJuge = true;
                this.startPoint = null;
                this.startTouchX = 0;
                this.startTime = 0;
                egret.setTimeout(function () {
                    texas.EventManager.dispatchCmd(texas.Events.controlHContanier, true);
                }, this, 50);
                this.containerH.touchEnabled = false;
                this.touSpRect.touchEnabled = false;
                for (var i in this.scrollViewVs) {
                    if (this.scrollViewVs[i].scrollView) {
                        this.scrollViewVs[i].scrollView.scrollPolicyV = "on";
                    }
                }
            };
            PagePanel.prototype.slideCallback = function (data) {
                console.log(data);
                if (this.isJuge == false) {
                    return;
                }
                if (data == "left" || data == "right") {
                    this.direction = data;
                    this.containerH.touchEnabled = true;
                    this.touSpRect.touchEnabled = true;
                    for (var i in this.scrollViewVs) {
                        if (this.scrollViewVs[i].scrollView) {
                            this.scrollViewVs[i].scrollView.scrollPolicyV = "off";
                        }
                    }
                    this.isJuge = false;
                    texas.EventManager.dispatchCmd(texas.Events.controlHContanier, false);
                }
                else {
                    this.direction = data;
                    this.containerH.touchEnabled = false;
                    this.touSpRect.touchEnabled = false;
                    for (var i in this.scrollViewVs) {
                        if (this.scrollViewVs[i].scrollView) {
                            this.scrollViewVs[i].scrollView.scrollPolicyV = "on";
                        }
                    }
                    this.isJuge = false;
                }
            };
            PagePanel.prototype.addPage = function (core, sc, key, callBack, isscale, chooseFt, unchooseFt, offsetX, offsetY) {
                if (isscale === void 0) { isscale = false; }
                if (chooseFt === void 0) { chooseFt = null; }
                if (unchooseFt === void 0) { unchooseFt = null; }
                if (offsetX === void 0) { offsetX = 0; }
                if (offsetY === void 0) { offsetY = 0; }
                if (!this.pageTitleData[key]) {
                    this.pageTitleData[key] = {};
                }
                this.pageTitleData[key]["core"] = core;
                this.pageTitleData[key]["key"] = key;
                this.pageTitleData[key]["isscale"] = isscale;
                this.pageTitleData[key]["offsetX"] = offsetX;
                this.pageTitleData[key]["offsetY"] = offsetY;
                this.pageTitleData[key]["chooseFt"] = chooseFt;
                this.pageTitleData[key]["unchooseFt"] = unchooseFt;
                this.pageTitleData[key]["callBack"] = callBack;
                var length = Object.keys(this.pageTitleData).length;
                this.pageTitleData[key]["length"] = length;
                this.scrollViewVs[key] = sc;
                sc.x = texas.App.stageWidth * (length - 1);
                var distancex = this.singleH - sc.width;
                sc.x = sc.x + distancex / 2;
                // sc.y = this.titleH + 10;
                this.containerH.addChild(sc);
                this.updateTitle();
                if (length == 1) {
                    this.nowChoose = key;
                }
            };
            PagePanel.prototype.getContainerByKey = function (key) {
                return this.scrollViewVs[key];
            };
            PagePanel.prototype.updateTitle = function () {
                for (var i = 0; i < this.titleArr.length; i++) {
                    this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                    this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                    this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.mouseUp, this);
                    this.titleArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.mouseClick, this);
                }
                this.titleArr = [];
                this.titleContainer.removeAllChild();
                this.titleContainer.container.addChild(this.chooseLine);
                var length = Object.keys(this.pageTitleData).length;
                var numtitle = length;
                if (length > 4) {
                    numtitle = 4;
                    console.log(length * texas.App.stageWidth / 4);
                    this.titleContainer.setScrollSize(length * texas.App.stageWidth / 4, this.titleH);
                    this.titleContainer.scrollPolicyH = "on";
                }
                var w = texas.App.stageWidth / numtitle;
                this.chooseLine.width = w;
                this.chooseLine.anchorOffsetX = this.chooseLine.width / 2;
                var index = 0;
                for (var i in this.pageTitleData) {
                    index++;
                    var titlesp = texas.Tool.createSprite(0, 0, w, this.titleH);
                    var disp = texas.Tool.createRectSprite(w, this.titleH, 0xffffff, 0, 0, 0);
                    titlesp.addChild(disp);
                    // titlesp.width = w;
                    // titlesp.height = this.titleH;
                    texas.Tool.center(titlesp);
                    titlesp.x = index * w - w / 2;
                    titlesp.y = this.titleH / 2;
                    var core = this.pageTitleData[i].core;
                    titlesp.addChild(core);
                    core.x = titlesp.width / 2 - core.width / 2;
                    core.y = titlesp.height / 2 - core.height / 2;
                    //  core.y =  titlesp.height / 2;
                    titlesp.touchEnabled = true;
                    titlesp.name = i;
                    titlesp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                    titlesp.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                    titlesp.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.mouseUp, this);
                    titlesp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mouseClick, this);
                    this.titleContainer.container.addChild(titlesp);
                    this.titleArr.push(titlesp);
                }
                if (this.titleArr[0]) {
                    this.chooseLine.x = this.titleArr[0].x;
                }
            };
            PagePanel.prototype.mouseClick = function (e) {
                if (this.nowChoose == e.target.name) {
                    console.log("选择了同一页，不做动画");
                    return;
                }
                this.nowChoose = e.target.name;
                var data = this.pageTitleData[e.target.name];
                var scV = this.scrollViewVs[e.target.name].scrollView;
                var h = (data.length - 1) * this.singleH;
                // h = 2160
                var target = e.target;
                for (var i = 0; i < this.titleArr.length; i++) {
                    if (this.titleArr[i].name == e.target.name) {
                        target = this.titleArr[i];
                    }
                }
                egret.Tween.removeTweens(this.chooseLine);
                egret.Tween.get(this.chooseLine).to({ x: target.x }, 300, egret.Ease.quartOut);
                // egret.Tween.removeTweens(this.scrollViewH.viewport);
                // egret.Tween.get(this.scrollViewH.viewport).to({ scrollH: h }, 300).call(() => {
                // }, this);
                egret.Tween.removeTweens(this.containerH);
                egret.Tween.get(this.containerH).to({ x: -h }, 300, egret.Ease.quartOut).call(function () {
                }, this);
                for (var i in this.pageTitleData) {
                    var titledata = this.pageTitleData[i];
                    if (i != e.target.name) {
                        if (titledata.unchooseFt) {
                            titledata.unchooseFt();
                        }
                    }
                }
                if (data.chooseFt) {
                    data.chooseFt();
                }
                if (data.callBack) {
                    data.callBack(e.target.name);
                }
            };
            PagePanel.prototype.mouseDown = function (e) {
                if (this.pageTitleData[e.target.name].isscale == false) {
                    return;
                }
                e.target.scaleX = 1.1;
                e.target.scaleY = 1.1;
            };
            PagePanel.prototype.mouseUp = function (e) {
                e.target.scaleX = 1;
                e.target.scaleY = 1;
            };
            PagePanel.prototype.dispose = function () {
                this.containerH.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
                this.containerH.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.movePanel, this);
                this.containerH.removeEventListener(egret.TouchEvent.TOUCH_END, this.resetSlide, this);
                this.containerH.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.resetSlide, this);
                this.containerH.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.resetSlide, this);
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            };
            return PagePanel;
        }(egret.DisplayObjectContainer));
        texas.PagePanel = PagePanel;
        __reflect(PagePanel.prototype, "kelvin.texas.PagePanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        /**
         * 界面缓动效果累
         */
        var PanelTween = (function () {
            function PanelTween() {
            }
            /**
             * 替换当前界面
             */
            PanelTween.switchPanel = function (currentObj, newObj) {
                currentObj.visible = newObj.visible = true;
                newObj.x = texas.App.stageWidth;
                texas.TweenQueue.getWithKey("switchPanel", currentObj, { x: -texas.App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0);
                texas.TweenQueue.get(newObj, { x: 0 }, 300, egret.Ease.quartOut, 0, function () {
                    currentObj.visible = false;
                    PanelTween.callBackTweenOver(newObj);
                });
            };
            /** 推入一个界面 */
            PanelTween.pushPanel = function (panel) {
                panel.visible = true;
                panel.x = texas.App.stageWidth;
                PanelTween.rootPanel.parent.addChild(panel);
                if (PanelTween.pushPanelList.length > 0) {
                    texas.TweenQueue.getWithKey("switchPanel", PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1], { x: -texas.App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0, function () {
                        if (PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["leaveView"]) {
                            PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["leaveView"]();
                        }
                    });
                }
                else {
                    texas.TweenQueue.getWithKey("switchPanel", PanelTween.rootPanel, { x: -texas.App.stageWidth * 0.7 }, 300, egret.Ease.quartOut, 0, function () {
                        if (PanelTween.rootPanel["leaveView"]) {
                            PanelTween.rootPanel["leaveView"]();
                        }
                    });
                }
                texas.TweenQueue.get(panel, { x: 0 }, 300, egret.Ease.quartOut, 0, function () {
                    if (PanelTween.pushPanelList.length > 0) {
                        PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1].visible = false;
                    }
                    else {
                        PanelTween.rootPanel.visible = false;
                    }
                    PanelTween.pushPanelList.push(panel);
                    PanelTween.callBackTweenOver(panel);
                });
            };
            /**
             * 推出一个界面
             */
            PanelTween.popPanel = function () {
                if (PanelTween.pushPanelList.length == 0) {
                    return;
                }
                var popPanel = PanelTween.pushPanelList.pop();
                if (popPanel != null) {
                    texas.TweenQueue.getWithKey("switchPanel", popPanel, { x: texas.App.stageWidth }, 300, egret.Ease.quartOut, 0, function () {
                        if (popPanel.parent)
                            popPanel.parent.removeChild(popPanel);
                        if (popPanel["dispose"]) {
                            popPanel["dispose"]();
                        }
                    });
                }
                if (PanelTween.pushPanelList.length > 0) {
                    var panel = PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1];
                    panel.visible = true;
                    texas.TweenQueue.get(panel, { x: 0 }, 300, egret.Ease.quartOut, 0, function () {
                        if (PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["backView"]) {
                            PanelTween.pushPanelList[PanelTween.pushPanelList.length - 1]["backView"]();
                        }
                    });
                }
                else {
                    PanelTween.rootPanel.visible = true;
                    texas.TweenQueue.get(PanelTween.rootPanel, { x: 0 }, 300, egret.Ease.quartOut, 0, function () {
                        if (PanelTween.rootPanel["backView"]) {
                            PanelTween.rootPanel["backView"]();
                        }
                    });
                }
            };
            /**
             * 移除所有界面
             */
            PanelTween.clearAllPanel = function () {
                for (var i = 0; i < PanelTween.pushPanelList.length; i++) {
                    texas.Tool.removeFromParent(PanelTween.pushPanelList[i]);
                }
                PanelTween.pushPanelList = [];
            };
            PanelTween.callBackTweenOver = function (obj) {
                if (obj["onInterfaceTweenOver"]) {
                    var fun = obj["onInterfaceTweenOver"];
                    fun.apply(obj);
                }
            };
            /**
             * 推入的界面列表
             */
            PanelTween.pushPanelList = [];
            return PanelTween;
        }());
        texas.PanelTween = PanelTween;
        __reflect(PanelTween.prototype, "kelvin.texas.PanelTween");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PushPanel = (function (_super) {
            __extends(PushPanel, _super);
            function PushPanel() {
                return _super.call(this, true) || this;
            }
            PushPanel.prototype.on_closeBtn = function (e) {
                this.dispose();
            };
            return PushPanel;
        }(texas.BasePanel));
        texas.PushPanel = PushPanel;
        __reflect(PushPanel.prototype, "kelvin.texas.PushPanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * 活动条
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ActiveLineUI = (function (_super) {
            __extends(ActiveLineUI, _super);
            function ActiveLineUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            ActiveLineUI.prototype.createGameScene = function () {
                this.contentH = 0;
                this.timeTxt.text = this.data.time;
                this.nameTxt.text = this.data.name;
                this.titleTxt.text = "【" + this.data.title + "】";
                texas.Tool.removeFromParent(this.contentTxt);
                this.contentTxt = texas.Tool.createTextFiled(53, 578, 612, null, "", 24, 0xffffff, 'left', "top");
                this.addChild(this.contentTxt);
                this.contentTxt.text = this.data.content;
                this.contentH = this.contentTxt.textHeight;
                this.downLine.y = this.downLine.y + this.contentH - 24;
                this.nameTxt.y = this.nameTxt.y + this.contentH - 24;
                this.icon.y = this.icon.y + this.contentH - 24;
                texas.Tool.removeFromParent(this.activeimg);
                this.activeimg = new egret.Bitmap();
                this.activeimg.width = 720;
                this.activeimg.height = 420;
                this.addChild(this.activeimg);
                this.activeimg.y = 67.5;
                this.createImg();
            };
            ActiveLineUI.prototype.createImg = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.activeimg;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.data.imgurl)];
                            case 1:
                                _a.texture = _b.sent();
                                this.activeimg.width = 720;
                                this.activeimg.height = 420;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            ActiveLineUI.prototype.mainAssetName = function () {
                return "spr_active_line_ui";
            };
            ActiveLineUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return ActiveLineUI;
        }(texas.BasePanel));
        texas.ActiveLineUI = ActiveLineUI;
        __reflect(ActiveLineUI.prototype, "kelvin.texas.ActiveLineUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 * 活动主界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ActiveView = (function (_super) {
            __extends(ActiveView, _super);
            function ActiveView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            ActiveView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.scrollView.y = 100;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                texas.NoticeApi.getActivityNotices(this.getInfo.bind(this));
            };
            ActiveView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },
                // { imgurl: "img_advice_png", imglengthArr: ["img_advice_png", "img_advice_png"] },]
                if (data.notices != null) {
                    for (var i in data.notices) {
                        var mindata = {
                            imgurl: data.notices[i].titleUrl,
                            imglengthArr: data.notices[i].urls,
                        };
                        this.infoArr.push(mindata);
                    }
                }
                this.createUI();
            };
            ActiveView.prototype.createUI = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var imgAllH, i, img, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.uiArr = [];
                                imgAllH = 0;
                                i = 0;
                                _b.label = 1;
                            case 1:
                                if (!(i < this.infoArr.length)) return [3 /*break*/, 4];
                                img = new egret.Bitmap();
                                img.x = 8;
                                img.width = texas.App.stageWidth - 16;
                                _a = img;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.infoArr[i].imgurl)];
                            case 2:
                                _a.texture = _b.sent();
                                img.y = imgAllH;
                                img.name = this.infoArr[i].imgurl;
                                this.scrollView.container.addChild(img);
                                imgAllH = imgAllH + img.height + 15;
                                this.scrollView.setScrollSize(texas.App.stageWidth, imgAllH);
                                this.uiArr.push(img);
                                img.touchEnabled = true;
                                img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchImg, this);
                                _b.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            ActiveView.prototype.touchImg = function (e) {
                for (var i = 0; i < this.uiArr.length; i++) {
                    if (e.target.name == this.infoArr[i].imgurl) {
                        if (this.infoArr[i].imglengthArr != null && this.infoArr[i].imglengthArr.length > 0) {
                            texas.PanelTween.pushPanel(new texas.NoticeInfo(this.infoArr[i].imglengthArr));
                        }
                        break;
                    }
                }
            };
            ActiveView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            ActiveView.prototype.mainAssetName = function () {
                return "spr_active_view";
            };
            ActiveView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                for (var i = 0; i < this.uiArr.length; i++) {
                    this.uiArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchImg, this);
                }
            };
            return ActiveView;
        }(texas.BasePanel));
        texas.ActiveView = ActiveView;
        __reflect(ActiveView.prototype, "kelvin.texas.ActiveView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛详情的大厅UI
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqDtUI = (function (_super) {
            __extends(BsxqDtUI, _super);
            function BsxqDtUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            BsxqDtUI.prototype.createGameScene = function () {
                if (this.data.matchtype == "wcaa") {
                    this.mzjgbTxt.text = "WCAA盲注结构表";
                    this.ssTxt1.visible = false;
                    this.jcphTxt.visible = false;
                    this.plTxt.visible = false;
                    this.icon1.visible = false;
                    this.icon2.visible = false;
                }
                else {
                    if (this.data.type == "sng") {
                        this.mzjgbTxt.text = "SNG盲注结构表";
                    }
                    else if (this.data.type = "mtt") {
                        this.mzjgbTxt.text = "MTT盲注结构表";
                    }
                }
                this.gthImg3.x = this.mzjgbTxt.textWidth + 5 + this.mzjgbTxt.x;
                this.titleTxt.text = this.data.titie;
                this.mzjgbTxt.touchEnabled = true;
                this.mzjgbTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMZB, this);
                this.jcphTxt.touchEnabled = true;
                this.jcphTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showJLPH, this);
                this.plTxt.touchEnabled = true;
                this.plTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPL, this);
            };
            BsxqDtUI.prototype.updateUI = function () {
                var _this = this;
                this.csjfpTxt.text = "" + this.data.init_game_score;
                this.mrcssxTxt.text = "" + this.data.buy_count;
                this.bmfTxt.text = "" + this.data.signmoney;
                if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                    this.bmfTxt.text = "免费";
                }
                else if (this.data.signmoney == 0) {
                    this.baomingTxt.text = "报名费（积分）";
                    if (this.data.service_score == 0) {
                        this.bmfTxt.text = "" + this.data.apply_score;
                    }
                    else {
                        this.bmfTxt.text = "" + this.data.apply_score + "+" + this.data.service_score;
                    }
                }
                else {
                    this.baomingTxt.text = "报名费（金币）";
                    if (this.data.service_gold == 0) {
                        this.bmfTxt.text = "" + this.data.signmoney;
                    }
                    else {
                        this.bmfTxt.text = "" + this.data.signmoney + "+" + this.data.service_gold;
                    }
                }
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    var nowmzdata = this.data.mzTable[String(this.data.mz_level)];
                    if (nowmzdata) {
                        this.nowLevelTxt.text = "当前等级" + this.data.mz_level + " : " + nowmzdata.xm + "/" + nowmzdata.dm + " " + "前注" + nowmzdata.qz;
                    }
                    var nextmzdate = this.data.mzTable[String(this.data.mz_level + 1)];
                    if (nextmzdate) {
                        this.nextLevelTxt.text = "下一等级" + (this.data.mz_level + 1) + " : " + nextmzdate.xm + "/" + nextmzdate.dm + " " + "前注" + nextmzdate.qz;
                    }
                    this.zmsjTxt.text = "涨盲时间 : " + this.data.mz_interval / 60 + "分钟";
                    this.line5Txt.text = "";
                    if (this.data.type == "sng") {
                        this.ybmTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                    else if (this.data.type == "mtt") {
                        this.ybmTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                    egret.setTimeout(function () {
                        var min = 10000000000;
                        var max = 0;
                        var index = 0;
                        if (_this.data.roomInfo) {
                            for (var i = 0; i < _this.data.roomInfo.length; i++) {
                                if (max < _this.data.roomInfo[i].max) {
                                    max = _this.data.roomInfo[i].max;
                                }
                                ;
                                if (min > _this.data.roomInfo[i].min) {
                                    min = _this.data.roomInfo[i].min;
                                }
                                index++;
                            }
                        }
                        var all = _this.data.init_game_score * _this.data.cur_buy_count;
                        var ave = all / (_this.data.havepeople - _this.data.over_people);
                        if (index == 0 || _this.data.havepeople == 0) {
                            ave = 0;
                            max = 0;
                            min = 0;
                        }
                        _this.jfpTxt.text = "记分牌 : " + " 最大" + Math.floor(max) + " 平均" + Math.floor(ave) + " 最小" + Math.floor(min);
                    }, this, 100);
                }
                else {
                    if (this.data.type == "sng") {
                        this.ybmTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                    }
                    else if (this.data.type == "mtt") {
                        this.ybmTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                        if (this.data.apply_max_people > 9999) {
                            this.ybmTxt.text = "" + (this.data.havepeople);
                        }
                    }
                    this.nowLevelTxt.text = "涨盲时间：" + Math.round(this.data.mz_interval / 60 * 100) / 100 + "分钟";
                    this.nextLevelTxt.text = "单桌人数：" + this.data.table_people;
                    this.jfpTxt.text = "终止报名：第" + this.data.apply_max_mz_level + "盲注等级开始";
                    this.zmsjTxt.text = "重购次数：" + this.data.buy_count;
                    if (!this.data.break_time_long || this.data.break_time_long == -1 || this.data.break_time_long == 0) {
                        this.line5Txt.text = "中场休息：" + "无";
                    }
                    else {
                        this.line5Txt.text = "中场休息：" + "每隔" + Math.round(this.data.break_interval / 60 * 100) / 100 + "分钟休息" + Math.round(this.data.break_time_long / 60 * 100) / 100 + "分钟";
                    }
                }
            };
            BsxqDtUI.prototype.showSSJF = function () {
                this.ssTxt1.visible = true;
                this.jcphTxt.visible = true;
                this.plTxt.visible = true;
                this.icon1.visible = true;
                this.icon2.visible = true;
            };
            BsxqDtUI.prototype.hideSSJF = function () {
                this.ssTxt1.visible = false;
                this.jcphTxt.visible = false;
                this.plTxt.visible = false;
                this.icon1.visible = false;
                this.icon2.visible = false;
            };
            BsxqDtUI.prototype.showMZB = function () {
                // EventManager.dispatchCmd(Events.createMZJGBView, this.data);
                texas.PanelTween.pushPanel(new texas.MzjgbView(this.data));
            };
            BsxqDtUI.prototype.showJLPH = function () {
                texas.EventManager.dispatchCmd(texas.Events.gotoJLPage, null);
            };
            BsxqDtUI.prototype.showPL = function () {
                // PanelTween.pushPanel(new CardScoreView());
            };
            BsxqDtUI.prototype.mainAssetName = function () {
                return "spr_bsxq_dt_ui";
            };
            BsxqDtUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.mzjgbTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showMZB, this);
                this.jcphTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showJLPH, this);
                this.plTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showPL, this);
            };
            return BsxqDtUI;
        }(texas.BasePanel));
        texas.BsxqDtUI = BsxqDtUI;
        __reflect(BsxqDtUI.prototype, "kelvin.texas.BsxqDtUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛详情的奖励UI
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqJlUI = (function (_super) {
            __extends(BsxqJlUI, _super);
            function BsxqJlUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            BsxqJlUI.prototype.createGameScene = function () {
                this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);
                this.listbg.height = texas.App.stageHeight - 590;
                this.listContainer = new texas.ScrollView();
                this.addChild(this.listContainer);
                this.listContainer.x = this.listbg.x;
                this.listContainer.y = this.listbg.y;
                this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.listContainer.width = this.listbg.width;
                this.listContainer.height = this.listbg.height - 20;
                this.listimg = new eui.Image();
                this.listimg.width = this.listContainer.width;
                this.container = new eui.Group();
                this.container.addChild(this.listimg);
                this.listContainer.viewport = this.container;
                this.scrollView = this.listContainer;
                this.updateUI();
            };
            BsxqJlUI.prototype.updateUI = function () {
                var allmoney = this.data.reward;
                if (allmoney < this.data.min_reward) {
                    allmoney = this.data.min_reward;
                }
                this.alljcTxt.text = "" + allmoney;
                if (this.data.poker_score_rate > 0) {
                    if (this.data.matchtype == "wcaa") {
                        this.alljcTxt.text = this.alljcTxt.text;
                    }
                    else {
                        console.log("牌力积分系数为------", this.data.poker_score_rate);
                        console.log("已经消耗的牌力积分------", this.data.reward_poker_score);
                        this.alljcTxt.text = this.alljcTxt.text + "（含牌力积分：" + (allmoney * this.data.poker_score_rate - this.data.reward_poker_score) + "）";
                    }
                }
                this.jlqTxt.text = this.data.moneyCircle[1];
                this.getInfo();
                this.createListUI();
            };
            BsxqJlUI.prototype.getInfo = function () {
                this.infoArr = [];
                // this.infoArr = [{ level: "1", ratio: 10.20, reward: 12354.55 },
                // { level: "2", ratio: 11.20, reward: 12354.55 },
                // { level: "3", ratio: 12.20, reward: 12354.55 },
                // { level: "4", ratio: 13.20, reward: 12354.55 },
                // { level: "5", ratio: 14.20, reward: 12354.55 },
                // { level: "6", ratio: 15.20, reward: 12354.55 },
                // { level: "7", ratio: 16.20, reward: 12354.55 },
                // { level: "8", ratio: 17.20, reward: 12354.55 },
                // { level: "9", ratio: 12.20, reward: 12354.55 },
                // { level: "10", ratio: 1340.20, reward: 12354.55 },
                // { level: "11", ratio: 1340.20, reward: 12354.55 },
                // { level: "12", ratio: 13430.20, reward: 12354.55 },
                // { level: "13", ratio: 1110.20, reward: 12354.55 },
                // { level: "14", ratio: 1067.20, reward: 12354.55 },
                // { level: "15", ratio: 17680.20, reward: 12354.55 },
                // { level: "16", ratio: 134650.20, reward: 12354.55 },
                // { level: "17", ratio: 16870.20, reward: 12354.55 },
                // { level: "18", ratio: 1435340.20, reward: 12354.55 },
                // { level: "19", ratio: 14360.20, reward: 12354.55 },
                // { level: "20", ratio: 1054345.20, reward: 12354.55 },
                // { level: "21", ratio: 154350.20, reward: 12354.55 },
                // { level: "22", ratio: 17970.20, reward: 12354.55 },
                // { level: "23", ratio: 105345.20, reward: 12354.55 },
                // { level: "24", ratio: 105464.20, reward: 12354.55 },];
                // this.data.moneyCircle = ["337", "36", [["1", "0.2209 "], ["2", "0.1550 "], ["3", "0.0997 "], ["4", "0.0738 "], ["5", "0.0554 "], ["6", "0.0443 "], ["7", "0.0368 "], ["8", "0.0295 "], ["9", "0.0221 "], ["12", "0.0161 "], ["15", "0.0134 "], ["18", "0.0115 "], ["21", "0.0099 "], ["24", "0.0092 "], ["27", "0.0082 "], ["36", "0.0072 "]]];
                var arr = this.data.moneyCircle[2];
                // console.log(arr);
                var allmoney = this.data.reward;
                if (allmoney < this.data.min_reward) {
                    allmoney = this.data.min_reward;
                }
                var realmoney;
                if (this.data.matchtype == "wcaa") {
                    realmoney = allmoney;
                }
                else {
                    realmoney = allmoney - this.data.reward_poker_score;
                }
                for (var i = 0; i < arr.length; i++) {
                    var mindata = {
                        level: arr[i][0],
                        ratio: arr[i][1],
                        reward: Number((realmoney * arr[i][1]).toFixed(2)),
                    };
                    if (this.data.matchtype == "wcaa") {
                    }
                    else {
                        mindata.reward = Math.floor(realmoney * arr[i][1]);
                    }
                    if (i >= 9) {
                        var num = Number(arr[i - 1][0]) + 1;
                        mindata.level = num + "-" + arr[i][0];
                    }
                    this.infoArr.push(mindata);
                }
            };
            BsxqJlUI.prototype.createListUI = function () {
                if (this.minSpArr) {
                    for (var i = 0; i < this.minSpArr.length; i++) {
                        texas.Tool.removeFromParent(this.minSpArr[i]);
                    }
                }
                this.minSpArr = [];
                for (var i = 0; i < this.infoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(25, 29, 200, 40, this.infoArr[i].level, 26, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var rationum = Math.round(this.infoArr[i].ratio * 10000) / 100 + "%";
                    var ratioTxt = texas.Tool.createTextFiled(221, 29, 200, 40, "" + rationum, 26, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(420, 29, 200, 40, "" + this.infoArr[i].reward, 26, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    if (this.data.matchtype == "common") {
                        rewardTxt.text = rewardTxt.text + "参赛积分";
                    }
                    var line = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiex", false, 5, 70);
                    minsp.addChild(line);
                    minsp.y = i * 70;
                    this.container.addChild(minsp);
                    this.minSpArr.push(minsp);
                }
                this.listimg.height = this.infoArr.length * 70;
            };
            BsxqJlUI.prototype.mainAssetName = function () {
                return "spr_bsxq_jl_ui";
            };
            BsxqJlUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return BsxqJlUI;
        }(texas.BasePanel));
        texas.BsxqJlUI = BsxqJlUI;
        __reflect(BsxqJlUI.prototype, "kelvin.texas.BsxqJlUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛详情的牌桌UI
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqPzUI = (function (_super) {
            __extends(BsxqPzUI, _super);
            function BsxqPzUI(data) {
                var _this = _super.call(this, true) || this;
                _this.iscanTouch = true;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            BsxqPzUI.prototype.createGameScene = function () {
                this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);
                this.listbg.height = texas.App.stageHeight - 520;
                this.listContainer = this.scrollView;
                this.addChild(this.listContainer);
                this.listContainer.x = this.listbg.x;
                this.listContainer.y = this.listbg.y + 70;
                this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                // this.initDownRefresh();
                this.setDownRefresh(this.refreshCall.bind(this));
                this.listContainer.setShowSize(this.listbg.width, this.listbg.height - 90);
                // this.scrollView = this.listContainer;
                this.getInfoNum = 0;
                this.updateUI();
                this.iscanTouch = true;
                texas.EventManager.registerCmd(texas.Events.controlHContanier, this.controlHContanier, this);
            };
            BsxqPzUI.prototype.controlHContanier = function (data) {
                this.iscanTouch = data;
            };
            BsxqPzUI.prototype.updateUI = function () {
                texas.MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));
            };
            BsxqPzUI.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
                // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
                // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },
                // { tableid: "123154", usersnum: 15454, max: 546564, min: 2500 },];
                var showArr = [];
                for (var i in data.rooms) {
                    var mindata = {
                        tableid: data.rooms[i].id,
                        usersnum: Object.keys(data.rooms[i].players).length,
                        players: data.rooms[i].players,
                        max: data.rooms[i].maxScore,
                        min: data.rooms[i].minScore,
                        match_id: data.rooms[i].match_id,
                        showId: data.rooms[i].table_num + 1,
                    };
                    if (mindata.max == -1) {
                        mindata.max = this.data.init_game_score;
                    }
                    if (mindata.min == -1) {
                        mindata.min = this.data.init_game_score;
                    }
                    this.infoArr.push(mindata);
                    showArr.push(mindata);
                }
                texas.ArrayUtil.AscendingArray("showId", this.infoArr);
                for (var i = 0; i < showArr.length; i++) {
                    // showArr[i].showId = i + 1;
                }
                this.data.roomInfo = this.infoArr;
                this.createListUI();
                this.alljcTxt.text = "" + this.infoArr.length;
                var maxnum = 0;
                for (var i = 0; i < this.infoArr.length; i++) {
                    if (maxnum < this.infoArr[i].usersnum) {
                        maxnum = this.infoArr[i].usersnum;
                    }
                }
                // this.jlqTxt.text = "" + maxnum;
                this.jlqTxt.text = "" + this.data.table_people;
            };
            BsxqPzUI.prototype.createListUI = function () {
                if (this.minSpArr) {
                    for (var i = 0; i < this.minSpArr.length; i++) {
                        this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                        texas.Tool.removeFromParent(this.minSpArr[i]);
                    }
                }
                this.minSpArr = [];
                for (var i = 0; i < this.infoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(45, 29, 200, 40, "" + this.infoArr[i].showId, 26, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var ratioTxt = texas.Tool.createTextFiled(210, 29, 200, 40, "" + this.infoArr[i].usersnum, 26, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(420, 29, 200, 40, "" + this.infoArr[i].max + "/" + this.infoArr[i].min, 26, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    var line = texas.Tool.createBitmapByName("img_img_pyqdz_paizuo_fjx", false, 5, 70);
                    minsp.addChild(line);
                    minsp.y = i * 70;
                    this.scrollView.container.addChild(minsp);
                    this.minSpArr.push(minsp);
                    minsp.name = this.infoArr[i].tableid;
                    minsp.touchEnabled = true;
                    minsp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                }
                this.scrollView.setScrollSize(this.listbg.width, this.infoArr.length * 70);
                if (this.getInfoNum > 0) {
                    this.downRefreshOver();
                    // ApiState.showText("刷新成功");
                }
            };
            BsxqPzUI.prototype.refreshCall = function () {
                texas.RefreshUI.ins.show(texas.App.stageWidth / 2, 370);
                this.getInfoNum++;
                texas.MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));
            };
            BsxqPzUI.prototype.gotoGame = function (e) {
                if (this.iscanTouch == false) {
                    return;
                }
                var data;
                for (var i = 0; i < this.infoArr.length; i++) {
                    if (String(this.infoArr[i].tableid) == e.target.name) {
                        data = this.infoArr[i];
                        break;
                    }
                }
                lzm.Alert.alert(new texas.WaitRoomUI((data.match_id), Number(data.tableid)));
            };
            BsxqPzUI.prototype.mainAssetName = function () {
                return "spr_bsxq_pz_ui";
            };
            BsxqPzUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                texas.EventManager.removeCmd(texas.Events.controlHContanier, this.controlHContanier, this);
                for (var i = 0; i < this.minSpArr.length; i++) {
                    this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                }
            };
            return BsxqPzUI;
        }(texas.BasePanel));
        texas.BsxqPzUI = BsxqPzUI;
        __reflect(BsxqPzUI.prototype, "kelvin.texas.BsxqPzUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛详情  主界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqView = (function (_super) {
            __extends(BsxqView, _super);
            function BsxqView(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            BsxqView.prototype.createGameScene = function () {
                this.dateUtils = new texas.DateUtils();
                this.view = this.$children[0];
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.bottomSp.y = texas.App.stageHeight - this.bottomSp.height;
                this.dtTxt = texas.Tool.createTextFiled(0, 0, 100, 40, "大厅", 28, 0xffffff, "center");
                this.jlTxt = texas.Tool.createTextFiled(0, 0, 100, 40, "奖励", 28, 0xffffff, "center");
                this.wjTxt = texas.Tool.createTextFiled(0, 0, 100, 40, "玩家", 28, 0xffffff, "center");
                this.pzTxt = texas.Tool.createTextFiled(0, 0, 100, 40, "牌桌", 28, 0xffffff, "center");
                this.pageView = new texas.PagePanel(80, 720);
                this.pageView.y = 100;
                this.pageView.scrollViewH.setShowSize(texas.App.stageWidth, texas.App.stageHeight);
                this.pageView.scrollViewH.setScrollSize(texas.App.stageWidth, texas.App.stageHeight);
                this.view.addChildAt(this.pageView, 1);
                this.jlHide();
                this.wjHide();
                this.pzHide();
                this.initState();
                this.timer = new egret.Timer(1000);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
                this.timer.start();
                // this.on_dtBtn(null);
                this.spData = {};
                for (var i in this.data) {
                    this.spData[i] = this.data[i];
                }
                texas.MatchApi.getMatchInfo(this.data.id, this.getSpData.bind(this));
                this.ispop = false;
                texas.EventManager.registerCmd(texas.Events.gotoJLPage, this.gotoJLPage, this);
                this.startintervalUpdate();
                texas.BaseApi.registerCmd("matchStart", this.acceptMatch, this);
            };
            BsxqView.prototype.acceptMatch = function (data) {
                this.spData.serverstate = data.match.state;
                this.data.serverstate = data.match.state;
                this.data.match_start_time = data.match.match_start_time;
                this.timerun();
            };
            BsxqView.prototype.delayTimeRun = function () {
                if (this.data.state == 2) {
                    var distancetime = this.data.match_start_time * 1000 + this.data.apply_delay_time * 1000 - new Date().getTime();
                    var str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                    this.delayTimeTxt.text = "报名剩余时间：" + str;
                    this.showSignTime();
                }
                else {
                    this.delayTimeTxt.text = "";
                    this.showSignTime();
                }
            };
            BsxqView.prototype.startintervalUpdate = function () {
                var _this = this;
                this.timeId1 = egret.setInterval(function () { texas.MatchApi.getMatchInfo(_this.data.id, _this.intervalGetInfo.bind(_this)); }, this, 10000);
            };
            BsxqView.prototype.intervalGetInfo = function (data) {
                console.log("拉取一次最新的消息");
                this.data.serverstate = data.match.state;
                this.data.match_start_time = data.match.match_start_time;
                this.spData.serverstate = data.match.state;
                this.spData.mz_level = data.match.mz_level;
                this.spData.reward = data.match.reward;
                this.spData.cur_buy_count = data.match.cur_buy_count;
                this.spData.havepeople = data.match.people;
                this.spData.inMoneyCircle = data.match.inMoneyCircle;
                this.spData.over_people = data.match.over_people;
                this.spData.serverstate = data.match.state;
                this.spData.mzTable = data.mzTable;
                this.spData.roles = data.roles;
                this.spData.pokerScores = data.pokerScores;
                this.spData.gameScores = data.gameScores;
                this.spData.rooms = data.rooms;
                this.spData.moneyCircle = data.moneyCircle;
                this.spData.reBuyCount = data.reBuyCount;
                this.spData.hasTicket = data.hasTicket;
                this.timerun();
            };
            BsxqView.prototype.updateUI = function () {
                if (this.dtView) {
                    this.dtView.updateUI();
                }
                if (this.jlView) {
                    this.jlView.updateUI();
                }
                if (this.wjView) {
                    this.wjView.updateUI();
                }
                if (this.pzView) {
                    this.pzView.updateUI();
                }
            };
            BsxqView.prototype.gotoJLPage = function () {
                var e = { target: { name: "jl" } };
                this.pageView.mouseClick(e);
            };
            BsxqView.prototype.onInterfaceTweenOver = function () {
                if (this.data.serverstate == 4 || this.data.serverstate == 5) {
                    this.openFailBack();
                }
                if (this.data.serverstate == 6) {
                    this.gameend();
                }
            };
            BsxqView.prototype.openFailBack = function () {
                // this.timer.stop();
                lzm.Alert.alert(new texas.CommonPopup("该比赛开始失败，请点击确定返回", this.on_backBtn.bind(this)));
            };
            BsxqView.prototype.gameend = function () {
                lzm.Alert.alert(new texas.CommonPopup("该比赛已经结束，请点击确定返回", this.on_backBtn.bind(this)));
            };
            BsxqView.prototype.getSpData = function (data) {
                this.data.serverstate = data.match.state;
                this.data.match_start_time = data.match.match_start_time;
                this.spData.serverstate = data.match.state;
                this.spData.mz_level = data.match.mz_level;
                this.spData.reward = data.match.reward;
                this.spData.cur_buy_count = data.match.cur_buy_count;
                this.spData.havepeople = data.match.people;
                this.spData.poker_score_rate = data.match.poker_score_rate;
                this.spData.reward_poker_score = data.match.reward_poker_score;
                this.spData.inMoneyCircle = data.match.inMoneyCircle;
                this.spData.over_people = data.match.over_people;
                this.spData.mzTable = data.mzTable;
                this.spData.roles = data.roles;
                this.spData.pokerScores = data.pokerScores;
                this.spData.gameScores = data.gameScores;
                this.spData.rooms = data.rooms;
                this.spData.moneyCircle = data.moneyCircle;
                this.spData.isOver = data.isOver;
                this.spData.reBuyCount = data.reBuyCount;
                this.spData.hasTicket = data.hasTicket;
                this.dtView = new texas.BsxqDtUI(this.spData);
                this.jlView = new texas.BsxqJlUI(this.spData);
                this.wjView = new texas.BsxqWjUI(this.spData);
                this.pzView = new texas.BsxqPzUI(this.spData);
                this.pageView.addPage(this.dtTxt, this.dtView, "dt", null, false, this.dtShow.bind(this), this.dtHide.bind(this));
                this.pageView.addPage(this.jlTxt, this.jlView, "jl", null, false, this.jlShow.bind(this), this.jlHide.bind(this));
                this.pageView.addPage(this.wjTxt, this.wjView, "wj", null, false, this.wjShow.bind(this), this.wjHide.bind(this));
                this.pageView.addPage(this.pzTxt, this.pzView, "pz", null, false, this.pzShow.bind(this), this.pzHide.bind(this));
                this.pzView.y = this.pzView.y + 20;
                this.timerun();
            };
            BsxqView.prototype.dtShow = function () {
                this.dtTxt.textColor = 0xffffff;
            };
            BsxqView.prototype.dtHide = function () {
                this.dtTxt.textColor = 0x46557e;
            };
            BsxqView.prototype.jlShow = function () {
                this.jlTxt.textColor = 0xffffff;
            };
            BsxqView.prototype.jlHide = function () {
                this.jlTxt.textColor = 0x46557e;
            };
            BsxqView.prototype.wjShow = function () {
                this.wjTxt.textColor = 0xffffff;
            };
            BsxqView.prototype.wjHide = function () {
                this.wjTxt.textColor = 0x46557e;
            };
            BsxqView.prototype.pzShow = function () {
                this.pzTxt.textColor = 0xffffff;
            };
            BsxqView.prototype.pzHide = function () {
                this.pzTxt.textColor = 0x46557e;
            };
            BsxqView.prototype.initState = function () {
                this.signBtn.visible = false;
                this.stopSignBtn.visible = false;
                this.stopSignBtn.touchEnabled = false;
                this.outBtn.visible = false;
                this.outBtn.touchEnabled = false;
                this.goBackGameBtn.visible = false;
                // this.ybmBtn.touchEnabled = false;
                this.ybmBtn.visible = false;
                this.wdbmsjBtn.visible = false;
                this.wdbmsjBtn.touchEnabled = false;
                this.delaySignBtn.visible = false;
                this.timeTxt.text = "";
            };
            //每秒更新状态
            BsxqView.prototype.updateState = function () {
                // let zeroTime1 = (new Date(new Date().toLocaleDateString()).getTime()); // 当天0点
                // state  1是报名中   2是延长报名  ps：延长报名情况下，先调加入房间 数据为null 延迟3再调一次  一直到成功为止   3是截止报名   4是游戏中   5是暂时不能报名
                // signed  1 是已经报名  2 是未报名  3是已经淘汰
                var nowtime = new Date().getTime();
                // console.log("nowtime",nowtime);
                // console.log("this.data.apply_time_end",this.data.apply_time_end);
                if (this.data.serverstate == 0) {
                    if (this.data.type == "mtt") {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.apply_time && nowtime <= this.data.apply_time_end) {
                            this.data.state = 1;
                        }
                        else if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime <= this.data.start_time && nowtime >= this.data.apply_time_end) {
                            //说明在游戏开始前不能报名的时间段
                            this.data.state = 3;
                        }
                        else if (nowtime >= this.data.apply_time_end + this.data.apply_delay_time * 1000 || nowtime > this.data.apply_date_end + this.data.apply_delay_time * 1000) {
                            //截止报名
                            this.data.state = 3;
                        }
                        else {
                            this.data.state = 5;
                        }
                        if (this.data.state != 5) {
                            if (this.spData.mz_level > this.spData.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.spData.havepeople >= this.spData.apply_max_people) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.spData.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                    }
                    else if (this.data.type == "sng") {
                        this.data.state = 1;
                    }
                }
                else {
                    // console.log("nowtime",nowtime);
                    //      console.log(" this.data.apply_date_end + this.data.delaytime * 1000",this.data.apply_time_end + this.data.apply_delay_time * 1000);
                    if (this.data.signed == 1) {
                        this.data.state = 4;
                    }
                    else {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.match_start_time * 1000 && nowtime <= this.data.match_start_time * 1000 + this.data.apply_delay_time * 1000) {
                            // console.log("到了这里");
                            //说明在延迟报名时间内
                            this.data.state = 2;
                            if (this.spData.mz_level > this.spData.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.spData.havepeople >= this.spData.apply_max_people && this.spData.reBuyCount <= 0) {
                                //截止报名
                                this.data.state = 3;
                            }
                            else if (this.spData.cur_buy_count >= this.spData.buy_count || this.spData.reBuyCount >= this.spData.player_buy_count) {
                                this.data.state = 3;
                            }
                            if (this.spData.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                        else {
                            this.data.state = 3;
                        }
                    }
                }
                if (this.data.state == 3) {
                    if (this.spData.isOver == true) {
                        this.data.signed = 3;
                    }
                }
                // console.log("this.data.state", this.data.state);
            };
            BsxqView.prototype.timerun = function () {
                var _this = this;
                this.updateState();
                this.initState();
                // console.log("this.data.signed", this.data.signed);
                // console.log("this.data.state", this.data.state);
                if (this.data.signed == 1) {
                    if (this.data.state == 4) {
                        this.goBackGameBtn.visible = true;
                        if (this.ispop == false) {
                            console.log("弹出回到游戏弹窗");
                            this.ispop = true;
                            lzm.Alert.alert(new texas.CommonPopup("点击确定回到游戏", function () {
                                // this.timer.stop();
                                _this.startJoinGame();
                                _this.ispop = false;
                            }));
                        }
                    }
                    else {
                        this.ybmBtn.visible = true;
                    }
                }
                else if (this.data.signed == 2) {
                    if (this.data.state == 2) {
                        this.delaySignBtn.visible = true;
                    }
                    else if (this.data.state == 3 || this.data.state == 4) {
                        this.stopSignBtn.visible = true;
                    }
                    else if (this.data.state == 1) {
                        this.signBtn.visible = true;
                    }
                    else if (this.data.state == 5) {
                        this.wdbmsjBtn.visible = true;
                    }
                }
                else if (this.data.signed == 3) {
                    this.outBtn.visible = true;
                }
                // if (this.data.state == 4) {
                //     this.showGameTime();
                // } else {
                this.showSignTime();
                // }
                this.updateUI();
            };
            BsxqView.prototype.showSignTime = function () {
                // if (this.data.state == 5) { //还没开始报名
                // let distancetime = this.data.apply_time - new Date().getTime();
                // let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                // this.timeTxt.text = "距离开始报名时间：" + str;
                // } else { //
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    this.timeTxt.text = "比赛进行中";
                    // let distancetime = this.data.apply_time_end + this.data.apply_delay_time * 1000 - new Date().getTime();
                    if (this.data.match_start_time && this.data.match_start_time > 0) {
                        var distancetime = new Date().getTime() - this.data.match_start_time * 1000;
                        var str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                        this.timeTxt.text = "比赛进行中：" + str;
                    }
                }
                else {
                    if (this.data.type == "sng" || this.data.satellite == 1) {
                        this.timeTxt.text = "人满即开";
                        if (this.data.state == 5) {
                            var datetime = 0;
                            var nowtime = new Date().getTime();
                            if (nowtime < this.data.apply_date) {
                                datetime = this.data.apply_date;
                            }
                            else {
                                datetime = nowtime;
                            }
                            this.delayTimeTxt.text = "报名开始时间：" + texas.DateUtils.formatDate(datetime) + " " + this.data.apply_time_str;
                        }
                    }
                    else if (this.data.type == "mtt") {
                        this.timeTxt.text = "开赛时间:" + this.data.start_date_str + " " + this.data.start_time_str;
                    }
                }
                // }
            };
            BsxqView.prototype.showGameTime = function () {
                var distancetime = new Date().getTime() - this.data.match_start_time * 1000;
                var str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                this.timeTxt.text = "游戏进行中：" + str;
            };
            BsxqView.prototype.on_signBtn = function (e) {
                var _this = this;
                if (texas.AppConfig.applyisneedPhone == 1) {
                    if (texas.PhoneData.phoneNumber == null || texas.PhoneData.phoneNumber == "") {
                        texas.ApiState.showText("绑定手机才可以进行报名");
                        lzm.Alert.alert(new texas.RegisterPanel("register"));
                        return;
                    }
                }
                var str = "";
                if (this.data.signmoney == 0) {
                    str = "" + (this.data.apply_score + this.data.service_score) + "积分";
                }
                else {
                    str = "" + (this.data.signmoney + this.data.service_gold) + "金币";
                }
                if (this.spData.hasTicket == false) {
                    if (texas.RoleData.getRole().gold < this.data.signmoney + this.data.service_gold) {
                        lzm.Alert.alert(new texas.ApplyPrompt(1));
                        return;
                    }
                    else if (texas.RoleData.getRole().scores < this.data.apply_score + this.data.service_score) {
                        lzm.Alert.alert(new texas.ApplyPrompt(2));
                        return;
                    }
                }
                if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                    texas.MatchApi.apply(this.data.id, this.signSuccess.bind(this));
                }
                else {
                    var strprompt = "";
                    if (this.spData.hasTicket == false) {
                        strprompt = "报名费用为" + str + "，请点击确定进行报名";
                    }
                    else {
                        var matchname = texas.MatchData.getUserPropInfo().configs[this.data.ticket_cfgId].name;
                        strprompt = "确定消耗" + matchname + "门票报名?";
                    }
                    lzm.Alert.alert(new texas.CommonPopup(strprompt, function () {
                        texas.MatchApi.apply(_this.data.id, _this.signSuccess.bind(_this));
                    }, function () { }));
                }
            };
            BsxqView.prototype.signSuccess = function (data) {
                this.data.signed = 1;
                // console.log(this.data.signed);
                texas.ApiState.showText("报名成功");
                if (this.spData.hasTicket == false) {
                    texas.RoleData.getRole().gold = texas.RoleData.getRole().gold - this.data.signmoney - this.data.service_gold;
                    texas.RoleData.getRole().scores = texas.RoleData.getRole().scores - this.data.apply_score - this.data.service_score;
                    texas.EventManager.dispatchCmd(texas.Events.goldChange, null);
                }
                this.data.havepeople = data.people;
                this.spData.havepeople = this.data.havepeople;
                if (this.spData.hasTicket == true) {
                    texas.MatchApi.getPlayerProps(null);
                }
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    // this.timer.stop();
                    this.startJoinGame();
                }
                else {
                    texas.MatchApi.getMatchInfo(this.data.id, this.intervalGetInfo.bind(this));
                    this.timerun();
                }
            };
            BsxqView.prototype.on_delaySignBtn = function (e) {
                var _this = this;
                if (texas.AppConfig.applyisneedPhone == 1) {
                    if (texas.PhoneData.phoneNumber == null || texas.PhoneData.phoneNumber == "") {
                        texas.ApiState.showText("绑定手机才可以进行报名");
                        lzm.Alert.alert(new texas.RegisterPanel("register"));
                        return;
                    }
                }
                var str = "";
                if (this.data.signmoney == 0) {
                    str = "" + (this.data.apply_score + this.data.service_score) + "积分";
                }
                else {
                    str = "" + (this.data.signmoney + this.data.service_gold) + "金币";
                }
                if (this.spData.hasTicket == false) {
                    if (texas.RoleData.getRole().gold < this.data.signmoney + this.data.service_gold) {
                        lzm.Alert.alert(new texas.ApplyPrompt(1));
                        return;
                    }
                    else if (texas.RoleData.getRole().scores < this.data.apply_score + this.data.service_score) {
                        lzm.Alert.alert(new texas.ApplyPrompt(2));
                        return;
                    }
                }
                if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                    texas.MatchApi.apply(this.data.id, this.signSuccess.bind(this));
                }
                else {
                    var strprompt = "";
                    if (this.spData.hasTicket == false) {
                        strprompt = "报名费用为" + str + "，请点击确定进行报名?";
                    }
                    else {
                        var matchname = texas.MatchData.getUserPropInfo().configs[this.data.ticket_cfgId].name;
                        strprompt = "确定消耗" + matchname + "门票报名";
                    }
                    lzm.Alert.alert(new texas.CommonPopup(strprompt, function () {
                        texas.MatchApi.apply(_this.data.id, _this.signSuccess.bind(_this));
                    }, function () { }));
                }
            };
            //取消报名
            BsxqView.prototype.on_ybmBtn = function (e) {
                texas.MatchApi.cancelApply(this.data.id, this.cancelApplySuccess.bind(this));
            };
            BsxqView.prototype.cancelApplySuccess = function (data) {
                this.data.signed = 2;
                texas.ApiState.showText("取消报名成功");
                this.data.havepeople = data.people;
                this.spData.havepeople = this.data.havepeople;
                if (this.spData.hasTicket == false) {
                    texas.RoleData.getRole().gold = texas.RoleData.getRole().gold + this.data.signmoney + this.data.service_gold;
                    texas.RoleData.getRole().scores = texas.RoleData.getRole().scores + this.data.apply_score + this.data.service_score;
                }
                texas.EventManager.dispatchCmd(texas.Events.goldChange, null);
                texas.MatchApi.getPlayerProps(null);
                this.timerun();
                texas.MatchApi.getMatchInfo(this.data.id, this.intervalGetInfo.bind(this));
            };
            BsxqView.prototype.startJoinGame = function () {
                egret.clearInterval(this.timeId1);
                lzm.Alert.alert(new texas.WaitRoomUI((this.data.id)), true);
            };
            BsxqView.prototype.on_goBackGameBtn = function (e) {
                this.startJoinGame();
            };
            BsxqView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.BaseApi.removeCmd("matchStart", this.acceptMatch, this);
                texas.PanelTween.popPanel();
            };
            BsxqView.prototype.mainAssetName = function () {
                return "spr_bsxq_view";
            };
            BsxqView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
                texas.EventManager.removeCmd(texas.Events.gotoJLPage, this.gotoJLPage, this);
                texas.BaseApi.removeCmd("matchStart", this.acceptMatch, this);
                egret.Tween.removeTweens(this);
                egret.clearInterval(this.timeId1);
            };
            return BsxqView;
        }(texas.BasePanel));
        texas.BsxqView = BsxqView;
        __reflect(BsxqView.prototype, "kelvin.texas.BsxqView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqWjLine = (function (_super) {
            __extends(BsxqWjLine, _super);
            function BsxqWjLine() {
                var _this = _super.call(this) || this;
                _this.numdisy = 2;
                _this.iscanTouch = true;
                _this.createGameScene();
                return _this;
            }
            BsxqWjLine.prototype.createGameScene = function () {
                this.ratioTxt = texas.Tool.createTextFiled(270, 25 - this.numdisy, 200, 40, "", 26, 0xffffff, "center");
                this.addChild(this.ratioTxt);
                this.rewardTxt = texas.Tool.createTextFiled(420, 25 - this.numdisy, 200, 40, "", 26, 0xffffff, "right");
                this.addChild(this.rewardTxt);
                this.line = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiexian", false, 5, 70);
                this.addChild(this.line);
                this.touchEnabled = true;
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.floatUid, this);
                this.height = 70;
                this.iscanTouch = false;
                texas.EventManager.registerCmd(texas.Events.controlHContanier, this.controlHContanier, this);
            };
            BsxqWjLine.prototype.floatUid = function () {
                if (this.iscanTouch == false) {
                    return;
                }
                // ApiState.showText("该玩家id为：" + this.data.uid);
                texas.RoomApi.getPlayerMatchRoomId(this.data.matchId, this.data.uid, this.getroomid.bind(this), this.getError.bind(this));
            };
            BsxqWjLine.prototype.getroomid = function (data) {
                var roomid = data.room_id;
                if (!roomid) {
                    var text = "当前时间该玩家暂无房间信息";
                    if (this.data.serverstate == 0) {
                        text = "比赛未开始";
                    }
                    else if (this.data.money <= 0) {
                        text = "该玩家已淘汰";
                    }
                    texas.ApiState.showText(text);
                    return;
                }
                lzm.Alert.alert(new texas.WaitRoomUI((this.data.matchId), Number(roomid)));
            };
            BsxqWjLine.prototype.getError = function (data) {
                if (data.state == -4) {
                    texas.ApiState.showText("该玩家已淘汰");
                }
                else {
                    texas.ApiState.show(data.state);
                }
            };
            BsxqWjLine.prototype.controlHContanier = function (data) {
                this.iscanTouch = data;
            };
            BsxqWjLine.prototype.dataChanged = function () {
                if (!this.data) {
                    return;
                }
                this.showUI();
            };
            BsxqWjLine.prototype.setData = function (data) {
                this.data = data;
                this.showUI();
            };
            BsxqWjLine.prototype.showUI = function () {
                this.rewardTxt.text = "" + this.data.money;
                if (this.data.matchtype == "wcaa") {
                    this.ratioTxt.text = "";
                }
                else {
                    this.ratioTxt.text = "" + this.data.score;
                }
                if (this.img) {
                    texas.Tool.removeFromParent(this.img);
                }
                if (this.levelTxt) {
                    texas.Tool.removeFromParent(this.levelTxt);
                }
                if (this.heartimg) {
                    texas.Tool.removeFromParent(this.heartimg);
                }
                if (this.nameTxt) {
                    texas.Tool.removeFromParent(this.nameTxt);
                }
                if (this.heartTxt) {
                    texas.Tool.removeFromParent(this.heartTxt);
                }
                var text = texas.StrUtil.cutOutName(this.data.name, 6);
                this.nameTxt = texas.Tool.createTextFiled(75, 25 - this.numdisy, 200, 40, text, 26, 0xffffff, "left");
                this.addChild(this.nameTxt);
                if (this.data.rank == 0) {
                    this.img = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_jinbei", false, 10, 15 - this.numdisy);
                    this.addChild(this.img);
                }
                else if (this.data.rank == 1) {
                    this.img = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_yinbei", false, 10, 15 - this.numdisy);
                    this.addChild(this.img);
                }
                else if (this.data.rank == 2) {
                    this.img = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_tongbei", false, 10, 15 - this.numdisy);
                    this.addChild(this.img);
                }
                else if (this.data.rank == -1) {
                }
                else {
                    this.levelTxt = texas.Tool.createTextFiled(30, 25 - this.numdisy, 200, 40, String(this.data.rank + 1), 26, 0xffffff, "left");
                    this.addChild(this.levelTxt);
                }
                if (this.data.heart > 0) {
                    this.heartimg = texas.Tool.createBitmapByName("img_img_pyqdz_jiangli_xin");
                    this.heartimg.y = 35 - this.numdisy;
                    this.heartimg.x = 74 + this.nameTxt.textWidth + 5;
                    this.addChild(this.heartimg);
                    this.heartTxt = texas.Tool.createTextFiled(this.heartimg.x + this.heartimg.width + 5, 25 - this.numdisy, 50, 40, String(this.data.heart), 22, 0x91b4ff, "left");
                    this.addChild(this.heartTxt);
                }
            };
            BsxqWjLine.prototype.dispose = function () {
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.floatUid, this);
                texas.EventManager.removeCmd(texas.Events.controlHContanier, this.controlHContanier, this);
            };
            return BsxqWjLine;
        }(eui.ItemRenderer));
        texas.BsxqWjLine = BsxqWjLine;
        __reflect(BsxqWjLine.prototype, "kelvin.texas.BsxqWjLine");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛详情的玩家UI
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BsxqWjUI = (function (_super) {
            __extends(BsxqWjUI, _super);
            function BsxqWjUI(data) {
                var _this = _super.call(this, true) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            BsxqWjUI.prototype.createGameScene = function () {
                this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);
                this.listbg.height = texas.App.stageHeight - 590;
                this.listContainer = this.scrollView;
                this.addChild(this.listContainer);
                this.listContainer.x = this.listbg.x;
                this.listContainer.y = this.listbg.y + 70;
                this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.listContainer.width = this.listbg.width;
                this.listContainer.height = this.listbg.height - 20 - 70;
                this.list = new eui.List();
                this.list.width = this.listContainer.width;
                this.list.itemRenderer = texas.BsxqWjLine;
                this.list.layout = new eui.VerticalLayout();
                texas.Tool.replaceSwfTxt("inputTxt", this);
                this.input1 = new texas.InputText(this.inputTxt);
                this.input1.setDefaultText("搜索玩家id");
                this.inputTxt.text = "搜索玩家id";
                this.scrollView.viewport = this.list;
                this.initDownRefresh(false);
                this.setDownRefresh(this.refreshCall.bind(this));
                this.infoArr = [];
                this.getInfoNum = 0;
                this.collection = new eui.ArrayCollection();
                this.list.dataProvider = this.collection;
                this.pljfTxt.touchEnabled = true;
                this.pljfTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toupl, this);
                this.crateSingeInfo();
                this.updateUI();
                texas.MatchApi.getMatchRoleInfo(this.getInfoNum + 1, this.data.id, this.getInfo.bind(this));
            };
            BsxqWjUI.prototype.toupl = function (e) {
                // PanelTween.pushPanel(new CardScoreView());
            };
            BsxqWjUI.prototype.crateSingeInfo = function () {
                this.singleUI = new texas.BsxqWjLine();
                this.singleUI.x = this.scrollView.x;
                this.singleUI.y = this.scrollView.y;
                this.addChild(this.singleUI);
                this.singleUI.visible = false;
            };
            BsxqWjUI.prototype.singleGetSuccess = function (data) {
                var min = {
                    name: data.data[1],
                    uid: data.data[0],
                    heart: data.data[4] - 1,
                    score: data.data[3],
                    rank: 1,
                    money: data.data[2],
                    matchtype: this.data.matchtype,
                    matchId: this.data.id,
                };
                this.singleUI.setData(min);
                this.scrollView.visible = false;
                this.singleUI.visible = true;
            };
            BsxqWjUI.prototype.updateUI = function () {
                this.csrsTxt.text = "" + this.data.havepeople;
                this.csrcTxt.text = String(this.data.cur_buy_count);
                if (this.data.matchtype == "wcaa") {
                    this.pljfTxt.visible = false;
                    this.gthImg.visible = false;
                }
            };
            BsxqWjUI.prototype.refreshCall = function () {
                if (this.infoArr.length >= this.data.havepeople) {
                    this.downRefreshOver();
                    // ApiState.showText("当前房间玩家已经全部展示完毕");
                }
                else {
                    texas.RefreshUI.ins.show(texas.App.stageWidth / 2, texas.App.stageHeight - 300);
                    this.getInfoNum++;
                    texas.MatchApi.getMatchRoleInfo(this.getInfoNum + 1, this.data.id, this.getInfo.bind(this));
                }
            };
            BsxqWjUI.prototype.getInfo = function (data) {
                var infoArr = [];
                // = [{ heart: 3, name: "2142353535", score: 20, money: 123544, rank: 1, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 2, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 3, matchtype: "common" },
                // { heart: 0, name: "2142353f d 535", score: 20, money: 123544, rank: 4, matchtype: "common" },
                // { heart: 4, name: "2142353535", score: 20, money: 123544, rank: 5, matchtype: "common" },
                // { heart: 12, name: "2142353535", score: 20, money: 123544, rank: 6, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 7, matchtype: "common" },
                // { heart: 8, name: "2142353535", score: 20, money: 123544, rank: 8, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 9, matchtype: "common" },
                // { heart: 0, name: "214235qqqqqq3535", score: 20, money: 123544, rank: 10, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 11, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 12, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 13, matchtype: "common" },
                // { heart: 0, name: "2142353535", score: 20, money: 123544, rank: 14, matchtype: "common" },
                // ];
                for (var i = 0; i < data.data.length; i++) {
                    var min = {
                        name: data.data[i][1],
                        uid: data.data[i][0],
                        heart: data.data[i][4] - 1,
                        score: data.data[i][3],
                        rank: i,
                        money: data.data[i][2],
                        matchtype: this.data.matchtype,
                        matchId: this.data.id,
                        serverstate: this.data.serverstate,
                    };
                    infoArr.push(min);
                }
                for (var i = 0; i < infoArr.length; i++) {
                    this.infoArr.push(infoArr[i]);
                }
                this.createListUI(infoArr);
            };
            BsxqWjUI.prototype.createListUI = function (infoArr) {
                this.minSpArr = [];
                for (var i = 0; i < infoArr.length; i++) {
                    this.collection.addItem(infoArr[i]);
                }
                if (this.getInfoNum > 0) {
                    this.downRefreshOver();
                    // ApiState.showText("刷新成功");
                }
            };
            BsxqWjUI.prototype.on_clearBtn = function (e) {
                this.scrollView.visible = true;
                this.singleUI.visible = false;
                this.inputTxt.text = "搜索玩家id";
            };
            BsxqWjUI.prototype.on_searchBtn = function (e) {
                if (this.inputTxt.text == "搜索玩家id") {
                    this.scrollView.visible = true;
                    this.singleUI.visible = false;
                }
                else {
                    texas.MatchApi.getPlayerInfo(this.inputTxt.text, this.data.id, this.singleGetSuccess.bind(this), this.singleGetError.bind(this));
                }
            };
            BsxqWjUI.prototype.singleGetError = function (data) {
                if (data.state == -4) {
                    texas.ApiState.showText("该玩家不存在，请输入正确的玩家id");
                }
            };
            BsxqWjUI.prototype.mainAssetName = function () {
                return "spr_bsxq_wj_ui";
            };
            BsxqWjUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.pljfTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.toupl, this);
                // for (let i = 0; i < this.minSpArr.length; i++) {
                //     this.minSpArr[i].dispo
                // }
            };
            return BsxqWjUI;
        }(texas.BasePanel));
        texas.BsxqWjUI = BsxqWjUI;
        __reflect(BsxqWjUI.prototype, "kelvin.texas.BsxqWjUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 牌力积分介绍
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var CardScoreView = (function (_super) {
            __extends(CardScoreView, _super);
            function CardScoreView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            CardScoreView.prototype.createGameScene = function () {
                var _this = this;
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.title.text = "牌力积分";
                this.scrollView.y = 100;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                this.scrollView.bounces = false;
                this.addChild(this.scrollView);
                egret.setTimeout(function () {
                    _this.createImgs();
                }, this, 100);
            };
            CardScoreView.prototype.createImgs = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var allH, i, img, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                allH = 0;
                                i = 1;
                                _b.label = 1;
                            case 1:
                                if (!(i < 6)) return [3 /*break*/, 4];
                                img = new egret.Bitmap();
                                _a = img;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName("img_dt_ct" + i + "_png")];
                            case 2:
                                _a.texture = _b.sent();
                                img.y = allH;
                                allH = allH + img.height;
                                this.scrollView.container.addChild(img);
                                _b.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4:
                                this.scrollView.setScrollSize(texas.App.stageWidth, allH);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            CardScoreView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            CardScoreView.prototype.mainAssetName = function () {
                return "spr_mzjgb_view";
            };
            CardScoreView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return CardScoreView;
        }(texas.BasePanel));
        texas.CardScoreView = CardScoreView;
        __reflect(CardScoreView.prototype, "kelvin.texas.CardScoreView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 盲注结构表
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MzjgbView = (function (_super) {
            __extends(MzjgbView, _super);
            function MzjgbView(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            MzjgbView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.listbg.scale9Grid = new egret.Rectangle(40, 40, this.listbg.width - 40, this.listbg.height - 40);
                this.listbg.height = texas.App.stageHeight - 200;
                this.listContainer = new eui.Scroller();
                this.addChild(this.listContainer);
                this.listContainer.x = this.listbg.x;
                this.listContainer.y = this.listbg.y;
                this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.listContainer.width = this.listbg.width;
                this.listContainer.height = this.listbg.height - 20;
                this.listimg = new eui.Image();
                this.listimg.width = this.listContainer.width;
                this.container = new eui.Group();
                this.container.addChild(this.listimg);
                this.listContainer.viewport = this.container;
                this.getInfo();
                this.createListUI();
            };
            MzjgbView.prototype.getInfo = function () {
                this.infoArr = [];
                // this.infoArr = [{ level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },
                // { level: 1, blind: "50/100", bet: 100 },];
                for (var i in this.data.mzTable) {
                    var mindata = {
                        level: this.data.mzTable[i].level,
                        blind: this.data.mzTable[i].xm + "/" + this.data.mzTable[i].dm,
                        bet: this.data.mzTable[i].qz,
                    };
                    this.infoArr.push(mindata);
                }
            };
            MzjgbView.prototype.createListUI = function () {
                this.minSpArr = [];
                for (var i = 0; i < this.infoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(30, 15, 200, 40, "" + this.infoArr[i].level, 26, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var ratioTxt = texas.Tool.createTextFiled(221, 15, 200, 40, "" + this.infoArr[i].blind, 26, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(415, 15, 200, 40, "" + this.infoArr[i].bet, 26, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    var line = texas.Tool.createBitmapByName("img_img_pyqdz_mangzhu_fjiexian", false, 5, 70);
                    minsp.addChild(line);
                    if (this.infoArr[i].level == this.data.apply_max_mz_level) {
                        var ximg = texas.Tool.createBitmapByName("img_img_youer_jz", false, levelTxt.x + levelTxt.textWidth + 14, 26);
                        var text = texas.Tool.createTextFiled(levelTxt.x + levelTxt.textWidth + 14, 15, 200, 40, "x", 22, 0xffffff, "left");
                        minsp.addChild(ximg);
                    }
                    else if (this.infoArr[i].level < this.data.apply_max_mz_level) {
                        var img2 = texas.Tool.createBitmapByName("img_img_youer_xin", false, levelTxt.x + levelTxt.textWidth + 10, 27);
                        minsp.addChild(img2);
                    }
                    minsp.y = i * 70;
                    this.container.addChild(minsp);
                    this.minSpArr.push(minsp);
                }
                this.listimg.height = this.infoArr.length * 70;
            };
            MzjgbView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            MzjgbView.prototype.mainAssetName = function () {
                return "spr_mzjgb_view";
            };
            MzjgbView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return MzjgbView;
        }(texas.BasePanel));
        texas.MzjgbView = MzjgbView;
        __reflect(MzjgbView.prototype, "kelvin.texas.MzjgbView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GamePanel = (function (_super) {
            __extends(GamePanel, _super);
            function GamePanel() {
                var _this = _super.call(this, true) || this;
                texas.ExtGameHelper.extGamePanel = _this;
                texas.SoundManager.setGameConfig();
                var clazz = egret.getDefinitionByName(texas.AppConfig.clientMainClass);
                _this.game = new clazz();
                texas.BaseApi.registerCmd("gameMessage", _this.game.onGameMessage, _this.game);
                texas.BaseApi.registerCmd("gameMessage", _this.onGameMessage, _this);
                if (_this.game.getBackGround() != null) {
                    _this.addChild(_this.game.getBackGround());
                }
                _this.addChild(_this.game);
                if (texas.RoomData.getCurrentRoom() != null) {
                    _this.game.onInit();
                }
                else {
                    _this.game.onInitByMovie(null);
                }
                texas.App.gameing = true;
                return _this;
            }
            GamePanel.prototype.onGameMessage = function (data) {
                console.log("大厅的打印");
                console.log(data);
            };
            GamePanel.prototype.layout = function () {
                if (this.game != null) {
                    this.game.rotation = 0;
                    this.scaleGame();
                    this.game.layout();
                }
            };
            GamePanel.prototype.scaleGame = function () {
                // if (!this.gameData.autoScale) {
                // 	return;
                // }
                this.game.anchorOffsetX = texas.App.designWidth / 2;
                this.game.anchorOffsetY = texas.App.designHeight / 2;
                var sx = texas.App.stageWidth / texas.App.designWidth;
                var sy = texas.App.stageHeight / texas.App.designHeight;
                if (sx > sy) {
                    this.game.scaleX = this.game.scaleY = sy;
                }
                else {
                    this.game.scaleX = this.game.scaleY = sx;
                }
                this.game.x = texas.App.stageWidth / 2;
                this.game.y = texas.App.stageHeight / 2;
            };
            GamePanel.prototype.dispose = function () {
                if (this.game != null) {
                    texas.BaseApi.removeCmd("gameMessage", this.game.onGameMessage, this.game);
                    texas.BaseApi.removeCmd("gameMessage", this.onGameMessage, this);
                    if (this.game.getBackGround() != null) {
                        this.game.getBackGround().dispose();
                    }
                    this.game.dispose();
                }
                _super.prototype.dispose.call(this);
                // App.setOrientationMode(egret.OrientationMode.LANDSCAPE);
                texas.App.gameing = false;
            };
            return GamePanel;
        }(texas.BasePanel));
        texas.GamePanel = GamePanel;
        __reflect(GamePanel.prototype, "kelvin.texas.GamePanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 * 比赛详情
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameBsqxView = (function (_super) {
            __extends(GameBsqxView, _super);
            function GameBsqxView(matchid, reward, min_reward, mz_level, iswatch, apply_max_mz_level) {
                var _this = _super.call(this) || this;
                _this.iswatch = iswatch;
                _this.matchid = matchid;
                _this.reward = reward;
                _this.min_reward = min_reward;
                _this.mz_level = mz_level;
                _this.apply_max_mz_level = apply_max_mz_level;
                _this.createGameScene();
                return _this;
            }
            GameBsqxView.prototype.createGameScene = function () {
                this.view = this.$children[0];
                this.visible = false;
                this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                this.addChildAt(this.bgSp, 0);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.bg.touchEnabled = true;
                this.chooseSsxqBtn.visible = false;
                this.unchoosePzs.visible = false;
                texas.MatchApi.getMatchInfo(String(this.matchid), this.getSpData.bind(this));
            };
            GameBsqxView.prototype.getSpData = function (data) {
                this.spData = {};
                this.spData.mzTable = data.mzTable;
                this.spData.roles = data.roles;
                this.spData.pokerScores = data.pokerScores;
                this.spData.gameScores = data.gameScores;
                this.spData.rooms = data.rooms;
                this.spData.moneyCircle = data.moneyCircle;
                this.spData.id = String(this.matchid);
                this.spData.reward = this.reward;
                this.spData.min_reward = this.min_reward;
                this.spData.mz_level = this.mz_level;
                this.spData.apply_max_mz_level = this.apply_max_mz_level;
                this.spData.init_game_score = data.match.init_game_score;
                this.bsxqUI = new texas.GameBsxqUI(this.spData);
                this.view.addChild(this.bsxqUI);
                this.bsxqUI.y = 130;
                this.pzsUI = new texas.GamePzsUI(this.spData, this.iswatch);
                this.view.addChild(this.pzsUI);
                this.pzsUI.y = 110;
                this.pzsUI.visible = false;
            };
            GameBsqxView.prototype.show = function () {
                this.view.anchorOffsetY = this.view.height;
                this.view.y = texas.App.stageHeight;
                this.view.x = -this.view.width;
                this.visible = true;
                this.view.scaleX = this.view.scaleY = texas.ExtGameHelper.getGameScalex();
                egret.Tween.get(this.view).to({ x: 0 }, 250, egret.Ease.quartOut).call(function () {
                });
            };
            GameBsqxView.prototype.hide = function () {
                var _this = this;
                egret.Tween.get(this.view).to({ x: -this.view.width }, 250, egret.Ease.quartOut).call(function () {
                    _this.dispose();
                });
            };
            GameBsqxView.prototype.on_chooseSsxqBtn = function (e) {
                this.chooseSsxqBtn.visible = false;
                this.choosePzsBtn.visible = true;
                this.unchooseSsxq.visible = true;
                this.unchoosePzs.visible = false;
                this.bsxqUI.visible = true;
                this.lineImg.visible = true;
                this.pzsUI.visible = false;
            };
            GameBsqxView.prototype.on_choosePzsBtn = function (e) {
                this.chooseSsxqBtn.visible = true;
                this.choosePzsBtn.visible = false;
                this.unchooseSsxq.visible = false;
                this.unchoosePzs.visible = true;
                this.bsxqUI.visible = false;
                this.lineImg.visible = false;
                this.pzsUI.visible = true;
            };
            GameBsqxView.prototype.mainAssetName = function () {
                return "spr_game_ssxq_view";
            };
            GameBsqxView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return GameBsqxView;
        }(texas.BasePanel));
        texas.GameBsqxView = GameBsqxView;
        __reflect(GameBsqxView.prototype, "kelvin.texas.GameBsqxView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 游戏赛事详情
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameBsxqUI = (function (_super) {
            __extends(GameBsxqUI, _super);
            function GameBsxqUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            GameBsxqUI.prototype.createGameScene = function () {
                this.getJlInfo();
                this.getMzInfo();
                this.updateUI();
                this.createJlUI();
                this.createMzUI();
            };
            GameBsxqUI.prototype.getMzInfo = function () {
                this.mzinfoArr = [];
                for (var i in this.data.mzTable) {
                    var mindata = {
                        level: this.data.mzTable[i].level,
                        blind: this.data.mzTable[i].xm + "/" + this.data.mzTable[i].dm,
                        bet: this.data.mzTable[i].qz,
                    };
                    this.mzinfoArr.push(mindata);
                }
            };
            GameBsxqUI.prototype.createMzUI = function () {
                this.mzlistContainer = new texas.ScrollView();
                this.addChild(this.mzlistContainer);
                this.mzlistContainer.x = 0;
                this.mzlistContainer.y = 400;
                this.mzlistContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.mzlistContainer.scrollPolicyH = "off";
                this.mzlistContainer.setShowSize(this.width, 640);
                this.mzminSpArr = [];
                for (var i = 0; i < this.mzinfoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(70, 0, 200, 40, "" + this.mzinfoArr[i].level, 22, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var ratioTxt = texas.Tool.createTextFiled(195, 0, 200, 40, "" + this.mzinfoArr[i].blind, 22, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(340 - 10, 0, 200, 40, "" + this.mzinfoArr[i].bet, 22, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    if (this.mzinfoArr[i].level == this.data.mz_level) {
                        var img1 = texas.Tool.createBitmapByName("img_img_zuoer_xuanzong", false, 30, 10);
                        minsp.addChildAt(img1, 0);
                        var blue = texas.Tool.createBitmapByName("img_img_zuoer_xuanzkuang", false, 10, 2);
                        minsp.addChildAt(blue, 0);
                    }
                    if (this.mzinfoArr[i].level == this.data.apply_max_mz_level) {
                        var ximg = texas.Tool.createBitmapByName("img_img_youer_jz", false, levelTxt.x + levelTxt.textWidth + 10, 10);
                        var text = texas.Tool.createTextFiled(levelTxt.x + levelTxt.textWidth + 10, -2, 200, 40, "x", 22, 0xffffff, "left");
                        minsp.addChild(ximg);
                    }
                    else if (this.mzinfoArr[i].level < this.data.apply_max_mz_level) {
                        var img2 = texas.Tool.createBitmapByName("img_img_youer_xin", false, levelTxt.x + levelTxt.textWidth + 10, 12);
                        minsp.addChild(img2);
                    }
                    // let line = Tool.createBitmapByName("img_img_pyqdz_mangzhu_fjiexian", false, 5, 70);
                    // minsp.addChild(line);
                    minsp.y = i * 60;
                    this.mzlistContainer.container.addChild(minsp);
                    this.mzminSpArr.push(minsp);
                }
                this.mzlistContainer.setScrollSize(this.width, this.mzinfoArr.length * 60);
            };
            GameBsxqUI.prototype.getJlInfo = function () {
                this.jlinfoArr = [];
                // this.data.moneyCircle = ["337", "36", [["1", "0.2209 "], ["2", "0.1550 "], ["3", "0.0997 "], ["4", "0.0738 "], ["5", "0.0554 "], ["6", "0.0443 "], ["7", "0.0368 "], ["8", "0.0295 "], ["9", "0.0221 "], ["12", "0.0161 "], ["15", "0.0134 "], ["18", "0.0115 "], ["21", "0.0099 "], ["24", "0.0092 "], ["27", "0.0082 "], ["36", "0.0072 "]]];
                var arr = this.data.moneyCircle[2];
                // console.log(arr);
                var allmoney = this.data.reward;
                if (allmoney < this.data.min_reward) {
                    allmoney = this.data.min_reward;
                }
                for (var i = 0; i < arr.length; i++) {
                    var mindata = {
                        level: arr[i][0],
                        ratio: arr[i][1],
                        reward: Number((allmoney * arr[i][1]).toFixed(2)),
                    };
                    if (i >= 9) {
                        var num = Number(arr[i - 1][0]) + 1;
                        mindata.level = num + "-" + arr[i][0];
                    }
                    this.jlinfoArr.push(mindata);
                }
            };
            GameBsxqUI.prototype.createJlUI = function () {
                this.jllistContainer = new texas.ScrollView();
                this.addChild(this.jllistContainer);
                this.jllistContainer.x = 0;
                this.jllistContainer.y = 125;
                this.jllistContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.jllistContainer.scrollPolicyH = "off";
                this.jllistContainer.width = this.width;
                this.jllistContainer.height = 200;
                this.jsminSpArr = [];
                for (var i = 0; i < this.jlinfoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(70, 0, 200, 40, this.jlinfoArr[i].level, 22, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var rationum = Math.round(this.jlinfoArr[i].ratio * 10000) / 100 + "%";
                    var ratioTxt = texas.Tool.createTextFiled(195, 0, 200, 40, rationum, 22, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(340 - 10, 0, 200, 40, "" + this.jlinfoArr[i].reward, 22, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    // let line = Tool.createBitmapByName("img_img_pyqdz_jiangli_fjiex", false, 5, 70);
                    // minsp.addChild(line);
                    minsp.y = i * 60;
                    this.jllistContainer.container.addChild(minsp);
                    this.jsminSpArr.push(minsp);
                }
                this.jllistContainer.setScrollSize(this.width, this.jlinfoArr.length * 60);
            };
            GameBsxqUI.prototype.updateUI = function () {
                console.log(this.data);
                var allmoney = this.data.reward;
                if (allmoney < this.data.min_reward) {
                    allmoney = this.data.min_reward;
                }
                this.jcTxt.text = "" + allmoney;
                this.jlqTxt.text = this.data.moneyCircle[1];
            };
            GameBsxqUI.prototype.mainAssetName = function () {
                return "spr_game_ssxq_ui";
            };
            GameBsxqUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return GameBsxqUI;
        }(texas.BasePanel));
        texas.GameBsxqUI = GameBsxqUI;
        __reflect(GameBsxqUI.prototype, "kelvin.texas.GameBsxqUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 游戏牌桌数
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GamePzsUI = (function (_super) {
            __extends(GamePzsUI, _super);
            function GamePzsUI(data, iswatch) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.iswatch = iswatch;
                _this.createGameScene();
                return _this;
            }
            GamePzsUI.prototype.createGameScene = function () {
                texas.MatchApi.getMatchRooms(this.data.id, this.getInfo.bind(this));
            };
            GamePzsUI.prototype.getInfo = function (data) {
                this.infoArr = [];
                var showArr = [];
                for (var i in data.rooms) {
                    var mindata = {
                        tableid: data.rooms[i].id,
                        usersnum: Object.keys(data.rooms[i].players).length,
                        players: data.rooms[i].players,
                        max: data.rooms[i].maxScore,
                        min: data.rooms[i].minScore,
                        match_id: data.rooms[i].match_id,
                        showId: data.rooms[i].table_num + 1,
                    };
                    if (mindata.max == -1) {
                        mindata.max = this.data.init_game_score;
                    }
                    if (mindata.min == -1) {
                        mindata.min = this.data.init_game_score;
                    }
                    this.infoArr.push(mindata);
                    showArr.push(mindata);
                }
                texas.ArrayUtil.AscendingArray("showId", this.infoArr);
                // for (let i = 0; i < showArr.length; i++) {
                //     showArr[i].showId = i + 1;
                // }
                this.createUI();
            };
            GamePzsUI.prototype.createUI = function () {
                this.listContainer = new texas.ScrollView();
                this.addChild(this.listContainer);
                this.listContainer.x = 0;
                this.listContainer.y = 80;
                this.listContainer.scrollPolicyV = eui.ScrollPolicy.AUTO;
                this.listContainer.scrollPolicyH = "off";
                this.listContainer.setShowSize(this.width, 990);
                this.minSpArr = [];
                for (var i = 0; i < this.infoArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var levelTxt = texas.Tool.createTextFiled(30, 0, 200, 40, "" + this.infoArr[i].showId, 24, 0xffffff, "left");
                    minsp.addChild(levelTxt);
                    var ratioTxt = texas.Tool.createTextFiled(190, 0, 200, 40, "" + this.infoArr[i].usersnum, 24, 0xffffff, "center");
                    minsp.addChild(ratioTxt);
                    var rewardTxt = texas.Tool.createTextFiled(170, 0, 400, 40, "" + this.infoArr[i].max + "/" + this.infoArr[i].min, 24, 0xffffff, "right");
                    minsp.addChild(rewardTxt);
                    // let line = Tool.createBitmapByName("img_img_pyqdz_paizuo_fjx", false, 5, 70);
                    // minsp.addChild(line);
                    minsp.y = i * 60;
                    this.listContainer.container.addChild(minsp);
                    this.minSpArr.push(minsp);
                    minsp.name = this.infoArr[i].tableid;
                    minsp.touchEnabled = true;
                    minsp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                }
                this.listContainer.setScrollSize(this.width, this.infoArr.length * 60);
            };
            GamePzsUI.prototype.gotoGame = function (e) {
                if (this.iswatch == 0) {
                    return;
                }
                var data;
                for (var i = 0; i < this.infoArr.length; i++) {
                    if (String(this.infoArr[i].tableid) == e.target.name) {
                        data = this.infoArr[i];
                        break;
                    }
                }
                lzm.Alert.alert(new texas.WaitRoomUI((data.match_id), Number(data.tableid)));
            };
            GamePzsUI.prototype.mainAssetName = function () {
                return "spr_game_pzs_ui";
            };
            GamePzsUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                for (var i = 0; i < this.minSpArr.length; i++) {
                    this.minSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoGame, this);
                }
            };
            return GamePzsUI;
        }(texas.BasePanel));
        texas.GamePzsUI = GamePzsUI;
        __reflect(GamePzsUI.prototype, "kelvin.texas.GamePzsUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 * 我的比赛按钮入口
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameMatchBtn = (function (_super) {
            __extends(GameMatchBtn, _super);
            function GameMatchBtn(matchid, callback, error) {
                var _this = _super.call(this) || this;
                _this.matchid = matchid;
                _this.callback = callback;
                _this.error = error;
                _this.createGameScene();
                return _this;
            }
            GameMatchBtn.prototype.createGameScene = function () {
                this.btn = this.assetSwf().createButton("btn_img_youxdat_wodesais");
                this.addChild(this.btn);
                this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBtn, this);
                this.touchEnabled = true;
            };
            GameMatchBtn.prototype.touchBtn = function (e) {
                if (!texas.GameMatchView.gamematchView) {
                    // ExtGameHelper.popMyMatchView(this.matchid,this.callback,this.error);
                }
                else {
                    texas.GameMatchView.gamematchView.hide();
                }
            };
            GameMatchBtn.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBtn, this);
            };
            return GameMatchBtn;
        }(texas.BasePanel));
        texas.GameMatchBtn = GameMatchBtn;
        __reflect(GameMatchBtn.prototype, "kelvin.texas.GameMatchBtn");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 我的赛事的每一行
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameMatchLine = (function (_super) {
            __extends(GameMatchLine, _super);
            function GameMatchLine(data, index, stageview, matchid, callback, error, type) {
                if (type === void 0) { type = "game"; }
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.index = index;
                _this.stageview = stageview;
                _this.callback = callback;
                _this.error = error;
                _this.matchid = matchid;
                _this.type = type;
                _this.createGameScene();
                return _this;
            }
            GameMatchLine.prototype.initUI = function () {
                this.mtticon.visible = false;
                this.sngicon.visible = false;
                this.lightBg.visible = false;
                this.darkBg.visible = false;
                this.stopImg.visible = false;
                this.sginImg.visible = false;
                this.stopImg.touchEnabled = false;
                this.sginImg.touchEnabled = false;
                this.delayImg.visible = false;
                this.gameImg.visible = false;
                this.goToBtn.visible = false;
            };
            GameMatchLine.prototype.createGameScene = function () {
                this.updateState();
                this.touchEnabled = true;
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
                this.initUI();
                this.updateUI();
            };
            GameMatchLine.prototype.touch = function () {
                this.goToBtnTouch(null);
            };
            GameMatchLine.prototype.goToBtnTouch = function (e) {
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    if (String(this.matchid) != this.data.id) {
                        texas.Log.log("进去比赛----" + this.data.id);
                        if (this.callback) {
                            this.callback(this.data.id);
                        }
                        this.stageview.dispose();
                        lzm.Alert.alert(new texas.WaitRoomUI((this.data.id)));
                    }
                }
            };
            GameMatchLine.prototype.updateState = function () {
                // let zeroTime1 = (new Date(new Date().toLocaleDateString()).getTime()); // 当天0点
                // state  1是报名中   2是延长报名  ps：延长报名情况下，先调加入房间 数据为null 延迟3再调一次  一直到成功为止   3是截止报名   4是游戏中   5是暂时不能报名
                // signed  1 是已经报名  2 是未报名  3是已经淘汰
                var nowtime = new Date().getTime();
                // console.log("nowtime",nowtime);
                // console.log("this.data.apply_time_end",this.data.apply_time_end);
                if (this.data.serverstate == 0) {
                    if (this.data.type == "mtt") {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.apply_time && nowtime <= this.data.apply_time_end) {
                            this.data.state = 1;
                        }
                        else if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime <= this.data.start_time && nowtime >= this.data.apply_time_end) {
                            //说明在游戏开始前不能报名的时间段
                            this.data.state = 3;
                        }
                        else if (nowtime >= this.data.apply_time_end + this.data.apply_delay_time * 1000 || nowtime > this.data.apply_date_end + this.data.apply_delay_time * 1000) {
                            //截止报名
                            this.data.state = 3;
                        }
                        else {
                            this.data.state = 5;
                        }
                        if (this.data.state != 5) {
                            if (this.data.mz_level > this.data.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.havepeople >= this.data.apply_max_people) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                    }
                    else if (this.data.type == "sng") {
                        this.data.state = 1;
                    }
                }
                else {
                    // console.log("nowtime",nowtime);
                    //      console.log(" this.data.apply_date_end + this.data.delaytime * 1000",this.data.apply_time_end + this.data.apply_delay_time * 1000);
                    if (this.data.signed == 1) {
                        this.data.state = 4;
                    }
                    else {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.start_time && nowtime <= this.data.start_time + this.data.apply_delay_time * 1000) {
                            // console.log("到了这里");
                            //说明在延迟报名时间内
                            this.data.state = 2;
                            if (this.data.mz_level > this.data.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.havepeople >= this.data.apply_max_people) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                        else {
                            this.data.state = 3;
                        }
                    }
                }
            };
            GameMatchLine.prototype.updateUI = function () {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.sngicon.visible = true;
                    this.promptTxt.text = "人满即开";
                }
                else if (this.data.type == "mtt") {
                    this.mtticon.visible = true;
                    if (this.data.serverstate == 1) {
                        this.promptTxt.text = "比赛进行中";
                    }
                    else {
                        var myDate = new Date();
                        var nowDate = texas.DateUtils.formatDate(myDate);
                        this.promptTxt.text = "开赛时间 " + nowDate + " " + this.data.start_time_str;
                    }
                }
                if (this.index % 2 == 0) {
                    this.lightBg.visible = true;
                }
                else {
                    this.darkBg.visible = true;
                }
                if (this.data.state == 1) {
                    this.sginImg.visible = true;
                }
                else if (this.data.state == 2) {
                    this.delayImg.visible = true;
                }
                else if (this.data.state == 3) {
                    this.stopImg.visible = true;
                }
                else if (this.data.state == 4) {
                    this.gameImg.visible = true;
                    this.promptTxt.text = "牌局进行中";
                }
                else if (this.data.state == 0) {
                }
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    if (String(this.matchid) != this.data.id) {
                        this.goToBtn.visible = true;
                    }
                }
                this.titleTxt.text = this.data.titie;
                if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                    this.sginmoneyTxt.text = "免费";
                }
                else if (this.data.signmoney == 0) {
                    var money = this.data.apply_score + this.data.service_score;
                    this.sginmoneyTxt.text = "" + money;
                }
                else {
                    var money = this.data.signmoney + this.data.service_gold;
                    this.sginmoneyTxt.text = "" + money;
                }
                // this.sginmoneyTxt.text = String(this.data.signmoney);
                this.explainTxt.text = this.data.explain;
                // this.peopleNumTxt.text = this.data.havepeople + "/" + this.data.allpeople;
                // if (this.data.allpeople > 9999) {
                //     this.peopleNumTxt.text = "" + this.data.havepeople;
                // }
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    if (this.data.type == "sng" || this.data.satellite == 1) {
                        this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                    else if (this.data.type == "mtt") {
                        this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                }
                else {
                    if (this.data.type == "sng" || this.data.satellite == 1) {
                        this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                    }
                    else if (this.data.type == "mtt") {
                        this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                        if (this.data.apply_max_people > 9999) {
                            this.peopleNumTxt.text = "" + (this.data.havepeople);
                        }
                    }
                }
                if (this.data.state == 2) {
                    // let time = this.data.apply_delay_time - this.data.time;
                    // let dateTool = new DateUtils();
                    // let timestr = dateTool.getFormatBySecond(time, 6);
                    // this.delayTxt.text = "剩余" + timestr;
                }
            };
            GameMatchLine.prototype.mainAssetName = function () {
                return "spr_game_match_line_ui";
            };
            GameMatchLine.prototype.dispose = function () {
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            };
            return GameMatchLine;
        }(texas.BasePanel));
        texas.GameMatchLine = GameMatchLine;
        __reflect(GameMatchLine.prototype, "kelvin.texas.GameMatchLine");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 我的赛事面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameMatchView = (function (_super) {
            __extends(GameMatchView, _super);
            function GameMatchView(matchid, callback, error, type) {
                if (type === void 0) { type = "game"; }
                var _this = _super.call(this, true) || this;
                GameMatchView.gamematchView = _this;
                _this.callBack = callback;
                _this.error = error;
                _this.matchid = matchid;
                _this.type = type;
                _this.createGameScene();
                return _this;
            }
            GameMatchView.prototype.createGameScene = function () {
                this.view = this.$children[1];
                if (this.type == "home") {
                    this.scrollView.x = 34;
                    this.scrollView.y = 100;
                    this.scrollView.setShowSize(this.width - 34, this.height - 100);
                }
                else {
                    this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                    this.addChildAt(this.bgSp, 0);
                    this.bgSp.touchEnabled = true;
                    this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                    this.closeBtn.visible = false;
                    this.visible = false;
                }
                this.bg.touchEnabled = true;
                this.addChild(this.scrollView);
                texas.MatchApi.getMyMatch(this.getInfo.bind(this));
                this.dateUtils = new texas.DateUtils();
                this.timer = new egret.Timer(1000);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
                this.timer.start();
            };
            GameMatchView.prototype.delayTimeRun = function () {
                if (this.uiArr) {
                    for (var i = 0; i < this.uiArr.length; i++) {
                        if (this.uiArr[i].data.state == 2) {
                            var distancetime = this.uiArr[i].data.start_time + this.uiArr[i].data.apply_delay_time * 1000 - new Date().getTime();
                            var str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                            this.uiArr[i].delayTxt.text = "" + str;
                        }
                        else {
                            this.uiArr[i].delayTxt.text = "";
                        }
                    }
                }
            };
            GameMatchView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ type: "sng", signed: 1, titie: "谁与争锋锦标赛1", signmoney: 1000, havepeople: 1, allpeople: 10, explain: "获得门票一张", state: 1 },
                // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛2", signmoney: 1002, havepeople: 2, allpeople: 10, explain: "获得门票一张", state: 3 },
                // { type: "sng", signed: 3, titie: "谁与争锋锦标赛3", signmoney: 1003, havepeople: 3, allpeople: 10, explain: "获得门票一张", state: 3 },
                // { type: "sng", signed: 1, titie: "谁与争锋锦标赛4", signmoney: 1004, havepeople: 4, allpeople: 10, explain: "获得门票一张", state: 3, },
                // { type: "ntt", signed: 1, titie: "谁与争锋锦标赛5", signmoney: 1005, havepeople: 5, allpeople: 10, explain: "获得门票一张", state: 1, },
                // { type: "sng", signed: 3, titie: "谁与争锋锦标赛6", signmoney: 1006, havepeople: 6, allpeople: 10, explain: "获得门票一张", state: 1, },
                // { type: "sng", signed: 1, titie: "谁与争锋锦标赛7", signmoney: 1007, havepeople: 7, allpeople: 10, explain: "获得门票一张", state: 1, },
                // { type: "mtt", signed: 3, titie: "谁与争锋锦标赛8", signmoney: 1008, havepeople: 8, allpeople: 10, explain: "获得门票一张", state: 3, },
                // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛9", signmoney: 1009, havepeople: 9, allpeople: 10, explain: "获得门票一张", state: 1, },
                // { type: "sng", signed: 3, titie: "谁与争锋锦标赛10", signmoney: 1010, havepeople: 10, allpeople: 10, explain: "获得门票一张", state: 1, },
                // { type: "sng", signed: 1, titie: "谁与争锋锦标赛11", signmoney: 1011, havepeople: 11, allpeople: 10, explain: "获得门票一张", state: 3, },
                // { type: "mtt", signed: 3, titie: "谁与争锋锦标赛12", signmoney: 1012, havepeople: 12, allpeople: 10, explain: "获得门票一张", state: 3, },
                // { type: "mtt", signed: 1, titie: "谁与争锋锦标赛13", signmoney: 1013, havepeople: 13, allpeople: 10, explain: "获得门票一张", state: 1, },]
                for (var i in data.matchs) {
                    if (i == "") {
                        continue;
                    }
                    if (data.matchs[i].state != 0 && data.matchs[i].state != 1 && data.matchs[i].state != 2) {
                        continue;
                    }
                    var mindata = {
                        id: data.matchs[i].id,
                        type: "",
                        signed: 2,
                        titie: data.matchs[i].name,
                        signmoney: data.matchs[i].apply_gold,
                        havepeople: data.matchs[i].people,
                        allpeople: data.matchs[i].apply_max_people,
                        explain: "",
                        state: null,
                        apply_date: null,
                        apply_time: null,
                        apply_date_end: null,
                        apply_time_end: null,
                        start_date: null,
                        start_time: null,
                        apply_delay_time: data.matchs[i].apply_delay_time,
                        serverstate: data.matchs[i].state,
                        mz_level: data.matchs[i].mz_level,
                        mz_interval: data.matchs[i].mz_interval,
                        reward: data.matchs[i].reward,
                        min_reward: data.matchs[i].min_reward,
                        cur_buy_count: data.matchs[i].cur_buy_count,
                        apply_score: data.matchs[i].apply_score,
                        apply_max_people: data.matchs[i].apply_max_people,
                        apply_max_mz_level: data.matchs[i].apply_max_mz_level,
                        service_gold: data.matchs[i].service_gold,
                        service_score: data.matchs[i].service_score,
                        over_people: data.matchs[i].over_people,
                        start_time_str: data.matchs[i].start_time,
                        start_date_str: data.matchs[i].start_date,
                        master_points_id: data.matchs[i].master_points_id,
                        masterRule: data.masterRule,
                        satellite: data.matchs[i].satellite,
                    };
                    if (data.matchs[i].type == 1) {
                        mindata.type = "sng";
                    }
                    else if (data.matchs[i].type == 2) {
                        mindata.type = "mtt";
                    }
                    var datestrstart = data.matchs[i].apply_date;
                    var datestampstart = new Date(datestrstart).getTime();
                    datestampstart = datestampstart - 8 * 3600 * 1000;
                    mindata.apply_date = datestampstart;
                    var datestrend = data.matchs[i].apply_date_end;
                    var datestampend = new Date(datestrend).getTime();
                    datestampend = datestampend - 8 * 3600 * 1000 + 24 * 3600 * 1000;
                    mindata.apply_date_end = datestampend;
                    var myDate = new Date();
                    var nowDate = texas.DateUtils.formatDate(myDate);
                    var timestrstart = nowDate + " " + data.matchs[i].apply_time;
                    var timestampstart = new Date(timestrstart).getTime();
                    mindata.apply_time = timestampstart;
                    var timestrend = nowDate + " " + data.matchs[i].apply_time_end;
                    var timestampend = new Date(timestrend).getTime();
                    mindata.apply_time_end = timestampend;
                    var datestrgame = data.matchs[i].start_date;
                    var datestampgame = new Date(datestrgame).getTime();
                    datestampgame = datestampgame - 8 * 3600 * 1000;
                    mindata.start_date = datestampgame;
                    var timestrgame = nowDate + " " + data.matchs[i].start_time;
                    var timestampgame = new Date(timestrgame).getTime();
                    mindata.start_time = timestampgame;
                    this.infoArr.push(mindata);
                }
                this.updataUI();
            };
            GameMatchView.prototype.updataUI = function () {
                if (!this.uiArr) {
                    this.uiArr = [];
                }
                else {
                    for (var i = 0; i < this.uiArr.length; i++) {
                        this.uiArr[i].dispose();
                    }
                    this.uiArr = [];
                }
                for (var i = 0; i < this.infoArr.length; i++) {
                    var minsp = new texas.GameMatchLine(this.infoArr[i], i, this, this.matchid, this.callBack, this.error, this.type);
                    this.scrollView.container.addChild(minsp);
                    minsp.y = i * 183;
                    this.uiArr.push(minsp);
                }
                this.scrollView.container.width = this.view.width;
                this.scrollView.container.height = this.infoArr.length * 183;
                this.scrollView.setScrollSize(this.view.width, this.infoArr.length * 183);
            };
            GameMatchView.prototype.show = function () {
                this.view.anchorOffsetX = this.view.width;
                this.view.anchorOffsetY = this.view.height;
                this.view.y = texas.App.stageHeight;
                this.view.x = texas.App.stageWidth + this.view.width;
                this.view.scaleX = this.view.scaleY = texas.ExtGameHelper.getGameScalex();
                this.visible = true;
                this.scrollView.y = 100;
                this.scrollView.setShowSize(this.view.width, this.view.height - 140);
                // this.scrollView.setScrollSize(this.view.width, this.view.height - 140);
                this.view.addChild(this.scrollView);
                this.scrollView.x = 35;
                egret.Tween.get(this.view).to({ x: texas.App.stageWidth }, 250, egret.Ease.quartOut).call(function () {
                });
            };
            GameMatchView.prototype.hide = function () {
                var _this = this;
                egret.Tween.removeTweens(this.view);
                egret.Tween.get(this.view).to({ x: texas.App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(function () {
                    _this.dispose();
                });
            };
            GameMatchView.prototype.mainAssetName = function () {
                return "spr_game_match_list_view";
            };
            GameMatchView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                if (this.bgSp) {
                    this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                }
                GameMatchView.gamematchView = null;
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
            };
            return GameMatchView;
        }(texas.BasePanel));
        texas.GameMatchView = GameMatchView;
        __reflect(GameMatchView.prototype, "kelvin.texas.GameMatchView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 *
 *
 *
 *
 * 牌局回顾的每一行
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameCardLineUI = (function (_super) {
            __extends(GameCardLineUI, _super);
            function GameCardLineUI(data, selfDis, havenum) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.selfDis = selfDis;
                _this.havenum = havenum;
                _this.createGameScene();
                return _this;
            }
            GameCardLineUI.prototype.createGameScene = function () {
                this.cardType = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];
                this.nameTxt.text = texas.StrUtil.cutOutName(this.data.name, 5);
                this.scoreTxt.text = "" + this.data.score;
                if (!this.data.score) {
                    this.scoreTxt.text = "0";
                }
                if (this.data.score >= 0) {
                    this.scoreTxt.textColor = 0xff0000;
                }
                else {
                    this.scoreTxt.textColor = 0x66ff00;
                }
                this.discardTxt.visible = true;
                if (this.data.isdis == -1) {
                    this.discardTxt.text = "弃牌";
                }
                else if (this.data.isdis == 0) {
                    this.discardTxt.text = "";
                }
                else {
                    this.discardTxt.text = this.cardType[this.data.isdis - 1];
                }
                this.createMycard();
                this.createCommonCard();
                this.createHead();
            };
            GameCardLineUI.prototype.createMycard = function () {
                for (var i = 0; i < this.data.mycard.length; i++) {
                    var str = this.data.mycard[i];
                    if (this.data.uid == texas.RoleData.getRole().uid) {
                    }
                    else {
                        if (this.data.isdis < 1) {
                            str = "-1";
                        }
                        else {
                            if (this.selfDis < 1) {
                                if (this.havenum < 2) {
                                    str = "-1";
                                    this.discardTxt.text = "";
                                }
                                else {
                                }
                            }
                        }
                    }
                    // if (this.data.isdis < 1 && ) {
                    //     str = "-1";
                    // }
                    var cardimg = texas.Tool.createBitmapByName("img_pk_" + str);
                    cardimg.width = 52;
                    cardimg.height = 72;
                    cardimg.x = i * 55 + 140;
                    cardimg.y = 30;
                    this.addChild(cardimg);
                }
            };
            GameCardLineUI.prototype.createCommonCard = function () {
                for (var i = 0; i < this.data.commoncard.length; i++) {
                    var str = this.data.commoncard[i];
                    var cardimg = texas.Tool.createBitmapByName("img_pk_" + str);
                    cardimg.width = 52;
                    cardimg.height = 72;
                    cardimg.x = i * 55 + 260;
                    cardimg.y = 30;
                    this.addChild(cardimg);
                }
            };
            GameCardLineUI.prototype.createHead = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var head, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (this.data.headurl == null) {
                                    this.data.headurl = "head_1_png";
                                }
                                head = new egret.Bitmap();
                                head.width = 80;
                                head.height = 80;
                                _a = head;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.data.headurl)];
                            case 1:
                                _a.texture = _b.sent();
                                this.headsp = texas.Tool.createCircularMask(head);
                                this.addChild(this.headsp);
                                this.headsp.x = 22;
                                this.headsp.y = 10;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            GameCardLineUI.prototype.mainAssetName = function () {
                return "spr_game_card_line_ui";
            };
            GameCardLineUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return GameCardLineUI;
        }(texas.BasePanel));
        texas.GameCardLineUI = GameCardLineUI;
        __reflect(GameCardLineUI.prototype, "kelvin.texas.GameCardLineUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameCardUI = (function (_super) {
            __extends(GameCardUI, _super);
            function GameCardUI(cardData) {
                var _this = _super.call(this, true) || this;
                _this.cardData = cardData;
                _this.createGameScene();
                return _this;
            }
            GameCardUI.prototype.createGameScene = function () {
                var _this = this;
                this.scrollView.setShowSize(this.width, this.height - 200);
                this.scrollView.y = 80;
                egret.setTimeout(function () {
                    _this.getInfo();
                    _this.updateUI();
                }, this, 100);
            };
            GameCardUI.prototype.getInfo = function () {
                this.linenum = 6;
                this.dataArr = [];
                // this.dataArr = [{ name: "这是一个名字啊1", headurl: "head_1_png", score: 20, isdis: -1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_2_png", score: -20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 3, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_2_png", score: -20, isdis: 4, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: -20, isdis: 5, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_5_png", score: -20, isdis: 6, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_4_png", score: 20, isdis: 7, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 8, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: -20, isdis: 9, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_6_png", score: -20, isdis: 10, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: -1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_2_png", score: 20, isdis: 2, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_3_png", score: 20, isdis: 1, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 0, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 5, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 6, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 7, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },
                // { name: "这是一个名字啊", headurl: "head_1_png", score: 20, isdis: 8, mycard: ["114", "114"], commoncard: ["114", "114", "114", "114", "114"] },]
                // this.cardData = { "1": { "comCards": [206, 303, 402, 205, 211], "player_info": { "100013": { "uid": 100013, "name": "游客100013", "head": null, "cards": [107, 312], "score": -20, "card_type": -1 }, "100014": { "uid": 100014, "name": "游客100014", "head": null, "cards": [406, 411], "score": -30, "card_type": -1 }, "100015": { "uid": 100015, "name": "游客100015", "head": null, "cards": [204, 407], "score": -10, "card_type": -1 }, "100017": { "uid": 100017, "name": "游客100017", "head": null, "cards": [105, 408], "score": 2040, "card_type": 2 }, "100024": { "uid": 100024, "name": "游客100024", "head": null, "cards": [309, 412], "score": -2000, "card_type": 1 }, "100036": { "uid": 100036, "name": "游客100036", "head": null, "cards": [409, 202], "score": -10, "card_type": -1 } } } }
                // RoleData.getRole().uid = "100015";
                this.cutDateArr = [];
                this.selfDis = [];
                this.haveNum = [];
                var index = -1;
                for (var i in this.cardData) {
                    index++;
                    var arr = [];
                    this.cutDateArr.push(arr);
                    var selfDis = -1;
                    var haveNum = 0;
                    for (var k in this.cardData[i].player_info) {
                        var serverdata = this.cardData[i].player_info[k];
                        var mindata = {
                            name: serverdata.name,
                            uid: serverdata.uid,
                            headurl: serverdata.head,
                            isdis: serverdata.card_type,
                            mycard: serverdata.cards,
                            score: serverdata.score,
                            commoncard: this.cardData[i].comCards,
                        };
                        if (serverdata.uid == texas.RoleData.getRole().uid) {
                            selfDis = serverdata.card_type;
                        }
                        if (serverdata.card_type > 0) {
                            haveNum++;
                        }
                        if (mindata.commoncard.length < 5) {
                            for (var j = 0; j < 5; j++) {
                                mindata.commoncard.push("-1");
                                if (mindata.commoncard.length >= 5) {
                                    break;
                                }
                            }
                        }
                        this.cutDateArr[index].push(mindata);
                    }
                    this.selfDis.push(selfDis);
                    this.haveNum.push(haveNum);
                }
                // for (let i = 0; i < this.dataArr.length; i++) {
                //     if (i % this.linenum == 0) {
                //     }
                //     this.cutDateArr[index].push(this.dataArr[i]);
                // }
                // this.cutDateArr.reverse();
                if (this.cutDateArr.length == 0) {
                    this.cutDateArr.push([]);
                }
                this.pageindex = this.cutDateArr.length - 1;
            };
            GameCardUI.prototype.updateUI = function () {
                this.pageTxt.text = "" + (this.pageindex + 1) + "/" + this.cutDateArr.length;
                if (this.uiArr) {
                    for (var i = 0; i < this.uiArr.length; i++) {
                        this.uiArr[i].dispose();
                    }
                }
                this.uiArr = [];
                var arr = this.cutDateArr[this.pageindex];
                for (var i = 0; i < arr.length; i++) {
                    var lineui = new texas.GameCardLineUI(arr[i], this.selfDis[this.pageindex], this.haveNum[this.pageindex]);
                    this.scrollView.container.addChild(lineui);
                    lineui.y = i * 140 + 20;
                    lineui.x = 15;
                    this.uiArr.push(lineui);
                }
                this.scrollView.setScrollSize(this.width, arr.length * 140);
            };
            GameCardUI.prototype.on_leftBtn = function (e) {
                var index = this.pageindex - 1;
                if (index < 0) {
                    texas.ApiState.showText("已经是第一页了");
                    return;
                }
                this.pageindex = index;
                this.updateUI();
            };
            GameCardUI.prototype.on_rightBtn = function (e) {
                var index = this.pageindex + 1;
                if (index > this.cutDateArr.length - 1) {
                    texas.ApiState.showText("已经是最后一页了");
                    return;
                }
                this.pageindex = index;
                this.updateUI();
            };
            GameCardUI.prototype.on_maxLeftBtn = function (e) {
                this.pageindex = 0;
                this.updateUI();
            };
            GameCardUI.prototype.on_maxRightBtn = function (e) {
                this.pageindex = this.cutDateArr.length - 1;
                this.updateUI();
            };
            GameCardUI.prototype.mainAssetName = function () {
                return "spr_game_card_ui";
            };
            GameCardUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return GameCardUI;
        }(texas.BasePanel));
        texas.GameCardUI = GameCardUI;
        __reflect(GameCardUI.prototype, "kelvin.texas.GameCardUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameRankListLine = (function (_super) {
            __extends(GameRankListLine, _super);
            function GameRankListLine() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            GameRankListLine.prototype.createGameScene = function () {
                this.view = this.assetSwf().createSprite("spr_game_rank_line_ui");
                this.addChild(this.view);
                this.width = this.view.width;
                this.height = this.view.height;
                this.nameTxt = this.view.getChildByName("nameTxt");
                this.rebuyTxt = this.view.getChildByName("rebuyTxt");
                this.rankingTxt = this.view.getChildByName("rankingTxt");
                this.rankimg3Img = this.view.getChildByName("rankimg3Img");
                this.rankimg2Img = this.view.getChildByName("rankimg2Img");
                this.rankimg1Img = this.view.getChildByName("rankimg1Img");
                this.rebuyImg = this.view.getChildByName("rebuyImg");
                this.tableTxt = this.view.getChildByName("tableTxt");
                this.scoreTxt = this.view.getChildByName("scoreTxt");
                this.rebuyTxt = this.view.getChildByName("rebuyTxt");
            };
            GameRankListLine.prototype.dataChanged = function () {
                if (!this.data) {
                    return;
                }
                this.initState();
                this.showUI();
            };
            GameRankListLine.prototype.showUI = function () {
                this.nameTxt.text = texas.StrUtil.cutOutName(this.data.name, 5);
                if (this.data.rebuy > 0) {
                    this.rebuyImg.visible = true;
                    this.rebuyImg.x = this.nameTxt.x + this.nameTxt.textWidth + 5;
                    this.rebuyTxt.x = this.rebuyImg.x + this.rebuyImg.width + 5;
                    this.rebuyTxt.text = "" + this.data.rebuy;
                }
                else {
                    this.rebuyImg.visible = false;
                    this.rebuyTxt.text = "";
                }
                this.tableTxt.text = "" + this.data.showId;
                if (this.data.showId == 0) {
                    this.tableTxt.text = "-";
                }
                this.scoreTxt.text = "" + this.data.score;
                if (this.data.rank == 1) {
                    this.rankimg1Img.visible = true;
                }
                else if (this.data.rank == 2) {
                    this.rankimg2Img.visible = true;
                }
                else if (this.data.rank == 3) {
                    this.rankimg3Img.visible = true;
                }
                else {
                    this.rankingTxt.text = "" + this.data.rank;
                }
            };
            GameRankListLine.prototype.initState = function () {
                this.rebuyImg.visible = false;
                this.rankimg1Img.visible = false;
                this.rankimg2Img.visible = false;
                this.rankimg3Img.visible = false;
                this.rankingTxt.text = "";
            };
            GameRankListLine.prototype.assetSwf = function () {
                return texas.AssetManager.mainSwf;
            };
            return GameRankListLine;
        }(eui.ItemRenderer));
        texas.GameRankListLine = GameRankListLine;
        __reflect(GameRankListLine.prototype, "kelvin.texas.GameRankListLine");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 实时战绩的ui
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GameRankUI = (function (_super) {
            __extends(GameRankUI, _super);
            function GameRankUI(matchid, roomid, watchPeople) {
                var _this = _super.call(this, true) || this;
                _this.listnum = 0;
                _this.roomid = roomid;
                _this.watchPeople = watchPeople;
                _this.matchid = matchid;
                _this.createGameScene();
                return _this;
            }
            GameRankUI.prototype.createGameScene = function () {
                this.timer = new egret.Timer(1000);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeRun, this);
                this.timer.start();
                this.dateUtil = new texas.DateUtils();
                this.lookupstate = true;
                this.lookup2Btn.visible = false;
                texas.MatchApi.getShiShiZhanJi(this.matchid, this.getInfo.bind(this));
                // this.getInfo();
            };
            GameRankUI.prototype.createList = function () {
                this.list = new eui.List();
                // this.list.y = 450;
                this.list.width = texas.App.stageWidth;
                // this.list.height = App.stageHeight - 450;
                this.list.itemRenderer = texas.GameRankListLine;
                this.list.layout = new eui.VerticalLayout();
                this.scrollView.x = 20;
                this.scrollView.y = 310;
                this.height = 1184;
                this.scrollView.setShowSize(this.width - 20, this.height - 520);
                this.scrollView.viewport = this.list;
                this.listnum = 0;
                this.data100 = new eui.ArrayCollection();
                this.dataRoom = new eui.ArrayCollection();
            };
            GameRankUI.prototype.getRoomsInfo = function (data) {
                this.infoArr = [];
                var showArr = [];
                for (var i in data.rooms) {
                    var mindata = {
                        tableid: data.rooms[i].id,
                        usersnum: Object.keys(data.rooms[i].players).length,
                        players: data.rooms[i].players,
                        max: 0,
                        min: 10000000000,
                        match_id: data.rooms[i].match_id,
                        showId: 0,
                    };
                    this.infoArr.push(mindata);
                    showArr.push(mindata);
                }
                texas.ArrayUtil.AscendingArray("tableid", showArr);
                for (var i = 0; i < showArr.length; i++) {
                    showArr[i].showId = i + 1;
                }
                texas.MatchApi.getMatchRoleInfo(1, String(this.matchid), this.getList100.bind(this));
                texas.MatchApi.getMatchRoomRoleInfo(this.roomid, this.getListRoom.bind(this));
            };
            GameRankUI.prototype.getList100 = function (data) {
                this.listnum++;
                for (var i = 0; i < data.data.length; i++) {
                    var min = {
                        name: data.data[i][1],
                        uid: data.data[i][0],
                        score: data.data[i][2],
                        rank: i,
                        rebuy: data.data[i][4] - 1,
                        tableid: "1111",
                        showId: 0,
                    };
                    for (var k = 0; k < this.infoArr.length; k++) {
                        for (var j in this.infoArr[k].players) {
                            if (this.infoArr[k].players[j] == min.uid) {
                                min.tableid = this.infoArr[k].tableid;
                                min.showId = this.infoArr[k].showId;
                            }
                        }
                    }
                    this.data.list.push(min);
                    min.rank = this.data.list.length;
                }
                for (var i = 0; i < this.data.list.length; i++) {
                    this.data100.addItem(this.data.list[i]);
                }
                if (this.data.list.length < 50 && this.data.nowpeople > 50) {
                    if (this.listnum < 10) {
                        texas.MatchApi.getMatchRoleInfo(2, String(this.matchid), this.getList100.bind(this));
                    }
                }
                else {
                    this.showList100();
                }
            };
            GameRankUI.prototype.showList100 = function () {
                this.scrollView.viewport.scrollV = 0;
                this.list.dataProvider = this.data100;
            };
            GameRankUI.prototype.getListRoom = function (data) {
                this.roomlistArr = [];
                for (var i = 0; i < data.data.length; i++) {
                    var min = {
                        name: data.data[i][1],
                        uid: data.data[i][0],
                        score: data.data[i][2],
                        rank: i,
                        rebuy: data.data[i][4] - 1,
                        tableid: String(this.roomid),
                        showId: 0,
                    };
                    for (var i_1 = 0; i_1 < this.infoArr.length; i_1++) {
                        if (this.infoArr[i_1].tableid == min.tableid) {
                            min.showId = this.infoArr[i_1].showId;
                        }
                    }
                    this.roomlistArr.push(min);
                    min.rank = this.roomlistArr.length;
                }
                texas.ArrayUtil.AscendingArray("score", this.roomlistArr);
                this.roomlistArr.reverse();
                for (var i = 0; i < this.roomlistArr.length; i++) {
                    this.roomlistArr[i].rank = i + 1;
                }
                for (var i = 0; i < this.roomlistArr.length; i++) {
                    this.dataRoom.addItem(this.roomlistArr[i]);
                }
            };
            GameRankUI.prototype.showListRoom = function () {
                this.scrollView.viewport.scrollV = 0;
                this.list.dataProvider = this.dataRoom;
            };
            GameRankUI.prototype.createWatchUI = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // this.watchPeople = [];
                        // for (let i = 0; i < 10; i++) {
                        //     let role = new Role();
                        //     role.name = "名字" + i;
                        //     role.head = "head_1_png";
                        //     this.watchPeople.push(role);
                        // }
                        if (this.watchPeople == null) {
                            this.watchPeople = 0;
                        }
                        this.watchContainer = new texas.ScrollView();
                        this.watchContainer.setShowSize(this.watchBg.width, this.watchBg.height);
                        this.watchContainer.x = this.watchBg.x;
                        this.watchContainer.y = this.watchBg.y;
                        this.addChild(this.watchContainer);
                        this.watchContainer.scrollPolicyV = "off";
                        this.watchContainer.scrollPolicyH = "on";
                        this.watchContainer.visible = false;
                        this.headSpArr = [];
                        this.watchPeopleTxt.text = "旁观人数（" + this.watchPeople + "）";
                        return [2 /*return*/];
                    });
                });
            };
            GameRankUI.prototype.timeRun = function () {
                if (!this.data) {
                    return;
                }
                var nowTime = new Date().getTime();
                var distance = nowTime - this.data.starttime;
                var timestr = this.dateUtil.getFormatBySecond(Math.floor(distance / 1000), 1);
                this.timeTxt.text = "比赛时长：" + timestr;
            };
            GameRankUI.prototype.getInfo = function (data) {
                // this.data = {
                //     title: "这是一个标题",
                //     starttime: new Date().getTime(),
                //     frontscore: 100000,
                //     allscore: 20000,
                //     avescore: 50000,
                //     myrank: 100,
                //     rebuy: 10,
                //     nowpeople: 100,
                //     joinpeople: 200,
                //     realpeople: 400,
                //     list: [{ uid: "100010", rank: 1, name: "名字而已", rebuy: 4, tableid: "100100", score: 25645464 },
                //     { uid: "100010", rank: 2, name: "名字而已11111", rebuy: 4, tableid: "100000", score: 25645464 },
                //     ]
                // }         
                this.data = {
                    title: data.match.name,
                    starttime: data.match.match_start_time * 1000,
                    frontscore: data.score100,
                    allscore: data.match.init_game_score * data.match.cur_buy_count,
                    avescore: data.match.init_game_score * data.match.cur_buy_count / (data.match.cur_buy_count - data.match.over_people),
                    myrank: data.rank + 1,
                    rebuy: data.reBuyCount - 1,
                    nowpeople: data.match.people,
                    joinpeople: data.match.apply_max_people,
                    realpeople: data.match.cur_buy_count,
                    over_people: data.match.over_people,
                    cur_buy_count: data.match.cur_buy_count,
                    list: [],
                };
                this.showUI();
                this.createWatchUI();
                this.createList();
                texas.MatchApi.getMatchRooms(String(this.matchid), this.getRoomsInfo.bind(this));
            };
            GameRankUI.prototype.on_lookupBtn = function () {
                this.lookupstate = !this.lookupstate;
                this.lookupBtn.visible = this.lookupstate;
                this.lookup2Btn.visible = !this.lookupstate;
                if (this.lookupstate == true) {
                    this.showList100();
                }
                else {
                    this.showListRoom();
                }
            };
            GameRankUI.prototype.on_lookup2Btn = function () {
                this.on_lookupBtn();
            };
            GameRankUI.prototype.showUI = function () {
                this.titleTxt.text = this.data.title;
                this.frontScoreTxt.text = "前100记分牌：" + Math.floor(this.data.frontscore);
                this.allScoreTxt.text = "总记分牌：" + Math.floor(this.data.allscore);
                this.averageScoreTxt.text = "平均记分牌：" + Math.floor(this.data.avescore);
                if (this.data.myrank != -1 && this.data.myrank != 0) {
                    this.myrankTxt.text = "" + this.data.myrank;
                    this.rebuyTxt.text = "" + this.data.rebuy;
                }
                else {
                    this.myrankTxt.text = "-";
                    this.rebuyTxt.text = "-";
                }
                // this.joinMatchTxt.text = "" + this.data.nowpeople + "/" + this.data.joinpeople;
                // console.log(this.data.over_people);
                this.joinMatchTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.nowpeople;
                this.joinMatchNumTxt.text = "" + this.data.realpeople;
            };
            GameRankUI.prototype.mainAssetName = function () {
                return "spr_game_rank_ui";
            };
            GameRankUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timeRun, this);
            };
            return GameRankUI;
        }(texas.BasePanel));
        texas.GameRankUI = GameRankUI;
        __reflect(GameRankUI.prototype, "kelvin.texas.GameRankUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
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
 * 等待分配房间的
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var WaitRoomUI = (function (_super) {
            __extends(WaitRoomUI, _super);
            function WaitRoomUI(match_id, roomid) {
                if (roomid === void 0) { roomid = -1; }
                var _this = _super.call(this) || this;
                if (WaitRoomUI.waitRoomUI) {
                    WaitRoomUI.waitRoomUI.hide();
                }
                WaitRoomUI.waitRoomUI = _this;
                _this.roomid = roomid;
                _this.match_id = match_id;
                _this.createGameScene();
                return _this;
            }
            WaitRoomUI.prototype.createGameScene = function () {
                // this.promptTxt = Tool.createTextFiled(0, 0, 600, 40, "正在进行房间分配，请耐心等待", 30, 0xffffff, "center");
                // this.addChild(this.promptTxt);
                this.bg = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0);
                this.addChildAt(this.bg, 0);
                this.width = this.bg.width;
                this.height = this.bg.height;
                this.sendnum = 0;
                this.loadGame();
                this.mateAnima.visible = false;
                this.changeAnima.visible = false;
                this.visible = false;
            };
            WaitRoomUI.prototype.showPointerAnima = function () {
            };
            WaitRoomUI.prototype.hidePointerAnima = function () {
            };
            WaitRoomUI.prototype.loadGame = function () {
                console.log("开始加载游戏");
                new texas.GameAssetLoader().loadGame(this.loadSuccess.bind(this), this);
            };
            WaitRoomUI.prototype.loadSuccess = function (data) {
                console.log("游戏资源加载成功");
                texas.EventManager.dispatchCmd(texas.Events.gotoGameView, null);
                texas.ExtGameHelper.joinExtGamePanel();
                this.joinGame();
            };
            //三秒已请求
            WaitRoomUI.prototype.delayJoin = function () {
                this.sendnum++;
                this.time1 = egret.setInterval(this.joinGame, this, 3000);
            };
            WaitRoomUI.prototype.joinGame = function () {
                texas.RoomApi.joinGame(this.match_id, this.roomid, this.joinback.bind(this));
            };
            //加入房间的回调
            WaitRoomUI.prototype.joinback = function (data) {
                if (data.room == null && this.sendnum == 0) {
                    this.delayJoin();
                    this.visible = true;
                    if (texas.ExtGameHelper.extGamePanel && this.roomid != -1) {
                        this.changeAnima.visible = true;
                    }
                    else {
                        this.mateAnima.visible = true;
                    }
                }
                if (data.room) {
                    this.joinSuccess();
                }
            };
            WaitRoomUI.prototype.joinSuccess = function () {
                var _this = this;
                this.hidePointerAnima();
                egret.setTimeout(function () {
                    _this.dispose();
                }, this, 100);
            };
            WaitRoomUI.prototype.hide = function () {
                this.dispose();
            };
            WaitRoomUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                egret.clearInterval(this.time1);
                WaitRoomUI.waitRoomUI = null;
                this.mateAnima.stop();
                this.changeAnima.stop();
                if (texas.ExtGameHelper.isneedPop == true) {
                    lzm.Alert.closeAllAlert();
                    texas.PanelTween.popPanel();
                    texas.ExtGameHelper.isneedPop = false;
                }
            };
            WaitRoomUI.prototype.mainAssetName = function () {
                return "spr_wait_room_anima_view";
            };
            return WaitRoomUI;
        }(texas.BasePanel));
        texas.WaitRoomUI = WaitRoomUI;
        __reflect(WaitRoomUI.prototype, "kelvin.texas.WaitRoomUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 * 登录输入框
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoginInputPop = (function (_super) {
            __extends(LoginInputPop, _super);
            function LoginInputPop(mainview, loginscene) {
                var _this = _super.call(this) || this;
                _this.mainView = mainview;
                _this.loginScene = loginscene;
                ;
                _this.createGameScene();
                return _this;
            }
            LoginInputPop.prototype.createGameScene = function () {
                texas.Tool.replaceSwfTxt("accountTxt", this);
                texas.Tool.replaceSwfTxt("passwordTxt", this);
                this.txt1 = new texas.InputText(this.accountTxt);
                this.txt2 = new texas.InputText(this.passwordTxt);
                this.passwordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.passwordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                // this.getInputs();
            };
            LoginInputPop.prototype.focusIn = function (e) {
                e.target.text = "";
                e.target.displayAsPassword = true;
            };
            LoginInputPop.prototype.focusOut = function (e) {
                var txt;
                if (e) {
                    txt = e.target;
                }
                else {
                    txt = this.passwordTxt;
                }
                if (txt.text == "" || txt.text == "请重复输入6-20位密码") {
                    txt.text = "请重复输入6-20位密码";
                    txt.displayAsPassword = false;
                }
                else {
                    txt.displayAsPassword = true;
                }
            };
            LoginInputPop.prototype.on_againPasswordBtn = function (e) {
                lzm.Alert.alert(new texas.RegisterPanel("againPassword"));
            };
            LoginInputPop.prototype.on_loginBtn = function () {
                // if (StrUtil.isPhoneNumber(this.accountTxt.text) == false) {
                //     this.showIphonePrompt();
                //     return;
                // }
                var _this = this;
                // if (this.passwordTxt.text == "请输入6-20位密码" || this.passwordTxt.text.length < 6 || this.passwordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.passwordTxt.text) == true) {
                //     this.showNewError();
                //     return;
                // }
                if (egret.getOption("type")) {
                    this.testLogin();
                }
                else {
                    var thisObj = this;
                    texas.LoginUtil.login(this.accountTxt.text, this.passwordTxt.text, this.loginScene, function () { texas.AccountData.addLoginInfo(_this.accountTxt.text, _this.passwordTxt.text); });
                }
            };
            LoginInputPop.prototype.testLogin = function () {
                var _this = this;
                console.log("测试注册");
                var account = this.accountTxt.text;
                texas.UserApi.register(account, "", "", function () {
                    console.log("测试账号未注册");
                    texas.LoginUtil.login(account, "", _this.loginScene);
                    egret.setTimeout(function () {
                        texas.PhoneApi.genCode(_this.accountTxt.text, function (self, data) {
                            texas.PhoneApi.vert(self.accountTxt.text, self.passwordTxt.text, "123456", function (self, data) {
                                // LoginUtil.login(self.accountTxt.text, self.passwordTxt.text, self.loginScene, () => { AccountData.addLoginInfo(self.accountTxt.text, self.passwordTxt.text) });
                                _this.dispose();
                            }, _this);
                        }, _this);
                    }, _this, 500);
                }, null, function () {
                    console.log("测试账号已经注册");
                    texas.LoginUtil.login(account, "", _this.loginScene);
                });
            };
            LoginInputPop.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.passwordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.passwordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
            };
            LoginInputPop.prototype.mainAssetName = function () {
                return "spr_denglu_input";
            };
            return LoginInputPop;
        }(texas.BasePanel));
        texas.LoginInputPop = LoginInputPop;
        __reflect(LoginInputPop.prototype, "kelvin.texas.LoginInputPop");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 登录主界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoginView = (function (_super) {
            __extends(LoginView, _super);
            function LoginView() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            LoginView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij");
                this.addChildAt(this.bg, 0);
                if (!egret.getOption("type")) {
                    this.automaticLogin();
                }
            };
            LoginView.prototype.automaticLogin = function () {
                if (texas.AccountData.isNeedAutomaticLogin == "1") {
                    texas.Log.log("不需要自动登录");
                    return;
                }
                var info = texas.AccountData.getLastAccount();
                if (info) {
                    if (info["iswx"]) {
                        this.on_wxBtn(null);
                    }
                    else {
                        texas.LoginUtil.login(info["account"], info["password"], this);
                    }
                }
            };
            LoginView.prototype.on_wxBtn = function (e) {
                var _this = this;
                if (egret.getOption("type")) {
                    this.testLogin();
                }
                else if (texas.App.isWeiDuan()) {
                    texas.Log.log("要去微信得到账号");
                    texas.NativeBase.registerCmd("wxLoginCallBack", function (data) {
                        texas.Log.log(JSON.stringify(data)); //{"openid":"o5okswuQ5FIuWpmG58XGOk_zD3s8","nickname":"赛文奥特曼","sex":0,"language":"zh_CN","city":"","province":"","country":"","headimgurl":"","privilege":[],"unionid":"oA8Am08306DS7y-8AJrqPwe-A8FI"}
                        _this.wxAccount = data["unionid"];
                        _this.wxInfo = data;
                        texas.AccountData.loginInfo_wx = { account: data["unionid"], password: "" };
                        texas.AccountData.wxInfoTime = new Date().getTime();
                        _this.wxLogin();
                    }, this);
                    texas.AppWx.login();
                }
                else {
                    this.commonlogin();
                }
            };
            LoginView.prototype.testLogin = function () {
                console.log("测试登陆");
                lzm.Alert.alert(new texas.LoginInputPop(this.parent, this));
            };
            LoginView.prototype.wxLogin = function () {
                var promoCodeStr;
                if (egret.getOption("recommend") != null && egret.getOption("recommend") != "") {
                    promoCodeStr = (egret.getOption("recommend"));
                }
                else {
                    promoCodeStr = "";
                }
                var self = this;
                if (this.wxInfo) {
                    texas.UserApi.register(this.wxAccount, "", promoCodeStr, function (data) { self.registersuccess_wx(data); }, this.wxInfo, this.wxresgistered.bind(this));
                }
                else {
                    texas.UserApi.register(this.wxAccount, "", promoCodeStr, function (data) { self.registersuccess_wx(data); }, null, this.wxresgistered.bind(this));
                }
            };
            LoginView.prototype.registersuccess_wx = function (data) {
                texas.LoginUtil.login(this.wxAccount, "", this);
            };
            LoginView.prototype.wxresgistered = function (data) {
                if (data.state == -8) {
                    this.registersuccess_wx(null);
                }
                else {
                    texas.ApiState.show(data.state);
                }
            };
            LoginView.prototype.commonlogin = function () {
                var account = egret.localStorage.getItem("localAccount");
                if (account == "" || account == null) {
                    account = texas.RandomUtils.guid();
                    egret.localStorage.setItem("localAccount", account);
                }
                if (egret.getOption("account")) {
                    account = egret.getOption("account");
                }
                var thisObj = this;
                texas.UserApi.register(account, "", "", function (data) {
                    texas.LoginUtil.login(account, "", thisObj, function () {
                        texas.AccountData.loginInfo_visitor = { account: account, password: "" };
                    });
                }, null, function (data) {
                    texas.LoginUtil.login(account, "", thisObj, function () {
                        texas.AccountData.loginInfo_visitor = { account: account, password: "" };
                    });
                });
            };
            LoginView.prototype.on_loginBtn = function (e) {
                var info = texas.AccountData.loginInfo;
                if (!info) {
                    lzm.Alert.alert(new texas.LoginInputPop(this.parent, this));
                }
                else {
                    lzm.Alert.alert(new texas.LoginViewPop(this.parent, this));
                }
            };
            LoginView.prototype.layout = function () {
                this.bg.width = texas.App.stageWidth;
                this.bg.height = texas.App.stageHeight;
            };
            LoginView.prototype.mainAssetName = function () {
                return "spr_login_view";
            };
            LoginView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return LoginView;
        }(texas.BasePanel));
        texas.LoginView = LoginView;
        __reflect(LoginView.prototype, "kelvin.texas.LoginView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 登录主界面弹窗
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoginViewPop = (function (_super) {
            __extends(LoginViewPop, _super);
            function LoginViewPop(mainview, loginscene) {
                var _this = _super.call(this) || this;
                _this.mainView = mainview;
                _this.loginScene = loginscene;
                _this.createGameScene();
                return _this;
            }
            LoginViewPop.prototype.createGameScene = function () {
                var _this = this;
                this.view = this.$children[0];
                texas.Tool.replaceSwfTxt("accountText", this);
                this.accountText.text = "";
                this.bg.touchEnabled = true;
                this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toucBg, this);
                this.bgimg.touchEnabled = true;
                this.accountBg.touchEnabled = true;
                this.accountBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeArea, this);
                this.accountBg.name = "up";
                egret.setTimeout(function () {
                    _this.createDropDownArea();
                }, this, 100);
            };
            LoginViewPop.prototype.createDropDownArea = function () {
                var info = texas.AccountData.loginInfo;
                if (!info) {
                    this.bgimg.visible = false;
                    this.upBtn.visible = false;
                    this.dropBtn.visible = false;
                    if (this.dropAreaSc) {
                        this.dropAreaSp.removeChildren();
                        this.clearBtn();
                    }
                    // this.on_loginOtherBtn(null);
                    return;
                }
                if (!this.dropAreaSc) {
                    this.dropAreaSc = new egret.ScrollView();
                    this.dropAreaSc.verticalScrollPolicy = "auto";
                    this.dropAreaSc.horizontalScrollPolicy = "off";
                    this.dropAreaSc.x = this.bgimg.x;
                    this.dropAreaSc.y = this.bgimg.y;
                    this.bgimg.height = 200;
                    this.dropAreaSc.width = this.bgimg.width;
                    this.dropAreaSc.height = this.bgimg.height - 10;
                    this.view.addChild(this.dropAreaSc);
                    this.dropAreaSc.visible = false;
                    this.dropAreaSp = new egret.Sprite();
                    this.dropAreaSc.setContent(this.dropAreaSp);
                    this.upBtn.visible = false;
                    this.bgimg.visible = false;
                    var bgmask = texas.Tool.createRectSprite(this.bgimg.width, this.bgimg.height, 0x000000, this.bgimg.x, this.bgimg.y, 0);
                    this.bgimg.parent.addChild(bgmask);
                    this.bgimg.mask = bgmask;
                    this.bgimg.touchEnabled = true;
                    this.bgimgY = this.bgimg.y;
                }
                else {
                    this.dropAreaSp.removeChildren();
                    this.clearBtn();
                    var isexist = false;
                    for (var i in info) {
                        if (info[i]) {
                            info[i]["account"] == this.accountText.text;
                            isexist = true;
                        }
                    }
                    ;
                    if (isexist == false) {
                        this.accountText.text = "";
                        this.info = null;
                    }
                }
                this.accountBtnArr = [];
                this.deleteBtnArr = [];
                var num = 0;
                var accountInfoArr = [];
                for (var i in info) {
                    if (info[i]) {
                        accountInfoArr.push(info[i]);
                    }
                }
                ;
                texas.ArrayUtil.AscendingArray("time", accountInfoArr);
                accountInfoArr.reverse();
                this.txtSpArr = [];
                this.deleteSpArr = [];
                for (var i = 0; i < accountInfoArr.length; i++) {
                    var txt = texas.Tool.createTextFiled(this.accountText.x - 180, this.accountText.y, null, this.accountText.height, accountInfoArr[i]["account"], 24, 0xffffff, "left");
                    txt.name = accountInfoArr[i]["account"];
                    this.dropAreaSp.addChild(txt);
                    this.accountBtnArr.push(txt);
                    txt.x = 20;
                    txt.y = num * 60 + 25;
                    num++;
                    var txtSp = texas.Tool.createRectSprite(txt.width + 100, txt.height + 10, 0xffffff, txt.x - 40, txt.y - 10, 0);
                    txtSp.name = txt.name;
                    txtSp.touchEnabled = true;
                    this.dropAreaSp.addChild(txtSp);
                    txtSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                    this.txtSpArr.push(txtSp);
                    // let deleteBtn = Tool.createTextFiled(txt.x + 275, txt.y + 4, null, this.accountText.height, "删除", 24, 0xB04D43, "left");
                    var deleteBtn = texas.Tool.createBitmapByName("img_img_dly_xld_sc", false, txt.x + 250, txt.y + 4);
                    this.dropAreaSp.addChild(deleteBtn);
                    this.deleteBtnArr.push(deleteBtn);
                    deleteBtn.name = accountInfoArr[i]["account"];
                    var deleteSp = texas.Tool.createRectSprite(deleteBtn.width + 30, deleteBtn.height + 10, 0xffffff, deleteBtn.x - 20, deleteBtn.y - 10, 0);
                    deleteSp.name = deleteBtn.name;
                    deleteSp.touchEnabled = true;
                    this.dropAreaSp.addChild(deleteSp);
                    deleteSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                    this.deleteSpArr.push(deleteSp);
                }
                var bg = texas.Tool.createRectSprite(this.dropAreaSc.width - 10, this.accountBtnArr.length * 60 + 10, 0x000000, 0, 0, 0);
                this.dropAreaSp.addChild(bg);
                if (accountInfoArr[0]) {
                    this.info = accountInfoArr[0];
                    this.accountText.text = this.info["account"];
                }
            };
            LoginViewPop.prototype.deleteAccount = function (e) {
                texas.AccountData.deleteLoginInfo(e.target.name);
                this.createDropDownArea();
            };
            LoginViewPop.prototype.changeArea = function (e) {
                if (e.target.name == "up") {
                    this.ondropBtn();
                    e.target.name = "drop";
                }
                else {
                    this.onupBtn();
                    e.target.name = "up";
                }
            };
            LoginViewPop.prototype.ondropBtn = function () {
                var _this = this;
                var info = texas.AccountData.loginInfo;
                if (!info) {
                    return;
                }
                egret.Tween.removeTweens(this.bgimg);
                this.bgimg.visible = true;
                this.bgimg.y = this.bgimgY - this.bgimg.height;
                egret.Tween.get(this.bgimg).to({ y: this.bgimgY }, 250).call(function () { _this.dropAreaSc.visible = true; }, this);
                this.dropBtn.visible = false;
                this.upBtn.visible = true;
            };
            LoginViewPop.prototype.onupBtn = function () {
                var _this = this;
                var info = texas.AccountData.loginInfo;
                if (!info) {
                    return;
                }
                egret.Tween.removeTweens(this.bgimg);
                this.dropAreaSc.visible = false;
                this.bgimg.y = this.bgimgY;
                egret.Tween.get(this.bgimg).to({ y: this.bgimgY - this.bgimg.height }, 250).call(function () { _this.bgimg.visible = false; }, this);
                this.dropBtn.visible = true;
                this.upBtn.visible = false;
            };
            LoginViewPop.prototype.touchTxt = function (e) {
                var info = texas.AccountData.loginInfo[e.target.name];
                texas.AccountData.addLoginInfo(info["account"], info["password"]);
                this.accountText.text = info["account"];
                this.info = info;
                this.onupBtn();
            };
            LoginViewPop.prototype.toucBg = function () {
                this.onupBtn();
            };
            LoginViewPop.prototype.on_sureBtn = function (e) {
                if (!this.info) {
                    texas.ApiState.showText("请选择要登录的账号");
                    return;
                }
                var thisObj = this;
                // UserApi.login(this.info["account"], this.info["password"], function (data: any): void {
                //     App.heart();
                //     thisObj.mainView.addChild(new MainPanel());
                //     Tool.removeFromParent(thisObj);
                //     lzm.Alert.closeAllAlert();
                // });
                texas.AccountData.addLoginInfo(this.info["account"], this.info["password"]);
                texas.LoginUtil.login(this.info["account"], this.info["password"], this.loginScene);
            };
            LoginViewPop.prototype.on_againPasswordBtn = function (e) {
                lzm.Alert.alert(new texas.RegisterPanel("againPassword"));
            };
            LoginViewPop.prototype.on_loginOtherBtn = function (e) {
                lzm.Alert.alert(new texas.LoginInputPop(this.mainView, this.loginScene));
            };
            LoginViewPop.prototype.layout = function () {
                // LayoutUtil.layout_up(this.accountText);
                // LayoutUtil.layout_up(this.passwordText);
                // LayoutUtil.layout_up(this.accountTitle);
                // LayoutUtil.layout_up(this.accountBg);
                // LayoutUtil.layout_up(this.passwordTitle);
                // LayoutUtil.layout_up(this.passwordBg);
            };
            LoginViewPop.prototype.clearBtn = function () {
                if (this.accountBtnArr) {
                    for (var i = 0; i < this.accountBtnArr.length; i++) {
                        this.accountBtnArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                    }
                }
                if (this.deleteBtnArr) {
                    for (var i = 0; i < this.deleteBtnArr.length; i++) {
                        this.deleteBtnArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                    }
                }
            };
            LoginViewPop.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.clearBtn();
                egret.Tween.removeTweens(this.bgimg);
                this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.toucBg, this);
                if (this.txtSpArr) {
                    for (var i = 0; i < this.txtSpArr.length; i++) {
                        this.txtSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTxt, this);
                    }
                }
                if (this.deleteSpArr) {
                    for (var i = 0; i < this.deleteSpArr.length; i++) {
                        this.deleteSpArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteAccount, this);
                    }
                }
            };
            LoginViewPop.prototype.mainAssetName = function () {
                return "spr_denglu_view";
            };
            return LoginViewPop;
        }(texas.BasePanel));
        texas.LoginViewPop = LoginViewPop;
        __reflect(LoginViewPop.prototype, "kelvin.texas.LoginViewPop");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *注册面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RegisterPanel = (function (_super) {
            __extends(RegisterPanel, _super);
            function RegisterPanel(type) {
                var _this = _super.call(this) || this;
                _this.recordNum = 60;
                _this.type = type;
                _this.createGameScene();
                return _this;
            }
            RegisterPanel.prototype.createGameScene = function () {
                if (this.type == "register") {
                    this.sureBtn.visible = true;
                    this.sureAgainBtn.visible = false;
                    this.registerTitle.visible = true;
                    this.againTitle.visible = false;
                    // SoundManager.playHomeSound("binding_sound_mp3");
                }
                else {
                    this.sureBtn.visible = false;
                    this.sureAgainBtn.visible = true;
                    this.registerTitle.visible = false;
                    this.againTitle.visible = true;
                }
                this.createIphoneUI();
                this.createAPUI();
            };
            RegisterPanel.prototype.createIphoneUI = function () {
                texas.Tool.replaceSwfTxt("iphoneInputText", this);
                texas.Tool.replaceSwfTxt("codeInputText", this);
                // this.iphoneInputText = Tool.createTextFiled(260, 112 + 11, 300, 24, "请输入正确的手机号", 24, 0xffffff, "center");
                // this.addChild(this.iphoneInputText);
                this.iphoneInputText.verticalAlign = "top";
                // this.codeInputText = Tool.createTextFiled(235, 182 + 14, 200, 24, "请输入正确的验证码", 24, 0xffffff, "center");
                // this.addChild(this.codeInputText);
                this.codeInputText.verticalAlign = "top";
                var text = new texas.InputText(this.iphoneInputText);
                text.setDefaultText("请输入手机号");
                text.setInPutColor(0xffffff);
                var text1 = new texas.InputText(this.codeInputText);
                text1.setDefaultText("请输入验证码");
                text1.setInPutColor(0xffffff);
                this.timeText = texas.Tool.createTextFiled(this.againSendBtn.x + 100, this.againSendBtn.y + 14, this.againSendBtn.width, 20, "(50s)", 17, 0xffffff, "center");
                this.addChild(this.timeText);
                this.timeText.visible = false;
                this.againSendBtn.visible = false;
                this.redPrompt = texas.Tool.createTextFiled(0, 415, this.width, 40, "提示：绑定手机才能参与报名", 18, 0xff0000, "center");
                this.addChild(this.redPrompt);
                this.createTimeDown();
            };
            RegisterPanel.prototype.createTimeDown = function () {
                this.timeTimer = new egret.Timer(1000);
                this.timeTimer.addEventListener(egret.TimerEvent.TIMER, this.runTime, this);
            };
            RegisterPanel.prototype.startTimeDown = function () {
                this.recordNum = 60;
                this.sendBtn.visible = false;
                this.againSendBtn.visible = true;
                this.againSendBtn.setEnable(false);
                this.timeText.visible = true;
                this.timeTimer.start();
            };
            RegisterPanel.prototype.stopTimeDown = function () {
                this.timeTimer.stop();
                this.sendBtn.visible = true;
                this.againSendBtn.visible = false;
                this.againSendBtn.setEnable(true);
                this.timeText.visible = false;
            };
            RegisterPanel.prototype.runTime = function () {
                this.recordNum--;
                this.timeText.text = "(" + this.recordNum + "s)";
                if (this.recordNum <= 0) {
                    this.stopTimeDown();
                }
            };
            RegisterPanel.prototype.on_sendBtn = function () {
                // if (StrUtil.isPhoneNumber(this.iphoneInputText.text) == false) {
                //     this.showIphonePrompt();
                //     return;
                // }
                this.startTimeDown();
                if (this.type == "register") {
                    texas.PhoneApi.genCode(this.iphoneInputText.text, function (self, data) { self.startTimeDown(); }, this);
                }
                else {
                    texas.UserApi.loginGetCode(this.iphoneInputText.text, null);
                }
            };
            RegisterPanel.prototype.createAPUI = function () {
                texas.Tool.replaceSwfTxt("newPasswordTxt", this);
                texas.Tool.replaceSwfTxt("againPasswordTxt", this);
                this.newPasswordTxt.verticalAlign = 'top';
                this.againPasswordTxt.verticalAlign = 'top';
                this.newPasswordTxt.multiline = true;
                this.againPasswordTxt.multiline = true;
                this.txt2 = new texas.InputText(this.newPasswordTxt);
                this.newPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.newPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                this.txt3 = new texas.InputText(this.againPasswordTxt);
                this.againPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.againPasswordTxt.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
            };
            RegisterPanel.prototype.focusIn = function (e) {
                e.target.text = "";
                e.target.displayAsPassword = true;
            };
            RegisterPanel.prototype.focusOut = function (e) {
                if (this.newPasswordTxt.text == "") {
                    this.newPasswordTxt.text = "请输入密码";
                    this.newPasswordTxt.displayAsPassword = false;
                }
                if (this.againPasswordTxt.text == "") {
                    this.againPasswordTxt.text = "请再次输入密码";
                    this.againPasswordTxt.displayAsPassword = false;
                }
            };
            RegisterPanel.prototype.on_sureBtn = function (e) {
                this.sendMsg();
            };
            RegisterPanel.prototype.on_sureAgainBtn = function (e) {
                this.sendMsg();
            };
            RegisterPanel.prototype.sendMsg = function () {
                // if (StrUtil.isPhoneNumber(this.iphoneInputText.text) == false) {
                //     this.showIphonePrompt();
                //     return;
                // }
                // if (this.codeInputText.text.length > 6 || this.codeInputText.text.length <= 0) {
                //     this.showCodeInputText();
                //     return;
                // }
                // if (this.newPasswordTxt.text == "请输入6-20位密码" || this.newPasswordTxt.text.length < 6 || this.newPasswordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.newPasswordTxt.text) == true) {
                //     this.showNewError();
                //     return;
                // }
                // if (this.againPasswordTxt.text == "请重复输入6-20位密码" || this.againPasswordTxt.text.length < 6 || this.againPasswordTxt.text.length > 20 || StrUtil.isHaveIllegal(this.againPasswordTxt.text) == true || this.newPasswordTxt.text != this.againPasswordTxt.text) {
                //     this.showAgainError();
                //     return;
                // }
                if (this.newPasswordTxt.text != this.againPasswordTxt.text) {
                    texas.ApiState.showText("两次输入的密码不相同，请重新输入密码");
                    return;
                }
                texas.Log.log("可以注册");
                var self = this;
                if (this.type == "register") {
                    texas.PhoneApi.vert(this.iphoneInputText.text, this.againPasswordTxt.text, this.codeInputText.text, function (self, data) { self.registersuccess(data); }, this);
                }
                else {
                    texas.UserApi.loginAgainPassword((this.iphoneInputText.text), (this.againPasswordTxt.text), this.codeInputText.text, function (data) { self.againpassword(data); }, this.againFailError.bind(this));
                }
            };
            RegisterPanel.prototype.againFailError = function (data) {
                if (data.state == -4) {
                    texas.ApiState.showText("用户不存在");
                }
                else {
                    texas.ApiState.show(data.state);
                }
            };
            RegisterPanel.prototype.againpassword = function (data) {
                texas.AccountData.addLoginInfo(this.iphoneInputText.text, this.againPasswordTxt.text);
                texas.ApiState.showText("密码重置成功");
                texas.EventManager.dispatchCmd("DT_registersuccess", null);
                this.dispose();
            };
            RegisterPanel.prototype.registersuccess = function (data) {
                // console.log("注册成功回调", data);
                // RoleData.getRole().gold = data.gold;
                // EventManager.dispatchCmd("DT_changeMoney", null);
                texas.AccountData.addLoginInfo(this.iphoneInputText.text, this.againPasswordTxt.text);
                // AccountData.loginInfo_visitor = null;
                texas.EventManager.dispatchCmd("DT_registersuccess", null);
                texas.ApiState.showText("账号绑定成功");
                this.dispose();
            };
            RegisterPanel.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.newPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.newPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                this.againPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.againPasswordTxt.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
            };
            RegisterPanel.prototype.mainAssetName = function () {
                return "spr_zhuce_scene";
            };
            return RegisterPanel;
        }(texas.BasePanel));
        texas.RegisterPanel = RegisterPanel;
        __reflect(RegisterPanel.prototype, "kelvin.texas.RegisterPanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MainPanel = (function (_super) {
            __extends(MainPanel, _super);
            function MainPanel() {
                var _this = _super.call(this) || this;
                texas.PanelTween.rootPanel = _this;
                _this.createGameScene();
                return _this;
            }
            MainPanel.prototype.createGameScene = function () {
                texas.ExtGameHelper.homePanel = this;
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij");
                this.addChild(this.bg);
                this.matchView = new texas.MatchView();
                this.addChild(this.matchView);
                this.topview = new texas.ViewTop();
                this.addChild(this.topview);
                this.bottomView = new texas.ViewBottom();
                this.addChild(this.bottomView);
                this.popup = new texas.PopupView();
                this.addChild(this.popup);
                texas.EventManager.registerCmd(texas.Events.createPersonalView, this.createPersonalView, this);
                egret.setTimeout(function () {
                    // console.log(ExtGameHelper.isCansignup(1,"14:10:10","18:00:00",20,100,0,1,2,100,2));
                    // ExtGameHelper.popGameSsxqView(1005, 1000, 1000, 5, 0, 10);
                    // ExtGameHelper.showMatchBtn(200,200,1001);
                    // ExtGameHelper.popMyMatchView(1001);
                    // ExtGameHelper.popGameRankView(770384,486733,null,100);
                    // this.topview.touchEnabled = true;
                    // PanelTween.pushPanel(new RankView());
                    // lzm.Alert.alert(new GameMatchView(-1, null, null, "home"));
                    // lzm.Alert.alert(new WaitRoomUI(-1));
                    // this.popNoticePop();   
                    // LoadingUI.ins.show(1);
                    // ExtGameHelper.popApplyFailMsg(2);  
                    // PanelTween.popPanel();
                    // PanelTween.pushPanel(new ShopView());
                    // console.log(ExtGameHelper.isUsePropApply(1));
                }, this, 2000);
                // if (egret.getOption("type")) {
                // } else {
                this.isBandingPhone();
                // }
                if (texas.AccountData.loginData.alertNotice != null) {
                    this.popNoticePop();
                }
                texas.MatchApi.getMyMatch(this.isHaveGameStart.bind(this));
                texas.MatchApi.getPlayerProps(null);
            };
            MainPanel.prototype.getRewardInfo = function (data) {
                if (!data.info && texas.AccountData.loginData.lastWcaaReward && texas.AccountData.loginData.lastWcaaReward[2] > 0) {
                    lzm.Alert.alert(new texas.GetPrizePopup());
                }
            };
            //是否有游戏开始
            MainPanel.prototype.isHaveGameStart = function (data) {
                var have = false;
                for (var i in data.matchs) {
                    if (data.matchs[i].state == 1 || data.matchs[i].state == 2) {
                        have = true;
                        break;
                    }
                }
                if (have == true) {
                    lzm.Alert.alert(new texas.GameMatchView("0", null, null, "home"));
                }
                else {
                    texas.RoleApi.getRewardInfo(this.getRewardInfo.bind(this));
                }
            };
            MainPanel.prototype.startGetPeopleNum = function () {
                this.timeid1 = egret.setInterval(this.getPeopleNum, this, 30000);
                this.isCanGetPeople = true;
            };
            //得到人的回调
            MainPanel.prototype.getPeopleNum = function () {
            };
            MainPanel.prototype.peopleInfo = function (data) {
            };
            //离开这个界面
            MainPanel.prototype.leaveView = function () {
                this.isCanGetPeople = false;
            };
            //回到这个界面的调用
            MainPanel.prototype.backView = function () {
                this.isCanGetPeople = true;
            };
            //判断是否绑定过手机
            MainPanel.prototype.isBandingPhone = function () {
                texas.PhoneApi.isVert(function (data) {
                    console.log(data);
                    if (data == null || data == "") {
                        lzm.Alert.alert(new texas.RegisterPanel("register"));
                    }
                });
            };
            MainPanel.prototype.popNoticePop = function () {
                egret.setTimeout(function () {
                    var nowtime = new Date().getTime();
                    if (nowtime - texas.TimeData.noticeTime < 24 * 3600 * 1000) {
                        texas.Log.log("今天不用再弹公告了");
                        return;
                    }
                    lzm.Alert.alert(new texas.NoticePopup());
                }, this, 100);
            };
            MainPanel.prototype.createPersonalView = function () {
                if (this.personal && this.contains(this.personal)) {
                    texas.Tool.removeFromParent(this.personal);
                }
                this.personal = new texas.PersonalView();
                this.addChild(this.personal);
                this.personal.show();
            };
            MainPanel.prototype.layout = function () {
                this.bg.width = texas.App.stageWidth;
                this.bg.height = texas.App.stageHeight;
                this.bottomView.y = texas.App.stageHeight - this.bottomView.height;
            };
            MainPanel.prototype.mainAssetName = function () {
                return "spr_main";
            };
            MainPanel.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                texas.ExtGameHelper.homePanel = null;
                texas.EventManager.removeCmd(texas.Events.createPersonalView, this.createPersonalView, this);
                texas.PanelTween.clearAllPanel();
                lzm.Alert.closeAllAlert();
                texas.ExtGameHelper.removePopupPanle();
            };
            return MainPanel;
        }(texas.BasePanel));
        texas.MainPanel = MainPanel;
        __reflect(MainPanel.prototype, "kelvin.texas.MainPanel");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 弹窗界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PopupView = (function (_super) {
            __extends(PopupView, _super);
            function PopupView() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            PopupView.prototype.createGameScene = function () {
                // EventManager.registerCmd(Events.createJBSView, this.createJBSView, this);
                // EventManager.registerCmd(Events.createBSXQView, this.createBSXQView, this);
                // EventManager.registerCmd(Events.createMZJGBView, this.createMZJGBView, this);
            };
            PopupView.prototype.createMZJGBView = function (data) {
                if (this.contains(this.mzjgbView)) {
                    texas.Log.log("已经生成锦标赛界面");
                    return;
                }
                this.mzjgbView = new texas.MzjgbView(data);
                this.addChild(this.mzjgbView);
                this.mzjgbView.x = texas.App.stageWidth;
                egret.Tween.get(this.mzjgbView).to({ x: 0 }, 300, egret.Ease.quartOut);
            };
            PopupView.prototype.createJBSView = function () {
                if (this.contains(this.jsbView)) {
                    texas.Log.log("已经生成锦标赛界面");
                    return;
                }
                this.jsbView = new texas.JbsView("common");
                this.addChild(this.jsbView);
                this.jsbView.x = texas.App.stageWidth;
                egret.Tween.get(this.jsbView).to({ x: 0 }, 300, egret.Ease.quartOut);
            };
            PopupView.prototype.createBSXQView = function (data) {
                if (this.contains(this.bsxqView)) {
                    texas.Log.log("已经生成比赛详情界面");
                    return;
                }
                this.bsxqView = new texas.BsxqView(data);
                this.addChild(this.bsxqView);
                this.bsxqView.x = texas.App.stageWidth;
                egret.Tween.get(this.bsxqView).to({ x: 0 }, 300, egret.Ease.quartOut);
            };
            PopupView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                texas.EventManager.removeCmd(texas.Events.createJBSView, this.createJBSView, this);
                texas.EventManager.removeCmd(texas.Events.createMZJGBView, this.createMZJGBView, this);
                texas.EventManager.removeCmd(texas.Events.createBSXQView, this.createBSXQView, this);
            };
            return PopupView;
        }(texas.BasePanel));
        texas.PopupView = PopupView;
        __reflect(PopupView.prototype, "kelvin.texas.PopupView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 下面部分
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ViewBottom = (function (_super) {
            __extends(ViewBottom, _super);
            function ViewBottom() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            ViewBottom.prototype.createGameScene = function () {
                this.bszqcover.touchEnabled = true;
                this.othercover.touchEnabled = true;
                this.othercover.visible = false;
                texas.EventManager.registerCmd(texas.Events.gotoMatchView, this.gotoMatchView, this);
            };
            ViewBottom.prototype.gotoMatchView = function () {
                this.on_bszqBtn(null);
            };
            ViewBottom.prototype.layout = function () {
            };
            ViewBottom.prototype.on_jlbBtn = function (e) {
                texas.ApiState.showText("敬请期待");
                // this.bszqcover.visible = false;
                // this.othercover.visible = true;
                // this.othercover.touchEnabled = true;
                // this.othercover.x = 0;
            };
            ViewBottom.prototype.on_scBtn = function (e) {
                this.bszqcover.visible = false;
                this.othercover.visible = true;
                this.othercover.touchEnabled = true;
                this.othercover.x = 148;
                texas.PanelTween.pushPanel(new texas.ShopView());
            };
            ViewBottom.prototype.on_bszqBtn = function (e) {
                this.bszqcover.visible = true;
                this.othercover.visible = false;
            };
            ViewBottom.prototype.on_phBtn = function (e) {
                this.bszqcover.visible = false;
                this.othercover.visible = true;
                this.othercover.touchEnabled = true;
                this.othercover.x = 430;
                // PanelTween.pushPanel(new NewsView());
                lzm.Alert.alert(new texas.MasterRankView());
            };
            ViewBottom.prototype.on_grxxBtn = function (e) {
                this.bszqcover.visible = false;
                this.othercover.visible = true;
                this.othercover.touchEnabled = false;
                this.othercover.x = 575;
                texas.EventManager.dispatchCmd(texas.Events.createPersonalView, null);
            };
            ViewBottom.prototype.mainAssetName = function () {
                return "spr_main_bottom";
            };
            ViewBottom.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                texas.EventManager.removeCmd(texas.Events.gotoMatchView, this.gotoMatchView, this);
            };
            return ViewBottom;
        }(texas.BasePanel));
        texas.ViewBottom = ViewBottom;
        __reflect(ViewBottom.prototype, "kelvin.texas.ViewBottom");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 * 主界面的上面
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ViewTop = (function (_super) {
            __extends(ViewTop, _super);
            function ViewTop() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            ViewTop.prototype.createGameScene = function () {
                var _this = this;
                this.setBg.touchEnabled = true;
                this.nameTxt.text = texas.RoleData.getRole().name;
                this.goldTxt.text = "" + texas.RoleData.getRole().gold;
                this.scoreTxt.text = "" + texas.RoleData.getRole().scores;
                this.uidTxt.text = "" + texas.RoleData.getRole().uid;
                this.setView.visible = false;
                texas.EventManager.registerCmd(texas.Events.goldChange, this.goldChange, this);
                this.initHead();
                // console.log(App.stageWidth);
                // console.log(App.stageHeight);
                // console.log(App.stageHeight / App.stageWidth);
                egret.setTimeout(function () {
                    if (texas.App.isiOS() == true) {
                        texas.Log.log("需要适配挖孔屏");
                        _this.topSclexImg.height = _this.topSclexImg.height + 50;
                        _this.topSclexImg.y = -50;
                        _this.y = 50;
                    }
                }, this, 100);
            };
            ViewTop.prototype.goldChange = function () {
                this.goldTxt.text = "" + texas.RoleData.getRole().gold;
                this.scoreTxt.text = "" + texas.RoleData.getRole().scores;
            };
            ViewTop.prototype.initHead = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var headurl, texture;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                headurl = texas.RoleData.getRole().head;
                                if (!headurl) {
                                    headurl = "head_1_png";
                                }
                                this.headImg = new egret.Bitmap();
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(headurl)];
                            case 1:
                                texture = _a.sent();
                                this.headImg.texture = texture;
                                this.headImg.width = 90;
                                this.headImg.height = 90;
                                this.headSp = texas.Tool.createCircularMask(this.headImg, 10, 10);
                                this.addChild(this.headSp);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            ViewTop.prototype.layout = function () {
            };
            ViewTop.prototype.on_setBtn = function (e) {
                this.setView.visible = !this.setView.visible;
            };
            ViewTop.prototype.on_huodongBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.ActiveView());
            };
            ViewTop.prototype.on_gonggaoBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.NoticeView());
            };
            ViewTop.prototype.on_xiaoxiBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.NewsView());
            };
            ViewTop.prototype.mainAssetName = function () {
                return "spr_main_top";
            };
            ViewTop.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                texas.EventManager.removeCmd(texas.Events.goldChange, this.goldChange, this);
            };
            return ViewTop;
        }(texas.BasePanel));
        texas.ViewTop = ViewTop;
        __reflect(ViewTop.prototype, "kelvin.texas.ViewTop");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MasterRankUI = (function (_super) {
            __extends(MasterRankUI, _super);
            function MasterRankUI() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            MasterRankUI.prototype.createGameScene = function () {
                this.scrollView.setShowSize(this.width, this.height - 52 - 63 - 20);
                this.scrollView.y = 52 + 10;
                this.addChild(this.scrollView);
            };
            MasterRankUI.prototype.createUi = function (data) {
                this.data = data;
                this.spArr = [];
                for (var i = 0; i < this.data.length; i++) {
                    var minsp = new egret.Sprite();
                    if (this.data[i].rank == 1) {
                        var img = texas.Tool.createBitmapByName("img_img_zjixiangq_jinbei", false, 10, 7);
                        minsp.addChild(img);
                    }
                    else if (this.data[i].rank == 2) {
                        var img = texas.Tool.createBitmapByName("img_img_zjixiangq_yingbei", false, 10, 7);
                        minsp.addChild(img);
                    }
                    else if (this.data[i].rank == 3) {
                        var img = texas.Tool.createBitmapByName("img_img_zjixiangq_tongbei", false, 10, 7);
                        minsp.addChild(img);
                    }
                    else {
                        var ranktxt = texas.Tool.createTextFiled(30, 15, 100, 40, "" + this.data[i].rank, 20, 0xffffff, "left");
                        minsp.addChild(ranktxt);
                    }
                    var nameTxt = texas.Tool.createTextFiled(70, 15, 200, 40, this.data[i].name, 20, 0xffffff, "center");
                    minsp.addChild(nameTxt);
                    var scoreTxt = texas.Tool.createTextFiled(215, 15, 200, 40, "" + this.data[i].score, 20, 0xffffff, "center");
                    minsp.addChild(scoreTxt);
                    var timeTxt = texas.Tool.createTextFiled(350, 15, 200, 40, this.data[i].time, 20, 0xffffff, "right");
                    minsp.addChild(timeTxt);
                    var line = texas.Tool.createBitmapByName("img_img_dzpyq_dsphb_line", false, 10, 70);
                    minsp.addChild(line);
                    minsp.y = i * 70;
                    this.scrollView.container.addChild(minsp);
                    this.spArr.push(minsp);
                }
                this.scrollView.setScrollSize(this.width, this.data.length * 70);
            };
            MasterRankUI.prototype.createSelfUI = function (data) {
                this.selfSp = new egret.Sprite();
                if (data.rank == 1) {
                    var img = texas.Tool.createBitmapByName("img_img_zjixiangq_jinbei", false, 10, 7);
                    this.selfSp.addChild(img);
                }
                else if (data.rank == 2) {
                    var img = texas.Tool.createBitmapByName("img_img_zjixiangq_yingbei", false, 10, 7);
                    this.selfSp.addChild(img);
                }
                else if (data.rank == 3) {
                    var img = texas.Tool.createBitmapByName("img_img_zjixiangq_tongbei", false, 10, 7);
                    this.selfSp.addChild(img);
                }
                else {
                    var ranktxt = texas.Tool.createTextFiled(30, 15, 100, 40, "" + data.rank, 20, 0xffffff, "left");
                    this.selfSp.addChild(ranktxt);
                    if (data.rank == -1) {
                        ranktxt.text = "未上榜";
                    }
                }
                var nameTxt = texas.Tool.createTextFiled(70, 15, 200, 40, data.name, 20, 0xffffff, "center");
                this.selfSp.addChild(nameTxt);
                var scoreTxt = texas.Tool.createTextFiled(215, 15, 200, 40, "" + data.score, 20, 0xffffff, "center");
                this.selfSp.addChild(scoreTxt);
                var timeTxt = texas.Tool.createTextFiled(350, 15, 200, 40, data.time, 20, 0xffffff, "right");
                this.selfSp.addChild(timeTxt);
                this.selfSp.y = 640;
                this.addChild(this.selfSp);
            };
            MasterRankUI.prototype.mainAssetName = function () {
                return "spr_master_rank_ui";
            };
            MasterRankUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return MasterRankUI;
        }(texas.BasePanel));
        texas.MasterRankUI = MasterRankUI;
        __reflect(MasterRankUI.prototype, "kelvin.texas.MasterRankUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 锦标赛的每一行
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var JbsLineUI = (function (_super) {
            __extends(JbsLineUI, _super);
            function JbsLineUI(data, index) {
                var _this = _super.call(this) || this;
                _this.iscanTouch = true;
                _this.data = data;
                _this.index = index;
                _this.createGameScene();
                return _this;
            }
            JbsLineUI.prototype.initUI = function () {
                this.alreadysignimg.visible = false;
                this.mtticon.visible = false;
                this.sngicon.visible = false;
                this.lightBg.visible = false;
                this.darkBg.visible = false;
                this.delayImg.visible = false;
                this.gameImg.visible = false;
                this.stopImg.visible = false;
                this.sginImg.visible = false;
                this.delayImg.touchEnabled = false;
                this.gameImg.touchEnabled = false;
                this.stopImg.touchEnabled = false;
                this.sginImg.touchEnabled = false;
                this.masterBtn.visible = false;
                this.masterBtn.isScale = false;
            };
            JbsLineUI.prototype.createGameScene = function () {
                this.updateState();
                this.touchEnabled = true;
                this.initUI();
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this, false, 1000000);
                this.updateUI();
                texas.EventManager.registerCmd(texas.Events.controlHContanier, this.controlHContanier, this);
            };
            JbsLineUI.prototype.controlHContanier = function (data) {
                this.iscanTouch = data;
            };
            JbsLineUI.prototype.touch = function () {
                // EventManager.dispatchCmd(Events.createBSXQView, this.data);
                if (this.iscanTouch == false) {
                    return;
                }
                texas.PanelTween.pushPanel(new texas.BsxqView(this.data));
            };
            JbsLineUI.prototype.updateState = function () {
                // let zeroTime1 = (new Date(new Date().toLocaleDateString()).getTime()); // 当天0点
                // state  1是报名中   2是延长报名  ps：延长报名情况下，先调加入房间 数据为null 延迟3再调一次  一直到成功为止   3是截止报名   4是游戏中   5是暂时不能报名
                // signed  1 是已经报名  2 是未报名  3是已经淘汰
                var nowtime = new Date().getTime();
                // console.log("nowtime",nowtime);
                // console.log("this.data.apply_time_end",this.data.apply_time_end);
                if (this.data.serverstate == 0) {
                    if (this.data.type == "mtt") {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.apply_time && nowtime <= this.data.apply_time_end) {
                            this.data.state = 1;
                        }
                        else if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime <= this.data.start_time && nowtime >= this.data.apply_time_end) {
                            //说明在游戏开始前不能报名的时间段
                            this.data.state = 3;
                        }
                        else if (nowtime >= this.data.apply_time_end + this.data.apply_delay_time * 1000 || nowtime > this.data.apply_date_end + this.data.apply_delay_time * 1000) {
                            //截止报名
                            this.data.state = 3;
                        }
                        else {
                            this.data.state = 5;
                        }
                        if (this.data.state != 5) {
                            if (this.data.mz_level > this.data.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.havepeople >= this.data.apply_max_people) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                    }
                    else if (this.data.type == "sng") {
                        this.data.state = 1;
                    }
                }
                else {
                    // console.log("nowtime",nowtime);
                    //      console.log(" this.data.apply_date_end + this.data.delaytime * 1000",this.data.apply_time_end + this.data.apply_delay_time * 1000);
                    if (this.data.signed == 1) {
                        this.data.state = 4;
                    }
                    else {
                        if (nowtime >= this.data.apply_date && nowtime <= this.data.apply_date_end && nowtime >= this.data.match_start_time * 1000 && nowtime <= this.data.match_start_time * 1000 + this.data.apply_delay_time * 1000) {
                            // console.log("到了这里");
                            //说明在延迟报名时间内
                            this.data.state = 2;
                            if (this.data.mz_level > this.data.apply_max_mz_level) {
                                //截止报名
                                this.data.state = 3;
                            }
                            if (this.data.havepeople >= this.data.apply_max_people && this.data.reBuyCount <= 0) {
                                //截止报名
                                this.data.state = 3;
                            }
                            else if (this.data.cur_buy_count >= this.data.buy_count || this.data.reBuyCount >= this.data.player_buy_count) {
                                this.data.state = 3;
                            }
                            if (this.data.inMoneyCircle == 1) {
                                //截止报名
                                this.data.state = 3;
                            }
                        }
                        else {
                            this.data.state = 3;
                        }
                    }
                }
            };
            JbsLineUI.prototype.updateUI = function () {
                if (this.data.type == "sng" || this.data.satellite == 1) {
                    this.sngicon.visible = true;
                    this.promptTxt.text = "人满即开";
                }
                else if (this.data.type == "mtt") {
                    this.mtticon.visible = true;
                    if (this.data.serverstate == 1) {
                        this.promptTxt.text = "比赛进行中";
                    }
                    else {
                        var myDate = new Date();
                        var nowDate = texas.DateUtils.formatDate(myDate);
                        this.promptTxt.text = "开赛时间 " + nowDate + " " + this.data.start_time_str;
                    }
                }
                if (this.index % 2 == 0) {
                    this.lightBg.visible = true;
                }
                else {
                    this.darkBg.visible = true;
                }
                if (this.data.signed == 1 || this.data.signed == 3) {
                    this.alreadysignimg.visible = true;
                }
                if (this.data.state == 1) {
                    this.sginImg.visible = true;
                }
                else if (this.data.state == 2) {
                    this.delayImg.visible = true;
                }
                else if (this.data.state == 3) {
                    this.stopImg.visible = true;
                }
                else if (this.data.state == 4) {
                    this.gameImg.visible = true;
                    this.promptTxt.text = "牌局进行中";
                }
                this.titleTxt.text = this.data.titie;
                if (this.data.master_points_id != -1 && this.data.masterRule) {
                    var myDate = new Date();
                    var nowDate = texas.DateUtils.formatDate(myDate);
                    var zerotime = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
                    var datestrstart = this.data.masterRule.start_date;
                    datestrstart = datestrstart.replace("/", "-").replace("/", "-");
                    var datestampstart = new Date(datestrstart).getTime(); //大师赛开始的时间
                    datestampstart = datestampstart - 8 * 3600 * 1000;
                    var timestrstart = nowDate + " " + this.data.masterRule.start_time;
                    var timestampstart = new Date(timestrstart).getTime();
                    var masterstarttime = datestampstart + (timestampstart - zerotime);
                    var datestrend = this.data.masterRule.end_date;
                    datestrend = datestrend.replace("/", "-").replace("/", "-");
                    var datestampend = new Date(datestrend).getTime(); //大师赛开始的时间
                    datestampend = datestampend - 8 * 3600 * 1000;
                    var timestrend = nowDate + " " + this.data.masterRule.end_time;
                    var timestampend = new Date(timestrend).getTime();
                    var masterendtime = datestampend + (timestampend - zerotime);
                    // console.log("masterstarttime", masterstarttime);
                    // console.log("masterendtime", masterendtime);
                    var nowtime = new Date().getTime();
                    if (nowtime > masterstarttime && nowtime < masterendtime) {
                        this.masterBtn.visible = true;
                        this.masterBtn.x = this.titleTxt.x + this.titleTxt.textWidth + 20;
                    }
                }
                // this.sginmoneyTxt.text = String(this.data.signmoney);
                if (this.data.signmoney == 0 && this.data.apply_score == 0) {
                    this.sginmoneyTxt.text = "免费";
                }
                else if (this.data.signmoney == 0) {
                    var money = this.data.apply_score + this.data.service_score;
                    this.sginmoneyTxt.text = "" + money;
                }
                else {
                    var money = this.data.signmoney + this.data.service_gold;
                    this.sginmoneyTxt.text = "" + money;
                }
                this.explainTxt.text = this.data.explain;
                if (this.data.serverstate == 1 || this.data.serverstate == 2) {
                    if (this.data.type == "sng" || this.data.satellite == 1) {
                        this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                    else if (this.data.type == "mtt") {
                        this.peopleNumTxt.text = "" + (this.data.cur_buy_count - this.data.over_people) + "/" + this.data.havepeople;
                    }
                }
                else {
                    if (this.data.type == "sng" || this.data.satellite == 1) {
                        this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                    }
                    else if (this.data.type == "mtt") {
                        this.peopleNumTxt.text = "" + (this.data.havepeople) + "/" + this.data.apply_max_people;
                        if (this.data.apply_max_people > 9999) {
                            this.peopleNumTxt.text = "" + (this.data.havepeople);
                        }
                    }
                }
                if (this.data.state == 2) {
                    // let time = this.data.apply_delay_time - this.data.time;
                    // let dateTool = new DateUtils();
                    // let timestr = dateTool.getFormatBySecond(time, 6);
                    // this.delayTxt.text = "剩余" + timestr;
                }
            };
            JbsLineUI.prototype.mainAssetName = function () {
                return "spr_jbs_line_ui";
            };
            JbsLineUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
                texas.EventManager.removeCmd(texas.Events.controlHContanier, this.controlHContanier, this);
            };
            return JbsLineUI;
        }(texas.BasePanel));
        texas.JbsLineUI = JbsLineUI;
        __reflect(JbsLineUI.prototype, "kelvin.texas.JbsLineUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 锦标赛
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var JbsView = (function (_super) {
            __extends(JbsView, _super);
            function JbsView(type) {
                var _this = _super.call(this) || this;
                _this.type = type;
                if (_this.type == "common") {
                    _this.servertype = 1;
                }
                else if (_this.type == "wcaa") {
                    _this.servertype = 2;
                }
                _this.createGameScene();
                return _this;
            }
            JbsView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                texas.Tool.removeFromParent(this.chooseLine);
                this.titleSng = this.sngBtn.skin.$children[1];
                this.titleMtt = this.mttBtn.skin.$children[1];
                this.titleSng.verticalAlign = 'middle';
                this.titleMtt.verticalAlign = 'middle';
                texas.Tool.removeFromParent(this.sngBtn);
                texas.Tool.removeFromParent(this.mttBtn);
                this.pageView = new texas.PagePanel(80, 720);
                this.pageView.y = 100;
                this.pageView.scrollViewH.setShowSize(texas.App.stageWidth, texas.App.stageHeight);
                this.pageView.scrollViewH.setScrollSize(texas.App.stageWidth, texas.App.stageHeight);
                this.addChild(this.pageView);
                if (this.type == "wcaa") {
                    this.titleImg.texture = RES.getRes("img_img_pyqdz_wcaazq");
                    this.titleImg.x = 250;
                }
                texas.MatchApi.getTitleConfig(this.servertype, this.getTitleInfo.bind(this));
                this.dateUtils = new texas.DateUtils();
                this.timer = new egret.Timer(1000);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
                this.timer.start();
                texas.EventManager.registerCmd(texas.Events.backGame, this.backView, this);
                texas.EventManager.registerCmd(texas.Events.goToJBSMatch, this.switchJBSUI, this);
            };
            JbsView.prototype.getTitleInfo = function (data) {
                this.titleArr = [];
                this.uiArr = [];
                for (var i in data.title_list) {
                    var txt = texas.Tool.createTextFiled(0, 0, null, 70, data.title_list[i].name, 28, 0xffffff, "center");
                    txt.name = data.title_list[i].id;
                    this.titleArr.push(txt);
                }
                for (var i = 0; i < this.titleArr.length; i++) {
                    var ui = new texas.BasePanel(true);
                    ui.width = 720;
                    ui.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 186);
                    ui.initDownRefresh();
                    ui.setDownRefresh(this.refreshCall.bind(this));
                    this.uiArr.push(ui);
                    ui.name = this.titleArr[i].name;
                    this.pageView.addPage(this.titleArr[i], ui, this.titleArr[i].name, this.getMatchInfo.bind(this));
                }
                this.infoArr = {};
                this.lineUIArr = {};
                if (this.titleArr[0]) {
                    this.getMatchInfo(this.titleArr[0].name);
                }
                this.updateAllUI();
            };
            JbsView.prototype.updateAllUI = function () {
                if (this.chooseTitleId) {
                    // this.getMatchInfo(this.titleArr[0].name);
                    // let obj = {
                    //     target: {
                    //         name: this.titleArr[0].name,
                    //     }
                    // }
                    this.getMatchInfo(this.chooseTitleId);
                }
            };
            JbsView.prototype.getMatchInfo = function (name) {
                if (name == null || name == undefined) {
                    return;
                }
                this.chooseTitleId = name;
                texas.MatchApi.getMatchListWithType1(this.servertype, name, this.getInfoSuccess.bind(this));
            };
            JbsView.prototype.getInfoSuccess = function (data) {
                var matchlist = data.matchConfigs;
                if (!this.infoArr[this.chooseTitleId]) {
                    this.infoArr[this.chooseTitleId] = [];
                }
                else {
                    this.infoArr[this.chooseTitleId] = [];
                }
                for (var i in matchlist) {
                    if (i == "") {
                        continue;
                    }
                    if (data.matchConfigs[i].state != 0 && data.matchConfigs[i].state != 1 && data.matchConfigs[i].state != 2) {
                        continue;
                    }
                    var mindata = {
                        id: data.matchConfigs[i].id,
                        type: "",
                        matchtype: this.type,
                        signed: 2,
                        titie: data.matchConfigs[i].name,
                        signmoney: data.matchConfigs[i].apply_gold,
                        havepeople: data.matchConfigs[i].people,
                        allpeople: data.matchConfigs[i].apply_max_people,
                        explain: "",
                        state: null,
                        apply_date: null,
                        apply_time: null,
                        apply_date_end: null,
                        apply_time_end: null,
                        start_date: null,
                        start_time: null,
                        apply_delay_time: data.matchConfigs[i].apply_delay_time,
                        serverstate: data.matchConfigs[i].state,
                        init_game_score: data.matchConfigs[i].init_game_score,
                        buy_count: data.matchConfigs[i].buy_count,
                        mz_level: data.matchConfigs[i].mz_level,
                        mz_interval: data.matchConfigs[i].mz_interval,
                        reward: data.matchConfigs[i].reward,
                        min_reward: data.matchConfigs[i].min_reward,
                        cur_buy_count: data.matchConfigs[i].cur_buy_count,
                        apply_score: data.matchConfigs[i].apply_score,
                        apply_max_people: data.matchConfigs[i].apply_max_people,
                        apply_max_mz_level: data.matchConfigs[i].apply_max_mz_level,
                        table_people: data.matchConfigs[i].table_people,
                        service_gold: data.matchConfigs[i].service_gold,
                        service_score: data.matchConfigs[i].service_score,
                        break_time_long: data.matchConfigs[i].break_time_long,
                        break_interval: data.matchConfigs[i].break_interval,
                        poker_score_rate: data.matchConfigs[i].poker_score_rate,
                        reward_poker_score: data.matchConfigs[i].reward_poker_score,
                        over_people: data.matchConfigs[i].over_people,
                        match_start_time: data.matchConfigs[i].match_start_time,
                        inMoneyCircle: data.matchConfigs[i].inMoneyCircle,
                        start_time_str: data.matchConfigs[i].start_time,
                        start_date_str: data.matchConfigs[i].start_date,
                        master_points_id: data.matchConfigs[i].master_points_id,
                        masterRule: data.masterRule,
                        satellite: data.matchConfigs[i].satellite,
                        player_buy_count: data.matchConfigs[i].player_buy_count,
                        apply_time_str: data.matchConfigs[i].apply_time,
                        ticket_cfgId: data.matchConfigs[i].ticket_cfgId,
                        reBuyCount: 0,
                    };
                    if (data.reBuyCounts[mindata.id]) {
                        mindata.reBuyCount = data.reBuyCounts[mindata.id];
                    }
                    if (data.matchConfigs[i].type == 1) {
                        mindata.type = "sng";
                    }
                    else if (data.matchConfigs[i].type == 2) {
                        mindata.type = "mtt";
                    }
                    var datestrstart = data.matchConfigs[i].apply_date;
                    var datestampstart = new Date(datestrstart).getTime();
                    datestampstart = datestampstart - 8 * 3600 * 1000;
                    mindata.apply_date = datestampstart;
                    var datestrend = data.matchConfigs[i].apply_date_end;
                    var datestampend = new Date(datestrend).getTime();
                    datestampend = datestampend - 8 * 3600 * 1000 + 24 * 3600 * 1000;
                    mindata.apply_date_end = datestampend;
                    var myDate = new Date();
                    var nowDate = texas.DateUtils.formatDate(myDate);
                    var timestrstart = nowDate + " " + data.matchConfigs[i].apply_time;
                    var timestampstart = new Date(timestrstart).getTime();
                    mindata.apply_time = timestampstart;
                    var timestrend = nowDate + " " + data.matchConfigs[i].apply_time_end;
                    var timestampend = new Date(timestrend).getTime();
                    mindata.apply_time_end = timestampend;
                    var datestrgame = data.matchConfigs[i].start_date;
                    var datestampgame = new Date(datestrgame).getTime();
                    datestampgame = datestampgame - 8 * 3600 * 1000;
                    mindata.start_date = datestampgame;
                    var timestrgame = nowDate + " " + data.matchConfigs[i].start_time;
                    var timestampgame = new Date(timestrgame).getTime();
                    mindata.start_time = timestampgame;
                    this.infoArr[this.chooseTitleId].push(mindata);
                }
                for (var i = 0; i < data.myMatchIds.length; i++) {
                    for (var k = 0; k < this.infoArr[this.chooseTitleId].length; k++) {
                        if (data.myMatchIds[i] == this.infoArr[this.chooseTitleId][k].id) {
                            this.infoArr[this.chooseTitleId][k].signed = 1;
                        }
                    }
                }
                this.infoArr[this.chooseTitleId] = texas.ArrayUtil.sortGameData(this.infoArr[this.chooseTitleId]);
                this.updataUI();
                // if (this.snggetInfoNum > 0) {
                //     // ApiState.showText("刷新成功");
                // }
                for (var i = 0; i < this.uiArr.length; i++) {
                    if (this.uiArr[i].name == this.chooseTitleId) {
                        this.uiArr[i].downRefreshOver();
                        break;
                    }
                }
                // this.sngUI.downRefreshOver();
            };
            JbsView.prototype.updataUI = function () {
                if (!this.lineUIArr[this.chooseTitleId]) {
                    this.lineUIArr[this.chooseTitleId] = [];
                }
                else {
                    for (var i = 0; i < this.lineUIArr[this.chooseTitleId].length; i++) {
                        this.lineUIArr[this.chooseTitleId][i].dispose();
                    }
                    this.lineUIArr[this.chooseTitleId] = [];
                }
                var ui;
                for (var i = 0; i < this.uiArr.length; i++) {
                    if (this.uiArr[i].name == this.chooseTitleId) {
                        ui = this.uiArr[i];
                        break;
                    }
                }
                if (ui) {
                    for (var i = 0; i < this.infoArr[this.chooseTitleId].length; i++) {
                        var minsp = new texas.JbsLineUI(this.infoArr[this.chooseTitleId][i], i);
                        ui.scrollView.container.addChild(minsp);
                        minsp.y = i * 183;
                        this.lineUIArr[this.chooseTitleId].push(minsp);
                    }
                    ui.scrollView.container.width = texas.App.stageWidth;
                    ui.scrollView.container.height = this.infoArr[this.chooseTitleId].length * 183;
                    ui.scrollView.setScrollSize(texas.App.stageWidth, this.infoArr[this.chooseTitleId].length * 183);
                }
            };
            JbsView.prototype.refreshCall = function () {
                texas.RefreshUI.ins.show(texas.App.stageWidth / 2, 250);
                // this.snggetInfoNum++;
                // this.getSngInfo();
                this.getMatchInfo(this.chooseTitleId);
            };
            JbsView.prototype.switchJBSUI = function () {
                this.type = "common";
                this.servertype = 1;
                if (this.type == "common") {
                    this.titleImg.texture = RES.getRes("img_img_pyqdz_jinbiaos_jbs");
                    this.titleImg.x = 282.95;
                }
            };
            JbsView.prototype.delayTimeRun = function () {
                // if (this.sngUIArr) {
                //     for (let i = 0; i < this.sngUIArr.length; i++) {
                //         if (this.sngUIArr[i].data.state == 2) {
                //             let distancetime = this.sngUIArr[i].data.start_time + this.sngUIArr[i].data.apply_delay_time * 1000 - new Date().getTime();
                //             let str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                //             this.sngUIArr[i].delayTxt.text = "" + str;
                //         } else {
                //             this.sngUIArr[i].delayTxt.text = "";
                //         }
                //     }
                // }
                var uiarr = this.lineUIArr[this.chooseTitleId];
                if (uiarr) {
                    for (var i = 0; i < uiarr.length; i++) {
                        if (uiarr[i].data.state == 2) {
                            var distancetime = uiarr[i].data.match_start_time * 1000 + uiarr[i].data.apply_delay_time * 1000 - new Date().getTime();
                            var str = this.dateUtils.getFormatBySecond(distancetime / 1000);
                            uiarr[i].delayTxt.text = "" + str;
                        }
                        else {
                            uiarr[i].delayTxt.text = "";
                        }
                    }
                }
            };
            JbsView.prototype.backView = function () {
                this.updateAllUI();
            };
            // public snggetInfoNum: number;
            // public mttgetInfoNum: number;
            JbsView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
                texas.EventManager.dispatchCmd(texas.Events.gotoMatchView, null);
            };
            JbsView.prototype.mainAssetName = function () {
                return "spr_jbs_view";
            };
            JbsView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.delayTimeRun, this);
                texas.EventManager.removeCmd(texas.Events.backGame, this.backView, this);
                texas.EventManager.removeCmd(texas.Events.goToJBSMatch, this.switchJBSUI, this);
            };
            return JbsView;
        }(texas.BasePanel));
        texas.JbsView = JbsView;
        __reflect(JbsView.prototype, "kelvin.texas.JbsView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 比赛专区的主界面
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var MatchView = (function (_super) {
            __extends(MatchView, _super);
            function MatchView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            MatchView.prototype.createGameScene = function () {
                this.waccBtn = this.assetSwf().createButton("btn_wacc_join_btn");
                this.jbsBtn = this.assetSwf().createButton("btn_jbs_join_btn");
                this.waccBtn.touchScale = 1.02;
                this.jbsBtn.touchScale = 1.02;
                this.waccPeopleTxt = this.waccBtn.$children[0].getChildByName("peopleNumTxt");
                this.jbsPeopleTxt = this.jbsBtn.$children[0].getChildByName("peopleNumTxt");
                this.waccPeopleTxt.text = "" + Math.ceil(Math.random() * 1000);
                this.jbsPeopleTxt.text = "" + Math.ceil(Math.random() * 1000);
                this.scrollView.container.addChild(this.waccBtn);
                this.scrollView.container.addChild(this.jbsBtn);
                this.scrollView.scrollPolicyV = "auto";
                this.waccBtn.x = 11;
                this.waccBtn.y = 195;
                this.jbsBtn.x = 11;
                this.jbsBtn.y = 670;
                this.scrollView.setScrollSize(texas.App.stageWidth, this.jbsBtn.y + this.jbsBtn.height);
                this.jbsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.on_jbsBtn, this);
                this.waccBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.on_waccBtn, this);
            };
            MatchView.prototype.setPeopleNumTxt = function (wcaa, jbs) {
                this.waccPeopleTxt.text = "" + wcaa;
                this.jbsPeopleTxt.text = "" + jbs;
            };
            MatchView.prototype.on_jbsBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.JbsView("common"));
                // EventManager.dispatchCmd(Events.createJBSView, null);
            };
            MatchView.prototype.on_waccBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.JbsView("wcaa"));
            };
            MatchView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.jbsBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.on_jbsBtn, this);
                this.jbsBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.on_waccBtn, this);
            };
            return MatchView;
        }(texas.BasePanel));
        texas.MatchView = MatchView;
        __reflect(MatchView.prototype, "kelvin.texas.MatchView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 * 消息的每一行
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NewsLineUI = (function (_super) {
            __extends(NewsLineUI, _super);
            function NewsLineUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            NewsLineUI.prototype.createGameScene = function () {
                this.initState();
                this.titleTxt.text = "【" + this.data.title + "】 " + this.data.content;
                this.contentTxt.text = "";
                if (this.data.type == "sng") {
                    this.sngImg.visible = true;
                }
                else if (this.data.type == "mtt") {
                    this.mttImg.visible = true;
                }
                else {
                    this.xtImg.visible = true;
                    this.ckxqBtn.visible = true;
                }
                this.timeTxt.text = this.data.time;
                // if (this.data.state) {
                //     if (this.data.state == 0) {
                //         this.stateTxt.text = "正在报名";
                //         this.stateTxt.textColor = 0x8EA10;
                //     } else if (this.data.state == 1) {
                //         this.stateTxt.text = "正在游戏";
                //         this.stateTxt.textColor = 0x8EA10;
                //         this.jrpjBtn.visible = true;
                //     } else if (this.data.state == 2) {
                //         this.stateTxt.text = "正在休息";
                //         this.stateTxt.textColor = 0x8EA10;
                //     } else if (this.data.state == 5 || this.data.state == 4 || this.data.state == 6) {
                //         this.stateTxt.text = "比赛结束";
                //         this.stateTxt.textColor = 0xC50000;
                //     }
                // }
            };
            NewsLineUI.prototype.initState = function () {
                this.jrpjBtn.visible = false;
                this.ckxqBtn.visible = false;
                this.sngImg.visible = false;
                this.mttImg.visible = false;
                this.xtImg.visible = false;
            };
            NewsLineUI.prototype.on_jrpjBtn = function (e) {
            };
            NewsLineUI.prototype.on_ckxqBtn = function (e) {
                lzm.Alert.alert(new texas.NewsXqPopup(this.data));
            };
            NewsLineUI.prototype.mainAssetName = function () {
                return "spr_news_line_ui";
            };
            NewsLineUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NewsLineUI;
        }(texas.BasePanel));
        texas.NewsLineUI = NewsLineUI;
        __reflect(NewsLineUI.prototype, "kelvin.texas.NewsLineUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 * 消息主界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NewsView = (function (_super) {
            __extends(NewsView, _super);
            function NewsView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            NewsView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.scrollView.y = 100;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                // this.getInfo();
                texas.RoleApi.getMessage(this.getInfo.bind(this));
            };
            NewsView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", state: 6, time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", state: 1, time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", state: 0, time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "xt", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "sng", time: "4月3日 10:00" },
                // { title: "这是一个标题", content: "这是一个比较长的内容哈哈哈哈哈哈哈哈哈哈", type: "mtt", time: "4月3日 10:00" },]
                if (data.msg) {
                    for (var i = 0; i < data.msg.length; i++) {
                        var min = void 0;
                        if (data.msg[i].tag == "getGold") {
                            min = {
                                type: "xt",
                                title: "系统提示：" + data.msg[i].source,
                                content: "金币" + data.msg[i].goldVal + "已返还",
                                time: data.msg[i].gettime,
                            };
                        }
                        else if (data.msg[i].tag == "getScore") {
                            min = {
                                type: "xt",
                                title: "系统提示：" + data.msg[i].source,
                                content: "积分" + data.msg[i].score + "已返还",
                                time: data.msg[i].gettime,
                            };
                        }
                        if (min) {
                            this.infoArr.push(min);
                        }
                    }
                }
                this.createUI();
            };
            NewsView.prototype.createUI = function () {
                if (this.uiArr) {
                    for (var i = 0; i < this.uiArr.length; i++) {
                        texas.Tool.removeFromParent(this.uiArr[i]);
                    }
                }
                this.uiArr = [];
                for (var i = 0; i < this.infoArr.length; i++) {
                    var line = new texas.NewsLineUI(this.infoArr[i]);
                    this.scrollView.container.addChild(line);
                    this.uiArr.push(line);
                    line.y = 170 * i;
                }
                this.scrollView.setScrollSize(texas.App.stageWidth, this.infoArr.length * 170);
                this.scrollView.viewport.scrollV = 0;
            };
            NewsView.prototype.on_clearBtn = function (e) {
                texas.RoleApi.clearMessage(this.clearSuccess.bind(this));
            };
            NewsView.prototype.clearSuccess = function () {
                texas.ApiState.showText("清除成功");
                this.infoArr = [];
                this.createUI();
            };
            NewsView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
                texas.EventManager.dispatchCmd(texas.Events.gotoMatchView, null);
            };
            NewsView.prototype.mainAssetName = function () {
                return "spr_news_view";
            };
            NewsView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NewsView;
        }(texas.BasePanel));
        texas.NewsView = NewsView;
        __reflect(NewsView.prototype, "kelvin.texas.NewsView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 消息详情弹窗
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NewsXqPopup = (function (_super) {
            __extends(NewsXqPopup, _super);
            function NewsXqPopup(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            NewsXqPopup.prototype.createGameScene = function () {
                this.contentTxt.text = this.data.content;
                this.goldTxt.text = "";
                this.contentTxt.verticalAlign = "middle";
            };
            NewsXqPopup.prototype.on_getBtn = function (e) {
                this.dispose();
            };
            NewsXqPopup.prototype.mainAssetName = function () {
                return "spr_news_xq_view";
            };
            NewsXqPopup.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NewsXqPopup;
        }(texas.BasePanel));
        texas.NewsXqPopup = NewsXqPopup;
        __reflect(NewsXqPopup.prototype, "kelvin.texas.NewsXqPopup");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 * 公告或者活动的详细信息
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NoticeInfo = (function (_super) {
            __extends(NoticeInfo, _super);
            function NoticeInfo(urlArr) {
                var _this = _super.call(this, true) || this;
                // this.urlArr = ["img_advice_png", "img_advice_png", "img_advice_png", "img_advice_png", "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",
                //     "img_advice_png",];
                _this.urlArr = urlArr;
                _this.createGameScene();
                return _this;
            }
            NoticeInfo.prototype.createGameScene = function () {
                var _this = this;
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                this.scrollView.y = 100;
                egret.setTimeout(function () {
                    _this.createImg();
                }, this, 100);
            };
            NoticeInfo.prototype.createImg = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var imgAllH, i, img, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                imgAllH = 0;
                                i = 0;
                                _b.label = 1;
                            case 1:
                                if (!(i < this.urlArr.length)) return [3 /*break*/, 4];
                                img = new egret.Bitmap();
                                img.x = 8;
                                img.width = texas.App.stageWidth - 16;
                                _a = img;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.urlArr[i])];
                            case 2:
                                _a.texture = _b.sent();
                                img.y = imgAllH;
                                this.scrollView.container.addChild(img);
                                imgAllH = imgAllH + img.height;
                                this.scrollView.setScrollSize(texas.App.stageWidth, imgAllH);
                                _b.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            NoticeInfo.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            NoticeInfo.prototype.mainAssetName = function () {
                return "spr_active_view";
            };
            NoticeInfo.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NoticeInfo;
        }(texas.BasePanel));
        texas.NoticeInfo = NoticeInfo;
        __reflect(NoticeInfo.prototype, "kelvin.texas.NoticeInfo");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 公告弹窗
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NoticePopup = (function (_super) {
            __extends(NoticePopup, _super);
            function NoticePopup() {
                var _this = _super.call(this, false) || this;
                _this.createGameScene();
                return _this;
            }
            NoticePopup.prototype.createGameScene = function () {
                this.imgurl = texas.AccountData.loginData.alertNotice.titleUrl;
                console.log(texas.AccountData.loginData.alertNotice.titleUrl);
                this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0);
                this.addChild(this.bgSp);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.noticeimg = new egret.Bitmap();
                this.noticeimg.width = 564;
                this.noticeimg.height = 841;
                this.addChild(this.noticeimg);
                this.noticeimg.touchEnabled = true;
                this.noticeimg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchNotice, this);
                this.noticeimg.x = texas.App.stageWidth / 2 - this.noticeimg.width / 2;
                this.noticeimg.y = texas.App.stageHeight / 2 - 70 - this.noticeimg.height / 2;
                this.whiteImg = texas.Tool.createBitmapByName("img_img_gg_xz");
                this.whiteImg.y = this.noticeimg.y + this.noticeimg.height + 10;
                this.whiteImg.x = this.noticeimg.x + 150;
                this.addChild(this.whiteImg);
                this.gouImg = texas.Tool.createBitmapByName("img_img_gg_xz_dg");
                this.gouImg.x = this.whiteImg.x + 4;
                this.gouImg.y = this.whiteImg.y + 6;
                this.addChild(this.gouImg);
                this.gouImg.visible = false;
                this.txt = texas.Tool.createTextFiled(this.whiteImg.x + 0, this.whiteImg.y, 300, 40, "今日不在显示此消息", 22, 0xffffff, "center");
                this.addChild(this.txt);
                this.txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.choose, this);
                this.txt.touchEnabled = true;
                this.closeBtn = this.assetSwf().createButton("btn_img_gg_gb");
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.closeBtn.x = this.whiteImg.x + 35;
                this.closeBtn.y = this.whiteImg.y + 80;
                this.addChild(this.closeBtn);
                this.createImg();
            };
            NoticePopup.prototype.choose = function () {
                this.gouImg.visible = !this.gouImg.visible;
            };
            NoticePopup.prototype.createImg = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.noticeimg;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.imgurl)];
                            case 1:
                                _a.texture = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            NoticePopup.prototype.touchNotice = function (e) {
                if (texas.AccountData.loginData.alertNotice && texas.AccountData.loginData.alertNotice.urls && texas.AccountData.loginData.alertNotice.urls.length > 0) {
                    texas.PanelTween.pushPanel(new texas.NoticeInfo(texas.AccountData.loginData.alertNotice.urls));
                    this.hide();
                }
            };
            NoticePopup.prototype.hide = function () {
                if (this.gouImg && this.gouImg.visible == true) {
                    var start = new Date(new Date().toLocaleDateString()).getTime();
                    texas.TimeData.noticeTime = start;
                }
                this.dispose();
            };
            NoticePopup.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                if (this.noticeimg) {
                    this.noticeimg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchNotice, this);
                }
                if (this.bgSp) {
                    this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                }
                if (this.closeBtn) {
                    this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                }
                if (this.txt) {
                    this.txt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.choose, this);
                }
            };
            return NoticePopup;
        }(texas.BasePanel));
        texas.NoticePopup = NoticePopup;
        __reflect(NoticePopup.prototype, "kelvin.texas.NoticePopup");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 * 活动主界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NoticeView = (function (_super) {
            __extends(NoticeView, _super);
            function NoticeView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            NoticeView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.scrollView.y = 100;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 100);
                this.clearBtn.visible = false;
                texas.NoticeApi.getNotices(this.getInfo.bind(this));
            };
            NoticeView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ time: "4月1日 04:00", imgurl: "", content: "测试哈哈哈啊哈哈哈哈啊哈哈", name: "朋友圈德州", title: "赛事通知" },
                // { time: "4月1日 04:00", imgurl: "", content: "测试哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦 哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦 哦哦哦 哦哦哦哦哦哦哦哦哦哦哦", name: "朋友圈德州", title: "赛事通知" },
                // { time: "4月1日 04:00", imgurl: "", content: "测试期期IQIQIQ已诶诶诶IE诶法卡萨积分卡就反复E", name: "朋友圈德州", title: "赛事通知" },
                // { time: "4月1日 04:00", imgurl: "", content: "测试", name: "朋友圈德州", title: "赛事通知" },
                // { time: "4月1日 04:00", imgurl: "", content: "测试哈哈哈哈哈hi随风is广东省广东省刚开始国际快递回顾的看后感看到过黑客帝国和端口号光电开关的看低功耗关卡等级疯狂夺金疯狂夺金分开打飞机", name: "朋友圈德州", title: "赛事通知" },]
                if (data.notices != null) {
                    for (var i in data.notices) {
                        var mindata = {
                            time: data.notices[i].gettime,
                            imgurl: data.notices[i].url,
                            name: "朋友圈德州",
                            content: data.notices[i].text,
                            title: data.notices[i].title,
                        };
                        this.infoArr.push(mindata);
                    }
                }
                this.createUI();
            };
            NoticeView.prototype.createUI = function () {
                this.uiArr = [];
                var allTextH = 0;
                for (var i = 0; i < this.infoArr.length; i++) {
                    var line = new texas.ActiveLineUI(this.infoArr[i]);
                    this.scrollView.container.addChild(line);
                    this.uiArr.push(line);
                    line.y = 700 * i + allTextH;
                    allTextH = allTextH + line.contentH;
                }
                this.scrollView.setScrollSize(texas.App.stageWidth, this.infoArr.length * 700 + allTextH);
            };
            NoticeView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            NoticeView.prototype.mainAssetName = function () {
                return "spr_gonggao_view";
            };
            NoticeView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return NoticeView;
        }(texas.BasePanel));
        texas.NoticeView = NoticeView;
        __reflect(NoticeView.prototype, "kelvin.texas.NoticeView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * 活动条
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PackLineUI = (function (_super) {
            __extends(PackLineUI, _super);
            function PackLineUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            PackLineUI.prototype.createGameScene = function () {
                this.startTimeTxt.text = this.data.startTime;
                this.nameTxt.text = this.data.name;
                this.typeTxt.text = this.data.type;
                this.endTimeTxt.text = this.data.endTime;
                this.descTxt.text = this.data.desc;
                this.ysyBtn.isScale = false;
                this.ygqBtn.isScale = false;
                this.wsyBtn.isScale = false;
                this.wsyBtn.visible = false;
                this.ysyBtn.visible = false;
                this.ygqBtn.visible = false;
                if (this.data.state == 1) {
                    this.wsyBtn.visible = true;
                }
                else if (this.data.state == 2) {
                    this.ysyBtn.visible = true;
                }
                else if (this.data.state == 3) {
                    this.ygqBtn.visible = true;
                }
                this.createImg();
            };
            PackLineUI.prototype.createImg = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
            PackLineUI.prototype.mainAssetName = function () {
                return "spr_pack_line_ui";
            };
            PackLineUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return PackLineUI;
        }(texas.BasePanel));
        texas.PackLineUI = PackLineUI;
        __reflect(PackLineUI.prototype, "kelvin.texas.PackLineUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 * 背包主界面
 */
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
 *
 *
 *
 *
 * 得到奖品
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GetPrizePopup = (function (_super) {
            __extends(GetPrizePopup, _super);
            function GetPrizePopup() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            GetPrizePopup.prototype.createGameScene = function () {
                var text = [{ text: "你在" },
                    { text: texas.AccountData.loginData.lastWcaaReward[0], style: { textColor: 0xD4C90B } },
                    { text: "获得第" },
                    { text: texas.AccountData.loginData.lastWcaaReward[1], style: { textColor: 0xD4C90B } },
                    { text: "名奖金" },
                    { text: texas.AccountData.loginData.lastWcaaReward[2], style: { textColor: 0xD4C90B } },
                    { text: ",需要登记领奖信息" },];
                this.contentTxt.textFlow = text;
                this.contentTxt.verticalAlign = "middle";
                this.contentTxt.lineSpacing = 4;
            };
            GetPrizePopup.prototype.on_goBtn = function (e) {
                this.dispose();
                lzm.Alert.alert(new texas.GetPrizeView());
            };
            GetPrizePopup.prototype.mainAssetName = function () {
                return "spr_getprize_popup_view";
            };
            GetPrizePopup.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return GetPrizePopup;
        }(texas.BasePanel));
        texas.GetPrizePopup = GetPrizePopup;
        __reflect(GetPrizePopup.prototype, "kelvin.texas.GetPrizePopup");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 *
 * 得到奖品
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var GetPrizeView = (function (_super) {
            __extends(GetPrizeView, _super);
            function GetPrizeView(callback, isgame) {
                if (isgame === void 0) { isgame = false; }
                var _this = _super.call(this) || this;
                _this.callback = callback;
                _this.isgame = isgame;
                _this.createGameScene();
                return _this;
            }
            GetPrizeView.prototype.createGameScene = function () {
                texas.Tool.replaceSwfTxt("nameTxt", this);
                texas.Tool.replaceSwfTxt("idcardTxt", this);
                texas.Tool.replaceSwfTxt("zfbTxt", this);
                this.nameInputTxt = new texas.InputText(this.nameTxt);
                this.idcardInputTxt = new texas.InputText(this.idcardTxt);
                this.zfbInputTxt = new texas.InputText(this.zfbTxt);
                this.nameTxt.text = "请输入姓名";
                this.idcardTxt.text = "请输入身份证号";
                this.zfbTxt.text = "请输入支付宝账号";
                this.nameInputTxt.setDefaultText("请输入姓名", 0xffffff);
                this.idcardInputTxt.setDefaultText("请输入身份证号", 0xffffff);
                this.zfbInputTxt.setDefaultText("请输入支付宝账号", 0xffffff);
                this.text = this.submitBtn.$children[0].$children[1];
                if (this.isgame == true) {
                    this.closeBtn.visible = false;
                }
                if (texas.ExtGameHelper.isSetPrizeInfo()) {
                    this.text.text = "修改";
                    var data = texas.RoleData.getRolePrizeInfo();
                    this.nameTxt.text = data.name;
                    this.idcardTxt.text = data.pid;
                    this.zfbTxt.text = data.aliAccount;
                    this.nameInputTxt.setDefaultText(data.name, 0xffffff);
                    this.idcardInputTxt.setDefaultText(data.pid, 0xffffff);
                    this.zfbInputTxt.setDefaultText(data.aliAccount, 0xffffff);
                }
            };
            GetPrizeView.prototype.on_submitBtn = function (e) {
                var data = texas.RoleData.getRolePrizeInfo();
                if (this.nameTxt.text == "" || this.nameTxt.text == "请输入姓名") {
                    texas.ApiState.showText("请输入姓名");
                    return;
                }
                if (this.idcardTxt.text == "" || this.idcardTxt.text == "请输入身份证号") {
                    texas.ApiState.showText("请输入身份证号");
                    return;
                }
                if (this.zfbTxt.text == "" || this.zfbTxt.text == "请输入支付宝账号") {
                    texas.ApiState.showText("请输入支付宝账号");
                    return;
                }
                if (data) {
                    if (this.nameTxt.text != data.name || this.idcardTxt.text != data.pid || this.zfbTxt.text != data.aliAccount) {
                        texas.RoleApi.updateRewardInfo(this.nameTxt.text, this.idcardTxt.text, this.zfbTxt.text, this.subminSuccess.bind(this));
                    }
                    else {
                        texas.ApiState.showText("请修改后再点击按钮");
                    }
                }
                else {
                    texas.RoleApi.updateRewardInfo(this.nameTxt.text, this.idcardTxt.text, this.zfbTxt.text, this.subminSuccess.bind(this));
                }
            };
            GetPrizeView.prototype.subminSuccess = function (data) {
                texas.ApiState.showText("提交成功");
                this.dispose();
            };
            GetPrizeView.prototype.mainAssetName = function () {
                return "spr_submit_view";
            };
            GetPrizeView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                if (this.callback) {
                    this.callback();
                }
            };
            return GetPrizeView;
        }(texas.BasePanel));
        texas.GetPrizeView = GetPrizeView;
        __reflect(GetPrizeView.prototype, "kelvin.texas.GetPrizeView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 * 个人信息的详细面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PersonalInfo = (function (_super) {
            __extends(PersonalInfo, _super);
            function PersonalInfo() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            PersonalInfo.prototype.createGameScene = function () {
                this.view = this.$children[0];
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.idTxt.text = texas.RoleData.getRole().uid;
                this.nameTxt.text = texas.RoleData.getRole().name;
                this.createChangeHeadUI();
                this.createImgUI();
                this.hideChooseHeadUI();
                this.updateHeadImg();
            };
            PersonalInfo.prototype.createChangeHeadUI = function () {
                this.headBgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                this.addChild(this.headBgSp);
                this.headBgSp.touchEnabled = true;
                this.headBgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideChooseHeadUI, this);
                this.headSp = new egret.Sprite();
                this.addChild(this.headSp);
                var bg = texas.Tool.createBitmapByName("img_img_gersz_tc");
                this.headSp.width = bg.width;
                this.headSp.height = bg.height;
                this.headSp.addChild(bg);
                this.headSp.x = 50;
                this.headSp.y = (texas.App.stageHeight - this.headSp.height) / 2;
                this.scrollview = new eui.Scroller();
                this.scrollview.scrollPolicyH = 'off';
                this.scrollview.scrollPolicyV = "auto";
                this.scrollview.width = this.headSp.width;
                this.scrollview.height = this.headSp.height - 20;
                this.scrollview.y = 10;
                this.headSp.addChild(this.scrollview);
                this.scSp = new eui.Group();
                this.scrollview.viewport = this.scSp;
                this.scImg = new eui.Image();
                this.scImg.width = this.scrollview.width;
                this.scSp.addChild(this.scImg);
            };
            PersonalInfo.prototype.showChooseHeadUI = function () {
                this.headBgSp.visible = true;
                this.headSp.visible = true;
            };
            PersonalInfo.prototype.hideChooseHeadUI = function () {
                this.headBgSp.visible = false;
                this.headSp.visible = false;
            };
            PersonalInfo.prototype.createImgUI = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var numY, i, img, imgurl, _a, i;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.imgArr = [];
                                numY = -1;
                                i = 0;
                                _b.label = 1;
                            case 1:
                                if (!(i < 6)) return [3 /*break*/, 4];
                                if (i % 3 == 0) {
                                    numY++;
                                }
                                img = new egret.Bitmap();
                                imgurl = "head_" + (i + 1) + "_png";
                                _a = img;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(imgurl)];
                            case 2:
                                _a.texture = _b.sent();
                                img.name = imgurl;
                                img.x = (i - (numY * 3)) * 130 + 130;
                                img.y = numY * 170 + 55;
                                img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touImg, this);
                                img.touchEnabled = true;
                                this.scSp.addChild(img);
                                this.imgArr.push(img);
                                _b.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4:
                                this.scImg.height = (numY + 1) * 170 + 75;
                                this.frame = texas.Tool.createBitmapByName("img_img_gersz_xzk");
                                this.scSp.addChild(this.frame);
                                this.frame.visible = false;
                                for (i = 0; i < this.imgArr.length; i++) {
                                    if (this.imgArr[i].name == texas.RoleData.getRole().head) {
                                        this.frame.visible = true;
                                        this.frame.x = this.imgArr[i].x - 12;
                                        this.frame.y = this.imgArr[i].y - 12;
                                        break;
                                    }
                                }
                                this.initImg();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            PersonalInfo.prototype.touImg = function (e) {
                texas.RoleData.getRole().head = e.target.name;
                this.frame.visible = true;
                this.frame.x = e.target.x - 12;
                this.frame.y = e.target.y - 12;
                this.updateHeadImg();
            };
            PersonalInfo.prototype.initImg = function () {
                if (!texas.RoleData.getRole().head) {
                    texas.RoleData.getRole().head = "head_1_png";
                }
                this.frame.visible = true;
                this.frame.x = this.imgArr[0].x - 12;
                this.frame.y = this.imgArr[0].y - 12;
                this.updateHeadImg();
            };
            PersonalInfo.prototype.updateHeadImg = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var texture;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!texas.RoleData.getRole().head) {
                                    return [2 /*return*/];
                                }
                                if (!this.showHead) {
                                    this.showHead = new egret.Bitmap();
                                    this.view.addChild(this.showHead);
                                    this.showHead.width = 187;
                                    this.showHead.height = 187;
                                    texas.Tool.center(this.showHead);
                                    this.showHead.x = texas.App.stageWidth / 2;
                                    this.showHead.y = 250;
                                }
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(texas.RoleData.getRole().head)];
                            case 1:
                                texture = _a.sent();
                                this.showHead.texture = texture;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            PersonalInfo.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            PersonalInfo.prototype.on_chooseXtBtn = function (e) {
                this.showChooseHeadUI();
            };
            PersonalInfo.prototype.on_chooseZdyBtn = function (e) {
            };
            PersonalInfo.prototype.mainAssetName = function () {
                return "spr_personal_info_view";
            };
            PersonalInfo.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.headBgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideChooseHeadUI, this);
                if (this.imgArr) {
                    for (var i = 0; i < this.imgArr.length; i++) {
                        this.imgArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touImg, this);
                    }
                }
            };
            return PersonalInfo;
        }(texas.BasePanel));
        texas.PersonalInfo = PersonalInfo;
        __reflect(PersonalInfo.prototype, "kelvin.texas.PersonalInfo");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 * 个人信息主页
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PersonalView = (function (_super) {
            __extends(PersonalView, _super);
            function PersonalView() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            PersonalView.prototype.createGameScene = function () {
                this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.addChildAt(this.bgSp, 0);
                this.view = this.$children[1];
                this.bg.touchEnabled = true;
                this.changeHeadBtn.isScale = false;
                this.nameTxt.text = texas.RoleData.getRole().name;
                this.idTxt.text = texas.RoleData.getRole().uid;
                this.view.visible = false;
                this.view.y = (texas.App.stageHeight - this.view.height) / 2;
                this.initHead();
            };
            PersonalView.prototype.initHead = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var headurl, texture;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                headurl = texas.RoleData.getRole().head;
                                if (!headurl) {
                                    headurl = "head_1_png";
                                }
                                this.headImg = new egret.Bitmap();
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(headurl)];
                            case 1:
                                texture = _a.sent();
                                this.headImg.texture = texture;
                                this.headImg.width = this.changeHeadBtn.width - 20;
                                this.headImg.height = this.changeHeadBtn.height - 20;
                                this.headSp = texas.Tool.createCircularMask(this.headImg, this.changeHeadBtn.x + 10, this.changeHeadBtn.y + 10);
                                this.view.addChild(this.headSp);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            PersonalView.prototype.show = function () {
                this.view.x = -this.view.width;
                this.view.visible = true;
                egret.Tween.get(this.view).to({ x: 0 }, 250);
            };
            PersonalView.prototype.hide = function () {
                var _this = this;
                egret.Tween.get(this.view).to({ x: -this.view.width }, 250).call(function () {
                    _this.dispose();
                    texas.EventManager.dispatchCmd(texas.Events.gotoMatchView, null);
                }, this);
            };
            PersonalView.prototype.on_changeHeadBtn = function (e) {
                // PanelTween.pushPanel(new PersonalInfo());
            };
            PersonalView.prototype.on_zjBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.RankView());
            };
            PersonalView.prototype.on_bbBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.PackView(1));
            };
            PersonalView.prototype.on_hjxxdjBtn = function (e) {
                lzm.Alert.alert(new texas.GetPrizeView());
            };
            PersonalView.prototype.on_szBtn = function (e) {
                texas.PanelTween.pushPanel(new texas.SetView());
            };
            PersonalView.prototype.mainAssetName = function () {
                return "spr_personal_view";
            };
            PersonalView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            };
            return PersonalView;
        }(texas.BasePanel));
        texas.PersonalView = PersonalView;
        __reflect(PersonalView.prototype, "kelvin.texas.PersonalView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RankInfoListLine = (function (_super) {
            __extends(RankInfoListLine, _super);
            function RankInfoListLine() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            RankInfoListLine.prototype.createGameScene = function () {
                this.view = this.assetSwf().createSprite("spr_rank_list_line_ui");
                this.addChild(this.view);
                this.width = this.view.width;
                this.height = this.view.height - 10;
                this.headImg = this.view.getChildByName("headImg");
                this.nameTxt = this.view.getChildByName("nameTxt");
                this.resultTxt = this.view.getChildByName("resultTxt");
                this.rankingTxt = this.view.getChildByName("rankingTxt");
                this.rankimg3Img = this.view.getChildByName("rankimg3Img");
                this.rankimg2Img = this.view.getChildByName("rankimg2Img");
                this.rankimg1Img = this.view.getChildByName("ranking1Img");
                this.bgImg = this.view.getChildByName("bgImg");
                this.line = this.view.getChildByName("line");
                this.goldImg = this.view.getChildByName("goldImg");
                this.scoreImg = this.view.getChildByName("scoreImg");
            };
            RankInfoListLine.prototype.setData = function (data) {
                this.data = data;
                this.dataChanged();
                this.bgImg.visible = true;
            };
            RankInfoListLine.prototype.dataChanged = function () {
                if (!this.data) {
                    return;
                }
                this.initState();
                this.showUI();
                this.showHead();
            };
            RankInfoListLine.prototype.showUI = function () {
                this.nameTxt.text = this.data.name;
                this.resultTxt.text = this.data.result;
                this.resultTxt.verticalAlign = "middle";
                this.resultTxt.text = "" + this.data.reward;
                if (this.data.rank == 1) {
                    this.rankimg1Img.visible = true;
                }
                else if (this.data.rank == 2) {
                    this.rankimg2Img.visible = true;
                }
                else if (this.data.rank == 3) {
                    this.rankimg3Img.visible = true;
                }
                else {
                    this.rankingTxt.text = "" + this.data.rank;
                }
                if (this.data.reward_type == 2) {
                    this.goldImg.visible = true;
                    // this.goldImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
                }
                else {
                    this.scoreImg.visible = true;
                    // this.scoreImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
                }
            };
            RankInfoListLine.prototype.showHead = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (this.data.headurl == null) {
                                    this.data.headurl = "head_1_png";
                                }
                                if (!this.data.headurl) return [3 /*break*/, 2];
                                _a = this.headImg;
                                return [4 /*yield*/, texas.Tool.getTextureByUrlOrName(this.data.headurl)];
                            case 1:
                                _a.texture = _b.sent();
                                this.headImg.width = this.headImg.height = 80;
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
            RankInfoListLine.prototype.initState = function () {
                this.bgImg.visible = false;
                this.line.visible = true;
                this.headImg.texture = RES.getRes("img_img_zjixiangq_toux");
                this.rankimg1Img.visible = false;
                this.rankimg2Img.visible = false;
                this.rankimg3Img.visible = false;
                this.rankingTxt.text = "";
                this.goldImg.visible = false;
                this.scoreImg.visible = false;
            };
            RankInfoListLine.prototype.assetSwf = function () {
                return texas.AssetManager.mainSwf;
            };
            return RankInfoListLine;
        }(eui.ItemRenderer));
        texas.RankInfoListLine = RankInfoListLine;
        __reflect(RankInfoListLine.prototype, "kelvin.texas.RankInfoListLine");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 *
 *
 *
 *
 * 战绩详情界面
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RankInfoView = (function (_super) {
            __extends(RankInfoView, _super);
            function RankInfoView(data) {
                var _this = _super.call(this, true) || this;
                _this.data = data;
                _this.switchData();
                _this.createGameScene();
                return _this;
            }
            RankInfoView.prototype.switchData = function () {
                // this.data = {
                //     title: "这是标题",
                //     time: "2020/2/4 10:10:10",
                //     matchTime: "01:00:00",
                //     matchJoinNum: "100/100",
                //     matchJackpot: "10000",
                //     matchWin: "10",
                //     matchLive: "20",
                //     allPeople: "100",
                //     list: [{ uid: "100010", rank: 1, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 2, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 3, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 4, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 5, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 6, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 7, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 8, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 9, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 10, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 11, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 12, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 13, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 14, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 15, headurl: null, name: "名字而已", result: "最终结果" },
                //     { uid: "100010", rank: 16, headurl: null, name: "名字而已", result: "最终结果" },],
                // }
            };
            RankInfoView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                texas.MatchApi.getMatchZhanji(this.data.zhanjiId, this.getInfo.bind(this));
            };
            RankInfoView.prototype.getInfo = function (data) {
                this.data.title = data.zhanji.match.name;
                this.data.time = texas.DateUtils.timestampToTime(data.zhanji.match.match_start_time);
                // this.data.matchTime
                this.data.matchJoinNum = data.zhanji.match.people;
                this.data.matchJackpot = data.zhanji.match.cur_buy_count;
                this.data.allPeople = Object.keys(data.roles).length;
                this.data.matchTime = data.zhanji.endTime - data.zhanji.match.match_start_time;
                var list = [];
                for (var i in data.zhanji.logs) {
                    var minlist = {
                        rank: Number(i),
                        reward: data.zhanji.logs[i].reward,
                        uid: data.zhanji.logs[i].uid,
                        name: data.roles[data.zhanji.logs[i].uid].name,
                        headurl: data.roles[data.zhanji.logs[i].uid].head,
                        result: "",
                        matchtype: "",
                        reward_type: this.data.reward_type,
                    };
                    if (data.zhanji.match.type1 == 1) {
                        minlist.matchtype = "common";
                    }
                    else {
                        minlist.matchtype = "wcaa";
                    }
                    list.push(minlist);
                }
                this.data.list = list;
                this.titleTxt.text = this.data.title;
                this.timeTxt.text = this.data.time;
                this.matchJoinNumTxt.text = this.data.matchJoinNum;
                var reward = data.zhanji.match.reward;
                if (reward < data.zhanji.match.min_reward) {
                    reward = data.zhanji.match.min_reward;
                }
                this.matchJackpotTxt.text = reward;
                this.matchWinTxt.text = this.data.matchWin;
                this.matchLiveTxt.text = this.data.matchLive;
                // this.allPeopleTxt.text = "玩家（" + this.data.allPeople + "）";
                this.allPeopleTxt.text = "玩家";
                var dateUtil = new texas.DateUtils();
                this.matchTimeTxt.text = dateUtil.getFormatBySecond(this.data.matchTime);
                this.selfData = {
                    uid: texas.RoleData.getRole().uid,
                    headurl: texas.RoleData.getRole().head,
                    rank: this.data.rank,
                    reward: this.data.reward,
                    result: "",
                    name: texas.RoleData.getRole().name,
                    matchtype: "",
                    reward_type: this.data.reward_type,
                };
                if (data.zhanji.match.type1 == 1) {
                    this.selfData.matchtype = "common";
                }
                else {
                    this.selfData.matchtype = "wcaa";
                }
                this.selfLine = new texas.RankInfoListLine();
                this.selfLine.setData(this.selfData);
                this.addChild(this.selfLine);
                this.selfLine.y = 435;
                this.createList();
            };
            RankInfoView.prototype.createList = function () {
                this.list = new eui.List();
                // this.list.y = 450;
                this.list.width = texas.App.stageWidth;
                // this.list.height = App.stageHeight - 450;
                this.list.itemRenderer = texas.RankInfoListLine;
                var collection = new eui.ArrayCollection();
                for (var i = 0; i < this.data.list.length; i++) {
                    collection.addItem(this.data.list[i]);
                }
                this.list.layout = new eui.VerticalLayout();
                this.list.dataProvider = collection;
                this.scrollView.y = 435 + 120;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 435 - 120);
                this.scrollView.viewport = this.list;
            };
            RankInfoView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            RankInfoView.prototype.mainAssetName = function () {
                return "spr_rank_info_view";
            };
            RankInfoView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return RankInfoView;
        }(texas.BasePanel));
        texas.RankInfoView = RankInfoView;
        __reflect(RankInfoView.prototype, "kelvin.texas.RankInfoView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * 战绩的每一行
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RankLine = (function (_super) {
            __extends(RankLine, _super);
            function RankLine(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            RankLine.prototype.createGameScene = function () {
                this.rect = texas.Tool.createRectSprite(this.width, this.height, 0x000000, 0, 0, 0);
                this.addChildAt(this.rect, 0);
                this.rankTxt = this.jbBtn.skin.getTextField("rankTxt");
                this.initState();
                this.upDateUI();
                this.touchEnabled = true;
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            };
            RankLine.prototype.touch = function (e) {
                texas.PanelTween.pushPanel(new texas.RankInfoView(this.data));
            };
            RankLine.prototype.initState = function () {
                this.mttIcon.visible = false;
                this.sngIcon.visible = false;
                this.goldImg.visible = false;
                this.scoreImg.visible = false;
            };
            RankLine.prototype.upDateUI = function () {
                if (this.data.type == "sng") {
                    this.sngIcon.visible = true;
                }
                else if (this.data.type == "mtt") {
                    this.mttIcon.visible = true;
                }
                this.timeTxt.text = this.data.time;
                if (this.data.buy) {
                    this.buyTxt.text = "" + this.data.buy;
                    if (this.data.matchtype == "wcaa") {
                        this.buyTxt.text = this.buyTxt.text + "(积分)";
                    }
                    else {
                        this.buyTxt.text = this.buyTxt.text + "(金币)";
                    }
                }
                else {
                    this.buyTxt.text = "0";
                }
                this.titleTxt.text = this.data.title;
                this.peopleTxt.text = this.data.matchJackpot;
                this.rankTxt.text = "" + this.data.rank;
                this.scroeTxt.text = "" + this.data.score;
                if (this.data.score == 0) {
                    this.scroeTxt.textColor = 0xffffff;
                }
                else if (this.data.score < 0) {
                    this.scroeTxt.textColor = 0x00c609;
                }
                else {
                    this.scroeTxt.textColor = 0xe58c00;
                }
                if (this.data.reward_type == 2) {
                    this.goldImg.visible = true;
                    // this.goldImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
                }
                else {
                    this.scoreImg.visible = true;
                    // this.scoreImg.x = this.resultTxt.x + this.resultTxt.width - this.resultTxt.textWidth - 60;
                }
            };
            RankLine.prototype.mainAssetName = function () {
                return "spr_rank_line_ui";
            };
            RankLine.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            };
            return RankLine;
        }(texas.BasePanel));
        texas.RankLine = RankLine;
        __reflect(RankLine.prototype, "kelvin.texas.RankLine");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 战绩面板
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RankView = (function (_super) {
            __extends(RankView, _super);
            function RankView() {
                var _this = _super.call(this, true) || this;
                _this.chooseTypeArr = [{ name: "sng", type: 1 }, { name: "mtt", type: 2 }];
                _this.createGameScene();
                return _this;
            }
            RankView.prototype.createGameScene = function () {
                this.view = this.$children[1];
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.isdrop_down = false;
                this.allBtn.touchEnabled = true;
                this.allBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchChoose, this);
                this.downImg.visible = false;
                this.createChooseSp();
                this.scrollView.y = 165;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 165);
                // this.getInfo();
                texas.MatchApi.getRoleZhanJi(this.getInfo.bind(this));
            };
            RankView.prototype.getInfo = function (data) {
                this.infoArr = [];
                // this.infoArr = [{ type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 0 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: -100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 0 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "mtt", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },
                // { type: "sng", time: "2020-4-13 10:10:10", buy: 1000, title: "这是一个标题", matchJackpot: "2000", rank: 50, score: 100 },]
                if (data.logs) {
                    for (var i = 0; i < data.logs.length; i++) {
                        var min = {
                            type: "sng",
                            time: texas.DateUtils.timestampToTime(data.logs[i].startTime),
                            title: data.logs[i].title,
                            buy: data.logs[i].buy,
                            rank: data.logs[i].rank,
                            matchid: data.logs[i].mid,
                            zhanjiId: data.logs[i].zhanjiId,
                            matchWin: data.logs[i].winCount,
                            reward: data.logs[i].reward,
                            matchLive: data.logs[i].totalCount,
                            matchJackpot: data.logs[i].people,
                            score: data.logs[i].reward,
                            reward_type: data.logs[i].rewardType,
                            matchtype: "",
                        };
                        if (data.logs[i].type == 1) {
                            min.type = "sng";
                        }
                        else if (data.logs[i].type == 2) {
                            min.type = "mtt";
                        }
                        if (data.logs[i].type1 == 1) {
                            min.matchtype = "common";
                        }
                        else {
                            min.matchtype = "wcaa";
                        }
                        this.infoArr.push(min);
                    }
                }
                this.updateUI("all");
            };
            RankView.prototype.updateUI = function (name) {
                if (this.uiArr) {
                    for (var i = 0; i < this.uiArr.length; i++) {
                        this.uiArr[i].dispose();
                    }
                }
                this.uiArr = [];
                var infoArr = [];
                if (name == "all") {
                    for (var i = 0; i < this.infoArr.length; i++) {
                        infoArr.push(this.infoArr[i]);
                    }
                }
                else {
                    for (var i = 0; i < this.infoArr.length; i++) {
                        if (this.infoArr[i].type == name) {
                            infoArr.push(this.infoArr[i]);
                        }
                    }
                }
                for (var i = 0; i < infoArr.length; i++) {
                    var ui = new texas.RankLine(infoArr[i]);
                    this.scrollView.container.addChild(ui);
                    this.uiArr.push(ui);
                    ui.y = i * 165;
                }
                this.scrollView.setScrollSize(texas.App.stageWidth, this.infoArr.length * 165);
                this.scrollView.viewport.scrollV = 0;
            };
            RankView.prototype.createChooseSp = function () {
                this.chooseUIArr = [];
                this.chooseSp = new egret.Sprite();
                this.choosebg = texas.Tool.createBitmapByName("img_img_zj_xailk");
                this.chooseSp.addChild(this.choosebg);
                var singh = 210 / 3;
                for (var i = 0; i < this.chooseTypeArr.length; i++) {
                    var minsp = new egret.Sprite();
                    var rect = texas.Tool.createRectSprite(this.width, singh, 0x000000, 0, 0, 0);
                    rect.name = String(this.chooseTypeArr[i]["name"]);
                    rect.touchEnabled = true;
                    rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchRect, this);
                    this.chooseUIArr.push(rect);
                    minsp.addChild(rect);
                    var line = texas.Tool.createBitmapByName("img_img_zj_fjx");
                    minsp.addChild(line);
                    var txt = texas.Tool.createTextFiled(30, 15, 200, 30, this.chooseTypeArr[i].name, 28, 0xa7a7a7, "left");
                    minsp.addChild(txt);
                    minsp.y = i * singh + singh;
                    this.chooseSp.addChild(minsp);
                }
                this.choosebg.scale9Grid = new egret.Rectangle(20, 20, this.choosebg.width - 20, this.choosebg.height - 20);
                this.choosebg.height = this.chooseTypeArr.length * singh + singh;
                this.chooseSp.width = this.choosebg.width;
                this.chooseSp.height = this.choosebg.height;
                this.maskSc = new texas.ScrollView();
                this.maskSc.scrollPolicyV = "off";
                this.maskSc.scrollPolicyH = "off";
                this.view.addChildAt(this.maskSc, 0);
                this.maskSc.setShowSize(this.width, singh);
                this.maskSc.container.addChild(this.chooseSp);
                this.maskSc.y = this.allBtn.y;
                this.chooseSp.visible = false;
            };
            RankView.prototype.touchRect = function (e) {
                // if(e.target.name == "sng"){
                // }else if(e.target.name)
                this.updateUI(e.target.name);
                this.touchChoose(null);
            };
            RankView.prototype.touchChoose = function (e) {
                this.isdrop_down = !this.isdrop_down;
                this.upImg.visible = !this.isdrop_down;
                this.downImg.visible = this.isdrop_down;
                if (this.isdrop_down == true) {
                    this.showChoose();
                }
                else {
                    this.hideChoose();
                }
            };
            RankView.prototype.showChoose = function () {
                this.chooseSp.visible = true;
                this.allBtn.alpha = 0;
                egret.Tween.removeTweens(this.maskSc);
                egret.Tween.get(this.maskSc).to({ height: this.chooseSp.height }, 100);
            };
            RankView.prototype.hideChoose = function () {
                var _this = this;
                var singh = 210 / 3;
                egret.Tween.removeTweens(this.maskSc);
                egret.Tween.get(this.maskSc).to({ height: singh }, 100).call(function () {
                    _this.chooseSp.visible = false;
                    _this.allBtn.alpha = 1;
                }, this);
            };
            RankView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            RankView.prototype.mainAssetName = function () {
                return "spr_rank_view";
            };
            RankView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.allBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchChoose, this);
            };
            return RankView;
        }(texas.BasePanel));
        texas.RankView = RankView;
        __reflect(RankView.prototype, "kelvin.texas.RankView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 刷新的动画
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RefreshUI = (function (_super) {
            __extends(RefreshUI, _super);
            function RefreshUI() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            Object.defineProperty(RefreshUI, "ins", {
                get: function () {
                    if (!RefreshUI._ins) {
                        RefreshUI._ins = new RefreshUI();
                    }
                    return RefreshUI._ins;
                },
                enumerable: true,
                configurable: true
            });
            RefreshUI.prototype.createGameScene = function () {
                this.loadImg = texas.Tool.createBitmapByName("img_pyqdz_gongyong_jiaz");
                this.addChild(this.loadImg);
                texas.Tool.center(this.loadImg);
                this.loadImg.x = texas.App.stageWidth / 2;
                this.loadImg.y = texas.App.stageHeight / 2;
                this.loadImg.visible = false;
            };
            RefreshUI.prototype.show = function (x, y) {
                if (x === void 0) { x = texas.App.stageWidth / 2; }
                if (y === void 0) { y = texas.App.stageHeight / 2; }
                egret.Tween.removeTweens(this.loadImg);
                this.loadImg.x = x;
                this.loadImg.y = y;
                this.loadImg.visible = true;
                this.loadImg.scaleX = this.loadImg.scaleY = 0.5;
                egret.Tween.get(this.loadImg).to({ scaleX: 1, scaleY: 1 }, 100);
                egret.Tween.get(this.loadImg, { loop: true }).to({ rotation: 360 }, 500);
            };
            RefreshUI.prototype.hide = function () {
                var _this = this;
                egret.Tween.removeTweens(this.loadImg);
                egret.Tween.get(this.loadImg, { loop: true }).to({ rotation: 360 }, 500);
                egret.Tween.get(this.loadImg).to({ scaleX: 0.5, scaleY: 0.5 }, 100).call(function () {
                    _this.loadImg.visible = false;
                    egret.Tween.removeTweens(_this.loadImg);
                }, this);
            };
            RefreshUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return RefreshUI;
        }(texas.BasePanel));
        texas.RefreshUI = RefreshUI;
        __reflect(RefreshUI.prototype, "kelvin.texas.RefreshUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 设置面板
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var SetView = (function (_super) {
            __extends(SetView, _super);
            function SetView() {
                var _this = _super.call(this) || this;
                _this.createGameScene();
                return _this;
            }
            SetView.prototype.createGameScene = function () {
                var _this = this;
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.back2Btn.y = texas.App.stageHeight - 120;
                this.verTxt.y = texas.App.stageHeight - 280;
                this.verBg.y = this.verTxt.y - 35;
                texas.NativeBase.registerCmd("onAppUpdate", function (data) {
                    texas.Log.log("版本号:" + data);
                    _this.verTxt.text = data;
                }, this);
                texas.NativeTools.appUpdate();
                this.initState();
                this.upState();
            };
            SetView.prototype.initState = function () {
                this.mopenBtn.visible = false;
                this.mcloseBtn.visible = false;
                this.mopenTxt.visible = false;
                this.mcloseTxt.visible = false;
                this.gopenBtn.visible = false;
                this.gcloseBtn.visible = false;
                this.gopenTxt.visible = false;
                this.gcloseTxt.visible = false;
            };
            SetView.prototype.upState = function () {
                if (texas.VoiceData.musicNum == 1) {
                    this.mopenTxt.visible = true;
                    this.mcloseBtn.visible = true;
                }
                else {
                    this.mcloseTxt.visible = true;
                    this.mopenBtn.visible = true;
                }
                if (texas.VoiceData.soundNum == 1) {
                    this.gopenTxt.visible = true;
                    this.gcloseBtn.visible = true;
                }
                else {
                    this.gcloseTxt.visible = true;
                    this.gopenBtn.visible = true;
                }
            };
            SetView.prototype.on_mopenBtn = function (e) {
                texas.VoiceData.musicNum = 1;
                this.initState();
                this.upState();
                texas.SoundManager.setMessageState(false);
            };
            SetView.prototype.on_mcloseBtn = function (e) {
                texas.VoiceData.musicNum = 0;
                this.initState();
                this.upState();
                texas.SoundManager.setMessageState(true);
            };
            SetView.prototype.on_gopenBtn = function (e) {
                texas.VoiceData.soundNum = 1;
                this.initState();
                this.upState();
                texas.SoundManager.setSoundMute(false);
            };
            SetView.prototype.on_gcloseBtn = function (e) {
                texas.VoiceData.soundNum = 0;
                this.initState();
                this.upState();
                texas.SoundManager.setSoundMute(true);
            };
            SetView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
            };
            SetView.prototype.on_back2Btn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                // PanelTween.popPanel();
                texas.AccountData.isNeedAutomaticLogin = "1";
                texas.ExtGameHelper.homePanel.gotoPanel(new texas.LoginView());
            };
            SetView.prototype.mainAssetName = function () {
                return "spr_set_view";
            };
            SetView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return SetView;
        }(texas.BasePanel));
        texas.SetView = SetView;
        __reflect(SetView.prototype, "kelvin.texas.SetView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 * 商城的每一个小块
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ShopMinUI = (function (_super) {
            __extends(ShopMinUI, _super);
            function ShopMinUI(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                _this.createGameScene();
                return _this;
            }
            ShopMinUI.prototype.createGameScene = function () {
                this.rmbTxt = this.buyBtn.skin.$children[1];
                this.goldTxt.text = "" + this.data.gold;
                this.rmbTxt.text = "" + this.data.rmb + "元";
            };
            ShopMinUI.prototype.on_buyBtn = function (e) {
            };
            ShopMinUI.prototype.mainAssetName = function () {
                return "spr_shop_min_ui";
            };
            ShopMinUI.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return ShopMinUI;
        }(texas.BasePanel));
        texas.ShopMinUI = ShopMinUI;
        __reflect(ShopMinUI.prototype, "kelvin.texas.ShopMinUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 商店购买
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ShopView = (function (_super) {
            __extends(ShopView, _super);
            function ShopView() {
                var _this = _super.call(this, true) || this;
                _this.createGameScene();
                return _this;
            }
            ShopView.prototype.createGameScene = function () {
                this.bg = texas.Tool.createBitmapByName("img_pyqdz_beij", true, 0, 0, texas.App.stageWidth, texas.App.stageHeight);
                this.addChildAt(this.bg, 0);
                this.scrollView.y = 120;
                this.scrollView.setShowSize(texas.App.stageWidth, texas.App.stageHeight - 150);
                this.getInfo();
                this.createUI();
            };
            ShopView.prototype.getInfo = function () {
                this.infoArr = [];
                this.infoArr = [{ gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
                    { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
                    { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },
                    { gold: 1000, rmb: 10 }, { gold: 1000, rmb: 10 },];
            };
            ShopView.prototype.createUI = function () {
                this.uiArr = [];
                var numY = -1;
                for (var i = 0; i < this.infoArr.length; i++) {
                    if (i % 3 == 0) {
                        numY++;
                    }
                    var line = new texas.ShopMinUI(this.infoArr[i]);
                    this.scrollView.container.addChild(line);
                    this.uiArr.push(line);
                    line.y = 400 * numY;
                    line.x = 238 * (i - (numY * 3)) + 20;
                }
                this.scrollView.setScrollSize(texas.App.stageWidth, Math.ceil(this.infoArr.length / 3) * 400);
            };
            ShopView.prototype.on_backBtn = function (e) {
                // egret.Tween.get(this).to({ x: App.stageWidth }, 300, egret.Ease.quartOut).call(() => {
                //     this.dispose();
                // }, this)
                texas.PanelTween.popPanel();
                texas.EventManager.dispatchCmd(texas.Events.gotoMatchView, null);
            };
            ShopView.prototype.mainAssetName = function () {
                return "spr_shop_view";
            };
            ShopView.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
            };
            return ShopView;
        }(texas.BasePanel));
        texas.ShopView = ShopView;
        __reflect(ShopView.prototype, "kelvin.texas.ShopView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ApiState = (function () {
            function ApiState() {
            }
            ApiState.show = function (state) {
                if (ApiState.stateTxt[state]) {
                    ApiState.showText(ApiState.stateTxt[state]);
                }
                else {
                    ApiState.showText(state);
                }
            };
            ApiState.showText = function (text) {
                texas.Log.log("ApiStateText:" + text);
                var txt;
                if (typeof (text) == "string") {
                    txt = kelvin.texas.Tool.createTextFiled(0, 0, 800, 80, text, 30, 0xffffff, "center");
                }
                else {
                    txt = kelvin.texas.Tool.createTextFiled(0, 0, 800, 80, "", 30, 0xffffff, "center");
                    txt.textFlow = text;
                }
                txt.verticalAlign = "middle";
                kelvin.texas.Tool.center(txt);
                var bgimg = kelvin.texas.Tool.createBitmapByName("img_youxdat_tistanchuang_png");
                bgimg.scale9Grid = new egret.Rectangle(bgimg.width / 2 - 5, 0, 10, 0);
                var addwidth = txt.textWidth - 100;
                if (addwidth < 0) {
                    addwidth = 0;
                }
                bgimg.width = bgimg.width + addwidth;
                var sp = new egret.Sprite();
                sp.width = bgimg.width;
                sp.height = bgimg.height;
                sp.addChild(bgimg);
                sp.addChild(txt);
                txt.x = sp.width / 2;
                txt.y = sp.height / 2;
                kelvin.texas.Tool.center(sp);
                sp.x = texas.App.stageWidth / 2 - 512;
                sp.y = texas.App.stageHeight / 2;
                sp.alpha = 0;
                if (texas.App.isLandscape) {
                    sp.rotation = texas.App.getRotationValue();
                }
                texas.Starup.stageSp.promptSp.addChild(sp);
                egret.Tween.get(sp).to({ x: texas.App.stageWidth / 2, alpha: 1 }, 200).wait(1500).call(function () {
                    kelvin.texas.Tool.removeFromParent(sp);
                }, this, [sp]);
            };
            ApiState.stateTxt = {
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
            return ApiState;
        }());
        texas.ApiState = ApiState;
        __reflect(ApiState.prototype, "kelvin.texas.ApiState");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 * 公用弹窗
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var CommonPopup = (function (_super) {
            __extends(CommonPopup, _super);
            function CommonPopup(content, success, fail, title) {
                if (success === void 0) { success = null; }
                if (fail === void 0) { fail = null; }
                if (title === void 0) { title = "提示"; }
                var _this = _super.call(this) || this;
                _this.contentStr = content;
                _this.titleStr = title;
                _this.fail = fail;
                _this.success = success;
                _this.createGameScene();
                return _this;
            }
            CommonPopup.prototype.createGameScene = function () {
                if (this.fail == null && this.success == null) {
                    // egret.warn("CommonPopup--","没有传入成功或失败得回调函数")
                    this.sureBtn.visible = false;
                    this.cancelBtn.visible = false;
                }
                else if (this.fail == null) {
                    this.sureBtn.x = 230;
                    this.cancelBtn.visible = false;
                }
                else if (this.success == null) {
                    this.cancelBtn.x = 230;
                    this.sureBtn.visible = false;
                }
                // this.contentText = Tool.createTextFiled(50, 90, 610, 184, "", 28, 0xccf2fb, "center");
                this.contentText.verticalAlign = "middle";
                this.contentText.wordWrap = true;
                this.addChild(this.contentText);
                this.contentText.lineSpacing = 10;
                if (typeof (this.contentStr) == "string") {
                    this.contentText.text = this.contentStr;
                }
                else {
                    this.contentText.textFlow = this.contentStr;
                }
                if (typeof (this.titleStr) == "string") {
                    this.titleTxt.text = this.titleStr;
                }
                else {
                    this.titleTxt.textFlow = this.titleStr;
                }
            };
            CommonPopup.prototype.on_sureBtn = function (e) {
                if (this.success) {
                    this.success();
                }
                this.dispose();
            };
            CommonPopup.prototype.on_cancelBtn = function (e) {
                if (this.fail) {
                    this.fail();
                }
                this.dispose();
            };
            CommonPopup.prototype.mainAssetName = function () {
                return "spr_gongyongtanchuang_scene";
            };
            return CommonPopup;
        }(texas.BasePanel));
        texas.CommonPopup = CommonPopup;
        __reflect(CommonPopup.prototype, "kelvin.texas.CommonPopup");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 可以玩家输入的输入框
 *
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var InputText = (function (_super) {
            __extends(InputText, _super);
            /**
             * @param text 如果text已经放入舞台上，则本容器不需要再放入了
             * @param issige
             */
            function InputText(text, issingle) {
                if (issingle === void 0) { issingle = true; }
                var _this = _super.call(this) || this;
                /**
                 * 再次输入时是否清除之前内容  true为清除，false为不清除  数字为清除几次后不清除   默认为true清除
                 */
                _this._isClear = true;
                /**
                 * 是否为密码文本
                 */
                _this._ispassword = false;
                _this.issingle = issingle;
                _this.inputText = text;
                _this.inputText.verticalAlign = "top";
                _this.inputText.multiline = true;
                _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.dispose, _this);
                _this.createGameScene();
                return _this;
            }
            InputText.prototype.createGameScene = function () {
                this.width = this.inputText.width;
                this.height = this.inputText.height;
                this.x = this.inputText.x;
                this.y = this.inputText.y;
                this.inputText.x = 0;
                this.inputText.y = 0;
                var parent = this.inputText.parent;
                this.addChild(this.inputText);
                if (parent) {
                    parent.addChild(this);
                }
                this.inputText.type = "input";
                this.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                this.inColor = this.inputText.textColor;
                this.outColor = this.inputText.textColor;
                if (this.issingle == true) {
                    // this.addSingle();
                }
            };
            InputText.prototype.addSingle = function () {
                this.changesingle = false;
                var self = this;
                document.addEventListener("keydown", function (evt) {
                    if (evt.key == "Enter") {
                        evt.preventDefault();
                        // if (self.changesingle == true) {
                        //     egret.setTimeout(() => {
                        //         self.inputText.text = self.inputText.text.substring(0, self.inputText.text.length - 1);
                        //     }, self, 50);
                        // }
                    }
                });
            };
            //玩家在准备输入时调动
            InputText.prototype.focusIn = function () {
                this.inputText.textColor = this.inColor;
                this.changesingle = true;
                if (this.inCallBack) {
                    if (this.inself) {
                        this.inCallBack(this.inself);
                    }
                    else {
                        this.inCallBack();
                    }
                }
                if (typeof this.isClear == "number") {
                    if (this.isClear >= 1) {
                        this.inputText.text = "";
                        this.isClear--;
                    }
                }
                if (this.isClear == true) {
                    this.inputText.text = "";
                }
            };
            // 玩家在输入完后调动
            InputText.prototype.focusOut = function () {
                this.changesingle = false;
                this.inputText.textColor = this.outColor;
                if (this.inputText.text == "" && this.defaultStr) {
                    if (this.frequency >= 1 || this.frequency < 0) {
                        this.inputText.text = this.defaultStr;
                    }
                    if (this.frequency >= 1) {
                        this.frequency--;
                    }
                }
                if (this.outCallBack) {
                    if (this.outself) {
                        this.outCallBack(this.outself);
                    }
                    else {
                        this.outCallBack();
                    }
                }
            };
            Object.defineProperty(InputText.prototype, "isClear", {
                get: function () {
                    return this._isClear;
                },
                set: function (bool) {
                    this._isClear = bool;
                },
                enumerable: true,
                configurable: true
            });
            InputText.prototype.setInPutColor = function (color) {
                this.inColor = color;
            };
            InputText.prototype.setOutPutColor = function (color) {
                this.outColor = color;
            };
            InputText.prototype.setDefaultText = function (str, frequency) {
                if (frequency === void 0) { frequency = -1; }
                this.defaultStr = str;
                this.frequency = frequency;
            };
            InputText.prototype.setInCallBack = function (callback, self) {
                this.inCallBack = callback;
                this.inself = self;
            };
            InputText.prototype.setOutCallBack = function (callback, self) {
                this.outCallBack = callback;
                this.outself = self;
            };
            Object.defineProperty(InputText.prototype, "ispassword", {
                get: function () {
                    return this._ispassword;
                },
                set: function (bool) {
                    this._ispassword = bool;
                    if (bool == true) {
                        // this.inputText.inputType = egret.TextFieldInputType.PASSWORD;
                        //  this.inputText.inputType = egret.TextFieldInputType.PASSWORD;
                        this.inputText.displayAsPassword = true;
                        this.inputText.displayAsPassword = true;
                    }
                    else {
                        this.inputText.displayAsPassword = false;
                        this.inputText.displayAsPassword = false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            InputText.prototype.dispose = function () {
                this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.dispose, this);
                this.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                this.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
            };
            return InputText;
        }(egret.DisplayObjectContainer));
        texas.InputText = InputText;
        __reflect(InputText.prototype, "kelvin.texas.InputText");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoadingUI = (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                var _this = _super.call(this) || this;
                _this.gameloadui = new texas.LoadGameUI();
                _this.netLoad = new texas.NetLoadUI();
                _this.loadBg = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                _this.loadBg.touchEnabled = true;
                return _this;
            }
            Object.defineProperty(LoadingUI, "ins", {
                get: function () {
                    if (!LoadingUI._instance) {
                        LoadingUI._instance = new LoadingUI();
                    }
                    ;
                    return LoadingUI._instance;
                },
                enumerable: true,
                configurable: true
            });
            //type 1是游戏load界面    2是网络load
            LoadingUI.prototype.show = function (type) {
                texas.Starup.stageSp.addChild(this.loadBg);
                if (type == 1) {
                    this.gameloadui.show();
                }
                else if (type == 2) {
                    this.netLoad.show();
                }
            };
            LoadingUI.prototype.showText = function (str) {
            };
            LoadingUI.prototype.hide = function () {
                texas.Tool.removeFromParent(this.loadBg);
                this.gameloadui.hide();
                this.netLoad.hide();
            };
            LoadingUI.prototype.setProgress = function (current) {
                this.gameloadui.setProgress(current);
            };
            LoadingUI.prototype.touchBtn = function (e) {
            };
            return LoadingUI;
        }(egret.Sprite));
        texas.LoadingUI = LoadingUI;
        __reflect(LoadingUI.prototype, "kelvin.texas.LoadingUI");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        /**
         * 网络图片
         */
        var NetImage = (function (_super) {
            __extends(NetImage, _super);
            function NetImage(url, setNativSize) {
                if (setNativSize === void 0) { setNativSize = false; }
                var _this = _super.call(this) || this;
                _this.image = new egret.Bitmap();
                _this.setNativSize = setNativSize;
                _this.addChild(_this.image);
                _this.reload(url);
                return _this;
            }
            NetImage.prototype.reload = function (url) {
                if (url == null || url == "") {
                    return;
                }
                if (this.loader == null) {
                    this.loader = new egret.ImageLoader();
                    this.loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
                }
                this.loader.load(url);
            };
            NetImage.prototype.loadComplete = function (e) {
                if (this.image.texture != null)
                    this.image.texture.dispose();
                var bitmapData = this.loader.data;
                var texture = new egret.Texture();
                texture._setBitmapData(bitmapData);
                this.image.texture = texture;
                if (this.setNativSize) {
                    this.image.width = this.image.texture.textureWidth;
                    this.image.height = this.image.texture.textureHeight;
                }
            };
            NetImage.prototype.dispose = function () {
                if (this.loader != null) {
                    this.loader.removeEventListener(egret.Event.COMPLETE, this.loadComplete, this);
                }
                if (this.image.texture != null && this.image.texture != RES.getRes("defUser")) {
                    this.image.texture.dispose();
                    this.image.texture = null;
                }
            };
            NetImage.prototype.$setWidth = function (value) {
                this.image.width = value;
                return true;
            };
            NetImage.prototype.$getWidth = function () {
                return this.image.width;
            };
            NetImage.prototype.$setHeight = function (value) {
                this.image.height = value;
                return true;
            };
            NetImage.prototype.$getHeight = function () {
                return this.image.height;
            };
            return NetImage;
        }(egret.DisplayObjectContainer));
        texas.NetImage = NetImage;
        __reflect(NetImage.prototype, "kelvin.texas.NetImage");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NetWorkError = (function (_super) {
            __extends(NetWorkError, _super);
            function NetWorkError() {
                return _super.call(this) || this;
                // this.mainAsset = AssetManager.mainSwf().createSprite("spr_netword_error");
                // this.addChild(this.mainAsset);
                // this.mainAsset.getButton("okBtn").addEventListener(starlingswf.SwfButton.onClick,this.onOkBtn,this);
            }
            NetWorkError.show = function () {
                // var error:NetWorkError = new NetWorkError();
                // error.y = App.stageHeight / 2;
                // error.x = App.stageWidth / 2;
                // if(App.isLandscape){
                // 	error.rotation = App.getRotationValue();
                // }
                // lzm.Alert.alert(error,false);
                lzm.Alert.alert(new texas.CommonPopup("网络断开，3秒后将刷新页面重新连接", function () {
                    window.location.reload();
                }));
                egret.setTimeout(function () {
                    window.location.reload();
                }, this, 3000);
            };
            NetWorkError.prototype.onOkBtn = function (e) {
                // window.location.reload();
            };
            return NetWorkError;
        }(egret.DisplayObjectContainer));
        texas.NetWorkError = NetWorkError;
        __reflect(NetWorkError.prototype, "kelvin.texas.NetWorkError");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var NetworkLoading = (function () {
            function NetworkLoading() {
            }
            NetworkLoading.show = function (now) {
                if (now === void 0) { now = false; }
                texas.Log.log("NetworkLoading =========== show");
                // if(NetworkLoading.loading == null){
                // 	NetworkLoading.loading = AssetManager.loadingSwf.createSprite("spr_loading");
                // 	NetworkLoading.loading.getImage("resImage").visible = false;
                // 	NetworkLoading.loading.getTextField("radioText").visible = false;
                // 	NetworkLoading.background = new egret.Shape();
                // 	NetworkLoading.background.touchEnabled = true;
                // 	NetworkLoading.showCount = 0;
                // }
                var timer = 0;
                // if(now){
                // 	NetworkLoading.showCount++;
                // 	NetworkLoading.realyShow();
                // }else{
                // 	App.appRoot.addChild(NetworkLoading.background);
                // 	NetworkLoading.background.graphics.clear();
                // 	NetworkLoading.background.graphics.beginFill(0x000000,0);
                // 	NetworkLoading.background.graphics.drawRect(0,0,App.stageWidth,App.stageHeight);
                // 	NetworkLoading.background.graphics.endFill();
                // 	NetworkLoading.showCount++;
                // 	timer = egret.setTimeout(function():void{
                // 		if(NetworkLoading.showCount > 0) NetworkLoading.realyShow();
                // 	},NetworkLoading,2000);
                // }
                return timer;
            };
            NetworkLoading.hideBackGround = function () {
                // if(NetworkLoading.loading.parent == null){
                // 	Tool.removeFromParent(NetworkLoading.background);
                // }
            };
            NetworkLoading.realyShow = function () {
                // App.appRoot.addChild(NetworkLoading.background);
                // NetworkLoading.background.graphics.clear();
                // NetworkLoading.background.graphics.beginFill(0x000000,0.7);
                // NetworkLoading.background.graphics.drawRect(0,0,App.stageWidth,App.stageHeight);
                // NetworkLoading.background.graphics.endFill();
                // App.appRoot.addChild(NetworkLoading.loading);
                // NetworkLoading.loading.x = App.stageWidth / 2;
                // NetworkLoading.loading.y = App.stageHeight * 0.3;
            };
            NetworkLoading.hide = function () {
                texas.Log.log("NetworkLoading =========== hide");
                NetworkLoading.showCount--;
                // if(NetworkLoading.background != null && NetworkLoading.showCount <= 0){
                // 	if(NetworkLoading.background.parent) NetworkLoading.background.parent.removeChild(NetworkLoading.background);
                // 	if(NetworkLoading.loading.parent) NetworkLoading.loading.parent.removeChild(NetworkLoading.loading);
                // }
            };
            return NetworkLoading;
        }());
        texas.NetworkLoading = NetworkLoading;
        __reflect(NetworkLoading.prototype, "kelvin.texas.NetworkLoading");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 *
 *
 *
 *
 * 弹窗容器
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var PopupContainer = (function (_super) {
            __extends(PopupContainer, _super);
            function PopupContainer(view) {
                var _this = _super.call(this) || this;
                _this.view = view;
                _this.createGameScene();
                return _this;
            }
            PopupContainer.prototype.createGameScene = function () {
                this.bgSp = texas.Tool.createRectSprite(texas.App.stageWidth, texas.App.stageHeight, 0x000000, 0, 0, 0.7);
                this.addChildAt(this.bgSp, 0);
                this.bgSp.touchEnabled = true;
                this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
                this.addChild(this.view);
            };
            PopupContainer.prototype.show = function (animatypes, animatypee, alpha) {
                if (alpha === void 0) { alpha = 0.7; }
                this.bgSp.alpha = alpha;
                this.animatypes = animatypes;
                this.animatypee = animatypee;
                if (this.animatypes == 1) {
                    this.view.anchorOffsetY = this.view.height;
                    this.view.y = texas.App.stageHeight;
                    this.view.x = -this.view.width;
                    this.view.scaleX = this.view.scaleY = texas.ExtGameHelper.getGameScalex();
                    egret.Tween.get(this.view).to({ x: 0 }, 250, egret.Ease.quartOut).call(function () {
                    }, this);
                }
                else if (this.animatypes == 2) {
                    this.view.anchorOffsetX = this.view.width;
                    this.view.anchorOffsetY = this.view.height;
                    this.view.y = texas.App.stageHeight;
                    this.view.x = texas.App.stageWidth + this.view.width;
                    this.view.scaleX = this.view.scaleY = texas.ExtGameHelper.getGameScalex();
                    egret.Tween.get(this.view).to({ x: texas.App.stageWidth }, 250, egret.Ease.quartOut).call(function () {
                    }, this);
                }
                else if (this.animatypes == 3) {
                    this.view.x = 0;
                    this.view.y = -this.view.height;
                    egret.Tween.get(this.view).to({ y: 0 }, 250, egret.Ease.quartOut).call(function () {
                    }, this);
                }
            };
            PopupContainer.prototype.hide = function () {
                var _this = this;
                if (this.animatypee == 1) {
                    egret.Tween.removeTweens(this.view);
                    egret.Tween.get(this.view).to({ x: -this.view.width }, 250, egret.Ease.quartOut).call(function () {
                        _this.dispose();
                    }, this);
                }
                else if (this.animatypee == 2) {
                    egret.Tween.removeTweens(this.view);
                    egret.Tween.get(this.view).to({ x: texas.App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(function () {
                        _this.dispose();
                    }, this);
                }
                else if (this.animatypee == 3) {
                    egret.Tween.removeTweens(this.view);
                    egret.Tween.get(this.view).to({ y: -this.view.height }, 250, egret.Ease.quartOut).call(function () {
                        _this.dispose();
                    }, this);
                }
            };
            PopupContainer.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this.view.dispose();
                this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
            };
            return PopupContainer;
        }(texas.BasePanel));
        texas.PopupContainer = PopupContainer;
        __reflect(PopupContainer.prototype, "kelvin.texas.PopupContainer");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ScrollView = (function (_super) {
            __extends(ScrollView, _super);
            function ScrollView() {
                var _this = _super.call(this) || this;
                _this.scrollSize = new eui.Image();
                _this.scrollSize.visible = false;
                _this.container = new eui.Group();
                _this.container.addChild(_this.scrollSize);
                _this.viewport = _this.container;
                return _this;
            }
            /**
             * 设置展示区域大小
             */
            ScrollView.prototype.setShowSize = function (w, h) {
                this.width = w;
                this.height = h;
            };
            /**
             * 设置滚动区域大小
             */
            ScrollView.prototype.setScrollSize = function (w, h) {
                this.scrollSize.width = w;
                this.scrollSize.height = h;
            };
            ScrollView.prototype.removeAllChild = function () {
                this.container.removeChildren();
                this.container.addChild(this.scrollSize);
            };
            ScrollView.prototype.reStartAnimation = function () {
                var values = this.$Scroller;
                values[8]["started"] = true;
                values[8]["velocity"] = 0;
                values[8]["previousTime"] = 0;
                values[8]["previousVelocity"] = [];
                values[9]["started"] = true;
                values[9]["velocity"] = 0;
                values[9]["previousTime"] = 0;
                values[9]["previousVelocity"] = [];
                this["onTouchEnd"](null);
            };
            return ScrollView;
        }(eui.Scroller));
        texas.ScrollView = ScrollView;
        __reflect(ScrollView.prototype, "kelvin.texas.ScrollView");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 * 数组方法
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ArrayUtil = (function () {
            function ArrayUtil() {
            }
            /**
             * a包含b ps：b是不断变化的
             * @param
             */
            ArrayUtil.isContained = function (a, b) {
                if (!(a instanceof Array) || !(b instanceof Array))
                    return false;
                if (a.length < b.length)
                    return false;
                var aStr = a.toString();
                for (var i = 0, len = b.length; i < len; i++) {
                    if (aStr.indexOf(b[i]) == -1)
                        return false;
                }
                return true;
            };
            /**
             * 根据数组中对象的key值，给数组重新排位置，升序排
             * @param key 数组元素对象的key
             */
            ArrayUtil.AscendingArray = function (key, arr) {
                function compare(property) {
                    return function (a, b) {
                        var value1 = a[property];
                        var value2 = b[property];
                        return value1 - value2;
                    };
                }
                arr.sort(compare(key));
            };
            /**
             * 给游戏数据排序
             *
             */
            ArrayUtil.sortGameData = function (arr) {
                var signedarr = []; //已报名
                var nosignarr = []; //尚未报名
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].signed == 1 || arr[i].signed == 3) {
                        signedarr.push(arr[i]);
                    }
                    else {
                        nosignarr.push(arr[i]);
                    }
                }
                ArrayUtil.AscendingArray("start_time", signedarr);
                ArrayUtil.AscendingArray("start_time", nosignarr);
                var newarr = [];
                for (var i = 0; i < signedarr.length; i++) {
                    newarr.push(signedarr[i]);
                }
                for (var i = 0; i < nosignarr.length; i++) {
                    newarr.push(nosignarr[i]);
                }
                return newarr;
            };
            return ArrayUtil;
        }());
        texas.ArrayUtil = ArrayUtil;
        __reflect(ArrayUtil.prototype, "kelvin.texas.ArrayUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var BmTextUtil = (function () {
            function BmTextUtil() {
            }
            BmTextUtil.replaceTextfield = function (textfield, font) {
                var bmText = new egret.BitmapText();
                var tf = textfield;
                bmText.font = font;
                bmText.textAlign = tf.textAlign;
                bmText.text = tf.text;
                bmText.name = tf.name;
                bmText.x = tf.x;
                bmText.y = tf.y;
                bmText.width = tf.width;
                bmText.height = tf.height;
                bmText.anchorOffsetX = tf.anchorOffsetX;
                bmText.anchorOffsetY = tf.anchorOffsetY;
                if (tf.parent != null) {
                    var index = tf.parent.getChildIndex(tf);
                    tf.parent.addChildAt(bmText, index);
                    tf.parent.removeChild(tf);
                }
                return bmText;
            };
            return BmTextUtil;
        }());
        texas.BmTextUtil = BmTextUtil;
        __reflect(BmTextUtil.prototype, "kelvin.texas.BmTextUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ClipBoard = (function () {
            function ClipBoard() {
            }
            ClipBoard.copy = function (msg) {
                if (texas.App.isWeiDuan()) {
                    texas.NativeTools.copy(msg);
                }
                else {
                    var input = document.createElement("input");
                    input.value = msg;
                    document.body.appendChild(input);
                    input.select();
                    input.setSelectionRange(0, input.value.length);
                    document.execCommand('Copy');
                    document.body.removeChild(input);
                }
            };
            return ClipBoard;
        }());
        texas.ClipBoard = ClipBoard;
        __reflect(ClipBoard.prototype, "kelvin.texas.ClipBoard");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * 碰撞工具
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        /**
         * 碰撞工具类
         */
        var CollisionUtils = (function () {
            function CollisionUtils() {
            }
            //两物品重叠的碰撞判断方式
            CollisionUtils.hitTest = function (obj1, obj2) {
                var rect1 = obj1.getBounds();
                var rect2 = obj2.getBounds();
                rect1.x = obj1.parent.localToGlobal(obj1.x, obj1.y).x;
                rect1.y = obj1.parent.localToGlobal(obj1.x, obj1.y).y;
                rect2.x = obj2.parent.localToGlobal(obj2.x, obj2.y).x;
                rect2.y = obj2.parent.localToGlobal(obj2.x, obj2.y).y;
                return rect1.intersects(rect2);
            };
            //点和物品的碰撞判断方式，较为精确及可控
            CollisionUtils.hitTestP = function (obj1, obj2) {
                var rect2x;
                var rect2y;
                rect2x = obj2.x + obj2.width / 2;
                rect2y = obj2.y + obj2.height - obj2.width / 2;
                if (obj1.hitTestPoint(rect2x, rect2y)) {
                    return true;
                }
                else
                    return false;
            };
            //算出碰撞点
            CollisionUtils.sreatPoints = function (obj) {
                var pointS = [];
                var shuSpace = 40; //栅格高大小
                var henSpace = 40; //栅格宽大小
                var shuCount = obj.height / shuSpace;
                var henCount = obj.width / henSpace;
                for (var shu = 0; shu <= shuCount; shu++) {
                    for (var hen = 0; hen <= henCount; hen++) {
                        var _point = new egret.Point(obj.x + hen * henSpace, obj.y + shu * shuSpace);
                        pointS.push(_point);
                    }
                }
                return pointS;
            };
            /**检测两个对象是否碰撞*/
            CollisionUtils.getObjPoint = function (obj1, obj2) {
                var Sp = new egret.Sprite();
                Sp.addChild(obj1);
                texas.Tool.center(Sp, true);
                Sp.x = Sp.width / 2;
                Sp.y = Sp.height / 2;
                var Sh = new egret.Shape();
                Sh.graphics.beginFill(0xffffff, 0);
                Sh.graphics.drawRect(0, 0, 20, 20);
                Sh.graphics.endFill();
                Sh.x = Sp.width / 2;
                Sh.y = Sp.height / 2;
                var point = new egret.Point();
                point = Sp.localToGlobal(Sh.x, Sh.y);
                if (point.x > obj2.x && point.x < obj2.x + obj2.width && point.y > obj2.y && point.y < obj2.y + obj2.height) {
                    return true;
                }
                else {
                    return false;
                }
            };
            return CollisionUtils;
        }());
        texas.CollisionUtils = CollisionUtils;
        __reflect(CollisionUtils.prototype, "kelvin.texas.CollisionUtils");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ColorUtil = (function () {
            function ColorUtil() {
            }
            /**
             * 设置对象颜色为灰色
             */
            ColorUtil.setGray = function (display) {
                var colorMatrix = [
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                display.filters = [colorFlilter];
            };
            /**
             *
             * 设置对象颜色变黑一点
             */
            ColorUtil.setLittleBlack = function (display) {
                var colorMatrix = [
                    0.6, 0, 0, 0, 0,
                    0, 0.6, 0, 0, 0,
                    0, 0, 0.6, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                display.filters = [colorFlilter];
            };
            /**
             * 清除颜色
             */
            ColorUtil.clearColor = function (display) {
                display.filters = null;
            };
            return ColorUtil;
        }());
        texas.ColorUtil = ColorUtil;
        __reflect(ColorUtil.prototype, "kelvin.texas.ColorUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 *时间方法
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var DateUtils = (function () {
            function DateUtils() {
            }
            /**
             * 根据秒数格式化字符串
             * @param second 秒数
             * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00   4:xx天前，xx小时前，xx分钟前
             * @return
             *
             */
            DateUtils.prototype.getFormatBySecond = function (second, type) {
                if (type === void 0) { type = 1; }
                var str = "";
                switch (type) {
                    case 1:
                        str = this.getFormatBySecond1(second);
                        break;
                    case 2:
                        str = this.getFormatBySecond2(second);
                        break;
                    case 3:
                        str = this.getFormatBySecond3(second);
                        break;
                    case 4:
                        str = this.getFormatBySecond4(second);
                        break;
                    case 5:
                        str = this.getFormatBySecond5(second);
                        break;
                    case 6:
                        str = this.getFormatBySecond6(second);
                        break;
                }
                return str;
            };
            //1: 00:00:00
            DateUtils.prototype.getFormatBySecond1 = function (t) {
                if (t === void 0) { t = 0; }
                var hourst = Math.floor(t / 3600);
                var hours;
                if (hourst == 0) {
                    hours = "00";
                }
                else {
                    if (hourst < 10)
                        hours = "0" + hourst;
                    else
                        hours = "" + hourst;
                }
                var minst = Math.floor((t - hourst * 3600) / 60);
                var secondt = Math.floor((t - hourst * 3600) % 60);
                var mins;
                var sens;
                if (minst == 0) {
                    mins = "00";
                }
                else if (minst < 10) {
                    mins = "0" + minst;
                }
                else {
                    mins = "" + minst;
                }
                if (secondt == 0) {
                    sens = "00";
                }
                else if (secondt < 10) {
                    sens = "0" + secondt;
                }
                else {
                    sens = "" + secondt;
                }
                return hours + ":" + mins + ":" + sens;
            };
            //3: 00:00
            DateUtils.prototype.getFormatBySecond3 = function (t) {
                if (t === void 0) { t = 0; }
                var hourst = Math.floor(t / 3600);
                var minst = Math.floor((t - hourst * 3600) / 60);
                var secondt = Math.floor((t - hourst * 3600) % 60);
                var mins;
                var sens;
                if (minst == 0) {
                    mins = "00";
                }
                else if (minst < 10) {
                    mins = "0" + minst;
                }
                else {
                    mins = "" + minst;
                }
                if (secondt == 0) {
                    sens = "00";
                }
                else if (secondt < 10) {
                    sens = "0" + secondt;
                }
                else {
                    sens = "" + secondt;
                }
                return mins + ":" + sens;
            };
            //2:yyyy-mm-dd h:m:s
            DateUtils.prototype.getFormatBySecond2 = function (time) {
                var date = new Date(time);
                var year = date.getFullYear();
                var month = date.getMonth() + 1; //返回的月份从0-11；
                var day = date.getDate();
                var hours = date.getHours();
                var minute = date.getMinutes();
                var second = date.getSeconds();
                return year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second;
            };
            //4:xx天前，xx小时前，xx分钟前
            DateUtils.prototype.getFormatBySecond4 = function (time) {
                var t = Math.floor(time / 3600);
                if (t > 0) {
                    if (t > 24) {
                        return Math.floor(t / 24) + "天前";
                    }
                    else {
                        return t + "小时前";
                    }
                }
                else {
                    return Math.floor(time / 60) + "分钟前";
                }
            };
            //6: xx小时xx分钟
            DateUtils.prototype.getFormatBySecond6 = function (t) {
                if (t === void 0) { t = 0; }
                var hourst = Math.floor(t / 3600);
                var hours;
                if (hourst == 0) {
                    hours = "";
                }
                else {
                    // if (hourst < 10)
                    //     hours = "0" + hourst;
                    // else
                    //     hours = "" + hourst;
                    hours = hourst + "小时";
                }
                var minst = Math.floor((t - hourst * 3600) / 60);
                var secondt = Math.floor((t - hourst * 3600) % 60);
                var mins;
                var sens;
                // if (minst == 0) {
                //     mins = "00";
                // } else if (minst < 10) {
                //     mins = "0" + minst;
                // } else {
                //     mins = "" + minst;
                // }
                mins = minst + "分钟";
                return hours + mins;
            };
            DateUtils.prototype.getFormatBySecond5 = function (time) {
                //每个时间单位所对应的秒数
                var oneDay = 3600 * 24;
                var oneHourst = 3600;
                var oneMinst = 60;
                var days = Math.floor(time / oneDay);
                var hourst = Math.floor(time % oneDay / oneHourst);
                var minst = Math.floor((time - hourst * oneHourst) / oneMinst); //Math.floor(time % oneDay % oneHourst / oneMinst);
                var secondt = Math.floor((time - hourst * oneHourst) % oneMinst); //time;
                var dayss = "";
                var hourss = "";
                var minss = "";
                var secss = "";
                if (time > 0) {
                    //天
                    if (days == 0) {
                        dayss = "";
                        //小时
                        if (hourst == 0) {
                            hourss = "";
                            //分
                            if (minst == 0) {
                                minss = "";
                                if (secondt == 0) {
                                    secss = "";
                                }
                                else if (secondt < 10) {
                                    secss = "0" + secondt + "秒";
                                }
                                else {
                                    secss = "" + secondt + "秒";
                                }
                                return secss;
                            }
                            else {
                                minss = "" + minst + "分";
                                if (secondt == 0) {
                                    secss = "";
                                }
                                else if (secondt < 10) {
                                    secss = "0" + secondt + "秒";
                                }
                                else {
                                    secss = "" + secondt + "秒";
                                }
                            }
                            return minss + secss;
                        }
                        else {
                            hourss = hourst + "小时";
                            if (minst == 0) {
                                minss = "";
                                if (secondt == 0) {
                                    secss = "";
                                }
                                else if (secondt < 10) {
                                    secss = "0" + secondt + "秒";
                                }
                                else {
                                    secss = "" + secondt + "秒";
                                }
                                return secss;
                            }
                            else if (minst < 10) {
                                minss = "0" + minst + "分";
                            }
                            else {
                                minss = "" + minst + "分";
                            }
                            return hourss + minss;
                        }
                    }
                    else {
                        dayss = days + "天";
                        if (hourst == 0) {
                            hourss = "";
                        }
                        else {
                            if (hourst < 10)
                                hourss = "0" + hourst + "小时";
                            else
                                hourss = "" + hourst + "小时";
                            ;
                        }
                        return dayss + hourss;
                    }
                }
                return "";
            };
            DateUtils.fmtDate = function (num) {
                var date = new Date(num);
                var y = date.getFullYear();
                var m = "0" + (date.getMonth() + 1);
                var d = "0" + date.getDate();
                return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
            };
            //2020-01-05;
            DateUtils.formatDate = function (date) {
                var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                return [year, month, day].join('-');
            };
            DateUtils.timestampToTime = function (timestamp) {
                var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
                var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                return Y + M + D + h + m + s;
            };
            return DateUtils;
        }());
        texas.DateUtils = DateUtils;
        __reflect(DateUtils.prototype, "kelvin.texas.DateUtils");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var EventManager = (function () {
            function EventManager() {
            }
            /***
             * 清除所有命令
             */
            EventManager.clearCmd = function () {
                EventManager._commands = {};
                EventManager._commandsThisObjects = {};
            };
            /**
             * 注册命令
             */
            EventManager.registerCmd = function (cmd, callBack, thisObj, isHead) {
                if (isHead === void 0) { isHead = false; }
                var cmds = EventManager._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                if (isHead) {
                    cmds.unshift([callBack, thisObj]);
                }
                else {
                    cmds.push([callBack, thisObj]);
                }
                EventManager._commands[cmd] = cmds;
            };
            /**
             * 移除命令
             */
            EventManager.removeCmd = function (cmd, callBack, thisObj) {
                var cmds = EventManager._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var index = -1;
                var len = cmds.length;
                for (var i = 0; i < len; i++) {
                    if (cmds[i][0] == callBack && cmds[i][1] == thisObj)
                        index = i;
                }
                if (index != -1) {
                    cmds.splice(index, 1);
                }
                EventManager._commands[cmd] = cmds;
            };
            /**
             * 派发命令消息
             */
            EventManager.dispatchCmd = function (cmd, data) {
                var cmds = EventManager._commands[cmd];
                if (cmds == null) {
                    cmds = [];
                }
                var thisObj;
                var fun;
                for (var i = 0; i < cmds.length; i++) {
                    thisObj = cmds[i][1];
                    fun = cmds[i][0];
                    fun.apply(thisObj, [data]);
                }
            };
            EventManager._commands = {}; //命令
            EventManager._commandsThisObjects = {}; //回调绑定的对象
            return EventManager;
        }());
        texas.EventManager = EventManager;
        __reflect(EventManager.prototype, "kelvin.texas.EventManager");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Fingerprint2Utils = (function () {
            function Fingerprint2Utils() {
            }
            Fingerprint2Utils.init = function (callBack) {
                if (Fingerprint2Utils.fingerprint2 == null) {
                    if (callBack != null) {
                        callBack();
                    }
                    return;
                }
                texas.NetworkLoading.show();
                if (Fingerprint2Utils.fingerprintData != null) {
                    texas.NetworkLoading.hide();
                    if (callBack != null) {
                        callBack();
                    }
                    return;
                }
                Fingerprint2Utils.fingerprint2.get(function (result, components) {
                    texas.NetworkLoading.hide();
                    Fingerprint2Utils.fingerprintData = result;
                    if (callBack != null) {
                        callBack();
                    }
                });
            };
            Fingerprint2Utils.getId = function () {
                if (Fingerprint2Utils.fingerprintData == null) {
                    return null;
                }
                if (texas.App.isAndroid()) {
                    return new md5().hex_md5(Fingerprint2Utils.getBuild());
                }
                else {
                    var len = Fingerprint2Utils.fingerprintData.length;
                    for (var i = 0; i < len; i++) {
                        var val = Fingerprint2Utils.fingerprintData[i];
                        if (val["key"] == "canvas") {
                            return new md5().hex_md5(val["value"][1]);
                        }
                    }
                }
            };
            Fingerprint2Utils.getBuild = function () {
                if (Fingerprint2Utils.fingerprintData == null) {
                    return null;
                }
                var len = Fingerprint2Utils.fingerprintData.length;
                for (var i = 0; i < len; i++) {
                    var val = Fingerprint2Utils.fingerprintData[i];
                    if (val["key"] == "userAgent") {
                        var buildVal = val["value"].toString().split(")");
                        buildVal = buildVal[0];
                        buildVal = buildVal.split(";");
                        buildVal = buildVal[buildVal.length - 1];
                        return buildVal;
                    }
                }
                return null;
            };
            Fingerprint2Utils.getAvailableScreenResolution = function () {
                return window.screen.availWidth + "_" + window.screen.availHeight;
            };
            return Fingerprint2Utils;
        }());
        texas.Fingerprint2Utils = Fingerprint2Utils;
        __reflect(Fingerprint2Utils.prototype, "kelvin.texas.Fingerprint2Utils");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var InterfaceVariablesUtil = (function () {
            function InterfaceVariablesUtil() {
            }
            InterfaceVariablesUtil.initVariables = function (obj, interFace, recursiveBind, hasEventBtns, hasEventBtnNames) {
                if (recursiveBind === void 0) { recursiveBind = false; }
                if (hasEventBtns === void 0) { hasEventBtns = null; }
                if (hasEventBtnNames === void 0) { hasEventBtnNames = null; }
                if (hasEventBtns == null)
                    hasEventBtns = [];
                if (hasEventBtnNames == null)
                    hasEventBtnNames = [];
                var len = interFace.$children.length;
                var name;
                var display;
                var btnClickFunName;
                for (var i = 0; i < len; i++) {
                    display = interFace.$children[i];
                    name = display.name;
                    var clazzName = egret.getQualifiedClassName(display);
                    if (name != null && name != "") {
                        if (obj[name] != null) {
                            texas.Log.log("变量名字定义重复:" + name);
                            // throw new Error("变量名字定义重复");
                        }
                        obj[name] = display;
                    }
                    if (clazzName == "starlingswf.SwfButton") {
                        btnClickFunName = "on_" + name;
                        if (obj[btnClickFunName]) {
                            display.addEventListener(starlingswf.SwfButton.onClick, obj[btnClickFunName], obj);
                            hasEventBtns.push(display);
                            hasEventBtnNames.push(name);
                        }
                    }
                    if (recursiveBind && clazzName == "starlingswf.SwfSprite") {
                        InterfaceVariablesUtil.initVariables(obj, display, recursiveBind, hasEventBtns, hasEventBtnNames);
                    }
                }
                obj["_hasEventBtns_"] = hasEventBtns;
                obj["_hasEventBtnNames_"] = hasEventBtnNames;
            };
            InterfaceVariablesUtil.disposeVariables = function (obj) {
                var hasEventBtns = obj["_hasEventBtns_"];
                var hasEventBtnNames = obj["_hasEventBtnNames_"];
                if (hasEventBtns == null || hasEventBtnNames == null)
                    return;
                var len = hasEventBtns.length;
                for (var i = 0; i < len; i++) {
                    hasEventBtns[i].removeEventListener(starlingswf.SwfButton.onClick, obj[hasEventBtnNames[i]], obj);
                }
            };
            InterfaceVariablesUtil.initVariablesWithType = function (obj, interFace, clazz) {
                var cName;
                var len = interFace.$children.length;
                var display;
                for (var i = 0; i < len; i++) {
                    display = interFace.$children[i];
                    cName = display.name;
                    if (cName != null && cName != "" && display instanceof clazz) {
                        obj[cName] = display;
                    }
                }
            };
            return InterfaceVariablesUtil;
        }());
        texas.InterfaceVariablesUtil = InterfaceVariablesUtil;
        __reflect(InterfaceVariablesUtil.prototype, "kelvin.texas.InterfaceVariablesUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LayoutUtil = (function () {
            function LayoutUtil() {
            }
            /**
             * 靠上对其
             */
            LayoutUtil.layout_up = function (display) { };
            /**
             * 靠下对其
             */
            LayoutUtil.layout_down = function (display) {
                display.y = texas.App.stageHeight - (texas.App.designHeight - LayoutUtil.getLayoutY(display));
            };
            /**
             * 左对其
             */
            LayoutUtil.layout_left = function (display) { };
            /**
             * 左上
             */
            LayoutUtil.layout_left_up = function (display) {
                LayoutUtil.layout_left(display);
                LayoutUtil.layout_up(display);
            };
            /**
             * 左下
             */
            LayoutUtil.layout_left_down = function (display) {
                LayoutUtil.layout_left(display);
                LayoutUtil.layout_down(display);
            };
            /**
             * 右对齐
             */
            LayoutUtil.layout_right = function (display) {
                display.x = texas.App.stageWidth - (texas.App.designWidth - LayoutUtil.getLayoutX(display));
            };
            /**
             * 右上
             */
            LayoutUtil.layout_right_up = function (display) {
                LayoutUtil.layout_right(display);
                LayoutUtil.layout_up(display);
            };
            /**
             * 右下
             */
            LayoutUtil.layout_right_down = function (display) {
                LayoutUtil.layout_right(display);
                LayoutUtil.layout_down(display);
            };
            /**
             * X居中
             */
            LayoutUtil.layout_center_x = function (display) {
                display.x = (texas.App.stageWidth - display.width) / 2;
            };
            /**
             * Y居中
             */
            LayoutUtil.layout_center_y = function (display) {
                display.y = (texas.App.stageHeight - display.height) / 2;
            };
            /**
             * 正中间
             */
            LayoutUtil.layout_center_xy = function (display) {
                LayoutUtil.layout_center_x(display);
                LayoutUtil.layout_center_y(display);
            };
            /**
             * 中上
             */
            LayoutUtil.layout_center_up = function (display) {
                LayoutUtil.layout_center_x(display);
                LayoutUtil.layout_up(display);
            };
            /**
             * 中下
             */
            LayoutUtil.layout_center_down = function (display) {
                LayoutUtil.layout_center_x(display);
                LayoutUtil.layout_down(display);
            };
            /**
             * 填充
             */
            LayoutUtil.layout_fill = function (display) {
                display.width = texas.App.stageWidth;
                display.height = texas.App.stageHeight;
            };
            LayoutUtil.getLayoutX = function (display) {
                if (display["_layout_x_"]) {
                    return display["_layout_x_"];
                }
                display["_layout_x_"] = display.x;
                return display.x;
            };
            LayoutUtil.getLayoutY = function (display) {
                if (display["_layout_y_"]) {
                    return display["_layout_y_"];
                }
                display["_layout_y_"] = display.y;
                return display.y;
            };
            /**
             * 缩放
             */
            LayoutUtil.layout_scale = function (display) {
                var commonscale = texas.App.designWidth / texas.App.designHeight; //正常的缩放比
                // console.log("commonscale",commonscale);
                var nowscale = texas.App.stageWidth / texas.App.stageHeight;
                // console.log("nowscale",nowscale);
                var changscale = commonscale / nowscale;
                // console.log("changscale",changscale);
                if (changscale < 0.8) {
                    changscale = 0.8;
                }
                if (changscale > 0.9) {
                    display.scaleX = display.scaleY = changscale;
                }
                else {
                    display.scaleX = display.scaleY = changscale;
                }
            };
            return LayoutUtil;
        }());
        texas.LayoutUtil = LayoutUtil;
        __reflect(LayoutUtil.prototype, "kelvin.texas.LayoutUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Log = (function () {
            function Log() {
            }
            Log.log = function (data) {
                if (this.enabled)
                    egret.log(data);
            };
            Log.prototype.tracktrace = function (count) {
                if (count === void 0) { count = 10; }
                var caller = arguments.callee.caller;
                var i = 0;
                count = count || 10;
                console.log("***----------------------------------------  ** " + (i + 1));
                while (caller && i < count) {
                    console.log(caller.toString());
                    caller = caller.caller;
                    i++;
                    console.log("***---------------------------------------- ** " + (i + 1));
                }
            };
            Log.enabled = true;
            return Log;
        }());
        texas.Log = Log;
        __reflect(Log.prototype, "kelvin.texas.Log");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 * 登录方法
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var LoginUtil = (function () {
            function LoginUtil() {
            }
            LoginUtil.login = function (account, password, loginscene, success, errback) {
                texas.UserApi.login(account, password, function (data) {
                    texas.App.heart();
                    loginscene.gotoPanel(new texas.MainPanel());
                    lzm.Alert.closeAllAlert();
                    texas.AccountData.isNeedAutomaticLogin = "2";
                    if (success) {
                        success();
                    }
                }, errback);
            };
            return LoginUtil;
        }());
        texas.LoginUtil = LoginUtil;
        __reflect(LoginUtil.prototype, "kelvin.texas.LoginUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/*
* A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
* Digest Algorithm, as defined in RFC 1321.
* Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
* Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
* Distributed under the BSD License
* See http://pajhome.org.uk/crypt/md5 for more info.
*/
/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var md5 = (function () {
    function md5() {
        this.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
        this.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    }
    /*
     * These are the privates you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
    md5.prototype.hex_md5 = function (s) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); };
    md5.prototype.b64_md5 = function (s) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s))); };
    md5.prototype.any_md5 = function (s, e) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e); };
    md5.prototype.hex_hmac_md5 = function (k, d) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    md5.prototype.b64_hmac_md5 = function (k, d) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    md5.prototype.any_hmac_md5 = function (k, d, e) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e); };
    /*
     * Perform a simple self-test to see if the VM is working
     */
    md5.prototype.md5_vm_test = function () {
        return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
     * Calculate the MD5 of a raw string
     */
    md5.prototype.rstr_md5 = function (s) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    };
    /*
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */
    md5.prototype.rstr_hmac_md5 = function (key, data) {
        var bkey = this.rstr2binl(key);
        if (bkey.length > 16)
            bkey = this.binl_md5(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
    };
    /*
     * Convert a raw string to a hex string
     */
    md5.prototype.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F)
                + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    /*
     * Convert a raw string to a base-64 string
     */
    md5.prototype.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    /*
     * Convert a raw string to an arbitrary string encoding
     */
    md5.prototype.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        /* Convert to an array of 16-bit big-endian values, forming the dividend */
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        /*
         * Repeatedly perform a long division. The binary array forms the dividend,
         * the length of the encoding is the divisor. Once computed, the quotient
         * forms the dividend for the next step. All remainders are stored for later
         * use.
         */
        var full_length = Math.ceil(input.length * 8 /
            (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[j] = x;
            dividend = quotient;
        }
        /* Convert the remainders to the output string */
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        return output;
    };
    /*
     * Encode a string as utf-8.
     * For efficiency, this assumes the input is valid utf-16.
     */
    md5.prototype.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            /* Decode utf-16 surrogate pairs */
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            /* Encode output as utf-8 */
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    /*
     * Encode a string as utf-16
     */
    md5.prototype.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    md5.prototype.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    /*
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */
    md5.prototype.rstr2binl = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    };
    /*
     * Convert an array of little-endian words to a string
     */
    md5.prototype.binl2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    };
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */
    md5.prototype.binl_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return [a, b, c, d];
    };
    /*
     * These privates implement the four basic operations the algorithm uses.
     */
    md5.prototype.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    md5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    md5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    md5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    md5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    md5.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    md5.prototype.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    return md5;
}());
__reflect(md5.prototype, "md5");
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var QRCode = (function () {
            /**
             * @param htmlCodeUrl htmlCode二维码链接
             */
            function QRCode(htmlCodeUrl) {
                var gameDiv = document.getElementById("gameDiv");
                this.htmlCode = document.createElement("img");
                this.htmlCode.src = htmlCodeUrl;
                this.htmlCode.style.position = "absolute";
                this.htmlCode.style.display = "none";
                gameDiv.appendChild(this.htmlCode);
                this.shape = new egret.Shape();
                this.shape.touchEnabled = true;
                this.shape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.on_Shape, this);
            }
            QRCode.prototype.on_Shape = function (e) {
                this.destroy();
            };
            /**
             * 显示二维码
             */
            QRCode.prototype.showHtmlCode = function () {
                if (this.htmlCode) {
                    this.htmlCode.style.display = "inline";
                    this.shape.graphics.clear();
                    this.shape.graphics.beginFill(0x000000, 0.7);
                    this.shape.graphics.drawRect(0, 0, texas.App.stage.stageWidth, texas.App.stage.stageHeight);
                    this.shape.graphics.endFill();
                    texas.App.stage.addChild(this.shape);
                }
            };
            /**隐藏二维码*/
            QRCode.prototype.hideHtmlCode = function () {
                if (this.htmlCode) {
                    this.htmlCode.style.display = "none";
                    texas.App.stage.removeChild(this.shape);
                }
            };
            /**
             * 设置二维码图片位置
             * @param xPos x坐标
             * @param yPos y坐标
             * @param width 宽度
             * @param height 高度
             */
            QRCode.prototype.setPosition = function (xPos, yPos, width, height) {
                if (this.htmlCode == null) {
                    return;
                }
                //竖屏
                if (document.body.clientWidth < document.body.clientHeight) {
                    var wScale = document.body.clientWidth / texas.App.stage.stageWidth;
                    var hScale = document.body.clientHeight / texas.App.stage.stageHeight;
                    this.htmlCode.style.width = width * wScale + "px";
                    this.htmlCode.style.height = height * hScale + "px";
                    this.htmlCode.style.left = xPos * wScale + "px";
                    this.htmlCode.style.top = yPos * hScale + "px";
                    //横屏
                }
                else {
                    var wScale = document.body.clientWidth / texas.App.stage.stageHeight;
                    var hScale = document.body.clientHeight / texas.App.stage.stageWidth;
                    this.htmlCode.style.width = height * wScale + "px";
                    this.htmlCode.style.height = width * hScale + "px";
                    this.htmlCode.style.top = (texas.App.stage.stageWidth - xPos - width) * hScale + "px";
                    this.htmlCode.style.left = yPos * wScale + "px";
                }
            };
            /**销毁*/
            QRCode.prototype.destroy = function () {
                if (this.htmlCode) {
                    this.htmlCode.parentNode.removeChild(this.htmlCode);
                    this.htmlCode = null;
                    this.shape.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.on_Shape, this);
                    if (this.shape.parent) {
                        texas.App.stage.removeChild(this.shape);
                    }
                }
            };
            return QRCode;
        }());
        texas.QRCode = QRCode;
        __reflect(QRCode.prototype, "kelvin.texas.QRCode");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var RandomUtils = (function () {
            function RandomUtils() {
            }
            RandomUtils.getRandomIntBetween = function (a, b, toInt) {
                if (toInt === void 0) { toInt = true; }
                if (toInt) {
                    return parseInt((a + (b - a) * Math.random()).toString());
                }
                else {
                    return a + (b - a) * Math.random();
                }
            };
            /**
        * 获取一个区间的随机数
        * @param $from 最小值
        * @param $end 最大值
        * @returns {number}
        */
            RandomUtils.limit = function ($from, $end) {
                $from = Math.min($from, $end);
                $end = Math.max($from, $end);
                var range = $end - $from;
                return $from + Math.random() * range;
            };
            /**
             * 获取一个区间的随机数(帧数)
             * @param $from 最小值
             * @param $end 最大值
             * @returns {number}
             */
            RandomUtils.limitInteger = function ($from, $end) {
                return Math.round(this.limit($from, $end));
            };
            /**
             * 在一个数组中随机获取一个元素
             * @param arr 数组
             * @returns {any} 随机出来的结果
             */
            RandomUtils.prototype.randomArray = function (arr) {
                var index = Math.floor(Math.random() * arr.length);
                return arr[index];
            };
            /**生成一随机数列数组 */
            RandomUtils.getArray = function (count, maxs, mins) {
                var array = new Array();
                while (array.length < count) {
                    var temp = RandomUtils.getRandom(maxs, mins);
                    if (RandomUtils.search(array, temp) != true)
                        array.push(temp);
                }
                return array;
            };
            RandomUtils.getRandom = function (maxs, mins) {
                return Math.round(Math.random() * (maxs - mins)) + mins;
            };
            RandomUtils.search = function (array, num) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] == num) {
                        return true;
                    }
                }
            };
            //js 生成唯一标识
            RandomUtils.guid = function () {
                return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };
            return RandomUtils;
        }());
        texas.RandomUtils = RandomUtils;
        __reflect(RandomUtils.prototype, "kelvin.texas.RandomUtils");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 * 分享工具
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var ShareUtils = (function () {
            function ShareUtils() {
            }
            /**
             * 分享带二维码的图片
             * @param display 要分享的图片容器  分享的图片大小和display大小一致
             * @param  type  "session" 分享给好友   "timeline"：分享给朋友圈
             */
            ShareUtils.shareImgAndCode = function (display, type) {
                if (type === void 0) { type = "session"; }
                texas.AppWx.shareWxImage(display, type);
            };
            /**
             * 得到二维码
             *
             * @param w 二维码宽
             * @param h 二维码高
             * @param x 二维码x
             * @param y 二维码y
             */
            ShareUtils.getShareCode = function (w, h, x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                var qrCodurl = texas.AppConfig.downUrl + "?recommend=";
                var codeImg = qr.QRCode.create(qrCodurl, w, h, qr.QRErrorCorrectLevel.M, 8, 0);
                codeImg.x = x;
                codeImg.y = y;
                return codeImg;
            };
            return ShareUtils;
        }());
        texas.ShareUtils = ShareUtils;
        __reflect(ShareUtils.prototype, "kelvin.texas.ShareUtils");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 *
 *
 *
 * 字符串工具
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var StrUtil = (function () {
            function StrUtil() {
            }
            /**
             * 将数字转化为中文大写
             */
            StrUtil.number_chinese = function (str) {
                var num = String(str);
                var strOutput = "", strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
                //  strUnit = '仟佰拾亿仟佰拾万仟佰拾';
                num += "00";
                var intPos = num.indexOf('.');
                if (intPos >= 0) {
                    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
                }
                strUnit = strUnit.substr(strUnit.length - num.length);
                for (var i = 0; i < num.length; i++) {
                    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(Number(num.substr(i, 1)), 1) + strUnit.substr(i, 1);
                }
                var result = strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
                return result.replace("整", "").replace("元", "");
            };
            /**
            * 名字截取一部分  ps:只支持英文，中文，数字
            * @param length 截取长度 ，中文一个 ，英文半个  addstr  要加在后面的字符串
            */
            StrUtil.cutOutName = function (str, length, addstr) {
                if (length === void 0) { length = 6; }
                if (addstr === void 0) { addstr = ""; }
                var re = new RegExp("^[a-zA-Z0-9]+$");
                //要包含数字的话是 new RegExp("^[a-zA-Z0-9]+$"); 
                var name = String(str);
                var nameArr = name.split('');
                var numlength = 0;
                var chinesenum = 0;
                var englishnum = 0;
                for (var i = 0; i < nameArr.length; i++) {
                    if (re.test(nameArr[i])) {
                        numlength = numlength + 1;
                        if (numlength <= length * 2) {
                            englishnum++;
                        }
                    }
                    else {
                        numlength = numlength + 2;
                        if (numlength <= length * 2) {
                            chinesenum++;
                        }
                    }
                }
                var num = Math.floor((chinesenum + englishnum));
                name = name.slice(0, num) + addstr;
                return name;
            };
            /**
             *
             * 返回字符串的实际长度, 一个汉字算2个长度
             */
            StrUtil.getNumByStr = function (str) {
                return str.replace(/[^\x00-\xff]/g, "**").length;
            };
            /**
             *
             * 判断字符串是否只包含中文和英文
             */
            StrUtil.judgeOnlyContainEAndC = function (str) {
                var result = true;
                var strArr = str.split('');
                for (var i = 0; i < strArr.length; i++) {
                    if (/^[\u4e00-\u9fa5]/.test(strArr[i]) || /^[a-zA-Z]/.test(strArr[i]) || /\d+/.test(strArr[i])) {
                    }
                    else {
                        result = false;
                        return result;
                    }
                }
                return result;
            };
            /**判断是否是手机号**/
            StrUtil.isPhoneNumber = function (tel) {
                // var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
                // var reg = /^1[3456789]\d{9}$/
                var reg = /^1[3456789]\d{9}$/;
                return reg.test(tel);
                // return true;
            };
            /**判断非法字符串 */
            StrUtil.isHaveIllegal = function (str) {
                var pat = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]", "i");
                return pat.test(str);
            };
            /**判断是否为正整数 */
            StrUtil.isPositiveInteger = function (str) {
                return (/(^[1-9]\d*$)/.test(str));
            };
            return StrUtil;
        }());
        texas.StrUtil = StrUtil;
        __reflect(StrUtil.prototype, "kelvin.texas.StrUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
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
 *
 *
 * 工具类
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var Tool = (function () {
            function Tool() {
            }
            /**
             * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
             * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
             * @param name:生成纹理的索引名字  touchEnabled,是否打开点击事件
             */
            Tool.createBitmapByName = function (name, touchEnabled, X, Y, W, H) {
                if (touchEnabled === void 0) { touchEnabled = false; }
                if (X === void 0) { X = 0; }
                if (Y === void 0) { Y = 0; }
                if (name == null) {
                    return new egret.Bitmap();
                }
                try {
                    var result_1 = new egret.Bitmap();
                    var texture = RES.getRes(name);
                    if (texture == null) {
                        RES.getResAsync(name, function (e) { result_1.texture = e; }, this);
                    }
                    result_1.texture = texture;
                    result_1.name = name;
                    result_1.touchEnabled = touchEnabled;
                    result_1.x = X;
                    result_1.y = Y;
                    if (W) {
                        result_1.width = W;
                    }
                    if (H) {
                        result_1.height = H;
                    }
                    return result_1;
                }
                catch (e) {
                    var result = new egret.Bitmap();
                    egret.warn("图片加载出错", e, name);
                    return result;
                }
            };
            //
            /**
             * 根据纹理集生成eui.Image
             * @param ruleImgs  egret.SpriteSheet name 资源名
             */
            Tool.createBitmapBySheet = function (ruleImgs, name) {
                var result = new egret.Bitmap();
                var texture = ruleImgs.getTexture(name);
                result.texture = texture;
                return result;
            };
            /**
            * 用url生成Bitmap
            * @param url 资源url Sp 需要纹理的Bitmap self 作用域
            */
            Tool.createBitmapByUrl = function (url, Sp, self) {
                var Url = url;
                RES.getResByUrl(Url, function (event) { var img = event; Sp.texture = img; }, self, RES.ResourceItem.TYPE_IMAGE);
            };
            /**
            * 用url得到纹理
            * @param url 资源url
            */
            Tool.getTextureByUrl = function (url) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                // let Url = url; RES.getResByUrl(Url, (event: any) => { let img: egret.Texture = <egret.Texture>event; resolve(img); }, self, RES.ResourceItem.TYPE_IMAGE);
                                var loader = new egret.ImageLoader();
                                loader.addEventListener(egret.Event.COMPLETE, function () {
                                    var bitmapData = loader.data;
                                    var texture = new egret.Texture();
                                    texture._setBitmapData(bitmapData);
                                    resolve(texture);
                                }, _this);
                                loader.load(url);
                            })];
                    });
                });
            };
            /**
             * 用url加载文本
             */
            Tool.getTxtByUrl = function (url) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                RES.getResByUrl(url, function (event) { var txt = event; resolve(txt); }, self, RES.ResourceItem.TYPE_JSON);
                            })];
                    });
                });
            };
            /**
            * 用name得到纹理
            * @param name 资源名  ps:该名字必须在资源组内
            */
            Tool.getTextureByName = function (name) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var texture = RES.getRes(name);
                                if (texture == null) {
                                    RES.getResAsync(name, function (e) { texture = e; resolve(texture); }, _this);
                                }
                                else {
                                    resolve(texture);
                                }
                            })];
                    });
                });
            };
            /**
            * 用name得到纹理
            * @param name 资源名或者url
            */
            Tool.getTextureByUrlOrName = function (name) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        try {
                            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                    var texture;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(name.indexOf("http") != -1)) return [3 /*break*/, 2];
                                                name = name.replace("\r", "");
                                                return [4 /*yield*/, Tool.getTextureByUrl(name)];
                                            case 1:
                                                texture = _a.sent();
                                                return [3 /*break*/, 4];
                                            case 2: return [4 /*yield*/, Tool.getTextureByName(name)];
                                            case 3:
                                                texture = _a.sent();
                                                _a.label = 4;
                                            case 4:
                                                resolve(texture);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        catch (e) {
                            console.log("加载图片出错");
                            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        resolve(null);
                                        return [2 /*return*/];
                                    });
                                }); })];
                        }
                        return [2 /*return*/];
                    });
                });
            };
            /**
            * 获取对应的bitmaptext
            */
            Tool.createBitmapText = function (bfont, X, Y) {
                if (X === void 0) { X = 0; }
                if (Y === void 0) { Y = 0; }
                var font = RES.getRes(bfont);
                var btxt = new egret.BitmapText;
                btxt.font = font;
                btxt.x = X;
                btxt.y = Y;
                btxt.textAlign = "center";
                return btxt;
            };
            /**
             * 创建一个对应的动画
             */
            Tool.createMovieClip = function (mcName, NameJson, NamePng) {
                if (NameJson === void 0) { NameJson = ""; }
                if (NamePng === void 0) { NamePng = ""; }
                if (NameJson == "") {
                    NameJson = mcName;
                }
                if (NamePng == "") {
                    NamePng = mcName;
                }
                var resJs = RES.getRes(NameJson + "_json");
                var resPng = RES.getRes(NamePng + "_png");
                var mcFactory = new egret.MovieClipDataFactory(resJs, resPng);
                var movieclipData = mcFactory.generateMovieClipData(mcName);
                var mc1 = new egret.MovieClip(movieclipData);
                return mc1;
            };
            /**
             * 创建矩形
             *
             */
            Tool.createRectSprite = function (_width, _height, color, X, Y, Alpha) {
                if (color === void 0) { color = null; }
                if (X === void 0) { X = 0; }
                if (Y === void 0) { Y = 0; }
                if (Alpha === void 0) { Alpha = 1; }
                var result = new egret.Sprite();
                if (color == null) {
                    result.graphics.beginFill(0x000000, 0);
                }
                else {
                    result.graphics.beginFill(color, 1);
                }
                result.graphics.drawRect(0, 0, _width, _height);
                result.graphics.endFill();
                result.x = X;
                result.y = Y;
                result.width = _width, result.height = _height, result.alpha = Alpha;
                return result;
            };
            /**
             * 创建一个Sprite
             * @param  center 是否居中
             */
            Tool.createSprite = function (X, Y, W, H, center) {
                if (X === void 0) { X = 0; }
                if (Y === void 0) { Y = 0; }
                if (W === void 0) { W = 0; }
                if (H === void 0) { H = 0; }
                if (center === void 0) { center = false; }
                var result = new egret.Sprite();
                result.width = W;
                result.height = H;
                if (center) {
                    Tool.center(result);
                }
                result.x = X;
                result.y = Y;
                return result;
            };
            /**
             * 创建一个Text对象
             * @param
             */
            Tool.createTextFiled = function (x, y, width, height, str, size, color, iscenter, isvalign, bold) {
                if (str === void 0) { str = ""; }
                if (size === void 0) { size = 35; }
                if (color === void 0) { color = 0x000000; }
                if (iscenter === void 0) { iscenter = "left"; }
                if (isvalign === void 0) { isvalign = "middle"; }
                if (bold === void 0) { bold = false; }
                var result = new egret.TextField();
                result.fontFamily = "SimHei";
                result.x = x;
                result.y = y;
                if (width > 0) {
                    result.width = width;
                }
                ;
                if (height > 0) {
                    result.height = height;
                }
                ;
                result.text = str;
                result.size = size;
                result.textColor = color;
                result.bold = bold;
                result.textAlign = iscenter;
                result.verticalAlign = isvalign;
                return result;
            };
            /**
             * Text可以输入
             * @param obj: 文本对象, defaultStr: 默认字符, inputColor: 输入时颜色 outColor:输入完成后的对象, isclear: 未再次输入文本是否内容置空
             */
            Tool.setInputTextFiled = function (obj, defaultStr, inputColor, outColor, isclear) {
                if (inputColor === void 0) { inputColor = 0xffffff; }
                if (outColor === void 0) { outColor = 0xaaaaaa; }
                if (isclear === void 0) { isclear = true; }
                obj.type = "input";
                if (isclear) {
                    obj.addEventListener(egret.FocusEvent.FOCUS_IN, function () { obj.text = ""; obj.textColor = inputColor; }, this);
                }
                else {
                    obj.once(egret.FocusEvent.FOCUS_IN, function () { obj.text = ""; obj.textColor = inputColor; }, this);
                }
                obj.addEventListener(egret.FocusEvent.FOCUS_OUT, function () { if (obj.text == "") {
                    obj.text = defaultStr;
                } obj.textColor = outColor; }, this);
            };
            //把方形图片变为圆形图片
            /**
           *把方形图片变为圆形图片
           * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
           */
            Tool.createCircularMask = function (Sp, X, Y) {
                if (X === void 0) { X = 0; }
                if (Y === void 0) { Y = 0; }
                var CirSp = new egret.Sprite();
                var diameter;
                if (Sp.width > Sp.height) {
                    diameter = Sp.height;
                }
                else {
                    diameter = Sp.width;
                }
                var SpMask = new egret.Sprite();
                SpMask.graphics.beginFill(0x000000);
                SpMask.graphics.drawCircle(Sp.width / 2 + Sp.x, Sp.height / 2 + Sp.y, diameter / 2);
                SpMask.graphics.endFill();
                Sp.mask = SpMask;
                CirSp.addChild(Sp);
                CirSp.addChild(SpMask);
                CirSp.x = X;
                CirSp.y = Y;
                return CirSp;
            };
            //
            /**
            *将方形变为圆角矩形图片
            * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角
            */
            Tool.createRectMask = function (Sp, EW, EY) {
                var CirSp = new egret.Sprite();
                var SpMask = new egret.Sprite();
                SpMask.graphics.beginFill(0x000000);
                SpMask.graphics.drawRoundRect(0, 0, Sp.width, Sp.height, EW, EY);
                SpMask.graphics.endFill();
                Sp.mask = SpMask;
                CirSp.addChild(Sp);
                CirSp.addChild(SpMask);
                CirSp.x = Sp.x;
                CirSp.y = Sp.y;
                Sp.x = 0, Sp.y = 0;
                return CirSp;
            };
            /**
             *
             *将方形图片变为上或下的圆角矩形//
             * @param Sp 要被蒙版遮罩的容器  EW：圆角宽 ，EY：圆角高 ，aspect：true为上圆角，false,为下圆角
             */
            Tool.createRectUpOrDownMask = function (Sp, EW, EY, aspect) {
                if (aspect === void 0) { aspect = true; }
                var CirSp = new egret.Sprite();
                var SpMask = new egret.Sprite();
                SpMask.graphics.beginFill(0x000000);
                SpMask.graphics.drawRoundRect(0, 0, Sp.width, Sp.height, EW, EY);
                SpMask.graphics.endFill();
                var Reck = new egret.Sprite();
                Reck.graphics.beginFill(0x000000);
                Reck.graphics.drawRect(0, 0, Sp.width, EY);
                Reck.graphics.endFill();
                SpMask.addChild(Reck);
                if (aspect == true) {
                    Reck.y = Sp.height - EY;
                }
                else { }
                Sp.mask = SpMask;
                CirSp.addChild(Sp);
                CirSp.addChild(SpMask);
                CirSp.x = Sp.x;
                CirSp.y = Sp.y;
                Sp.x = 0, Sp.y = 0;
                return CirSp;
            };
            /**
             *
             *适配背景图片  width是宽与屏幕一样大，高无法完全显示,height是高与屏幕一样高,宽无法完全显示
             * @param displayObj 背景图片   align:显示方式
             */
            Tool.scaleBg = function (displayObj, align) {
                if (align === void 0) { align = "center"; }
                var scale = 1;
                if (align == "width") {
                    scale = egret.MainContext.instance.stage.stageWidth / displayObj.width;
                }
                else if (align == "height") {
                    scale = egret.MainContext.instance.stage.height / displayObj.height;
                }
                else {
                    if (egret.MainContext.instance.stage.scaleMode == egret.StageScaleMode.FIXED_HEIGHT) {
                        scale = egret.MainContext.instance.stage.stageWidth / displayObj.width;
                    }
                    else {
                        scale = egret.MainContext.instance.stage.height / displayObj.height;
                    }
                }
                displayObj.scaleX = displayObj.scaleY = scale;
            };
            /**
             * 将一个容器的锚点移到中心
             *  @param  obj 要居中的对象，is居中后是否回到原位
             */
            Tool.center = function (obj, is) {
                if (is === void 0) { is = false; }
                if (obj.anchorOffsetX != obj.width >> 1) {
                    obj.anchorOffsetX = obj.width >> 1;
                    obj.anchorOffsetY = obj.height >> 1;
                    if (is) {
                        return;
                    }
                    obj.x += obj.anchorOffsetX;
                    obj.y += obj.anchorOffsetY;
                }
            };
            /**
            * 将一个容器的锚点移到中心
            *  @param  obj 要宽居中的对象，is居中后是否回到原位
            */
            Tool.centerWidth = function (obj, is) {
                if (is === void 0) { is = false; }
                if (obj.anchorOffsetX != obj.width >> 1) {
                    obj.anchorOffsetX = obj.width >> 1;
                    if (is) {
                        return;
                    }
                    obj.x += obj.anchorOffsetX;
                }
            };
            /**
            * 将一个类的锚点移到中心
            *  @param  obj 要高居中的对象，is居中后是否回到原位
            */
            Tool.centerHeight = function (obj, is) {
                if (is === void 0) { is = false; }
                if (obj.anchorOffsetY != obj.height >> 1) {
                    obj.anchorOffsetY = obj.height >> 1;
                    if (is) {
                        return;
                    }
                    obj.y += obj.anchorOffsetY;
                }
            };
            /**
                * 从父级移除childss
                * @param child
                */
            Tool.removeFromParent = function (child) {
                if (!child)
                    return;
                if (!child.parent)
                    return;
                if (child.parent.contains(child)) {
                    child.parent.removeChild(child);
                }
            };
            /**
                * 锁屏
                */
            Tool.lock = function () { egret.MainContext.instance.stage.touchEnabled = egret.MainContext.instance.stage.touchChildren = false; };
            /**
             * 解屏
             */
            Tool.unlock = function () { egret.MainContext.instance.stage.touchEnabled = egret.MainContext.instance.stage.touchChildren = true; };
            //阻止容器出界 
            Tool.checkImage = function (obj) {
                if (obj.x < egret.MainContext.instance.stage.stageWidth - obj.width) {
                    obj.x = egret.MainContext.instance.stage.stageWidth - obj.width;
                }
                else if (obj.x > 0) {
                    obj.x = 0;
                }
                if (obj.y < egret.MainContext.instance.stage.stageHeight - obj.height) {
                    obj.y = egret.MainContext.instance.stage.stageHeight - obj.height;
                }
                else if (obj.y > 0) {
                    obj.y = 0;
                }
            };
            /**
            * @param frame 根据帧频返回偏移量
            */
            Tool.frameRate = function (frame) { return (frame / egret.MainContext.instance.stage.frameRate); };
            /**
           * @param base64 字符串
           */
            Tool.getTexture = function (base64) {
                var img = new Image();
                img.src = base64;
                var texture = new egret.Texture();
                var bitmapdata = new egret.BitmapData(img);
                texture._setBitmapData(bitmapdata);
                return texture;
            };
            /**
             * 开始点击按钮变小
             *
             */
            Tool.ButtonNarrow = function (btn, self) {
                if (btn.anchorOffsetX == btn.width / 2) {
                    Tool.center(btn, true);
                }
                else {
                    Tool.center(btn);
                }
                btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { btn.scaleX = btn.scaleY = 1.1; }, self);
                btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () { btn.scaleX = btn.scaleY = 1; }, self);
                btn.addEventListener(egret.TouchEvent.TOUCH_END, function () { btn.scaleX = btn.scaleY = 1; }, self);
            };
            //打印堆栈
            Tool.trace = function (count) {
                var caller = arguments.callee.caller;
                var i = 0;
                count = count || 10;
                texas.Log.log("***----------------------------------------  ** " + (i + 1));
                while (caller && i < count) {
                    texas.Log.log(caller.toString());
                    caller = caller.caller;
                    i++;
                    texas.Log.log("***---------------------------------------- ** " + (i + 1));
                }
            };
            /**
             * 重新 替换掉swf的 文本
             * @param txt变量名
             * @param self  作用域
             */
            Tool.replaceSwfTxt = function (txt, self) {
                var copyTxt = self[txt];
                self[txt] = kelvin.texas.Tool.createTextFiled(copyTxt.x, copyTxt.y, copyTxt.width, copyTxt.height, copyTxt.text, copyTxt.size, copyTxt.textColor, copyTxt.textAlign);
                self[txt].verticalAlign = copyTxt.verticalAlign;
                self[txt].multiline = copyTxt.multiline;
                self[txt].text = copyTxt.text;
                //  self[txt].height =  copyTxt.size;
                var index = copyTxt.parent.getChildIndex(self[txt]);
                copyTxt.parent.addChildAt(self[txt], index);
                kelvin.texas.Tool.removeFromParent(copyTxt);
            };
            return Tool;
        }());
        texas.Tool = Tool;
        __reflect(Tool.prototype, "kelvin.texas.Tool");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var TweenQueue = (function () {
            function TweenQueue() {
            }
            TweenQueue.getQueue = function (key) {
                if (TweenQueue._queueMap == null) {
                    TweenQueue._queueMap = {};
                    TweenQueue._currentTween = {};
                    TweenQueue._currentTimeout = {};
                }
                var queue = TweenQueue._queueMap[key];
                if (queue == null) {
                    queue = [];
                    TweenQueue._queueMap[key] = queue;
                }
                return queue;
            };
            TweenQueue.get = function (target, props, duration, ease, wait, callBack, callBackObj, callBackParams, queueKey) {
                if (ease === void 0) { ease = null; }
                if (wait === void 0) { wait = 0; }
                if (callBack === void 0) { callBack = null; }
                if (callBackObj === void 0) { callBackObj = null; }
                if (callBackParams === void 0) { callBackParams = null; }
                if (queueKey === void 0) { queueKey = null; }
                if (queueKey == null) {
                    queueKey = "__def__";
                }
                var queue = TweenQueue.getQueue(queueKey);
                queue.push([target, props, duration, ease, wait, callBack, callBackObj, callBackParams]);
                if (queue.length == 1) {
                    TweenQueue._currentTween[queueKey] = egret.Tween.get(target).to(props, duration, ease).call(TweenQueue.callBack, TweenQueue, [queue, queueKey]);
                }
            };
            TweenQueue.addWait = function (wait, callBack, callBackObj, callBackParams, queueKey) {
                if (callBack === void 0) { callBack = null; }
                if (callBackObj === void 0) { callBackObj = null; }
                if (callBackParams === void 0) { callBackParams = null; }
                if (queueKey === void 0) { queueKey = null; }
                if (queueKey == null) {
                    queueKey = "__def__";
                }
                var queue = TweenQueue.getQueue(queueKey);
                queue.push([wait, callBack, callBackObj, callBackParams]);
                if (queue.length == 1) {
                    TweenQueue.callBack(queue, queueKey);
                }
            };
            TweenQueue.getWithKey = function (queueKey, target, props, duration, ease, wait, callBack, callBackObj, callBackParams) {
                if (ease === void 0) { ease = null; }
                if (wait === void 0) { wait = 0; }
                if (callBack === void 0) { callBack = null; }
                if (callBackObj === void 0) { callBackObj = null; }
                if (callBackParams === void 0) { callBackParams = null; }
                TweenQueue.get(target, props, duration, ease, wait, callBack, callBackObj, callBackParams, queueKey);
            };
            TweenQueue.addWaitWithKey = function (queueKey, wait, callBack, callBackObj, callBackParams) {
                if (callBack === void 0) { callBack = null; }
                if (callBackObj === void 0) { callBackObj = null; }
                if (callBackParams === void 0) { callBackParams = null; }
                TweenQueue.addWait(wait, callBack, callBackObj, callBackParams, queueKey);
            };
            TweenQueue.getWithNoQueue = function (target, props, duration, ease, wait, callBack, callBackObj, callBackParams) {
                if (ease === void 0) { ease = null; }
                if (wait === void 0) { wait = 0; }
                if (callBack === void 0) { callBack = null; }
                if (callBackObj === void 0) { callBackObj = null; }
                if (callBackParams === void 0) { callBackParams = null; }
                TweenQueue.get(target, props, duration, ease, wait, callBack, callBackObj, callBackParams, (Math.random() * 9999999).toString());
            };
            TweenQueue.callBack = function (queue, queueKey) {
                if (queue.length == 0) {
                    return;
                }
                var tweenObjects = queue[0];
                var wait;
                var callBack;
                var callBackObj;
                var callBackParams;
                if (tweenObjects.length == 4) {
                    wait = tweenObjects[0];
                    callBack = tweenObjects[1];
                    callBackObj = tweenObjects[2];
                    callBackParams = tweenObjects[3];
                }
                else {
                    wait = tweenObjects[4];
                    callBack = tweenObjects[5];
                    callBackObj = tweenObjects[6];
                    callBackParams = tweenObjects[7];
                }
                if (wait > 0) {
                    TweenQueue._currentTimeout[queueKey] = egret.setTimeout(function () {
                        TweenQueue.callBack2(callBack, callBackObj, callBackParams, queue, queueKey);
                    }, TweenQueue, wait);
                }
                else {
                    TweenQueue.callBack2(callBack, callBackObj, callBackParams, queue, queueKey);
                }
            };
            TweenQueue.callBack2 = function (callBack, callBackObj, callBackParams, queue, queueKey) {
                if (callBack != null) {
                    if (callBackObj == null) {
                        callBack(callBackParams);
                    }
                    else {
                        callBack.apply(callBackObj, [callBackParams]);
                    }
                }
                TweenQueue._currentTween[queueKey] = null;
                TweenQueue._currentTimeout[queueKey] = null;
                queue.shift();
                if (queue.length > 0) {
                    if (queue[0].length == 4) {
                        TweenQueue.callBack(queue, queueKey);
                    }
                    else {
                        TweenQueue._currentTween[queueKey] = egret.Tween.get(queue[0][0]).to(queue[0][1], queue[0][2], queue[0][3]).call(TweenQueue.callBack, TweenQueue, [queue, queueKey]);
                    }
                }
            };
            TweenQueue.clearQueue = function (key) {
                if (key === void 0) { key = "__def__"; }
                if (TweenQueue._queueMap == null)
                    return;
                var queue = TweenQueue._queueMap[key];
                if (queue != null) {
                    queue.splice(0, queue.length);
                }
                if (TweenQueue._currentTween[key]) {
                    egret.Tween.removeTweens(TweenQueue._currentTween[key]);
                }
                if (TweenQueue._currentTimeout[key]) {
                    egret.clearTimeout(TweenQueue._currentTimeout[key]);
                }
            };
            TweenQueue.clearAllQueue = function () {
                if (TweenQueue._queueMap == null)
                    return;
                for (var k in TweenQueue._queueMap) {
                    var queue = TweenQueue._queueMap[k];
                    queue.splice(0, queue.length);
                    if (TweenQueue._currentTween[k]) {
                        egret.Tween.removeTweens(TweenQueue._currentTween[k]);
                    }
                    if (TweenQueue._currentTimeout[k]) {
                        egret.clearTimeout(TweenQueue._currentTimeout[k]);
                    }
                }
            };
            return TweenQueue;
        }());
        texas.TweenQueue = TweenQueue;
        __reflect(TweenQueue.prototype, "kelvin.texas.TweenQueue");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
/**
 *
 *
 *
 *
 *
 *
 *
 * url的工具
 */
var kelvin;
(function (kelvin) {
    var texas;
    (function (texas) {
        var UrlUtil = (function () {
            function UrlUtil() {
            }
            UrlUtil.getUrlArgStr = function () {
                var q = location.search.substr(1);
                var qs = q.split('&');
                var argStr = '';
                if (qs) {
                    for (var i = 0; i < qs.length; i++) {
                        argStr += qs[i].substring(0, qs[i].indexOf('=')) + '=' + qs[i].substring(qs[i].indexOf('=') + 1) + '&';
                    }
                }
                argStr = argStr.slice(0, argStr.length - 1);
                return argStr;
            };
            return UrlUtil;
        }());
        texas.UrlUtil = UrlUtil;
        __reflect(UrlUtil.prototype, "kelvin.texas.UrlUtil");
    })(texas = kelvin.texas || (kelvin.texas = {}));
})(kelvin || (kelvin = {}));
var qr;
(function (qr) {
    var QR8bitByte = (function () {
        function QR8bitByte(data) {
            this.mode = qr.QRMode.MODE_8BIT_BYTE;
            this.data = data;
            this.parsedData = [];
            //  UTF-8
            for (var i = 0, l = this.data.length; i < l; i++) {
                var byteArray = [];
                var code = this.data.charCodeAt(i);
                if (code > 0x10000) {
                    byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
                    byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
                    byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
                    byteArray[3] = 0x80 | (code & 0x3F);
                }
                else if (code > 0x800) {
                    byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
                    byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
                    byteArray[2] = 0x80 | (code & 0x3F);
                }
                else if (code > 0x80) {
                    byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
                    byteArray[1] = 0x80 | (code & 0x3F);
                }
                else {
                    byteArray[0] = code;
                }
                this.parsedData.push(byteArray);
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData);
            if (this.parsedData.length != this.data.length) {
                this.parsedData.unshift(191);
                this.parsedData.unshift(187);
                this.parsedData.unshift(239);
            }
        }
        QR8bitByte.prototype.getLength = function (buffer) {
            return this.parsedData.length;
        };
        QR8bitByte.prototype.write = function (buffer) {
            for (var i = 0, l = this.parsedData.length; i < l; i++) {
                buffer.put(this.parsedData[i], 8);
            }
        };
        return QR8bitByte;
    }());
    qr.QR8bitByte = QR8bitByte;
    __reflect(QR8bitByte.prototype, "qr.QR8bitByte");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRBitBuffer = (function () {
        function QRBitBuffer() {
            this.buffer = [];
            this.length = 0;
        }
        QRBitBuffer.prototype.get = function (index) {
            var bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        };
        QRBitBuffer.prototype.put = function (num, length) {
            for (var i = 0; i < length; i++)
                this.putBit((num >>> length - i - 1 & 1) == 1);
        };
        QRBitBuffer.prototype.getLengthInBits = function () {
            return this.length;
        };
        QRBitBuffer.prototype.putBit = function (bit) {
            var bufIndex = Math.floor(this.length / 8);
            this.buffer.length <= bufIndex && this.buffer.push(0), bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8), this.length++;
        };
        return QRBitBuffer;
    }());
    qr.QRBitBuffer = QRBitBuffer;
    __reflect(QRBitBuffer.prototype, "qr.QRBitBuffer");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRCode = (function () {
        function QRCode() {
        }
        /**
         * msg
         * width,height 二维码宽度，高度
         * color 颜色
         *
         * errorCorrectLevel:
         * level L : 最大 7% 的错误能够被纠正；
         * level M : 最大 15% 的错误能够被纠正；
         * level Q : 最大 25% 的错误能够被纠正；
         * level H : 最大 30% 的错误能够被纠正；
         *
         * typeNumber:
         * QR图的大小(size)被定义为版本（Version)，版本号从1到40。版本1就是一个21*21的矩阵，每增加一个版本号，矩阵的大小就增加4个模块(Module)，
         * 因此，版本40就是一个177*177的矩阵。（版本越高，意味着存储的内容越多，纠错能力也越强）。
         * */
        QRCode.create = function (msg, width, height, errorCorrectLevel, typeNumer, color) {
            if (width === void 0) { width = 200; }
            if (height === void 0) { height = 200; }
            if (errorCorrectLevel === void 0) { errorCorrectLevel = qr.QRErrorCorrectLevel.L; }
            if (typeNumer === void 0) { typeNumer = 20; }
            if (color === void 0) { color = 0; }
            var _htOption = {
                color: color,
                width: width,
                height: height,
                correctLevel: errorCorrectLevel,
                typeNumer: typeNumer
            };
            var _oQRCode = new qr.QRCodeModel(_htOption.typeNumer, _htOption.correctLevel);
            _oQRCode.addData(msg);
            _oQRCode.make();
            return QRCode.draw(_oQRCode, _htOption);
        };
        QRCode.draw = function (m, _htOption) {
            var sc = new egret.Sprite();
            var _htOption = _htOption;
            var nCount = m.getModuleCount();
            var nWidth = (_htOption.width / nCount);
            var nHeight = (_htOption.height / nCount);
            //画一个比二维码本身略大的白色底框
            var borderWidth = 10;
            sc.graphics.moveTo(-borderWidth, -borderWidth);
            sc.graphics.beginFill(0xffffff);
            sc.graphics.drawRect(-borderWidth, -borderWidth, _htOption.width + 2 * borderWidth, _htOption.height + 2 * borderWidth);
            sc.graphics.endFill();
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    var b = m.isDark(row, col);
                    if (b) {
                        sc.graphics.moveTo(col * nWidth, row * nHeight);
                        sc.graphics.beginFill(_htOption.color);
                        sc.graphics.drawRect(col * nWidth, row * nHeight, nWidth, nHeight);
                        sc.graphics.endFill();
                    }
                }
            }
            return sc;
        };
        return QRCode;
    }());
    qr.QRCode = QRCode;
    __reflect(QRCode.prototype, "qr.QRCode");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRCodeModel = (function () {
        function QRCodeModel(typeNumber, errorCorrectLevel) {
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
            this.typeNumber = typeNumber;
            this.errorCorrectLevel = errorCorrectLevel;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
        }
        QRCodeModel.prototype.addData = function (data) {
            var newData = new qr.QR8bitByte(data);
            this.dataList.push(newData), this.dataCache = null;
        };
        QRCodeModel.prototype.isDark = function (row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col)
                throw new Error(row + "," + col);
            return this.modules[row][col];
        };
        QRCodeModel.prototype.getModuleCount = function () {
            return this.moduleCount;
        };
        QRCodeModel.prototype.make = function () {
            this.makeImpl(!1, this.getBestMaskPattern());
        };
        QRCodeModel.prototype.makeImpl = function (test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
                for (var col = 0; col < this.moduleCount; col++)
                    this.modules[row][col] = null;
            }
            this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(test, maskPattern),
                this.typeNumber >= 7 && this.setupTypeNumber(test),
                this.dataCache == null && (this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, maskPattern);
        };
        QRCodeModel.prototype.setupPositionProbePattern = function (row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r)
                    continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c)
                        continue;
                    0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
                }
            }
        };
        QRCodeModel.prototype.getBestMaskPattern = function () {
            var minLostPoint = 0, pattern = 0;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var lostPoint = qr.QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint)
                    minLostPoint = lostPoint, pattern = i;
            }
            return pattern;
        };
        QRCodeModel.prototype.createMovieClip = function (target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth), cs = 1;
            this.make();
            for (var row = 0; row < this.modules.length; row++) {
                var y = row * cs;
                for (var col = 0; col < this.modules[row].length; col++) {
                    var x = col * cs, dark = this.modules[row][col];
                    dark && (qr_mc.beginFill(0, 100), qr_mc.moveTo(x, y), qr_mc.lineTo(x + cs, y), qr_mc.lineTo(x + cs, y + cs), qr_mc.lineTo(x, y + cs), qr_mc.endFill());
                }
            }
            return qr_mc;
        };
        QRCodeModel.prototype.setupTimingPattern = function () {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null)
                    continue;
                this.modules[r][6] = r % 2 == 0;
            }
            for (var c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null)
                    continue;
                this.modules[6][c] = c % 2 == 0;
            }
        };
        QRCodeModel.prototype.setupPositionAdjustPattern = function () {
            var pos = qr.QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++)
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i], col = pos[j];
                    if (this.modules[row][col] != null)
                        continue;
                    for (var r = -2; r <= 2; r++)
                        for (var c = -2; c <= 2; c++)
                            r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
                }
        };
        QRCodeModel.prototype.setupTypeNumber = function (test) {
            var bits = qr.QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
            }
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        };
        QRCodeModel.prototype.setupTypeInfo = function (test, maskPattern) {
            var data = this.errorCorrectLevel << 3 | maskPattern, bits = qr.QRUtil.getBCHTypeInfo(data);
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 6 ? this.modules[i][8] = mod : i < 8 ? this.modules[i + 1][8] = mod : this.modules[this.moduleCount - 15 + i][8] = mod;
            }
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = mod : i < 9 ? this.modules[8][15 - i - 1 + 1] = mod : this.modules[8][15 - i - 1] = mod;
            }
            this.modules[this.moduleCount - 8][8] = !test;
        };
        QRCodeModel.prototype.mapData = function (data, maskPattern) {
            var inc = -1, row = this.moduleCount - 1, bitIndex = 7, byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                col == 6 && col--;
                for (;;) {
                    for (var c = 0; c < 2; c++)
                        if (this.modules[row][col - c] == null) {
                            var dark = !1;
                            byteIndex < data.length && (dark = (data[byteIndex] >>> bitIndex & 1) == 1);
                            var mask = qr.QRUtil.getMask(maskPattern, row, col - c);
                            mask && (dark = !dark), this.modules[row][col - c] = dark, bitIndex--, bitIndex == -1 && (byteIndex++, bitIndex = 7);
                        }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc, inc = -inc;
                        break;
                    }
                }
            }
        };
        QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
            var rsBlocks = qr.QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel), buffer = new qr.QRBitBuffer;
            for (var i = 0; i < dataList.length; i++) {
                var data = dataList[i];
                buffer.put(data.mode, 4), buffer.put(data.getLength(), qr.QRUtil.getLengthInBits(data.mode, typeNumber)), data.write(buffer);
            }
            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i++)
                totalDataCount += rsBlocks[i].dataCount;
            if (buffer.getLengthInBits() > totalDataCount * 8)
                throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
            buffer.getLengthInBits() + 4 <= totalDataCount * 8 && buffer.put(0, 4);
            while (buffer.getLengthInBits() % 8 != 0)
                buffer.putBit(!1);
            for (;;) {
                if (buffer.getLengthInBits() >= totalDataCount * 8)
                    break;
                buffer.put(QRCodeModel.PAD0, 8);
                if (buffer.getLengthInBits() >= totalDataCount * 8)
                    break;
                buffer.put(QRCodeModel.PAD1, 8);
            }
            return QRCodeModel.createBytes(buffer, rsBlocks);
        };
        QRCodeModel.createBytes = function (buffer, rsBlocks) {
            var offset = 0, maxDcCount = 0, maxEcCount = 0, dcdata = new Array(rsBlocks.length), ecdata = new Array(rsBlocks.length);
            for (var r = 0; r < rsBlocks.length; r++) {
                var dcCount = rsBlocks[r].dataCount, ecCount = rsBlocks[r].totalCount - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount), maxEcCount = Math.max(maxEcCount, ecCount), dcdata[r] = new Array(dcCount);
                for (var i = 0; i < dcdata[r].length; i++)
                    dcdata[r][i] = 255 & buffer.buffer[i + offset];
                offset += dcCount;
                var rsPoly = qr.QRUtil.getErrorCorrectPolynomial(ecCount), rawPoly = new qr.QRPolynomial(dcdata[r], rsPoly.getLength() - 1), modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i++) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
                }
            }
            var totalCodeCount = 0;
            for (var i = 0; i < rsBlocks.length; i++)
                totalCodeCount += rsBlocks[i].totalCount;
            var data = new Array(totalCodeCount), index = 0;
            for (var i = 0; i < maxDcCount; i++)
                for (var r = 0; r < rsBlocks.length; r++)
                    i < dcdata[r].length && (data[index++] = dcdata[r][i]);
            for (var i = 0; i < maxEcCount; i++)
                for (var r = 0; r < rsBlocks.length; r++)
                    i < ecdata[r].length && (data[index++] = ecdata[r][i]);
            return data;
        };
        ////
        QRCodeModel.PAD0 = 236;
        QRCodeModel.PAD1 = 17;
        return QRCodeModel;
    }());
    qr.QRCodeModel = QRCodeModel;
    __reflect(QRCodeModel.prototype, "qr.QRCodeModel");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRErrorCorrectLevel = (function () {
        function QRErrorCorrectLevel() {
        }
        QRErrorCorrectLevel.L = 1;
        QRErrorCorrectLevel.M = 0;
        QRErrorCorrectLevel.Q = 3;
        QRErrorCorrectLevel.H = 2;
        return QRErrorCorrectLevel;
    }());
    qr.QRErrorCorrectLevel = QRErrorCorrectLevel;
    __reflect(QRErrorCorrectLevel.prototype, "qr.QRErrorCorrectLevel");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMaskPattern = (function () {
        function QRMaskPattern() {
        }
        QRMaskPattern.PATTERN000 = 0;
        QRMaskPattern.PATTERN001 = 1;
        QRMaskPattern.PATTERN010 = 2;
        QRMaskPattern.PATTERN011 = 3;
        QRMaskPattern.PATTERN100 = 4;
        QRMaskPattern.PATTERN101 = 5;
        QRMaskPattern.PATTERN110 = 6;
        QRMaskPattern.PATTERN111 = 7;
        return QRMaskPattern;
    }());
    qr.QRMaskPattern = QRMaskPattern;
    __reflect(QRMaskPattern.prototype, "qr.QRMaskPattern");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMath = (function () {
        function QRMath() {
        }
        QRMath.glog = function (n) {
            if (!QRMath.isInit) {
                QRMath.init();
            }
            if (n < 1)
                console.log("错误:n=" + n);
            return QRMath.LOG_TABLE[n];
        };
        QRMath.gexp = function (n) {
            if (!QRMath.isInit) {
                QRMath.init();
            }
            while (n < 0)
                n += 255;
            while (n >= 256)
                n -= 255;
            return QRMath.EXP_TABLE[n];
        };
        QRMath.init = function () {
            QRMath.isInit = true;
            for (var i = 0; i < 8; i++)
                QRMath.EXP_TABLE[i] = 1 << i;
            for (var i = 8; i < 256; i++)
                QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
            for (var i = 0; i < 255; i++)
                QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
        };
        QRMath.EXP_TABLE = new Array(256);
        QRMath.LOG_TABLE = new Array(256);
        return QRMath;
    }());
    qr.QRMath = QRMath;
    __reflect(QRMath.prototype, "qr.QRMath");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMode = (function () {
        function QRMode() {
        }
        QRMode.MODE_NUMBER = 1;
        QRMode.MODE_ALPHA_NUM = 2;
        QRMode.MODE_8BIT_BYTE = 4;
        QRMode.MODE_KANJI = 8;
        return QRMode;
    }());
    qr.QRMode = QRMode;
    __reflect(QRMode.prototype, "qr.QRMode");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRPolynomial = (function () {
        function QRPolynomial(num, shift) {
            if (num.length == undefined)
                throw new Error(num.length + "/" + shift);
            var offset = 0;
            while (offset < num.length && num[offset] == 0)
                offset++;
            this.num = new Array(num.length - offset + shift);
            for (var i = 0; i < num.length - offset; i++)
                this.num[i] = num[i + offset];
        }
        QRPolynomial.prototype.get = function (index) {
            return this.num[index];
        };
        QRPolynomial.prototype.getLength = function () {
            return this.num.length;
        };
        QRPolynomial.prototype.multiply = function (e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++)
                for (var j = 0; j < e.getLength(); j++)
                    num[i + j] ^= qr.QRMath.gexp(qr.QRMath.glog(this.get(i)) + qr.QRMath.glog(e.get(j)));
            return new QRPolynomial(num, 0);
        };
        QRPolynomial.prototype.mod = function (e) {
            if (this.getLength() - e.getLength() < 0)
                return this;
            var ratio = qr.QRMath.glog(this.get(0)) - qr.QRMath.glog(e.get(0)), num = new Array(this.getLength());
            for (var i = 0; i < this.getLength(); i++)
                num[i] = this.get(i);
            for (var i = 0; i < e.getLength(); i++)
                num[i] ^= qr.QRMath.gexp(qr.QRMath.glog(e.get(i)) + ratio);
            return (new QRPolynomial(num, 0)).mod(e);
        };
        return QRPolynomial;
    }());
    qr.QRPolynomial = QRPolynomial;
    __reflect(QRPolynomial.prototype, "qr.QRPolynomial");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRRSBlock = (function () {
        function QRRSBlock(totalCount, dataCount) {
            this.totalCount = totalCount;
            this.dataCount = dataCount;
        }
        QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
            var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
            if (rsBlock == undefined)
                throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
            var length = rsBlock.length / 3, list = [];
            for (var i = 0; i < length; i++) {
                var count = rsBlock[i * 3 + 0], totalCount = rsBlock[i * 3 + 1], dataCount = rsBlock[i * 3 + 2];
                for (var j = 0; j < count; j++)
                    list.push(new QRRSBlock(totalCount, dataCount));
            }
            return list;
        };
        QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
            switch (errorCorrectLevel) {
                case qr.QRErrorCorrectLevel.L:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case qr.QRErrorCorrectLevel.M:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case qr.QRErrorCorrectLevel.Q:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case qr.QRErrorCorrectLevel.H:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                    return undefined;
            }
        };
        return QRRSBlock;
    }());
    qr.QRRSBlock = QRRSBlock;
    __reflect(QRRSBlock.prototype, "qr.QRRSBlock");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRUtil = (function () {
        function QRUtil() {
        }
        QRUtil.getBCHTypeInfo = function (data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0)
                d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        };
        QRUtil.getBCHTypeNumber = function (data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0)
                d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            return data << 12 | d;
        };
        QRUtil.getBCHDigit = function (data) {
            var digit = 0;
            while (data != 0)
                digit++, data >>>= 1;
            return digit;
        };
        QRUtil.getPatternPosition = function (typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        };
        QRUtil.getMask = function (maskPattern, i, j) {
            switch (maskPattern) {
                case qr.QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;
                case qr.QRMaskPattern.PATTERN001:
                    return i % 2 == 0;
                case qr.QRMaskPattern.PATTERN010:
                    return j % 3 == 0;
                case qr.QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;
                case qr.QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                case qr.QRMaskPattern.PATTERN101:
                    return i * j % 2 + i * j % 3 == 0;
                case qr.QRMaskPattern.PATTERN110:
                    return (i * j % 2 + i * j % 3) % 2 == 0;
                case qr.QRMaskPattern.PATTERN111:
                    return (i * j % 3 + (i + j) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + maskPattern);
            }
        };
        QRUtil.getErrorCorrectPolynomial = function (errorCorrectLength) {
            var a = new qr.QRPolynomial([1], 0);
            for (var i = 0; i < errorCorrectLength; i++)
                a = a.multiply(new qr.QRPolynomial([1, qr.QRMath.gexp(i)], 0));
            return a;
        };
        QRUtil.getLengthInBits = function (mode, type) {
            if (1 <= type && type < 10)
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 10;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case qr.QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + mode);
                }
            else if (type < 27)
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 12;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case qr.QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode);
                }
            else {
                if (!(type < 41))
                    throw new Error("type:" + type);
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 14;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case qr.QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + mode);
                }
            }
        };
        QRUtil.getLostPoint = function (qrCode) {
            var moduleCount = qrCode.getModuleCount(), lostPoint = 0;
            for (var row = 0; row < moduleCount; row++)
                for (var col = 0; col < moduleCount; col++) {
                    var sameCount = 0, dark = qrCode.isDark(row, col);
                    for (var r = -1; r <= 1; r++) {
                        if (row + r < 0 || moduleCount <= row + r)
                            continue;
                        for (var c = -1; c <= 1; c++) {
                            if (col + c < 0 || moduleCount <= col + c)
                                continue;
                            if (r == 0 && c == 0)
                                continue;
                            dark == qrCode.isDark(row + r, col + c) && sameCount++;
                        }
                    }
                    sameCount > 5 && (lostPoint += 3 + sameCount - 5);
                }
            for (var row = 0; row < moduleCount - 1; row++)
                for (var col = 0; col < moduleCount - 1; col++) {
                    var count = 0;
                    qrCode.isDark(row, col) && count++, qrCode.isDark(row + 1, col) && count++, qrCode.isDark(row, col + 1) && count++, qrCode.isDark(row + 1, col + 1) && count++;
                    if (count == 0 || count == 4)
                        lostPoint += 3;
                }
            for (var row = 0; row < moduleCount; row++)
                for (var col = 0; col < moduleCount - 6; col++)
                    qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6) && (lostPoint += 40);
            for (var col = 0; col < moduleCount; col++)
                for (var row = 0; row < moduleCount - 6; row++)
                    qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col) && (lostPoint += 40);
            var darkCount = 0;
            for (var col = 0; col < moduleCount; col++)
                for (var row = 0; row < moduleCount; row++)
                    qrCode.isDark(row, col) && darkCount++;
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            return lostPoint += ratio * 10, lostPoint;
        };
        QRUtil.prototype.static_isSupportCanvas = function () {
            return typeof CanvasRenderingContext2D != "undefined";
        };
        QRUtil._getTypeNumber = function (sText, nCorrectLevel) {
            var nType = 1;
            var length = QRUtil._getUTF8Length(sText);
            for (var i = 0, len = QRUtil.QRCodeLimitLength.length; i <= len; i++) {
                var nLimit = 0;
                switch (nCorrectLevel) {
                    case qr.QRErrorCorrectLevel.L:
                        nLimit = QRUtil.QRCodeLimitLength[i][0];
                        break;
                    case qr.QRErrorCorrectLevel.M:
                        nLimit = QRUtil.QRCodeLimitLength[i][1];
                        break;
                    case qr.QRErrorCorrectLevel.Q:
                        nLimit = QRUtil.QRCodeLimitLength[i][2];
                        break;
                    case qr.QRErrorCorrectLevel.H:
                        nLimit = QRUtil.QRCodeLimitLength[i][3];
                        break;
                }
                if (length <= nLimit) {
                    break;
                }
                else {
                    nType++;
                }
            }
            if (nType > QRUtil.QRCodeLimitLength.length) {
                throw new Error("Too long data");
            }
            return nType;
        };
        QRUtil._getUTF8Length = function (sText) {
            var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
            return replacedText.length + (replacedText.length != sText ? 3 : 0);
        };
        QRUtil.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
        QRUtil.G15 = 1335;
        QRUtil.G18 = 7973;
        QRUtil.G15_MASK = 21522;
        ///////////////////////////
        QRUtil.QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        return QRUtil;
    }());
    qr.QRUtil = QRUtil;
    __reflect(QRUtil.prototype, "qr.QRUtil");
})(qr || (qr = {}));
var xLoader = (function () {
    function xLoader() {
    }
    xLoader.init = function () {
        if (xLoader.isInit)
            return;
        xLoader.isInit = true;
        RES.setMaxLoadingThread(8);
        RES.setMaxRetryTimes(3);
        xLoader.loadQueue = [];
        xLoader.currentLoading = null;
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, xLoader.onConfigComplete, xLoader);
        RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR, xLoader.onConfigError, xLoader);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, xLoader.onGroupProgress, xLoader);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, xLoader.onGroupComplete, xLoader);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, xLoader.onGroupError, xLoader);
    };
    xLoader.onConfigComplete = function (conf) {
        var callback = xLoader.currentLoading[3];
        var callBackThisObj = xLoader.currentLoading[5];
        if (callBackThisObj && callback)
            callback.apply(callBackThisObj, [["loadConfigComplete", conf]]);
        xLoader.loadNext();
    };
    xLoader.onConfigError = function (e) {
        var callback = xLoader.currentLoading[4];
        var callBackThisObj = xLoader.currentLoading[5];
        if (callBackThisObj && callback)
            callback.apply(callBackThisObj, [["loadConfigError", e]]);
    };
    xLoader.onGroupProgress = function (e) {
        if (e.groupName == "RES__CONFIG") {
            return;
        }
        var callback = xLoader.currentLoading[2];
        var callBackThisObj = xLoader.currentLoading[5];
        if (callBackThisObj && callback)
            callback.apply(callBackThisObj, [["onResourceProgress", e]]);
    };
    xLoader.onGroupComplete = function (e) {
        var callback = xLoader.currentLoading[3];
        var callBackThisObj = xLoader.currentLoading[5];
        if (callBackThisObj && callback)
            callback.apply(callBackThisObj, [["onResourceLoadComplete", e]]);
        xLoader.loadNext();
    };
    xLoader.onGroupError = function (e) {
        var callback = xLoader.currentLoading[4];
        var callBackThisObj = xLoader.currentLoading[5];
        if (callBackThisObj && callback)
            callback.apply(callBackThisObj, [["onResourceLoadError", e]]);
    };
    xLoader.loadNext = function () {
        xLoader.currentLoading = null;
        if (xLoader.loadQueue.length == 0)
            return;
        xLoader.currentLoading = xLoader.loadQueue.shift();
        var type = xLoader.currentLoading[0];
        if (type == "config") {
            RES.loadConfig(xLoader.currentLoading[1], xLoader.currentLoading[2]);
        }
        else if (type == "group") {
            RES.loadGroup(xLoader.currentLoading[1]);
        }
    };
    xLoader.loadConfig = function (url, resourceRoot, callBackThisObj, onComplete, onError) {
        if (callBackThisObj === void 0) { callBackThisObj = null; }
        if (onComplete === void 0) { onComplete = null; }
        if (onError === void 0) { onError = null; }
        if (xLoader.currentLoading != null) {
            xLoader.loadQueue.push(["config", url, resourceRoot, onComplete, onError, callBackThisObj]);
        }
        else {
            xLoader.currentLoading = ["config", url, resourceRoot, onComplete, onError, callBackThisObj];
            lzm.HttpClient.send(url, {}, function (data) {
                var conf = JSON.parse(data);
                RES.parseConfig(conf, resourceRoot);
                xLoader.onConfigComplete(conf);
            });
        }
    };
    xLoader.loadGroup = function (group, callBackThisObj, onProgress, onComplete, onError) {
        if (callBackThisObj === void 0) { callBackThisObj = null; }
        if (onProgress === void 0) { onProgress = null; }
        if (onComplete === void 0) { onComplete = null; }
        if (onError === void 0) { onError = null; }
        if (xLoader.currentLoading != null) {
            xLoader.loadQueue.push(["group", group, onProgress, onComplete, onError, callBackThisObj]);
        }
        else {
            xLoader.currentLoading = ["group", group, onProgress, onComplete, onError, callBackThisObj];
            RES.loadGroup(group);
        }
    };
    return xLoader;
}());
__reflect(xLoader.prototype, "xLoader");
