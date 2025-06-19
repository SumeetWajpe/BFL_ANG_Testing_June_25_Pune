class LoginPage {
  elements = {
    userEmail: () => cy.get("#input-email"),
    userPwd: () => cy.get("#input-password"),
    loginBtn: () => cy.get("form > .btn"),
  };
  login(email, pwd) {
    this.elements.userEmail().type(email);
    this.elements.userPwd().type(pwd);
    this.elements.loginBtn().click();
  }
}

module.exports = LoginPage;
