describe("test suite for lambdatest.io", () => {
  xit("should login successfully", () => {
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

  it("uses fixture to load the data", () => {
    cy.fixture("login.json").then(data => {
      cy.visit(data.loginUrl);
      cy.get("#input-email").type(data.email);
      cy.get("#input-password").type(data.pwd);
      cy.get("form > .btn").click();
      cy.url().should("eq", data.loginSuccessUrl);
    });
  });
});
