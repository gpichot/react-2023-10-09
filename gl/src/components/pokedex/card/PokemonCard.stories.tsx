import PokemonCard
    from "./PokemonCard";
import {
    Meta,
    StoryObj
} from "@storybook/react";
import { pokemons } from "../../../fixtures/pokemons";

const meta:Meta<typeof PokemonCard> = {
    title: "PokemonCard",
    component: PokemonCard,
}

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Default: Story = {
    args: {
        pokemon: pokemons[0],
    }
}
export const WithTwoTypes: Story = {
    args: {
        pokemon: pokemons[2],
    }
}