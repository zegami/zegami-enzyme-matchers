/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toBeAFunction
 * @flow
 */

import type { EnzymeObject, Matcher } from '../types';
import html from '../utils/html';
import getNodeName from '../utils/name';
import single from '../utils/single';

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
      expected: ` ${html(enzymeWrapper)}`,
    },
  };
}

export default single(toBeAFunction);
