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

module kelvin.texas {
    export class PopupContainer extends BasePanel {
        public constructor(view: BasePanel) {
            super();
            this.view = view;
            this.createGameScene();
        }



        private view: BasePanel;
        private bgSp: egret.Sprite;
        private createGameScene(): void {

            this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);
            this.addChildAt(this.bgSp, 0);
            this.bgSp.touchEnabled = true;
            this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);

            this.addChild(this.view);



        }



        private animatypes: number;   //1 从左边出来     2 从右边出来   3从上面出来

        private animatypee: number;   //1往左边回去   2往右边回去  3往上面回去

        public show(animatypes: number, animatypee: number, alpha: number = 0.7): void {

            this.bgSp.alpha = alpha;


            this.animatypes = animatypes;
            this.animatypee = animatypee;

            if (this.animatypes == 1) {
                this.view.anchorOffsetY = this.view.height;

                this.view.y = App.stageHeight;
                this.view.x = -this.view.width;
                this.view.scaleX = this.view.scaleY = ExtGameHelper.getGameScalex();
                egret.Tween.get(this.view).to({ x: 0 }, 250, egret.Ease.quartOut).call(() => {

                }, this);
            } else if (this.animatypes == 2) {
                this.view.anchorOffsetX = this.view.width;
                this.view.anchorOffsetY = this.view.height;

                this.view.y = App.stageHeight;
                this.view.x = App.stageWidth + this.view.width;
                this.view.scaleX = this.view.scaleY = ExtGameHelper.getGameScalex();
                egret.Tween.get(this.view).to({ x: App.stageWidth }, 250, egret.Ease.quartOut).call(() => {

                }, this);
            } else if (this.animatypes == 3) {
                this.view.x = 0;
                this.view.y = -this.view.height;
                egret.Tween.get(this.view).to({ y: 0 }, 250, egret.Ease.quartOut).call(() => {

                }, this);
            }

        }

        public hide(): void {
            if (this.animatypee == 1) {
                egret.Tween.removeTweens(this.view);
                egret.Tween.get(this.view).to({ x: -this.view.width }, 250, egret.Ease.quartOut).call(() => {
                    this.dispose();
                }, this);
            } else if (this.animatypee == 2) {
                egret.Tween.removeTweens(this.view);
                egret.Tween.get(this.view).to({ x: App.stageWidth + this.view.width }, 250, egret.Ease.quartOut).call(() => {
                    this.dispose();
                }, this);
            } else if (this.animatypee == 3) {
                egret.Tween.removeTweens(this.view);
                egret.Tween.get(this.view).to({ y: -this.view.height }, 250, egret.Ease.quartOut).call(() => {
                    this.dispose();
                }, this);
            }

        }



        public dispose(): void {
            super.dispose();

            this.view.dispose();
            this.bgSp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);


        }

    }
}