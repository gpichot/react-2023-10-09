import { QueryClient } from "@tanstack/react-query";
import { createPortal } from "react-dom";

// Rajouter un élément <div id="headline"></div> dans le body de `/index.html`
// Objectif : rendre le nombre de pokémons dans cet élément en javascript Vanille

export const queryClient = new QueryClient();
// queryClient.getQueryCache().subscribe((event) => {
// console.log("queryEvent", event);

// const headlineElement = document.getElementById("headline");

// if (!headlineElement) {
// throw new Error("headline element est absent du DOM");
// }
// });
