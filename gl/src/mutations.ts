import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import {
    PokemonCreatePayload
} from "./types";
import {
    apiNamespace
} from "./conf";

export function usePokemonCreateMutation() {
    const queryClient = useQueryClient();

   return useMutation({
        mutationFn: async (payload: PokemonCreatePayload) => {
            const response = await fetch(`https://pokeapi.fly.dev/${apiNamespace}/pokemons`,
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            const data = await response.json();
            return data;
        },
       onSuccess: () => {
            queryClient.invalidateQueries(["pokemons"])
       },
    });
}