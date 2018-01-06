const { shallow, mount } = require('enzyme');
const React = require('react');

const toHaveHTML = require('../toHaveHTML');

function Fixture1 () {
  return (
    <div id="root">
      <span id="child">Test</span>
    </div>
  );
}

const html = '<span id="child">Test</span>';

/* eslint-disable max-nested-callbacks */
describe('toHaveHTML', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = builder(<Fixture1 />);
      const truthyResults = toHaveHTML(wrapper.find('#child'), html);
      const falsyResults = toHaveHTML(wrapper.find('#child'), 'foo');

      it('returns the pass flag properly', () => {
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
