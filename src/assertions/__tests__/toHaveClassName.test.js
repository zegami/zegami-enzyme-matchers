const { shallow, mount } = require('enzyme');
const React = require('react');

const toHaveClassName = require('../toHaveClassName');

function Fixture () {
  return (
    <div>
      <span className="foo" />
      <span className="bar baz" />
      <span className="baux" />
      <span className="baux" />
    </div>
  );
}

/* eslint-disable max-nested-callbacks */
describe('toHaveClassName', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = builder(<Fixture />);
      const truthyResults = toHaveClassName(wrapper.find('.bar'), 'bar');
      const falsyResults = toHaveClassName(wrapper.find('.bar'), 'asldfkj');
      const multipleResults = toHaveClassName(wrapper.find('.baux'), 'baux');
      const noMatchResults = toHaveClassName(wrapper.find('.baux'), 'foo');
      const noResults = toHaveClassName(wrapper.find('.missing'), 'bar');
      const dotResults = toHaveClassName(wrapper.find('.foo'), '.foo');
      const oddResults = toHaveClassName(wrapper.find('.foo'), '');

      it('returns the pass flag properly', () => {
        expect(truthyResults.pass).toBeTruthy();
        expect(falsyResults.pass).toBeFalsy();
        expect(multipleResults.pass).toBeTruthy();
        expect(noMatchResults.pass).toBeFalsy();
        expect(noResults.pass).toBeFalsy();
        expect(dotResults.pass).toBeTruthy();
        expect(oddResults.pass).toBeFalsy();
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

      it(`works for multiple nodes (${builder.name})`, () => {
        const multipleNodes = wrapper.find('.baux');

        const results = toHaveClassName(multipleNodes, 'baux');

        expect(results).toMatchSnapshot();
      });
    });
  });
});
/* eslint-enable max-nested-callbacks */
