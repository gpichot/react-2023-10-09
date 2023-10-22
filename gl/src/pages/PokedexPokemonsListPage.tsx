import React from "react";
import {
    usePokedexContext
} from "../contexts/PokedexContext";
import PokemonCard
    from "../components/pokedex/card/PokemonCard";
import {
    usePokemonListQuery
} from "../queries";


export default function PokedexPokemonsListPage() {
    const [pageNumber, setPageNumber] = React.useState(1);
    const pokemonListQuery = usePokemonListQuery(pageNumber);
    const {pokemonsNames: ownedPokemonsNames} = usePokedexContext();

    if (pokemonListQuery.isLoading) {
        return 'Loading...'
    }

    if (pokemonListQuery.isError) {
        return (
            <>
                <p>An error occurred 💩</p>
                <button type="button" onClick={() => pokemonListQuery.refetch()}>Reload</button>
            </>
        );
    }

    const pokemonData = pokemonListQuery.data;
    const totalCount = pokemonData.count;
    const totalPages = Math.ceil(totalCount / 9);

    return (
        <div id="pokedex">
            <h2>Pokedex ({ownedPokemonsNames.length} bounded)</h2>
            <div id="pokecardsListWrapper">
                <div>
                    <button onClick={() => setPageNumber((currPageNumber) => currPageNumber - 1)}
                            disabled={pageNumber === 1}
                            style={{visibility: pageNumber === 1 ? "hidden" : "visible"}}
                    >&lt;</button>
                    Page <input type="number"
                                value={pageNumber}
                                min={1}
                                max={totalPages}
                                style={{width: "48px"}}
                                onChange={(event) => setPageNumber(parseInt(event.currentTarget.value))}
                    /> / {totalPages}
                    <button onClick={() => setPageNumber((currPageNumber) => currPageNumber + 1)}
                            disabled={pageNumber === totalPages}
                            style={{visibility: pageNumber === totalPages ? "hidden" : "visible"}}
                    >&gt;</button>
                </div>
                <div id="pokecardsList">
                    {pokemonData.results.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    );
}