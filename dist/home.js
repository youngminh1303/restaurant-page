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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayHome() {\n    const content = document.querySelector('.content');\n    const homeContainer = document.createElement(\"div\");\n    homeContainer.classList.add(\"container\");\n    homeContainer.id = \"homeContainer\"\n    const aboutTab = document.createElement(\"div\");\n    aboutTab.classList.add(\"hometabs\");\n    const aboutHeading = document.createElement(\"h2\");\n    aboutHeading.innerText = \"About Us\";\n    const aboutPara = document.createElement(\"p\");\n    aboutPara.innerText = \"We are the best restaurant provide food from vegetables from clean resources and skillful cooking hands of our chefs. We try our best to bring you the best food in the planet. Hopefully you are gonna enjoy our foods. Thank you\";\n\n    aboutTab.appendChild(aboutHeading);\n    aboutTab.appendChild(aboutPara);\n    \n\n    const openingHoursTab = document.createElement(\"div\");\n    openingHoursTab.classList.add(\"hometabs\");\n    const openingHoursHeading = document.createElement(\"h2\");\n    openingHoursHeading.innerText = \"Opening Hours\"\n    const openingHoursPara = document.createElement(\"p\");\n    openingHoursPara.innerText += \"Monday - Wednesday: 7AM - 9PM \\n Thurday - Saturday: 8AM - 8PM\"\n    openingHoursTab.appendChild(openingHoursHeading);\n    openingHoursTab.appendChild(openingHoursPara);\n\n\n    homeContainer.appendChild(aboutTab);\n    homeContainer.appendChild(openingHoursTab);\n    content.appendChild(homeContainer);\n    \n\n   \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;