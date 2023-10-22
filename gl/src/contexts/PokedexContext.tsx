import React
    , {
    useContext
} from "react";

export const PokedexContext = React.createContext([]);

type PokedexProviderType = {
    children: React.ReactNode;
}
export function PokedexProvider({children}: PokedexProviderType) {
    const initPokemonsNames: string[] = [];
    const [pokemonsNames, setPokemonsNames] = React.useState(initPokemonsNames);

    const hasPokemon = (pokemonName: string) => {
        return pokemonsNames.find((name) => name === pokemonName) !== undefined;
    }
    const addPokemon = (pokemonName: string) => {
        if (pokemonsNames.find((name) => name === pokemonName)) {
            return;
        }

        setPokemonsNames([...pokemonsNames, pokemonName]);
        console.log(`"${pokemonName}" and you are now bounded! 👯‍♀️`);
    }
    const removePokemon = (pokemonName: string) => {
        const index = pokemonsNames.indexOf(pokemonName);
        if (index > 0) {
            pokemonsNames.splice(index, 1);

            setPokemonsNames([...pokemonsNames]);
            console.log(`"${pokemonName}" and you are now going separate ways... 😭`);
        }
    }

    const contextValue = {
        pokemonsNames, setPokemonsNames, hasPokemon, addPokemon, removePokemon
    }

    return (
        <PokedexContext.Provider value={contextValue}>
            {children}
        </PokedexContext.Provider>
    );
}

export function usePokedexContext() {
    const context = useContext(PokedexContext);

    if (context === undefined) {
        throw new Error('usePokedexContext must be use within a PokedexProvider')
    }

    return context;
}