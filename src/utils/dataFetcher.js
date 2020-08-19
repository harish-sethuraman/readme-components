const fetch = require("node-fetch");

const fetchData = async (url) => {
  let val = await fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
  return val;
};
module.exports = fetchData;
