
const {
  lens, lensProp, prop, over, assoc, divide,
  flip, curry, compose, converge, subtract,
  identity,
} = require('ramda')

const fixed = curry((figures, number) => number.toFixed(figures))

const net_lens = lens(prop('price'), assoc('net'))
const net = over(net_lens, compose(fixed(2), flip(divide)(1.22)))

const price_lens = lensProp('price')
const price = over(price_lens, fixed(2))

const compute_vat = compose(fixed(2), converge(subtract)([prop('price'), prop('net')]))

const vat_lens = lens(identity, assoc('vat'))
const vat = over(vat_lens, compute_vat)

module.exports = compose(vat, price, net)
