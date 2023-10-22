
import './App.scss'

import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import {DresseurPage} from "./components/pages/DresseurPage.tsx";
import {PokemonDetailPage} from "./components/pages/PokemonDetailPage.tsx";
import {PokemonFormpage} from "./components/pages/FormPage.tsx";
import {PokemonListpage} from "./components/pages/PokemonListPage.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {PokedexProvider} from "./PokedexContext.tsx";
import {queryClient} from "./queryClient.ts";
import ReactDOM from "react-dom";
import PokemonCount from "./components/PokemonCount.tsx";

function Root() {
    return <>
        <nav>
            <h2>Pokedex</h2>
            <Link to={"/"}>Home</Link>
            <Link to={"/form"}>Form</Link>
            <Link to={"/dresseur/Sacha"}>Dresseur</Link>
        </nav>
        <Outlet />
    </>;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/:page',
                element: <PokemonListpage />
            },
            {
                path: '/form',
                    element: <PokemonFormpage />
            },
            {
                path: '/dresseur/:nomDresseur',
                element: <DresseurPage />
            },
            {
                path: '/pokemon/:pokemon',
                element: <PokemonDetailPage />
            },
        ]
    }

])


function App() {



    // fournit la valuer query client à l'ensemble de l'arbre (partage cache)
    return <>
        <QueryClientProvider client={queryClient}>
            {ReactDOM.createPortal(<PokemonCount />, document.getElementById('portal') as HTMLElement)}
            <PokedexProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </PokedexProvider>
        </QueryClientProvider>
    </>;


}



export default App
