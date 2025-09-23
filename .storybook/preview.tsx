import { Preview } from "@storybook/react";
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import "../src/styles/index.scss";
import { NextIntlClientProvider } from "next-intl";
import React from 'react';
import ru from "../messages/ru.json";
import en from "../messages/en.json";
import localFont from 'next/font/local';


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


const iviFont = localFont({
    src: [
        {
            path: "../fonts/iviSans-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/iviSans-Bold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../fonts/iviSans-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../fonts/iconfont.woff2",
        },
    ],
})


const withLocalFont = (Story) => {
    return (
        <div className={iviFont.className}>
            <Story />
        </div>
    );
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
        options: {
            storySort: {
                method: "alphabetical"
            }
        }
    },
    decorators: [withIntl,withLocalFont],

};







export default preview;
