
const { gt, lens, prop, over, assoc } = require('ramda')

const quantity_lens = lens(prop('quantity'), assoc('alert'))

module.exports = over(quantity_lens, gt(3))
