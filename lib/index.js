'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable new-cap */
/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule zegamiEnzymeMatchers
 * 
 */

var _serializer = require('enzyme-to-json/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _register = require('./register.js');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// add the snapshot serializer for Enzyme wrappers
expect.addSnapshotSerializer(_serializer2.default);

// add methods!
var matchers = {};

Object.keys(_register2.default).forEach(function (matcherKey) {
  var matcher = _defineProperty({}, matcherKey, function (wrapper) {
    var _enzymeMatchers$match;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // eslint-disable-next-line prefer-reflect
    var result = (_enzymeMatchers$match = _register2.default[matcherKey]).call.apply(_enzymeMatchers$match, [this, wrapper].concat(args));

    var _message = this.isNot ? result.negatedMessage : result.message;

    if (result.contextualInformation.expected) {
      _message += '\n' + this.utils.RECEIVED_COLOR(result.contextualInformation.expected);
    }

    if (result.contextualInformation.actual) {
      _message += '\n' + this.utils.EXPECTED_COLOR(result.contextualInformation.actual);
    }

    return _extends({}, result, {
      message: function message() {
        return _message;
      }
    });
  })[matcherKey];

  matchers[matcherKey] = matcher;
});

expect.extend(matchers);