describe("test suite for pokedex app", () => {
  it("should visit pokedex app as localhost and search for pokemon", () => {
    cy.visit("http://localhost:4200/home");
    cy.get("#search_pokemon").type("bu");
    // will get the elements (selector)
    // cy.get(".pokemon-content").should("have.length", 2);
    // find works on top of get (selected elements)
    // cy.get("app-pokemon-item")
    //   .find(".pokemon-content")
    //   .should("have.length", 2);
  });
});
