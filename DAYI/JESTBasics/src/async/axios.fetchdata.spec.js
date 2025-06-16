const postsModule = require("./axios.fetchdata");
describe("test suite for testing async code with promises & async/await", () => {
  it("tests for async code (using promise) that fetchPosts returns", () => {
    var mockResult = {
      userId: 1,
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
  it("tests for async code (using promise) that fetchAllPosts returns", () => {
    var promise = postsModule.fetchAllPosts();
    return promise.then(response => {
      expect(response.data.length).toBe(100);
    });
  });

  fit("tests for async code (using async/await) that fetchPosts returns", async () => {
    try {
      const post = await postsModule.fetchPostWithId(1);
      expect(post.userId).toBe(2);
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error to fail the test if needed
    }
  });
});
