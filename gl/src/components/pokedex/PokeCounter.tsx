import {
    usePokemonListQuery
} from "../../queries";

export function PokeCounter() {
    const pokemonListQuery = usePokemonListQuery(1);

    if (pokemonListQuery.isLoading || pokemonListQuery.isError) {
        return '';
    }

    return (
        <div className="pokecounter">Pokemon count: {pokemonListQuery.data?.count}</div>
    )
}