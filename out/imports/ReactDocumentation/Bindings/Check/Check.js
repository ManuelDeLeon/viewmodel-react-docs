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
                _react2.default.createElement("input", { type: "checkbox", b: "check: showRed", defaultChecked: _viewmodelReact2.default.getValue(this, "showRed"),
                  onClick: _viewmodelReact2.default.setInputCheck(this, "showRed"),
                  ref: _viewmodelReact2.default.getCheckRef(this, "showRed")
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
              { b: "class: { red: showRed }", className: _viewmodelReact2.default.getClass(this, "ui button", "{\"red\":\"showRed\"}")
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
                _react2.default.createElement("input", { type: "checkbox", b: "group: states, check: coloradoChecked", defaultValue: "Colorado", defaultChecked: _viewmodelReact2.default.getValue(this, "states"),
                  onClick: _viewmodelReact2.default.setInputGroup(this, "states"),
                  ref: _viewmodelReact2.default.getGroupRef(this, "states")
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
                _react2.default.createElement("input", { type: "checkbox", b: "group: states", defaultValue: "New York", defaultChecked: _viewmodelReact2.default.getValue(this, "states"),
                  onClick: _viewmodelReact2.default.setInputGroup(this, "states"),
                  ref: _viewmodelReact2.default.getGroupRef(this, "states")
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
                _react2.default.createElement("input", { type: "checkbox", b: "group: states", defaultValue: "Florida", defaultChecked: _viewmodelReact2.default.getValue(this, "states"),
                  onClick: _viewmodelReact2.default.setInputGroup(this, "states"),
                  ref: _viewmodelReact2.default.getGroupRef(this, "states")
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
                className: _viewmodelReact2.default.getClass(this, "", "{\"red\":\"coloradoChecked\"}")
              },
              _viewmodelReact2.default.getValue(this, "states.join(' - ')")
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
            '\n',
            "  <input type=\"checkbox\" b=\"group: states, check: coloradoChecked\" value=\"Colorado\" />",
            '\n',
            "  <label>Colorado</label>",
            '\n',
            '\n',
            "  <input type=\"checkbox\" b=\"group: states\" value=\"New York\" />",
            '\n',
            "  <label>New York</label>",
            '\n',
            '\n',
            "  <input type=\"checkbox\" b=\"group: states\" value=\"Florida\" />",
            '\n',
            "  <label>Florida</label>",
            '\n',
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
        )
      );
    }
  }]);

  function Check(props) {
    _classCallCheck(this, Check);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Check).call(this, props));

    _viewmodelReact2.default.prepareComponent("Check", _this, {
      showRed: false,
      states: []
    });

    return _this;
  }

  return Check;
}(_react2.default.Component);