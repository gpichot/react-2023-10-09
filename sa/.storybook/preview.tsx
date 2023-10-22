import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { PokedexProvider} from "../src/features/PokedexContext";
import '../src/index.css';
import '../src/assets/styles/css-pokemon-gameboy.css';
import '../src/App.css';
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
const queryCient = new QueryClient();

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
        <MemoryRouter>
            <PokedexProvider>
                <Story/>
          </PokedexProvider>
        </MemoryRouter>
    ),
      (Story) => (
          <QueryClientProvider client={queryCient}>
              <Story/>
          </QueryClientProvider>

      )
  ],
};

export default preview;
