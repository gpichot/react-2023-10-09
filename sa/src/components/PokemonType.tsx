import {
    PokemonTypeProps
} from "../type.ts";

import styles from "./PokemonType.module.css";

export function PokemonType(props: PokemonTypeProps){
    const style = styles["card-type"] + ' ' + styles[props.type];
    return(
        <span className={style}>{props.type}</span>
    )
}
