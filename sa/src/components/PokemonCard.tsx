import {
    PokemonCardType
} from "../type.ts";

import styles from "./PokemonCard.module.css";
import {
    PokemonType
} from "./PokemonType.tsx";
import React
    from "react";
import {
    Link
} from "react-router-dom";
import {
    usePokedexContext
} from "../features/PokedexContext.tsx";

export function PokemonCard(props: PokemonCardType){
    const {name, image, types} = props;
    
    const [isHovered, setIsHovered] = React.useState(false)
    
    const {pokemonIds, addPokemon, removePokemon} = usePokedexContext();
    const isInIds = () => (pokemonIds.indexOf(name) !== -1);
    
    const onMouseEnter = function(){
        if(!isHovered){
            setIsHovered(true);
        }
    }
    const onMouseLeave = function(){
        if(isHovered){
            setIsHovered(false);
        }   
    }
    
    const onClick = function (e: React.MouseEvent){
        e.preventDefault();
        e.stopPropagation();
        if(isInIds()){
            removePokemon(name);
        }
        else {
            addPokemon(name)
        }
    }
    
    const displayTypes = types.map((type) => (<PokemonType key={type} type={type}></PokemonType>));
    return (<div className={'framed ' + styles.card + (isHovered ? ' ' + styles['card-hover'] : '')} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link className={`button ${styles['card-content']}`} to={`/Pokemon/${name}`}>
        <div className={styles['card-name']}>{name.charAt(0).toUpperCase() + name.slice(1)}
            <img className={`${styles.pokeball} ${isInIds() ? styles['pokeball-inids'] : ''}`} src="/src/assets/pokeball.png" onClick={onClick}/>
            </div>
        <div className={styles['card-type']}>{displayTypes}</div>
        <img className={`${styles['card-img']} ${isInIds() ? styles['card-img-inids'] : ''}`} src={image} alt={name}/>
        </Link>
    </div>);
}