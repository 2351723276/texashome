/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 碰撞工具
 */


module kelvin.texas {


    /**
     * 碰撞工具类
     */
    export class CollisionUtils {
        public constructor() {
        }
        //两物品重叠的碰撞判断方式
        public static hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
            var rect1: egret.Rectangle = obj1.getBounds();
            var rect2: egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.parent.localToGlobal(obj1.x, obj1.y).x;
            rect1.y = obj1.parent.localToGlobal(obj1.x, obj1.y).y;
            rect2.x = obj2.parent.localToGlobal(obj2.x, obj2.y).x;
            rect2.y = obj2.parent.localToGlobal(obj2.x, obj2.y).y;
            return rect1.intersects(rect2);
        }
        //点和物品的碰撞判断方式，较为精确及可控
        public static hitTestP(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
            var rect2x: number;
            var rect2y: number;
            rect2x = obj2.x + obj2.width / 2;
            rect2y = obj2.y + obj2.height - obj2.width / 2;
            if (obj1.hitTestPoint(rect2x, rect2y)) {
                return true;
            }
            else
                return false;

        }
        //算出碰撞点
        public static sreatPoints(obj: egret.Sprite) {
            var pointS: egret.Point[] = [];
            var shuSpace: number = 40;  //栅格高大小
            var henSpace: number = 40;  //栅格宽大小
            var shuCount: number = obj.height / shuSpace;
            var henCount: number = obj.width / henSpace;
            for (var shu: number = 0; shu <= shuCount; shu++) {
                for (var hen: number = 0; hen <= henCount; hen++) {
                    var _point: egret.Point = new egret.Point(obj.x + hen * henSpace, obj.y + shu * shuSpace);
                    pointS.push(_point);
                }
            }
            return pointS;
        }

        /**检测两个对象是否碰撞*/
        public static getObjPoint(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
            var Sp: egret.Sprite = new egret.Sprite();
            Sp.addChild(obj1);
            Tool.center(Sp, true);
            Sp.x = Sp.width / 2;
            Sp.y = Sp.height / 2;

            var Sh: egret.Shape = new egret.Shape();
            Sh.graphics.beginFill(0xffffff, 0);
            Sh.graphics.drawRect(0, 0, 20, 20);
            Sh.graphics.endFill();
            Sh.x = Sp.width / 2;
            Sh.y = Sp.height / 2;

            var point: egret.Point = new egret.Point();

            point = Sp.localToGlobal(Sh.x, Sh.y);
            if (point.x > obj2.x && point.x < obj2.x + obj2.width && point.y > obj2.y && point.y < obj2.y + obj2.height) {
                return true;
            } else {
                return false;
            }
        }
    }


}