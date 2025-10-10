import { NextIntlClientProvider } from "next-intl";
import { AuthProvider } from "../../components/auth/context/AuthProvider";
import ReduxProvider from "../../store/ReduxProvider";
import "../../styles/index.scss";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";
import CheckIsVisibleInterceptRoute from "../../components/auth/CheckIsVisibleInterceptRoute";
import { cookies, headers } from "next/headers";
import { authDecodeToken } from "@/utils/authDecodeToken";
import { authAPI } from "@/lib/api/authAPI";
import { getAccessToken } from "@/utils/getAccessToken";

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

interface RootLayoutProps {
    children: React.ReactNode,
    loginModal: React.ReactNode,
    params: { locale: string }
}

export default async function RootLayout({ children, loginModal, params: { locale } }: RootLayoutProps) {
    const messages = await getMessages();
    const token = getAccessToken();
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