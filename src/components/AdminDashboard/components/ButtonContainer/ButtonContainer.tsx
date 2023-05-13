import React from "react";
import styles from "./ButtonContainer.module.scss";

interface ButtonContainerProps {
    children: React.ReactNode
}

export default function ButtonContainer({children }:ButtonContainerProps) {
    return (
        <div className={styles.buttonContainer}>
            {children }
        </div>
    );
}