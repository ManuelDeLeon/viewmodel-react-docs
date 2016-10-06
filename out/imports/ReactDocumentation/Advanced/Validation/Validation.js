"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Validation = exports.Validation = function (_React$Component) {
  _inherits(Validation, _React$Component);

  _createClass(Validation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui segment" },
        _react2.default.createElement(
          "h2",
          { className: "ui header" },
          "Validation"
        ),
        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedValidation" }),
        _react2.default.createElement(
          "p",
          null,
          "Validations in ViewModel are achieved by declaring the properties with 'ViewModel.property'. In the following example the name property is a string and it must not be blank (null, undefined, empty, spaces)."
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
            "  name: ViewModel.property.string.notBlank,",
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
          "p",
          null,
          "Later on you can check whether the name property has a valid value with:"
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            "viewmodel.name.valid()"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "See ",
          _react2.default.createElement(
            "a",
            { href: "#AdvancedProperties" },
            "view model properties"
          ),
          " for more information."
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Validation demo"
        ),
        _react2.default.createElement(
          "p",
          null,
          "In this example first name can't be blank or end in an 'X' (checked asynchronously), last name required when First is 'n/a', age must be an integer greater or equal to 18, address has to be a string."
        ),
        _react2.default.createElement(
          "div",
          { className: "ui padded segment" },
          _react2.default.createElement(
            "div",
            { className: "ui two column grid" },
            _react2.default.createElement(
              "div",
              { className: "ui column" },
              _react2.default.createElement(
                "form",
                { className: "ui form" },
                _react2.default.createElement(
                  "div",
                  {
                    className: _viewmodelReact2.default.getClass(this, null, null, "field", "{error:firstName.invalid}"),
                    ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { error: firstName.invalid }"),
                    "data-bind": "class: { error: firstName.invalid }"
                  },
                  _react2.default.createElement(
                    "label",
                    null,
                    "First Name"
                  ),
                  _react2.default.createElement(
                    "div",
                    {
                      className: _viewmodelReact2.default.getClass(this, null, null, "ui icon input ", "{loading:firstName.validating}"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { loading: firstName.validating }"),
                      "data-bind": "class: { loading: firstName.validating }"
                    },
                    _react2.default.createElement("input", { type: "text", defaultValue: _viewmodelReact2.default.getValue(this, null, null, "firstName"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "value: firstName, attr: { title: firstName.message }"),
                      "data-bind": "value: firstName, attr: { title: firstName.message }"
                    }),
                    _viewmodelReact2.default.getValue(this, null, null, "firstName.validating") ? _react2.default.createElement("i", { className: "icon" }) : null,
                    _viewmodelReact2.default.getValue(this, null, null, "!firstName.validating") ? _react2.default.createElement("i", {
                      className: _viewmodelReact2.default.getClass(this, null, null, "thumbs outline icon", "{down:firstName.invalid}"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "{class:{down:firstName.invalid}}"),
                      "data-bind": "{class:{down:firstName.invalid}}"
                    }) : null
                  )
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: _viewmodelReact2.default.getClass(this, null, null, "field", "{error:lastName.invalid}"),
                    ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { error: lastName.invalid }"),
                    "data-bind": "class: { error: lastName.invalid }"
                  },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Last Name"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "ui icon input " },
                    _react2.default.createElement("input", { type: "text", defaultValue: _viewmodelReact2.default.getValue(this, null, null, "lastName"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "value: lastName"),
                      "data-bind": "value: lastName"
                    }),
                    _viewmodelReact2.default.getValue(this, null, null, "lastName.invalid") ? _react2.default.createElement("i", { className: "thumbs down outline icon" }) : null
                  )
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: _viewmodelReact2.default.getClass(this, null, null, "field", "{error:age.invalid}"),
                    ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { error: age.invalid }"),
                    "data-bind": "class: { error: age.invalid }"
                  },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Age"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "ui icon input " },
                    _react2.default.createElement("input", { type: "text", defaultValue: _viewmodelReact2.default.getValue(this, null, null, "age"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "value: age, attr: { title: age.message }"),
                      "data-bind": "value: age, attr: { title: age.message }"
                    }),
                    _viewmodelReact2.default.getValue(this, null, null, "age.invalid") ? _react2.default.createElement("i", { className: "thumbs down outline icon" }) : null
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "field" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Address"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "ui icon input " },
                    _react2.default.createElement("input", { type: "text", defaultValue: _viewmodelReact2.default.getValue(this, null, null, "address"),
                      ref: _viewmodelReact2.default.bindElement(this, null, null, "value: address"),
                      "data-bind": "value: address"
                    })
                  )
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: _viewmodelReact2.default.getClass(this, null, null, "ui blue button", "{disabled:!valid}"),
                    ref: _viewmodelReact2.default.bindElement(this, null, null, "class: { disabled: !valid }"),
                    "data-bind": "class: { disabled: !valid }"
                  },
                  "Log Name"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "ui column" },
              _react2.default.createElement(
                "label",
                null,
                "Errors:"
              ),
              _react2.default.createElement(
                "ul",
                { className: "ui list" },
                this.invalidMessages().map(function (message, i) {
                  return _react2.default.createElement(
                    "li",
                    { key: i },
                    message
                  );
                })
              ),
              _react2.default.createElement("hr", null),
              _react2.default.createElement(
                "label",
                null,
                "Valid Messages:"
              ),
              _react2.default.createElement(
                "ul",
                { className: "ui list" },
                this.validMessages().map(function (message, i) {
                  return _react2.default.createElement(
                    "li",
                    { key: i },
                    message
                  );
                })
              )
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
            '\n',
            "  firstName: ViewModel.property.string.notBlank",
            '\n',
            "    .validMessage('First name looks good')",
            '\n',
            "    .invalidMessage(\"First message can't be blank or end with an X\")",
            '\n',
            "    .validateAsync((value, done) => ",
            "{",
            '\n',
            "      // Simulate an async call to the server",
            '\n',
            "      Meteor.setTimeout(() => (value.endsWith(\"X\") ? done(false) : done(true)), 1000)",
            '\n',
            "    ",
            "}",
            "),",
            '\n',
            '\n',
            "  lastName: ViewModel.property.string",
            '\n',
            "    .validate(function(value) ",
            "{",
            " return this.firstName() === \"n/a\" ? value : true ",
            "}",
            ")",
            '\n',
            "    .invalidMessage(\"Last name required when First is 'n/a'\"),",
            '\n',
            '\n',
            "  age: ViewModel.property.integer.min(18)",
            '\n',
            "    .default(\"\") // Override the default value of zero",
            '\n',
            "    .invalidMessage(\"Must be at least 18 years old\")",
            '\n',
            "    .validMessage(\"Is an adult (at least legally)\"),",
            '\n',
            '\n',
            "  address: '', // It's a string so it defaults to ViewModel.property.string,",
            '\n',
            '\n',
            "  render() ",
            "{",
            '\n',
            "    <div class=\"ui padded segment\">",
            '\n',
            "      <div class=\"ui two column grid\">",
            '\n',
            "        <div class=\"ui column\">",
            '\n',
            "          <form class=\"ui form\">",
            '\n',
            '\n',
            "            <div class=\"field\" b=\"class: ",
            "{",
            " error: firstName.invalid ",
            "}",
            "\">",
            '\n',
            "              <label>First Name</label>",
            '\n',
            "              <div class=\"ui icon input \" b=\"class: ",
            "{",
            " loading: firstName.validating ",
            "}",
            "\">",
            '\n',
            "                <input type=\"text\" b=\"value: firstName, attr: ",
            "{",
            " title: firstName.message ",
            "}",
            "\"/>",
            '\n',
            "                <i class=\"icon\" b=\"if: firstName.validating\"></i>",
            '\n',
            "                <i class=\"thumbs outline icon\" b=\"if: !firstName.validating, class: ",
            "{",
            " down: firstName.invalid ",
            "}",
            "\"></i>",
            '\n',
            "              </div>",
            '\n',
            "            </div>",
            '\n',
            '\n',
            "            <div class=\"field\" b=\"class: ",
            "{",
            " error: lastName.invalid ",
            "}",
            "\">",
            '\n',
            "              <label>Last Name</label>",
            '\n',
            "              <div class=\"ui icon input \" >",
            '\n',
            "                <input type=\"text\" b=\"value: lastName\" />",
            '\n',
            "                <i class=\"thumbs down outline icon\" b=\"if: lastName.invalid\"></i>",
            '\n',
            "              </div>",
            '\n',
            "            </div>",
            '\n',
            '\n',
            "            <div class=\"field\" b=\"class: ",
            "{",
            " error: age.invalid ",
            "}",
            "\">",
            '\n',
            "              <label>Age</label>",
            '\n',
            "              <div class=\"ui icon input \" >",
            '\n',
            "                <input type=\"text\" b=\"value: age, attr: ",
            "{",
            " title: age.message ",
            "}",
            "\" />",
            '\n',
            "                <i class=\"thumbs down outline icon\" b=\"if: age.invalid\"></i>",
            '\n',
            "              </div>",
            '\n',
            "            </div>",
            '\n',
            '\n',
            "            <div class=\"field\" >",
            '\n',
            "              <label>Address</label>",
            '\n',
            "              <div class=\"ui icon input \">",
            '\n',
            "                <input type=\"text\" b=\"value: address\" />",
            '\n',
            "              </div>",
            '\n',
            "            </div>",
            '\n',
            '\n',
            "            <div class=\"ui blue button\" b=\"class: ",
            "{",
            " disabled: !valid ",
            "}",
            "\">Log Name</div>",
            '\n',
            '\n',
            "          </form>",
            '\n',
            "        </div>",
            '\n',
            "        <div class=\"ui column\">",
            '\n',
            "          <label>Errors:</label>",
            '\n',
            '\n',
            "          <ul class=\"ui list\">",
            '\n',
            "            ",
            "{",
            "this.invalidMessages().map((message, i) => ",
            "{",
            '\n',
            "              return <li key=",
            "{",
            "i",
            "}",
            ">",
            "{",
            "message",
            "}",
            "</li>",
            '\n',
            "            ",
            "}",
            ")",
            "}",
            '\n',
            "          </ul>",
            '\n',
            '\n',
            "          <hr />",
            '\n',
            '\n',
            "          <label>Valid Messages:</label>",
            '\n',
            "          <ul class=\"ui list\">",
            '\n',
            "            ",
            "{",
            "this.validMessages().map((message, i) => ",
            "{",
            '\n',
            "              return <li key=",
            "{",
            "i",
            "}",
            ">",
            "{",
            "message",
            "}",
            "</li>",
            '\n',
            "            ",
            "}",
            ")",
            "}",
            '\n',
            "          </ul>",
            '\n',
            '\n',
            "        </div>",
            '\n',
            "      </div>",
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
          "h3",
          null,
          "Must know"
        ),
        _react2.default.createElement(
          "p",
          null,
          "You only need to know three things to work with validations: validate, validateAsync, and default. Every other validation is just a shortcut for 'validate'."
        ),
        _react2.default.createElement(
          "div",
          { className: "ui relaxed list" },
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "validate( function(value)",
                '{',
                " } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The validation will pass if the function returns true for the given value. You can call it multiple times if it makes your code clearer."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "validateAsync( function(value, done)",
                '{',
                " } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The validation will pass if the asynchronous function calls the done callback with true (for the given value)."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "default( value )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Provides a default value for the property."
              )
            )
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Nice to know:"
        ),
        _react2.default.createElement(
          "p",
          null,
          "You don't really need these but they're nice shortcuts."
        ),
        _react2.default.createElement(
          "div",
          { className: "ui relaxed list" },
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "string"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains a string."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "notBlank"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The string property doesn't contain a blank value (null, undefined, empty, spaces)."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "number"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains a number. For convenience when using input controls (the most common use case) strings are tried to be converted to numbers."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "integer"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains an integer. For convenience when using input controls (the most common use case) strings are tried to be converted to numbers."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "boolean"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains a boolean (true/false) value."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "object"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains an object."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "date"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains a date."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "array"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property contains an array."
              )
            )
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "If you're interested"
        ),
        _react2.default.createElement(
          "div",
          { className: "ui relaxed list" },
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "equal(value)"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property is equal to the given value."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "notEqual(value)"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property is not equal to the given value."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "min(value)"
              ),
              _react2.default.createElement(
                "p",
                null,
                "For string properties the length is at least the given value.",
                _react2.default.createElement("br", null),
                "For number/integer/date properties the content is at least the given value.",
                _react2.default.createElement("br", null),
                "To compare other types use the 'validate(function)' validation."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "max(value)"
              ),
              _react2.default.createElement(
                "p",
                null,
                "For string properties the length is at most the given value.",
                _react2.default.createElement("br", null),
                "For number/integer/date properties the content is at most the given value.",
                _react2.default.createElement("br", null),
                "To compare other types use the 'validate(function)' validation."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "between( min, max )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property is equal or greater than minValue and also equal or lesser than maxValue.",
                _react2.default.createElement("br", null),
                "For strings the length is used."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "notBetween( min, max )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property is greater than maxValue or lesser than minValue.",
                _react2.default.createElement("br", null),
                "For strings the length is used."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "regex(regularExpression)"
              ),
              _react2.default.createElement(
                "p",
                null,
                "The property value passes the given regular expression."
              )
            )
          )
        ),
        _react2.default.createElement(
          "h3",
          null,
          "If you're insane"
        ),
        _react2.default.createElement(
          "p",
          null,
          "If you ever think it's a good idea to convert values bound to a text box, step away from the keyboard, take a deep breath, and rethink what you're doing because it will probably be a mess. It's much better to let the user enter whatever they want in an input and simply warn them that the input is invalid."
        ),
        _react2.default.createElement(
          "div",
          { className: "ui relaxed list" },
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "convert"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Tries to convert the values to the correct type before updating the property. e.g. ViewModel.property.number.convert will call parseFloat on values before updating the property."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "convertIn( function(value) ",
                '{',
                " return modifiedValue; } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Specify a function to run before the value is saved to the property. This is a chance to modify the value before saving it to the property."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "convertOut( function(value) ",
                '{',
                " return modifiedValue; } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Specify a function to run when you access a property. This is a chance to modify the value when a prperty is read."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "beforeUpdate( function(value) ",
                '{',
                "  } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Do something before the property is updated with a new value."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item" },
            _react2.default.createElement("i", { className: "pointing right icon" }),
            _react2.default.createElement(
              "div",
              { className: "content" },
              _react2.default.createElement(
                "div",
                { className: "header" },
                "afterUpdate( function(value) ",
                '{',
                "  } )"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Do something after the property is updated with a new value."
              )
            )
          )
        )
      );
    }
  }]);

  function Validation(props) {
    _classCallCheck(this, Validation);

    var _this = _possibleConstructorReturn(this, (Validation.__proto__ || Object.getPrototypeOf(Validation)).call(this, props));

    _viewmodelReact2.default.prepareComponent("Validation", _this, {
      firstName: _viewmodelReact2.default.property.string.notBlank.validMessage('First name looks good').invalidMessage("First message can't be blank or end with an X").validateAsync(function (value, done) {
        // Simulate an async call to the server
        setTimeout(function () {
          return value.endsWith("X") ? done(false) : done(true);
        }, 1000);
      }),
      lastName: _viewmodelReact2.default.property.string.validate(function (value) {
        return this.firstName() === "n/a" ? value : true;
      }).invalidMessage("Last name required when First is 'n/a'"),
      age: _viewmodelReact2.default.property.integer.min(18).default("") // Override the default value of zero
      .invalidMessage("Must be at least 18 years old").validMessage("Is an adult (at least legally)"),
      address: '' });

    return _this;
  }

  return Validation;
}(_react2.default.Component);