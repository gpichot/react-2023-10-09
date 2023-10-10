import React from "react";
import { PokemonDetail, PokemonType } from "../types";
import classNames from "classnames";

import styles from "./PokemonCard.module.scss";

export interface PokemonCardProps {
  pokemon: PokemonDetail;
}

const MapTypeToColor: Record<PokemonType, string> = {
  poison: "#a040a0",
  grass: "#78c850",
  fire: "#f08030",
  flying: "#a890f0",
  water: "#6890f0",
  bug: "#a8b820",
  normal: "#a8a878",
  electric: "#f8d030",
  ground: "#e0c068",
  fairy: "#ee99ac",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  steel: "#b8b8d0",
  ice: "#98d8d8",
  ghost: "#705898",
  dragon: "#7038f8",
  dark: "#705848",
};

const MapTypeToEmoji: Record<PokemonType, string> = {
  poison: "😈",
  grass: "🌿",
  fire: "🔥",
  flying: "🦅",
  water: "🌊",
  bug: "🐛",
  normal: "👤",
  electric: "⚡",
  ground: "⛰️",
  fairy: "🧚",
  fighting: "🤜",
  psychic: "🔮",
  rock: "🪨",
  steel: "🔩",
  ice: "🧊",
  ghost: "👻",
  dragon: "🐉",
  dark: "🌑",
};

function createLinearGradientTypes(types: PokemonType[]) {
  const colors = types.map((type) => MapTypeToColor[type]);
  if (colors.length === 1) {
    return `${colors[0]}22`;
  }
  return `linear-gradient(to right, ${colors.join(", ")}22)`;
}

function PokemonTypeBadge(props: { type: PokemonType }) {
  const { type } = props;
  return (
    <span
      className={styles.badge}
      style={{
        backgroundColor: MapTypeToColor[type],
      }}
    >
      {MapTypeToEmoji[type]}&nbsp;
      {type}
    </span>
  );
}

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const gradient = createLinearGradientTypes(pokemon.types);
  return (
    <div
      className={classNames(styles.card, {
        [styles.isHovered]: isHovered,
      })}
      style={{
        background: gradient,
      }}
      onMouseEnter={() => {
        console.log(`Enter ${pokemon.name}`);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log(`Leave ${pokemon.name}`);
        setIsHovered(false);
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} height={64} width={64} />
      <div className={`${styles.info} ${styles["card-title"]}`}>
        <h3>{pokemon.name}</h3>
        <div>
          {pokemon.types.map((type) => (
            <PokemonTypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
      <Stats stats={pokemon.stats} />
    </div>
  );
}

const StatToLabel: Record<keyof PokemonDetail["stats"], string> = {
  hp: "PV",
  attack: "Attaque",
  defense: "Défense",
  "special-attack": "Attaque Spé.",
  "special-defense": "Défense Spé.",
  speed: "Vitesse",
};

function ProgressBar(props: { value: number }) {
  const { value } = props;
  const getValueColor = () => {
    if (value < 25) return "#ff000088";
    if (value < 50) return "#ff880088";
    if (value < 75) return "#ffff0088";
    return "#00ff0088";
  };

  return (
    <div
      style={{
        height: 8,
        width: "100%",
        backgroundColor: "#aaa",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${value}%`,
          backgroundColor: getValueColor(),
        }}
      />
    </div>
  );
}

function Stats(props: { stats: PokemonDetail["stats"] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      {Object.entries(props.stats).map(([name, value]) => (
        <>
          <span style={{ fontSize: "0.8rem" }}>
            {StatToLabel[name as keyof typeof StatToLabel]}
          </span>
          <ProgressBar value={value} />
        </>
      ))}
    </div>
  );
}
