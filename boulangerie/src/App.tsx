import "./App.css";
import { pokemons } from "./pokemonMocks";
import { ProduitItem } from "./components/ProduitItem";
import { Produit } from "./types";

import styles from "./App.module.scss";

const produits: Produit[] = [
  {
    id: 1,
    nom: "Croissant",
    prix: 1.2,
    description: "Succulent croissant",
  },
  {
    id: 2,
    nom: "Pain au chocolat",
    prix: 1.3,
  },
  {
    id: 3,
    nom: "Eclair au chocolat",
    prix: 1.9,
  },
];

const router = createBrowserRouter([]);

function App() {
  return (
    <div className={styles.app}>
      <h1
        style={{
          color: "red",
        }}
        className={styles.title}
      >
        Boulangerie 😍😍
      </h1>
      {produits.map((produit) => {
        return (
          <ProduitItem key={produit.id} produit={produit}>
            {produit.description}
          </ProduitItem>
        );
      })}
    </div>
  );
}

export default App;
