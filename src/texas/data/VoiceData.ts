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



module kelvin.texas {
    export class VoiceData {



        public static set musicNum(num: number) {
            egret.localStorage.setItem("VoiceData_musicNum", String(num));
            // console.log("设置消息开关：", num);
        }

        //得到音乐大小ps: 0是关闭   1是打开
        public static get musicNum(): number {
            let num = egret.localStorage.getItem("VoiceData_musicNum");
            if (num == null) {
                num = "1";
            }
            // console.log("设置消息开关：", num);
            return Number(num);
        }


        public static set soundNum(num: number) {
            egret.localStorage.setItem("VoiceData_soundNum", String(num));
            // console.log("设置游戏开关：", num);
        }


        //得到音效大小ps: 0是关闭   1是打开 
        public static get soundNum(): number {
            let num = egret.localStorage.getItem("VoiceData_soundNum");
            if (num == null) {
                num = "1";
            }
            // console.log("设置游戏开关：", num);
            return Number(num);
        }




    }
}