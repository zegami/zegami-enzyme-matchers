/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule zegami-enzyme-matchers
 * @flow
 */

import toBeAFunction from './assertions/toBeAFunction';
import toHaveClassName from './assertions/toHaveClassName';

export default {
  toBeAFunction,
  toHaveClassName,
};

export type { EnzymeObject, Matcher, MatcherMethods } from './types';

// expose useful utility functions
// export { } from './utils';
