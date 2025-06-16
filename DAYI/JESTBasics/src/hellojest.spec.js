const MathModule = require("./add");
xdescribe("Test suite for addition operations", () => {
  it("should add two numbers", () => {
    // Arrange
    let result;

    // Act
    result = MathModule.add(20, 30);

    // Assert
    expect(result).toBe(50);
  });
});
