const price = require('../src/price');

describe("sort", () => {
  [
    { input: {price: 20}, expected: {price: "20.00", net: "16.39", vat: "3.61"}},
  ].map(({input, expected}) => {
    it("should get the price", () => {
      expect(price(input)).toEqual(expected)
    })
  })
})
