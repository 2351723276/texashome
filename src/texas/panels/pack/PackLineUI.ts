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
module kelvin.texas {

    export class PackLineUI extends BasePanel {
        public constructor(data: PackInfoIF) {
            super();

            this.data = data;
            this.createGameScene();

        }

        private data: PackInfoIF;

        private startTimeTxt: egret.TextField;

        private nameTxt: egret.TextField;
        private typeTxt: egret.TextField;
        private endTimeTxt: egret.TextField;

        private descTxt: egret.TextField;



        private thingImg: egret.Bitmap;


        private ysyBtn: starlingswf.SwfButton;


        private wsyBtn: starlingswf.SwfButton;


        private ygqBtn: starlingswf.SwfButton;



        private createGameScene(): void {

            this.startTimeTxt.text = this.data.startTime;

            this.nameTxt.text = this.data.name;

            this.typeTxt.text = this.data.type;

            this.endTimeTxt.text = this.data.endTime;

            this.descTxt.text = this.data.desc;


            this.ysyBtn.isScale = false;
            this.ygqBtn.isScale = false;
             this.wsyBtn.isScale = false;

            this.wsyBtn.visible =false;

            this.ysyBtn.visible =false;

            this.ygqBtn.visible =false;

            if(this.data.state == 1){
                this.wsyBtn.visible =true;
            }else if(this.data.state == 2){
                this.ysyBtn.visible = true;

            }else if(this.data.state == 3){
                this.ygqBtn.visible = true;
            }

            




            this.createImg();
        }

        private async createImg(): Promise<void> {

        }


        public mainAssetName(): string {
            return "spr_pack_line_ui";
        }

        public dispose(): void {
            super.dispose();

        }
    }
}