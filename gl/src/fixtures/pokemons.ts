import {
    PokemonDetails
} from "../types";

export const pokemons: PokemonDetails[] = [
    {
        "id": 25,
        "name": "pikachu",
        "types": ["electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "weight": 60,
        "height": 4,
        "base_experience": 112,
        "forms": ["pikachu"],
        "abilities": ["static", "lightning-rod"],
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 90
        }
    },
    {
        "id": 4,
        "name": "charmander",
        "types": ["fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "weight": 85,
        "height": 6,
        "base_experience": 62,
        "forms": ["charmander"],
        "abilities": ["blaze", "solar-power"],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special-attack": 60,
            "special-defense": 50,
            "speed": 65
        }
    },
    {
        "id": 1,
        "name": "bulbasaur",
        "types": ["grass", "poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "weight": 69,
        "height": 7,
        "base_experience": 64,
        "forms": ["bulbasaur"],
        "abilities": ["overgrow", "chlorophyll"],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special-attack": 65,
            "special-defense": 65,
            "speed": 45
        }
    }
]