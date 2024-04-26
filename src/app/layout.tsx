import WrapperIntl from "../components/WrapperIntl/WrapperIntl";
import { AuthProvider } from "../components/auth/context/AuthProvider";
import ReduxProvider from "../store/ReduxProvider";
import "../styles/index.scss";
import localFont from 'next/font/local';

const iviFont = localFont({
    src: [
        {
            path: "../styles/fonts/iviSans-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../styles/fonts/iviSans-Bold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../styles/fonts/iviSans-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../styles/fonts/iconfont.woff2",
        },
    ]
})



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <AuthProvider>
                <WrapperIntl>
                    <html lang="en" className={iviFont.className}>
                        <body>
                        <div id="portal" />
                            {children}
                        </body>
                    </html>
                </WrapperIntl>
            </AuthProvider>
        </ReduxProvider>
    )
}