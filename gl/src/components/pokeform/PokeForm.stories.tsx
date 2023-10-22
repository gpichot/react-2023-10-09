import PokemonForm
    from "./PokeForm";
import {
    Meta,
    StoryObj
} from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';
import { inputs } from "../../fixtures/inputs";

const meta:Meta<typeof PokemonForm> = {
    title: "PokemonForm",
    component: PokemonForm,
}

export default meta;

type Story = StoryObj<typeof PokemonForm>;

export const Default: Story = {
    args: {
        inputs: inputs,
    },
    play: async ({ canvasElement })=> {
        const canvas = within(canvasElement);

        const nameInput = canvas.getByLabelText('Name', {
            selector: 'input',
        });
        await userEvent.type(nameInput, 'Some name', {
            delay: 100,
        });

        const typeInput = canvas.getByLabelText('Type', {
            selector: 'input',
        });
        await userEvent.type(typeInput, 'electric', {
            delay: 100,
        });

        const submitButton = canvas.getByRole('button')
        await userEvent.click(submitButton, {
            delay: 100
        });
    }
}