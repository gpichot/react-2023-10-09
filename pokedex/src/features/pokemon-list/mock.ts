import { PokemonDetail } from "./types";

export const pokemons: PokemonDetail[] = [
  {
    id: 25,
    name: "pikachu",
    types: ["electric"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    weight: 60,
    height: 4,
    base_experience: 112,
    forms: ["pikachu"],
    abilities: ["static", "lightning-rod"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      "special-attack": 50,
      "special-defense": 50,
      speed: 90,
    },
  },
  {
    id: 4,
    name: "charmander",
    types: ["fire"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    weight: 85,
    height: 6,
    base_experience: 62,
    forms: ["charmander"],
    abilities: ["blaze", "solar-power"],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      "special-attack": 60,
      "special-defense": 50,
      speed: 65,
    },
  },
];
