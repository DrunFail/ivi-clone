import SearchResultCard from "../SearchResultCard/SearchResultCard";
import styles from "./SearchResult.module.scss";

interface SearchItem {
    kinopoiskId: number,
    nameRu: string,
    year: number
}
interface SearchResultProps {
    search: SearchItem[];
    handleModalClose: () => void
}
export default function SearchResult({ search, handleModalClose }: SearchResultProps) {
    return (
        <div className={styles.container}>
                {search.map(({ nameRu, year, kinopoiskId }) => (
                    <SearchResultCard
                        key={kinopoiskId }
                            id={kinopoiskId}
                            name={nameRu}
                            year={year}
                            callback={handleModalClose}
                        />
                    ))}
        </div>
    );
}