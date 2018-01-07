const stringify = require('../stringify');

describe('stringify', () => {
  it('smallest check', () => {
    const a = { a: [] };
    expect(stringify(a)).toMatchSnapshot();
  });

  it('works with all types and also with circular structs', () => {
    const proof = {
      missing: undefined,
      null: null,
      truthy: true,
      falsy: false,
      negative: -1,
      int: 1,
      empty: '',
      string: 'contents',
      array: [1, 2, 3, 4],
      object: { a: '' },
      function: function () {},
      class: Promise
    };
    proof.circular = proof;
    proof.arry = Object.keys(proof).map(k => proof[k]); // includes all other proofs
    expect(stringify(proof)).toMatchSnapshot();
  });

  it('does not mutate an array inside an object', () => {
    const anObject = { array: [1, 2, 3] };
    stringify(anObject);
    expect(anObject.array).toEqual([1, 2, 3]);
  });
});
