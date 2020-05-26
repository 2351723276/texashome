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
 * 
 * 字符串工具
 */


namespace kelvin.texas {

    export class StrUtil {
      


        /**
         * 将数字转化为中文大写
         */
        public static number_chinese(str) {
            let num: string = String(str);
            let strOutput = "",
                strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
            //  strUnit = '仟佰拾亿仟佰拾万仟佰拾';
            num += "00";
            let intPos = num.indexOf('.');
            if (intPos >= 0) {
                num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
            }
            strUnit = strUnit.substr(strUnit.length - num.length);
            for (let i = 0; i < num.length; i++) {
                strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(Number(num.substr(i, 1)), 1) + strUnit.substr(i, 1);
            }
            let result = strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
            return result.replace("整", "").replace("元", "");


        }

        /**
        * 名字截取一部分  ps:只支持英文，中文，数字
        * @param length 截取长度 ，中文一个 ，英文半个  addstr  要加在后面的字符串
        */
        public static cutOutName(str: string | number, length: number = 6, addstr: string = ""): string {
            let re = new RegExp("^[a-zA-Z0-9]+$");
            //要包含数字的话是 new RegExp("^[a-zA-Z0-9]+$"); 
            let name = String(str);
            let nameArr = name.split('');
            let numlength: number = 0;
            let chinesenum: number = 0;
            let englishnum: number = 0;
            for (let i = 0; i < nameArr.length; i++) {


                if (re.test(nameArr[i])) {
                    numlength = numlength + 1;
                    if (numlength <= length * 2) {
                        englishnum++;
                    }
                }
                else {
                    numlength = numlength + 2;
                    if (numlength <= length * 2) {
                        chinesenum++;
                    }
                }

            }



            let num = Math.floor((chinesenum + englishnum));

            name = name.slice(0, num) + addstr;

            return name
        }

        /**
         * 
         * 返回字符串的实际长度, 一个汉字算2个长度 
         */
        public static getNumByStr(str: string): number {
            return str.replace(/[^\x00-\xff]/g, "**").length;

        }





        /**
         * 
         * 判断字符串是否只包含中文和英文
         */

        public static judgeOnlyContainEAndC(str: string): boolean {
            let result: boolean = true;
            let strArr = str.split('');

            for (let i = 0; i < strArr.length; i++) {

                if (/^[\u4e00-\u9fa5]/.test(strArr[i]) || /^[a-zA-Z]/.test(strArr[i]) || /\d+/.test(strArr[i])) {

                } else {
                    result = false;
                    return result;
                }
            }
            return result;
        }




        /**判断是否是手机号**/
        public static isPhoneNumber(tel: string): boolean {
            // var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
            // var reg = /^1[3456789]\d{9}$/
            let reg = /^1[3456789]\d{9}$/;
            return reg.test(tel);
            // return true;
        }

        /**判断非法字符串 */
        public static isHaveIllegal(str: string): boolean {
            var pat = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]", "i");

            return pat.test(str);

        }

        /**判断是否为正整数 */
        public static isPositiveInteger(str: string): boolean {
            return (/(^[1-9]\d*$)/.test(str));
        }






    }
}