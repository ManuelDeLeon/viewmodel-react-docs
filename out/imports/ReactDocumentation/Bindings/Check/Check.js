"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Check = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Check = exports.Check = function (_React$Component) {
  _inherits(Check, _React$Component);

  _createClass(Check, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "check"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "BindingsCheck" }),
        _react2.default.createElement(
          "p",
          null,
          "The check binding links a check'able form control - i.e., a checkbox (input type='checkbox') or a radio button (input type='radio') - with a property on your component."
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"check: property\""
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "The value of a group of checkboxes or radios can be obtained/set with the group binding:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "b=\"group: property\""
          )
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "h3",
          null,
          "Checkboxes - single"
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
                _react2.default.createElement("input", { type: "checkbox", defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "showRed"),
                  ref: _viewmodelReact2.default.bindElement(this, null, null, "check: showRed")
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
                className: _viewmodelReact2.default.getClass(this, null, null, "ui button", "{red:showRed}")
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
            "  showRed: false,",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input b=\"check: showRed\" type=\"checkbox\" /> <label>Red</label>",
            '\n',
            "      <button b=\"class: ",
            "{",
            " red: showRed ",
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
          "Checkboxes - Multiple"
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
                _react2.default.createElement("input", { type: "checkbox", value: "Colorado", defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "coloradoChecked"),
                  ref: _viewmodelReact2.default.bindElement(this, null, null, "group: states, check: coloradoChecked")
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Colorado"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "div",
                { className: "ui checkbox" },
                _react2.default.createElement("input", { type: "checkbox", value: "New York", ref: _viewmodelReact2.default.bindElement(this, null, null, "group: states")
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "New York"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "div",
                { className: "ui checkbox" },
                _react2.default.createElement("input", { type: "checkbox", value: "Florida", ref: _viewmodelReact2.default.bindElement(this, null, null, "group: states")
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Florida"
                )
              )
            ),
            "Selected: ",
            _react2.default.createElement(
              "label",
              {
                className: _viewmodelReact2.default.getClass(this, null, null, "ui label", "{red:coloradoChecked}")
              },
              _viewmodelReact2.default.getValue(this, null, null, "states.join(' - ')")
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
            "  coloradoChecked: false,",
            '\n',
            "  states: [],",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input b=\"group: states, check: coloradoChecked\" value=\"Colorado\" type=\"checkbox\" />",
            '\n',
            "      <label>Colorado</label>",
            '\n',
            '\n',
            "      <input type=\"checkbox\" b=\"group: states\" value=\"New York\" />",
            '\n',
            "      <label>New York</label>",
            '\n',
            '\n',
            "      <input type=\"checkbox\" b=\"group: states\" value=\"Florida\" />",
            '\n',
            "      <label>Florida</label>",
            '\n',
            '\n',
            "      Selected: <label b=\"text: states.join(' - '), class: ",
            "{",
            " red: coloradoChecked ",
            "}",
            "\" />",
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
          "Radios"
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
                { className: "ui radio" },
                _react2.default.createElement("input", { defaultValue: "red", name: "color", type: "radio", ref: _viewmodelReact2.default.bindElement(this, null, null, "group: colorSelected")
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Red"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "field" },
              _react2.default.createElement(
                "div",
                { className: "ui radio" },
                _react2.default.createElement("input", { defaultValue: "blue", name: "color", type: "radio", defaultChecked: _viewmodelReact2.default.getValue(this, null, null, "blueSelected"),
                  ref: _viewmodelReact2.default.bindElement(this, null, null, "group: colorSelected, check: blueSelected")
                }),
                _react2.default.createElement(
                  "label",
                  null,
                  "Blue"
                )
              )
            ),
            _react2.default.createElement(
              "label",
              null,
              "The color is: ",
              _react2.default.createElement(
                "span",
                {
                  style: _viewmodelReact2.default.getStyle(this, null, null, "", "{color:colorSelected}")
                },
                _viewmodelReact2.default.getValue(this, null, null, "colorSelected")
              )
            ),
            _viewmodelReact2.default.getValue(this, null, null, "blueSelected") ? _react2.default.createElement(
              "label",
              null,
              " - Blue Selected"
            ) : null
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
            "  colorSelected: '',",
            '\n',
            "  blueSelected: false,",
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div>",
            '\n',
            "      <input value=\"red\" b=\"group: colorSelected\" name=\"color\" type=\"radio\" />",
            '\n',
            "      <label>Red</label>",
            '\n',
            '\n',
            "      <input value=\"blue\" b=\"group: colorSelected, check: blueSelected\" name=\"color\" type=\"radio\" />",
            '\n',
            "      <label>Blue</label>",
            '\n',
            '\n',
            "      <label>The color is: <span b=\"text: colorSelected, style: ",
            "{",
            " color: colorSelected ",
            "}",
            "\" ></span></label>",
            '\n',
            "      <label b=\"if: blueSelected\"> - Blue Selected</label>",
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

  function Check(props) {
    _classCallCheck(this, Check);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Check).call(this, props));

    _viewmodelReact2.default.prepareComponent("Check", _this, {
      showRed: false,
      coloradoChecked: false,
      states: [],
      colorSelected: '',
      blueSelected: false

    });

    return _this;
  }

  return Check;
}(_react2.default.Component);