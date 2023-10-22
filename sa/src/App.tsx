import './App.css'
import { createBrowserRouter, Link, Outlet, RouterProvider, useParams } from "react-router-dom";
import { PokemonList } from "./components/PokemonList.tsx";
import PokemonForm from "./components/PokemonForm.tsx";
import PokemonDetails from "./components/PokemonDetails.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    PokedexProvider
} from "./features/PokedexContext.tsx";
import {
    TrainerPage
} from "./components/TrainerPage.tsx";
import {
    usePokemonListQuery
} from "./queries.ts";
import ReactDOM
    from "react-dom";

function Root(){
    return(<>
          <nav className="framed navmenu buttons">
              <Link className="button" to="/">Home</Link>
              <Link className="button" to="/form">New Pokémon</Link>
              <Link className="button" to="/trainer/Sacha">Trainer page</Link>
          </nav>  
          <Outlet/>
        </>
    );
}
function PokemonListPage(){
    const params = useParams();
    const pageNb = parseInt(params.pageNb ?? '1');
    return(<PokemonList page={pageNb}/>);
}
function PokemonFormPage(){
    return(<PokemonForm />);
}

function TrainerPageA(){
    return(<TrainerPage />);
}
function PokemonPage() {
    const params = useParams();

    return(<>
        <PokemonDetails name={params.pokemonName}/>
    </>);
}
const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>, 
        children: [
            {
                path: '/',
                element: <PokemonListPage/>
            },
            {
                path: '/:pageNb',
                element: <PokemonListPage/>
            },
            {
                path: '/form',
                element: <PokemonFormPage/>
            },
            {
                path: '/trainer/:trainerName',
                element: <TrainerPageA/>
            },
            {
                path: '/pokemon/:pokemonName',
                element: <PokemonPage/>
            }
        ]
    },
    ]
)

const queryClient = new QueryClient();

function PokemonCount() {
    let pkmnNb = 0;
    const pokemonListQuery = usePokemonListQuery(1, 15);
    if(pokemonListQuery.isLoading){
        pkmnNb = 0;
    }
    else if (pokemonListQuery.isError){
        pkmnNb = 0;
    }
    else {
        pkmnNb = pokemonListQuery.data.count -1
    }
    
    return (
    <>
        {pkmnNb}
    </>
    )
}
export function App() {
    
  return (
      <>
          <img className="logopkm" src="/src/assets/logo.png"/>
          <PokedexProvider>
  <QueryClientProvider client={queryClient}>
      {
          ReactDOM.createPortal(
              <PokemonCount/>,
              document.getElementById("headline") as HTMLElement
          )
      }
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
          </PokedexProvider>
          </>);
}

