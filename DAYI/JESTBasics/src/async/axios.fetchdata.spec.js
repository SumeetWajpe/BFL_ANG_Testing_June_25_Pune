const postsModule = require("./axios.fetchdata");
describe("test suite for testing async code with promises & async/await", () => {
  fit("tests for async code (using promise) that fetchPosts returns", () => {
    var mockResult = {
      userId: 2,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    var promise = postsModule.fetchPostWithId(1);
    return promise.then(response => {
      expect(response.data).toEqual(mockResult);
    });
  });
});
