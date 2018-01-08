/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeANumberAssertion
 * @flow
 */

import type { EnzymeObject, Matcher } from '../types';
import getNodeName from '../utils/name';

function toBeANumber (enzymeWrapper: EnzymeObject): Matcher {
  const pass = (typeof enzymeWrapper === 'number');
  return {
    pass,
    message: `Expected (${getNodeName(
      enzymeWrapper
    )}) to be a "Number" but it wasn't.`,
    negatedMessage: `Expected (${getNodeName(
      enzymeWrapper
    )}) not to be a "Number" but it was`,
    contextualInformation: {
      expected: ` ${getNodeName(enzymeWrapper)}`,
    },
  };
}

export default toBeANumber;
