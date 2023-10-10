import "./App.css";
import { PokemonCard } from "./features/pokemon-list/index";
import { pokemons } from "./features/pokemon-list/mock";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
