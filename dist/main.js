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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayContact() {\n    const content = document.querySelector('.content');\n    const homeContainer = document.createElement(\"div\");\n    homeContainer.classList.add(\"container\");\n    homeContainer.id = \"homeContainer\"\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"hometabs\");\n    const contactHeading = document.createElement(\"h2\");\n    contactHeading.innerText = \"Phone\";\n    const contactPara = document.createElement(\"p\");\n    contactPara.innerText = \"0000-6666-9999\";\n    contactContainer.appendChild(contactHeading);\n    contactContainer.appendChild(contactPara);\n    homeContainer.appendChild(contactContainer);\n    content.appendChild(homeContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayHome() {\n    const content = document.querySelector('.content');\n    const homeContainer = document.createElement(\"div\");\n    homeContainer.classList.add(\"container\");\n    homeContainer.id = \"homeContainer\"\n    const aboutTab = document.createElement(\"div\");\n    aboutTab.classList.add(\"hometabs\");\n    const aboutHeading = document.createElement(\"h2\");\n    aboutHeading.innerText = \"About Us\";\n    const aboutPara = document.createElement(\"p\");\n    aboutPara.innerText = \"We are the best restaurant provide food from vegetables from clean resources and skillful cooking hands of our chefs. We try our best to bring you the best food in the planet. Hopefully you are gonna enjoy our foods. Thank you\";\n\n    aboutTab.appendChild(aboutHeading);\n    aboutTab.appendChild(aboutPara);\n    \n\n    const openingHoursTab = document.createElement(\"div\");\n    openingHoursTab.classList.add(\"hometabs\");\n    const openingHoursHeading = document.createElement(\"h2\");\n    openingHoursHeading.innerText = \"Opening Hours\"\n    const openingHoursPara = document.createElement(\"p\");\n    openingHoursPara.innerText += \"Monday - Wednesday: 7AM - 9PM \\n Thurday - Saturday: 8AM - 8PM\"\n    openingHoursTab.appendChild(openingHoursHeading);\n    openingHoursTab.appendChild(openingHoursPara);\n\n\n    homeContainer.appendChild(aboutTab);\n    homeContainer.appendChild(openingHoursTab);\n    content.appendChild(homeContainer);\n    \n\n   \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.js */ \"./src/loading.js\");\n/* harmony import */ var _wipeout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wipeout.js */ \"./src/wipeout.js\");\n\n\n\n\n\n\n\n(0,_loading_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nhome.addEventListener(\"click\", () => {\n   (0,_wipeout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(home,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n})\n\nmenu.addEventListener(\"click\", () => {\n   ;(0,_wipeout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(menu,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n})\n\ncontact.addEventListener(\"click\", () => {\n   ;(0,_wipeout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(contact, _contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector(\"body\");\n\nfunction loading() {\n    const body = document.querySelector(\"body\"); \n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const navbar = document.createElement(\"div\");\n    navbar.classList.add(\"navbar\");\n    const ul = document.createElement(\"ul\");\n    const home = document.createElement(\"li\");\n    home.innerText = \"Home\";\n    home.id = \"home\";\n    home.classList.add(\"active\");\n    const menu = document.createElement(\"li\");\n    menu.innerText = \"Menu\";\n    menu.id = \"menu\"\n    const contact = document.createElement(\"li\");\n    contact.innerText = \"Contact\";\n    contact.id = \"contact\"\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n\n    ul.appendChild(home);\n    ul.appendChild(menu);\n    ul.appendChild(contact);\n    navbar.appendChild(ul);\n    nav.appendChild(navbar);\n    header.appendChild(nav);\n    body.appendChild(header);\n    body.appendChild(content);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);\n\n//# sourceURL=webpack://restaurant-page/./src/loading.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDish(name, description, image) {\n    const dishContainer = document.createElement(\"div\");\n    dishContainer.classList.add(\"dishcontainer\")\n    const dishName = document.createElement(\"h3\");\n    dishName.innerText = name;\n    const dishDescription = document.createElement(\"p\")\n    dishDescription.innerText = description;\n    const dishImg = document.createElement(\"img\");\n    dishImg.src = image;\n\n    dishContainer.appendChild(dishImg);\n    dishContainer.appendChild(dishName);\n    dishContainer.appendChild(dishDescription);\n    return dishContainer;\n\n}\n \nfunction displayMenu() {\n    const content = document.querySelector('.content');\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menucontainer\");\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    menuContainer.appendChild(createDish(\"Some dish\", \"this is an example dish\", \"https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg\"));\n    content.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/wipeout.js":
/*!************************!*\
  !*** ./src/wipeout.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction wipeout(element, displayFuntion) {\n\n    if (element.classList.contains(\"active\")) return\n\n    const active = document.querySelector(\".active\");\n    active.classList.remove(\"active\");\n    const content = document.querySelector('.content');\n    while (content.firstChild) content.removeChild(content.firstChild);\n    displayFuntion();\n    element.classList.add(\"active\");\n}\n \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wipeout);\n\n//# sourceURL=webpack://restaurant-page/./src/wipeout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;