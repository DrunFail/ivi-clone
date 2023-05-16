import styles from "./InfoProductOverlay.module.scss";

interface InfoProductOverlayProps {
    string: string
}

export default function InfoProductOverlay({ string }: InfoProductOverlayProps) {
    return (
        <div className={styles.info }>
           {string }
        </div>
    );
}
