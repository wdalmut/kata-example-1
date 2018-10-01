const { __, lt, compose, prop } = require('ramda')

module.exports = (from) => compose(lt(from), prop('from'))
