"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Advanced = require("./Advanced/Advanced");

var _Bindings = require("./Bindings/Bindings");

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $(".accordion").accordion();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui sticky ",
          style: {
            position: "fixed",
            overflow: "auto",
            overflowX: "hidden",
            width: "170px",
            height: "500px",
            backgroundColor: "white"
          } },
        _react2.default.createElement(
          "h2",
          { className: "ui top header", style: {
              marginTop: "5px",
              marginLeft: "20px"
            } },
          "ViewModel"
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "div",
          { className: "ui vertical following fluid accordion text menu " },
          _react2.default.createElement(_Bindings.Bindings, {
            parent: this
          }),
          _react2.default.createElement(_Advanced.Advanced, {
            parent: this
          })
        )
      );
    }
  }]);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));

    _viewmodelReact2.default.prepareComponent("Menu", _this, {});

    return _this;
  }

  return Menu;
}(_react2.default.Component);