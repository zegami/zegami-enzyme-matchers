const { shallow, mount } = require('enzyme');
const React = require('react');

const toHaveValue = require('../toHaveValue');

function Fixture () {
  return (
    <div>
      <input defaultValue="test" />
      <input value="bar" onChange={jest.genMockFunction()} />
      <input />
    </div>
  );
}

/* eslint-disable max-nested-callbacks */
describe('toHaveValue', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = builder(<Fixture />).find('input').first();
      const truthyResults = toHaveValue(wrapper, 'test');
      const falsyResults = toHaveValue(wrapper, 'Nothing');

      const lastWrapper = builder(<Fixture />).find('input').last();
      const noResults = toHaveValue(lastWrapper, 'Nothing');

      it('returns the pass flag properly', () => {
        expect(truthyResults.pass).toBeTruthy();
        expect(falsyResults.pass).toBeFalsy();
        expect(noResults.pass).toBeFalsy();
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

    it('prioritizes `value` over `defaultValue`', () => {
      const _wrapper = shallow(<Fixture />).find('input').at(1);
      expect(toHaveValue(_wrapper, 'bar').pass).toBeTruthy();

      expect(toHaveValue(_wrapper, 'foo').pass).toBeFalsy();
    });
  });
});
/* eslint-enable max-nested-callbacks */
