const group = require('../src/group')

describe("group", () => {
  [
    { input: [], output: {} },
    { input: [{category: "a"}], output: {'a': [{category: 'a'}]} },
    { input: [
        {category: "a", one: 1},
        {category: "a", one: 2},
        {category: "b", two: 1}
      ],
      output: {
        'a': [{category: 'a', one: 1}, {category: 'a', one: 2}],
        'b': [{category: 'b', two: 1}]
      }
    },
  ].map(({input, output}) => {
    it("should group", () => {
      expect(group(input)).toEqual(output)
    })
  })
})
