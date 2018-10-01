const quantity = require('../src/quantity');

describe("quantity", () => {
  [
    { input: {quantity: 2}, expected: {quantity: 2, alert: true}},
    { input: {quantity: 3}, expected: {quantity: 3, alert: false}},
    { input: {quantity: 4}, expected: {quantity: 4, alert: false}},
  ].map(({input, expected}) => {
    it("should get the quantity", () => {
      expect(quantity(input)).toEqual(expected)
    })
  })
})

