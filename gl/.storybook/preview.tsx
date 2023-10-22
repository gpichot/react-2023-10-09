import type { Preview } from "@storybook/react";
import {
  MemoryRouter
} from "react-router-dom";
import {
  PokedexProvider
} from "../src/contexts/PokedexContext";
import {
  QueryClientProvider
} from "@tanstack/react-query";
import { queryClient } from "../src/query-client";

import "../src/index.css"
import "../src/App.scss"

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
    )
  ]
};

export default preview;
