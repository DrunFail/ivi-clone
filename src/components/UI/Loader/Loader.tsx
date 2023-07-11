import styles from "./Loader.module.scss";

/** Компонент, содержащий заглушку-спиннер, отображаемую на время загрузки данных. */
export default function Loader() {
    return (
        <div className={styles.loaderBody}>
            <span className={styles.loader}></span>
        </div>
    );
};


