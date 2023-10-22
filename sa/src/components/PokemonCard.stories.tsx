import {
    Meta,
    StoryObj
} from "@storybook/react";

import {
    PokemonCard
} from "./PokemonCard.tsx";

const meta: Meta<typeof PokemonCard> = {
    title: 'PokemonCard',
    component: PokemonCard
};

export default meta;

type Story =StoryObj<typeof PokemonCard>;

export const Default: Story = {
    args: {
        id: '1',
        name: 'Beaukémon',
        image: 'https://static.wikia.nocookie.net/international-pokedex/images/5/5a/Squirtle_(FRLG).png',
        types: [
            'fire',
            'water'
        ]
    }
}