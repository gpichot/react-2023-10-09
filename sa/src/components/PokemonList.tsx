import { PokemonCard } from "./PokemonCard.tsx";
import styles from "./PokemonList.module.css";
import "./PokemonList.css";
import {
    usePokemonListQuery
} from "../queries.ts";
import React
    from "react";
import {
    Link
} from "react-router-dom";

export function PokemonList(props: { page : number}) {
    const page = props.page;
    const [pageNb, setPageNb] = React.useState(page)

    const isPageMax = () => {
        return false;
    }
    const isPageMin = () => {
        return pageNb === 1;
    }
    const increasePageNb = () => {
        if(!isPageMax()){
            setPageNb(pageNb+1);
        }
    }
    const decreasePageNb = () => {
        if(!isPageMin()) {
            setPageNb(pageNb-1);
        }
    }
    const pokemonListQuery = usePokemonListQuery(pageNb, 15);
    if(pokemonListQuery.isLoading){
        return 'Loading...'
    }
    if (pokemonListQuery.isError){
        return 'Error'
    }
    const pokemonData = pokemonListQuery.data;
    const pokemonCards = pokemonData.results.map((pokemon) => (<PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types} key={pokemon.id} id={pokemon.id}></PokemonCard>))
    return (
        <>
            <h2>My Pokédex list</h2>
            <div className={styles['list-buttons']}>
                <Link className="button" to={`/${pageNb-1}`} onClick={decreasePageNb}>PGDOWN</Link>
                <div>PAGE {pageNb}</div>
                <Link className="button" to={`/${pageNb+1}`} onClick={increasePageNb}>PGUP</Link>
            </div>
            <div className={styles['list-container']}>
                {pokemonCards}
            </div>
        </>
    )
}