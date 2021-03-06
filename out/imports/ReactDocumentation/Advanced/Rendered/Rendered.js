"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rendered = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VmLazyL;

var Rendered = exports.Rendered = function (_React$Component) {
  _inherits(Rendered, _React$Component);

  _createClass(Rendered, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "rendered"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedRendered" }),
        _react2.default.createElement(
          "p",
          null,
          "The rendered function will run after the component has been rendered on the page and all bindings have been applied. This is particularly useful to setup custom js controls."
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
            "  rendered() ",
            "{",
            '\n',
            "    // Do Something",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div />",
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
          "To add multiple rendered methods you can use an array of functions."
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
            "  name: '',",
            '\n',
            "  age: 0,",
            '\n',
            "  rendered: [",
            '\n',
            "    function() ",
            "{",
            '\n',
            "      console.log(\"The name is now: \" + this.name());",
            '\n',
            "    ",
            "}",
            ",",
            '\n',
            "    function() ",
            "{",
            '\n',
            "      console.log(\"The age is now: \" + this.age());",
            '\n',
            "    ",
            "}",
            '\n',
            "  ],",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div />",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "rendered - example"
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
            "  rendered()",
            "{",
            '\n',
            "    $(this.nameInput).makeFancy()",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <input b=\"value: name, ref: nameInput\" />",
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

  function Rendered(props) {
    _classCallCheck(this, Rendered);

    var _this = _possibleConstructorReturn(this, (Rendered.__proto__ || Object.getPrototypeOf(Rendered)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Rendered", _this, {});

    return _this;
  }

  return Rendered;
}(_react2.default.Component);