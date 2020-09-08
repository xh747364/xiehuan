//=============================================================================
// RPG Maker MZ - 敌人图鉴
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.0.0 飞猫工作室-<敌人图鉴>
 * @author 飞猫工作室（Fly_Cat/Fly_Roc）
 * 
 * @param 主菜单显示名称
 * @parent
 * @desc  主菜单中显示的名称
 * @type string
 * @default 怪物图鉴
 * 
 * @param 未知敌人提示语
 * @parent
 * @desc  列表窗口中，未知敌人提示语
 * @type string
 * @default ？？？？？
 * 
 * @param 怪物掉落提示语
 * @parent
 * @desc  怪物掉落提示语
 * @type string
 * @default 怪物掉落
 * 
 * @param 未知怪物信息窗口提示语
 * @parent
 * @desc  信息窗口中，未知怪物提示语
 * @type string
 * @default 神秘的面纱，等待你的揭晓
 *
 * @param 怪物抗性提示语
 * @parent
 * @desc  信息窗口中，怪物抗性提示语
 * @type string
 * @default 敌人抗性
 * 
 * @param 怪物属性有效度提示语
 * @parent
 * @desc  信息窗口中，怪物属性有效度提示语
 * @type string
 * @default 抗性
 * 
 * @param 背景图片
 * @text 背景图片
 * @desc 选择背景图片
 * @default
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 背景遮罩图片
 * @text 背景遮罩图片
 * @desc 选择背景遮罩图片
 * @default
 * @require 1
 * @dir img/parallaxes/
 * @type file
 * 
 * @help
 * ============================== 注意 ===============================
 * 该插件必须使用 FlyCat_CoreEngine.js 并且放置该核心插件下方
 * ======================================================================
 * 1.承接MV、MZ定制插件  QQ：903516931
 */

var Imported = Imported || {};
Imported.FlyCat_EnemyBook = true;

var FlyCat = FlyCat || {};
FlyCat.EnemyBook = {};
FlyCat.EnemyBook.parameters = PluginManager.parameters('FlyCat_EnemyBook');
FlyCat.EnemyBook.EnemyBookMainShowText = String(FlyCat.EnemyBook.parameters['主菜单显示名称'] || '怪物图鉴');
FlyCat.EnemyBook.unknowEnemyListText = String(FlyCat.EnemyBook.parameters['未知敌人提示语'] || '？？？？？');
FlyCat.EnemyBook.enemyDropItemText = String(FlyCat.EnemyBook.parameters['怪物掉落提示语'] || '怪物掉落');
FlyCat.EnemyBook.unknowEnemyInfoText = String(FlyCat.EnemyBook.parameters['未知怪物信息窗口提示语'] || '神秘的面纱，等待你的揭晓');
FlyCat.EnemyBook.enemyParamText = String(FlyCat.EnemyBook.parameters['怪物抗性提示语'] || '敌人抗性');
FlyCat.EnemyBook.enemyParamText_1 = String(FlyCat.EnemyBook.parameters['怪物属性有效度提示语'] || '抗性');
FlyCat.EnemyBook.fabaoparallaxes = String(FlyCat.EnemyBook.parameters['背景图片']);
FlyCat.EnemyBook.fabaoparallaxes_1 = String(FlyCat.EnemyBook.parameters['背景遮罩图片']);


//////////////////////////Scene/////////////////////////
function Scene_EnemyBook() {
    this.initialize(...arguments);
}

Scene_EnemyBook.prototype = Object.create(Scene_MenuBase.prototype);
Scene_EnemyBook.prototype.constructor = Scene_EnemyBook;
/////敌人图鉴场景初始化//////
Scene_EnemyBook.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
};
//////创建窗口////////
Scene_EnemyBook.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createEnemyInfoWindow();
    this.createEnemyBookListWindow();
    this._EnemyBookListWindow.activate();
}
//////创建敌人列表窗口////////
Scene_EnemyBook.prototype.createEnemyBookListWindow = function () {
    const rect = this.EnemyBookList();
    const EnemyBookListWindow = new Window_EnemyBookList(rect);
    EnemyBookListWindow.setHandler("cancel", this.popScene.bind(this));
    EnemyBookListWindow.setEnemyWindow(this._EnemyBookInfoWindow);
    this.addChild(EnemyBookListWindow);
    this._EnemyBookListWindow = EnemyBookListWindow;
    this._EnemyBookListWindow.select(0);
}

//////敌人列表窗口定义////////
Scene_EnemyBook.prototype.EnemyBookList = function () {
    const ww = Graphics.boxWidth / 5;
    const wh = Graphics.boxHeight;
    const wx = 0;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};
//////创建敌人信息窗口////////
Scene_EnemyBook.prototype.createEnemyInfoWindow = function () {
    const rect = this.EnemyBookInfo();
    const EnemyBookInfoWindow = new Window_EnemyBookInfo(rect);
    this.addChild(EnemyBookInfoWindow);
    this._EnemyBookInfoWindow = EnemyBookInfoWindow;
}
//////人信息窗口定义////////
Scene_EnemyBook.prototype.EnemyBookInfo = function () {
    const ww = Graphics.boxWidth * 0.8;
    const wh = Graphics.boxHeight;
    const wx = Graphics.boxWidth / 5;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};
////创建背景层////////
Scene_EnemyBook.prototype.createBackground = function () {
    this._fabaoparallax = new TilingSprite();
    this._topparallax = new TilingSprite();
    this._fabaoparallax.move(0, 0, Graphics.width, Graphics.height);
    this._topparallax.move(0, 0, Graphics.width, Graphics.height);
    if (FlyCat.EnemyBook.fabaoparallaxes) {
        this._fabaoparallax.bitmap = ImageManager.loadParallax(FlyCat.EnemyBook.fabaoparallaxes);
    }
    else {
        this._fabaoparallax.bitmap = ImageManager.loadBitmap();
    }
    if (FlyCat.EnemyBook.fabaoparallaxes_1) { this._topparallax.bitmap = ImageManager.loadParallax(FlyCat.EnemyBook.fabaoparallaxes_1) }
    else { this._topparallax.bitmap = ImageManager.loadBitmap() }

    this.addChild(this._fabaoparallax);
    this.addChild(this._topparallax);
};
////////场景刷新////////////
FlyCat.EnemyBook.Scene_EnemyBook_update = Scene_EnemyBook.prototype.update;
Scene_EnemyBook.prototype.update = function () {
    FlyCat.EnemyBook.Scene_EnemyBook_update.call(this);
    this._topparallax.origin.x += 1;

};
///////////////////////System////////////////////////
Game_System.prototype.addEnemyBook = function (enemyId) {
    if (!this._enemyBookList) {
        this.clearEnemyBook();
    }
    this._enemyBookList[enemyId] = true;
};
Game_System.prototype.isEnemyBook = function (enemy) {
    if (this._enemyBookList && enemy) {
        return !!this._enemyBookList[enemy.id];
    } else {
        return false;
    }
};
Game_System.prototype.clearEnemyBook = function () {
    this._enemyBookList = [];
};
FlyCat.EnemyBook.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function (troopId) {
    FlyCat.EnemyBook.Game_Troop_setup.call(this, troopId);
    this.members().forEach(function (enemy) {
        if (enemy.isAppeared()) {
            $gameSystem.addEnemyBook(enemy.enemyId());
        }
    }, this);
};
FlyCat.EnemyBook.Game_Enemy_appear = Game_Enemy.prototype.appear;
Game_Enemy.prototype.appear = function () {
    FlyCat.EnemyBook.Game_Enemy_appear.call(this);
    $gameSystem.addEnemyBook(this._enemyId);
};
FlyCat.EnemyBook.Game_Enemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function (enemyId) {
    FlyCat.EnemyBook.Game_Enemy_transform.call(this, enemyId);
    $gameSystem.addEnemyBook(enemyId);
};

//////////////////////////////////Window////////////////////////////////
function Window_EnemyBookList() {
    this.initialize(...arguments);
}
Window_EnemyBookList.prototype = Object.create(Window_Selectable.prototype);
Window_EnemyBookList.prototype.constructor = Window_EnemyBookList;

Window_EnemyBookList.prototype.initialize = function (rect) {
    this._list = [];
    Window_Selectable.prototype.initialize.call(this, rect);
    this.refresh();
};
Window_EnemyBookList.prototype.refresh = function (index) {
    this.makeItemList();
};
Window_EnemyBookList.prototype.makeItemList = function () {
    for (var i = 1; i < $dataEnemies.length; i++) {
        var enemy = $dataEnemies[i];
        this._list.push(enemy);
    }
    this.createContents();
    this.drawAllItems();
};
Window_EnemyBookList.prototype.drawItem = function (index) {
    const rect = this.itemLineRect(index);
    const enemy = this._list[index];
    const itemColor = 0;
    if ($gameSystem.isEnemyBook(enemy)) {
        var name = enemy.name;
    }
    else {
        var name = FlyCat.EnemyBook.unknowEnemyListText;
    }

    this.changeTextColor(ColorManager.textColor(itemColor));
    this.drawText(name, rect.x, rect.y);
    this.resetTextColor();
};

Window_EnemyBookList.prototype.maxItems = function () {
    return this._list.length;
};
Window_EnemyBookList.prototype.maxCols = function () {
    return 1;
};
Window_EnemyBookList.prototype.setEnemyWindow = function (object) {//窗口传递
    this._EnemyInfoWindow = object;
}
FlyCat.EnemyBook.Window_EnemyBookList_select = Window_EnemyBookList.prototype.select;
Window_EnemyBookList.prototype.select = function (index) {
    FlyCat.EnemyBook.Window_EnemyBookList_select.call(this, index)
    if (index >= 0 && index < this.maxItems()) {
        var enemy = this._list[index];
        this.updateEnemy(enemy);
    }
};
Window_EnemyBookList.prototype.updateEnemy = function (enemy) {
    this._EnemyInfoWindow.contents.clear();
    console.log(enemy)
    if (!enemy || !$gameSystem.isEnemyBook(enemy)) {
        this._EnemyInfoWindow._enemySprite.bitmap = null;
        const text = FlyCat.EnemyBook.unknowEnemyInfoText;
        const textWidth = this.textWidth(text);
        const width = this._EnemyInfoWindow.width / 2 - textWidth
        const height = this._EnemyInfoWindow.height / 2 - 50
        this._EnemyInfoWindow.drawText(text, width, height, textWidth + 100, 'center');
        return;
    }
    if ($gameSystem.isEnemyBook(enemy)) {
        /////////////////////////敌人图片/////////////////////
        const enemybattlerName = enemy.battlerName
        const enemySprite = this._EnemyInfoWindow._enemySprite;
        enemySprite.bitmap = ImageManager.loadEnemy(enemybattlerName);
        enemySprite.x = 100;
        enemySprite.y = 50;
        /////////////////////////敌人名字/////////////////////
        const enemyName = enemy.name;
        this.resetTextColor();
        this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(0));
        this._EnemyInfoWindow.drawText(enemyName, 50, 0, 200, 'center');
        ////////////////////////敌人属性//////////////////////
        const ParamY = Graphics.boxHeight * 0.48;
        for (var i = 0; i < 8; i++) {
            var value = enemy.params[i];
            var y = (i + 1) * this.lineHeight() + ParamY;
            var textWidth = 200;
            this.resetTextColor();
            this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(5));
            this._EnemyInfoWindow.drawText(TextManager.param(i) + "：", 60, y, textWidth, 'left');
            this.resetTextColor();
            this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(3));
            this._EnemyInfoWindow.drawText(value, 210, y, textWidth, 'left');
        }
        ///////////////////////敌人特殊属性///////////////////////
        this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(5));
        this._EnemyInfoWindow.drawText(FlyCat.EnemyBook.enemyParamText, 700, 378, 200, 'left');
        y = 40
        this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(14));
        if (enemy.traits) {
            for (i = 0; i < enemy.traits.length; i++) {
                var trait = enemy.traits[i];
                var dataId = trait.dataId;
                var value = trait.value;
                var tm = value < 1.0 ? ' +' : ' -';
                var is100Plus = Math.abs(value < 0 || value == 1 ? value * 1000 / 10 : (1000 - value * 1000) / 10);
                if (trait.code == 11) {
                    var ele = $dataSystem.elements[dataId];
                    text = ele + FlyCat.EnemyBook.enemyParamText_1 + tm + is100Plus + '%';
                    this._EnemyInfoWindow.drawText(text, 700, y + 378, 300);
                    y += this.lineHeight();
                }

            }
        }

        ////////////////////////敌人掉落//////////////////////
        this._EnemyInfoWindow.changeTextColor(ColorManager.textColor(5));
        this._EnemyInfoWindow.drawText(FlyCat.EnemyBook.enemyDropItemText, 450, 378, 200, 'left');
        y = 40;
        for (var i = 0; i < enemy.dropItems.length; i++) {
            var dropItem = enemy.dropItems[i];
            if (dropItem.kind > 0) {
                var item = Game_Enemy.prototype.itemObject(dropItem.kind, dropItem.dataId);
                this._EnemyInfoWindow.drawItemName(item, 450, y + 378, 300);
                y += this.lineHeight();
            }
        }
        this.resetTextColor();
    }



}

/////////////////////////敌人信息窗口///////////////////////

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
FlyCat.EnemyBook.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
    FlyCat.EnemyBook.Scene_Menu_createCommandWindow.call(this);
    this._commandWindow.setHandler("怪物图鉴", this.commandEnemy.bind(this));
};
Scene_Menu.prototype.commandEnemy = function () {
    SceneManager.push(Scene_EnemyBook);;
};
FlyCat.EnemyBook.Window_MenuCommand_sortCommand = Window_MenuCommand.prototype.sortCommand;
Window_MenuCommand.prototype.sortCommand = function () {
    FlyCat.EnemyBook.Window_MenuCommand_sortCommand.call(this)
    this.addEnemyBookCommand();
}
Window_MenuCommand.prototype.addEnemyBookCommand = function () {
    this.addCommand(FlyCat.EnemyBook.EnemyBookMainShowText, '怪物图鉴', true);
};