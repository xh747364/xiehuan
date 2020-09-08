//=============================================================================
// RPG Maker MZ - Loading animation
//=============================================================================

/*:en
 * @target MZ
 * @plugindesc Loading animation.
 * @author xiehuan
 *
 * @help XH_Loading.js
 *
 * v1.0.0
 * This plugin changes the loading layout.
 * It puts the loading layout on the lower left.
 * It does not provide plugin commands.
 */

/*:zh
 * @target MZ
 * @plugindesc 加载动画.
 * @author xiehuan
 *
 * @help XH_Loading.js
 *
 * v1.0.0
 * 此插件更改加载布局.
 * 它将加载布局放在左下角.
 * 它不提供插件命令.
 */
function loadStyleString(css) {
	var style = document.createElement("style");
	style.type = "text/css";
	try {
		style.appendChild(document.createTextNode(css));
	} catch (ex) {
		style.styleSheet.cssText = css; //兼容IE
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}
/*加载样式*/
loadStyleString(
	'#loadingSpinner{margin:auto;position:absolute;left:20px;bottom:20px;width:120px;height:120px;z-index:10;display:flex;align-items:center;color:#FFFFFF;font-size:24px;}#loadingSpinner p{margin-left:10px;}.la-ball-spin-clockwise,.la-ball-spin-clockwise > div{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff;}.la-ball-spin-clockwise.la-dark{color:#333;}.la-ball-spin-clockwise > div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;}.la-ball-spin-clockwise{width:32px;height:32px;}.la-ball-spin-clockwise > div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise 1s infinite ease-in-out;-moz-animation:ball-spin-clockwise 1s infinite ease-in-out;-o-animation:ball-spin-clockwise 1s infinite ease-in-out;animation:ball-spin-clockwise 1s infinite ease-in-out;}.la-ball-spin-clockwise > div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;-moz-animation-delay:-.875s;-o-animation-delay:-.875s;animation-delay:-.875s;}.la-ball-spin-clockwise > div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;-moz-animation-delay:-.75s;-o-animation-delay:-.75s;animation-delay:-.75s;}.la-ball-spin-clockwise > div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;-moz-animation-delay:-.625s;-o-animation-delay:-.625s;animation-delay:-.625s;}.la-ball-spin-clockwise > div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;-moz-animation-delay:-.5s;-o-animation-delay:-.5s;animation-delay:-.5s;}.la-ball-spin-clockwise > div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;-moz-animation-delay:-.375s;-o-animation-delay:-.375s;animation-delay:-.375s;}.la-ball-spin-clockwise > div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;-moz-animation-delay:-.25s;-o-animation-delay:-.25s;animation-delay:-.25s;}.la-ball-spin-clockwise > div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;-moz-animation-delay:-.125s;-o-animation-delay:-.125s;animation-delay:-.125s;}.la-ball-spin-clockwise > div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;}.la-ball-spin-clockwise.la-sm{width:16px;height:16px;}.la-ball-spin-clockwise.la-sm > div{width:4px;height:4px;margin-top:-2px;margin-left:-2px;}.la-ball-spin-clockwise.la-2x{width:64px;height:64px;}.la-ball-spin-clockwise.la-2x > div{width:16px;height:16px;margin-top:-8px;margin-left:-8px;}.la-ball-spin-clockwise.la-3x{width:96px;height:96px;}.la-ball-spin-clockwise.la-3x > div{width:24px;height:24px;margin-top:-12px;margin-left:-12px;}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1);}20%{opacity:1;}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0);}}@-moz-keyframes ball-spin-clockwise{0%,100%{opacity:1;-moz-transform:scale(1);transform:scale(1);}20%{opacity:1;}80%{opacity:0;-moz-transform:scale(0);transform:scale(0);}}@-o-keyframes ball-spin-clockwise{0%,100%{opacity:1;-o-transform:scale(1);transform:scale(1);}20%{opacity:1;}80%{opacity:0;-o-transform:scale(0);transform:scale(0);}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}20%{opacity:1;}80%{opacity:0;-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0);}}'
);
(() => {
	console.log('XH_Loading已启用 XH_Loading.js')
	Graphics._createLoadingSpinner = function() {
		const loadingSpinner = document.createElement("div");
		const loadingText = document.createElement('p')
		loadingText.innerHTML = "加载中"
		let loadingPoints = document.createElement('div')
		loadingPoints.className = "la-ball-spin-clockwise"
		for (let i = 1; i <= 8; i++) {
			let loadingPoint = document.createElement('div')
			loadingPoints.append(loadingPoint)
		}
		loadingSpinner.id = "loadingSpinner";
		loadingSpinner.appendChild(loadingPoints)
		loadingSpinner.appendChild(loadingText)
		this._loadingSpinner = loadingSpinner
	};
})()
