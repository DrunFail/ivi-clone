import { Provider } from "react-redux";
import "../styles/index.scss";
import { useEffect, useState } from 'react';
import WrapperIntl from "../components/WrapperIntl/WrapperIntl";
import { AuthProvider } from "../components/auth/context/AuthProvider";
import ClickCatcherProvider from "../hooks/useClickCatcher";
import WindowDimensionsProvider from "../hooks/useWindowDimensions";
import RootLayout from "../components/layouts/RootLayout/RootLayout";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import store from "../store/store";
import localFont from "next/font/local";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

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
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === "undefined") {
        return <></>;
    }
    const DefaultLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
    const getLayout = Component.getLayout ?? DefaultLayout;

    
    return (
        <>
            <style jsx global>
                {
                    `:root{
                    --ivi-font: ${iviFont.style.fontFamily}
                }`
                }
            </style>
        <AuthProvider>
            <Provider store={store}>
                <WrapperIntl>
                    {/*<AppLoader>*/}
                        {/*<WindowDimensionsProvider>*/}
                    {/*    <ClickCatcherProvider>*/}
                        
                        {getLayout(<Component {...pageProps} />)}
                    
                   {/*         </ClickCatcherProvider>*/}
                   {/*     </WindowDimensionsProvider>*/}
                   {/* </AppLoader>*/}
                </WrapperIntl>
                {/* <LoaderReq /> */}
            </Provider>
            </AuthProvider>
        </>
    );
}


