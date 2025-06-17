describe("test suite for mocking", () => {
  fit("tests for a mock function", () => {
    const mockFn = jest.fn(); // create a mock function with JEST
    let result = mockFn(10);
    // expect(mockFn).toHaveBeenCalled(); // check if the mock function was called
    // expect(mockFn).toHaveBeenCalledTimes(1); // check if the mock function was called once
    expect(mockFn).toHaveBeenCalledWith(10); // check if the mock function was called with the argument 10
  });
});
