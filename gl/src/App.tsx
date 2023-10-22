
import './App.scss'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./pages/Root";
import PokedexPokemonsListPage from "./pages/PokedexPokemonsListPage";
import PokedexPokemonDetailsPage from "./pages/PokedexPokemonDetailsPage";
import PokedexPokemonAddPage from "./pages/PokedexPokemonAddPage";
import PokedexTrainerDetailsPage from "./pages/PokedexTrainerDetailsPage";
import {
    QueryClientProvider
} from "@tanstack/react-query";
import {
    ReactQueryDevtools
} from "@tanstack/react-query-devtools";
import ReactDOM
    from "react-dom";
import {
    PokeCounter
} from "./components/pokedex/PokeCounter";
import {
    queryClient
} from "./query-client";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <PokedexPokemonsListPage />
            },
            {
                path: '/pokemon/:pokemonName',
                element: <PokedexPokemonDetailsPage />
            },
            {
                path: '/pokemon/add',
                element: <PokedexPokemonAddPage />
            },
            {
                path: '/trainer/:trainerName',
                element: <PokedexTrainerDetailsPage />
            }
        ]
    }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        {
            ReactDOM.createPortal(
                <PokeCounter />,
                document.getElementById('footer')!
            )
        }
    </QueryClientProvider>
  );
}

export default App
