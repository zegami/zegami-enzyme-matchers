const { shallow } = require('enzyme');
const React = require('react');
import PropTypes from 'prop-types';

const toContainComponent = require('../toContainComponent');

function User (props) {
  return (
    <span>
      User {props.index}
    </span>
  );
}

User.propTypes = {
  index: PropTypes.number.isRequired,
};

function Fixture () {
  return (
    <div>
      <ul>
        <li>
          <User index={1} />
        </li>
        <li>
          <User index={2} />
        </li>
      </ul>
    </div>
  );
}

describe('toContainComponent', () => {
  const wrapper = shallow(<Fixture />);
  const truthyResults = toContainComponent(wrapper, <User index={1} />);
  const falsyResults = toContainComponent(wrapper, <User index={3} />);

  it('returns the pass flag properly', () => {
    expect(truthyResults.pass).toBeTruthy();
    expect(falsyResults.pass).toBeFalsy();
  });

  it('returns the message with the proper pass verbage', () => {
    expect(truthyResults.message).toMatchSnapshot();
  });

  it('returns the message with the proper fail verbage', () => {
    expect(truthyResults.negatedMessage).toMatchSnapshot();
  });

  it('provides contextual information for the message', () => {
    expect(truthyResults.contextualInformation).toMatchSnapshot();
  });
});
