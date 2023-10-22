import InputControl
    from "./InputControl.tsx";
import React
    from "react";
import styles from "./PokemonForm.module.css";
import {
    usePokemonCreateMutation
} from "../mutations.ts";
import {
    useNavigate
} from "react-router-dom";
export default function PokemonForm() {
    const [showForm, setShowForm] = React.useState(true);
    
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [height, setHeight] = React.useState(0);
    const [weight, setWeight] = React.useState(0);

    const pokemonCreateMutation = usePokemonCreateMutation();
    const nav = useNavigate();
    if(showForm === false){
        return(<button onClick={()=>(setShowForm(true))}>
            Add pokémon
        </button>);
    }
    
    const isNameValid = () => ( name !== null );
    const isTypeValid = () => ( type !== null);

    const isFormValid = () => ( isNameValid() && isTypeValid());
    
    const changeUpdateName = (e: React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)};
    const changeUpdateType = (e: React.ChangeEvent<HTMLInputElement>)=>{setType(e.target.value)};
    const changeUpdateHeight = (e: React.ChangeEvent<HTMLInputElement>)=>{setHeight(parseInt(e.target.value))};
    const changeUpdateWeight = (e: React.ChangeEvent<HTMLInputElement>)=>{setWeight(parseInt(e.target.value))};

    const formFields = [
        {
            name: 'Name',
            type: 'text',
            placeholder: 'Pikachu',
            onChange: changeUpdateName,
            required: true
        },
        {
            name: 'Type',
            type: 'text',
            placeholder: 'electric',
            onChange: changeUpdateType,
            required: true
        },
        {
            name: 'Height',
            type: 'number',
            onChange: changeUpdateHeight
        },
        {
            name: 'Weight',
            type: 'number',
            onChange: changeUpdateWeight
        }
    ];
    
    
    const inputsControls = formFields.map((field) => (<InputControl key={field.name} label={field.name} inputProps={field}></InputControl>));

    const handleForm = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Pokemon ${name} type ${type} ${weight}kg ${height}cm`)
        if(!isFormValid()){
            return false;
        }
        pokemonCreateMutation.mutate({
            name: name,
            type: type,
            height: height,
            weight: weight,
        },{
            onSuccess: () => {
                nav("/");
            }
        });
        //setShowForm(false);
    };
    
    return (
        <form className={styles.form} onSubmit={handleForm}>
            {inputsControls}
            <button className={styles.button}>Submit</button>
        </form>
    );
}