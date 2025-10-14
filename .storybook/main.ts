import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: "@storybook/nextjs",

  features: {
      experimentalRSC: true,
  },

  docs: {},

    staticDirs: ["../public", {from: "../public/fonts", to: "/fonts"}],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;