const axios = require('axios').default;

let fetchData = async()=> {
  let resp = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  let data = await resp.data;
  return data;
  
}

module.exports = fetchData; 