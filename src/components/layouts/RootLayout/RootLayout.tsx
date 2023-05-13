import styles from "./RootLayout.module.scss";
import React from "react";
import MediaQuery from "react-responsive";
import Header from "../../Header/Header";
import Tab from "../../Tab/Tab";
import Footer from "../../Footer/Footer";

interface ILayout {
    children: React.ReactNode;
}

export default function RootLayout({ children }: ILayout){
    return (
        <div className={styles.Layout}>
            <div className={styles.Content}>
                <div className={styles.Layout__headerContainer}>
                    <Header />
                </div>
                {children}
                <MediaQuery maxWidth={1235}>
                    <Tab />
                </MediaQuery>
            </div>
            <MediaQuery minWidth={1236}>
                <div className={styles.Layout__footer}>
                    <Footer />
                </div>
            </MediaQuery>
        </div>
    );
};

