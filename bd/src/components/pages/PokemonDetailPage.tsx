import styles from "../PokemonCard.module.scss";
import {Link, useParams} from "react-router-dom";
import {usePokemonDetailQuery} from "../queries.ts";

export function PokemonDetailPage(){

    const params = useParams();

    const pokemonListQuery = usePokemonDetailQuery(params.pokemon);

    if(pokemonListQuery.isLoading){
        return 'Chargement en cours';
    }

    if(pokemonListQuery.isError){
        return <>
            <p>Une erreur est survenue</p>
            <button onClick={() => {
                pokemonListQuery.refetch()}}>Retenter</button>
        </>;
    }

    const pokemon  = pokemonListQuery.data;

    if(pokemon === undefined){
        return <span>Not found</span>;
    }

    return <div>

        {/* title */}
        <h3 className={styles.title}>
            {pokemon.name}
        </h3>

        {/* image */}
        <img src={pokemon.image} width={"200px"} alt={"mon pokemon"}/>

        {/* weight  */}
        <div>
            {pokemon.width}
        </div>

        {/* height */}
        <div>
            {pokemon.height}
        </div>

        {/* types */}
        <div>
            {pokemon.types.map((pokemon_type: string) => {
                return <span key={pokemon_type} className={styles.type}>{pokemon_type}</span>
            })}
        </div>

        <Link to={"/"}>Return</Link>

    </div>;


}