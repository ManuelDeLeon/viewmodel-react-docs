"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Declaring = undefined;

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

var Declaring = exports.Declaring = function (_React$Component) {
  _inherits(Declaring, _React$Component);

  _createClass(Declaring, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "Declaring"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsDeclaring" }),
        _react2.default.createElement(
          "p",
          null,
          "Bindings are declared with the template helper `b`. It is the generic flavor which you will use almost all the time. It allows you to access all bindings and events available to the element. Here are a few examples:"
        ),
        _react2.default.createElement(
          "p",
          null,
          "To bind the value of the input box to the property 'name' of the view model:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "<input b=\"value: name\" />"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "To show the greeting if the 'showGreeting' property is true:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "<p b=\"text: greeting, if: showGreeting\" />"
          )
        )
      );
    }
  }]);

  function Declaring(props) {
    _classCallCheck(this, Declaring);

    var _this = _possibleConstructorReturn(this, (Declaring.__proto__ || Object.getPrototypeOf(Declaring)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Declaring", _this, {});

    return _this;
  }

  return Declaring;
}(_react2.default.Component);