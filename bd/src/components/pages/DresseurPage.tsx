import {useParams} from "react-router-dom";

export function DresseurPage(){
    const params = useParams();
    return <h3>{params.nomDresseur}</h3>;
}