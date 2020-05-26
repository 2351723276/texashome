module kelvin.texas {
    export class RandomUtils {


        public static getRandomIntBetween(a: number, b: number, toInt: boolean = true): number {
            if (toInt) {
                return parseInt((a + (b - a) * Math.random()).toString());
            } else {
                return a + (b - a) * Math.random();
            }

        }
        /**
    * 获取一个区间的随机数
    * @param $from 最小值
    * @param $end 最大值
    * @returns {number}
    */
        public static limit($from: number, $end: number): number {
            $from = Math.min($from, $end);
            $end = Math.max($from, $end);
            var range: number = $end - $from;
            return $from + Math.random() * range;
        }

        /**
         * 获取一个区间的随机数(帧数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        public static limitInteger($from: number, $end: number): number {
            return Math.round(this.limit($from, $end));
        }

        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */
        public randomArray(arr: Array<any>): any {
            var index: number = Math.floor(Math.random() * arr.length);
            return arr[index];
        }

        /**生成一随机数列数组 */
        public static getArray(count: number, maxs: number, mins: number): number[] {
            var array = new Array();

            while (array.length < count) {
                var temp = RandomUtils.getRandom(maxs, mins);
                if (RandomUtils.search(array, temp) != true)
                    array.push(temp);
            }
            return array;

        }
        public static getRandom(maxs: number, mins: number): number {
            return Math.round(Math.random() * (maxs - mins)) + mins;

        }
        public static search(array: number[], num: number) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == num) {
                    return true;
                }
            }
        }

        //js 生成唯一标识
        public static guid(): string {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

    }


}