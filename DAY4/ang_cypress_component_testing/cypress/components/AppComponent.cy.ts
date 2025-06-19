import { AppComponent } from '../../src/app/app.component';

describe('test suite for AppComponent', () => {
  it('should instatiate (mount) the app component', () => {
    // 1st way
    cy.mount(AppComponent); // instantiates and mounts the AppComponent in the browser
  });
});
