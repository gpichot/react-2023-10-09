import {usePokemonListQuery} from "./queries.ts";


export default function PokemonCount() {

    const pokemonListQuery = usePokemonListQuery(1);

    if(pokemonListQuery.isLoading || pokemonListQuery.isFetching){
        return 'Chargement en cours';
    }

    if(pokemonListQuery.isError){
        return <>

            <p>Une erreur est survenue</p>

            <button onClick={() => {
                pokemonListQuery.refetch()}}>Retenter</button>
        </>;
    }

    const pokemonsData = pokemonListQuery.data;

    return <span>
        {pokemonsData.count}
    </span>

}

