import {
    useQuery
} from "@tanstack/react-query";
import {
    PokemonDetails
} from "./types";
import {
    apiNamespace
} from "./conf";

export function usePokemonListQuery(page: number) {
    const limit = 9;
    const offset = page * limit - limit;

    return useQuery({
        queryKey: ["pokemons", page],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.fly.dev/${apiNamespace}/pokemons?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            return data as {
                count: number,
                results: PokemonDetails[]
            };
        },
        keepPreviousData: true,
        // staleTime: 10 * 1000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false
    });
}

export function usePokemonDetailsQuery(name: string) {
    return useQuery({
        queryKey: ["pokemon/details", name],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.fly.dev/${apiNamespace}/pokemons/${name}`);
            const data = await response.json();
            return data;
        },
        // staleTime: 10 * 1000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false
    });
}