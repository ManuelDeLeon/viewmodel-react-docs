"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDocumentation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Advanced = require("./Advanced/Advanced");

var _Bindings = require("./Bindings/Bindings");

var _Menu = require("./Menu/Menu");

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDocumentation = exports.ReactDocumentation = function (_React$Component) {
  _inherits(ReactDocumentation, _React$Component);

  _createClass(ReactDocumentation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui two column centered grid", style: {
            width: "1024px"
          } },
        _react2.default.createElement(
          "div",
          { id: "react-menu", className: "four wide column" },
          _react2.default.createElement(_Menu.Menu, {
            parent: this
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "twelve wide column", style: {
              width: "740px"
            } },
          _react2.default.createElement(
            "div",
            { className: "ui segment" },
            _react2.default.createElement(
              "h1",
              { className: "ui header red" },
              "ViewModel for React Preview"
            ),
            _react2.default.createElement(
              "p",
              null,
              "This page is the preview documentation of the React version of ViewModel. It's not released yet and there's no ETA."
            )
          ),
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

  function ReactDocumentation(props) {
    _classCallCheck(this, ReactDocumentation);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactDocumentation).call(this, props));

    _viewmodelReact2.default.prepareComponent("ReactDocumentation", _this, {
      rendered: function rendered() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }
    });

    return _this;
  }

  return ReactDocumentation;
}(_react2.default.Component);