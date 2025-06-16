const MathModule = require("./add");

describe("default matchers with JEST", () => {
  fit("using toBe matcher (===)", () => {
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
  it("should append two strings", () => {
    // Arrange
    let result;

    // Act
    result = "Hello" + " " + "World";

    // Assert
    expect(result).toBe("Hello World");
  });
});
