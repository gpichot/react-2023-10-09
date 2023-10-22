import InputControl from "./InputControl.tsx";
import {
    Meta,
    StoryObj
} from "@storybook/react";

const meta: Meta<typeof InputControl> = {
  title: 'InputControl',
  component: InputControl  
};

export default meta;

type Story =StoryObj<typeof InputControl>;

export const Default: Story = {
    args: {
        label: 'Mon joli label',
        inputProps: {
            name: 'coucou'
        }
    }
}