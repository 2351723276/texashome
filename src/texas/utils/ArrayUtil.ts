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
 * 数组方法
 */


module kelvin.texas {
    export class ArrayUtil {


        /**
         * a包含b ps：b是不断变化的  
         * @param 
         */
        static isContained(a: any[], b: any[]): boolean {
            if (!(a instanceof Array) || !(b instanceof Array)) return false;
            if (a.length < b.length) return false;
            var aStr = a.toString();
            for (var i = 0, len = b.length; i < len; i++) {
                if (aStr.indexOf(b[i]) == -1) return false;
            }
            return true;
        }




        /**
         * 根据数组中对象的key值，给数组重新排位置，升序排
         * @param key 数组元素对象的key
         */

        public static AscendingArray(key: string, arr: any[]): void {
            function compare(property) {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            }
            arr.sort(compare(key));
        }



        /**
         * 给游戏数据排序
         * 
         */

        public static sortGameData(arr: SngInfoIF[]): SngInfoIF[] {

            let signedarr: SngInfoIF[] = [];  //已报名


            let nosignarr: SngInfoIF[] = [];  //尚未报名
            for (let i = 0; i < arr.length; i++) {//先得到已经报名的数组
                if (arr[i].signed == 1 || arr[i].signed == 3) {
                    signedarr.push(arr[i]);
                } else {
                    nosignarr.push(arr[i]);
                }
            }

            ArrayUtil.AscendingArray("start_time", signedarr);
            ArrayUtil.AscendingArray("start_time", nosignarr);

            let newarr: SngInfoIF[] = [];
            for (let i = 0; i < signedarr.length; i++) {
                newarr.push(signedarr[i]);
            }

            for (let i = 0; i < nosignarr.length; i++) {
                newarr.push(nosignarr[i]);
            }

            return newarr;

        }


    }
}