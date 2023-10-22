import React from "react";
import InputControl from "./input/InputControl";
import styles from "./PokeForm.module.scss";
import {
    InputField,
    PokemonCreatePayload
} from "../../types";
import { usePokemonCreateMutation } from "../../mutations";
import { useNavigate } from "react-router-dom";

type PokeFormProps = {
    inputs: InputField[];
}

function PokeForm(props: PokeFormProps) {
    const { inputs } = props;

    const formDataDefault: Record<string, string|number> = {};
    inputs.map(input => formDataDefault[input.name] = "");
    const [formData, setFormData] = React.useState(formDataDefault);
    const submitButtonDisabled = formData.name === "" || formData.type === "";

    const navigate = useNavigate();
    const pokemonCreateMutation = usePokemonCreateMutation();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        const payload = {
            name: formData.name,
            type: formData.type,
            height: Number(formData.height),
            weight: Number(formData.weight),
        } as PokemonCreatePayload;
        pokemonCreateMutation.mutate(payload, {
            onSuccess: navigate("/"),
        });
    }

    return (
        <form className={styles.pokeform} onSubmit={handleSubmit}>
            <h2>Pokeform 🦩</h2>
            <div className={styles.pokeformContainer}>
                {inputs.map(input => {
                    return <InputControl key={input.name}
                                         value={formData[input.name]}
                                         onChange={(event) => setFormData(
                                             {
                                                 ...formData,
                                                 [input.name]: event.currentTarget.value
                                             }
                                         )}
                                         onFocus={console.log}
                                         {...input}
                    />
                })}
                <button className={styles.mainButton}
                        type="submit"
                        disabled={submitButtonDisabled}
                >Envoyer</button>
            </div>
        </form>
    );
}

export default PokeForm;