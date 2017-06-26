"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.If = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var If = exports.If = function (_React$Component) {
  _inherits(If, _React$Component);

  _createClass(If, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "if"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsIf" }),
        _react2.default.createElement(
          "p",
          null,
          "The if binding causes the html element to appear on screen or not, depending on the value of the bound property."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"if: property\""
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "if demo"
        ),
        _react2.default.createElement(
          "div",
          { className: "ui segment basic" },
          _react2.default.createElement("input", _defineProperty({ type: "checkbox", "data-bind": "check: itsOn",
            defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "itsOn"),
            ref: _viewmodelReact2.default.bindElement(this, null, null, "check: itsOn")
          }, "data-bind", "check: itsOn")),
          " Is it on? \xA0\xA0",
          _viewmodelReact2.default.getValue(this, null, null, "itsOn") ? _react2.default.createElement(
            "label",
            { className: "ui red label", "data-bind": "if: itsOn"
            },
            "It's SO on!"
          ) : null
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "Example(",
            "{",
            '\n',
            "  itsOn: false,",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input b=\"check: itsOn\" type=\"checkbox\" /> Is it on?",
            '\n',
            "      <label b=\"if: itsOn\" class=\"ui red label\">It's SO on!</label>",
            '\n',
            "    </div>",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ")"
          )
        )
      );
    }
  }]);

  function If(props) {
    _classCallCheck(this, If);

    var _this = _possibleConstructorReturn(this, (If.__proto__ || Object.getPrototypeOf(If)).call(this, props));

    _viewmodelReact2.default.prepareComponent("If", _this, {
      itsOn: false
    });

    return _this;
  }

  return If;
}(_react2.default.Component);