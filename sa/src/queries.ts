import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "./type.ts";

export function usePokemonListQuery(page: number, limit: number = 10){
     return useQuery({
         queryKey: [`pokemons`, {page, limit}],
         queryFn: async () => {
             const response  = await fetch(`https://pokeapi.fly.dev/identifiantuniquecommekey/pokemons?limit=${limit}&offset=${limit*(page-1)}`);
             const data = await response.json();
             return data as {
                 count: number,
                 results: PokemonDetail[]
             };
         },
         keepPreviousData: true,
         staleTime: 10 * 1000,
     })
}
export function usePokemonDetailsQuery(name: string){
    return useQuery({
        queryKey: [`pokemon`, {name}],
        queryFn: async () => {
            const response  = await fetch(`https://pokeapi.fly.dev/identifiantuniquecommekey/pokemons/${name}`);
            const data = await response.json();
            return data as PokemonDetail;
        },
        keepPreviousData: true,
        staleTime: 10 * 1000,
    })
}