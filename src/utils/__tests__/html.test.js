const React = require('react');
const { shallow, mount } = require('enzyme');
const html = require('../html');

/* eslint-disable max-nested-callbacks */
describe('html', () => {
  const inputStrings = {
    shallow: '<input />',
    mount: '<input>',
  };

  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      it(`prints the html for a single node (${builder.name})`, () => {
        expect(html(builder(<input />))).toBe(inputStrings[builder.name]);
      });

      it(`prints the html for multiple nodes (${builder.name})`, () => {
        const Fixture = () => (
          <div>
            <i />
            <i />
          </div>
        );

        expect(html(builder(<Fixture />).find('i'))).toBe(`Multiple nodes found:
0: <i />
1: <i />
`);
      });

      it('prints props with nodes', () => {
        const Fixture = () => (
          <div>
            <i className="foo">
              <p>Has more children</p>
            </i>
            <i disabled />
          </div>
        );

        expect(html(builder(<Fixture />).find('i'))).toBe(`Multiple nodes found:
0: <i className="foo">[..children..]</i
1: <i disabled="true"/>
`);
      });
    });
  });

  describe('isObjectWrapper', () => {
    it('prints props with objects', () => {
      const array = [
        <p>Hello</p>,
        <p>World</p>
      ];
      const Fixture = () => (
        <div>
          {array}
        </div>
      );
      expect(html(Fixture)).toBe('[empty set]');
    });
  });

  describe('isShallowWrapper', () => {
    it('still correctly identifies ShallowWrapper instances if function.name is unavailable', () => {
      const Foo = () => (
        <div>
          <i />
        </div>
      );

      const Bar = () => (
        <div>
          <Foo />
        </div>
      );

      const wrapper = shallow(<Bar />);

      // simulate platforms where function.name is undefined
      wrapper.constructor = { toString: () => 'function ShallowWrapper() {}' };
      expect(html(wrapper)).toBe('<div><Foo /></div>');
    });
  });
});
/* eslint-enable max-nested-callbacks */
