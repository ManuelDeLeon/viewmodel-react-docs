"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Description = exports.Description = function (_React$Component) {
  _inherits(Description, _React$Component);

  _createClass(Description, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "Description"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsDescription" }),
        _react2.default.createElement(
          "p",
          null,
          "Bindings are just shortcuts to reduce the boilerplate and ceremonies associated with common tasks. The best example is the value binding. So instead of writing:"
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
            "  messageChange(event) ",
            "{",
            '\n',
            "    this.message( event.target.value );",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <input type=\"text\" value=",
            "{",
            "this.message()",
            "}",
            " onChange=",
            "{",
            "this.messageChange",
            "}",
            " />",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "You can just write:"
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
            "    <input type=\"text\" b=\"value: message\" />",
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

  function Description(props) {
    _classCallCheck(this, Description);

    var _this = _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Description", _this, {});

    return _this;
  }

  return Description;
}(_react2.default.Component);