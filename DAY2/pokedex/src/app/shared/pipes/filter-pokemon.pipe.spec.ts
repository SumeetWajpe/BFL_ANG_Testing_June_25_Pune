import { TestBed } from "@angular/core/testing";
import { PokemonService } from "../services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FilterPokemonPipe } from "./filter-pokemon.pipe";

describe("test suite for Filter Pokemon pipe", () => {
  let pokemonServObj: PokemonService;
  let filterPokemonPipe: FilterPokemonPipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
    });
    pokemonServObj = TestBed.inject(PokemonService);
    filterPokemonPipe = new FilterPokemonPipe(pokemonServObj);
  });
  fit("should return the input array as it is when no filter is applied", () => {
    // arrange
    // mocked Result & input array
    const pokemonArr = [
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
    const args = { searchText: "", types: [], genders: [] };

    // act
    const result = filterPokemonPipe.transform(pokemonArr, args);
    expect(result).toEqual(pokemonArr);
  });
});
