import SearchResultCard from "../SearchResultCard/SearchResultCard";
import styles from "./SearchResult.module.scss";
interface SearchResultProps {
    search: any;
}
export default function SearchResult({ search }: SearchResultProps) {
    return (
        <div className={styles.container}>
                {search.map(({ nameRu, year, kinopoiskId }) => (
                        <SearchResultCard
                            id={kinopoiskId}
                            name={nameRu}
                            year={year}
                            callback={() => setVisible(false)}
                        />
                    ))}
        </div>
    );
}