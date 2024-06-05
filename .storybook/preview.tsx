import { Preview } from "@storybook/react";
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import "../src/styles/index.scss";
import { NextIntlClientProvider } from "next-intl";
import React from 'react';
import ru from "../messages/ru.json";
import en from "../messages/en.json";


const dict = { ru, en }

const withIntl = (Story, context) => {
    const locale = context.globals.locale;
    return (
        <NextIntlClientProvider locale={locale} messages={dict[locale]}>
            <Story />
        </NextIntlClientProvider>
    );
}

export const globalTypes = {
    locale: {
        name: "Locale",
        description: "Internationalization locale",
        defaultValue: "ru",
        toolbar: {
            icon: "globe",
            items: [
                { value: "ru", title: "russian" },
                { value: "en", title: "english" }
            ],
            showName: true
        }
    }
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        nextjs: {
            appDirectory: true,
        },
    },
    decorators: [withIntl],

};







export default preview;
