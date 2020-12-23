const lugar = require ('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugarLngLat(argv.direccion)
    .then(console.log)

