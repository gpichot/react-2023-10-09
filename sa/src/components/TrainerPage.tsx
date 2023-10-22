import {
    PokemonCard
} from "./PokemonCard.tsx";
import {
    usePokedexContext
} from "../features/PokedexContext.tsx";
import {
    usePokemonListQuery
} from "../queries.ts";
import {
    PokemonDetail
} from "../type.ts";
import styles from "./TrainerPage.module.css";

export function TrainerPage() {

    const {pokemonIds} = usePokedexContext();
    const myPokemon: PokemonDetail[] = [];
    const pokemonListQuery = usePokemonListQuery(1, 500);
    const allPkmn = pokemonListQuery.data;
    console.log(allPkmn);
    if(allPkmn === undefined) {
        return ('<h1>empty</h1>')
    }
    for(const pokemon of pokemonIds){
        const elemFound = allPkmn.results.find((candidate) => (candidate['name'].toLowerCase() == pokemon.toLowerCase()));
        if(elemFound !== undefined){
            myPokemon.push(elemFound);
        }
    }


    const pokemonCards = myPokemon.map((pokemon) => (<PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types} key={pokemon.id} id={pokemon.id}></PokemonCard>))
    const nbPkm = pokemonIds.length;

    return (
        <>
            <h2>Sacha's trainer page</h2>
            <img  src="/src/assets/trainer.png"/>
            <p className={"message"}>
                <span>{nbPkm}</span> pokémons!
            </p>
            <div className={styles.listPkmn}>
                {pokemonCards}
            </div>
        </>
    );
}