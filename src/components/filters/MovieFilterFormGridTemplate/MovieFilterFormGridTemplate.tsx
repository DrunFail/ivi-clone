import styles from "./MovieFilterFormGridTemplate.module.scss";

interface Props {
    children: React.ReactNode,
}
export default function MovieFilterFormGridTemplate({ children}: Props) {
    return (
        <div className={styles.filters}>
            {children}
        </div>
    );
};
