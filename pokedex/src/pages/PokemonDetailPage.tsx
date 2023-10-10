import { useParams } from "react-router-dom";
import { usePokemonDetailQuery } from "../features/pokemon-list/queries";

export default function PokemonDetailPage() {
  const { pokemonId } = useParams();

  const pokemonQuery = usePokemonDetailQuery(pokemonId);

  if (pokemonQuery.isLoading) {
    return "Chargement en cours";
  }

  if (pokemonQuery.isError) {
    return (
      <>
        <p>Une erreur est survenue</p>
      </>
    );
  }

  const pokemon = pokemonQuery.data;

  if (!pokemon) {
    return (
      <>
        <p>Pokemon introuvable</p>
      </>
    );
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.picture} alt={pokemon.name} />
    </div>
  );
}
