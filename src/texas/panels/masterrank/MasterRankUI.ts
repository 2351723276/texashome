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

module kelvin.texas {

    export class MasterRankUI extends BasePanel {
        public constructor() {
            super(true);


            this.createGameScene();

        }



        private blueBg: egret.Bitmap;




        private createGameScene(): void {

            this.scrollView.setShowSize(this.width, this.height - 52 - 63 - 20);
            this.scrollView.y = 52 + 10;
            this.addChild(this.scrollView);

        }


        private data: MasterRankIF[];


        private spArr: egret.Sprite[];

        public createUi(data: MasterRankIF[]): void {
            this.data = data;

            this.spArr = [];

            for (let i = 0; i < this.data.length; i++) {
                let minsp: egret.Sprite = new egret.Sprite();
                if (this.data[i].rank == 1) {
                    let img = Tool.createBitmapByName("img_img_zjixiangq_jinbei", false, 10, 7);
                    minsp.addChild(img);
                } else if (this.data[i].rank == 2) {
                    let img = Tool.createBitmapByName("img_img_zjixiangq_yingbei", false, 10, 7);
                    minsp.addChild(img);
                } else if (this.data[i].rank == 3) {
                    let img = Tool.createBitmapByName("img_img_zjixiangq_tongbei", false, 10, 7);
                    minsp.addChild(img);
                } else {
                    let ranktxt = Tool.createTextFiled(30, 15, 100, 40, "" + this.data[i].rank, 20, 0xffffff, "left");
                    minsp.addChild(ranktxt);
                }

                let nameTxt = Tool.createTextFiled(70, 15, 200, 40, this.data[i].name, 20, 0xffffff, "center");
                minsp.addChild(nameTxt);

                let scoreTxt = Tool.createTextFiled(215, 15, 200, 40, "" + this.data[i].score, 20, 0xffffff, "center");
                minsp.addChild(scoreTxt);

                let timeTxt = Tool.createTextFiled(350, 15, 200, 40, this.data[i].time, 20, 0xffffff, "right");
                minsp.addChild(timeTxt);

                let line = Tool.createBitmapByName("img_img_dzpyq_dsphb_line", false, 10, 70);
                minsp.addChild(line);

                minsp.y = i * 70;

                this.scrollView.container.addChild(minsp);
                this.spArr.push(minsp);
          

            }

            this.scrollView.setScrollSize(this.width, this.data.length * 70);

        }


        private selfSp: egret.Sprite;
        public createSelfUI(data: MasterRankIF): void {

            this.selfSp = new egret.Sprite();

            if (data.rank == 1) {
                let img = Tool.createBitmapByName("img_img_zjixiangq_jinbei", false, 10, 7);
                this.selfSp.addChild(img);
            } else if (data.rank == 2) {
                let img = Tool.createBitmapByName("img_img_zjixiangq_yingbei", false, 10, 7);
                this.selfSp.addChild(img);
            } else if (data.rank == 3) {
                let img = Tool.createBitmapByName("img_img_zjixiangq_tongbei", false, 10, 7);  
                this.selfSp.addChild(img);
            } else {
                let ranktxt = Tool.createTextFiled(30, 15, 100, 40, "" + data.rank, 20, 0xffffff, "left");
                this.selfSp.addChild(ranktxt);
                if (data.rank == -1) { 
                    ranktxt.text = "未上榜";
                }
            }

            let nameTxt = Tool.createTextFiled(70, 15, 200, 40, data.name, 20, 0xffffff, "center");
            this.selfSp.addChild(nameTxt);

            let scoreTxt = Tool.createTextFiled(215, 15, 200, 40, "" + data.score, 20, 0xffffff, "center");
            this.selfSp.addChild(scoreTxt);

            let timeTxt = Tool.createTextFiled(350, 15, 200, 40, data.time, 20, 0xffffff, "right");
            this.selfSp.addChild(timeTxt);

          
            this.selfSp.y = 640;
            this.addChild(this.selfSp);

        }





        public mainAssetName(): string {
            return "spr_master_rank_ui";
        }


        public dispose(): void {
            super.dispose();
        }

    }
}