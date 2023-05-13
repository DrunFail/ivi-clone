import styles from "./HeaderWindow.module.scss";
import Portal from "../Portals/Portal";
import React from "react";

interface IHeaderWindow {
    children: React.ReactNode;
    name: string | React.ReactNode;
    ref?: HTMLDivElement;
}

/** Компонент окно всплывающего окна в Header */

const HeaderWindow = ({ children, name }: IHeaderWindow) => {
    const [visible, setVisible] = React.useState<boolean>(false);

    function switchVisible(bol: boolean) {
        setVisible(bol);
    }

    return (
        <div
            onMouseOver={() => switchVisible(true)}
            onMouseOut={() => switchVisible(false)}
            className={styles.Logo}
        >
            <div className={styles.Logo__p}>{name}</div>
            <Portal>
                <div
                    className={styles.Window}
                    style={{
                        opacity: visible ? 1 : 0,
                        zIndex: visible ? 1 : -10,
                        visibility: visible ? "visible" : "hidden",
                        transition: "0.3s"
                    }}
                >
                    {visible ? children : children}
                </div>
            </Portal>
        </div>
    );
};

export default HeaderWindow;
