// @flow
/* eslint-disable no-console */
export default function getConsoleObject (): Object {
  if (console) {
    return console;
  } else {
    return {};
  }
}
/* eslint-enable no-console */
