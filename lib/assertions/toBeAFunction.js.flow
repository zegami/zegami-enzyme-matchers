/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeAFunctionAssertion
 * @flow
 */

import type { EnzymeObject, Matcher } from '../types';
import getNodeName from '../utils/name';

function toBeAFunction (enzymeWrapper: EnzymeObject): Matcher {
  const pass = (typeof enzymeWrapper === 'function');
  return {
    pass,
    message: `Expected (${getNodeName(
      enzymeWrapper
    )}) to be a "Function" but it wasn't.`,
    negatedMessage: `Expected (${getNodeName(
      enzymeWrapper
    )}) not to be a "Function" but it was`,
    contextualInformation: {
      expected: ` ${getNodeName(enzymeWrapper)}`,
    },
  };
}

export default toBeAFunction;
