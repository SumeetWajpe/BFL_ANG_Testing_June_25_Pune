const axios = require("axios");
function fetchPosts(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

module.exports = { fetchPosts };
