import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcss from "@tailwindcss/postcss"; // Doğru PostCSS paketi

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [postcss, autoprefixer()], 
        },
      },
    });
  },
};

export default config;
