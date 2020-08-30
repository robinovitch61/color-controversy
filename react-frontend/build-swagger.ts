const fs = require('fs')
const CodeGen = require('swagger-typescript-codegen').CodeGen

console.log('Building Typescript Package from swagger.json')

const file = 'swagger.json'
const swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'))
const tsTypes = CodeGen.getTypescriptCode({
  swagger: swagger,
  outputType: 'TYPES'
})
fs.writeFileSync('src/types.ts', tsTypes)

const tsSourceCode = CodeGen.getTypescriptCode({
  className: 'ccapi',
  swagger: swagger
})
fs.writeFileSync('src/ccapi.ts', tsSourceCode)
