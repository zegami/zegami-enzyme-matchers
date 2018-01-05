'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html = require('../utils/html');

var _html2 = _interopRequireDefault(_html);

var _name = require('../utils/name');

var _name2 = _interopRequireDefault(_name);

var _single = require('../utils/single');

var _single2 = _interopRequireDefault(_single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeAFunctionAssertion
 * 
 */

function toBeAFunction(enzymeWrapper) {
  var pass = typeof enzymeWrapper === 'function';
  return {
    pass: pass,
    message: 'Expected (' + (0, _name2.default)(enzymeWrapper) + ') to be a "Function" but it wasn\'t.',
    negatedMessage: 'Expected (' + (0, _name2.default)(enzymeWrapper) + ') not to be a "Function" but it was',
    contextualInformation: {
      expected: ' ' + (0, _name2.default)(enzymeWrapper)
    }
  };
}

exports.default = toBeAFunction;
module.exports = exports['default'];