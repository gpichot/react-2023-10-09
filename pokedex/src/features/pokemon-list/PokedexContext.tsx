import * as React from "react";

type PokemonId = string | number;

type PokedexContextType = {
  pokemonIds: PokemonId[];
  addPokemon: (pokemonId: PokemonId) => void;
  removePokemon: (pokemonId: PokemonId) => void;
};

export const PokedexContext = React.createContext<
  PokedexContextType | undefined
>(undefined);

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [pokemonIds, setPokemonIds] = React.useState<PokemonId[]>([]);

  const addPokemon = (pokemonId: PokemonId) => {
    setPokemonIds((ids) => [...ids, pokemonId]);
  };
  const removePokemon = (pokemonId: PokemonId) => {
    const newPokemonIds = pokemonIds.filter((id) => id !== pokemonId);

    setPokemonIds(newPokemonIds);
  };
  const contextValue = {
    pokemonIds,
    addPokemon,
    removePokemon,
  };
  console.log("contextValue", children);
  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedexContext() {
  const context = React.useContext(PokedexContext);
  if (!context) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }
  return context;
}
