import { useParams } from "react-router-dom";

export default function DresseurPage() {
  const params = useParams();
  return (
    <>
      <h1>Page dresseur de {params.nomDresseur}</h1>
    </>
  );
}
