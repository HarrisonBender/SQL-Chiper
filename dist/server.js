/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/routes/api/chirps.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/api/chirps.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar Chirps = __webpack_require__(/*! ../../chirpstore */ \"./src/server/chirpstore.js\");\nvar router = express.Router();\nrouter.get('/:id?', function (req, res, next) {\n    var id = req.params.id;\n    if (id) {\n        res.send(Chirps.GetChirp(id));\n    }\n    else {\n        res.send(Chirps.GetChirps());\n    }\n});\nrouter.post('/', function (req, res, next) {\n    var chirp = req.body;\n    Chirps.CreateChirp(chirp);\n    res.sendStatus(200);\n});\nrouter.put('/:id', function (req, res, next) {\n    var id = req.params.id;\n    var chirp = req.body;\n    Chirps.UpdateChirp(id, chirp);\n    res.sendStatus(200);\n});\nrouter.delete('/:id', function (req, res, next) {\n    var id = req.params.id;\n    Chirps.DeleteChirp(id);\n    res.sendStatus(200);\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-node-webpack/./src/server/routes/api/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/api/chirps.ts\");\nvar router = express.Router();\nrouter.use('/chirps', chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-node-webpack/./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\nvar router = express.Router();\nrouter.use('/api', api_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-node-webpack/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar path = __webpack_require__(/*! path */ \"path\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\nvar p = path.join(__dirname, '../public');\nconsole.log(p);\napp.use(express.static(p));\napp.use(express.json());\napp.use(routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () {\n    console.log(\"Server listening on port: \" + port);\n});\n\n\n//# sourceURL=webpack://barebones-react-node-webpack/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/chirpstore.js":
/*!**********************************!*\
  !*** ./src/server/chirpstore.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\nlet chirps = { nextid: 0 };\n\nif (fs.existsSync('chirps.json')) {\n    chirps = JSON.parse(fs.readFileSync('chirps.json'));\n}\n\nlet getChirps = () => {\n    return Object.assign({}, chirps); //create a copy and return it\n}\n\nlet getChirp = id => {\n    return Object.assign({}, chirps[id]); //create a copy and return it\n}\n\nlet createChirp = (chirp) => {\n    chirps[chirps.nextid++] = chirp;\n    writeChirps();\n};\n\nlet updateChirp = (id, chirp) => {\n    chirps[id] = chirp;\n    writeChirps();\n}\n\nlet deleteChirp = id => {\n    delete chirps[id];\n    writeChirps();\n}\n\nlet writeChirps = () => {\n    fs.writeFileSync('chirps.json', JSON.stringify(chirps, null, 2));\n};\n\nmodule.exports = {\n    CreateChirp: createChirp,\n    DeleteChirp: deleteChirp,\n    GetChirps: getChirps,\n    GetChirp: getChirp,\n    UpdateChirp: updateChirp\n}\n\n//# sourceURL=webpack://barebones-react-node-webpack/./src/server/chirpstore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;