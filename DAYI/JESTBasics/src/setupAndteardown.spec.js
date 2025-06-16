beforeEach(() => {
  console.log("beforeEach called - Global");
  // This will run before each test case
});

beforeAll(() => {
  console.log("beforeAll called - Global");
  // This will run once before all test cases
});
xdescribe("test suite for setup & teardown methods", () => {
  var cars;
  beforeAll(() => {
    console.log("BeforeAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
    cars = ["BMW", "Mercedes", "Audi"];
  });
  it("should contain BMW as an item in cars array", () => {
    console.log("Within test case - BMW");
    expect(cars).toContain("BMW");
  });
  it("should contain Mercedes as an item in cars array", () => {
    console.log("Within test case - Mercedes");
    expect(cars).toContain("Mercedes");
  });
  afterEach(() => {
    console.log("afterEach called");
    cars = null;
  });
  afterAll(() => {
    console.log("AfterAll called");
  });
});

xdescribe("test suite for setup & teardown methods - 2", () => {
  it("tests a test", () => {
    console.log("Within test case - 2");
    expect(true).toBe(true);
  });
});
