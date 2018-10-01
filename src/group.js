
const { groupBy, prop } = require('ramda')

module.exports = groupBy(prop('category'))
