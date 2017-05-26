"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bindings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bindings = exports.Bindings = function (_React$Component) {
  _inherits(Bindings, _React$Component);

  _createClass(Bindings, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "item react-menu-item" },
        _react2.default.createElement(
          "a",
          { className: "title" },
          _react2.default.createElement("i", { className: "dropdown icon" }),
          _react2.default.createElement(
            "b",
            null,
            "Bindings"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "content menu" },
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsDescription" },
            "Description"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsDeclaring" },
            "Declaring"
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsValue" },
            "value"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsText" },
            "text"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsHtml" },
            "html"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsClass" },
            "class"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsStyle" },
            "style"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsCheck" },
            "check"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsIf" },
            "if"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsUnless" },
            "unless"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsEnter" },
            "enter"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsChange" },
            "change"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsHover" },
            "hover"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsFocus" },
            "focus"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsEnableDisable" },
            "enable/disable"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsToggle" },
            "toggle"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsThrottle" },
            "throttle"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsRepeat" },
            "repeat"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsDeferUntil" },
            "deferUntil"
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsCustomBindings" },
            "Custom Bindings"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsBindingObject" },
            "Binding Object"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#BindingsBindingArgument" },
            "Binding Argument"
          )
        )
      );
    }
  }]);

  function Bindings(props) {
    _classCallCheck(this, Bindings);

    var _this = _possibleConstructorReturn(this, (Bindings.__proto__ || Object.getPrototypeOf(Bindings)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Bindings", _this, {});

    return _this;
  }

  return Bindings;
}(_react2.default.Component);