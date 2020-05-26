/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * url的工具
 */



module kelvin.texas {

    export class UrlUtil {


        public static getUrlArgStr() {
            var q = location.search.substr(1);
            var qs = q.split('&');
            var argStr = '';
            if (qs) {
                for (var i = 0; i < qs.length; i++) {
                    argStr += qs[i].substring(0, qs[i].indexOf('=')) + '=' + qs[i].substring(qs[i].indexOf('=') + 1) + '&';
                }
            }
            argStr = argStr.slice(0, argStr.length - 1);
         

            return argStr;
        }






    }

}
