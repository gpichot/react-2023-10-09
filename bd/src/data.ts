import {Pokemon} from "./components/types.ts";

export const pokemons: Pokemon[] = [
    {
        id: 25,
        name: "pikachu",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        color: "#ebd36d",
        width: '200',
        height: '200'
    },
    {
        id: 4,
        name: "charmander",
        types: ["fire", "electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        color: "#f4a27e",
        width: '200',
        height: '200'
    },
    {
        id: 1,
        name: "bulbasaur",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        color: "#67bac1",
        width: '200',
        height: '200'
    }
]