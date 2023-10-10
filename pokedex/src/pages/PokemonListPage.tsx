import React from "react";
import PokemonCard from "../features/pokemon-list/components/PokemonCard";
import { usePokemonListQuery } from "../features/pokemon-list/queries";

export default function PokemonListPage() {
  const [page, setPage] = React.useState(1);
  const pokemonListQuery = usePokemonListQuery(page);

  if (pokemonListQuery.isLoading) {
    return "Chargement en cours";
  }

  if (pokemonListQuery.isError) {
    return (
      <>
        <p>Une erreur est survenue</p>
        <button onClick={() => pokemonListQuery.refetch()}>Retenter</button>
      </>
    );
  }

  const pokemonsData = pokemonListQuery.data;

  return (
    <>
      {pokemonListQuery.isFetching &&
        "Chargement en cours des derniers changements"}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {pokemonsData.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <button
        onClick={() => {
          setPage((page) => page - 1);
        }}
      >
        Page précédente
      </button>

      <button
        onClick={() => {
          setPage((page) => page + 1);
        }}
      >
        Page suivante
      </button>
    </>
  );
}
