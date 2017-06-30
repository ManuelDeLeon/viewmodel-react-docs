'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./imports/App');

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ViewModel = _viewmodelReact2.default;

_reactDom2.default.render(_react2.default.createElement(_App.App, {
  'data-vm-parent': undefined
}), document.getElementById('root'));