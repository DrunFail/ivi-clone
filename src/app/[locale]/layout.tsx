import { NextIntlClientProvider } from "next-intl";
import WrapperIntl from "../../components/WrapperIntl/WrapperIntl";
import { AuthProvider } from "../../components/auth/context/AuthProvider";
import ReduxProvider from "../../store/ReduxProvider";
import "../../styles/index.scss";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";

const iviFont = localFont({
    src: [
        {
            path: "../../styles/fonts/iviSans-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../styles/fonts/iviSans-Bold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../styles/fonts/iviSans-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../styles/fonts/iconfont.woff2",
        },
    ]
})



export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();


    return (
        <ReduxProvider>
            <AuthProvider>
                <WrapperIntl>
                    <NextIntlClientProvider messages={messages}>
                        <html lang={locale} className={iviFont.className}>
                        <body>
                        <div id="portal" />
                            {children}
                        </body>
                        </html>
                    </NextIntlClientProvider>
                </WrapperIntl>
            </AuthProvider>
        </ReduxProvider>
    )
}