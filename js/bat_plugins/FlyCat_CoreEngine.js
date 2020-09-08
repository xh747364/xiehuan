//=============================================================================
// RPG Maker MZ - 飞猫工作室核心插件
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.0.3 飞猫工作室-<核心引擎>
 * @author 飞猫工作室（Fly_Cat/Fly_Roc）
 *
 * @param ---系统---
 * @default
 * 
 * @param 光标声音开关
 * @desc 开启或关闭光标音效（默认：开启）
 * @parent ---系统---
 * @type boolean
 * @default true
 * 
 * @param ---能力值---
 * @default
 * 
 * @param 显示等级名称
 * @desc 将角色等级显示为对应的等级名称
 * @parent ---能力值---
 * @type boolean
 * @default true
 *
 * @param 等级名称
 * @parent ---能力值---
 * @type struct<levelname>[]
 * @default ["{\"level\":\"1\",\"name\":\"凡人\"}","{\"level\": \"2\",\"name\":\"先天初期\"}","{\"level\": \"3\",\"name\":\"先天中期\"}",    "{\"level\": \"4\",\"name\":\"先天后期\"}",    "{\"level\": \"5\",\"name\":\"先天圆满\"}",    "{\"level\": \"6\",\"name\":\"炼气初期\"}",    "{\"level\": \"9\",\"name\":\"炼气中期\"}",    "{\"level\": \"12\",\"name\":\"炼气后期\"}",    "{\"level\": \"15\",\"name\":\"炼气圆满\"}",    "{\"level\": \"18\",\"name\":\"筑基初期\"}",    "{\"level\": \"23\",\"name\":\"筑基中期\"}",    "{\"level\": \"28\",\"name\":\"筑基后期\"}",    "{\"level\": \"33\",\"name\":\"筑基圆满\"}",    "{\"level\": \"38\",\"name\":\"金丹初期\"}",    "{\"level\": \"48\",\"name\":\"金丹中期\"}",    "{\"level\": \"58\",\"name\":\"金丹后期\"}",    "{\"level\": \"68\",\"name\":\"元婴初期\"}",    "{\"level\": \"98\",\"name\":\"元婴中期\"}",    "{\"level\": \"118\",\"name\":\"元婴后期\"}",    "{\"level\": \"138\",\"name\":\"元婴圆满\"}",    "{\"level\": \"158\",\"name\":\"化神初期\"}",    "{\"level\": \"208\",\"name\":\"化神初期\"}",    "{\"level\": \"258\",\"name\":\"化神中期\"}","{\"level\": \"308\",\"name\":\"化神圆满\"}","{\"level\": \"358\",\"name\":\"婴变期\"}"]
 * 
 * @param 法宝等级名称
 * @parent ---能力值---
 * @type fabao<faBaoLevelname>[]
 * @default ["{\"level\":\"0\",\"name\":\"\"}"]
 * 
 * @param 等级上限
 * @parent ---能力值---
 * @text 默认等级上限
 * @type number
 * @desc 默认等级上限（默认上限：99级）
 * @default 99
 * 
 * @param 人物HP上限
 * @parent ---能力值---
 * @text 人物HP上限
 * @type number
 * @desc 默认HP上限（默认上限：9999）
 * @default 9999
 *
 * @param 人物MP上限
 * @parent ---能力值---
 * @text 人物MP上限
 * @type number
 * @desc 默认MP上限（默认上限：9999）
 * @default 9999
 *  
 * @param 人物其他属性上限
 * @parent ---能力值---
 * @text 人物其他属性上限
 * @type number
 * @desc 默认其他属性上限（默认上限：9999）
 * @default 9999
 * 
 * @param 敌人HP上限
 * @parent ---能力值---
 * @text 敌人HP上限
 * @type number
 * @desc 默认HP上限（默认上限：999999）
 * @default 999999
 *
 * @param 敌人MP上限
 * @parent ---能力值---
 * @text 敌人MP上限
 * @type number
 * @desc 默认MP上限（默认上限：9999）
 * @default 9999
 *
 * @param 敌人其他属性上限
 * @parent ---能力值---
 * @text 敌人其他属性上限
 * @type number
 * @desc 默认其他属性上限（默认上限：9999）
 * @default 9999
 * 
 * @param ---灵石---
 * @desc
 *
 * @param 灵石最大值
 * @parent ---灵石---
 * @type number
 * @min 1
 * @desc 玩家携带灵石的最大值。
 * @default 99999999
 *
 * @param 灵石字体大小
 * @parent ---灵石---
 * @type number
 * @min 1
 * @desc 灵石的字体大小。默认14。
 * @default 14
 *
 * @param 灵石图标
 * @parent ---灵石---
 * @type number
 * @min 0
 * @desc 显示灵石的图标编号，0为没有图标。
 * @default 300
 *
 * @param 灵石超过显示上限
 * @parent ---灵石---
 * @desc 当灵石数字超过显示上限，会使用该用语显示
 * @default 无限
 * 
 * @param ---物品---
 * @desc
 *
 * @param 物品数量上限最
 * @parent ---物品---
 * @type number
 * @min 1
 * @desc 玩家携带的物品的最大数量
 * @default 9999
 *
 * @param 物品字体大小
 * @parent ---物品---
 * @type number
 * @min 1
 * @desc 物品的字体大小。默认14。
 * @default 14
 *
 * @param 独立物品起始ID
 * @parent ---物品---
 * @type number
 * @desc 独立道具的最大数量（默认1000）
 * @default 1000
 * 
 * @param 独立物品编号文字
 * @parent ---物品---
 * @type string
 * @desc 独立物品显示数量前增加的文字提示
 * @default 编号：
 * 
 * @param 独立道具数量
 * @parent ---物品---
 * @type number
 * @min 0
 * @desc 独立道具的最大数量（默认0）
 * @default 0
 * 
 * @param 独立武器数量
 * @parent ---物品---
 * @type number
 * @min 0
 * @desc 独立武器的最大数量（默认0）
 * @default 0
 * 
 * @param 独立护甲数量
 * @parent ---物品---
 * @type number
 * @min 0
 * @desc 独立护甲的最大数量（默认0）
 * @default 0
 * 
 * @command ChangeActorMaxLevel
 * @text 修改指定角色等级上限
 * @desc 修改指定角色等级上限
 *
 * @arg ActorId
 * @type number
 * @min 1
 * @max 9999
 * @default 1
 * @text 角色ID号
 * @desc 角色ID号设置
 *
 * @arg ActorMaxLevel
 * @type number
 * @min 1
 * @max 9999
 * @default 1
 * @text 等级上限
 * @desc 等级上限（最小为1）
 * 
 * @help
*
 * ------------------------------插件功能--------------------------------
 * 
 * 角色等级：显示为文字境界，自行在插件配置设置
 * 设置角色等级上限：可以使用插件指令进行解锁等级上限
 * 属性限制：自定义敌人和玩家属性上限
 * 灵石：最大值上限、替换图标、文字大小
 * 物品：携带数量、字体大小
 * 独立物品：（已完成）
 * 敌人等级：（已完成）
 * 新物品提示：（已完成）
 * 显示事件名称：（已完成）
 * 显示人物称号：（已完成）
 * 法宝插件：（已完成）
 * 战斗序列：（已完成）
 * 战斗UI：（已完成）
 * 怪物图鉴（已完成）
 * 游戏标题动画（未完成）
 * 通过标签修改敌人属性：（未完成）
 * 合成强化插件：（未完成）

 * 界面UI：（未完成）
 * ......（缓慢制作中）
 * 
 * ------------------------------备注命令--------------------------------
 * 
 * 物品装备备注栏填写：
 * 物品颜色：<color: x> x为颜色ID
 * 非独立物品：<noAlonItems>
 * 
 * ------------------------------插件命令--------------------------------
 * 
 * 自定义角色等级上限 插件命令：ChangeActorMaxLevel （可指定角色等级）
 * 范例：插件指令中选择  角色ID = X  等级上限 = X   
 * 
 *-------------------------------更新日志--------------------------------
 *
 * 2020.09.01 V1.0.1  1>增加升级满血满蓝 2>插件配置每个等级的境界显示
 * 2020.09.05 V1.0.2  1>内置装备强化属性 2>内置物品前缀
 * 2020.09.06 V1.0.3  1>修复无法读取存档问题 
 * 
 * ------------------------------联系方式--------------------------------
 * 
 * 承接MV、MZ定制插件  QQ：903516931 QQ交流群：738198599（群主：飞天大胖喵）
 * 
 */
/*~struct~levelname:
@param level
@text 等级
@type number
@min 1

@param name
@text 名称
@type text
*/
/*~fabao~faBaoLevelname:
@param level
@text 等级
@type number
@min 1

@param name
@text 名称
@type text
*/
var Imported = Imported || {};
Imported.FlyCat_CoreEngine = true;

var FlyCat = FlyCat || {};
FlyCat.CoreEngine = {};
FlyCat.CoreEngine.parameters = PluginManager.parameters('FlyCat_CoreEngine');
FlyCat.CoreEngine.cursorSe = FlyCat.CoreEngine.parameters['光标声音开关'] === 'true';
FlyCat.CoreEngine.showLevelNames = JSON.parse(FlyCat.CoreEngine.parameters['显示等级名称'] || false);
FlyCat.CoreEngine.levelNames = JSON.parse(FlyCat.CoreEngine.parameters['等级名称'] || '[]');
FlyCat.CoreEngine.faBaoLevelNames = JSON.parse(FlyCat.CoreEngine.parameters['法宝等级名称'] || '[]');
FlyCat.CoreEngine.MaxLevel = Number(FlyCat.CoreEngine.parameters['等级上限'] || 99);
FlyCat.CoreEngine.MaxActorHp = Number(FlyCat.CoreEngine.parameters['人物HP上限'] || 9999);
FlyCat.CoreEngine.MaxActorMp = Number(FlyCat.CoreEngine.parameters['人物MP上限'] || 9999);
FlyCat.CoreEngine.MaxActorParam = Number(FlyCat.CoreEngine.parameters['人物其他属性上限'] || 9999);
FlyCat.CoreEngine.MaxEnemyHp = Number(FlyCat.CoreEngine.parameters['敌人HP上限'] || 999999);
FlyCat.CoreEngine.MaxEnemyMp = Number(FlyCat.CoreEngine.parameters['敌人MP上限'] || 9999);
FlyCat.CoreEngine.MaxEnemyParam = Number(FlyCat.CoreEngine.parameters['敌人其他属性上限'] || 9999);
FlyCat.CoreEngine.MaxGold = Number(FlyCat.CoreEngine.parameters['灵石最大值'] || 99999999);
FlyCat.CoreEngine.GoldfontSize = Number(FlyCat.CoreEngine.parameters['灵石字体大小'] || 14);
FlyCat.CoreEngine.GoldIcon = Number(FlyCat.CoreEngine.parameters['灵石图标'] || 300);
FlyCat.CoreEngine.GoldLanauge = String(FlyCat.CoreEngine.parameters['灵石超过显示上限'] || '无限');
FlyCat.CoreEngine.MaxItems = Number(FlyCat.CoreEngine.parameters['物品数量上限最'] || 9999);
FlyCat.CoreEngine.ItemfontSize = Number(FlyCat.CoreEngine.parameters['物品字体大小'] || 14);
FlyCat.CoreEngine.AloneItemStartId = Number(FlyCat.CoreEngine.parameters['独立物品起始ID'] || 1000);
FlyCat.CoreEngine.MaxAloneItems = Number(FlyCat.CoreEngine.parameters['独立道具数量'] || 0);
FlyCat.CoreEngine.MaxAloneWeapons = Number(FlyCat.CoreEngine.parameters['独立武器数量'] || 0);
FlyCat.CoreEngine.MaxAloneArmors = Number(FlyCat.CoreEngine.parameters['独立护甲数量'] || 0);
FlyCat.CoreEngine.AloneNumberText = String(FlyCat.CoreEngine.parameters['独立物品编号文字'] || '编号：');
if (FlyCat.CoreEngine.levelNames) {
    const max = FlyCat.CoreEngine.levelNames.length;
    for (let i = 0; i < max; i++) {
        FlyCat.CoreEngine.levelNames[i] = JSON.parse(FlyCat.CoreEngine.levelNames[i])
    }
    //  console.log(FlyCat.CoreEngine.levelNames)
    FlyCat.CoreEngine.levelNames.sort((a, b) => { return b.level - a.level })
};
if (FlyCat.CoreEngine.faBaoLevelNames) {
    const fBaoMax = FlyCat.CoreEngine.faBaoLevelNames.length;
    for (let i = 0; i < fBaoMax; i++) {
        FlyCat.CoreEngine.faBaoLevelNames[i] = JSON.parse(FlyCat.CoreEngine.faBaoLevelNames[i])
    }
    // console.log(FlyCat.CoreEngine.faBaoLevelNames)
    FlyCat.CoreEngine.faBaoLevelNames.sort((a, b) => { return b.level - a.level })
};

PluginManager.registerCommand('FlyCat_CoreEngine', 'ChangeActorMaxLevel', args => {
    $gameSystem.ChangeActorMaxLevel(args.ActorId, args.ActorMaxLevel);
    // console.log(args.ActorId)
});
/*PluginManager.registerCommand('FlyCat_CoreEngine', 'OpenLevelShow', args => {
    $gameSystem.OpenLevelShow(eval(args.button));
});*/
Game_System.prototype.ChangeActorMaxLevel = function (ActorId, ActorMaxLevel) {
    $gameActors.actor(ActorId)._ActorMaxLevel = ActorMaxLevel;
};
/*Game_System.prototype.OpenLevelShow = function (button) {
    this._OpenLevelShow = button;
};*/
//////////////////////////////升级回血////////////////////////////////
FlyCat.CoreEngine.Game_Actor_levelUpRecover = Game_Actor.prototype.levelUp
Game_Actor.prototype.levelUp = function () {
    FlyCat.CoreEngine.Game_Actor_levelUpRecover.call(this);
    $gameActors.actor(this._actorId).recoverAll();
    // console.log(this._name + this._level, this._actorId)

};
//////////////////////////////等级破限////////////////////////////////

Game_Actor.prototype.maxLevel = function () {
    if (this._ActorMaxLevel) {
        return this._ActorMaxLevel;
    }
    else {
        return FlyCat.CoreEngine.MaxLevel;
    }
};
////////////////////////属性曲线///////////////////////////////////

Game_Actor.prototype.paramBase = function (paramId) {
    if (this.level > 99) {
        var i = this.currentClass().params[paramId][99];
        var j = this.currentClass().params[paramId][98];
        i += (i - j) * (this.level - 99);
        return i;
    }
    else {
        return this.currentClass().params[paramId][this._level];
    }

    // let level = Math.ceil(this._level / 10);
    // if (level > 99) level = 99;
    // const currentValue = this.currentClass().params[paramId][level];
    // const rate = FlyCat.CoreEngine.MaxLevel / 99;
    // let differenceValue;
    // if (level == 99) {
    //     differenceValue = (this.currentClass().params[paramId][level] - this.currentClass().params[paramId][level - 1]);
    // } else {
    //     const nextValue = this.currentClass().params[paramId][level + 1];
    //     differenceValue = nextValue - currentValue;
    // }
    // const realValue = currentValue * rate + differenceValue * ((this._level % rate) - 1);
    // return realValue;
};
//////////////////////////////属性破限////////////////////////////////
Game_Actor.prototype.paramMax = function (paramId) {
    if (paramId === 0) {
        return FlyCat.CoreEngine.MaxActorHp;// MHP
    } else if (paramId === 1) {
        return FlyCat.CoreEngine.MaxActorMp;// MMP
    } else {
        return FlyCat.CoreEngine.MaxActorParam;// Param
    }
    return Game_Battler.prototype.paramMax.call(this, paramId);
};

Game_BattlerBase.prototype.paramMax = function (paramId) {
    if (paramId === 0) {
        return FlyCat.CoreEngine.MaxEnemyHp;// MHP
    } else if (paramId === 1) {
        return FlyCat.CoreEngine.MaxEnemyMp; // MMP
    } else {
        return FlyCat.CoreEngine.MaxEnemyParam;// Param
    }

};
//////////////////////////////等级改名////////////////////////////////
Window_StatusBase.prototype.drawActorLevel = function (actor, x, y) {
    if (FlyCat.CoreEngine.showLevelNames) {
        this.drawText(this.LevelName(actor.level), x, y, 312);
    }
    else {
        this.changeTextColor(ColorManager.systemColor());
        this.drawText(TextManager.levelA, x, y, 48);
        this.resetTextColor();
        this.drawText(actor.level, x + 84, y, 36, "right");
    }
};
///////////////////////////境界划分////////////////////////////
Window_StatusBase.prototype.LevelName = function (level) {
    return $gameSystem.levelName(level);
}

Game_System.prototype.levelName = function (level) {
    const levelName = FlyCat.CoreEngine.levelNames;
    const max = levelName.length;
    for (let i = 0; i < max; i++) {
        if (level >= levelName[i].level) {
            return levelName[i].name;
        }
    };
    return String(level);
};


///////////////////////////灵石上限////////////////////////////////
Game_Party.prototype.maxGold = function () {
    return FlyCat.CoreEngine.MaxGold;
};
///////////////////////////灵石字体、图标、上限提示////////////////////////////////
Window_Base.prototype.drawCurrencyValue = function (value, unit, x, y, width) {
    this.contents.fontSize = FlyCat.CoreEngine.GoldfontSize;
    const unitWidth = Math.min(80, this.textWidth(unit));
    this.resetTextColor();
    if (value >= FlyCat.CoreEngine.MaxGold) {
        const value = FlyCat.CoreEngine.GoldLanauge;
        this.drawText(value, x, y, width - unitWidth - 6, "right");
    }
    else {
        this.drawText(value, x, y, width - unitWidth - 6, "right");
    }


    this.changeTextColor(ColorManager.systemColor());
    if (FlyCat.CoreEngine.GoldIcon > 0) {
        this.drawIcon(FlyCat.CoreEngine.GoldIcon, x + width - unitWidth, y, unitWidth, "right");
    }
    else {
        this.drawText(unit, x + width - unitWidth, y, unitWidth, "right");
    }

};
///////////////////////////最大物品数//////////////////////////
//Game_Party.prototype.maxItems = function (/*item*/) {
//   return FlyCat.CoreEngine.MaxItems;
//};
Window_ItemList.prototype.drawItemNumber = function (item, x, y, width) {
    //  console.log(item)
    if (this.needsNumber()) {
        this.contents.fontSize = FlyCat.CoreEngine.ItemfontSize;
        if (item) {
            //  console.log(item)
            if (item.id > FlyCat.CoreEngine.AloneItemStartId) {
                const NowItemId = Number(item.id - FlyCat.CoreEngine.AloneItemStartId);
                // console.log(NowItemId)
                var MaxValue = '';
                if (item.wtypeId) {
                    var MaxValue = String(FlyCat.CoreEngine.MaxAloneWeapons)
                }
                if (item.atypeId) {
                    var MaxValue = String(FlyCat.CoreEngine.MaxAloneArmors)
                }
                this.resetTextColor();
                this.drawText(FlyCat.CoreEngine.AloneNumberText + NowItemId, x, y, width, "right");
                //  this.drawText(":", x, y, width - this.textWidth($gameParty.numItems(item)), "right");

            }
            else {
                this.drawText(":", x, y, width - this.textWidth($gameParty.numItems(item)), "right");
                this.drawText($gameParty.numItems(item), x, y, width, "right");
            }
        }
    }

};
///////////////////////////物品颜色//////////////////////////
Window_Base.prototype.drawItemName = function (item, x, y, width) {
    if (item) {
        const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
        const textMargin = ImageManager.iconWidth + 4;
        const itemWidth = Math.max(0, width - textMargin);
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x, iconY);
        //  this.changeTextColor(this.itemsColor(item));
        // console.log(item)
        if (item.color) { this.changeTextColor(ColorManager.textColor(item.color)); }

        this.drawText(item.name, x + textMargin, y, itemWidth);
    }
};
////////////////////////////光标声音////////////////////////
Window_Selectable.prototype.onTouchSelect = function (trigger) {
    this._doubleTouch = false;
    if (this.isCursorMovable()) {
        const lastIndex = this.index();
        const hitIndex = this.hitIndex();
        if (hitIndex >= 0) {
            if (hitIndex === this.index()) {
                this._doubleTouch = true;
            }
            this.select(hitIndex);
        }
        if (this.index() !== lastIndex) {
            if (FlyCat.CoreEngine.cursorSe) {
                this.playCursorSound();
            }

        }
    }
};

///////////////////////////独立物品////////////////////////////

/////数据库加载///////
FlyCat.CoreEngine.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
    FlyCat.CoreEngine.DataManager_isDatabaseLoaded.call(this)
    if (!FlyCat.CoreEngine.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!FlyCat.CoreEngine._loadAlone) {
        this.GetDataItemLength();
        this.ProcessingData($dataItems);
        this.ProcessingData($dataWeapons);
        this.ProcessingData($dataArmors);
        FlyCat.CoreEngine._loadAlone = true;
    }
    return true;
};
DataManager.ProcessingData = function (data) {
    for (let i = 1; i < data.length; i++) {
        const aggregateData = data[i];
        aggregateData.color = 0;
        aggregateData.iconIndex;
        aggregateData.intensify = 0;
        aggregateData.prefix = ""
        aggregateData.noAlonItems = false;
        aggregateData._skillname = [];
        const note = aggregateData.meta;
        if (note.color) { aggregateData.color = Number(note.color); }
        if (note.noAlonItems) { aggregateData.noAlonItems = true; }

    }
}
/////获取数据库长度///////
DataManager.GetDataItemLength = function () {
    this._ItemsLength = $dataItems.length;
    this._WeaponsLength = $dataWeapons.length;
    this._ArmorsLength = $dataArmors.length;
};
/////提取保存内容///////@param {object} contents 内容
DataManager.extractSaveContents = function (contents) {
    $gameSystem = contents.system;
    $gameScreen = contents.screen;
    $gameTimer = contents.timer;
    $gameSwitches = contents.switches;
    $gameVariables = contents.variables;
    $gameSelfSwitches = contents.selfSwitches;
    $gameActors = contents.actors;
    $gameParty = contents.party;
    $gameMap = contents.map;
    $gamePlayer = contents.player;
    this._aloneItems = contents.items || [];
    this._aloneWeapons = contents.weapons || [];
    this._aloneArmors = contents.armors || [];
    this.loadAloneItems();
};
/////读取内容///////
DataManager.loadAloneItems = function () {
    if (FlyCat.CoreEngine.MaxAloneItems > 0) {
        const independentItems = $dataItems.length - DataManager._ItemsLength;
        $dataItems.splice(DataManager._ItemsLengt, independentItems);
        this.SetDataItemLength($dataItems);
        $dataItems = $dataItems.concat(this._aloneItems);
    }
    if (FlyCat.CoreEngine.MaxAloneWeapons > 0) {
        const independentWeapon = $dataWeapons.length - DataManager._WeaponsLength;
        $dataItems.splice(DataManager._WeaponsLength, independentWeapon);
        this.SetDataItemLength($dataWeapons);
        $dataItems = $dataItems.concat(this._aloneWeapons);
    }
    if (FlyCat.CoreEngine.MaxAloneArmors > 0) {
        const independentArmors = $dataArmors.length - DataManager._ArmorsLength;
        $dataArmors.splice(DataManager._ArmorsLength, independentArmors);
        this.SetDataItemLength($dataArmors);
        $dataArmors = $dataArmors.concat(this._aloneArmors);
    }
}
/////写入数据ID///////
DataManager.SetDataItemLength = function (data) {
    for (; ;) {
        if (data.length > FlyCat.CoreEngine.AloneItemStartId) break;
        data.push(null);
    }
}
/////创建游戏对象组///////
FlyCat.CoreEngine.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    FlyCat.CoreEngine.DataManager_createGameObjects.call(this);
    this.createAloneObjects();
};
/////创建独立物品对象///////
DataManager.createAloneObjects = function () {
    DataManager.createAloneItemArray();
    this.loadAloneItems();
}
/////创建独立物品数组///////
DataManager.createAloneItemArray = function () {
    this._aloneItems = [];
    this._aloneWeapons = [];
    this._aloneArmors = [];
};

//////制作存档内容///////
DataManager.makeSaveContents = function () {
    // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.
    const contents = {};
    contents.system = $gameSystem;
    contents.screen = $gameScreen;
    contents.timer = $gameTimer;
    contents.switches = $gameSwitches;
    contents.variables = $gameVariables;
    contents.selfSwitches = $gameSelfSwitches;
    contents.actors = $gameActors;
    contents.party = $gameParty;
    contents.map = $gameMap;
    contents.player = $gamePlayer;
    contents.items = this._aloneItems;
    contents.weapons = this._aloneWeapons;
    contents.armors = this._aloneArmors;
    return contents;
};
//////检测是否为独立物品///////
DataManager.isAloneItems = function (item) {
    if (!item) return false;//如果没有物品
    if (DataManager.isBattleTest()) return false;//如果战斗测试
    if (item.noAlonItems) return false;//如果是非独立物品
    if (DataManager.isItem(item)) return FlyCat.CoreEngine.MaxAloneItems > 0;//如果是道具
    if (DataManager.isWeapon(item)) return FlyCat.CoreEngine.MaxAloneWeapons > 0;//如果是武器
    if (DataManager.isArmor(item)) return FlyCat.CoreEngine.MaxAloneArmors > 0;//如果是护甲
    return false;
};
///////加入新物品////////
DataManager.addNewItem = function (item) {
    if (!this.NewItemId(item)) return item;
    const newItem = JsonEx.makeDeepCopy(item);
    this.addNewAplonItem(item, newItem);
    return newItem;
};
/////获取物品类型ID/////
DataManager.NewItemId = function (item) {
    if (!item) return false;
    if (item.baseItemId) return false;
    return item.id === this.getDataType(item).indexOf(item);
};
/////获取数据库类型/////
DataManager.getDataType = function (item) {
    if (!item) return [];
    if (DataManager.isItem(item)) return $dataItems;
    if (DataManager.isWeapon(item)) return $dataWeapons;
    if (DataManager.isArmor(item)) return $dataArmors;
    return [];
};
/////加入新的独立物品/////
DataManager.addNewAplonItem = function (baseItem, newItem) {
    newItem.id = this.getDataType(baseItem).length;
    ItemManager.setNewAplonItem(baseItem, newItem);
    this.getDataType(baseItem).push(newItem);
    this.getContainer(baseItem).push(newItem);
};

/////获取物品属性内容////
DataManager.getContainer = function (item) {
    if (!item) return [];
    if (DataManager.isItem(item)) return this._aloneItems;
    if (DataManager.isWeapon(item)) return this._aloneWeapons;
    if (DataManager.isArmor(item)) return this._aloneArmors;
    return [];
};
/////删除新的独立物品/////
DataManager.removeAplonItem = function (item) {
    if (!item) return;
    if (this.AplonItemIsUsed(item)) return;
    const container = this.getContainer(item);
    const database = this.getDataType(item);
    const index = container.indexOf(item);
    container[index] = null;
    const index_1 = database.indexOf(item);
    database[index_1] = null;
};

DataManager.AplonItemIsUsed = function (item) {
    if ($gameParty.numItems(item) > 0) return false;
    for (var i = 0; i < $dataActors.length; ++i) {
        const actor = $gameActors.actor(i);
        if (!actor) continue;
        if (actor.equips().contains(item)) return true;
    }
    return false;
};
/////获取物品类别////
DataManager.getBaseItem = function (item) {
    if (!this.isAloneItems(item)) return item;
    if (!item.baseItemId) return item;
    var baseItemId = item.baseItemId;
    var baseItem = this.getDataType(item)[baseItemId];
    return baseItem;
};
/////独立物品数据管理器////
function ItemManager() {
    throw new Error("This is a static class");//静态类
}
/////设置物品属性////
ItemManager.setNewAplonItem = function (baseItem, newItem) {
    newItem.baseItemId = baseItem.id;
    newItem.baseItemName = baseItem.name;
    newItem.baseItemPrice = baseItem.price;
    newItem.baseItemIconIndex = baseItem.iconIndex;
};
//////修改物品名称//////
ItemManager.updateItemName = function (item) {
    //////法宝系统///////
    const itemUpcounts = item.intensify;
    const Oldname = item.baseItemName;
    var prefix = '';
    //////法宝系统///////////
    const levelName = FlyCat.CoreEngine.faBaoLevelNames;
    const max = levelName.length;
    for (let i = 0; i < max; i++) {
        if (itemUpcounts == levelName[i].level) {
            item.name = levelName[i].name + Oldname;
        }
    };
};
///////角色游戏数据/////
FlyCat.CoreEngine.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (actorId) {
    FlyCat.CoreEngine.Game_Actor_setup.call(this, actorId);
    if ($gameTemp._initializeStartingMemberEquipment) return;//启动队员装备
    this.intAloneEquips($dataActors[actorId].equips);//定义独立物品
};
///////定义独立物品装备/////
Game_Actor.prototype.intAloneEquips = function (equips) {
    var equips = this.ConvertEquips(equips);
    this.AloneEquips(equips);
    this.releaseUnequippableItems(true);//不能装备的物品
    this.recoverAll();
    this.refresh();
};
///////转换装备////////////
Game_Actor.prototype.ConvertEquips = function (equips) {
    const items = [];
    for (var i = 0; i < equips.length; ++i) {
        const equipId = equips[i];
        if (equipId <= 0) continue;
        const equipType = $dataSystem.equipTypes[i + 1];
        if (equipType === $dataSystem.equipTypes[1] ||
            (i === 1 && this.isDualWield())) {
            var equip = $dataWeapons[equipId];
        } else {
            var equip = $dataArmors[equipId];
        }
        items.push(equip);
    }
    return items;
};
///独立装备///
Game_Actor.prototype.AloneEquips = function (equips) {
    const slots = this.equipSlots();
    const maxSlots = slots.length;
    this._equips = [];
    for (var i = 0; i < maxSlots; ++i) {
        this._equips[i] = new Game_Item();
    }
    for (var i = 0; i < maxSlots; ++i) {
        const slotType = slots[i];
        const equip = this.GetInitializeEquips(equips, slotType);//获取初始化装备
        if (DataManager.isAloneItems(equip) && this.canEquip(equip)) {
            const array = $gameParty.gainAplonItem(equip, 1)//获取独立物品
            if (array instanceof Array) {
                newItem = array[0];
                this.changeEquip(i, newItem);
            }
        } else if (this.canEquip(equip)) {
            this._equips[i].setObject(equip);
        }
    }
};
///获取独立装备///
Game_Actor.prototype.GetInitializeEquips = function (equips, slotType) {
    var item = null;
    for (var i = 0; i < equips.length; ++i) {
        const equip = equips[i];
        if (!equip) continue;
        if (slotType === 1 && DataManager.isWeapon(equip)) {
            item = equip;
            break;
        } else if (equip.etypeId === slotType) {
            item = equip;
            break;
        }
    }
    if (item) equips[i] = null;
    return item;
};
///检测武器///
FlyCat.CoreEngine.Game_Actor_hasWeapon = Game_Actor.prototype.hasWeapon;
Game_Actor.prototype.hasWeapon = function (weapon) {
    if (this.hasBaseItem(weapon)) return true;
    return FlyCat.CoreEngine.Game_Actor_hasWeapon.call(this, weapon);
};
///检测护甲///
FlyCat.CoreEngine.Game_Actor_hasArmor = Game_Actor.prototype.hasArmor;
Game_Actor.prototype.hasArmor = function (armor) {
    if (this.hasBaseItem(armor)) return true;
    return FlyCat.CoreEngine.Game_Actor_hasArmor.call(this, armor);
};
///检测物品类型///
Game_Actor.prototype.hasBaseItem = function (baseItem) {
    if (!DataManager.isAloneItems(baseItem)) return false;
    var type = (DataManager.isWeapon(baseItem)) ? 'weapon' : 'armor';
    for (var i = 0; i < this.equips().length; ++i) {
        var equip = this.equips()[i];
        if (!equip) continue;
        if (!equip.baseItemId) continue;
        if (DataManager.isWeapon(equip) && type === 'weapon') {
            if (equip.baseItemId === baseItem.id) return true;
        } else if (DataManager.isArmor(equip) && type === 'armor') {
            if (equip.baseItemId === baseItem.id) return true;
        }
    }
    return false;
};
///改变装备///
FlyCat.CoreEngine.Game_Actor_changeEquipById = Game_Actor.prototype.changeEquipById;
Game_Actor.prototype.changeEquipById = function (etypeId, itemId) {
    if (itemId > 0) {
        var slotId = etypeId - 1;
        if (this.equipSlots()[slotId] === 1) {
            var baseItem = $dataWeapons[itemId];
        } else {
            var baseItem = $dataArmors[itemId];
        }
        if (!$gameParty.hasItem(baseItem)) {
            $gameParty.gainItem(baseItem, 1);
        }
        if (DataManager.isAloneItems(baseItem)) {
            if (this.hasBaseItem(baseItem)) return;
            var item = $gameParty.getMatchingBaseItem(baseItem, false);
            if (item === null) {

                $gameParty.gainItem(baseItem, 1);

                item = $gameParty.getMatchingBaseItem(baseItem, false);
            }
            this.changeEquip(slotId, item);
            return;
        }
    }
    FlyCat.CoreEngine.Game_Actor_changeEquipById.call(this, etypeId, itemId)
};
//非装备物品///
Game_Actor.prototype.unequipItem = function (item) {
    for (var i = 0; i < this.equips().length; ++i) {
        var equip = this.equips()[i];
        if (!equip) continue;
        if (equip !== item) continue;
        this.changeEquip(i, null);
    }
};
///////////////////////////队伍////////////////////
FlyCat.CoreEngine.Game_Party_setupStartingMembers = Game_Party.prototype.setupStartingMembers;
Game_Party.prototype.setupStartingMembers = function () {
    FlyCat.CoreEngine.Game_Party_setupStartingMembers.call(this);
    this.initActorEquips();
};
////定义角色装备///
Game_Party.prototype.initActorEquips = function () {
    $gameTemp._initializeStartingMemberEquipment = true;
    for (var i = 0; i < $dataActors.length; ++i) {
        var actor = $gameActors.actor(i);
        if (actor) {
            var baseActor = $dataActors[i];
            actor.intAloneEquips(baseActor.equips);//定义独立物品
        }
    }
    $gameTemp._initializeStartingMemberEquipment = undefined;
};
////获取物品///
FlyCat.CoreEngine.Game_Party_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
    if (DataManager.isAloneItems(item)) {
        this.gainAplonItem(item, amount, includeEquip);
    } else {
        FlyCat.CoreEngine.Game_Party_gainItem.call(this, item, amount, includeEquip);
    }
};
////获取独立物品///
Game_Party.prototype.gainAplonItem = function (item, amount, includeEquip) {
    var arr = [];
    if (amount > 0) {
        for (var i = 0; i < amount; ++i) {
            var newItem = DataManager.addNewItem(item);
            this.registerNewItem(item, newItem);
            arr.push(newItem);
        }
    } else if (amount < 0) {
        amount = Math.abs(amount);
        for (var i = 0; i < amount; ++i) {
            if (item.baseItemId) {
                this.removeAplonItem(item, includeEquip);
            } else if (DataManager.isAloneItems(item)) {
                var target = $gameParty.getMatchingBaseItem(item, includeEquip);
                if (target !== null) this.removeAplonItem(target, includeEquip);
            } else {
                this.removeBaseItem(item, includeEquip);
            }
        }
    }
    return arr;
};
////删除基础物品///
Game_Party.prototype.removeBaseItem = function (item, includeEquip) {
    var container = this.itemContainer(item);
    container[item.id]--;
    if (container[item.id] <= 0) delete container[item.id];
    if (includeEquip) this.discardMembersEquip(item, -1);
};
////删除独立物品///
Game_Party.prototype.removeAplonItem = function (item, includeEquip) {
    if (includeEquip && this.checkItemIsEquipped(item)) {
        for (var i = 1; i < $gameActors._data.length; ++i) {
            var actor = $gameActors.actor(i);
            if (!actor) continue;
            if (!actor.equips().contains(item)) continue;
            actor.unequipItem(item);
        }
    }
    var container = this.itemContainer(item);
    container[item.id] = 0;
    if (container[item.id] <= 0) delete container[item.id];

};
////注册新物品///
Game_Party.prototype.registerNewItem = function (baseItem, newItem) {
    var container = this.itemContainer(baseItem);
    if (container) {
        var lastNumber = this.numItems(newItem);
        container[newItem.id] = 1;
    }
};
////获取匹配物品///
Game_Party.prototype.getMatchingBaseItem = function (baseItem, equipped) {
    if (!baseItem) return null;
    if (DataManager.isItem(baseItem)) var group = this.items();
    if (DataManager.isWeapon(baseItem)) var group = this.weapons();
    if (DataManager.isArmor(baseItem)) var group = this.armors();
    if (equipped) {
        for (var a = 0; a < this.members().length; ++a) {
            var actor = this.members()[a];
            if (!actor) continue;
            if (DataManager.isWeapon(baseItem)) {
                group = group.concat(actor.weapons());
            } else if (DataManager.isArmor(baseItem)) {
                group = group.concat(actor.armors());
            }
        }
    }
    var baseItemId = baseItem.id;
    for (var i = 0; i < group.length; ++i) {
        var item = group[i];
        if (!item) continue;
        if (!item.baseItemId) continue;
        if (item.baseItemId !== baseItemId) continue;
        return item;
    }
    return null;
};
////检查物品///
Game_Party.prototype.checkItemIsEquipped = function (item) {
    for (var i = 1; i < $gameActors._data.length; ++i) {
        var actor = $gameActors.actor(i);
        if (!actor) continue;
        if (actor.equips().contains(item)) return true;
    }
    return false;
};
////获取独立物品最大值////
Game_Party.prototype.getAloneItemTypeMax = function (item) {
    if (!item) return 0;
    if (DataManager.isItem(item)) return FlyCat.CoreEngine.MaxAloneItems;
    if (DataManager.isWeapon(item)) return FlyCat.CoreEngine.MaxAloneWeapons;
    if (DataManager.isArmor(item)) return FlyCat.CoreEngine.MaxAloneArmors;
};
////获取独立物品长度////
Game_Party.prototype.getAloneItemTypeCur = function (item) {
    if (!item) return 0;
    if (DataManager.isItem(item)) return this.items().length;
    if (DataManager.isWeapon(item)) return this.weapons().length;
    if (DataManager.isArmor(item)) return this.armors().length;
};
////物品////
FlyCat.CoreEngine.Game_Party_items = Game_Party.prototype.items;
Game_Party.prototype.items = function () {
    var results = FlyCat.CoreEngine.Game_Party_items.call(this);
    results.sort(this.AloneItemSort);
    return results;
};
////武器////
FlyCat.CoreEngine.Game_Party_weapons = Game_Party.prototype.weapons;
Game_Party.prototype.weapons = function () {
    var results = FlyCat.CoreEngine.Game_Party_weapons.call(this);
    results.sort(this.AloneItemSort);
    return results;
};
////护甲////
FlyCat.CoreEngine.Game_Party_armors = Game_Party.prototype.armors;
Game_Party.prototype.armors = function () {
    var results = FlyCat.CoreEngine.Game_Party_armors.call(this);
    results.sort(this.AloneItemSort);
    return results;
};

Game_Party.prototype.AloneItemSort = function (a, b) {
    var aa = (a.baseItemId) ? a.baseItemId : a.id;
    var bb = (b.baseItemId) ? b.baseItemId : b.id;
    if (aa < bb) return -1;
    if (aa >= bb) return 1;
    return 0;
};
////物品最大值///
Game_Party.prototype.maxItems = function (item) {

    if (DataManager.isAloneItems(item)) {
        return 1;
    }
    else {
        return FlyCat.CoreEngine.MaxItems;
    }

};

FlyCat.CoreEngine.Game_Party_hasItem = Game_Party.prototype.hasItem;
Game_Party.prototype.hasItem = function (item, includeEquip) {
    if (DataManager.isAloneItems(item)) {
        if (this.numIndependentItems(item) > 0) return true;
    }
    return FlyCat.CoreEngine.Game_Party_hasItem.call(this, item, includeEquip);
};

FlyCat.CoreEngine.Game_Party_isAnyMemberEquipped = Game_Party.prototype.isAnyMemberEquipped;
Game_Party.prototype.isAnyMemberEquipped = function (item) {
    if (DataManager.isAloneItems(item)) {
        for (var i = 0; i < this.members().length; ++i) {
            var actor = this.members()[i];
            if (!actor) continue;
            if (actor.hasBaseItem(item)) return true;
        }
    }
    return FlyCat.CoreEngine.Game_Party_isAnyMemberEquipped.call(this, item);
};

Game_Party.prototype.numIndependentItems = function (baseItem) {
    var value = 0;
    if (!DataManager.isAloneItems(baseItem)) return this.numItems(baseItem);
    var id = baseItem.id;
    if (DataManager.isItem(baseItem)) var group = this.items();
    if (DataManager.isWeapon(baseItem)) var group = this.weapons();
    if (DataManager.isArmor(baseItem)) var group = this.armors();
    for (var i = 0; i < group.length; ++i) {
        var item = group[i];
        if (!item) continue;
        if (item.baseItemId && item.baseItemId === id) value += 1;
    }
    return value;
};

Game_Party.prototype.clearAllMatchingBaseItems = function (baseItem, equipped) {
    if (!Imported.YEP_ItemCore) return;
    for (; ;) {
        var item = this.getMatchingBaseItem(baseItem, equipped);
        if (item) {
            this.removeAplonItem(item, equipped);
            DataManager.removeAplonItem(item);
        } else {
            break;
        }
    }
};

FlyCat.CoreEngine.Game_Interpreter_gameDataOperand = Game_Interpreter.prototype.gameDataOperand;
Game_Interpreter.prototype.gameDataOperand = function (type, param1, param2) {
    switch (type) {
        case 0:
            return $gameParty.numIndependentItems($dataItems[param1]);
            break;
        case 1:
            return $gameParty.numIndependentItems($dataWeapons[param1]);
            break;
        case 2:
            return $gameParty.numIndependentItems($dataArmors[param1]);
            break;
        default:
            return FlyCat.CoreEngine.Game_Interpreter_gameDataOperand.call(this, type, param1, param2);
            break;
    }
};

//=============================================================================
// Window_EquipItem
//=============================================================================

FlyCat.CoreEngine.Window_EquipItem_includes = Window_EquipItem.prototype.includes;
Window_EquipItem.prototype.includes = function (item) {
    if (this._actor && item !== null) {
        if (!item) return false;
    }
    return FlyCat.CoreEngine.Window_EquipItem_includes.call(this, item);
};

//=============================================================================
// Window_ShopStatus
//=============================================================================

FlyCat.CoreEngine.Window_ShopStatus_drawPossession = Window_ShopStatus.prototype.drawPossession;
Window_ShopStatus.prototype.drawPossession = function (x, y) {
    if (DataManager.isAloneItems(this._item)) {
        return this.drawIndependentPossession(x, y);
    }
    FlyCat.CoreEngine.Window_ShopStatus_drawPossession.call(this, x, y);
};

Window_ShopStatus.prototype.drawIndependentPossession = function (x, y) {
    var width = this.contents.width - this.itemPadding() - x;
    var baseItem = DataManager.getBaseItem(this._item);
    var value = $gameParty.numIndependentItems(baseItem);
    var possessionWidth = this.textWidth(value);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.possession, x, y, width - possessionWidth);
    this.resetTextColor();
    this.drawText(value, x, y, width, 'right');
};
//=============================================================================
// Window_ShopBuy
//=============================================================================

FlyCat.CoreEngine.Window_ShopBuy_isEnabled = Window_ShopBuy.prototype.isEnabled;
Window_ShopBuy.prototype.isEnabled = function (item) {
    if (DataManager.isAloneItems(item)) {
        var typeMax = $gameParty.getAloneItemTypeMax(item);
        var typeCur = $gameParty.getAloneItemTypeCur(item);
        if (typeCur >= typeMax) return false;
    }
    return FlyCat.CoreEngine.Window_ShopBuy_isEnabled.call(this, item);
};

//=============================================================================
// Scene_Equip
//=============================================================================

FlyCat.CoreEngine.Scene_Equip_refreshActor = Scene_Equip.prototype.refreshActor;
Scene_Equip.prototype.refreshActor = function () {
    this.actor().releaseUnequippableItems();
    FlyCat.CoreEngine.Scene_Equip_refreshActor.call(this);
};

FlyCat.CoreEngine.Scene_Shop_doSell = Scene_Shop.prototype.doSell;
Scene_Shop.prototype.doSell = function (number) {
    FlyCat.CoreEngine.Scene_Shop_doSell.call(this, number);
    if (!DataManager.isAloneItems(this._item)) return;
    DataManager.removeAplonItem(this._item);
};
//////////////////命令列表排序//////////////
Window_MenuCommand.prototype.makeCommandList = function () {
    this.sortCommand();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addOptionsCommand();
    this.addSaveCommand();
    this.addGameEndCommand();
};
Window_MenuCommand.prototype.sortCommand = function () {
    this.addMainCommands();
}