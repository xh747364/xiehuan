//=============================================================================
// RPG Maker MZ - 敌人等级
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.0.0 飞猫工作室-<敌人等级>
 * @author 飞猫工作室（Fly_Cat/Fly_Roc）
 *
 * @param 等级文字显示
 * @text 修改等级的显示文字
 * @desc 修改等级的显示文字
 * @default Lv
 * @help
 * ------------------------------备注命令--------------------------------
 * 
 * 1.在敌人数据库的备注里设置等级属性：<level:n>
 * 2.支持在技能公式里使用敌方的level属性。用法：b.level
 * 
 * ------------------------------联系方式--------------------------------
 * 
 * 1.承接MV、MZ定制插件  QQ：903516931 
 * 
 */
var Imported = Imported || {};
Imported.FlyCat_EnemyLevel = true;

var FlyCat = FlyCat || {};
FlyCat.EnemyLevel = {};
FlyCat.parameters = PluginManager.parameters('FlyCat_EnemyLevel');
FlyCat.LevelText = String(FlyCat.parameters['等级文字显示'] || "Lv");


Object.defineProperty(Game_Enemy.prototype, "level", {
    get: function () {
        return this._level;
    },
    configurable: true
});

FlyCat.EnemyLevel.Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function (enemyId, x, y) {
    FlyCat.EnemyLevel.Game_Enemy_setup.call(this, enemyId, x, y);
    const enemy = $dataEnemies[enemyId];
    if (enemy) {
        this._level = Number(enemy.meta.level) || 1;

    }
};

Game_Enemy.prototype.name = function () {
    return FlyCat.LevelText + this.level + " " + this.originalName() + (this._plural ? this._letter : "");
};
