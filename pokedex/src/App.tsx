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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
  return (
    <div className={styles.layout}>
      <h1>Pokedex</h1>
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
