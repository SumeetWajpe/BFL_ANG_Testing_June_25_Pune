import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";
import { FilterPokemonPipe } from "../../shared/pipes/filter-pokemon.pipe";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { StatsFilterComponent } from "../../shared/components/stats-filter/stats-filter.component";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { PokemonDetailsComponent } from "../pokemon-details/pokemon-details.component";
import { PokemonService } from "../../shared/services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { of } from "rxjs";

xdescribe("test suite for PokemonList Component", () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let compInstance: PokemonListComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent,
        PokemonItemComponent,
        FilterPokemonPipe,
        HeaderComponent,
        StatsFilterComponent,
        DialogComponent,
        PokemonDetailsComponent,
      ],
      providers: [PokemonService],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        NgMultiSelectDropDownModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonListComponent);
    compInstance = fixture.componentInstance;
  });
  it("should test if DI framework creates  the service instance & its dependencies", () => {
    let servInstance: PokemonService =
      fixture.debugElement.injector.get(PokemonService); // refers the DI framewrok instance
    expect(servInstance).toBeTruthy();
  });
  fit("mocks getPokemonData method (service)", () => {
    // arrange
    compInstance.pokemonCount = 2;
    compInstance.pokemonList = [{ name: "pikachu" }];
    let servInstance: PokemonService =
      fixture.debugElement.injector.get(PokemonService); // refers the DI framewrok instance

    jest
      .spyOn(servInstance, "getPokemonData")
      .mockReturnValue(of({ count: 2, results: [{ name: "pikachu" }] }));
    // act
    compInstance.getPokemonList();

    // assert
    expect(servInstance.getPokemonData).toHaveBeenCalled();
  });
});
