const axios = require('axios');

/**
 * Funcion que permite obtener las coordenadas
 * @param {parametro string que permite optener el nombre del lugar} dirreccion 
 */
const getLugarLngLat = async(dir) =>{
    //encodeUrl sirve para llenar los espacios en blanco
    const encodeUlr= encodeURI(dir)
 
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: {'access_token': 'pk.eyJ1IjoidmFucGVsbGVncmluaSIsImEiOiJja2owZDl0MmgxZDg5Mnhucm9pZ3F0MHYxIn0.pW39XoN8FMd9qJxhhQPAQw'}
    });
 
    const respuesta = await instance.get();
 
    if (respuesta.data.features.length === 0) {
        throw new Error(`No hay resultado para ${dir}`)
    }
 
    const data = respuesta.data.features[0]
    const direccion = data.place_name
    const lon = data.center[0]
    const lat = data.center[1]
 
    return{
        direccion,
        lon,
        lat,
    }
}
 
module.exports={
    getLugarLngLat,
}