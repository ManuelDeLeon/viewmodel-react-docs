"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bindings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BindingArgument = require("./BindingArgument/BindingArgument");

var _BindingObject = require("./BindingObject/BindingObject");

var _CustomBindings = require("./CustomBindings/CustomBindings");

var _Repeat = require("./Repeat/Repeat");

var _Throttle = require("./Throttle/Throttle");

var _Toggle = require("./Toggle/Toggle");

var _EnableDisable = require("./EnableDisable/EnableDisable");

var _Focus = require("./Focus/Focus");

var _Hover = require("./Hover/Hover");

var _Change = require("./Change/Change");

var _Enter = require("./Enter/Enter");

var _Unless = require("./Unless/Unless");

var _If = require("./If/If");

var _Check = require("./Check/Check");

var _Style = require("./Style/Style");

var _Class = require("./Class/Class");

var _Html = require("./Html/Html");

var _Text = require("./Text/Text");

var _Value = require("./Value/Value");

var _Declaring = require("./Declaring/Declaring");

var _Description = require("./Description/Description");

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
        null,
        _react2.default.createElement(
          "h1",
          { className: "ui dividing header" },
          "Bindings"
        ),
        _react2.default.createElement(_Description.Description, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Declaring.Declaring, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Value.Value, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Text.Text, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Html.Html, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Class.Class, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Style.Style, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Check.Check, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_If.If, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Unless.Unless, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Enter.Enter, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Change.Change, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Hover.Hover, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Focus.Focus, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_EnableDisable.EnableDisable, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Toggle.Toggle, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Throttle.Throttle, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Repeat.Repeat, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_CustomBindings.CustomBindings, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_BindingObject.BindingObject, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_BindingArgument.BindingArgument, {
          "data-vm-parent": this
        })
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