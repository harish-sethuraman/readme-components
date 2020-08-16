const axios = require("axios");

const fetchData = async (url) => {
  let val = await axios.get(url).then((res) => res).catch( (err) => err) ;
  return val;
};
module.exports = fetchData;
