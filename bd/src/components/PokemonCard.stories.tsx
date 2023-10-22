import {Meta, StoryObj} from "@storybook/react";
import PokemonCard from "./PokemonCard.tsx";

const meta: Meta<typeof PokemonCard> = {
    title: 'PokemonCard',
    component: PokemonCard,
}

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Default: Story= {
    args: {
        pokemon: {
            id: 1,
            name: "Mon Pokemon",
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
            types: ["Test"],
            color: '#dddd',
            width: "3",
            height: "5"
        }
    }
}

