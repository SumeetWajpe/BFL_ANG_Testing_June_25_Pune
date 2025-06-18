import { TestBed } from "@angular/core/testing";
import { PokemonService } from "../services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FilterPokemonPipe } from "./filter-pokemon.pipe";

describe("test suite for Filter Pokemon pipe", () => {
  let pokemonServObj: PokemonService;
  let filterPokemonPipe: FilterPokemonPipe;
  let pokemonArr: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
    });
    pokemonServObj = TestBed.inject(PokemonService);
    filterPokemonPipe = new FilterPokemonPipe(pokemonServObj);
    // mocked Result & input array
    pokemonArr = [
      {
        id: 1,
        name: "Pikachu",
        types: [{ type: { name: "electric" } }],
      },
      {
        id: 2,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
      {
        id: 3,
        name: "Charmander",
        types: [{ type: { name: "fire" } }],
      },
    ];
  });
  it("should return the input array as it is when no filter is applied", () => {
    // arrange
    const args = { searchText: "", types: [], genders: [] };

    // act
    const result = filterPokemonPipe.transform(pokemonArr, args);
    expect(result).toEqual(pokemonArr);
  });
  fit("should return the filtered pokemon based on the searchText that is provided", () => {
    const args = { searchText: "bu", types: [], genders: [] };
    // act
    const result = filterPokemonPipe.transform(pokemonArr, args);
    expect(result).toEqual([
      {
        id: 2,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
    ]);
});
});
