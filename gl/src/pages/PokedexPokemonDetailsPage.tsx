import {
    useParams
} from "react-router-dom";
import PokemonCard
    from "../components/pokedex/card/PokemonCard";
import {
    usePokemonDetailsQuery
} from "../queries";

export default function PokedexPokemonDetailsPage() {
    const params = useParams();
    const query = usePokemonDetailsQuery(params.pokemonName!);

    if (query.isLoading) {
        return (
            <h2>Loading...</h2>
        );
    }

    if (query.isError) {
        return (
            <h2>Pokemon {params.pokemonName} not found 💩💩💩</h2>
        );
    }

    const pokemon = query.data;
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
}