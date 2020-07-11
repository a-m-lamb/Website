(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<!-- <app-home></app-home> -->\n<!-- <app-flashcards></app-flashcards>\n<app-blog></app-blog> -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>blog works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"position\">\n    <div id=\"stuff\">\n        <h1 id=\"question\"></h1>\n        <div id=\"seeAnswer\"></div>\n    </div>\n \n\n    <button id=\"btn\">Next Card</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n\n\n<div id=\"fullpageheader\">\n    <button id=\"arrow_container\" onClick=\"document.getElementById('profile_text').scrollIntoView();\">\n        <h1 id=\"header_arrow\">↡</h1>\n    </button>\n    <div>\n\n        <h1 id=\"header_text\">ADRI- ANA LONG</h1>\n\n    </div>\n\n</div>\n<div id=\"the_component\">\n    <h1 id=\"profile_text\" style=\"text-align: center;\">Profile</h1>\n    <!-- <div id=social>\n        <a href=\"https://github.com/a-m-long\" class=\"fa fa-github\"></a>\n        <a href=\"https://www.linkedin.com/in/adriana-l-938a51146/\" class=\"fa fa-linkedin\"></a>\n    </div> -->\n    <div id=\"secondary_container\" style=\"float: right; width: 45%; margin-bottom: 45px;\">\n\n        <img id=\"circle\" media=\"all\"\n            src=\"https://avatars0.githubusercontent.com/u/55103544?s=460&u=ad95dc189d4a59c593f9a5ecfa21311802c24ce9&v=4\">\n        <p id=\"text\" style=\"margin-top:60px;\">I am a software engineer with experience in\n            building full-stack and Hadoop applications. My skillsets include using Big Data\n            and Data Warehouse technologies such as Spark, Hive, Snowflake, Informatica, and MapReduce to analyze\n            and filter large datasets. I also have experience creating front-end applications using JavaScript,\n            Angular, Django, and Bootstrap. Tomcat is a server-side technology that I have experience in.\n            The specific details of my capabilities and accomplishments are below.\n        </p>\n        <div id=\"btn_location\">\n\n            <button id=\"btn\">Check out my Resume</button>\n        </div>\n    </div>\n    <div id=\"wrapper\">\n\n        <div id=\"front_end\" on-mouseover=\"this.change = this.front_end\">\n            <h1 on-mouseover=\"this.change = this.front_end\">Front-end</h1>\n        </div>\n        <div id=\"database\" on-mouseover=\"change = database_technologies\">\n            <h1>Database/Datawarehouse</h1>\n        </div>\n        <div id=\"programming_languages\" on-mouseover=\"change = programming_languages\">\n            <h1>Programming Languages</h1>\n        </div>\n\n        <div *ngFor=\"let item of this.change | keyvalue\">\n            <div id=\"bar\">\n                <h2 id=\"skill\">{{item.key}} <h3 id=\"confidence\" [style.left]=\"item.value\">{{item.value}}</h3>\n                </h2>\n                <span><span :before [style.width]=\"item.value\" [style.height]=\"item.value\" style=\"height:30%; background: \n                linear-gradient(to left, purple, blue);top: 6px;\n                 border-radius: 50px;animation: bar 4s ease;\"></span></span>\n                <br>\n                <br>\n            </div>\n        </div>\n\n\n\n    </div>\n    <div id=\"ex_container\" style=\"width: 100%; position: absolute; margin-top: 30px;\">\n        <div id=\"experience\" style=\"height: 200px; position: absolute;\">\n            <h1 style=\"text-align: center; \">Experience</h1>\n            <div id=\"revature\" style=\"float: left;\">\n                <h2>Revature</h2>\n                <p>Sep-2019 to Dec-2019</p>\n\n            </div>\n        </div>\n        <div id=\"experience_content\">\n            <h2 id=\"revature_content\"> Java Full-stack developer who was responsible for developing\n                multiple full-stack applications. </h2>\n        </div>\n        <div id=\"experience\" style=\"height: 200px; position: absolute;\">\n            <h1 style=\"text-align: center; margin-top: 220px;\"></h1>\n            <div id=\"revature\" style=\"float: left;\">\n                <h2>Infosys</h2>\n                <p>Dec-2019 to Current</p>\n\n            </div>\n        </div>\n        <div id=\"experience_content\">\n            <h2 id=\"revature_content\"> Java Full-stack developer who was responsible for developing\n                multiple full-stack applications. </h2>\n        </div>\n    </div>\n\n\n\n    <div id=\"footer\">\n\n        <p id=\"footer_info\">This is an Angular site made by @Adriana Long</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\">\n    <a href=\"#default\" id=\"logo\">Adriana Long</a>\n    <div id=\"navbar-right\">\n      <a class=\"active\" href=\"\">Home</a>\n      <a src=\"C:/Users/Ana/Downloads/Career/Adriana_Long_Resume.pdf\">Resume</a>\n      <a routerLink=\"flashcard\" routerLinkActive=\"active\" >Flashcards</a>\n      <a href=\"#about\">Blog</a>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_flashcards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/flashcards.component */ "./src/app/components/flashcards.component.ts");
/* harmony import */ var _components_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog.component */ "./src/app/components/blog.component.ts");
/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar.component */ "./src/app/components/navbar.component.ts");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










 // CLI imports router
const routes = [
    { path: '', component: _components_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'flashcard', component: _components_flashcards_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardsComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_flashcards_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardsComponent"],
            _components_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
            _components_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/components/blog.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "./src/app/service/blog.service.ts");



let BlogComponent = class BlogComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getBlogPosts();
    }
};
BlogComponent.ctorParameters = () => [
    { type: _service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/components/flashcards.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/flashcards.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#position{\r\n    position: relative;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    border-radius: 10%;\r\n    border: 3px black;\r\n    background-color: blueviolet;\r\n    width: 50%;\r\n    margin-top: 20%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 20%;\r\n    overflow: hidden;\r\n}\r\n#stuff{\r\n    padding-bottom: 3%;\r\n}\r\n#btn{\r\n    color: turquoise;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYm9yZGVyOiAzcHggYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jc3R1ZmZ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuI2J0bntcclxuICAgIGNvbG9yOiB0dXJxdW9pc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/flashcards.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/flashcards.component.ts ***!
  \****************************************************/
/*! exports provided: FlashcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardsComponent", function() { return FlashcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_flashcard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/flashcard.service */ "./src/app/service/flashcard.service.ts");



let FlashcardsComponent = class FlashcardsComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllSQL();
    }
};
FlashcardsComponent.ctorParameters = () => [
    { type: _service_flashcard_service__WEBPACK_IMPORTED_MODULE_2__["FlashcardService"] }
];
FlashcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flashcards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flashcards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flashcards.component.css */ "./src/app/components/flashcards.component.css")).default]
    })
], FlashcardsComponent);



/***/ }),

/***/ "./src/app/components/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/components/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fullpageheader{\r\n    /* position: fixed; */\r\n    /* position: static; */\r\n    position: absolute;\r\n    background-image: url(\"https://images.unsplash.com/photo-1517475452665-4e6898befa13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1941&q=80\");\r\n    padding: 100px;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    height: 80%;\r\n    right: 0px;\r\n   \r\n  \r\n  }\r\n  #ex_container{\r\n      background-color: lightskyblue;\r\n  }\r\n  #revature_content{\r\n    margin-top: 110px;\r\n    font-size: 30px;\r\n    width: 80%;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n  }\r\n  #experience{\r\n      margin-top: 900px;\r\n      margin-bottom: 300px;\r\n      position: absolute;\r\n      position: static;\r\n      width: 100%;\r\n      left: 50px;\r\n  }\r\n  #experience_content{\r\n    margin-top: 900px;\r\n    margin-bottom: 300px;\r\n    position: absolute;\r\n    float: right;\r\n    left: 500px;\r\n    width: 75%;\r\n    \r\n\r\n  }\r\n  #header_text{\r\n      font-size: 150px;\r\n      width: 20%;\r\n      color: black;\r\n      float: right;\r\n      right: 300px;\r\n      position: relative;\r\n      margin-top: 15%;\r\n  }\r\n  #arrow_container{\r\n      height: 300px;\r\n      border-radius: 50%;\r\n      width: 300px;\r\n      background-color: burlywood;\r\n      float: left;\r\n      text-align: center;\r\n      margin-top: 30%;\r\n      \r\n     \r\n\r\n  }\r\n  #header_arrow{\r\n      margin-top: 3%;\r\n      font-size: 250px;\r\n      \r\n  }\r\n  #front_end{\r\n      background-color: honeydew;\r\n      position: relative;\r\n      float: left;\r\n      font-size: 10px;\r\n      padding: 20px;\r\n  }\r\n  #front_end:hover{\r\n      background-color: goldenrod;\r\n  }\r\n  #database{\r\n    background-color: gray;\r\n    position: relative;\r\n    float: left;\r\n    font-size: 10px;\r\n    padding: 20px;\r\n  }\r\n  #database:hover{\r\n      background-color: goldenrod;\r\n  }\r\n  #programming_languages{\r\n    background-color: indianred;\r\n    position: relative;\r\n    float: left;\r\n    font-size: 10px;\r\n    padding: 20px;\r\n  }\r\n  #programming_languages:hover{\r\n      background-color: goldenrod;\r\n  }\r\n  #the_component{\r\n    max-width: 100%;\r\n    position: fixed;\r\n    position: static;\r\n    position: absolute;\r\n    margin-top: 65%;\r\n    overflow: hidden;\r\n    background-color: seashell;\r\n    right: 0px;\r\n    height: 1600px;\r\n\r\n  }\r\n  #footer{\r\n      width: 100%;\r\n      background-color: gray;\r\n      padding: 3px;\r\n      position: absolute;\r\n      margin-top: 300px;\r\n      bottom: 0;\r\n\r\n  }\r\n  #btn_location{\r\n      position: static;\r\n      position: relative;\r\n      text-align: center;  \r\n      \r\n  }\r\n  #btn{\r\n     font-size: 20px;\r\n     padding: 30px;\r\n     text-align: center;\r\n     border-radius: 10px;\r\n     position: relative;\r\n  }\r\n  #secondary_container button:hover{\r\n      background-color: hotpink;\r\n      color: green;\r\n  }\r\n  #text{\r\n      margin-top: 100px;\r\n      position: relative;\r\n      font-size: 30px;\r\n      font-weight: 400;\r\n      color: whitesmoke;\r\n      margin: 10px;\r\n      letter-spacing: 2px;\r\n    \r\n     \r\n  }\r\n  #circle{\r\n    float: left;\r\n    background-color: blanchedalmond;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    width: 250px;\r\n    height: 250px;\r\n    left: 20px;\r\n    shape-outside: circle();\r\n    margin: 20px;\r\n    -webkit-filter: grayscale(95%);\r\n            filter: grayscale(95%);\r\n    transition:  .3s ease-in-out;\r\n \r\n    \r\n}\r\n  .fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n  /* Add a hover effect if you want */\r\n  .fa:hover {\r\n    opacity: 0.7;\r\n  }\r\n  /* Set a specific color for each brand */\r\n  /* Facebook */\r\n  .fa-github {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n  /* Twitter */\r\n  .fa-linkedin {\r\n    background: #55ACEE;\r\n    color: white;\r\n  }\r\n  #footer_info{\r\n    text-align: left;\r\n    left: 20px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    position: relative;\r\n}\r\n  #social{\r\n    padding: 30px;\r\n    background-color: grey;\r\n    width: 8%;\r\n    height: 200px;\r\n    float: right;\r\n    left: 300px;\r\n    margin: 38px auto 0;\r\n    border-radius: 0px 0px 30px 30px;\r\n}\r\n  #circle:hover{\r\n    -webkit-filter: none;\r\n            filter: none;\r\n}\r\n  #secondary_container{\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding:20px;\r\n    width: 70%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 10px;\r\n}\r\n  #wrapper{\r\n    max-width: 60%;\r\n    margin: 0px auto 0;\r\n    width: 48%;\r\n    background-color: cadetblue;\r\n    position: relative;\r\n    padding: 20px;\r\n    float: left;\r\n    margin-bottom: 100px;\r\n}\r\n  #bar{\r\n    color: burlywood;\r\n    letter-spacing: 1px;\r\n    font-weight: 300;\r\n    font-size: 16px;\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n  #wrapper{\r\n    \r\n    border-radius: 20px;\r\n    position: absolute;\r\n    float: left;\r\n}\r\n  #bar span{\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 25px;\r\n    background-color: black;\r\n    border-radius: 50px;\r\n}\r\n  #bar span::before{\r\n    position: absolute;\r\n    content: '';\r\n    top: 6px;\r\n    /* width: 80%;\r\n    height: 80%; */\r\n    background: linear-gradient(to left, purple, blue);\r\n    border-radius: 50px;\r\n    -webkit-animation: bar 4s ease;\r\n            animation: bar 4s ease;\r\n}\r\n  @-webkit-keyframes bar{\r\n    from{\r\n        width: 0;\r\n    }\r\n}\r\n  @keyframes bar{\r\n    from{\r\n        width: 0;\r\n    }\r\n}\r\n  #bar:nth-child(1) span::before{\r\n    /* width: 60%; */\r\n}\r\n  h3{\r\n    font-size: 25px;\r\n    width: 50px;\r\n    display: inline-block;\r\n    height: 45px;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n    line-height: 35px;\r\n    position: absolute;\r\n    top: 29px;\r\n    z-index: 1;\r\n    background: linear-gradient(to left, purple, blue);\r\n    box-shadow: 0 5px 20px;\r\n    -webkit-animation:  count 4s ease;\r\n            animation:  count 4s ease;\r\n}\r\n  @-webkit-keyframes count{\r\n    from{\r\n        left: 0%;\r\n\r\n    }\r\n}\r\n  @keyframes count{\r\n    from{\r\n        left: 0%;\r\n\r\n    }\r\n}\r\n  #bar:nth-child(1) h3{\r\n    left:60%;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwrSkFBK0o7SUFDL0osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7OztFQUdaO0VBQ0E7TUFDSSw4QkFBOEI7RUFDbEM7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFHQTtNQUNJLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsVUFBVTtFQUNkO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7OztFQUdaO0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO0VBQ25CO0VBQ0E7TUFDSSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlOzs7O0VBSW5CO0VBQ0E7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCOztFQUVwQjtFQUVBO01BQ0ksMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLGFBQWE7RUFDakI7RUFFQTtNQUNJLDJCQUEyQjtFQUMvQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO01BQ0ksMkJBQTJCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7TUFDSSwyQkFBMkI7RUFDL0I7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsY0FBYzs7RUFFaEI7RUFDQTtNQUNJLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsU0FBUzs7RUFFYjtFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrQkFBa0I7O0VBRXRCO0VBQ0E7S0FDRyxlQUFlO0tBQ2YsYUFBYTtLQUNiLGtCQUFrQjtLQUNsQixtQkFBbUI7S0FDbkIsa0JBQWtCO0VBQ3JCO0VBRUE7TUFDSSx5QkFBeUI7TUFDekIsWUFBWTtFQUNoQjtFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osbUJBQW1COzs7RUFHdkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUE0Qjs7O0FBR2hDO0VBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsWUFBWTtFQUNkO0VBRUEsd0NBQXdDO0VBRXhDLGFBQWE7RUFDYjtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFFQSxZQUFZO0VBQ1o7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0VBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0VBRUE7SUFDSSxvQkFBWTtZQUFaLFlBQVk7QUFDaEI7RUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0VBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0VBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7RUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSO2tCQUNjO0lBQ2Qsa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0VBRUE7SUFDSTtRQUNJLFFBQVE7SUFDWjtBQUNKO0VBSkE7SUFDSTtRQUNJLFFBQVE7SUFDWjtBQUNKO0VBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7RUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7RUFFQTtJQUNJO1FBQ0ksUUFBUTs7SUFFWjtBQUNKO0VBTEE7SUFDSTtRQUNJLFFBQVE7O0lBRVo7QUFDSjtFQUVBO0lBQ0ksUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZnVsbHBhZ2VoZWFkZXJ7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogc3RhdGljOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTc0NzU0NTI2NjUtNGU2ODk4YmVmYTEzP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTQxJnE9ODBcIik7XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgIFxyXG4gIFxyXG4gIH1cclxuICAjZXhfY29udGFpbmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgfVxyXG4gICNyZXZhdHVyZV9jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiBcclxuXHJcbiAgI2V4cGVyaWVuY2V7XHJcbiAgICAgIG1hcmdpbi10b3A6IDkwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGVmdDogNTBweDtcclxuICB9XHJcblxyXG4gICNleHBlcmllbmNlX2NvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA5MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGVmdDogNTAwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuXHJcbiAgI2hlYWRlcl90ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcmlnaHQ6IDMwMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICB9XHJcbiAgI2Fycm93X2NvbnRhaW5lcntcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgICBcclxuICAgICBcclxuXHJcbiAgfVxyXG4gICNoZWFkZXJfYXJyb3d7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICBmb250LXNpemU6IDI1MHB4O1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gICNmcm9udF9lbmR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAjZnJvbnRfZW5kOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgfVxyXG4gICNkYXRhYmFzZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICNkYXRhYmFzZTpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG4gIH1cclxuICAjcHJvZ3JhbW1pbmdfbGFuZ3VhZ2Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAjcHJvZ3JhbW1pbmdfbGFuZ3VhZ2VzOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgfVxyXG5cclxuICAjdGhlX2NvbXBvbmVudHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA2NSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vhc2hlbGw7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxNjAwcHg7XHJcblxyXG4gIH1cclxuICAjZm9vdGVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgICBib3R0b206IDA7XHJcblxyXG4gIH1cclxuICAjYnRuX2xvY2F0aW9ue1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICBcclxuICB9XHJcbiAgI2J0bntcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgcGFkZGluZzogMzBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjc2Vjb25kYXJ5X2NvbnRhaW5lciBidXR0b246aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gICN0ZXh0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBcclxuICAgICBcclxuICB9XHJcbiAgI2NpcmNsZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoKTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDk1JSk7XHJcbiAgICB0cmFuc2l0aW9uOiAgLjNzIGVhc2UtaW4tb3V0O1xyXG4gXHJcbiAgICBcclxufVxyXG4uZmEge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBob3ZlciBlZmZlY3QgaWYgeW91IHdhbnQgKi9cclxuICAuZmE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgYSBzcGVjaWZpYyBjb2xvciBmb3IgZWFjaCBicmFuZCAqL1xyXG4gIFxyXG4gIC8qIEZhY2Vib29rICovXHJcbiAgLmZhLWdpdGh1YiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBUd2l0dGVyICovXHJcbiAgLmZhLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuI2Zvb3Rlcl9pbmZve1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jc29jaWFse1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGVmdDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDM4cHggYXV0byAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XHJcbn1cclxuXHJcbiNjaXJjbGU6aG92ZXJ7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlfY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3dyYXBwZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG4jYmFye1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN3cmFwcGVye1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNiYXIgc3BhbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4jYmFyIHNwYW46OmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICAvKiB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcHVycGxlLCBibHVlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBhbmltYXRpb246IGJhciA0cyBlYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhcntcclxuICAgIGZyb217XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNiYXI6bnRoLWNoaWxkKDEpIHNwYW46OmJlZm9yZXtcclxuICAgIC8qIHdpZHRoOiA2MCU7ICovXHJcbn1cclxuXHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyOXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBwdXJwbGUsIGJsdWUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweDtcclxuICAgIGFuaW1hdGlvbjogIGNvdW50IDRzIGVhc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY291bnR7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuI2JhcjpudGgtY2hpbGQoMSkgaDN7XHJcbiAgICBsZWZ0OjYwJTtcclxufVxyXG5cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.front_end = { "Typescript": "80%", "Angular 8": "80%", "JavaScript": "70%", "Django": "55%", "HTML/CSS": "90%", "Bootstrap": "90%" };
        this.programming_languages = { "Typescript:": "80%", "Java": "95%", "JavaScript": "70%", "Python": "95%", "SQL": "90%", };
        this.database_technologies = { "SQL": "90%", "Spark": "85%", "Snowflake": "80%", "Hadoop": "80%", "Postgres": "85%", "MySQL": "95%", "MapReduce": "55%" };
        this.change = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let header_text = document.getElementById("header_text");
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navbar.component.css":
/*!*************************************************!*\
  !*** ./src/app/components/navbar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navbar {\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n    padding: 50px 0px; /* Large padding which will shrink on scroll (using JS) */\r\n    transition: 0.4s; /* Adds a transition effect when the padding is decreased */\r\n    position: fixed; /* Sticky/fixed navbar */\r\n    width: 100%;\r\n    top: 0; /* At the top */\r\n    z-index: 99;\r\n    right: 0px;\r\n  }\r\n\r\n  \r\n  /* Style the navbar links */\r\n\r\n  \r\n  #navbar a {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  \r\n  }\r\n\r\n  \r\n  /* Style the logo */\r\n\r\n  \r\n  #navbar #logo {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    transition: 0.4s;\r\n    font-style: oblique;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    left: 30px;\r\n  }\r\n\r\n  \r\n  #logo{\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  /* Links on mouse-over */\r\n\r\n  \r\n  #navbar a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n  \r\n  /* Style the active/current link */\r\n\r\n  \r\n  #navbar a.active {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n  }\r\n\r\n  \r\n  /* Display some links to the right */\r\n\r\n  \r\n  #navbar-right {\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  /* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */\r\n\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    #navbar {\r\n      padding: 20px 10px !important; /* Use !important to make sure that JavaScript doesn't override the padding on small screens */\r\n    }\r\n    #navbar a {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      \r\n    }\r\n    #navbar-right {\r\n      float: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCLEVBQUUseURBQXlEO0lBQzVFLGdCQUFnQixFQUFFLDJEQUEyRDtJQUM3RSxlQUFlLEVBQUUsd0JBQXdCO0lBQ3pDLFdBQVc7SUFDWCxNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXO0lBQ1gsVUFBVTtFQUNaOzs7RUFHQSwyQkFBMkI7OztFQUMzQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOzs7RUFFQSxtQkFBbUI7OztFQUNuQjtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzRUFBc0U7SUFDdEUsVUFBVTtFQUNaOzs7RUFDQTtJQUNFLFlBQVk7O0VBRWQ7OztFQUVBLHdCQUF3Qjs7O0VBQ3hCO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7O0VBRUEsa0NBQWtDOzs7RUFDbEM7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkOzs7RUFFQSxvQ0FBb0M7OztFQUNwQztJQUNFLFlBQVk7O0VBRWQ7OztFQUVBLGdIQUFnSDs7O0VBQ2hIO0lBQ0U7TUFDRSw2QkFBNkIsRUFBRSw4RkFBOEY7SUFDL0g7SUFDQTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsZ0JBQWdCOztJQUVsQjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDsgLyogTGFyZ2UgcGFkZGluZyB3aGljaCB3aWxsIHNocmluayBvbiBzY3JvbGwgKHVzaW5nIEpTKSAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC40czsgLyogQWRkcyBhIHRyYW5zaXRpb24gZWZmZWN0IHdoZW4gdGhlIHBhZGRpbmcgaXMgZGVjcmVhc2VkICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0aWNreS9maXhlZCBuYXZiYXIgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwOyAvKiBBdCB0aGUgdG9wICovXHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbmF2YmFyIGxpbmtzICovXHJcbiAgI25hdmJhciBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbG9nbyAqL1xyXG4gICNuYXZiYXIgI2xvZ28ge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAjbG9nb3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBvbiBtb3VzZS1vdmVyICovXHJcbiAgI25hdmJhciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXHJcbiAgI25hdmJhciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBEaXNwbGF5IHNvbWUgbGlua3MgdG8gdGhlIHJpZ2h0ICovXHJcbiAgI25hdmJhci1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHJlc3BvbnNpdmVuZXNzIC0gb24gc2NyZWVucyBsZXNzIHRoYW4gNTgwcHggd2lkZSwgZGlzcGxheSB0aGUgbmF2YmFyIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgI25hdmJhciB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAhaW1wb3J0YW50OyAvKiBVc2UgIWltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBKYXZhU2NyaXB0IGRvZXNuJ3Qgb3ZlcnJpZGUgdGhlIHBhZGRpbmcgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gICAgI25hdmJhciBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICNuYXZiYXItcmlnaHQge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/navbar.service */ "./src/app/service/navbar.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.theNavbarStuff();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _service_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/service/blog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/blog.service.ts ***!
  \*****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BlogService = class BlogService {
    constructor(http) {
        this.http = http;
    }
    getBlogPosts() {
        return this.http.get("https://localhost:8080/ProjectTwo/blog/getAll.app").subscribe(data => {
            this.blogInfo = data;
            console.log(this.blogInfo);
        });
    }
};
BlogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ "./src/app/service/flashcard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/flashcard.service.ts ***!
  \**********************************************/
/*! exports provided: FlashcardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardService", function() { return FlashcardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FlashcardService = class FlashcardService {
    constructor(http) {
        this.http = http;
        this.data = null;
        //this is to get the values from wherever
        this.url = "https://super-crud.herokuapp.com/pokemon";
    }
    getAllSQL() {
        this.http.get('http://127.0.0.1:5002/sql').subscribe(data => {
            let sql_questions = this.sqlData = data;
            let x = 0;
            let btn = document.getElementById("btn");
            btn.addEventListener("click", next_card);
            let seeAnswer = document.getElementById("seeAnswer");
            seeAnswer.addEventListener("click", flip);
            let individual = sql_questions[x];
            this.question = individual[0];
            this.answer = individual[1];
            this.message = "Show Answer";
            document.getElementById("seeAnswer").innerHTML = this.message;
            document.getElementById("question").innerHTML = this.question;
            document.getElementById("answer").innerHTML = this.answer;
            function next_card() {
                individual = sql_questions[x += 1];
                if (x >= sql_questions.length) {
                    x = 0;
                }
                this.question = individual[0];
                this.answer = individual[1];
                this.message = "Show Answer";
                document.getElementById("seeAnswer").innerHTML = this.message;
                document.getElementById("question").innerHTML = this.question;
                document.getElementById("answer").innerHTML = this.answer;
            }
            function flip() {
                this.answer = individual[1];
                document.getElementById("seeAnswer").innerHTML = this.answer;
            }
        });
    }
};
FlashcardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FlashcardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FlashcardService);



/***/ }),

/***/ "./src/app/service/navbar.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/navbar.service.ts ***!
  \*******************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarService = class NavbarService {
    constructor() { }
    theNavbarStuff() {
        window.onscroll = function () {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "30px 5px";
                document.getElementById("logo").style.fontSize = "25px";
                document.getElementById("navbar").style.backgroundColor = "whitesmoke";
            }
            else {
                document.getElementById("navbar").style.padding = "50px 5px";
                document.getElementById("navbar").style.backgroundColor = "transparent";
                document.getElementById("logo").style.fontSize = "35px";
            }
        };
    }
};
NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavbarService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularFlashCardWebsite\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map