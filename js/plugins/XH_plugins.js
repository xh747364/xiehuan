//=============================================================================
// MyPlugin.js
//=============================================================================


/*:
 * @plugindesc This is plugin description.
 * @author This is author.
 * @help This is help.
 *
**/
var xh = xh || {};
(()=>{
	// $gameMessage.add();
	console.log("%c XH_plugins已启用 XH_Window_Tips",'color:#0f0;')
	/////////////////////////敌人信息窗口///////////////////////
	const EnemyBookMainShowText = "图鉴"
	function Window_EnemyBookInfo() {
	    this.initialize(...arguments);
	}
	Window_EnemyBookInfo.prototype = Object.create(Window_Base.prototype);
	Window_EnemyBookInfo.prototype.constructor = Window_EnemyBookInfo;
	
	Window_EnemyBookInfo.prototype.initialize = function (rect) {
	    Window_Base.prototype.initialize.call(this, rect);
	    this._enemySprite = new Sprite();
	    this.addChild(this._enemySprite);
	    this.contents.fontSize = 20;
	    this.activate();
	    this.opacity = 0
	};
	
	///////////////////////主菜单中添加命令/////////////////////
	xh.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function () {
	    xh.Scene_Menu_createCommandWindow.call(this);
	    this._commandWindow.setHandler("怪物图鉴", this.commandEnemy.bind(this));
	};
	Scene_Menu.prototype.commandEnemy = function () {
	    SceneManager.push(Scene_EnemyBook);;
	};
	xh.Window_MenuCommand_sortCommand = Window_MenuCommand.prototype.sortCommand;
	Window_MenuCommand.prototype.sortCommand = function () {
	    xh.Window_MenuCommand_sortCommand.call(this)
	    this.addEnemyBookCommand();
	}
	Window_MenuCommand.prototype.addEnemyBookCommand = function () {
	    this.addCommand(EnemyBookMainShowText, '怪物图鉴', true);
	};
})()
// (function() {
 
//     var parameters = PluginManager.parameters('MyPlugin');
 
//     var param1 = parameters['StringParam'] || parameters['文本参数'];
//     var param2 = Number(parameters['NumberParam'] || parameters['数字参数']);
//     var param3 = Boolean(parameters['BooleanParam'] || parameters['布尔值参数']);
//     var param4 = Number(parameters['VariableParam'] || parameters['变量参数']);
//     var param5 = parameters['FileParam'] || parameters['文件参数'];
//     var param6 = parameters['SelectParam'] || parameters['选项参数'];
//     var param7 = Number(parameters['CommonEventParam'] || parameters['公共事件参数']);
 
//     var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
//     Game_Interpreter.prototype.pluginCommand = function(command, args) {
//         _Game_Interpreter_pluginCommand.call(this, command, args);
//         if (command === 'Console_Log') {
//             console.log(args);
//         } else if (command == 'Alert') {
//             alert(args);
//         }
//     };
 
//     Game_Action.prototype.applyCritical = function(damage) {
//         return damage * 4;
//     };
 
//     var _Game_Action_applyCritical = Game_Action.prototype.applyCritical;
//     Game_Action.prototype.applyCritical = function(damage) {
//         var value = _Game_Action_applyCritical.call(this, damage);
//         return value + 100;
//     };
 
// })();