"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Find = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require("viewmodel-react");

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VmLazyL;

var Find = exports.Find = function (_React$Component) {
      _inherits(Find, _React$Component);

      _createClass(Find, [{
            key: "render",
            value: function render() {
                  return _react2.default.createElement(
                        "div",
                        { className: "ui segment" },
                        _react2.default.createElement(
                              "h2",
                              { className: "ui header" },
                              "find & findOne"
                        ),
                        _react2.default.createElement("a", { className: "anchor active", id: "AdvancedFind" }),
                        _react2.default.createElement(
                              "p",
                              null,
                              "Use these functions if you need to communicate with a component directly and you can't use shared properties. An example of this is with an element created by a JavaScript library. They both take an optional string with the name of the component and an optional function to find a component."
                        ),
                        _react2.default.createElement(
                              "h3",
                              null,
                              "Returns all Person components"
                        ),
                        _react2.default.createElement(
                              "pre",
                              null,
                              _react2.default.createElement(
                                    "code",
                                    null,
                                    "ViewModel.find('Person')"
                              )
                        ),
                        _react2.default.createElement(
                              "h3",
                              null,
                              "Returns a single Person component"
                        ),
                        _react2.default.createElement(
                              "pre",
                              null,
                              _react2.default.createElement(
                                    "code",
                                    null,
                                    "ViewModel.findOne('Person')"
                              )
                        ),
                        _react2.default.createElement(
                              "h3",
                              null,
                              "Returns all Person components with age >= 18"
                        ),
                        _react2.default.createElement(
                              "pre",
                              null,
                              _react2.default.createElement(
                                    "code",
                                    null,
                                    "ViewModel.find('Person', (c) => c.age() >= 18 )"
                              )
                        ),
                        _react2.default.createElement(
                              "h3",
                              null,
                              "Returns the first component with the customId of 66"
                        ),
                        _react2.default.createElement(
                              "pre",
                              null,
                              _react2.default.createElement(
                                    "code",
                                    null,
                                    "ViewModel.findOne((c) => c.customId && c.customId() === 66 )"
                              )
                        )
                  );
            }
      }]);

      function Find(props) {
            _classCallCheck(this, Find);

            var _this = _possibleConstructorReturn(this, (Find.__proto__ || Object.getPrototypeOf(Find)).call(this, props));

            _viewmodelReact2.default.prepareComponent("Find", _this, {});

            return _this;
      }

      return Find;
}(_react2.default.Component);