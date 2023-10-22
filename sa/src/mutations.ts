import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import {
    PokemonCreatePayload
} from "./type.ts";

export function usePokemonCreateMutation(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (payload: PokemonCreatePayload) => {
            const response = await fetch(`https://pokeapi.fly.dev/identifiantuniquecommekey/pokemons`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers:{
                    "content-Type": "application/json"
            }
            });
            const data = await response.json();
            return data;
        },
        onSuccess:() =>{
            queryClient.invalidateQueries(["pokemons"]);
        }
    });
}