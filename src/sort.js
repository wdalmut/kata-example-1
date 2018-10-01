
const { sort, ascend, prop } = require('ramda')

module.exports = sort(ascend(prop('price')))
