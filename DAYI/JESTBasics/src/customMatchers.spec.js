expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `${received} is within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `${received} is not within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("for custom matcher toBeWithinRange", () => {
  // Arrange
  const value = 10;
  const lowerBound = 5;
  const upperBound = 15;
  // Act & Assert
  expect(value).toBeWithinRange(lowerBound, upperBound);
});

// expect(10).toBeWithinRange(5, 15); // Passes
