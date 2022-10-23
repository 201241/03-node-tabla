const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'maximo de tabla'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un número'
        }
        if( isNaN( argv.h )){
            throw 'Hasta tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;