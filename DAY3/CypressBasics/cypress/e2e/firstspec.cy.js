describe("test suite for visiting flipkart", () => {
  it("should visit flipkart.com successfully", () => {
    cy.visit("https://www.flipkart.com/");
    // select the textbox with the selctor & then types iPhone
    cy.get("input.Pke_EE").type("iPhone");
  });
});
