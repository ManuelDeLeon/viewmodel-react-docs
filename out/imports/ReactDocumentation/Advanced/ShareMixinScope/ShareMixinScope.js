"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareMixinScope = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareMixinScope = exports.ShareMixinScope = function (_React$Component) {
  _inherits(ShareMixinScope, _React$Component);

  _createClass(ShareMixinScope, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "share/mixin scope"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedShareMixinScope" }),
        _react2.default.createElement(
          "p",
          null,
          "By default share and mixin will add all properties and methods they have to the component. This is fine is most situations but sometimes names collide. You can add the share/mixin to a specific property of the component. You can even add the same mixin multiple times to the same component. This is similar to how services work in other frameworks."
        ),
        _react2.default.createElement(
          "p",
          null,
          "To do so, instead of using a string or array of strings to declare the mixin/share, you use an object. The keys are the names of the component properties and the values are strings to the names of the mixins/shares."
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Example:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "ViewModel.mixin(",
            "{",
            '\n',
            "  house: ",
            "{",
            '\n',
            "    address: '',",
            '\n',
            "    city: ''",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  location: ",
            "{",
            '\n',
            "    country: ''",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ");"
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
            "  mixin: ",
            "{",
            '\n',
            "    firstHome: 'house',",
            '\n',
            "    secondHome: [ 'house', 'location' ]",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  printHomes: function() ",
            "{",
            '\n',
            "    console.log( this.firstHome.address() );",
            '\n',
            "    console.log( this.secondHome.country() );",
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
          "h3",
          null,
          "At root and scoped"
        ),
        _react2.default.createElement(
          "p",
          null,
          "You can add mixins/shares to the root of the component and a property at the same time. To do so use an array with both string names and object definitions."
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Example:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "ViewModel.mixin(",
            "{",
            '\n',
            "  house: ",
            "{",
            '\n',
            "    address: '',",
            '\n',
            "    city: ''",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  location: ",
            "{",
            '\n',
            "    country: ''",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ");"
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
            "  mixin: [",
            '\n',
            "    'location',",
            '\n',
            "    ",
            "{",
            '\n',
            "      firstHome: 'house'",
            '\n',
            "    ",
            "}",
            '\n',
            "  ],",
            '\n',
            "  printHomes: function() ",
            "{",
            '\n',
            "    console.log( this.firstHome.address() );",
            '\n',
            "    console.log( this.country() );",
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
        )
      );
    }
  }]);

  function ShareMixinScope(props) {
    _classCallCheck(this, ShareMixinScope);

    var _this = _possibleConstructorReturn(this, (ShareMixinScope.__proto__ || Object.getPrototypeOf(ShareMixinScope)).call(this, props));

    _viewmodelReact2.default.prepareComponent("ShareMixinScope", _this, {});

    return _this;
  }

  return ShareMixinScope;
}(_react2.default.Component);