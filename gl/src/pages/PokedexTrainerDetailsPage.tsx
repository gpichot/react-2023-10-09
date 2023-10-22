import {
    useParams
} from "react-router-dom";

export default function PokedexTrainerDetailsPage() {
    const params = useParams();

    return (
        <>
            <h1>Trainer {params.trainerName}</h1>
            <iframe
                src="https://giphy.com/embed/WqQhaYyeQ92zgTmRlY"
                width="800px"
                height="800px"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen></iframe>
        </>
    );
}