const fs = require('fs')
const swaggerToTS = require('@manifoldco/swagger-to-ts')

const input = JSON.parse(fs.readFileSync('swagger.json', 'utf8'))
console.log(typeof swaggerToTS)
const output = swaggerToTS(input)
console.log(output)
