import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
import { RouterTestingModule } from "@angular/router/testing";
describe("test suite for testing App Component", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [LoaderService],
      imports: [RouterTestingModule],
    }).compileComponents(); // compile the css & html
  });
  it("should create App Component Instance ", () => {
     // act
    // create the component instance
    const fixture = TestBed.createComponent(AppComponent);
    const compInstance = fixture.componentInstance;

    // assert
    // check if the component instance is created successfully
    expect(compInstance).toBeTruthy();
  });
  it("should test for title property of App Component to be podex-angular", () => {
    // act
    // create the component instance
    const fixture = TestBed.createComponent(AppComponent);
    const compInstance = fixture.componentInstance;
    expect(compInstance.title).toBe("pokedex-angular");
  });
});
