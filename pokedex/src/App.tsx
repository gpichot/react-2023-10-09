import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import DresseurPage from "./pages/DresseurPage";
import PokemonFormPage from "./pages/PokemonFormPage";
import PokemonListPage from "./pages/PokemonListPage";

import styles from "./App.module.css";
import { Urls } from "./router";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  PokedexProvider,
  usePokedexContext,
} from "./features/pokemon-list/PokedexContext";
import { queryClient } from "./client";
import { usePokemonListQuery } from "./features/pokemon-list/queries";
import ReactDOM from "react-dom";
import React from "react";

function Root() {
  const pokedex = usePokedexContext();
  const n = pokedex.pokemonIds.length;
  return (
    <div className={styles.layout}>
      <h1>Pokedex</h1>
      <p>Vous avez capturé {n} pokemons</p>
      <div className={styles.content}>
        <nav className={styles.menu}>
          <Link to="/">Accueil</Link>
          <Link to="/form">Ajouter un pokémon</Link>
          <Link to="/dresseur/Gabriel">Ma page dresseur</Link>
        </nav>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <PokemonListPage />,
      },
      {
        path: "/form",
        element: <PokemonFormPage />,
      },
      {
        path: "/dresseur/:nomDresseur",
        element: <DresseurPage />,
      },
      {
        path: Urls.pokemonDetail(":pokemonId"),
        element: <PokemonDetailPage />,
      },
    ],
  },
]);

const Headline = React.lazy(async () => {
  return import("./components/Headline");
});

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <PokedexProvider>
      <QueryClientProvider client={queryClient}>
        {ReactDOM.createPortal(
          <React.Suspense fallback="Loading">
            <Headline />
          </React.Suspense>,
          document.getElementById("headline")!
        )}
        <button onClick={() => setCount((c) => c + 1)}>Force update</button>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PokedexProvider>
  );
}

export default App;
