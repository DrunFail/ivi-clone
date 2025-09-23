import styles from "./SearchResultCard.module.scss";

interface SearchResultCardProps {
    name: string;
    year: number;
}

export default function SearchResultCard({ name, year }: SearchResultCardProps) {
    return (
        <div className={styles.container}>
            icon
            <div>{name}</div>
            <div>{year}</div>
        </div>
    );
};
