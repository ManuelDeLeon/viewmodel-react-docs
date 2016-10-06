'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDocumentation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bindings = require('./Bindings/Bindings');

var _Advanced = require('./Advanced/Advanced');

var _Basics = require('./Basics/Basics');

var _Introduction = require('./Introduction/Introduction');

var _Logo = require('./Logo/Logo');

var _Menu = require('./Menu/Menu');

var _ViewModelExplorer = require('./ViewModelExplorer/ViewModelExplorer');

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDocumentation = exports.ReactDocumentation = function (_React$Component) {
  _inherits(ReactDocumentation, _React$Component);

  _createClass(ReactDocumentation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui two column centered grid', style: {
            width: '1024px'
          } },
        _react2.default.createElement(_ViewModelExplorer.ViewModelExplorer, {
          'data-vm-parent': this
        }),
        _react2.default.createElement(
          'div',
          { id: 'react-menu', className: 'four wide column' },
          _react2.default.createElement(_Menu.Menu, {
            'data-vm-parent': this
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'twelve wide column', style: {
              width: '740px'
            } },
          _react2.default.createElement(_Logo.Logo, {
            'data-vm-parent': this
          }),
          _react2.default.createElement(_Introduction.Introduction, {
            'data-vm-parent': this
          }),
          _react2.default.createElement(_Basics.Basics, {
            'data-vm-parent': this
          }),
          _react2.default.createElement(_Advanced.Advanced, {
            'data-vm-parent': this
          }),
          _react2.default.createElement(_Bindings.Bindings, {
            'data-vm-parent': this
          })
        )
      );
    }
  }]);

  function ReactDocumentation(props) {
    _classCallCheck(this, ReactDocumentation);

    var _this = _possibleConstructorReturn(this, (ReactDocumentation.__proto__ || Object.getPrototypeOf(ReactDocumentation)).call(this, props));

    _viewmodelReact2.default.prepareComponent('ReactDocumentation', _this, {
      rendered: function rendered() {
        $('pre code').each(function (i, block) {
          $(block).addClass('language-javascript');
          Prism.highlightElement(block);

          // $(block).addClass('jsx');
          // hljs.highlightBlock(block);
        });
        var hash = window.location.hash;
        window.location.hash = hash + "X";
        window.location.hash = hash;
      }
    });

    return _this;
  }

  return ReactDocumentation;
}(_react2.default.Component);