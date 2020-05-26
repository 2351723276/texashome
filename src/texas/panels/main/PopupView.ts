
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


module kelvin.texas {

    export class PopupView extends BasePanel {

        public constructor() {
            super();

            this.createGameScene();

        }



        private createGameScene(): void {
            // EventManager.registerCmd(Events.createJBSView, this.createJBSView, this);
            // EventManager.registerCmd(Events.createBSXQView, this.createBSXQView, this);
            // EventManager.registerCmd(Events.createMZJGBView, this.createMZJGBView, this);

        }

        private mzjgbView: MzjgbView;
        private createMZJGBView(data: SngInfoIF): void {
            if (this.contains(this.mzjgbView)) {
                Log.log("已经生成锦标赛界面");
                return;
            }

            this.mzjgbView = new MzjgbView(data);
            this.addChild(this.mzjgbView);
            this.mzjgbView.x = App.stageWidth;
            egret.Tween.get(this.mzjgbView).to({ x: 0 }, 300, egret.Ease.quartOut)

        }

        private jsbView: JbsView;
        private createJBSView(): void {
            if (this.contains(this.jsbView)) {
                Log.log("已经生成锦标赛界面");
                return;
            }

            this.jsbView = new JbsView("common");
            this.addChild(this.jsbView);
            this.jsbView.x = App.stageWidth;
            egret.Tween.get(this.jsbView).to({ x: 0 }, 300, egret.Ease.quartOut)

        }



        private bsxqView: BsxqView;

        private createBSXQView(data: SngInfoIF): void {
            if (this.contains(this.bsxqView)) {
                Log.log("已经生成比赛详情界面");
                return;
            }

            this.bsxqView = new BsxqView(data);
            this.addChild(this.bsxqView);
            this.bsxqView.x = App.stageWidth;
            egret.Tween.get(this.bsxqView).to({ x: 0 }, 300, egret.Ease.quartOut)

        }




        public dispose(): void {
            super.dispose();
            EventManager.removeCmd(Events.createJBSView, this.createJBSView, this);
            EventManager.removeCmd(Events.createMZJGBView, this.createMZJGBView, this);
            EventManager.removeCmd(Events.createBSXQView, this.createBSXQView, this);

        }

    }
}