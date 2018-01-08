const React = require('react');
const { shallow } = require('enzyme');

const toBeANumber = require('../toBeANumber');

describe('toBeANumber', () => {
  const truthyResults = toBeANumber(1);
  const falsyResults = toBeANumber('string');

  it('returns the pass flag properly', () => {
    expect(truthyResults.pass).toBeTruthy();
    expect(falsyResults.pass).toBeFalsy();
  });

  it('returns the message with the proper text', () => {
    expect(truthyResults.message).toMatchSnapshot();
  });

  it('returns the negated message with the proper text', () => {
    expect(truthyResults.negatedMessage).toMatchSnapshot();
  });

  it('provides contextual information for the message', () => {
    expect(truthyResults.contextualInformation).toMatchSnapshot();
  });
});
