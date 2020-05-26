module kelvin.texas {
    export class PhoneApi {

        //判断是否绑定
        public static isVert(callBack: Function): any {
            if (PhoneData.phoneNumber != null) {
                if (callBack != null) {
                    callBack(PhoneData.phoneNumber);
                    return;
                }
            }
            let pars: any = { "api": "phone", "c": "isVert" };
            BaseApi.requestLogic(pars, function (data: any) {
                PhoneData.phoneNumber = data.tel;
                if (callBack != null) callBack(PhoneData.phoneNumber);
            }, null);

        }


        //发送验证码
        public static genCode(tel: string, callBack?: Function, self?: any): any {
            let pars: any = { "tel": tel, "api": "phone", "c": "genCode" };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(self, data);
            }, null);
        }


        //绑定手机

        public static vert(tel: string, pwd: string, code: string, callBack: Function, self: any): any {
            let pars: any = { "tel": tel, "pwd": pwd, "code": code, "api": "phone", "c": "vert" };
            BaseApi.requestLogic(pars, function (data: any) {
                PhoneData.phoneNumber =tel;
                ApiState.showText("绑定手机成功");
                if (callBack != null) callBack(self, data);
            }, null);

        }


    }
}