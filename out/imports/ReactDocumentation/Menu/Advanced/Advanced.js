"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Advanced = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        { className: "item react-menu-item" },
        _react2.default.createElement(
          "a",
          { className: "title" },
          _react2.default.createElement("i", { className: "dropdown icon" }),
          _react2.default.createElement(
            "b",
            null,
            "Advanced"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "content menu" },
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedParent" },
            ".parent"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedReset" },
            ".reset"
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedProperties" },
            "Properties"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedSharingProperties" },
            "Sharing Properties"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedShare" },
            "share"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedMixin" },
            "mixin"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedShareMixinScope" },
            "share/mixin scope"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedTesting" },
            "Testing"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedRef" },
            "ref"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedDynamicLoading" },
            "Dynamic/Lazy/Deferred Loading"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedStateOnURL" },
            "State on URL"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedAutorun" },
            "autorun"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedCreated" },
            "created"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedRendered" },
            "rendered"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedDestroyed" },
            "destroyed"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedFind" },
            "find/findOne"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedValidation" },
            "Validation"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedValidatingControls" },
            "Validating Controls"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedSignal" },
            "signal"
          ),
          _react2.default.createElement(
            "a",
            { className: "item", href: "#AdvancedGlobal" },
            "global"
          )
        )
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