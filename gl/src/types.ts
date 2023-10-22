import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type PokemonType =
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'electric'
    | 'fairy'
    | 'fighting'
    | 'fire'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'water'

    // Custom types
    | 'ronchon';

export type PokemonDetails = {
    id: number | string;
    name: string;
    types: PokemonType[];
    image: string;
    weight: number;
    height: number;
    base_experience: number;
    forms: string[];
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        'special-attack': number;
        'special-defense': number;
        speed: number;
    };
};

export type PokemonTypeDecoration = {
    icon: IconDefinition;
    main_color: string;
    complementary_color: string;
}

export type PokemonStatDecoration = {
    label: string;
    main_icon: IconDefinition;
    complementary_icon: string | IconDefinition
}

export type PokemonCreatePayload = {
    name: string;
    type: string;
    height: number;
    weight: number;
}

export type InputField = {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    mandatory?: boolean;
}