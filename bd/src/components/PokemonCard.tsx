import React from "react";
import {Pokemon} from './types.ts'
import styles from './PokemonCard.module.scss'
import {Link} from "react-router-dom";
import {usePokedexContext} from "../PokedexContext.tsx";

export default function PokemonCard(props: { pokemon: Pokemon }) {

    const {pokemon} = props;

    const {  capturedPokemons, addPokemon,  removePokemon} = usePokedexContext();

    // click count
    const [count, setCount] = React.useState(0);

    // hovered state
    const [hovered, setHovered] = React.useState(false);
    const hoveredClass: string = hovered ? styles.hovered : '';

    return (
        <>
            <div className={`${styles.pokemon} ${hoveredClass}`}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
                 onClick={() => setCount((prevCount) => prevCount+1)}
                 title={`Pokemon with id ${pokemon.id}`}
                 style={{ backgroundColor: pokemon.color !== undefined ? pokemon.color : '#FFF3'}}>

                {/* title */}
                <div className={styles.title}>
                    {pokemon.name}
                </div>

                {/* image */}
                <img src={pokemon.image} alt={"mon pokemon"}/>

                {/* width */}
                <div>
                    {pokemon.width}
                </div>

                {/* height */}
                <div>
                    {pokemon.height}
                </div>

                {/* types */}
                <div>
                    {pokemon.types.map((pokemon_type) => {
                        return <span key={pokemon_type} className={styles.type}>{pokemon_type}</span>
                    })}
                </div>

                {/* click count */}
                <div className={styles.count}>(clicked <b><big>{count}</big></b> times)</div>

                <Link to={"/pokemon/" + pokemon.name}>Details</Link>

                <div>
                {
                    capturedPokemons.includes(pokemon.id) ? <button onClick={() => removePokemon(pokemon.id)}>Free</button> :  <button onClick={() => addPokemon(pokemon.id)} style={{ backgroundColor: "#f2bb4b" }}>Capture</button>
                }
                </div>


            </div>
        </>
    );
}

