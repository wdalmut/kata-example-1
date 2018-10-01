const { map, filter } = require('ramda')

const time = require('./src/time')
const sort = require('./src/sort')
const price = require('./src/price')
const group = require('./src/group')
const quantity = require('./src/quantity')

let data = [
  { "title": "First item", "price": 10.12, "quantity": 3, "category": "SMARTPHONE", from: new Date('2010-01-01') },
  { "title": "Second item", "price": 12.22, "quantity": 2, "category": "SMARTPHONE", from: new Date('2018-01-01') },
  { "title": "Third item", "price": 7.11, "quantity": 20, "category": "LAPTOP", from: new Date('2015-01-01') },
]

let sortedData = sort(data)
console.log(sortedData)

let dataWithMoreInfo = map(price, sortedData)
console.log(dataWithMoreInfo)

let dataWithAlert = map(quantity, dataWithMoreInfo)
console.log(dataWithAlert)

let grouppedData = group(dataWithAlert)
console.log(grouppedData)

let onlyFrom2017 = filter(time(new Date('2017-01-01')), dataWithAlert)
console.log(onlyFrom2017)

