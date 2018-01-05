'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toBeAFunction = require('./assertions/toBeAFunction');

var _toBeAFunction2 = _interopRequireDefault(_toBeAFunction);

var _toHaveClassName = require('./assertions/toHaveClassName');

var _toHaveClassName2 = _interopRequireDefault(_toHaveClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose useful utility functions
// export { } from './utils';
/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule zegami-enzyme-matchers
 * 
 */

exports.default = {
  toBeAFunction: _toBeAFunction2.default,
  toHaveClassName: _toHaveClassName2.default
};
module.exports = exports['default'];