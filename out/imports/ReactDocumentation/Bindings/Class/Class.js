"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Class = exports.Class = function (_React$Component) {
  _inherits(Class, _React$Component);

  _createClass(Class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "class"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsClass" }),
        _react2.default.createElement(
          "p",
          null,
          "The class binding allows you to change the class attribute of an element. It can apply a single class or multiple ones."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"class: ",
            "{",
            " cssClass: property ",
            "}",
            "\""
          )
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"class: property\""
          )
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "h3",
          null,
          "class - with object"
        ),
        _react2.default.createElement(
          "div",
          { className: "ui segment" },
          _react2.default.createElement(
            "form",
            { className: "ui form" },
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "div",
                { className: "ui checkbox" },
                _react2.default.createElement("input", { type: "checkbox", defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "showBasic"),
                  ref: _viewmodelReact2.default.bindElement(this, null, null, "check: showBasic"),
                  "data-bind": "check: showBasic"
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Basic"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "div",
                { className: "ui checkbox" },
                _react2.default.createElement("input", { type: "checkbox", defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "showRed"),
                  ref: _viewmodelReact2.default.bindElement(this, null, null, "check: showRed"),
                  "data-bind": "check: showRed"
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Red"
                )
              )
            ),
            _react2.default.createElement(
              "a",
              {
                className: _viewmodelReact2.default.getClass(this, null, null, "ui button", "{basic:showBasic,red:showRed}"),
                ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { basic: showBasic, red: showRed }"),
                "data-bind": "class: { basic: showBasic, red: showRed }"
              },
              "The Button"
            )
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
            "  showBasic: false,",
            '\n',
            "  showRed: false,",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input b=\"check: showBasic\" type=\"checkbox\" /> <label>Basic</label>",
            '\n',
            "      <input b=\"check: showRed\" type=\"checkbox\" /> <label>Red</label>",
            '\n',
            "      <button b=\"class: ",
            "{",
            " basic: showBasic, red: showRed ",
            "}",
            "\" >The Button</button>",
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
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "h3",
          null,
          "class - with property"
        ),
        _react2.default.createElement(
          "div",
          { className: "ui segment" },
          _react2.default.createElement(
            "form",
            { className: "ui form" },
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "label",
                null,
                "Button Class"
              ),
              _react2.default.createElement("input", { type: "text", defaultValue: _viewmodelReact2.default.getValue(this, null, null, "buttonCss"),
                ref: _viewmodelReact2.default.bindElement(this, null, null, "value: buttonCss"),
                "data-bind": "value: buttonCss"
              })
            ),
            _react2.default.createElement(
              "a",
              {
                className: _viewmodelReact2.default.getClass(this, null, null, "ui button", "buttonCss"),
                ref: _viewmodelReact2.default.bindElement(this, null, null, "class: buttonCss"),
                "data-bind": "class: buttonCss"
              },
              "The Button"
            )
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
            "  buttonCss: 'basic red',",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <label>Button Class</label>",
            '\n',
            "      <input type=\"text\" b=\"value: buttonCss\" />",
            '\n',
            "      <button b=\"class: buttonCss\" >The Button</button>",
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

  function Class(props) {
    _classCallCheck(this, Class);

    var _this = _possibleConstructorReturn(this, (Class.__proto__ || Object.getPrototypeOf(Class)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Class", _this, {
      showBasic: false,
      showRed: false,
      buttonCss: 'basic red'
    });

    return _this;
  }

  return Class;
}(_react2.default.Component);