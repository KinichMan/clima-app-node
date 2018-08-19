//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${coors.direccion} es de  ${temp}`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`)
//     .then(resp => {
//         console.log(JSON.stringify(resp.data, undefined, 2));
//     })
//     .catch(e => console.log('Error!!! ', e));