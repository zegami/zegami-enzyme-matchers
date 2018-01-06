const { shallow, mount } = require('enzyme');
const React = require('react');

const toHaveText = require('../toHaveText');

function Fixture () {
  return (
    <div>
      <p id="full">Test</p>
      <p id="empty" />
    </div>
  );
}

/* eslint-disable max-nested-callbacks */
describe('toHaveText', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = builder(<Fixture />).find('#full');
      const empty = builder(<Fixture />).find('#empty');

      const textResults = toHaveText(wrapper);
      const emptyResults = toHaveText(empty);
      const truthyResults = toHaveText(wrapper, 'Test');
      const falsyResults = toHaveText(wrapper, 'No matching text like this');

      it('returns the pass flag properly', () => {
        expect(textResults.pass).toBe(true);
        expect(emptyResults.pass).toBe(false);
        expect(truthyResults.pass).toBeTruthy();
        expect(falsyResults.pass).toBeFalsy();
      });

      it(`returns the message with the proper pass verbage (${builder.name})`, () => {
        expect(truthyResults.message).toMatchSnapshot();
      });

      it(`returns the message with the proper fail verbage (${builder.name})`, () => {
        expect(truthyResults.negatedMessage).toMatchSnapshot();
      });

      it(`provides contextual information for the message (${builder.name})`, () => {
        expect(truthyResults.contextualInformation).toMatchSnapshot();
      });
    });
  });
});
/* eslint-enable max-nested-callbacks */
