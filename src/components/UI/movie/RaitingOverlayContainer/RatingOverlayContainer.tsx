import styles from "./RaitingOverlayContainer.module.scss";

interface RatingOverlayProps {
    children: React.ReactNode
    
}

export default function RaitingOverlayContainer({ children}:RatingOverlayProps) {
    return (
        <div className={styles.container }>
            {children }
        </div>

    );
}
