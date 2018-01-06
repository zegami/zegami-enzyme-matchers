const { shallow, mount } = require('enzyme');
const React = require('react');

const toHaveRef = require('../toHaveRef');

class Fixture extends React.Component {
  render () {
    return (
      <div>
        <span ref="child" />
      </div>
    );
  }
}

/* eslint-disable max-nested-callbacks */
describe('toHaveRef', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const wrapper = mount(<Fixture />);
      const willFail = shallow(<Fixture />);
      const truthyResults = toHaveRef(wrapper, 'child');
      const falsyResults = toHaveRef(wrapper, 'dad');

      it('returns the pass flag properly', () => {
        expect(truthyResults.pass).toBeTruthy();
        expect(falsyResults.pass).toBeFalsy();
      });

      it('toHaveRef will throw on shallow', () => {
        expect(() => { toHaveRef(willFail, 'child'); }).toThrow(Error);
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
