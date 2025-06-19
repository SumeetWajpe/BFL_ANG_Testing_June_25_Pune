class LoginPage {
  elements = {
    userEmail: () => cy.get("#input-email"),
    userPwd: () => cy.get("#input-password"),
    loginBtn: () => cy.get("form > .btn"),
  };
  login() {
    this.elements.userEmail().type("aniketadmin@gmail.com");
    this.elements.userPwd().type("admin@1");
    this.elements.loginBtn().click();
  }
}

module.exports = LoginPage;
