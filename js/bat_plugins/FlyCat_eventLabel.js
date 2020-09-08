//=============================================================================
// RPG Maker MZ - 事件显示名字、人物显示称号
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.0.1 飞猫工作室-<事件显示名字-人物显示称号>
 * @author 飞猫工作室（Fly_Cat/Fly_Roc）
 *
 * @param 字体大小
 * @text 字体大小
 * @type number
 * @desc 默认14
 * @default 14
 * 
 * @param 称号装备槽ID
 * @text 装备称号位置的ID（ID：0 是第一位）
 * @type number
 * @desc 默认5
 * @default 5
 * 
 * @command ShowActorTitle
 * @text 是否显示称号图片(默认：开启)
 * @desc 显示称号图片：True 不显示：false
 *
 * @arg button
 * @type boolean
 * @default true
 * @text 开关状态
 * @desc 开关状态
 * 
 * @help
 *-------------------------------更新日志--------------------------------
 *2020.09.07  1>修复大行走图名字显示位置错误问题
 * 
 *-------------------------------备注命令--------------------------------
 *
 * 1.事件名字显示：在事件备注栏备注 <name:名字,颜色序号> 不写颜色默认为白色
 *   例子：<name: 飞天大胖喵> <name: 飞天大鹏鸟,10>
 * 
 * 2.角色称号显示：在装备类型中添加类型：称号（装备类型ID从0开始）
 *   在插件配置中设置（称号装备槽ID为新增的【称号类型ID】）
 *   图片存放位置：img/actorTitle  （注意：需要自行创建actorTitle文件夹）
 *   在称号装备备注写上<titleImg:图片名字>
 *   例子：<titleImg:五行传人> 注意：图片名字不需要加后缀
 * 
 *------------------------------插件命令--------------------------------
 
 * 1.插件指令：ShowActorTitle （开启：false 关闭：true）
 *
 * ------------------------------联系方式--------------------------------
 * 
 * 1.承接MV、MZ定制插件  QQ：903516931
 * 
 */

var Imported = Imported || {};
Imported.FlyCat_eventLabel = true;

var FlyCat = FlyCat || {};
FlyCat.eventLabel = {};
FlyCat.eventLabel.parameters = PluginManager.parameters('FlyCat_eventLabel');
FlyCat.eventLabel.fontSize = Number(FlyCat.eventLabel.parameters['字体大小'] || 14);
FlyCat.eventLabel.actorTitle = Number(FlyCat.eventLabel.parameters['称号装备槽ID'] || 5);

PluginManager.registerCommand('FlyCat_eventLabel', 'ShowActorTitle', args => {
    $gameSystem.eventLabel(eval(args.button));
});
Game_System.prototype.eventLabel = function (button) {
    this._eventLabel = button;
};

Sprite_Character.prototype.setCharacter = function (character) {
    this._character = character;
    this.createNameSprite(character)
};
FlyCat.eventLabel.Sprite_Character_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function () {
    FlyCat.eventLabel.Sprite_Character_setCharacterBitmap.call(this);
    this._charBitmap = ImageManager.loadCharacter(this._characterName);
    this._charBitmap.addLoadListener(this.updateCharBitmap.bind(this));
};

Sprite_Character.prototype.updateCharBitmap = function () {
    if (this._titleSprite) {
        this._titleSprite.y = -this.patternHeight();
        this._titleSprite.alpha = 1;
    }
    if (this._nameSprite) {
        this._nameSprite.y = -this.patternHeight();
    }
}

FlyCat.eventLabel.Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function () {
    FlyCat.eventLabel.Sprite_Character_update.call(this);
    if ($gameSystem._eventLabel && this._titleSprite) {
        this._titleSprite.visible = false;
    }
    else if (!$gameSystem._eventLabel && this._titleSprite) {
        this._titleSprite.visible = true;
    }
};

Sprite_Character.prototype.createNameSprite = function (character) {
    if (character instanceof Game_Event) {
        const event = $dataMap.events[character._eventId]
        if (event.meta.name) {
            const params = event.meta.name.split(',')
            this.createSprite(params);
        }
    } else if (character instanceof Game_Player) {//玩家

        const player = $gameParty.members()[0]
        this.TitleSpritedestroy();
        this.createTitleSprite(player);
    }
    else if (character instanceof Game_Follower) {//跟随

        const follower = character.actor();
        this.TitleSpritedestroy();
        this.createTitleSprite(follower);
    }
};

Sprite_Character.prototype.createTitleSprite = function (player) {
    if (player) {  //如果有玩家
        const actorTitle = player.equips()[FlyCat.eventLabel.actorTitle];
        if (actorTitle) {
            if (actorTitle.meta.titleImg) {
                const titleImgName = String(actorTitle.meta.titleImg);
                const newBitmap = ImageManager.loadBitmap('img/actorTitle/', titleImgName);
                this._titleSprite = new Sprite(newBitmap)
                this._titleSprite.alpha = 0;
                this._titleSprite.x = 0;
                this._titleSprite.anchor.x = 0.5;
                this._titleSprite.anchor.y = 1;
                this.addChild(this._titleSprite);
                console.log(this._titleSprite)

            }
        }
    }
};


Sprite_Character.prototype.TitleSpritedestroy = function () {
    if (this._titleSprite) {
        console.log("4")
        this.removeChild(this._titleSprite);
        this._titleSprite.destroy();
        this._titleSprite = null;
    }
}

Sprite_Character.prototype.createSprite = function (params) {
    if (this._nameSprite) {
        this.removeChild(this._nameSprite);
        this._nameSprite.destroy();
        this._nameSprite = null;
    }

    const name = String(params[0]);
    let colorId = params[1] || 0;
    colorId = Number(colorId).clamp(0, 32);
    const win = new Window_Base(new Rectangle(0, 0, 1, 1));
    win.contents.fontSize = FlyCat.eventLabel.fontSize;
    const width = win.textWidth(name) + 10;
    const height = win.lineHeight();
    const bitmap = new Bitmap(width, height);
    bitmap.fontSize = FlyCat.eventLabel.fontSize;
    bitmap.textColor = ColorManager.textColor(colorId);
    bitmap.drawText(name, 0, 0, width, height, 'center');
    this._nameSprite = new Sprite(bitmap);
    this._nameSprite.anchor.x = 0.5;
    this._nameSprite.anchor.y = 1;
    this._nameSprite.x = 0;
    this.addChild(this._nameSprite);

}
