"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Share = undefined;

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

var Share = exports.Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  _createClass(Share, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "share"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedShare" }),
        _react2.default.createElement(
          "p",
          null,
          "You can share state between components with the share property. To do so you must specify the parts to share via ViewModel.share. In the following example we're creating two objects we can share between components (car and road)."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "ViewModel.share(",
            "{",
            '\n',
            "  car: ",
            "{",
            '\n',
            "    color: 'red',",
            '\n',
            "    speed: 55,",
            '\n',
            "    accelerate: function() ",
            "{",
            '\n',
            "      var speed = this.speed();",
            '\n',
            "      this.speed( speed + 10 );",
            '\n',
            "    ",
            "}",
            '\n',
            "  ",
            "}",
            ",",
            '\n',
            "  road: ",
            "{",
            '\n',
            "    lanes: 4",
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
          "Now we can share these elements between components. In the following example the adult component will have all the properties and methods from car and road. Teenager will have the properties and methods of car. The most important thing is that all instances of adult and teenager will share the properties color and speed (from car). That means if any of them change their speed, the other components will pick up on the changes (they're sharing the property after all)."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "Adult(",
            "{",
            '\n',
            "  share: [ 'car', 'road' ],",
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
            "Teenager(",
            "{",
            '\n',
            "  share: 'car',",
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
          "For example if you want a share to execute a function after the template is created (one that uses the share of course), you can do:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "ViewModel.share(",
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
            "  share: 'clock',",
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
          "share demo"
        ),
        _react2.default.createElement(
          "p",
          null,
          "In this example each Person component has its own name but they all share the same address."
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
            "ViewModel.share(",
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
            "  share: 'house',",
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

  function Share(props) {
    _classCallCheck(this, Share);

    var _this = _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Share", _this, {
      people: [{ name: "Alan" }, { name: "Brito" }, { name: "Cordon" }]
    });

    return _this;
  }

  return Share;
}(_react2.default.Component);