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

test.skip("for custom matcher toBeWithinRange", () => {
  // Arrange
  const value = 100;
  const lowerBound = 5;
  const upperBound = 15;
  // Act & Assert
  //   expect(value).toBeWithinRange(lowerBound, upperBound); // fail
  expect(value).not.toBeWithinRange(lowerBound, upperBound); // pass
});

// write a custom matcher to check if a number is even
// fail the test if the type is not number
