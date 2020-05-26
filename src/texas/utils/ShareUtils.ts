/**
 * 分享工具
 */

namespace kelvin.texas {

    export class ShareUtils {

        /**
         * 分享带二维码的图片
         * @param display 要分享的图片容器  分享的图片大小和display大小一致
         * @param  type  "session" 分享给好友   "timeline"：分享给朋友圈
         */
        public static shareImgAndCode(display: egret.DisplayObject, type: string = "session"): void {
            AppWx.shareWxImage(display, type);
        }


        /**
         * 得到二维码
         * 
         * @param w 二维码宽
         * @param h 二维码高
         * @param x 二维码x
         * @param y 二维码y
         */
        public static getShareCode(w: number, h: number, x: number = 0, y: number = 0): egret.Sprite {
            let qrCodurl = AppConfig.downUrl + "?recommend=" ;

            let codeImg: egret.Sprite = qr.QRCode.create(qrCodurl, w, h, qr.QRErrorCorrectLevel.M, 8, 0);
            codeImg.x = x;
            codeImg.y = y;

            return codeImg;
        }




    }

}