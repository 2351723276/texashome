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


module kelvin.texas {

    export class GetPrizePopup extends BasePanel {
        public constructor() {
            super();


            this.createGameScene();

        }

        private goBtn: starlingswf.SwfButton;


        private contentTxt: egret.TextField;

        private createGameScene(): void {

            let text: Array<egret.ITextElement> = [{ text: "你在" },
            { text: AccountData.loginData.lastWcaaReward[0], style: { textColor: 0xD4C90B } },
            { text: "获得第" },
            { text: AccountData.loginData.lastWcaaReward[1], style: { textColor: 0xD4C90B } },
            { text: "名奖金" },
            { text: AccountData.loginData.lastWcaaReward[2], style: { textColor: 0xD4C90B } },
            { text: ",需要登记领奖信息" },]

            this.contentTxt.textFlow = text;

            this.contentTxt.verticalAlign  = "middle";
            this.contentTxt.lineSpacing = 4;
        }



        public on_goBtn(e: egret.TouchEvent): void {
            this.dispose();
            lzm.Alert.alert(new GetPrizeView());


        }

        public mainAssetName(): string {
            return "spr_getprize_popup_view";
        }

        public dispose(): void {
            super.dispose();

        }
    }
}