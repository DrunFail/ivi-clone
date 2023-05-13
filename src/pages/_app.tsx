import { Provider } from "react-redux";
import store from "../store/createStore";
import "../styles/index.scss";
import React from "react";
import AppLoader from "../store/appLoader";
import type { AppProps } from "next/app";
import Layout from "../components/ui/Layout/Layout";
import WrapperIntl from "../components/WrapperIntl/WrapperIntl";
import LoaderReq from "../components/common/LoaderReq/LoaderReq";
import { AuthProvider } from "../components/auth/context/AuthProvider";
import ClickCatcherProvider from "../hooks/useClickCatcher";
import WindowDimensionsProvider from "../hooks/useWindowDimensions";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = React.useState(false);

    React.useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === "undefined") {
        return <></>;
    }
    const CustomLayout = Component.Layout || DefaultLayout;


    return (
        <AuthProvider>
            <Provider store={store}>
                <WrapperIntl>
                    <AppLoader>
                        <WindowDimensionsProvider>
                            <ClickCatcherProvider>
                                <Layout>
                                <CustomLayout>
                                        <Component {...pageProps} />
                                    </CustomLayout>
                                </Layout>
                            </ClickCatcherProvider>
                        </WindowDimensionsProvider>
                    </AppLoader>
                </WrapperIntl>
                {/* <LoaderReq /> */}
            </Provider>
        </AuthProvider>
    );
}

const DefaultLayout = ({ children }) => <>{children}</>