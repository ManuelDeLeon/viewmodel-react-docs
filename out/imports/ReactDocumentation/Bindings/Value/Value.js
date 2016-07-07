"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Value = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = exports.Value = function (_React$Component) {
  _inherits(Value, _React$Component);

  _createClass(Value, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "value"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsValue" }),
        _react2.default.createElement(
          "p",
          null,
          "The value binding links the associated DOM element’s value with a property on your view model. This is typically useful with form elements such as input, select and textarea."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"value: property\""
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "value - input type text"
        ),
        _react2.default.createElement(
          "div",
          { className: "ui segment basic" },
          _react2.default.createElement(
            "form",
            { className: "ui fluid form" },
            _react2.default.createElement(
              "div",
              { className: "inline field" },
              _react2.default.createElement("input", { type: "text", placeholder: "Type something", defaultValue: _viewmodelReact2.default.getValue(this, "message"),
                ref: _viewmodelReact2.default.bindElement(this, "value: message")
              }),
              _react2.default.createElement(
                "label",
                { className: "ui label" },
                _viewmodelReact2.default.getValue(this, "message")
              )
            )
          )
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
            "  message: '',",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input b=\"value: message\" placeholder=\"Type something\" />",
            '\n',
            "      <label b=\"text: message\" />",
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

  function Value(props) {
    _classCallCheck(this, Value);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Value).call(this, props));

    _viewmodelReact2.default.prepareComponent("Value", _this, {
      message: ''
    });

    return _this;
  }

  return Value;
}(_react2.default.Component);