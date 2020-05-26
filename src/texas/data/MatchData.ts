/**
 * 
 * 
 * 
 * 
 * 
 * 比赛数据缓存
 */

module kelvin.texas {
    export class MatchData {


        public static getNowMatchId(): number {
            return CacheData.getRAMData("NowMatchId");
        }

        public static putNowMatchId(id: number): void {
            CacheData.saveRAMData("NowMatchId", id);
        }


        //个人道具的缓存
        public static getUserPropInfo(): any {
            return CacheData.getRAMData("UserPropInfo");
        }

        public static putUserPropInfo(data: any): any {
            CacheData.saveRAMData("UserPropInfo", data);
        }

    }
}

