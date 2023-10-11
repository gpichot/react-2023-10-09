import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { PokedexProvider } from "../src/features/pokemon-list/PokedexContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../src/index.css";
const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <PokedexProvider>
            <Story />
          </PokedexProvider>
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
