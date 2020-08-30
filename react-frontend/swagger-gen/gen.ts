const fs = require('fs')
const CodeGen = require('swagger-typescript-codegen').CodeGen

console.log('Building Typescript api from swagger.json')

const file = 'swagger.json'
const swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'))

const tsSourceCode = CodeGen.getTypescriptCode({
  className: 'ColorApi',
  swagger: swagger
})

// parse stuff like models.Version in to ModelsVersion
const parsed = tsSourceCode.replace(/models\./g, 'Models')
fs.writeFileSync('output/ccapi.ts', parsed)
