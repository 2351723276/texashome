/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 登录方法
 */








module kelvin.texas {

    export class LoginUtil {

        public static login(account: string, password: string, loginscene: LoginView, success?: Function, errback?: Function): void {
            UserApi.login(account, password, function (data: any): void {
                App.heart();
                loginscene.gotoPanel(new MainPanel());
                lzm.Alert.closeAllAlert();
                AccountData.isNeedAutomaticLogin = "2";
                if(success){
                    success();
                }
            }, errback);
        }

    }



}