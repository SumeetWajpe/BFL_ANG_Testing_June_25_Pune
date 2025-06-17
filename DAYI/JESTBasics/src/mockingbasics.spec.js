describe("test suite for mocking", () => {
  it("tests for a mock function", () => {
    const mockFn = jest.fn(); // create a mock function with JEST
    let result = mockFn(10);
    // expect(mockFn).toHaveBeenCalled(); // check if the mock function was called
    // expect(mockFn).toHaveBeenCalledTimes(1); // check if the mock function was called once
    expect(mockFn).toHaveBeenCalledWith(10); // check if the mock function was called with the argument 10
  });
});

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

describe("test suite for mocking with jest.fn() function implementatio", () => {
  fit("should pass the test with foreach function calls", () => {
    const mockCallback = jest.fn(x => x * x);
    forEach([10, 20], mockCallback);
    // expect(mockCallback.mock.calls.length).toBe(2); // check if the mock function
    //  expect(mockCallback.mock.calls[0][0]).toBe(10); // check if the first call was with 10
    // expect(mockCallback.mock.calls[1][0]).toBe(20); // check if the first call was with 10
    expect(mockCallback.mock.results[0].value).toBe(100); // check if the first call was with 10
  });
});
