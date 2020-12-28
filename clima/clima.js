const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f4b305d7282b80923943689210c43c23`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}