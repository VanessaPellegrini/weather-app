const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/*lugar.getLugarLngLat(argv.direccion)
    .then(console.log);*/

/*clima.getClima(40.450000, -74.000000)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLngLat(direccion);

        const temp = await clima.getClima(coords.lat, coords.lon)
    
        return `El clima de ${coords.direccion} es de ${temp}.`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)