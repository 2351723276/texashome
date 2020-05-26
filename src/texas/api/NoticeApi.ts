/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 公告Api
 */
module kelvin.texas {
    export class NoticeApi extends BaseApi {


        //获取公告	
        public static getNotices(callBack: Function): void {
            var pars: any = { "api": "notice", "c": "getNotices" };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }


        //获取活动公告		
        public static getActivityNotices(callBack: Function): void {
            var pars: any = { "api": "notice", "c": "getActivityNotices" };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }



    }
}
