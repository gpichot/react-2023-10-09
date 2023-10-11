import { StoryObj, Meta } from "@storybook/react";
import { pokemons } from "../mock";

import PokemonCard from "./PokemonCard";

const meta: Meta<typeof PokemonCard> = {
  title: "PokemonCard",
  component: PokemonCard,
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Pikachu: Story = {
  args: {
    pokemon: pokemons[0],
  },
};
