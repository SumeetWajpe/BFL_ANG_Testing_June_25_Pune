const MathModule = require("./add");

describe("default matchers with JEST", () => {
  it("using toBe matcher (===)", () => {
    // Arrange
    let result;

    // Act
    result = MathModule.add(20, 30);

    // Assert
    expect(result).toBe(50); // This will fail because 50 is a number, not a string
  });

  it("should append two strings", () => {
    // Arrange
    let result;

    // Act
    result = "Hello" + " " + "World";

    // Assert
    expect(result).toBe("Hello World");
  });
  it("tests the toEqual matcher (===) & Object Inequality", () => {
    // Arrange
    let result;

    // Act
    result = "Hello" + " " + "World";

    // Assert
    // expect(result).toEqual("Hello World");
    expect({ name: "Carlos Alcaraz" }).toEqual({ name: "Alcaraz" });
  });
  fit("tests for toContain matcher", () => {
    // can check for containment in a string or an array
    expect("Good Morning").toContain("Morning");
    //  expect([1, 2, 3, 4]).toContain(3);
  });
});
