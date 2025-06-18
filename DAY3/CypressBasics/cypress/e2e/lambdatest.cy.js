describe("test suite for lambdatest.io", () => {
  it("should login successfully", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    cy.get("#input-email").type("aniketadmin@gmail.com");
    cy.get("#input-password").type("admin@1");
    cy.get("form > .btn").click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
    );
  });
});
