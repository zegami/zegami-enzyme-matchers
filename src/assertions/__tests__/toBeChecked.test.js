const { shallow } = require('enzyme');
const React = require('react');
const toBeChecked = require('../toBeChecked');

function Fixture () {
  return (
    <div>
      <input id="defaulted" defaultChecked />
      <input id="is" checked />
      <input id="not" defaultChecked={false} />
      <input id="tertiary" defaultChecked checked={false} />
    </div>
  );
}

describe('toBeChecked', () => {
  const wrapper = shallow(<Fixture />);
  const truthyResults = toBeChecked(wrapper.find('#defaulted'));
  const isResults = toBeChecked(wrapper.find('#is'));
  const falsyResults = toBeChecked(wrapper.find('#not'));
  const bothResults = toBeChecked(wrapper.find('#tertiary'));

  it('returns the pass flag properly', () => {
    expect(truthyResults.pass).toBeTruthy();
    expect(falsyResults.pass).toBeFalsy();
    expect(isResults.pass).toBeTruthy();
    expect(bothResults.pass).toBeFalsy();
  });

  it('returns the message with the proper pass verbage', () => {
    expect(truthyResults.message).toMatchSnapshot();
  });

  it('returns the message with the proper pass verbage', () => {
    expect(truthyResults.negatedMessage).toMatchSnapshot();
  });

  it('provides contextual information for the message', () => {
    expect(truthyResults.contextualInformation).toMatchSnapshot();
  });
});
