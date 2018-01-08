/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule zegamiEnzymeMatchersRegister
 * @flow
 */

import toBeAString from './assertions/toBeAString';
import toBeANumber from './assertions/toBeANumber';
import toBeAFunction from './assertions/toBeAFunction';
import toHaveClassName from './assertions/toHaveClassName';
import toHaveHTML from './assertions/toHaveHTML';
import toHaveProp from './assertions/toHaveProp';
import toHaveRef from './assertions/toHaveRef';
import toHaveState from './assertions/toHaveState';
import toHaveStyle from './assertions/toHaveStyle';
import toHaveTagName from './assertions/toHaveTagName';
import toHaveText from './assertions/toHaveText';
import toIncludeText from './assertions/toIncludeText';
import toHaveValue from './assertions/toHaveValue';
import toBeChecked from './assertions/toBeChecked';
import toBeDisabled from './assertions/toBeDisabled';
import toBeEmpty from './assertions/toBeEmpty';
import toBePresent from './assertions/toBePresent';
import toMatchSelector from './assertions/toMatchSelector';
import toMatchElement from './assertions/toMatchElement';
import toContainComponent from './assertions/toContainComponent';

export default {
  toBeAString,
  toBeANumber,
  toBeAFunction,
  toHaveClassName,
  toHaveHTML,
  toHaveProp,
  toHaveRef,
  toHaveState,
  toHaveStyle,
  toHaveTagName,
  toHaveText,
  toIncludeText,
  toHaveValue,
  toBeChecked,
  toBeDisabled,
  toBeEmpty,
  toBePresent,
  toMatchSelector,
  toMatchElement,
  toContainComponent,
};

export type { EnzymeObject, Matcher, MatcherMethods } from './types';

// expose useful utility functions
// export { } from './utils';
