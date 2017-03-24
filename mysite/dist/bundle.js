/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var MainPanel_1 = __webpack_require__(6);
ReactDOM.render(React.createElement("div", null,
    React.createElement(MainPanel_1.MainComponent, { panelTitle: "", groupPanelTitle: "" })), document.getElementById("example"));


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var GroupPanelComponent_1 = __webpack_require__(7);
var DetailProfileComponent_1 = __webpack_require__(12);
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainComponent.prototype.render = function () {
        return React.createElement("div", { className: "container blueLayout" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement(GroupPanelComponent_1.GroupPanelComponent, { title: "main title" }, " ")),
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement(DetailProfileComponent_1.DetailProfileComponent, { title: "Detail" }, " "))));
    };
    return MainComponent;
}(React.Component));
exports.MainComponent = MainComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Header_1 = __webpack_require__(8);
var UserPanelComponent_1 = __webpack_require__(10);
var ContactListComponent_1 = __webpack_require__(11);
var GroupPanelComponent = (function (_super) {
    __extends(GroupPanelComponent, _super);
    function GroupPanelComponent() {
        var _this = _super.call(this) || this;
        console.log("group panel created");
        return _this;
    }
    GroupPanelComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Header_1.HeaderComponent, { title: "Header", imageUrl: "" }),
            React.createElement(UserPanelComponent_1.UserPanelComponent, { title: "Jeremy Woo" }),
            React.createElement(ContactListComponent_1.ContactListComponent, { title: "" }));
    };
    return GroupPanelComponent;
}(React.Component));
exports.GroupPanelComponent = GroupPanelComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("span", null,
                React.createElement("img", { src: "images/group.png" })));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var UserPanelComponent = (function (_super) {
    __extends(UserPanelComponent, _super);
    function UserPanelComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserPanelComponent.prototype.render = function () {
        return React.createElement("div", { className: "userPanelLayout" },
            React.createElement("li", { className: "avatarLayout" },
                React.createElement("img", { src: "images/profile_anony.jpg", className: "avatar" })),
            React.createElement("li", null,
                " ",
                this.props.title,
                " "));
    };
    return UserPanelComponent;
}(React.Component));
exports.UserPanelComponent = UserPanelComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var UserPanelComponent_1 = __webpack_require__(10);
var ContactListComponent = (function (_super) {
    __extends(ContactListComponent, _super);
    function ContactListComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactListComponent.prototype.render = function () {
        var names = ['Jake', 'Jon', 'Thruster'];
        var list = names.map(function (name) {
            return React.createElement(UserPanelComponent_1.UserPanelComponent, { key: name, title: name });
        });
        return React.createElement("div", { className: "contactListLayout" }, list);
    };
    return ContactListComponent;
}(React.Component));
exports.ContactListComponent = ContactListComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DetailProfileComponent = (function (_super) {
    __extends(DetailProfileComponent, _super);
    function DetailProfileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailProfileComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                React.createElement("li", { role: "presentation", className: "active" },
                    React.createElement("a", { href: "#home", "aria-controls": "home", role: "tab", "data-toggle": "tab" }, "Home")),
                React.createElement("li", { role: "presentation" },
                    React.createElement("a", { href: "#profile", "aria-controls": "profile", role: "tab", "data-toggle": "tab" }, "Profile")),
                React.createElement("li", { role: "presentation" },
                    React.createElement("a", { href: "#messages", "aria-controls": "messages", role: "tab", "data-toggle": "tab" }, "Messages")),
                React.createElement("li", { role: "presentation" },
                    React.createElement("a", { href: "#settings", "aria-controls": "settings", role: "tab", "data-toggle": "tab" }, "Settings"))),
            React.createElement("div", { className: "tab-content" },
                React.createElement("div", { role: "tabpanel", className: "tab-pane active", id: "home" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, dolorum, animi. Inventore officiis minus dicta quo officia earum, distinctio velit ut reprehenderit labore veritatis quae architecto totam fuga fugit facilis."),
                React.createElement("div", { role: "tabpanel", className: "tab-pane", id: "profile" }),
                React.createElement("div", { role: "tabpanel", className: "tab-pane", id: "messages" }),
                React.createElement("div", { role: "tabpanel", className: "tab-pane", id: "settings" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos quisquam nisi temporibus, perferendis, nemo reprehenderit similique possimus earum natus expedita quo magni dignissimos cupiditate et eaque a quis, reiciendis?")));
    };
    return DetailProfileComponent;
}(React.Component));
exports.DetailProfileComponent = DetailProfileComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map