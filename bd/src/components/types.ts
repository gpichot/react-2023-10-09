import React from "react";

export const pokemonTypesvalues = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water'
] as const;

export type PokemonTypes = typeof pokemonTypesvalues[number]; // number car on examine tous les indices du tablea
// export type PokemonTypesTest = typeof pokemonTypesvalues[0|1|2];  /// 0|1|2 car on se souhaite que ces éléments

export type Pokemon = {
    id: number,
    name: string,
    image?: string,
    types: string[],
    color: string,
    width: string,
    height: string
}

export type InputControlProps = {
    id: string,
    label: string,
    value?: string,
    onChange: React.ChangeEventHandler,
};

export interface InputControlPropsAsInterface extends React.ComponentPropsWithoutRef<"input">{
    id: string,
    label: string,
    value?: string
}

export type PokemonCreatePayload = {
    name: string,
    type: string,
    weight: number,
    height: number
}

