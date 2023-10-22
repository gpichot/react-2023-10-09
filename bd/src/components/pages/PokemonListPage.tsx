import PokemonCard from "../PokemonCard.tsx";
import logo from '../../assets/pikachu-intro.png';
import {usePokemonListQuery} from "../queries.ts";
import {Pokemon} from "../types.ts";
import {Link, useParams} from "react-router-dom";
import {usePokedexContext} from "../../PokedexContext.tsx";

export function PokemonListpage(){
    const params = useParams();
    const page = Number(params.page ? params.page : 1);
    const pokemonListQuery = usePokemonListQuery(page);

    const { capturedPokemons} = usePokedexContext();

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

    const pokemonsData = pokemonListQuery.data;

    return <div>
        <div><img src={logo} width={"200px"} style={{position: 'fixed', left: '50px', bottom: '0px'}}/></div>
        <span>Page {page}</span>
        <div style={{width: "100%", overflowX: "auto",  display: 'flex' }}>
        {pokemonsData.results.map((pokemon: Pokemon) => {
            return <div key={pokemon.id} style={{display: 'flex', flexDirection: 'row', margin: '15px'}}>
                <PokemonCard pokemon={pokemon} />
            </div>;
        })}
        </div>
        <div style={{ padding: "15px" }}>
            <Link to={`/${page-1}`}>Prev</Link>
            <Link to={`/${page+1}`}>Next</Link>
        </div>
        <div style={{ padding: "15px" }}>
            <div><b>Captured</b></div>
            <div><span style={{ color: '#f2bb4b', fontSize: "1.3rem" }}>{capturedPokemons.length}</span></div>
        </div>
    </div>;
}