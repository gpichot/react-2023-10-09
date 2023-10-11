import { Meta, StoryObj } from "@storybook/react";
import InputControl from "./InputControl";

const meta: Meta<typeof InputControl> = {
  title: "InputControl",
  component: InputControl,
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Default: Story = {
  args: {
    label: "Mon label",
    id: "mon-label",
  },
};
export const Default2: Story = {
  args: {
    label: "Mon label",
    id: "mon-label",
    placeholder: "Hello world",
  },
};
