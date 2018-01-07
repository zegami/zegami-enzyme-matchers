"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getConsoleObject;

/* eslint-disable no-console */
function getConsoleObject() {
  if (console) {
    return console;
  } else {
    return {};
  }
}
/* eslint-enable no-console */

module.exports = exports["default"];