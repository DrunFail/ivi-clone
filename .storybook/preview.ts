import type { Preview } from "@storybook/react";
import { initialize, mswDecorator,mswLoader } from 'msw-storybook-addon';
import "../src/styles/index.scss";

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
    loaders:[mswLoader]
};

initialize();
export const decorators = [mswDecorator];


export default preview;
