const getConsoleObject = require('../getConsoleObject');

global.console = {
  log: jest.fn()
};

describe('getConsoleObject', () => {
  it('get a console', () => {
    expect(getConsoleObject()).toBeDefined();
  });
});
