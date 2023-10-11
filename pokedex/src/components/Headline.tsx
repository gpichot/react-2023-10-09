import React from "react";
import { usePokedexContext } from "../features/pokemon-list/PokedexContext";
import { usePokemonListQuery } from "../features/pokemon-list/queries";
const CounterBox = (props: { count: number }) => {
  const [count2, setCount2] = React.useState(0);
  return (
    <>
      <span style={{ fontWeight: "bold" }}>{props.count}</span>
      {count2}
      <button onClick={() => setCount2((c) => c + 1)}>increment</button>
    </>
  );
};
export default function Headline() {
  const pokemonListQuery = usePokemonListQuery(1);
  const { pokemonIds } = usePokedexContext();

  if (pokemonListQuery.isLoading) {
    return <p>En cours de chargement</p>;
  }

  if (pokemonListQuery.isError) return <p>Une erreur est survenue</p>;

  return (
    <p>
      Il y a <CounterBox count={pokemonListQuery.data.count} /> pokemons à
      capturer. Vous en avez déjà capturé {pokemonIds.length}
    </p>
  );
}
