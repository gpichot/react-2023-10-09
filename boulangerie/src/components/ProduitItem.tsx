import { Produit } from "../types";

type ProduitItemProps = {
  children?: React.ReactNode;
  produit: Produit;
};

export function ProduitItem(props: ProduitItemProps) {
  const { children, produit } = props;
  const { nom, prix, estEnPromo = false } = produit;

  if (prix === 0) {
    return <p>Le produit {nom} n'est pas en vente</p>;
  }
  const onClickProduit = () => {
    alert(`Vous avez envie d'un ${nom} ?`);
  };

  return (
    <div onClick={onClickProduit}>
      <h2>
        {nom} {estEnPromo ? <span>En promo</span> : <p>Pas de promo</p>}
      </h2>
      <span className="prix">{prix.toFixed(2)}</span>
      <div style={{ paddingLeft: 10 }}>{children}</div>
    </div>
  );
}
