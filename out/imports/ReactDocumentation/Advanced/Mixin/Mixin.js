"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mixin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Person = require("./Person/Person");

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VmLazyL;

var Mixin = exports.Mixin = function (_React$Component) {
  _inherits(Mixin, _React$Component);

  _createClass(Mixin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "mixin"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedMixin" }),
        _react2.default.createElement(
          "p",
          null,
          "You can compose your components with the mixin property. You must specify the parts to reuse via ViewModel.mixin. In the following example we're creating two objects we can reuse between components (person and avatar)."
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
            "  person: ",
            "{",
            '\n',
            "    firstName: '',",
            '\n',
            "    lastName: '',",
            '\n',
            "    fullName: function() ",
            "{",
            '\n',
            "      return this.firstName() + ' ' + this.lastName();",
            '\n',
            "    ",
            "}",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  avatar: ",
            "{",
            '\n',
            "    image: ''",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ");"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "Now we can reuse these elements between components. In the following example the husband component will have all the properties and methods from person and avatar. Wife will have the properties and methods of person. The instances of husband and wife will not share the properties firstName and lastName from person. Each will have their own firstName and lastName."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "Husband(",
            "{",
            '\n',
            "  mixin: [ 'person', 'avatar' ],",
            '\n',
            "  render() ",
            "{",
            " <div /> ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "Wife(",
            "{",
            '\n',
            "  mixin: 'person',",
            '\n',
            "  render() ",
            "{",
            " <div /> ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Lifecycle hooks"
        ),
        _react2.default.createElement(
          "p",
          null,
          "You can supply multiple ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedAutorun" },
            "autorun"
          ),
          ", ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedCreated" },
            "created"
          ),
          ", ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedRendered" },
            "rendered"
          ),
          ", and ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedDestroyed" },
            "destroyed"
          ),
          " functions with ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedShare" },
            "share"
          ),
          ", ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedMixin" },
            "mixin"
          ),
          ", ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedLoad" },
            "load"
          ),
          ", or in the component itself."
        ),
        _react2.default.createElement(
          "p",
          null,
          "For example if you want a mixin to execute a function after the template is created (one that uses the mixin of course), you can do:"
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
            "  clock: ",
            "{",
            '\n',
            "    initialTime: new Date(),",
            '\n',
            "    created() ",
            "{",
            '\n',
            "      this.initialTime( new Date() );",
            '\n',
            "    ",
            "}",
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
            "  mixin: 'clock',",
            '\n',
            "  render() ",
            "{",
            " <div /> ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "mixin demo"
        ),
        _react2.default.createElement(
          "p",
          null,
          "In this example each Person component has its own name and address. They all start with the same default address from the mixin."
        ),
        _react2.default.createElement(
          "div",
          { className: "ui list" },
          this.people().map(function (p, i) {
            return _react2.default.createElement(_Person.Person, _extends({
              "data-vm-parent": _this2
            }, p, { key: i }));
          })
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
            "    address: '123 Main St.'",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ")"
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
            "  people: [",
            '\n',
            "    ",
            "{",
            " name: \"Alan\" ",
            "}",
            ",",
            '\n',
            "    ",
            "{",
            " name: \"Brito\" ",
            "}",
            ",",
            '\n',
            "    ",
            "{",
            " name: \"Cordon\" ",
            "}",
            '\n',
            "  ],",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div class=\"ui list\">",
            '\n',
            "      ",
            "{",
            "this.people().map((p, i) => ",
            "{",
            '\n',
            "        return <Person ",
            "{",
            "...p",
            "}",
            " key=",
            "{",
            "i",
            "}",
            " />",
            '\n',
            "      ",
            "}",
            ")",
            "}",
            '\n',
            "    </div>",
            '\n',
            "  ",
            "}",
            '\n',
            "}",
            ")"
          )
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "Person(",
            "{",
            '\n',
            "  mixin: 'house',",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div class=\"item\">",
            '\n',
            "      <input type=\"text\" b=\"value: name\">",
            '\n',
            "      <input type=\"text\" b=\"value: address\">",
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

  function Mixin(props) {
    _classCallCheck(this, Mixin);

    var _this = _possibleConstructorReturn(this, (Mixin.__proto__ || Object.getPrototypeOf(Mixin)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Mixin", _this, {
      people: [{ name: "Alan" }, { name: "Brito" }, { name: "Cordon" }]
    });

    return _this;
  }

  return Mixin;
}(_react2.default.Component);