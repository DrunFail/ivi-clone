import styles from "./MovieSliderSizeContainer.module.scss";

export default function MovieSliderSizeContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
    
}