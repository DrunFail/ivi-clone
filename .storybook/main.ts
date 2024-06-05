import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook"
  ],

  framework: "@storybook/nextjs",

  features: {
      experimentalRSC: true,
  },

  docs: {},

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;