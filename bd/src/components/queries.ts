import {useQuery} from "@tanstack/react-query";
import {Pokemon} from "./types.ts";


export function usePokemonListQuery(page: number){
    const limit = 15;

    const offset = limit*(page-1);

    return useQuery({
        queryKey: ['pokemons', {page, offset}],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.fly.dev/Sacha/pokemons?limit=${limit}&offset=${offset}`);
            return await response.json() as {
                count: number,
                results: Pokemon[];
            };
        },
        keepPreviousData: true
        // staleTime: 10 * 1000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchInterval: 5 * 1000
    })
}

export function usePokemonDetailQuery(name?: string){

    return useQuery({
        queryKey: ['pokemons', {name}],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.fly.dev/Sacha/pokemons/${name}`);
            return await response.json();
        },
        keepPreviousData: true
    })
}