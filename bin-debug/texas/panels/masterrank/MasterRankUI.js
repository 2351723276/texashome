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
