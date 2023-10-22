import {
    InputField
} from "../types";

export const inputs: InputField[] = [
    {
        name: "name",
        label: "Name",
        placeholder: "eg. Pikachu",
        mandatory: true,
    },
    {
        name: "type",
        label: "Type",
        placeholder: "eg. electric",
        mandatory: true,
    },
    {
        name: "height",
        label: "Height",
        type: "number",
    },
    {
        name: "weight",
        label: "Weight",
        type: "number",
    },
];