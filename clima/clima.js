const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=10&appid=b039adfe1eb41f9fc7fffbf67372948f`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}