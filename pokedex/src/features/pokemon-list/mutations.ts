import { useMutation, useQueryClient } from "@tanstack/react-query";

export type PokemonCreatePayload = {
  name: string;
  type: string;
  weight: number;
  height: number;
};

export function usePokemonCreateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PokemonCreatePayload) => {
      const response = await fetch(
        "https://pokeapi.fly.dev/react202310/pokemons",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["pokemons"]);
    },
  });
}
