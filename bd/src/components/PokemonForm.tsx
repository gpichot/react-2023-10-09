import {Pokemon, pokemonTypesvalues} from './types.ts';
import InputControl from './InputControl.tsx';
import styles from './PokemonForm.module.scss';
import React from "react";
import {usePokemonCreateMutation} from "./mutations.ts";
import {useNavigate} from "react-router-dom";

export default function PokemonForm(props: { pokemon: Pokemon }) {

    const {pokemon} = props;

    const navigate = useNavigate();

    const [name, setName] = React.useState(pokemon.name);
    const [image, setImage] = React.useState(pokemon.image);
    const [types, setTypes] = React.useState(pokemon.types);
    const [width, setWidth] = React.useState(pokemon.width);
    const [height, setHeight] = React.useState(pokemon.height);

    const pokemonCreateMutation = usePokemonCreateMutation();

    const handleStylesSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value: string[] = [];
        for(const option of e.currentTarget?.options){
            if(option.selected){
                value.push(option.value);
            }
        }
        setTypes(value);
    };

    return (
        <>
            <form id={"myform"} className={styles.form}>

                <InputControl id={'name'} label={"Name"} required={true} value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}/>
                <InputControl id={"image"} label={"image"} required={false} value={image} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImage(e.currentTarget.value)}/>
                <InputControl id={"width"} label={"width"} value={width} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidth(e.currentTarget.value)}/>
                <InputControl id={"height"} label={"height"} value={height} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.currentTarget.value)}/>

                <div className={styles.form_element}>
                    <label>Types</label>
                    <select className={styles.form_input} multiple={true} onChange={handleStylesSelectOnChange} defaultValue={types}>
                        {pokemonTypesvalues.map((typedef) => {
                            return <option key={typedef}  value={typedef}>{typedef}</option>
                        })}
                    </select>
                </div>

                <button type={"button"} onClick={() => {
                    const form = document.getElementById('myform');
                    const inputs = form?.getElementsByTagName('input');
                    if(inputs !== undefined) {
                        for(const input of inputs) {
                            console.log(input.validity);
                        }
                    }

                    const payload = {name, type: types.join(' '), height: Number(height), weight: Number(width)};
                    pokemonCreateMutation.mutate(payload, {
                        onSuccess: () => navigate('/1')
                    });

                }}> Confirm</button>

            </form>

        </>
    );
}

