import {
    QueryClient
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

// First pattern to subscribe to an event (not the best)
// queryClient.getQueryCache().subscribe((event) => {
//     console.log("queryEvent", event);
//
//     if (event.type !== "added" && event.type !== "updated") {
//         return;
//     }
//
//     // `query?.` explicit that if query is null/undefined, it won't crash, it will just consider the expression as null
//     if (event.query?.queryKey[0] !== "pokemons") {
//         return;
//     }
//
//     if (event.query?.state?.status !== "success") {
//         return;
//     }
//
//     // `!.` explicit that we are certain there will always be a `#placeholder` element returned
//     document.getElementById('placeholder')!.innerText = event.query.state.data.count;
// })