//=============================================================================
// Light_WindowBlocks
// Light_WindowBlocks.js
//=============================================================================
//对象创建 初始化
var Light = Light || {};
Light.Windows = Light.Windows || {};
Light.Window = Light.Windows || {};
Light.Parameters = PluginManager.parameters('Light_WindowBlocks');
//全局变量
Light.type = 0;//初始化窗口种类
Light.windowopen = 0;//窗口是否打开
Light.windowcreate = 0;//窗口是否初始化
Light.scenewidth = 100;//窗口宽度
Light.sceneheight = 100;//窗口高度
Light.scenex = 100;//窗口起始x
Light.sceney = 100;//窗口起始y
Light.sceneopacity = 0;//窗口透明度
//按钮全局变量
Light.Window.buttonifclose = 0;//按钮是否关闭
Light.Window.buttontouch = 0;//按钮触发
Light.Window.buttontouchtem = 0;//按钮触发暂时记忆
Light.Window.buttontouchx = 0;//点击的x轴坐标
Light.Window.buttontouchy = 0;//点击的y轴坐标
Light.Window.windowbclose = 0;//按钮全部销毁
//按钮数据
Light.Window.buttonsmax = 0;//按钮总数
Light.Window.buttonstype = new Array();//按钮的类型 1是图片 2是文字
Light.Window.buttons = new Array();//按钮的定义
Light.Window.buttonsX = new Array();//按钮的x轴
Light.Window.buttonsY = new Array();//按钮的y轴
Light.Window.buttonswidth = new Array();//按钮的宽
Light.Window.buttonsheight = new Array();//按钮的高
Light.Window.buttonsimage = new Array();//按钮的图片位置
Light.Window.buttonscalex = new Array();//按钮的图片的缩放x
Light.Window.buttonscaley = new Array();//按钮的图片的缩放y
Light.Window.buttonopacity = new Array();//按钮的不透明度
//文本按钮的数据
Light.Window.buttontext = new Array();//按钮的内容
Light.Window.buttontextsizi = new Array();//文字的大小
Light.Window.buttontextcolor = new Array();//文字的描边颜色
//Light.Window.buttontextcolor2 = new Array();//文字的内部颜色
/*:
 * @plugindesc 苍穹窗口积木插件Alpha v0.1 本插件可以随着使用者的心意自由创建想要的窗口和游戏。
 * @author 苍穹之光
 * @param 你想要的视频宽度
 * @desc 下面填你想要窗口的宽度和高度
 * @default 下面填你窗口视频的宽度和高度
 * @param Screen Width
 * @desc 你想要窗口的宽度
 * Default: 816
 * @default 816
 * @param Screen Height
 * @desc 你想要窗口的高度
 * Default: 624
 * @default 624
 * @help 本插件由苍穹之光制作。
 * 使用方法:1.设置窗口类型Setwindow
 * 2.绘制图形，增加事件
 * 3.呼叫窗口Createwindow
 */
//=============================================================================
//控制窗口
SceneManager._screenWidth  = Number(Light.Parameters['Screen Width'] || 816);
SceneManager._screenHeight = Number(Light.Parameters['Screen Height'] || 624);
SceneManager._boxWidth     = Number(Light.Parameters['Screen Width'] || 816);
SceneManager._boxHeight    = Number(Light.Parameters['Screen Height'] || 624);

Light.Windows.run = SceneManager.run;
SceneManager.run = function(sceneClass) {
    Light.Windows.run.call(this, sceneClass);
	//window.resizeTo(SceneManager._screenWidth, SceneManager._screenHeight);
	if (Utils.isMobileDevice()) return;
    if (Utils.isMobileSafari()) return;
    if (Utils.isAndroidChrome()) return;
		var resizeWidth = Graphics.boxWidth - window.innerWidth;
		var resizeHeight = Graphics.boxHeight - window.innerHeight;
		window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
		window.resizeBy(resizeWidth, resizeHeight);
};
//=============================================================================
//插件命令绑定
Light.Game_Interpreter_pluginCommand =Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = 
    function(command, args) {
      Light.Game_Interpreter_pluginCommand.call(this, command, args);
      if (command === 'Setwindow') {//设置窗口类型 1是新的场景 2是不可移动窗口 3是可移动窗口
	  Light.type = Number(args[0] || 1);
	  if( Light.type>3 || Light.type <1){
		  Light.type = 1;
		}//
		//按钮数据
		Light.Window.buttonsmax = 0;//按钮总数
		Light.Window.buttonstype = new Array();//按钮的类型 1是图片 2是文字
		Light.Window.buttons = new Array();//按钮的定义
		Light.Window.buttonsX = new Array();//按钮的x轴
		Light.Window.buttonsY = new Array();//按钮的y轴
		Light.Window.buttonswidth = new Array();//按钮的宽
		Light.Window.buttonsheight = new Array();//按钮的高
		Light.Window.buttonsimage = new Array();//按钮的图片位置
		Light.Window.buttonscalex = new Array();//按钮的图片的缩放x
		Light.Window.buttonscaley = new Array();//按钮的图片的缩放y
		Light.Window.buttonopacity = new Array();//按钮的不透明度
		//文本按钮的数据
		Light.Window.buttontext = new Array();//按钮的内容
		Light.Window.buttontextsizi = new Array();//文字的大小
		Light.Window.buttontextcolor = new Array();//文字的描边颜色
		//Light.Window.buttontextcolor2 = new Array();//文字的内部颜色
      } else if(command === 'Createwindow'){//创建窗口 12分别是窗口宽高34分别是窗口xy坐标
		  if(Light.type==1){
			  if(Light.windowopen != 1)
			  {
				SceneManager.push(Big_Scene);  
			  }
		  }else if(Light.type==2){
			  if(Light.windowopen != 1)
			  {
				var value = Number(args[0] || 100);
				Light.scenewidth = value;//窗口宽度
				value = Number(args[1] || 100);
				Light.sceneheight = value;//窗口高度
				value = Number(args[2] || 100);
				Light.scenex = value;//窗口起始x
				value = Number(args[3] || 100);
				Light.sceney = value;//窗口起始y
				Light.sceneopacity = 255;
				SceneManager.push(Costum);
			  }
		  }else if(Light.type==3){//12分别是窗口宽高34分别是窗口xy坐标
			if(Light.windowopen != 1)
			{
				var value = Number(args[0] || 100);
				Light.scenewidth = value;//窗口宽度
				value = Number(args[1] || 100);
				Light.sceneheight = value;//窗口高度
				value = Number(args[2] || 100);
				Light.scenex = value;//窗口起始x
				value = Number(args[3] || 100);
				Light.sceney = value;//窗口起始y
				Light.sceneopacity = 255;
			}
		  }
		  Light.windowopen = 1;
	  }else if(command === 'Createbutton'){//创建图形按钮 参数1为按钮的pictures目录下的图片名 参数23为按钮的位置 参数45为图片的宽高 参数6为按钮的不透明度
				Light.Window.buttonsmax = Light.Window.buttonsmax + 1;
				var storage = Light.Window.buttonsmax-1;
			    Light.Window.buttonsimage[storage] = String(args[0]);
				Light.Window.buttonsX[storage] = Number(args[1] || 100);
				Light.Window.buttonsY[storage] = Number(args[2] || 100);
				Light.Window.buttonswidth[storage] = Number(args[3] || 100);
				Light.Window.buttonsheight[storage] = Number(args[4] || 100);
				Light.Window.buttonscalex[storage] = 1;
				Light.Window.buttonscaley[storage] = 1;
				Light.Window.buttonstype[storage] = 1;
				Light.Window.buttonopacity[storage] = Number(args[5] || 255);
				Light.Window.buttontext[storage] = String("Text");
				Light.Window.buttontextsizi[storage] = Number(50);
				Light.Window.buttontextcolor[storage] = String("#FFFFFF");
	  }else if(command === 'Setbuttonscale'){//设置按钮的缩放 参数1为按钮(起始为1) 参数2为拉伸的x轴倍数 参数3为拉伸的y轴倍数
				var storage = Number(args[0])-1;
				Light.Window.buttonscalex[storage] = Number(args[1] || 1);
				Light.Window.buttonscaley[storage] = Number(args[2] || 1);
	  }else if(command === 'Setwindowopacity'){//设置窗口透明度 参数1为透明度 此命令要放在创建窗口命令以后
				Light.sceneopacity = Number(args[0]);
	  }else if(command === 'Setwindowsize'){//设置窗口大小 参数1填宽度 参数2填高度 此命令要放在创建窗口命令以后
				Light.scenewidth = Number(args[0]);//窗口宽度
				Light.sceneheight = Number(args[1]);//窗口高度
	  }else if(command === 'Setwindowxy'){//设置窗口的坐标 参数1为x轴 参数2为y轴
				Light.scenex = Number(args[0]);//窗口起始x
				Light.sceney = Number(args[1]);//窗口起始y
	  }else if(command === 'Setbuttonx'){//设置按钮的x坐标 参数1写按钮的位置 参数2为更改的变量(事件的变量)
				var storage = Number(args[0])-1;
				Light.Window.buttonsX[storage] = $gameVariables.value(Number(args[1]));
	  }else if(command === 'Setbuttony'){//设置按钮的y坐标 参数1写按钮的位置 参数2为更改的变量(事件的变量)
				var storage = Number(args[0])-1;
				Light.Window.buttonsY[storage] = $gameVariables.value(Number(args[1]));
	  }else if(command === 'Closebutton'){//关闭(销毁)按钮 参数1为关闭的按钮
				var storage = Number(args[0])-1;
				Light.Window.buttonifclose = Number(args[0]);
	  }else if(command === 'Buttontouch'){//返回点击的按钮的编号 参数1为返回值变量
				$gameVariables.setValue(Number(args[0]),Light.Window.buttontouch);
				Light.Window.buttontouch = 0;
	  }else if(command === 'Createbuttontext'){//创建文本按钮 参数1为按钮的文本 参数23为按钮的位置 参数45为图片的宽高 6为按钮透明度 7为字体大小
				Light.Window.buttonsmax = Light.Window.buttonsmax + 1;
				var storage = Light.Window.buttonsmax-1;
				Light.Window.buttontext[storage] = String(args[0]);
				Light.Window.buttonsX[storage] = Number(args[1] || 100);
				Light.Window.buttonsY[storage] = Number(args[2] || 100);
				Light.Window.buttonswidth[storage] = Number(args[3] || 100);
				Light.Window.buttonsheight[storage] = Number(args[4] || 100);
				Light.Window.buttonscalex[storage] = 1;
				Light.Window.buttonscaley[storage] = 1;
				Light.Window.buttonstype[storage] = 2;
				Light.Window.buttontextsizi[storage] = Number(args[5] || 50);
				Light.Window.buttonopacity[storage] = Number(args[6] || 255);
				Light.Window.buttontextcolor[storage] = String(args[7] || "#FFFFFF");
	  }else if(command === 'Setbuttonopacity'){//设置按钮透明度 参数1为按钮的位置 参数2为按钮的不透明度
				var storage = Number(args[0])-1;
				Light.Window.buttonopacity[storage] = Number(args[1] || 255);
	  }else if(command === 'Setbuttonsize'){//设置按钮宽高 参数为按钮的位置 参数23为宽高
				var storage = Number(args[0])-1;
				Light.Window.buttonswidth[storage] = Number(args[1] || 100);
			    Light.Window.buttonsheight[storage] = Number(args[2] || 100);
	  }else if(command === 'Setbuttondata'){//设置文本按钮的数据 参数1为文本按钮的位置 参数2为文本的文字大小 参数3为文本的颜色
				var storage = Number(args[0])-1;
				Light.Window.buttontextsizi[storage] = Number(args[1] || 50);
				Light.Window.buttontextcolor[storage] = String(args[2] || "#FFFFFF");
	  }else if(command === 'Setbuttontext'){//设置文本按钮的文本 参数1为文本按钮的位置 参数2为文本
				var storage = Number(args[0])-1;
				var text1 = "";
				var text2 = args.length;
				for(var a=1;a<text2;a++)
				{
					text1 = text1 + args[a];
				}
				Light.Window.buttontext[storage] = String(text1);
	  }else if(command === 'Setbuttonimage'){//改变按钮的图片（需要手动改按钮宽高） 参数1为按钮的位置 参数2为图片名
				var storage = Number(args[0])-1;
				Light.Window.buttonsimage[storage] = String(args[1]);
	  }else if(command === 'Setsvalue'){//设置变量为文本 参数1为变量的id  参数2为文本的内容
				var text1 = "";
				var text2 = args.length;
				for(var a=1;a<text2;a++)
				{
					text1 = text1 + args[a];
				}
				$gameVariables.setValue(Number(args[0]),String(text1));
	  }else if(command === 'Setbuttontext2'){//设置文本（变量方式） 参数1为文本按钮的位置 参数以后为变量id 例如1  2 则代表变量1加上变量2的文本（需要搭配Setsvalue使用）
				var storage = Number(args[0])-1;
				var text1 = "";
				var text2 = args.length;
				for(var a=1;a<text2;a++)
				{
					text1 = text1 + String($gameVariables.value(Number(args[a])));
				}
				Light.Window.buttontext[storage] = String(text1);
	  }else if(command === 'Closewindow'){//关闭窗口
				if(Light.type==3){
					Light.sceneopacity = 0;
					Light.Window.windowbclose = 1;
				}else{
					SceneManager.push(Scene_Map);
				}
		  
	  }else if(command === 'Settouchxy'){//返回点击的点的坐标 参数1为接收的x坐标变量位置 参数2为接收的y坐标变量接收位置
				$gameVariables.setValue(Number(args[1]),Light.Window.buttontouchx);
				$gameVariables.setValue(Number(args[1]),Light.Window.buttontouchy);
				Light.Window.buttontouchx = 0;
				Light.Window.buttontouchy = 0;
	  }else if(command === 'Activationevent'){//激活公共事件
				
	  }else if(command === 'Closeb'){
				
	  }
};
//=============================================================================
//创建窗口
//全景视图
function Big_Scene() {
    this.initialize.apply(this, arguments);
}
Big_Scene.prototype = Object.create(Scene_Base.prototype);
Big_Scene.prototype.constructor = Big_Scene;
Big_Scene.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
}
Big_Scene.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	this._backgroundSprite = new Sprite(null);
	this._backgroundSprite.bitmap = ImageManager.loadPicture("help");
	this._backgroundSprite.x = 0;
	this._backgroundSprite.y = 0;
	
	this._backgroundSprite.width = 100;
	this._backgroundSprite.height = 100;
	
	var c = this._backgroundSprite.width;
	var d = this._backgroundSprite.height;
	
	//this._backgroundSprite.scale.x = Number(a/c);
	//this._backgroundSprite.scale.y = Number(b/d);
	this.addChild(this._backgroundSprite);
};
Big_Scene.prototype.update = function(){
	Scene_Base.prototype.update.call(this);
	
}
//=============================================================================
//创建窗口
//不可移动窗口
function Window_UMovable() {
    this.initialize.apply(this, arguments);
}

Window_UMovable.prototype = Object.create(Window_Base.prototype);
Window_UMovable.prototype.constructor = Window_UMovable;

Window_UMovable.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_UMovable.prototype.windowWidth = function() {
    return Light.scenewidth;
};

Window_UMovable.prototype.windowHeight = function() {
    return Light.sceneheight;
};

Window_UMovable.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
};

Window_UMovable.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

//
function Costum() {
    this.initialize.apply(this, arguments);
}

Costum.prototype = Object.create(Scene_MenuBase.prototype);
Costum.prototype.constructor = Costum;

Costum.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Costum.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.getWindow =  new Window_UMovable(0,0);
	this.getWindow.x = Light.scenex;
	this.getWindow.y = Light.sceney;
	this.addWindow(this.getWindow);
	for(var i = 1;i<=Light.Window.buttonsmax;i++){  
			var storage = i-1;
		    Light.Window.buttons[storage] = new Sprite(null);
			
			if(Light.Window.buttonstype[storage]==1)
			{
				Light.Window.buttons[storage].bitmap = ImageManager.loadPicture(Light.Window.buttonsimage[storage]);
			}else if(Light.Window.buttonstype[storage]==2){
				Light.Window.buttons[storage].bitmap = new Bitmap(Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage]);
				Light.Window.buttons[storage].bitmap.fontSize = Light.Window.buttontextsizi[storage];
				Light.Window.buttons[storage].bitmap.outlineColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.textColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.outlineWidth = 0;
				Light.Window.buttons[storage].bitmap.drawText(Light.Window.buttontext[storage],0, 0, Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage], 'left');
			}
			
			Light.Window.buttons[storage].x = Light.Window.buttonsX[storage];
			Light.Window.buttons[storage].y = Light.Window.buttonsY[storage];
			
			Light.Window.buttons[storage].width = Light.Window.buttonswidth[storage];
			Light.Window.buttons[storage].height = Light.Window.buttonsheight[storage];
			
			Light.Window.buttons[storage].scale.x = Light.Window.buttonscalex[storage];
			Light.Window.buttons[storage].scale.y = Light.Window.buttonscaley[storage];
			
			Light.Window.buttons[storage].opacity = Light.Window.buttonopacity[storage];
			
			this.addChild(Light.Window.buttons[storage]);
		    }
	//
	/*this._backgroundSprite = new Sprite(null);
	this._backgroundSprite.bitmap = ImageManager.loadPicture("help");
	this._backgroundSprite.x = 0;
	this._backgroundSprite.y = 0;
	this._backgroundSprite.width = Graphics.boxWidth;
	this._backgroundSprite.height = Graphics.boxHeight;
	//this._backgroundSprite.scale = 0.9;
	this.addChild(this._backgroundSprite);*/
	
};

Costum.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
};
Costum.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
	this.getWindow.opacity = Light.sceneopacity;
	this.getWindow.width = Light.scenewidth;
	this.getWindow.height = Light.sceneheight;
	this.getWindow.x = Light.scenex;
	this.getWindow.y = Light.sceney;
	//检测按钮关闭
		if(Light.Window.buttonifclose != 0 )
		{
				var storages = Light.Window.buttonifclose - 1;
				this.removeChild(Light.Window.buttons[storages]);
				
				Light.Window.buttons.splice(storages,1);
				Light.Window.buttonsimage.splice(storages,1);
				Light.Window.buttonsX.splice(storages,1);
				Light.Window.buttonsY.splice(storages,1);
				Light.Window.buttonswidth.splice(storages,1);
				Light.Window.buttonsheight.splice(storages,1);
				Light.Window.buttonscalex.splice(storages,1);
				Light.Window.buttonscaley.splice(storages,1);
				Light.Window.buttontext.splice(storages,1);
				Light.Window.buttonstype.splice(storages,1);
				Light.Window.buttontextsizi.splice(storages,1);
				Light.Window.buttontextcolor.splice(storages,1);
				Light.Window.buttonopacity.splice(storages,1);
				
				Light.Window.buttonsmax = Light.Window.buttonsmax -1;
				Light.Window.buttonifclose = 0;
		}
		//清空所有控件并关闭窗口
		if(Light.Window.windowbclose != 0 )
		{
				var storages = Light.Window.buttonifclose - 1;
				
				for(var a=1;a<=Light.Window.buttonsmax;a++)
				{
					var b = a - 1;
					this.removeChild(Light.Window.buttons[b]);
				}
				
				
				Light.Window.buttons = null;
				Light.Window.buttonsimage = null;
				Light.Window.buttonsX = null;
				Light.Window.buttonsY = null;
				Light.Window.buttonswidth = null;
				Light.Window.buttonsheight = null;
				Light.Window.buttonscalex = null;
				Light.Window.buttonscaley = null;
				Light.Window.buttontext = null;
				Light.Window.buttonstype = null;
				Light.Window.buttontextsizi = null;
				Light.Window.buttontextcolor = null;
				Light.Window.buttonopacity = null;
				
				Light.Window.buttonsmax = 0;
				
				Light.type = 0;//初始化窗口种类
				Light.windowopen = 0;//窗口是否打开
				Light.windowcreate = 0;//窗口是否初始化
				
				
				Light.Window.windowbclose = 0;
		}
		//刷新窗口数据
		for(var i = 1;i<=Light.Window.buttonsmax;i++){  
			var storage = i-1;
			//按钮数据
			if(Light.Window.buttonstype[storage]==1)
			{
				Light.Window.buttons[storage].bitmap = ImageManager.loadPicture(Light.Window.buttonsimage[storage]);
			}else if(Light.Window.buttonstype[storage]==2){
				Light.Window.buttons[storage].bitmap = new Bitmap(Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage]);
				Light.Window.buttons[storage].bitmap.fontSize = Light.Window.buttontextsizi[storage];
				Light.Window.buttons[storage].bitmap.outlineColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.textColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.outlineWidth = 0;
				Light.Window.buttons[storage].bitmap.drawText(Light.Window.buttontext[storage],0, 0, Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage], 'left');
			}
			
			Light.Window.buttons[storage].x = Light.Window.buttonsX[storage];
			Light.Window.buttons[storage].y = Light.Window.buttonsY[storage];
			
			Light.Window.buttons[storage].width = Light.Window.buttonswidth[storage];
			Light.Window.buttons[storage].height = Light.Window.buttonsheight[storage];
			
			Light.Window.buttons[storage].scale.x = Light.Window.buttonscalex[storage];
			Light.Window.buttons[storage].scale.y = Light.Window.buttonscaley[storage];
			
			Light.Window.buttons[storage].opacity = Light.Window.buttonopacity[storage];
		    }//
		//检测按钮按下
		if(TouchInput.isTriggered()){
			for(var b = 1;b<=Light.Window.buttonsmax;b++){  
				var storage2 = b-1;
				var widths = Light.Window.buttonsX[storage2] + Light.Window.buttonswidth[storage2];
				var heights = Light.Window.buttonsY[storage2] + Light.Window.buttonsheight[storage2];
				//判断按钮
				Light.Window.buttontouchx = TouchInput.x;
				Light.Window.buttontouchy = TouchInput.y;
				if(TouchInput.x>Light.Window.buttonsX[storage2]&&TouchInput.x<widths){
					if(TouchInput.y>Light.Window.buttonsY[storage2]&&TouchInput.y<heights){
						//alert("击中"+b);
						if(Light.Window.buttonopacity[storage2] != 0)
						{
							Light.Window.buttontouchtem = b;
						}
				 }
				}
			}
			Light.Window.buttontouch = Light.Window.buttontouchtem;
			Light.Window.buttontouchtem = 0;
		}//
		$gameTemp.reserveCommonEvent(3);
};
//=============================================================================
//创建窗口
//可以移动的窗口
function Window_Movable() {
    this.initialize.apply(this, arguments);
}

Window_Movable.prototype = Object.create(Window_Base.prototype);
Window_Movable.prototype.constructor = Window_Movable;

Window_Movable.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Movable.prototype.windowWidth = function() {
    return 240;
};

Window_Movable.prototype.windowHeight = function() {
    return 240;
};

Window_Movable.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
};

Window_Movable.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

//
var Light_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
    Light_start.call(this);
	this.getWindow = new Window_Movable();
	this.getWindow.opacity = 0;
	this.getWindow.x = 0;
	this.getWindow.y = 0;
	this.addChild(this.getWindow);
};

var Light_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    Light_update.call(this);
	if(Light.type==3 && Light.windowopen==1){
		this.getWindow.opacity = Light.sceneopacity;
		this.getWindow.width = Light.scenewidth;
		this.getWindow.height = Light.sceneheight;
		this.getWindow.x = Light.scenex;
		this.getWindow.y = Light.sceney;

		if(Light.windowcreate==0)
		{
			for(var i = 1;i<=Light.Window.buttonsmax;i++){  
			var storage = i-1;
		    Light.Window.buttons[storage] = new Sprite(null);
			
			if(Light.Window.buttonstype[storage]==1)
			{
				Light.Window.buttons[storage].bitmap = ImageManager.loadPicture(Light.Window.buttonsimage[storage]);
			}else if(Light.Window.buttonstype[storage]==2){
				Light.Window.buttons[storage].bitmap = new Bitmap(Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage]);
				Light.Window.buttons[storage].bitmap.fontSize = Light.Window.buttontextsizi[storage];
				Light.Window.buttons[storage].bitmap.outlineColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.textColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.outlineWidth = 0;
				Light.Window.buttons[storage].bitmap.drawText(Light.Window.buttontext[storage],0, 0, Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage], 'left');
			}
			
			Light.Window.buttons[storage].x = Light.Window.buttonsX[storage];
			Light.Window.buttons[storage].y = Light.Window.buttonsY[storage];
			
			Light.Window.buttons[storage].width = Light.Window.buttonswidth[storage];
			Light.Window.buttons[storage].height = Light.Window.buttonsheight[storage];
			
			Light.Window.buttons[storage].scale.x = Light.Window.buttonscalex[storage];
			Light.Window.buttons[storage].scale.y = Light.Window.buttonscaley[storage];
			
			Light.Window.buttons[storage].opacity = Light.Window.buttonopacity[storage];
			
			this.addChild(Light.Window.buttons[storage]);
		    }
			Light.windowcreate = 1;//初始化完毕
		}//
		//检测按钮关闭
		if(Light.Window.buttonifclose != 0 )
		{
				var storages = Light.Window.buttonifclose - 1;
				this.removeChild(Light.Window.buttons[storages]);
				
				Light.Window.buttons.splice(storages,1);
				Light.Window.buttonsimage.splice(storages,1);
				Light.Window.buttonsX.splice(storages,1);
				Light.Window.buttonsY.splice(storages,1);
				Light.Window.buttonswidth.splice(storages,1);
				Light.Window.buttonsheight.splice(storages,1);
				Light.Window.buttonscalex.splice(storages,1);
				Light.Window.buttonscaley.splice(storages,1);
				Light.Window.buttontext.splice(storages,1);
				Light.Window.buttonstype.splice(storages,1);
				Light.Window.buttontextsizi.splice(storages,1);
				Light.Window.buttontextcolor.splice(storages,1);
				Light.Window.buttonopacity.splice(storages,1);
				
				Light.Window.buttonsmax = Light.Window.buttonsmax -1;
				Light.Window.buttonifclose = 0;
		}
		//清空所有控件并关闭窗口
		if(Light.Window.windowbclose != 0 )
		{
				var storages = Light.Window.buttonifclose - 1;
				
				for(var a=1;a<=Light.Window.buttonsmax;a++)
				{
					var b = a - 1;
					this.removeChild(Light.Window.buttons[b]);
				}
				
				
				Light.Window.buttons = null;
				Light.Window.buttonsimage = null;
				Light.Window.buttonsX = null;
				Light.Window.buttonsY = null;
				Light.Window.buttonswidth = null;
				Light.Window.buttonsheight = null;
				Light.Window.buttonscalex = null;
				Light.Window.buttonscaley = null;
				Light.Window.buttontext = null;
				Light.Window.buttonstype = null;
				Light.Window.buttontextsizi = null;
				Light.Window.buttontextcolor = null;
				Light.Window.buttonopacity = null;
				
				Light.Window.buttonsmax = 0;
				
				Light.type = 0;//初始化窗口种类
				Light.windowopen = 0;//窗口是否打开
				Light.windowcreate = 0;//窗口是否初始化
				
				
				Light.Window.windowbclose = 0;
		}
		//刷新窗口数据
		for(var i = 1;i<=Light.Window.buttonsmax;i++){  
			var storage = i-1;
			//按钮数据
			if(Light.Window.buttonstype[storage]==1)
			{
				Light.Window.buttons[storage].bitmap = ImageManager.loadPicture(Light.Window.buttonsimage[storage]);
			}else if(Light.Window.buttonstype[storage]==2){
				Light.Window.buttons[storage].bitmap = new Bitmap(Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage]);
				Light.Window.buttons[storage].bitmap.fontSize = Light.Window.buttontextsizi[storage];
				Light.Window.buttons[storage].bitmap.outlineColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.textColor = Light.Window.buttontextcolor[storage];
				Light.Window.buttons[storage].bitmap.outlineWidth = 0;
				Light.Window.buttons[storage].bitmap.drawText(Light.Window.buttontext[storage],0, 0, Light.Window.buttonswidth[storage], Light.Window.buttonsheight[storage], 'left');
			}
			
			Light.Window.buttons[storage].x = Light.Window.buttonsX[storage];
			Light.Window.buttons[storage].y = Light.Window.buttonsY[storage];
			
			Light.Window.buttons[storage].width = Light.Window.buttonswidth[storage];
			Light.Window.buttons[storage].height = Light.Window.buttonsheight[storage];
			
			Light.Window.buttons[storage].scale.x = Light.Window.buttonscalex[storage];
			Light.Window.buttons[storage].scale.y = Light.Window.buttonscaley[storage];
			
			Light.Window.buttons[storage].opacity = Light.Window.buttonopacity[storage];
		    }//
		//检测按钮按下
		if(TouchInput.isTriggered()){
			for(var b = 1;b<=Light.Window.buttonsmax;b++){  
				var storage2 = b-1;
				var widths = Light.Window.buttonsX[storage2] + Light.Window.buttonswidth[storage2];
				var heights = Light.Window.buttonsY[storage2] + Light.Window.buttonsheight[storage2];
				//判断按钮
				Light.Window.buttontouchx = TouchInput.x;
				Light.Window.buttontouchy = TouchInput.y;
				if(TouchInput.x>Light.Window.buttonsX[storage2]&&TouchInput.x<widths){
					if(TouchInput.y>Light.Window.buttonsY[storage2]&&TouchInput.y<heights){
						//alert("击中"+b);
						if(Light.Window.buttonopacity[storage2] != 0)
						{
							Light.Window.buttontouchtem = b;
						}
				 }
				}
			}
			Light.Window.buttontouch = Light.Window.buttontouchtem;
			Light.Window.buttontouchtem = 0;
		}//
	}
};
//=============================================================================
//设置速度的
Game_CharacterBase.prototype.updateMove = function() {
        //移动速度为0时不移动
		//$gamePlayer.setMoveSpeed(0);设置速度
        if (this._moveSpeed === 0) {
                this.setPosition(this._realX,this._realY);
                }
    if (this._x < this._realX) {
        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
    }
    if (this._x > this._realX) {
        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
    }
    if (this._y < this._realY) {
        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
    }
    if (this._y > this._realY) {
        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
    }
    if (!this.isMoving()) {
        this.refreshBushDepth();
    }
};

//
