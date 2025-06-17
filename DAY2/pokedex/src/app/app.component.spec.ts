import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
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

  it("should test if h1 tag is present in the template", () => {
    // nativeElement -> returns a actual DOM tree [The underlying DOM element at the root of the component.]
    const fixture = TestBed.createComponent(AppComponent);
    // const compInstance = fixture.componentInstance;
    // const debugElement = fixture.debugElement;
    // const el = debugElement.nativeElement.querySelector("h1.header");
    // expect(el).toBeTruthy();

    // OR - using debugElement
    const debugElement = fixture.debugElement;
    const h1 = debugElement.query(By.css("h1.header"));
    expect(h1).toBeTruthy();
  });
  xit("should test if h1 tag is having 'Podedex App' as text content ", () => {
    // nativeElement -> returns a actual DOM tree [The underlying DOM element at the root of the component.]
    const fixture = TestBed.createComponent(AppComponent);
    // const compInstance = fixture.componentInstance;
    const debugElement = fixture.debugElement;
    const h1 = debugElement.nativeElement.querySelector("h1.header");
    expect(h1.textContent).toBe("Pokedex App");
  });
  fit("should test if h1 tag is having title expression evaluates to as text content ", () => {
    // nativeElement -> returns a actual DOM tree [The underlying DOM element at the root of the component.]
    const fixture = TestBed.createComponent(AppComponent);
    // const compInstance = fixture.componentInstance;
    const debugElement = fixture.debugElement;
    fixture.detectChanges();
    const h1 = debugElement.nativeElement.querySelector("h1.header");
    expect(h1.textContent).toBe("pokedex-angular");
  });
});
