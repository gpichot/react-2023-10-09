import React
    from "react";

type PokedexContextType = {
    pokemonIds: string[];
    addPokemon: (pokemonIds: string) => void;
    removePokemon: (pokemonIds: string) => void;
};
export const PokedexContext = React.createContext<PokedexContextType|undefined>(undefined);

type PokedexProviderType = any;
export function PokedexProvider({ children }: PokedexProviderType) {
    const [pokemonIds, setPokemonIds] = React.useState([] as PokedexContextType['pokemonIds']);

    const addPokemon = (pokemon: string) => {
        setPokemonIds([pokemon, ...pokemonIds])
    };
    const removePokemon = (pokemon: string) => {
        const pokemonIndex = pokemonIds.indexOf(pokemon);
        if(pokemonIndex >= 0) {
            pokemonIds.splice(pokemonIndex, 1);
            setPokemonIds([...pokemonIds]);
        }
    };
    const contextValue = {
        pokemonIds,
        addPokemon,
        removePokemon
    };
    return (
        <PokedexContext.Provider value={contextValue}>
            {children}
        </PokedexContext.Provider>
    );
}

export function usePokedexContext() {
    const context = React.useContext(PokedexContext);
    if (context === undefined) {
        throw new Error(
            `usePokedexContext should be used within PokedexContext children`
        );
    }
    return context;
}