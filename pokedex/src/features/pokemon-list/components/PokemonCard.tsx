import React, { ChangeEventHandler } from "react";
import { PokemonDetail } from "../types";

import styles from "./PokemonCard.module.scss";

export interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [name, setName] = React.useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <div
      className={`${styles.card} ${styles.card2}`}
      onMouseEnter={() => console.log(`Enter ${pokemon.name}`)}
      onMouseLeave={() => console.log(`Leave ${pokemon.name}`)}
    >
      <input value={name} onChange={handleChangeName} />
      <img src={pokemon.image} alt={pokemon.name} />
      <div className={`${styles.info} ${styles["card-title"]}`}>
        <h3>{pokemon.name}</h3>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      </div>
    </div>
  );
}
