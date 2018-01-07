/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeAStringAssertion
 * @flow
 */

import type { EnzymeObject, Matcher } from '../types';
import getNodeName from '../utils/name';

function toBeAString (enzymeWrapper: EnzymeObject): Matcher {
  const pass = (typeof enzymeWrapper === 'string');
  return {
    pass,
    message: `Expected (${getNodeName(
      enzymeWrapper
    )}) to be a "String" but it wasn't.`,
    negatedMessage: `Expected (${getNodeName(
      enzymeWrapper
    )}) not to be a "String" but it was`,
    contextualInformation: {
      expected: ` ${getNodeName(enzymeWrapper)}`,
    },
  };
}

export default toBeAString;
