const names = require('./names')
const sayHi = require('./utils')
const data = require('./different_syntax')
console.log(data)
require('./invoking_function')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)