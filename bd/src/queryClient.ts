import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();

const headline =  document.getElementById('headline');

queryClient.getQueryCache().subscribe((event) => {

    if(event.type === 'updated'
        &&  event.query.queryKey[0] === 'pokemons'
        && event.action.type === 'success'){

        console.log("pokemons query event", event);

        const count = event.action.data.count;

        const span = document.createElement('span');
        span.innerHTML = count;
        headline?.replaceChildren(span);
    }


});

