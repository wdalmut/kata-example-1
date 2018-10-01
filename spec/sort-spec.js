const sort = require('../src/sort');

describe("Sort", () => {
  [
    { input: [], expected: [] },
    { input: [{price: 40},{price: 20}], expected: [{price: 20},{price: 40}] },
  ].map(({input, expected}) => {
    it("should sort by price", () => {
      expect(sort(input)).toEqual(expected)
    })
  })
});
