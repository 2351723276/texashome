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


module kelvin.texas {

    export class GameBsqxView extends BasePanel {

        public constructor(matchid: string, reward: number, min_reward: number, mz_level: number, iswatch: number, apply_max_mz_level: number) {
            super();

            this.iswatch = iswatch;

            this.matchid = matchid;

            this.reward = reward;

            this.min_reward = min_reward;

            this.mz_level = mz_level;

            this.apply_max_mz_level = apply_max_mz_level;

            this.createGameScene();
        }


        private iswatch: number;

        private matchid: string;

        private reward: number;

        private min_reward: number;

        private mz_level: number;

        private apply_max_mz_level: number;


        private chooseSsxqBtn: starlingswf.SwfButton;

        private choosePzsBtn: starlingswf.SwfButton;

        private unchooseSsxq: egret.TextField;

        private unchoosePzs: egret.TextField;

        private view: starlingswf.SwfSprite;
        private bgSp: egret.Sprite;
        private bg: egret.Bitmap;


        private lineImg: egret.Bitmap;



        private createGameScene(): void {
            this.view = <starlingswf.SwfSprite>this.$children[0];

            this.visible = false;

            this.bgSp = Tool.createRectSprite(App.stageWidth, App.stageHeight, 0x000000, 0, 0, 0.7);
            this.addChildAt(this.bgSp, 0);
            this.bgSp.touchEnabled = true;
            this.bgSp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);

            this.bg.touchEnabled = true;


            this.chooseSsxqBtn.visible = false;

            this.unchoosePzs.visible = false;

            MatchApi.getMatchInfo(String(this.matchid), this.getSpData.bind(this));


        }

        private spData: MatchMaxInfoIF;

        private bsxqUI: GameBsxqUI;

        private pzsUI: GamePzsUI;

        private getSpData(data): void {

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
            

            this.bsxqUI = new GameBsxqUI(this.spData);
            this.view.addChild(this.bsxqUI);
            this.bsxqUI.y = 130;



            this.pzsUI = new GamePzsUI(this.spData, this.iswatch);
            this.view.addChild(this.pzsUI);
            this.pzsUI.y = 110;
            this.pzsUI.visible = false;

        }


        public show(): void {
            this.view.anchorOffsetY = this.view.height;

            this.view.y = App.stageHeight;
            this.view.x = -this.view.width;
            this.visible = true;
            this.view.scaleX = this.view.scaleY = ExtGameHelper.getGameScalex();
            egret.Tween.get(this.view).to({ x: 0 }, 250, egret.Ease.quartOut).call(() => {


            });

        }

        public hide(): void {
            egret.Tween.get(this.view).to({ x: -this.view.width }, 250, egret.Ease.quartOut).call(() => {
                this.dispose();
            });
        }

        public on_chooseSsxqBtn(e: egret.TouchEvent): void {
            this.chooseSsxqBtn.visible = false;
            this.choosePzsBtn.visible = true;
            this.unchooseSsxq.visible = true;
            this.unchoosePzs.visible = false;

            this.bsxqUI.visible = true;
            this.lineImg.visible = true;
            this.pzsUI.visible = false;

        }


        public on_choosePzsBtn(e: egret.TouchEvent): void {
            this.chooseSsxqBtn.visible = true;
            this.choosePzsBtn.visible = false;
            this.unchooseSsxq.visible = false;
            this.unchoosePzs.visible = true;


            this.bsxqUI.visible = false;
            this.lineImg.visible = false;
            this.pzsUI.visible = true;
        }

        public mainAssetName(): string {
            return "spr_game_ssxq_view";
        }



        public dispose(): void {
            super.dispose();


        }




    }
}
