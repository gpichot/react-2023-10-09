import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWeightScale,
    faRulerVertical,
    faBarsProgress,
    faHeart,
    faFire,
    faShield,
    faGaugeHigh,
    faBolt,
    faSeedling,
    faSkullCrossbones,
    faBug,
    faMoon,
    faDragon,
    faWandMagicSparkles,
    faHandFist,
    faGhost,
    faWind,
    faWater,
    faSquare,
    faHillRockslide,
    faHeadSideVirus,
    faFaceTired
} from "@fortawesome/free-solid-svg-icons";
import {
    PokemonDetails,
    PokemonStatDecoration,
    PokemonType,
    PokemonTypeDecoration
} from "../../../types";
import styles from "./PokemonCard.module.scss";
import {
    Link
} from "react-router-dom";
import {
    usePokedexContext
} from "../../../contexts/PokedexContext";

type PokemonCardProps = {
    /** Pokemon information (name, stats, ... */
    pokemon: PokemonDetails;
};

/* This should be stored in DB */
const statData: Record<string, PokemonStatDecoration> = {
    "hp": {
        "label": "HP",
        "main_icon": faHeart,
        "complementary_icon": ""
    },
    "attack": {
        "label": "Attack",
        "main_icon": faFire,
        "complementary_icon": ""
    },
    "defense": {
        "label": "Defense",
        "main_icon": faShield,
        "complementary_icon": ""
    },
    "special-attack": {
        "label": "S. Attack",
        "main_icon": faFire,
        "complementary_icon": "star"
    },
    "special-defense": {
        "label": "S. Defense",
        "main_icon": faShield,
        "complementary_icon": "star"
    },
    "speed": {
        "label": "Speed",
        "main_icon": faGaugeHigh,
        "complementary_icon": ""
    }
} as const;
const typeDecorations: Record<PokemonType, PokemonTypeDecoration> = {
    "bug": {
        "icon": faBug,
        "main_color": "#043f10",
        "complementary_color": "#e0fae5"
    },
    "dark": {
        "icon": faMoon,
        "main_color": "#2d2d02",
        "complementary_color": "#ffff5b"
    },
    "dragon": {
        "icon": faDragon,
        "main_color": "#2d2d02",
        "complementary_color": "#ffff5b"
    },
    "electric": {
        "icon": faBolt,
        "main_color": "#2d2d02",
        "complementary_color": "#fefedc"
    },
    "fairy": {
        "icon": faWandMagicSparkles,
        "main_color": "#3e013b",
        "complementary_color": "#ffdefd"
    },
    "fighting": {
        "icon": faHandFist,
        "main_color": "#3f1c00",
        "complementary_color": "#feb673"
    },
    "fire": {
        "icon": faFire,
        "main_color": "#3f1c00",
        "complementary_color": "#feb673"
    },
    "flying": {
        "icon": faWind,
        "main_color": "#02112f  ",
        "complementary_color": "#eef1f7"
    },
    "ghost": {
        "icon": faGhost,
        "main_color": "#005724",
        "complementary_color": "#e2ffdf"
    },
    "grass": {
        "icon": faSeedling,
        "main_color": "#005724",
        "complementary_color": "#e2ffdf"
    },
    "ground": {
        "icon": faSquare,
        "main_color": "#462702",
        "complementary_color": "#f1e6d9"
    },
    "ice": {
        "icon": faSquare,
        "main_color": "#ffffff",
        "complementary_color": "#494949"
    },
    "normal": {
        "icon": faSquare,
        "main_color": "#242424",
        "complementary_color": "#f3f3f3"
    },
    "poison": {
        "icon": faSkullCrossbones,
        "main_color": "#ffffff",
        "complementary_color": "#494949"
    },
    "psychic": {
        "icon": faHeadSideVirus,
        "main_color": "#31013c",
        "complementary_color": "#dbcadf"
    },
    "rock": {
        "icon": faHillRockslide,
        "main_color": "#462702",
        "complementary_color": "#f1e6d9"
    },
    "steel": {
        "icon": faSquare,
        "main_color": "#2a2a2a",
        "complementary_color": "#c0c0c0"
    },
    "water": {
        "icon": faWater,
        "main_color": "#03133f",
        "complementary_color": "#dce2f3"
    },

    // Custom types
    "ronchon": {
        "icon": faFaceTired,
        "main_color": "#ffffff",
        "complementary_color": "#494949"
    },
} as const;

function PokemonCard(props: PokemonCardProps) {
    const {pokemon} = props;
    const {hasPokemon, addPokemon, removePokemon} = usePokedexContext();

    return (
        <div className={`${styles.pokemonCard}`}
             onClick={(event) => {
                 // if (hasPokemon(event))
                 let pokemonName = event.target.closest(`.${styles.pokemonCard}`).querySelector(`.${styles.title}`).textContent;
                 if (hasPokemon(pokemonName)) {
                     if (confirm(`Are you sure you want to unbound "${pokemonName}"?`)) {
                         removePokemon(pokemonName);
                     }
                 } else {
                     const rand = Math.random();
                     if (rand > 0.60) {
                         addPokemon(pokemonName);
                     } else {
                         console.log(`"${pokemonName}" didn't established a bond, try again (rand ${rand} must be > 0.60`);
                     }
                 }
             }
             }>
            {pokemon.image !== null ? <img src={pokemon.image} /> : null}
            <div className={styles.details}>
                <div className={styles.header}>
                    <h3 className={styles.title}
                        title={pokemon.name}
                    >
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </h3>
                    <ul className={styles.types}>
                        {pokemon.types.map(type => {
                            return (
                                <li key={type}
                                    style={{
                                        backgroundColor: typeDecorations[type].complementary_color,
                                        color: typeDecorations[type].main_color
                                    }}
                                >
                                    <span className={styles.typeIcon}>
                                        <FontAwesomeIcon icon={typeDecorations[type].icon} fixedWidth />
                                    </span>
                                    {type}
                                </li>
                            )}
                        )}
                    </ul>
                </div>
                <div className={styles.description}>
                    <div className={styles.baseInfos}>
                        <ul className={styles.infos}>
                            <li><span className={styles.infoIcon}><FontAwesomeIcon icon={faRulerVertical} fixedWidth /></span>{pokemon.height} cm</li>
                            <li><span className={styles.infoIcon}><FontAwesomeIcon icon={faWeightScale} fixedWidth /></span>{pokemon.weight} kg</li>
                            <li><span className={styles.infoIcon}><FontAwesomeIcon icon={faBarsProgress} fixedWidth /></span>{pokemon.base_experience} XP</li>
                        </ul>
                    </div>
                    <div className={styles.extraInfos}>
                        <ul className={styles.infos}>
                            {Object.keys(pokemon.stats).map((statKey) => (
                                <li className={styles.stat} key={statKey}>
                                    <span>{statData[statKey]['label']}</span>
                                    <span className={styles.statProgressbar}>
                                        <span className={styles.statProgressbarFill}
                                              style={
                                            {
                                                width: `${pokemon.stats[statKey]}%`,
                                                backgroundColor: pokemon.stats[statKey] > 50 ? '#6b946b' : pokemon.stats[statKey] > 40 ? '#f7cc6f' : '#c52828'
                                            }
                                        }></span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;