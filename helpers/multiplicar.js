const fs = require('fs');
const calors = require('colors')

const crearArchivo = async( base=5, hasta, listar ) => {

    try {
        const max = hasta
        
        let salida = ''
        let consola = ''
        for( let i = 1; i <= max; i++){
            salida += `${base} x ${i} = ${base*i} \n`
            consola += `${base}`+ 'x'.magenta +`${i}`+ '='.cyan + `${base*i} \n`.blue
        }
        
        if(listar){
            console.log(' ___________' .green)
            console.log(`Tabla ${base}`.green)
            console.log(' ___________'.green)
            console.log(consola)
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.blue
    } catch (err) {
        throw `error al crear:\n ${err} ...`
    }

}

module.exports = {
    crearArchivo
}