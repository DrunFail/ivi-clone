import styles from "./DurationOverlay.module.scss";
import React from "react";

interface DurationOverlayProps {
    duration: string
}

export default function DurationOverlay({ duration }:DurationOverlayProps) {
    return (
        <span className={styles.duration}>
            {duration}
        </span>
    );
}
