import { NextIntlClientProvider } from "next-intl";
import { AuthProvider } from "../../components/auth/context/AuthProvider";
import ReduxProvider from "../../store/ReduxProvider";
import "../../styles/index.scss";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";
import CheckIsVisibleInterceptRoute from "../../components/auth/CheckIsVisibleInterceptRoute";

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

interface RootLayoutProps {
    children: React.ReactNode,
    loginModal: React.ReactNode,
    params: { locale: string }
}

export default async function RootLayout({ children, loginModal, params: { locale } }: RootLayoutProps) {
    const messages = await getMessages();

    return (
        <ReduxProvider>
            <AuthProvider>
                <NextIntlClientProvider messages={messages}>
                    <html lang={locale} className={iviFont.className}>
                        <body>
                            <div id="portal" />
                            {children}
                            <CheckIsVisibleInterceptRoute id="notLoginModal">
                                {loginModal}
                            </CheckIsVisibleInterceptRoute>

                        </body>
                    </html>
                </NextIntlClientProvider>
            </AuthProvider>
        </ReduxProvider>
    )
}