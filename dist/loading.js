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

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector(\"body\");\n\nfunction loading() {\n    const body = document.querySelector(\"body\"); \n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const navbar = document.createElement(\"div\");\n    navbar.classList.add(\"navbar\");\n    const ul = document.createElement(\"ul\");\n    const home = document.createElement(\"li\");\n    home.innerText = \"Home\";\n    home.id = \"home\";\n    home.classList.add(\"active\");\n    const menu = document.createElement(\"li\");\n    menu.innerText = \"Menu\";\n    menu.id = \"menu\"\n    const contact = document.createElement(\"li\");\n    contact.innerText = \"Contact\";\n    contact.id = \"contact\"\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n\n    ul.appendChild(home);\n    ul.appendChild(menu);\n    ul.appendChild(contact);\n    navbar.appendChild(ul);\n    nav.appendChild(navbar);\n    header.appendChild(nav);\n    body.appendChild(header);\n    body.appendChild(content);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);\n\n//# sourceURL=webpack://restaurant-page/./src/loading.js?");

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
/******/ 	__webpack_modules__["./src/loading.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;