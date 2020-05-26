module kelvin.texas {
	export class BmTextUtil {

		public static replaceTextfield(textfield:any,font:egret.BitmapFont):egret.BitmapText{
			var bmText:egret.BitmapText = new egret.BitmapText();
			var tf:egret.TextField = textfield;
			bmText.font = font;
			bmText.textAlign = tf.textAlign;
			bmText.text = tf.text;
			bmText.name = tf.name;
			bmText.x = tf.x;
			bmText.y = tf.y;
			bmText.width = tf.width;
			bmText.height = tf.height;
			bmText.anchorOffsetX = tf.anchorOffsetX;
			bmText.anchorOffsetY = tf.anchorOffsetY;

			if(tf.parent != null){
				var index:number = tf.parent.getChildIndex(tf);
				tf.parent.addChildAt(bmText,index);
				tf.parent.removeChild(tf);
			}

			return bmText;
		}

	}
}