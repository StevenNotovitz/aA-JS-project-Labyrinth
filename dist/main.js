/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _world_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world_state.js */ \"./src/world_state.js\");\n\n\n// import Game from \"./game.js\"\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"index.js here\");\n  let startPos = [1, 0];\n  let startDir = [0, 1];\n  let maze = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 0, 1]];\n  window.p = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startPos, startDir, maze);\n  window.w = new _world_state_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](startPos, startDir, maze);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDO0FBQ1E7QUFDekM7O0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzVCLElBQUlDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNyQixJQUFJQyxJQUFJLEdBQUcsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEI7RUFDREMsTUFBTSxDQUFDQyxDQUFDLEdBQUcsSUFBSVYsa0RBQU0sQ0FBQ00sUUFBUSxFQUFFQyxRQUFRLEVBQUVDLElBQUksQ0FBQztFQUMvQ0MsTUFBTSxDQUFDRSxDQUFDLEdBQUcsSUFBSVYsdURBQVUsQ0FBQ0ssUUFBUSxFQUFFQyxRQUFRLEVBQUVDLElBQUksQ0FBQztBQUN2RCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS1qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcclxuaW1wb3J0IFdvcmxkU3RhdGUgZnJvbSBcIi4vd29ybGRfc3RhdGUuanNcIlxyXG4vLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5kZXguanMgaGVyZVwiKVxyXG4gICAgbGV0IHN0YXJ0UG9zID0gWzEsIDBdXHJcbiAgICBsZXQgc3RhcnREaXIgPSBbMCwgMV1cclxuICAgIGxldCBtYXplID0gW1xyXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDEsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAxLCAwLCAxXSxcclxuICAgICAgICBbMSwgMSwgMSwgMCwgMV1cclxuICAgIF07XHJcbiAgICB3aW5kb3cucCA9IG5ldyBQbGF5ZXIoc3RhcnRQb3MsIHN0YXJ0RGlyLCBtYXplKVxyXG4gICAgd2luZG93LncgPSBuZXcgV29ybGRTdGF0ZShzdGFydFBvcywgc3RhcnREaXIsIG1hemUpXHJcbn0pOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJXb3JsZFN0YXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInN0YXJ0UG9zIiwic3RhcnREaXIiLCJtYXplIiwid2luZG93IiwicCIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(pos, dir, maze) {\n    this.pos = pos;\n    this.dir = dir;\n    console.log(this.pos);\n    console.log(this.dir);\n    this.maze = maze;\n    this.dirs = [[-1, 0],\n    // N\n    [0, 1],\n    // E\n    [1, 0],\n    // S\n    [0, -1] // W\n    ];\n  }\n\n  move() {\n    if (this.maze[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 0) {\n      this.pos[0] += this.dir[0];\n      this.pos[1] += this.dir[1];\n    }\n    console.log(this.pos);\n  }\n  indexOf(dir) {\n    for (let i = 0; i < this.dirs.length; i++) {\n      if (this.dirs[i].toString() === dir.toString()) return i;\n    }\n  }\n  turnLeft() {\n    let i = this.indexOf(this.dir);\n    if (i - 1 < 0) i += this.dirs.length;\n    this.dir = this.dirs[i - 1];\n    console.log(this.dir);\n  }\n  turnRight() {\n    let i = this.indexOf(this.dir);\n    this.dir = this.dirs[(i + 1) % this.dirs.length];\n    console.log(this.dir);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxNQUFNLENBQUM7RUFFeEJDLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7SUFDeEIsSUFBSSxDQUFDRixHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztJQUNkRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNKLEdBQUcsQ0FBQztJQUNyQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUM7SUFDckIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDRyxJQUFJLEdBQUcsQ0FDUixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUFLO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQU07SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFBTTtJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUs7SUFBQSxDQUNmO0VBQ0w7O0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksSUFBSSxDQUFDSixJQUFJLENBQUMsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN2RSxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osR0FBRyxDQUFDO0VBQ3pCO0VBRUFPLE9BQU9BLENBQUNOLEdBQUcsRUFBRTtJQUNULEtBQUssSUFBSU8sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3ZDLElBQUksSUFBSSxDQUFDSCxJQUFJLENBQUNHLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEVBQUUsS0FBS1QsR0FBRyxDQUFDUyxRQUFRLEVBQUUsRUFBRSxPQUFPRixDQUFDO0lBQzVEO0VBQ0o7RUFFQUcsUUFBUUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSUgsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQzlCLElBQUlPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksSUFBSSxDQUFDSCxJQUFJLENBQUNJLE1BQU07SUFDcEMsSUFBSSxDQUFDUixHQUFHLEdBQUcsSUFBSSxDQUFDSSxJQUFJLENBQUNHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0JMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDO0VBQ3pCO0VBRUFXLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUlKLENBQUMsR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQyxJQUFJLENBQUNOLEdBQUcsQ0FBQztJQUM5QixJQUFJLENBQUNBLEdBQUcsR0FBRyxJQUFJLENBQUNJLElBQUksQ0FBQyxDQUFDRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxNQUFNLENBQUM7SUFDaEROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDO0VBQ3pCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS1qcy1wcm9qZWN0Ly4vc3JjL3BsYXllci5qcz9hOGEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zLCBkaXIsIG1hemUpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLmRpciA9IGRpcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXIpO1xyXG4gICAgICAgIHRoaXMubWF6ZSA9IG1hemVcclxuICAgICAgICB0aGlzLmRpcnMgPSBbXHJcbiAgICAgICAgICAgIFstMSwgMF0sICAgIC8vIE5cclxuICAgICAgICAgICAgWzAsIDFdLCAgICAgLy8gRVxyXG4gICAgICAgICAgICBbMSwgMF0sICAgICAvLyBTXHJcbiAgICAgICAgICAgIFswLCAtMV0gICAgIC8vIFdcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF6ZVt0aGlzLnBvc1swXSArIHRoaXMuZGlyWzBdXVt0aGlzLnBvc1sxXSArIHRoaXMuZGlyWzFdXSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLmRpclswXTtcclxuICAgICAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy5kaXJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKGRpcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnNbaV0udG9TdHJpbmcoKSA9PT0gZGlyLnRvU3RyaW5nKCkpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR1cm5MZWZ0KCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5pbmRleE9mKHRoaXMuZGlyKTtcclxuICAgICAgICBpZiAoaSAtIDEgPCAwKSBpICs9IHRoaXMuZGlycy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5kaXIgPSB0aGlzLmRpcnNbaSAtIDFdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlyKVxyXG4gICAgfVxyXG5cclxuICAgIHR1cm5SaWdodCgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZih0aGlzLmRpcik7XHJcbiAgICAgICAgdGhpcy5kaXIgPSB0aGlzLmRpcnNbKGkgKyAxKSAlIHRoaXMuZGlycy5sZW5ndGhdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlyKVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvcyIsImRpciIsIm1hemUiLCJjb25zb2xlIiwibG9nIiwiZGlycyIsIm1vdmUiLCJpbmRleE9mIiwiaSIsImxlbmd0aCIsInRvU3RyaW5nIiwidHVybkxlZnQiLCJ0dXJuUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/world_state.js":
/*!****************************!*\
  !*** ./src/world_state.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorldState; }\n/* harmony export */ });\nclass WorldState {\n  constructor(pos, dir, maze) {\n    this.pos = pos;\n    this.dir = dir;\n    this.maze = maze;\n    this.dirs = [[-1, 0],\n    // N\n    [0, 1],\n    // E\n    [1, 0],\n    // S\n    [0, -1] // W\n    ];\n\n    this.left = this.left();\n    this.farLeft = this.farLeft();\n    this.far = this.maze[this.far()[0]][this.far()[1]];\n    this.farRight = this.farRight();\n    this.right = this.right();\n    this.next = this.maze[this.next()[0]][this.next()[1]];\n  }\n  next() {\n    return [this.pos[0] + this.dir[0], this.pos[1] + this.dir[1]];\n  }\n  far() {\n    return [this.pos[0] + this.dir[0] * 2, this.pos[1] + this.dir[1] * 2];\n  }\n  left() {\n    let i = this.indexOf(this.dir);\n    if (i - 1 < 0) i += this.dirs.length;\n    return this.maze[this.pos[0] + this.dirs[i - 1][0]][this.pos[1] + this.dirs[i - 1][1]];\n  }\n  right() {\n    let i = this.indexOf(this.dir);\n    return this.maze[this.pos[0] + this.dirs[(i + 1) % this.dirs.length][0]][this.pos[1] + this.dirs[(i + 1) % this.dirs.length][1]];\n  }\n  farLeft() {\n    let i = this.indexOf(this.dir);\n    if (i - 1 < 0) i += this.dirs.length;\n    return this.maze[this.next()[0] + this.dirs[i - 1][0]][this.next()[1] + this.dirs[i - 1][1]];\n  }\n  farRight() {\n    let i = this.indexOf(this.dir);\n    return this.maze[this.next()[0] + this.dirs[(i + 1) % this.dirs.length][0]][this.next()[1] + this.dirs[(i + 1) % this.dirs.length][1]];\n  }\n  indexOf(dir) {\n    for (let i = 0; i < this.dirs.length; i++) {\n      if (this.dirs[i].toString() === dir.toString()) return i;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0csSUFBSSxDQUFDLENBQUNPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDUCxJQUFJLENBQUNTLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQ08sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNQLElBQUksQ0FBQ1MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEk7RUFFQVAsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSUssQ0FBQyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1YsR0FBRyxDQUFDO0lBQzlCLElBQUlTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksSUFBSSxDQUFDUCxJQUFJLENBQUNTLE1BQU07SUFDcEMsT0FBTyxJQUFJLENBQUNWLElBQUksQ0FBQyxJQUFJLENBQUNPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNELElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEc7RUFFQUgsUUFBUUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1YsR0FBRyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ1AsSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ0gsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUMsQ0FBQ08sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNQLElBQUksQ0FBQ1MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUk7RUFFQUQsT0FBT0EsQ0FBQ1YsR0FBRyxFQUFFO0lBQ1QsS0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDUCxJQUFJLENBQUNTLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7TUFDdkMsSUFBSSxJQUFJLENBQUNQLElBQUksQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFFBQVEsRUFBRSxLQUFLWixHQUFHLENBQUNZLFFBQVEsRUFBRSxFQUFFLE9BQU9ILENBQUM7SUFDNUQ7RUFDSjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWEtanMtcHJvamVjdC8uL3NyYy93b3JsZF9zdGF0ZS5qcz8yMGVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZGlyLCBtYXplKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3NcclxuICAgICAgICB0aGlzLmRpciA9IGRpclxyXG4gICAgICAgIHRoaXMubWF6ZSA9IG1hemVcclxuICAgICAgICB0aGlzLmRpcnMgPSBbXHJcbiAgICAgICAgICAgIFstMSwgMF0sICAgIC8vIE5cclxuICAgICAgICAgICAgWzAsIDFdLCAgICAgLy8gRVxyXG4gICAgICAgICAgICBbMSwgMF0sICAgICAvLyBTXHJcbiAgICAgICAgICAgIFswLCAtMV0gICAgIC8vIFdcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQoKVxyXG4gICAgICAgIHRoaXMuZmFyTGVmdCA9IHRoaXMuZmFyTGVmdCgpXHJcbiAgICAgICAgdGhpcy5mYXIgPSB0aGlzLm1hemVbdGhpcy5mYXIoKVswXV1bdGhpcy5mYXIoKVsxXV1cclxuICAgICAgICB0aGlzLmZhclJpZ2h0ID0gdGhpcy5mYXJSaWdodCgpXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMucmlnaHQoKVxyXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMubWF6ZVt0aGlzLm5leHQoKVswXV1bdGhpcy5uZXh0KClbMV1dXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnBvc1swXSArIHRoaXMuZGlyWzBdLCB0aGlzLnBvc1sxXSArIHRoaXMuZGlyWzFdXVxyXG4gICAgfVxyXG5cclxuICAgIGZhcigpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucG9zWzBdICsgdGhpcy5kaXJbMF0gKiAyLCB0aGlzLnBvc1sxXSArIHRoaXMuZGlyWzFdICogMl1cclxuICAgIH1cclxuXHJcbiAgICBsZWZ0KCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5pbmRleE9mKHRoaXMuZGlyKTtcclxuICAgICAgICBpZiAoaSAtIDEgPCAwKSBpICs9IHRoaXMuZGlycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF6ZVt0aGlzLnBvc1swXSArIHRoaXMuZGlyc1tpIC0gMV1bMF1dW3RoaXMucG9zWzFdICsgdGhpcy5kaXJzW2kgLSAxXVsxXV1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZih0aGlzLmRpcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF6ZVt0aGlzLnBvc1swXSArIHRoaXMuZGlyc1soaSArIDEpICUgdGhpcy5kaXJzLmxlbmd0aF1bMF1dW3RoaXMucG9zWzFdICsgdGhpcy5kaXJzWyhpICsgMSkgJSB0aGlzLmRpcnMubGVuZ3RoXVsxXV1cclxuICAgIH1cclxuXHJcbiAgICBmYXJMZWZ0KCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5pbmRleE9mKHRoaXMuZGlyKTtcclxuICAgICAgICBpZiAoaSAtIDEgPCAwKSBpICs9IHRoaXMuZGlycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF6ZVt0aGlzLm5leHQoKVswXSArIHRoaXMuZGlyc1tpIC0gMV1bMF1dW3RoaXMubmV4dCgpWzFdICsgdGhpcy5kaXJzW2kgLSAxXVsxXV1cclxuICAgIH1cclxuXHJcbiAgICBmYXJSaWdodCgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZih0aGlzLmRpcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF6ZVt0aGlzLm5leHQoKVswXSArIHRoaXMuZGlyc1soaSArIDEpICUgdGhpcy5kaXJzLmxlbmd0aF1bMF1dW3RoaXMubmV4dCgpWzFdICsgdGhpcy5kaXJzWyhpICsgMSkgJSB0aGlzLmRpcnMubGVuZ3RoXVsxXV1cclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKGRpcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnNbaV0udG9TdHJpbmcoKSA9PT0gZGlyLnRvU3RyaW5nKCkpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJXb3JsZFN0YXRlIiwiY29uc3RydWN0b3IiLCJwb3MiLCJkaXIiLCJtYXplIiwiZGlycyIsImxlZnQiLCJmYXJMZWZ0IiwiZmFyIiwiZmFyUmlnaHQiLCJyaWdodCIsIm5leHQiLCJpIiwiaW5kZXhPZiIsImxlbmd0aCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/world_state.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYS1qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;