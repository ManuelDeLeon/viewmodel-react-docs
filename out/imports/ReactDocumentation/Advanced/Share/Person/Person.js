'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_viewmodelReact2.default.share({
  house: {
    address: '123 Main St.'
  }
});

var Person = exports.Person = function (_React$Component) {
  _inherits(Person, _React$Component);

  _createClass(Person, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'item' },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement('input', { type: 'text', b: 'value: name', defaultValue: _viewmodelReact2.default.getValue(this, 'name'),
            ref: _viewmodelReact2.default.bindElement(this, 'value: name')
          }),
          _react2.default.createElement('input', { type: 'text', b: 'value: address', defaultValue: _viewmodelReact2.default.getValue(this, 'address'),
            ref: _viewmodelReact2.default.bindElement(this, 'value: address')
          })
        )
      );
    }
  }]);

  function Person(props) {
    _classCallCheck(this, Person);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, props));

    _viewmodelReact2.default.prepareComponent('Person', _this, {
      share: 'house'
    });

    return _this;
  }

  return Person;
}(_react2.default.Component);