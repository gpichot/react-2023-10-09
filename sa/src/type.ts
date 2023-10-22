export type PokemonCardType = {
    id: string|number;
    name: string;
    image: string;
    types: Array<PokemonType>;
};
export type PokemonTypeProps = {
    type: string;
}
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
    | 'water';

export type PokemonDetail = {
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

export type InputProps = {
    label: string;
    inputProps: React.ComponentPropsWithoutRef<"input">;
}

export type PokemonDetailsProps = {
    name:string
};

export type PokemonCreatePayload = {
    name: string;
    type: string;
    height: number;
    weight: number
}