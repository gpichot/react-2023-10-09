import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "./types";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

export function usePokemonListQuery(page: number) {
  const limit = 9;
  const offset = page * limit - limit;
  return useQuery({
    queryKey: ["pokemons", { offset, limit }],
    queryFn: async () => {
      await sleep();

      const response = await fetch(
        `https://pokeapi.fly.dev/react202310/pokemons?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      return data as {
        count: number;
        results: PokemonDetail[];
      };
    },
    staleTime: 5 * 60 * 1000,
    keepPreviousData: true,
  });
}

export function usePokemonDetailQuery(id: number) {
  return useQuery({
    queryKey: ["pokemon", { id }],
    queryFn: async () => {
      await sleep();

      const response = await fetch(
        `https://pokeapi.fly.dev/react202310/pokemons/${id}`
      );
      const data = await response.json();
      return data as PokemonDetail;
    },
  });
}
