'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: rgb(255, 255, 255);\n  background-color: rgba(255, 255, 255, 0.8);\n  overflow-x: hidden;\n  transition: 0.5s;\n'], ['\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: rgb(255, 255, 255);\n  background-color: rgba(255, 255, 255, 0.8);\n  overflow-x: hidden;\n  transition: 0.5s;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Overlay = exports.Overlay = _styledComponents2.default.div(_templateObject);