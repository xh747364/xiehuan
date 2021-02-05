/*: 
 * @plugindesc 角色头顶显示文本
 * @author 简约流水
 
 * @param 公共事件编号
 * @desc 调用公共事件获取玩家坐标
 * @default 8
 
 * @param X坐标变量编号
 * @desc 玩家X坐标变量
 * @default 598
 
 * @param Y坐标变量编号
 * @desc 玩家Y坐标变量
 * @default 599
 
 * @param 底部小子文本
 * @desc 显示在最底下的一行文本
 * @default 初窥天道
 
 * @param 大子文本
 * @desc 上面的大字体文本
 * @default 炼精化气
 
 * @param 小子文本颜色
 * @desc 小子文本颜色
 * @default #FFFFFF
 
 * @param 小子文本描边颜色
 * @desc 小子文本描边颜色
 * @default #000000
 
 * @param 大子文本颜色
 * @desc 大子文本颜色
 * @default #2894FF
 
 * @param 大子文本描边颜色
 * @desc 大子文本描边颜色
 * @default #000000
 
 * @help 
 *  此功能仿网页游戏在头顶显示修炼境界还有称号的功能
一共可以显示两个文本 一个是小字体在下面可以用来显示称号
一个是大字体 可用来显示境界
【注意】
 如果你没有设置公共事件的话会出错的
 公共事件->变量操作->游戏数据->人物->玩家->画面X
 公共事件->变量操作->游戏数据->人物->玩家->画面Y
 然后设置公共事件的编号还有变量的编号就可以了
 如果你想动态修改数据的话 操作如下
 【指令】
  HText1 改变文本
  HText2 改变文本
  
  2019 1 6 更新
  添加了自动保存功能
  不排除有bug的可能性
 * 
 */
 
 
 //处理插件指令
  var Game_Interpreter_HeadNameCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
	Game_Interpreter_HeadNameCommand.call(this, command, args);
    if(command == "HText1"){
		localStorage.setItem("HTEXT1", String(args[0]));
		HTEXT1 = args[0];
		CreateHeadName(args[0], 800);
    }else if(command == "HText2")
	{
		localStorage.setItem("HTEXT2", String(args[0]));
		HTEXT2 = args[0];
		CreateHeadName2(args[0], 800);
	}
}
 
var HeadX=0;
var HeadY=0;
var HeadNameTextClass = null; //称号文本
var HeadNameTextClass2 = null;//境界文本
var PublicID = 0;
var VariableIDV1=598;
var VariableIDV2=599;
var HTEXT1 = "";
var HTEXT2 = "";
//========================================================================
//设置名称
// name ：名称
// lenght 名称长度
//========================================================================
function CreateHeadName(name,lenght){
	localStorage.setItem("HTEXT1", String(name));
	HTEXT1 = name;
	HeadNameTextClassBitmap.clear();
    HeadNameTextClassBitmap.contentsOpacity=255;
    HeadNameTextClassBitmap.drawText(name, 0, 0, 800, 20, 'center');
    HeadNameTextClass.visible = true;
}
function CreateHeadName2(name,lenght){
	localStorage.setItem("HTEXT2", String(name));
	HTEXT2 = name;
	HeadNameTextClassBitmap2.clear();
    HeadNameTextClassBitmap2.contentsOpacity=255;
    HeadNameTextClassBitmap2.drawText(name, 0, 0, 800, 25, 'center');
    HeadNameTextClass2.visible = true;
}
//========================================================================
//隐藏名称
//========================================================================
function HiddenName()
{
	HeadNameTextClass.visible = false;
}
//========================================================================
//显示名称
//========================================================================
function AppearName()
{
	HeadNameTextClass.visible = true;
}
//========================================================================
//========================================================================
//========================================================================
//初始化地图
//========================================================================
var Scene_Map_Headcreate = Scene_Map.prototype.createDisplayObjects;  
Scene_Map.prototype.createDisplayObjects = function() {
    Scene_Map_Headcreate.call(this);
	
var data = PluginManager.parameters('HeadName');
	
	
	//这是称号
	HeadNameTextClass = new Sprite();
	HeadNameTextClass.bitmap = null;
	HeadNameTextClassBitmap = new Bitmap(800, 20);
	HeadNameTextClassBitmap.smooth = true;
	HeadNameTextClassBitmap.outlineWidth = 2;
	HeadNameTextClassBitmap.outlineColor = data.小子文本描边颜色;
	HeadNameTextClassBitmap.textColor = data.小子文本颜色;
	
	HeadNameTextClassBitmap.fontSize = 15;
	HeadNameTextClass.bitmap = HeadNameTextClassBitmap;
	HeadNameTextClass.update();
	HeadNameTextClass.opacity = 255;
	HeadNameTextClass.visible = false;
	this.addChild(HeadNameTextClass);
	//这是境界
	HeadNameTextClass2 = new Sprite();
	HeadNameTextClass2.bitmap = null;
	HeadNameTextClassBitmap2 = new Bitmap(800, 25);
	HeadNameTextClassBitmap2.smooth = true;
	HeadNameTextClassBitmap2.outlineWidth = 2;
	HeadNameTextClassBitmap2.outlineColor = data.大子文本描边颜色;
	HeadNameTextClassBitmap2.textColor = data.大子文本颜色;
	
	HeadNameTextClassBitmap2.fontSize = 25;
	HeadNameTextClass2.bitmap = HeadNameTextClassBitmap2;
	HeadNameTextClass2.update();
	HeadNameTextClass2.opacity = 255;
	HeadNameTextClass2.visible = false;
	this.addChild(HeadNameTextClass2);
	HTEXT1 = localStorage.getItem("HTEXT1");
	if(HTEXT1 == null)
	{
	   HTEXT1 = data.底部小子文本;
	}
	HTEXT2 = localStorage.getItem("HTEXT2");
	if(HTEXT2 == null)
	{
	   HTEXT2 = data.大子文本
	}
	
	CreateHeadName(HTEXT1, 800);
	PublicID = data.公共事件编号
	VariableIDV1 = data.X坐标变量编号 
	VariableIDV2 = data.Y坐标变量编号
	CreateHeadName2(HTEXT2, 800);
	
};
//========================================================================
//刷新数据
//========================================================================
var Scene_Map_Headupdate = Scene_Map.prototype.update;  
Scene_Map.prototype.update = function() {
    Scene_Map_Headupdate.call(this);
	$gameTemp.reserveCommonEvent(PublicID);   //执行公共事件 事件内容为设置变量的值为角色坐标
	HeadX = $gameVariables.value(VariableIDV1); // 获得变量的值
	HeadY = $gameVariables.value(VariableIDV2); //获得变量的值
	HeadNameTextClass.move(HeadX - 400, HeadY - 70);
	HeadNameTextClass2.move(HeadX - 400, HeadY - 100);
	
};
//========================================================================