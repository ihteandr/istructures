(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isctructers"] = factory();
	else
		root["isctructers"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack://isctructers/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/binary-three/index.js":
/*!***********************************!*\
  !*** ./src/binary-three/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BinaryTree = exports.BinaryTree = function () {\n    function BinaryTree(comparator) {\n        _classCallCheck(this, BinaryTree);\n\n        this._comparator = comparator || function defaultComparator(a, b) {\n            if (a === b) {\n                return 0;\n            }\n            return a > b ? 1 : -1;\n        };\n        this.top = null;\n    }\n\n    _createClass(BinaryTree, [{\n        key: \"put\",\n        value: function put(key, value) {\n            var newNode = {\n                value: value,\n                key: key,\n                left: null,\n                right: null\n            };\n            if (!this.top) {\n                this._setTop(newNode);\n            } else {\n                this._putNode(this.top, newNode);\n            }\n        }\n    }, {\n        key: \"get\",\n        value: function get(key) {\n            var node = this.top;\n            while (node) {\n                var compareResult = this._comparator(key, node.key);\n                if (compareResult === 0) {\n                    return node.value;\n                }\n                if (compareResult > 0) {\n                    node = node.right;\n                } else {\n                    node = node.left;\n                }\n            }\n            return undefined;\n        }\n    }, {\n        key: \"toArray\",\n        value: function toArray() {\n            var arr = [];\n            this._initArray(this.top, arr);\n            return arr;\n        }\n    }, {\n        key: \"toObject\",\n        value: function toObject() {\n            var obj = {};\n            this._initObject(this.top, obj);\n            return obj;\n        }\n    }, {\n        key: \"contains\",\n        value: function contains(key) {\n            return this.get(key) !== undefined;\n        }\n        // private functions\n\n    }, {\n        key: \"_initArray\",\n        value: function _initArray(node, arr) {\n            if (!node) {\n                return arr;\n            }\n            arr.push(node.value);\n            this._initArray(node.left, arr);\n            this._initArray(node.right, arr);\n            return arr;\n        }\n    }, {\n        key: \"_initObject\",\n        value: function _initObject(node, obj) {\n            if (!node) {\n                return obj;\n            }\n            if (obj[node.key]) {\n                obj[node.key].push(node.value);\n            } else {\n                obj[node.key] = [node.value];\n            }\n            this._initObject(node.left, obj);\n            this._initObject(node.right, obj);\n            return obj;\n        }\n    }, {\n        key: \"_putNode\",\n        value: function _putNode(node, newNode) {\n            var compareResult = this._comparator(newNode.key, node.key);\n            if (compareResult > 0) {\n                if (node.right) {\n                    this._putNode(node.right, newNode);\n                } else {\n                    node.right = newNode;\n                }\n            } else if (node.left) {\n                this._putNode(node.left, newNode);\n            } else {\n                node.left = newNode;\n            }\n        }\n    }, {\n        key: \"_setTop\",\n        value: function _setTop(node) {\n            this.top = node;\n        }\n    }]);\n\n    return BinaryTree;\n}();\n\n//# sourceURL=webpack://isctructers/./src/binary-three/index.js?");

/***/ }),

/***/ "./src/helpers/bubble-sort.js":
/*!************************************!*\
  !*** ./src/helpers/bubble-sort.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.bubble_sort = bubble_sort;\n/**\n * Created by Fujitsu on 6/4/2014.\n */\n\nfunction swap(arr, firstIndex, secondIndex) {\n    var temp = arr[firstIndex];\n    arr[firstIndex] = arr[secondIndex];\n    arr[secondIndex] = temp;\n}\n\nfunction bubble_sort(arr) {\n    var len = arr.length;\n    var i = 0;\n    var j = void 0;\n    var stop = void 0;\n    for (i; i < len; i++) {\n        for (j = 0, stop = len - i; j < stop; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr, j, j + 1);\n            }\n        }\n    }\n    return arr;\n}\n\n//# sourceURL=webpack://isctructers/./src/helpers/bubble-sort.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bubbleSort = __webpack_require__(/*! ./bubble-sort */ \"./src/helpers/bubble-sort.js\");\n\nObject.keys(_bubbleSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _bubbleSort[key];\n    }\n  });\n});\n\nvar _insertionSort = __webpack_require__(/*! ./insertion-sort */ \"./src/helpers/insertion-sort.js\");\n\nObject.keys(_insertionSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _insertionSort[key];\n    }\n  });\n});\n\nvar _mergeSort = __webpack_require__(/*! ./merge-sort */ \"./src/helpers/merge-sort.js\");\n\nObject.keys(_mergeSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _mergeSort[key];\n    }\n  });\n});\n\nvar _quickSort = __webpack_require__(/*! ./quick-sort */ \"./src/helpers/quick-sort.js\");\n\nObject.keys(_quickSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _quickSort[key];\n    }\n  });\n});\n\nvar _selectionSort = __webpack_require__(/*! ./selection-sort */ \"./src/helpers/selection-sort.js\");\n\nObject.keys(_selectionSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _selectionSort[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://isctructers/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/insertion-sort.js":
/*!***************************************!*\
  !*** ./src/helpers/insertion-sort.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.insertion_sort = insertion_sort;\n/**\n * Created by Fujitsu on 6/6/2014.\n */\nfunction insertion_sort(items) {\n    var len = items.length;\n    var value = void 0;\n    var i = void 0;\n    var j = void 0;\n\n    for (i = 0; i < len; i++) {\n        value = items[i];\n\n        for (j = i - 1; j > -1 && items[j] > value; j--) {\n            items[j + 1] = items[j];\n        }\n\n        items[j + 1] = value;\n    }\n\n    return items;\n}\n\n//# sourceURL=webpack://isctructers/./src/helpers/insertion-sort.js?");

/***/ }),

/***/ "./src/helpers/merge-sort.js":
/*!***********************************!*\
  !*** ./src/helpers/merge-sort.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.merge_sort = merge_sort;\n/**\n * Created by Fujitsu on 6/5/2014.\n */\nfunction merge(left, right) {\n    var result = [];\n    var li = 0;\n    var ri = 0;\n    while (li < left.length && ri < right.length) {\n        if (left[li] < right[ri]) {\n            result.push(left[li++]);\n        } else {\n            result.push(right[ri++]);\n        }\n    }\n\n    return result.concat(left.slice(li)).concat(right.slice(ri));\n}\n\nfunction merge_sort(arr) {\n    if (arr.length < 2) {\n        return arr;\n    }\n    var middle = Math.floor(arr.length / 2);\n    var left = arr.slice(0, middle);\n    var right = arr.slice(middle);\n    return merge(merge_sort(left), merge_sort(right));\n}\n\n//# sourceURL=webpack://isctructers/./src/helpers/merge-sort.js?");

/***/ }),

/***/ "./src/helpers/quick-sort.js":
/*!***********************************!*\
  !*** ./src/helpers/quick-sort.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.quick_sort = quick_sort;\n/**\n * Created by Fujitsu on 6/5/2014.\n */\n\nfunction swap(arr, first, second) {\n    var temp = arr[first];\n    arr[first] = arr[second];\n    arr[second] = temp;\n}\n\nfunction partition(arr, first, second) {\n    var middle = arr[Math.floor((first + second) / 2)];\n    var i = first;\n    var j = second;\n\n    while (i <= j) {\n        while (arr[i] < middle) {\n            i++;\n        }\n        while (arr[j] > middle) {\n            j--;\n        }\n        if (i <= j) {\n            swap(arr, i, j);\n            i++;\n            j--;\n        }\n    }\n    return i;\n}\n\nfunction quick_sort(arr, first, second) {\n    first = first || 0;\n    second = second === undefined ? arr.length - 1 : second;\n    var index = partition(arr, first, second);\n    if (first < index - 1) {\n        quick_sort(arr, first, index - 1);\n    }\n    if (index < second) {\n        quick_sort(arr, index, second);\n    }\n    return arr;\n}\n\n//# sourceURL=webpack://isctructers/./src/helpers/quick-sort.js?");

/***/ }),

/***/ "./src/helpers/selection-sort.js":
/*!***************************************!*\
  !*** ./src/helpers/selection-sort.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.selection_sort = selection_sort;\n/**\n * Created by Fujitsu on 6/5/2014.\n */\nfunction swap(arr, firstIndex, secondIndex) {\n    var temp = arr[firstIndex];\n    arr[firstIndex] = arr[secondIndex];\n    arr[secondIndex] = temp;\n}\n\nfunction selection_sort(arr) {\n    var len = arr.length;\n\n    for (var i = 0; i < len; i++) {\n        var min = i;\n        for (var j = i; j < len; j++) {\n            if (arr[min] > arr[j]) {\n                min = j;\n            }\n        }\n        swap(arr, min, i);\n    }\n    return arr;\n}\n\n//# sourceURL=webpack://isctructers/./src/helpers/selection-sort.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _linkedList = __webpack_require__(/*! ./linked-list */ \"./src/linked-list/index.js\");\n\nvar _stack = __webpack_require__(/*! ./stack */ \"./src/stack/index.js\");\n\nvar _queue = __webpack_require__(/*! ./queue */ \"./src/queue/index.js\");\n\nvar _priorityQueue = __webpack_require__(/*! ./priority-queue */ \"./src/priority-queue/index.js\");\n\nvar _binaryThree = __webpack_require__(/*! ./binary-three */ \"./src/binary-three/index.js\");\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n\nvar helpers = _interopRequireWildcard(_helpers);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar istructers = {\n    LinkedList: _linkedList.LinkedList,\n    Stack: _stack.Stack,\n    Queue: _queue.Queue,\n    PriorityQueue: _priorityQueue.PriorityQueue,\n    BinaryTree: _binaryThree.BinaryTree,\n    helpers: helpers\n};\n\nif (module !== undefined && module.exports !== undefined) {\n    module.exports = istructers;\n}\n\nexports.default = istructers;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://isctructers/./src/index.js?");

/***/ }),

/***/ "./src/linked-list/helpers/basic.js":
/*!******************************************!*\
  !*** ./src/linked-list/helpers/basic.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.slice = slice;\nexports.getValue = getValue;\n\nvar _index2 = __webpack_require__(/*! ../index */ \"./src/linked-list/index.js\");\n\nfunction slice(list, index, length) {\n    var newList = new _index2.LinkedList();\n    var _index = index || 0;\n    var _length = length || list.length;\n    var currentIndex = _index;\n    var node = list.getNode(index);\n    while (node && currentIndex < _index + _length) {\n        newList.push(node.value);\n        node = node.next;\n        currentIndex++;\n    }\n    return newList;\n}\n\nfunction getValue(node) {\n    return node ? node.value : null;\n}\n\n//# sourceURL=webpack://isctructers/./src/linked-list/helpers/basic.js?");

/***/ }),

/***/ "./src/linked-list/helpers/index.js":
/*!******************************************!*\
  !*** ./src/linked-list/helpers/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _basic = __webpack_require__(/*! ./basic */ \"./src/linked-list/helpers/basic.js\");\n\nObject.keys(_basic).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _basic[key];\n    }\n  });\n});\n\nvar _sorts = __webpack_require__(/*! ./sorts */ \"./src/linked-list/helpers/sorts/index.js\");\n\nObject.keys(_sorts).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _sorts[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://isctructers/./src/linked-list/helpers/index.js?");

/***/ }),

/***/ "./src/linked-list/helpers/sorts/index.js":
/*!************************************************!*\
  !*** ./src/linked-list/helpers/sorts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mergeSort = __webpack_require__(/*! ./merge-sort */ \"./src/linked-list/helpers/sorts/merge-sort.js\");\n\nObject.keys(_mergeSort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _mergeSort[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://isctructers/./src/linked-list/helpers/sorts/index.js?");

/***/ }),

/***/ "./src/linked-list/helpers/sorts/merge-sort.js":
/*!*****************************************************!*\
  !*** ./src/linked-list/helpers/sorts/merge-sort.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.merge = merge;\nexports.mergeSort = mergeSort;\n\nvar _index = __webpack_require__(/*! ../../index */ \"./src/linked-list/index.js\");\n\nvar _basic = __webpack_require__(/*! ../basic */ \"./src/linked-list/helpers/basic.js\");\n\nfunction merge(list1, list2, comparator) {\n    var node1 = list1.top;\n    var node2 = list2.top;\n    var list = new _index.LinkedList();\n    while (node1 || node2) {\n        if (!node1) {\n            list.push(node2.value);\n            node2 = node2.next;\n        } else if (!node2) {\n            list.push(node1.value);\n            node1 = node1.next;\n        } else {\n            var compareResult = comparator(node1.value, node2.value);\n            if (compareResult >= 0 || compareResult === true) {\n                list.push(node1.value);\n                node1 = node1.next;\n            } else {\n                list.push(node2.value);\n                node2 = node2.next;\n            }\n        }\n    }\n    return list;\n}\n\nfunction mergeSort(list, comparator) {\n    var _comparator = comparator || function defaultComparator(a, b) {\n        return a > b;\n    };\n    if (list.length === 1) {\n        return list;\n    }\n    var middle = Math.floor(list.length / 2);\n    return merge(mergeSort((0, _basic.slice)(list, 0, middle), _comparator), mergeSort((0, _basic.slice)(list, middle), _comparator), _comparator);\n}\n\n//# sourceURL=webpack://isctructers/./src/linked-list/helpers/sorts/merge-sort.js?");

/***/ }),

/***/ "./src/linked-list/index.js":
/*!**********************************!*\
  !*** ./src/linked-list/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LinkedList = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./src/linked-list/helpers/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LinkedList = exports.LinkedList = function () {\n    function LinkedList() {\n        _classCallCheck(this, LinkedList);\n\n        this.top = null;\n        this.length = 0;\n    }\n\n    _createClass(LinkedList, [{\n        key: 'indexOf',\n        value: function indexOf(value) {\n            var index = 0;\n            var node = this.top;\n            while (node) {\n                if (node.value === value) {\n                    return index;\n                }\n                node = node.next;\n                index++;\n            }\n            return -1;\n        }\n    }, {\n        key: 'lastIndexOf',\n        value: function lastIndexOf(value) {\n            var index = 0;\n            var lastIndex = -1;\n            var node = this.top;\n            while (node) {\n                if (node.value === value) {\n                    lastIndex = index;\n                }\n                node = node.next;\n                index++;\n            }\n            return lastIndex;\n        }\n    }, {\n        key: 'swap',\n        value: function swap(i, j) {\n            var nodeiInfo = this._getCurrentAndPrev(i);\n            var nodejInfo = this._getCurrentAndPrev(j);\n            if (nodeiInfo && nodejInfo) {\n                this._swap(nodeiInfo.prev, nodeiInfo.current, nodejInfo.prev, nodejInfo.current);\n            }\n        }\n    }, {\n        key: 'reverse',\n        value: function reverse() {\n            var isReal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n            if (isReal) {\n                var prev = null;\n                var current = this.top;\n                while (current) {\n                    var nextNode = current.next;\n                    current.next = prev;\n                    prev = current;\n                    current = nextNode;\n                }\n                this.top = prev;\n                return this;\n            }\n            var newList = new LinkedList();\n            this.toArray().reverse().forEach(function (value) {\n                newList.push(value);\n            });\n            return newList;\n        }\n    }, {\n        key: 'slice',\n        value: function slice(index, length) {\n            return (0, _helpers.slice)(this, index, length);\n        }\n    }, {\n        key: 'sort',\n        value: function sort(comparator) {\n            var isReal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n            var _comparator = comparator || function defaultComparator(a, b) {\n                return a > b;\n            };\n            if (!isReal) {\n                return (0, _helpers.mergeSort)(this, _comparator);\n            }\n            var iPrev = null;\n            var iNode = this.top;\n            while (iNode) {\n                var jNode = iNode;\n                var prevMinNode = null;\n                var min = iNode.value;\n                while (jNode.next) {\n                    var compareResult = _comparator(min, jNode.next.value);\n                    if (compareResult > 0) {\n                        min = jNode.next.value;\n                        prevMinNode = jNode;\n                    }\n                    jNode = jNode.next;\n                }\n                if (prevMinNode) {\n                    var nextNode = prevMinNode.next;\n                    this._swap(iPrev, iNode, prevMinNode, nextNode);\n                    iNode = nextNode;\n                }\n                iPrev = iNode;\n                iNode = iNode.next;\n            }\n            return this;\n        }\n    }, {\n        key: 'appendAt',\n        value: function appendAt(index, value) {\n            var info = this._getCurrentAndPrev(index);\n            if (info) {\n                this.length++;\n                var node = {\n                    value: value,\n                    next: info.current\n                };\n                if (info.prev) {\n                    info.prev.next = node;\n                } else {\n                    this.top = node;\n                }\n                return true;\n            }\n            return false;\n        }\n    }, {\n        key: 'removeAt',\n        value: function removeAt(index) {\n            var info = this._getCurrentAndPrev(index);\n            if (info) {\n                if (info.prev) {\n                    info.prev.next = info.current.next;\n                } else {\n                    this.top = info.current.next;\n                }\n                this.length--;\n                return info.current.value;\n            }\n            return null;\n        }\n    }, {\n        key: 'clear',\n        value: function clear() {\n            this.length = 0;\n            this.top = null;\n        }\n    }, {\n        key: 'forEach',\n        value: function forEach(fn) {\n            if (!this.top) {\n                return;\n            }\n            var node = this.top;\n            var index = 0;\n            while (node) {\n                fn(node, index);\n                index++;\n                node = node.next;\n            }\n        }\n    }, {\n        key: 'shift',\n        value: function shift() {\n            if (!this.top) {\n                return null;\n            }\n            var _node = this.top;\n            this.top = _node.next;\n            this.length--;\n            return _node.value;\n        }\n    }, {\n        key: 'unshift',\n        value: function unshift(value) {\n            var node = {\n                value: value,\n                next: null\n            };\n            if (!this.top) {\n                this._setTop(node);\n            } else {\n                var _node = this.top;\n                node.next = _node;\n                this.top = node;\n            }\n            this.length++;\n        }\n    }, {\n        key: 'push',\n        value: function push(value) {\n            var node = {\n                value: value,\n                next: null\n            };\n            if (!this.top) {\n                this._setTop(node);\n            } else {\n                var lastNode = this._getLastNode(this.top);\n                lastNode.next = node;\n            }\n            this.length++;\n        }\n    }, {\n        key: 'pop',\n        value: function pop() {\n            if (!this.top) {\n                return null;\n            }\n            this.length--;\n            var node = this.top;\n            if (!node.next) {\n                this.top = null;\n                return node.value;\n            }\n            while (node.next.next) {\n                node = node.next;\n            }\n            var lastNode = node.next;\n            node.next = null;\n            return lastNode.value;\n        }\n    }, {\n        key: 'get',\n        value: function get(index) {\n            var info = this._getCurrentAndPrev(index);\n            return (0, _helpers.getValue)(info ? info.current : null);\n        }\n    }, {\n        key: 'getNode',\n        value: function getNode(index) {\n            var info = this._getCurrentAndPrev(index);\n            return info ? info.current : null;\n        }\n    }, {\n        key: 'getFirst',\n        value: function getFirst() {\n            return (0, _helpers.getValue)(this.top);\n        }\n    }, {\n        key: 'getLast',\n        value: function getLast() {\n            return (0, _helpers.getValue)(this._getLastNode(this.top));\n        }\n    }, {\n        key: 'toArray',\n        value: function toArray() {\n            var arr = [];\n            var node = this.top;\n            while (node) {\n                arr.push(node.value);\n                node = node.next;\n            }\n            return arr;\n        }\n        // private methods\n\n    }, {\n        key: '_getCurrentAndPrev',\n        value: function _getCurrentAndPrev(index) {\n            if (!this.top || index < 0) {\n                return null;\n            }\n            var prev = null;\n            var _index = index;\n            var current = this.top;\n            while (current && _index !== 0) {\n                prev = current;\n                current = current.next;\n                _index--;\n            }\n            if (_index === 0) {\n                return {\n                    current: current,\n                    prev: prev\n                };\n            }\n            return null;\n        }\n    }, {\n        key: '_getLastNode',\n        value: function _getLastNode(node) {\n            if (!node) {\n                return null;\n            }\n            if (!node.next) {\n                return node;\n            }\n            return this._getLastNode(node.next);\n        }\n    }, {\n        key: '_setTop',\n        value: function _setTop(node) {\n            this.top = node;\n        }\n    }, {\n        key: '_clearMarkers',\n        value: function _clearMarkers() {\n            var node = this.top;\n            while (node) {\n                node.marker = undefined;\n                node = node.next;\n            }\n        }\n    }, {\n        key: '_isContainsCircular',\n        value: function _isContainsCircular() {\n            var node = this.top;\n            var isContainsCircular = false;\n            while (node) {\n                if (node.marker) {\n                    isContainsCircular = true;\n                    break;\n                }\n                node.marker = true;\n                node = node.next;\n            }\n            this._clearMarkers();\n            return isContainsCircular;\n        }\n    }, {\n        key: '_isLengthChanged',\n        value: function _isLengthChanged() {\n            var index = 0;\n            var node = this.top;\n            while (node) {\n                node = node.next;\n                index++;\n            }\n            return index === this.length - 1;\n        }\n    }, {\n        key: '_swap',\n        value: function _swap(iPrev, iNode, jPrev, jNode) {\n            var jNext = jNode.next;\n            if (iPrev) {\n                iPrev.next = jNode;\n            } else {\n                this.top = jNode;\n            }\n            if (jPrev) {\n                jPrev.next = iNode;\n            } else {\n                this.top = iNode;\n            }\n            if (jNode !== iNode.next) {\n                jNode.next = iNode.next;\n            } else {\n                jNode.next = iNode;\n            }\n            if (iNode !== jNext) {\n                iNode.next = jNext;\n            } else {\n                iNode.next = jNode;\n            }\n            console.assert(!this._isContainsCircular(), 'contains circular', arguments);\n            console.assert(!this._isLengthChanged(), 'length changed', arguments);\n        }\n    }]);\n\n    return LinkedList;\n}();\n\n//# sourceURL=webpack://isctructers/./src/linked-list/index.js?");

/***/ }),

/***/ "./src/priority-queue/index.js":
/*!*************************************!*\
  !*** ./src/priority-queue/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PriorityQueue = exports.PriorityQueue = function () {\n    function PriorityQueue(size) {\n        _classCallCheck(this, PriorityQueue);\n\n        this.size = size;\n        this._arr = [];\n    }\n\n    _createClass(PriorityQueue, [{\n        key: \"put\",\n        value: function put(item) {\n            if (this.length() === this.size) {\n                this.get();\n            }\n            this._arr.push(item);\n        }\n    }, {\n        key: \"get\",\n        value: function get() {\n            return this._arr.shift();\n        }\n    }, {\n        key: \"length\",\n        value: function length() {\n            return this._arr.length;\n        }\n    }]);\n\n    return PriorityQueue;\n}();\n\n//# sourceURL=webpack://isctructers/./src/priority-queue/index.js?");

/***/ }),

/***/ "./src/queue/index.js":
/*!****************************!*\
  !*** ./src/queue/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Queue = exports.Queue = function () {\n    function Queue() {\n        _classCallCheck(this, Queue);\n\n        this._arr = [];\n    }\n\n    _createClass(Queue, [{\n        key: \"put\",\n        value: function put(item) {\n            this._arr.push(item);\n        }\n    }, {\n        key: \"get\",\n        value: function get() {\n            this._arr.shift();\n        }\n    }, {\n        key: \"length\",\n        value: function length() {\n            return this._arr.length;\n        }\n    }]);\n\n    return Queue;\n}();\n\n//# sourceURL=webpack://isctructers/./src/queue/index.js?");

/***/ }),

/***/ "./src/stack/index.js":
/*!****************************!*\
  !*** ./src/stack/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Stack = exports.Stack = function () {\n    function Stack() {\n        _classCallCheck(this, Stack);\n\n        this._arr = [];\n    }\n\n    _createClass(Stack, [{\n        key: \"put\",\n        value: function put(item) {\n            this._arr.push(item);\n        }\n    }, {\n        key: \"get\",\n        value: function get() {\n            this._arr.pop();\n        }\n    }, {\n        key: \"length\",\n        value: function length() {\n            return this._arr.length;\n        }\n    }]);\n\n    return Stack;\n}();\n\n//# sourceURL=webpack://isctructers/./src/stack/index.js?");

/***/ })

/******/ });
});