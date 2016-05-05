"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Advanced = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Global = require("./Global/Global");

var _Find = require("./Find/Find");

var _Destroyed = require("./Destroyed/Destroyed");

var _Rendered = require("./Rendered/Rendered");

var _Created = require("./Created/Created");

var _ShareMixinScope = require("./ShareMixinScope/ShareMixinScope");

var _Mixin = require("./Mixin/Mixin");

var _Share = require("./Share/Share");

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Advanced = exports.Advanced = function (_React$Component) {
  _inherits(Advanced, _React$Component);

  _createClass(Advanced, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          { className: "ui dividing header" },
          "Advanced"
        ),
        _react2.default.createElement(_Share.Share, {
          parent: this
        }),
        _react2.default.createElement(_Mixin.Mixin, {
          parent: this
        }),
        _react2.default.createElement(_ShareMixinScope.ShareMixinScope, {
          parent: this
        }),
        _react2.default.createElement(_Created.Created, {
          parent: this
        }),
        _react2.default.createElement(_Rendered.Rendered, {
          parent: this
        }),
        _react2.default.createElement(_Destroyed.Destroyed, {
          parent: this
        }),
        _react2.default.createElement(_Find.Find, {
          parent: this
        }),
        _react2.default.createElement(_Global.Global, {
          parent: this
        })
      );
    }
  }]);

  function Advanced(props) {
    _classCallCheck(this, Advanced);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Advanced).call(this, props));

    _viewmodelReact2.default.prepareComponent("Advanced", _this, {});

    return _this;
  }

  return Advanced;
}(_react2.default.Component);