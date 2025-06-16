const axios = require("axios");
function fetchPostWithId(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

module.exports = { fetchPostWithId };
