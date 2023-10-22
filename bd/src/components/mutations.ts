import {useMutation, useQueryClient} from "@tanstack/react-query";
import {PokemonCreatePayload} from "./types.ts";

export function usePokemonCreateMutation(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (payload: PokemonCreatePayload) => {
            const response = await fetch(
                "https://pokeapi.fly.dev/Sacha/pokemons",
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            return await response.json()
        },
        onSuccess: () => queryClient.invalidateQueries(["pokemons"])
    })
}