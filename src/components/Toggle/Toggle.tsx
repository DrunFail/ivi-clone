import React, { FC, useState } from "react";
import styles from "./Toggle.module.scss";
import polygonBottom from "../../../assets/SVG/Polygon/PolygonBottom.svg";
import polygonTop from "../../../assets/SVG/Polygon/PolygonTop.svg";
import Image from "next/image";

const Toggle: FC<{
    children: React.ReactNode;
    nameBtn: string | React.ReactNode;
}> = ({ children, nameBtn }) => {
    const [bol, setBol] = useState<boolean>(false);

    if (bol) {
        return (
            <div className={styles.Toggle}>
                <button onClick={() => setBol((p) => !p)}>
                    {nameBtn} <Image src={polygonTop} alt="" />
                </button>
                <div>{children}</div>
            </div>
        );
    }

    return (
        <div className={styles.Toggle}>
            <button onClick={() => setBol((p) => !p)}>
                {nameBtn} <Image src={polygonBottom} alt="" />
            </button>
        </div>
    );
};

export default Toggle;
