import { StoryObj, Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import PokemonForm from "./PokemonForm";

const meta: Meta<typeof PokemonForm> = {
  title: "PokemonForm",
  component: PokemonForm,
};

export default meta;

type Story = StoryObj<typeof PokemonForm>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const name = await canvas.getByLabelText("Name*");
    await userEvent.type(name, "Pikachu", { delay: 20 });

    const type = await canvas.getByLabelText("Type*");
    await userEvent.type(type, "Electric", { delay: 20 });

    // Height
    const height = await canvas.getByLabelText("Height*");
    await userEvent.type(height, "0.4", { delay: 20 });

    // Weight
    const weight = await canvas.getByLabelText("Weight*");
    await userEvent.type(weight, "6", { delay: 20 });
  },
};
