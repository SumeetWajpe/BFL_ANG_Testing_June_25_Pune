const LoginPage = require("../pages/login.pageobject");
describe("test suite for lambdatest.io", function () {
  before(function () {
    cy.fixture("login.json").then(function (data) {
      this.loginData = data;
    });
  });
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

  xit("uses fixture to load the data", () => {
    cy.fixture("login.json").then(data => {
      cy.visit(data.loginUrl);
      cy.get("#input-email").type(data.email);
      cy.get("#input-password").type(data.pwd);
      cy.get("form > .btn").click();
      cy.url().should("eq", data.loginSuccessUrl);
    });
  });
  xit("uses fixture to load the data (from before function)", function () {
    console.log(this.loginData);
    cy.visit(this.loginData.loginUrl);
    cy.get("#input-email").type(this.loginData.email);
    cy.get("#input-password").type(this.loginData.pwd);
    cy.get("form > .btn").click();
    cy.url().should("eq", this.loginData.loginSuccessUrl);
  });
  it("should test for login functionality using LoginPage object", function () {
    cy.visit(this.loginData.loginUrl);
    const loginPage = new LoginPage();
    loginPage.login(this.loginData.email, this.loginData.pwd);
    cy.url().should("eq", this.loginData.loginSuccessUrl);
  });
});
