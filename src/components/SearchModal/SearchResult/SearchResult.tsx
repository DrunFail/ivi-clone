import styles from "./SearchResult.module.scss";


interface SearchResultProps {
    children: React.ReactNode
}
export default function SearchResult({children}: SearchResultProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}