const axios = require("axios");
// function fetchPostWithId(id) {
//   return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
// }

function fetchAllPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

async function fetchPostWithId(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.data;
  } catch (error) {}
}

module.exports = { fetchPostWithId, fetchAllPosts };
