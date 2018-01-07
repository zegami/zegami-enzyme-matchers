const getConsoleObject = require('../getConsoleObject');

describe('getConsoleObject', () => {
  describe('when console exists', () => {
    it('get a console', () => {
      expect(getConsoleObject()).toBeDefined();
    });
  });
  describe('When console DOES NOT exst', () => {
    it('get an object', () => {
      let safe = global.console;
      global.console = undefined;
      expect(getConsoleObject()).toBeDefined();
      global.console = safe;
    });
  });
});
