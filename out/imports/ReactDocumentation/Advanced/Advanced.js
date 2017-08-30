"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Advanced = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Global = require("./Global/Global");

var _Signal = require("./Signal/Signal");

var _ValidatingControls = require("./ValidatingControls/ValidatingControls");

var _Validation = require("./Validation/Validation");

var _Find = require("./Find/Find");

var _Destroyed = require("./Destroyed/Destroyed");

var _Rendered = require("./Rendered/Rendered");

var _Created = require("./Created/Created");

var _Autorun = require("./Autorun/Autorun");

var _StateOnURL = require("./StateOnURL/StateOnURL");

var _DynamicLoading = require("./DynamicLoading/DynamicLoading");

var _Testing = require("./Testing/Testing");

var _ShareMixinScope = require("./ShareMixinScope/ShareMixinScope");

var _Mixin = require("./Mixin/Mixin");

var _Share = require("./Share/Share");

var _SharingProperties = require("./SharingProperties/SharingProperties");

var _Properties = require("./Properties/Properties");

var _Load = require("./Load/Load");

var _Data = require("./Data/Data");

var _Reset = require("./Reset/Reset");

var _Child = require("./Child/Child");

var _Children = require("./Children/Children");

var _Parent = require("./Parent/Parent");

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VmLazyL;

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
        _react2.default.createElement(_Parent.Parent, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Children.Children, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Child.Child, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Reset.Reset, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Data.Data, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Load.Load, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Properties.Properties, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_SharingProperties.SharingProperties, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Share.Share, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Mixin.Mixin, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_ShareMixinScope.ShareMixinScope, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Testing.Testing, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_DynamicLoading.DynamicLoading, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_StateOnURL.StateOnURL, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Autorun.Autorun, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Created.Created, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Rendered.Rendered, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Destroyed.Destroyed, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Find.Find, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Validation.Validation, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_ValidatingControls.ValidatingControls, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Signal.Signal, {
          "data-vm-parent": this
        }),
        _react2.default.createElement(_Global.Global, {
          "data-vm-parent": this
        })
      );
    }
  }]);

  function Advanced(props) {
    _classCallCheck(this, Advanced);

    var _this = _possibleConstructorReturn(this, (Advanced.__proto__ || Object.getPrototypeOf(Advanced)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Advanced", _this, {});

    return _this;
  }

  return Advanced;
}(_react2.default.Component);