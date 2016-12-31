'use strict'

const uniqueRandomArray = require('unique-random-array')
const list = require('./helpers/list.json')

module.exports = uniqueRandomArray(list)()
