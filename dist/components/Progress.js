'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _line = require('./line');

var _overlay = require('./overlay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function Progress(props) {
    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

    _this.state = {
      show: props.show,
      showOverlay: props.showOverlay || false
    };
    return _this;
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */


  _createClass(Progress, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show,
        showOverlay: nextProps.showOverlay || false
      });
    }

    /**
     * Render div with class.
     * @returns {XML}
     */

  }, {
    key: 'renderProgressBar',
    value: function renderProgressBar() {
      if (this.state.show) {
        return _react2.default.createElement(_line.Line, null);
      } else {
        return null;
      }
    }

    /**
     * Render overlay.
     * @returns {XML}
     */

  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      if (this.state.showOverlay) {
        return _react2.default.createElement(_overlay.Overlay, null);
      } else {
        return null;
      }
    }

    /**
     * React render.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'progress' },
        this.renderProgressBar(),
        this.renderOverlay()
      );
    }
  }]);

  return Progress;
}(_react.Component);

/**
 * Component PropTypes
 * @type {{show: *, showOverlay: *}}
 */


Progress.propTypes = {
  show: _propTypes2.default.bool,
  showOverlay: _propTypes2.default.bool
};

exports.default = Progress;