//調整
// Copyright (c) 2019 ccl

/*:
 * @plugindesc item調整
 * @author ccl
 */



//==================================================================================
// comment  : Scene_Item
//================================================================================== 



/**创建 */
Scene_Item.prototype.create = function() {
	Scene_ItemBase.prototype.create.call(this);
	this.createHelpWindow();
	this.createCategoryWindow();
	this.createItemWindow();
	this.createActorWindow();
};





/**创建种类窗口 */

//设置窗口宽度
Window_ItemCategory.prototype.windowWidth = function() {
	return 600;
};


Scene_Item.prototype.createCategoryWindow = function() {


	//var x =  (Graphics.boxWidth - 800) / 2;
	this._categoryWindow = new Window_ItemCategory();




	this._categoryWindow.x = (Graphics.boxWidth - 600) / 2;
	this._categoryWindow.y = 100;





	this._categoryWindow.setHelpWindow(this._helpWindow);
	//this._categoryWindow.height = this._helpWindow.height;



	this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
	this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
	this.addWindow(this._categoryWindow);
};




/**创建物品窗口 */
Scene_Item.prototype.createItemWindow = function() {
	var wy = this._categoryWindow.y + this._categoryWindow.height;
	var wh = 250;
	var width = 600;
	var height = 250;
	this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
	this._itemWindow.setHelpWindow(this._helpWindow);
	this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
	this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));






	this.addWindow(this._itemWindow);
	this._categoryWindow.setItemWindow(this._itemWindow);
	this._itemWindow.width = width;
	this._itemWindow.height = height;
	this._itemWindow.x = this._categoryWindow.x;
	this._itemWindow.y = this._categoryWindow.y + this._categoryWindow.height + 20;

	this.addWindow(this._itemWindow);

	this._helpWindow.width = width;
	this._helpWindow.x = this._itemWindow.x;
	this._helpWindow.y = this._itemWindow.y + this._itemWindow.height + 20;
	//this._itemWindow.y/2 - this._helpWindow.height/2
};



Scene_Item.prototype.update = function() {
	Scene_ItemBase.prototype.update.call(this);
	this._itemWindow.refresh();
};

//==================================================================================
// comment  : Window_ItemCategory
//================================================================================== 
Window_ItemCategory.prototype.maxCols = function() {
	return 2;
};

Window_ItemCategory.prototype.makeCommandList = function() {
	this.addCommand(TextManager.item, 'item');
	this.addCommand(TextManager.keyItem, 'keyItem');
};


//==================================================================================
// comment  : Window_ItemList
//================================================================================== 





//物品列表数列
Window_ItemList.prototype.maxCols = function() {
	return 2;
};


//アイテム画面の文字の一行あたりの高さ変更
Window_ItemList.prototype.lineHeight = function() {
	return 48;
};



/**行距 */
//Window_ItemList.prototype.spacing = function() {
//return 48;
//};

Window_Base._iconWidth = 32;


Window_Base.prototype.drawItemName = function(item, x, y, width) {
	width = width || 312;
	if (item) {
		var iconBoxWidth = Window_Base._iconWidth + 4;
		this.resetTextColor();
		this.drawIcon(item.iconIndex, x + 2, y + 2);
		this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
	}
};


Window_ItemList.prototype.refresh = function() {
	this.makeItemList();
	this.createContents();
	this.drawAllItems();

};

Window_ItemList.prototype.setCategory = function(category) {
	if (this._category !== category) {
		this._category = category;
		this.refresh();
		this.resetScroll();
	}
};
