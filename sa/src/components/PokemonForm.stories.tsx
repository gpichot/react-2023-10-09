import {
    Meta,
    StoryObj
} from "@storybook/react";

import PokemonForm
    from "./PokemonForm.tsx";
import {
    userEvent,
    within
} from "@storybook/testing-library";

const meta: Meta<typeof PokemonForm> = {
    title: 'PokemonForm',
    component: PokemonForm
};

export default meta;

type Story = StoryObj<typeof PokemonForm>;

export const Default: Story = {
    args: {
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const nameInput = canvas.getByLabelText('Name', {
            selector: 'input',
        });

        await userEvent.type(nameInput, 'Pikatruc', {
            delay: 100,
        });

        const typeInput = canvas.getByLabelText('Type', {
            selector: 'input',
        });

        await userEvent.type(typeInput, 'ground', {
            delay: 100,
        });

        const submitButton = canvas.getByRole('button');

        await userEvent.click(submitButton);
    },

}