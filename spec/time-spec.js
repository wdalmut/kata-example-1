const time = require('../src/time')

describe("Time", () => {
  [
    { now: new Date('2011-01-01'), input: { from: new Date('2010-01-01') }, output: false },
    { now: new Date('2011-01-01'), input: { from: new Date('2012-01-01') }, output: true },
  ].map(({now, input, output}) => {
    it("should reply", () => {
      expect(time(now)(input)).toBe(output)
    })
  })
})
