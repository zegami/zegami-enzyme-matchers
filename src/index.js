/* eslint-disable new-cap */
/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule zegamiEnzymeMatchers
 * @flow
 */

import serializer from 'enzyme-to-json/serializer';
import enzymeMatchers from './register.js';

declare var expect: Function;

// add the snapshot serializer for Enzyme wrappers
expect.addSnapshotSerializer(serializer);

// add methods!
const matchers = {};

Object.keys(enzymeMatchers).forEach(matcherKey => {
  const matcher = {
    [matcherKey] (wrapper, ...args) {
      // eslint-disable-next-line prefer-reflect
      const result = enzymeMatchers[matcherKey].call(this, wrapper, ...args);

      let message = this.isNot ? result.negatedMessage : result.message;

      if (result.contextualInformation.expected) {
        message += `\n${this.utils.RECEIVED_COLOR(
          result.contextualInformation.expected
        )}`;
      }

      if (result.contextualInformation.actual) {
        message += `\n${this.utils.EXPECTED_COLOR(
          result.contextualInformation.actual
        )}`;
      }

      return {
        ...result,
        message: () => message,
      };
    },
  }[matcherKey];

  matchers[matcherKey] = matcher;
});

expect.extend(matchers);
