import { AppComponent } from '../../src/app/app.component';

describe('test suite for AppComponent', () => {
  it('should instatiate (mount) the app component', () => {
    // 1st way
    // cy.mount(AppComponent); // instantiates and mounts the AppComponent in the browser
    // 2nd way
    // cy.mount(AppComponent, {
    //   declarations: [AppComponent],
    //   imports: [],
    //   providers: [],
    // });
    // cy.get('h1').should('contain', 'Hello, ang_cypress_component_testing');

    // 3rd Way
    cy.mount(AppComponent, {
      componentProperties: {
        title: 'Dynamic Title',
      },
    });
    cy.get('h1').should('contain', 'Dynamic Title');
  });
});
