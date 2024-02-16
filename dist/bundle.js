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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this.size = 10;\r\n    this.grid = this.createGrid();\r\n  }\r\n\r\n  createGrid = () => {\r\n    return Array.from({ length: this.size }, () => Array(this.size).fill(null));\r\n  };\r\n\r\n  isValidCoordinate = (x, y) => {\r\n    return x > -1 && y > -1 && x < this.size && y < this.size;\r\n  };\r\n\r\n  isOverBoard = (length, isXAxis = true, startX, startY) => {\r\n    return isXAxis ? startX + length < this.size : startY + length < this.size;\r\n  };\r\n\r\n  placeShip(ship, x, y, isXAxis = true) {\r\n    if (\r\n      this.isValidCoordinate(x, y) &&\r\n      this.isOverBoard(ship.length - 1, isXAxis, x, y)\r\n    ) {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        isXAxis ? (this.grid[x + i][y] = ship) : (this.grid[x][y + i] = ship);\r\n      }\r\n    }\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    if (!this.isValidCoordinate(x, y)) return;\r\n    if (this.grid[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n      this.grid[x][y].hit();\r\n      this.grid[x][y] = true;\r\n    } else if (this.grid[x][y] == null) {\r\n      this.grid[x][y] = false;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\n\r\nconst ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\r\nconst gb = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\r\ngb.placeShip(ship, 9, 0, false);\r\n\r\ngb.receiveAttack(0, 0);\r\nconsole.log(gb.grid);\r\ngb.receiveAttack(1, 0);\r\ngb.receiveAttack(1, 2);\r\ngb.receiveAttack(1, 2);\r\ngb.receiveAttack(1, 2);\r\n\n\n//# sourceURL=webpack://odin_battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n    this.sunk = false;\r\n  }\r\n\r\n  hit = () => {\r\n    this.hits++;\r\n    this.isSunk();\r\n  };\r\n  isSunk = () => (this.sunk = this.hits >= this.length);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_battleship/./src/ship.js?");

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