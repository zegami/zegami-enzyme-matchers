const { shallow, mount } = require('enzyme');
const React = require('react');

const toIncludeText = require('../toIncludeText');

function Fixture () {
  return (
    <div>
      <p id="full">Some important text</p>
    </div>
  );
}

/* eslint-disable max-nested-callbacks */
describe('toIncludeText', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = builder(<Fixture />).find('p');
      const truthyResults = toIncludeText(wrapper, 'important');
      const falsyResults = toIncludeText(wrapper, 'nope');
      const noneResults = toIncludeText(wrapper);

      it('returns the pass flag properly', () => {
        expect(truthyResults.pass).toBeTruthy();
        expect(falsyResults.pass).toBeFalsy();
        expect(noneResults.pass).toBeFalsy();
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
