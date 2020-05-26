/**
 * 
 * 
 * 记录一些时间点
 */



module kelvin.texas {
    export class TimeData {


        //公告被关闭的当天时间的0点时间戳
        public static set noticeTime(num: number) {
            egret.localStorage.setItem("TimeData_noticeTime", String(num));

        }


        public static get noticeTime(): number {
            let num = egret.localStorage.getItem("TimeData_noticeTime");
            if (num == null) {
                num = "0";
            }
            return Number(num);
        }
    }
}