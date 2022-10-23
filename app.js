
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()


console.log('Base: ',argv.b)
console.log('Hasta: ',argv.l)
console.log('Listar: ',argv.l)

crearArchivo(argv.b, argv.h, argv.l)
    .then( nombreArchivo => console.log( nombreArchivo, 'creado'.green))
    .catch( err => console.log(err));
