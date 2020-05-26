/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 比赛接口
 * 
 */

module kelvin.texas {
    export class MatchApi extends BaseApi {



        //获取比赛列表
        public static getMatchList(type1: number, type: string, callBack: Function): void {
            var pars: any = { "api": "match", "c": "getMatchList", "type": type, "type1": type1 };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }

        //获取比赛列表

        public static getMatchListWithType1(type1: number, title_id: string, callBack: Function): void {
            var pars: any = { "api": "match", "c": "getMatchListWithType1", "title_id": title_id, "type1": type1 };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }


        //获取比赛详情	
        public static getMatchInfo(mid: string, callBack: Function): void {
            var pars: any = { "api": "match", "c": "getMatchInfo", "mid": mid };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }




        //获取比赛的房间数据	
        public static getMatchRooms(mid: string, callBack: Function): void {
            var pars: any = { "api": "match", "c": "getMatchRooms", "mid": mid };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }


        //报名

        public static apply(id: string, callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "apply", "id": id };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }

        //取消报名
        public static cancelApply(id: string, callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "cancelApply", "id": id };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }



        //获取我的比赛
        public static getMyMatch(callBack: Function): void {
            let pars: any = { "api": "match", "c": "getMyMatch", };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }

        //分页获取比赛玩家	
        public static getMatchRoleInfo(page: number, mid: string, callBack: Function): void {
            let pars: any = { "api": "match", "c": "getMatchRoleInfo", page: page, mid: mid };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }

        //获取房间玩家信息	
        public static getMatchRoomRoleInfo(room_id: number, callBack: Function): void {
            let pars: any = { "api": "match", "c": "getMatchRoomRoleInfo", room_id: room_id };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, null);
        }



        //获取单个玩家比赛数据
        public static getPlayerInfo(uid: string, mid: string, callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "getPlayerInfo", uid: uid, mid: mid };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }


        //获取实时战绩
        public static getShiShiZhanJi(mid: string, callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "getShiShiZhanJi", mid: mid };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }

        //获取玩家战绩

        public static getRoleZhanJi(callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "getRoleZhanJi" };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }


        //获取比赛战绩	
        public static getMatchZhanji(id: string, callBack: Function, error?: Function): void {
            let pars: any = { "api": "match", "c": "getMatchZhanji", id: id };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }


        //获取大师分排名
        public static getMasterPoints(callBack: Function, error?: Function) {
            let pars: any = { "api": "match", "c": "getMasterPoints" };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }


        //获得标题
        public static getTitleConfig(type1: number, callBack: Function, error?: Function) {
            let pars: any = { "api": "match", "c": "getTitleConfig", type1: type1 };
            BaseApi.requestLogic(pars, function (data: any) {
                if (callBack != null) callBack(data);
            }, error);
        }



        //获得道具信息
        public static getPlayerProps(callBack: Function, error?: Function) {
            let pars: any = { "api": "match", "c": "getPlayerProps" };
            BaseApi.requestLogic(pars, function (data: any) {
                let info = {
                    configs: data.configs,
                    data: data.data,
                }
           
                
                MatchData.putUserPropInfo(info);
                if (callBack != null) callBack(data);
            }, error);
        }

    }

}