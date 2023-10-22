import {Pokemon} from "../types.ts";
import PokemonForm from "../PokemonForm.tsx";

export function PokemonFormpage(){
    const newPokemon:Pokemon = {
        id: 0,
        name: "new",
        types: [],
        image: "",
        color: "",
        width: '200',
        height: '200'
    };

    return <div><PokemonForm pokemon={newPokemon}  /></div>;
}