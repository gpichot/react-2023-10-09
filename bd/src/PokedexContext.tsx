import React from "react";

export type PokemonId = string | number;

export type PokededContextType = {
    capturedPokemons: PokemonId[],
    addPokemon: (pokemon: number) => void,
    removePokemon: (pokemon: number) => void,
}

export const PokedexContext = React.createContext<PokededContextType | undefined>(
    undefined
);

export function PokedexProvider({
        children,
    }: {children: React.ReactNode}) {

    const [capturedPokemons, setCapturedPokemons] = React.useState<PokemonId[]>([]);

    const addPokemon = (pokemon: PokemonId) => {
        const newCapturedPokemons = [...capturedPokemons, pokemon];
        setCapturedPokemons(newCapturedPokemons);
    };
    const removePokemon = (pokemon: PokemonId) => {
        const indexToRemove = capturedPokemons.indexOf(pokemon); // the 'c'
        const newCapturedPokemons = [...capturedPokemons.slice(0, indexToRemove), ...capturedPokemons.slice(indexToRemove + 1)];
       setCapturedPokemons(newCapturedPokemons);
    };

    return (
        <PokedexContext.Provider value={{ capturedPokemons, addPokemon,  removePokemon}}>
            {children}
        </PokedexContext.Provider>
    );
}

export function usePokedexContext() {
    const context = React.useContext(PokedexContext);
    if (context === undefined) {
        throw new Error(
            `usePokedexContext should be used within PokedexProvider children`
        );
    }
    return context;
}