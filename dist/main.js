/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n   GRAVITY: 0.3,\n   FLAP_SPEED: -8,\n   TERMINAL_VEL: 12,\n   BIRD_WIDTH: 40,\n   BIRD_HEIGHT: 30\n}\n\nclass Bird {\n   constructor(dimensions) {\n      this.velocity = 0;\n      this.dimensions = dimensions;\n      this.y = 300;\n   }\n   \n   animate(ctx) {\n      this.move()\n      this.drawBird(ctx)\n   }\n\n   move() {\n      this.y += this.velocity;\n\n      if ( this.velocity < CONSTANTS.TERMINAL_VEL ) {\n         this.velocity += CONSTANTS.GRAVITY;\n      }\n\n   }\n   flap() {\n      this.velocity += CONSTANTS.FLAP_SPEED;\n   }\n   drawBird(ctx) {\n      ctx.fillStyle='yellow';\n      ctx.fillRect(220, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT); // \n   }\n\n}\n\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ \"./src/level.js\");\n/* harmony import */ var _bird_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.js */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n      this.ctx = canvas.getContext(\"2d\");\n      this.dimensions = { width: canvas.width, height: canvas.height };\n      this.restart();\n      // this.play();\n      this.animate = this.animate.bind(this)\n      addEventListener('click', this.click.bind(this))\n      this.click = this.click.bind(this)\n      this.play = this.play.bind(this)\n  }\n\n  play() {\n     this.running = true;\n     this.animate();\n     \n  }\n   animate() {\n     this.level.drawBackground(this.ctx);\n     this.bird.animate(this.ctx);\n   //   console.log(this.bird.y)\n     if( this.bird.y > 630 || this.bird.y < 10 ) {\n         this.restart();\n     }\n     if ( this.running ) {\n      //   debugger\n        requestAnimationFrame(this.animate);\n     }\n  }\n  restart() {\n     this.running = false;\n     this.level = new _level_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n     this.bird = new _bird_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions)\n     this.animate()\n  }\n\n  click() {\n     if ( this.running === true ) {\n        this.bird.flap()\n     } else {\n      //   debugger\n        this.play();\n     }\n  }\n\n  \n}\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst canvas = document.getElementById('bird-game');\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.restart();\ngame.play();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _pipes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes.js */ \"./src/pipes.js\");\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [new _pipes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), new _pipes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](680), new _pipes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](840)]\n  }\n\n  drawBackground(ctx) {\n      ctx.fillStyle = \"skyblue\";\n      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n      \n     if (this.pipes[0].pos < 0) {\n        \n        this.pipes.shift()\n        this.pipes.push(new _pipes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]())\n     }\n      this.pipes.forEach( (pipe) => {\n         ctx.fillStyle = \"green\";\n         ctx.fillRect(pipe.pos, 0, pipe.length, pipe.gapPos[0]);\n         ctx.fillStyle = 'green';\n         ctx.fillRect(pipe.pos, pipe.gapPos[1], pipe.length, 640);\n         pipe.pos -= 3\n      })\n  }\n\n  \n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/pipes.js":
/*!**********************!*\
  !*** ./src/pipes.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pipe; });\n\n\nclass Pipe {\n   constructor(pos = 520) {\n      this.gapPos = this.constructPipes()\n      this.velocity = 1\n      this.length = 100;\n      this.pos = pos\n   }\n   // ctx.fillStyle = \"green\";\n   // ctx.fillRect(300, 0, 100, 250);\n   constructPipes() {\n      //640 480 490 450\n      let pipeOpen = Math.floor(Math.random() * 450) - 20;\n      let pipeClose = pipeOpen + 150;\n\n      return [pipeOpen, pipeClose]\n   }\n}\n\n//# sourceURL=webpack:///./src/pipes.js?");

/***/ })

/******/ });