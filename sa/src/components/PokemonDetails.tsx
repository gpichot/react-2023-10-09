import {
    PokemonDetailsProps
} from "../type.ts";
import {
    PokemonType
} from "./PokemonType.tsx";
import styles from './PokemonDetails.module.css'
import {
    usePokemonDetailsQuery
} from "../queries.ts";

export default function PokemonDetails(props:PokemonDetailsProps) {
    const name = props.name;

    const pokemonQuery = usePokemonDetailsQuery(name);

    if(pokemonQuery.isLoading){
        return 'Loading...'
    }
    if (pokemonQuery.isError){
        return 'Error'
    }
    const myPokemon = pokemonQuery.data;

 
    if(myPokemon === undefined){
        return (<h1>This pokemon doesn't exist</h1>)
    }
    const pokemonName = myPokemon.name.charAt(0).toUpperCase() + myPokemon.name.slice(1)
    const displayTypes = myPokemon.types.map((type) => (<PokemonType key={type} type={type}></PokemonType>));
   return (<>
       <h2>{pokemonName}</h2>
       <div className={styles.container}>
           <img className={styles.img} src={myPokemon.image}/>
           <div>
           {displayTypes}
           </div>
           <div className={`stats progress-bar-container ${styles.statsContainer}`}>
               <label htmlFor="progressBarHeight">Height:</label>
               <progress className={`p${myPokemon.height}`} value={myPokemon.height} max="100" id="progressBarHeight"></progress>
               <label htmlFor="progressBarWeight">Weight:</label>
               <progress className={`p${myPokemon.weight}`} value={myPokemon.weight} max="3000" id="progressBarWeight"></progress>
               <label htmlFor="progressBarSpeed">Speed:</label>
               <progress className={`p${myPokemon.stats.speed}`} value={myPokemon.stats.speed} max="180" id="progressBarSpeed"></progress>
               <label htmlFor="progressBarHP">HP:</label>
               <progress className={`p${myPokemon.stats.hp}`} value={myPokemon.stats.hp} max="180" id="progressBarHP"></progress>
               <label htmlFor="progressBarAttack">Attack:</label>
               <progress className={`p${myPokemon.stats.attack}`} value={myPokemon.stats.attack} max="180" id="progressBarAttack"></progress>
               <label htmlFor="progressBarDefense">Defense:</label>
               <progress className={`p${myPokemon.stats.defense}`} value={myPokemon.stats.defense} max="180" id="progressBarDefense"></progress>
               <label htmlFor="progressBarSAttack">SPAttack:</label>
               <progress className={`p${myPokemon.stats['special-attack']}`} value={myPokemon.stats['special-attack']} max="180" id="progressBarSAttack"></progress>
               <label htmlFor="progressBarSAttack">SPDefense:</label>
               <progress className={`p${myPokemon.stats['special-defense']}`} value={myPokemon.stats['special-defense']} max="180" id="progressBarSDefense"></progress>

           </div>
       </div>
        </>);
}