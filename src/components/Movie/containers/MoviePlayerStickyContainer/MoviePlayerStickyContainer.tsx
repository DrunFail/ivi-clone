import styles from "./MoviePlayerStickyContainer.module.scss";

interface MoviePlayerStickyContainerProps {
    children: React.ReactNode
}

export default function MoviePlayerStickyContainer({ children }: MoviePlayerStickyContainerProps) {
    return (
        <div className={styles.container}>{children}</div>
    );
}