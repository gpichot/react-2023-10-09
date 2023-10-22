import {Meta, StoryObj} from "@storybook/react";
import PokemonForm from "./PokemonForm.tsx";
import {userEvent, within} from "@storybook/testing-library";

const meta: Meta<typeof PokemonForm> = {
    title: 'PokemonForm',
    component: PokemonForm,
}


export default meta;

type Story = StoryObj<typeof PokemonForm>;


export const Default: Story= {
    args: {
        pokemon: {
            id: 1,
            name: "Mon Pokemon",
            types: ["Test"],
            color: '#dddd',
            width: "3",
            height: "5"
        }
    }
}


export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const nameInput = canvas.getByLabelText('Name', {
            selector: 'input',
        });

        await userEvent.type(nameInput, 'example-email@email.com', {
            delay: 100,
        });

        const passwordInput = canvas.getByLabelText('Width', {
            selector: 'input',
        });

        await userEvent.type(passwordInput, '10', {
            delay: 100,
        });
        // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
        const submitButton = canvas.getByRole('button');

        await userEvent.click(submitButton);
    },
};

