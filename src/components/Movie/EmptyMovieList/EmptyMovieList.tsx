import styles from "./EmptyMovieList.module.scss";

export default function EmptyMovieList() {
    return (
        <div className={styles.emptyMessage}>
            Не найдены фильмы, удовлетворяющие поисковому запросу, попробуйте изменить параметры поиска.
        </div>
    );
}