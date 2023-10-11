type PokedexProviderProps = {
  children: React.ReactNode;
};

export function PokedexProvider(props: PokedexProviderProps) {
  const { children } = props;

  const [pokemonIds, setPokemonIds] = React.useState([]);

  const addPokemon = (pokemon) => {
    // complete me
  };
  const removePokemon = (pokemon) => {
    // complete me
  };
  const contextValue = {
    /* complete me */
  };

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
}
