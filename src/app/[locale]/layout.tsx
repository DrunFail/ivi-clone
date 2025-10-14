import { NextIntlClientProvider } from "next-intl";
import { AuthProvider } from "../../components/auth/context/AuthProvider";
import ReduxProvider from "../../store/ReduxProvider";
import "../../styles/index.scss";
import localFont from 'next/font/local';
import CheckIsVisibleInterceptRoute from "../../components/auth/CheckIsVisibleInterceptRoute";
import { authDecodeToken } from "@/utils/authDecodeToken";
import { authAPI } from "@/lib/api/authAPI";
import { getAccessToken } from "@/utils/getAccessToken";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

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
    ],
})

export const metadata:Metadata = {
    verification: {
        google: "fgk8DZ7GZHVaYcqXYa33SWKaXM2QLyKScIKlzk2ZBEo",
        yandex: "0fb3c6642e8668bc"
    }
}

interface RootLayoutProps {
    children: React.ReactNode,
    loginModal: React.ReactNode,
    params: Promise<{ locale: string}>
}

export default async function RootLayout({ children, loginModal, params}: RootLayoutProps) {
    const { locale } = await params as {locale: "ru" | "en"};
    const token = await getAccessToken();
    let userProfile = null;

    if (token) {
        try {
            const profile = await authAPI.getUserProfile(token);
            const decodeToken = authDecodeToken(token);
            userProfile = {
                ...decodeToken,
                profile: profile
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <ReduxProvider>
            <AuthProvider profile={userProfile}>
                <NextIntlClientProvider>
                    <html lang={locale as string} className={iviFont.className}>
                        <body>
                            <div id="portal" />
                            {children}
                            <CheckIsVisibleInterceptRoute id="notLoginModal">
                                {loginModal}
                            </CheckIsVisibleInterceptRoute>
                            <Analytics />
                            <SpeedInsights />
                        </body>
                    </html>
                </NextIntlClientProvider>
            </AuthProvider>
        </ReduxProvider>
    )
}