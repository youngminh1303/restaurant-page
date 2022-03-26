/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDish(name, description, image) {\n    const dishContainer = document.createElement(\"div\");\n    dishContainer.classList.add(\"dishcontainer\")\n    const dishName = document.createElement(\"h3\");\n    dishName.innerText = name;\n    const dishDescription = document.createElement(\"p\")\n    dishDescription.innerText = description;\n    const dishImg = document.createElement(\"img\");\n    dishImg.src = image;\n\n    dishContainer.appendChild(dishImg);\n    dishContainer.appendChild(dishName);\n    dishContainer.appendChild(dishDescription);\n    return dishContainer;\n\n}\n \nfunction displayMenu() {\n    const content = document.querySelector('.content');\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menucontainer\");\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    content.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;