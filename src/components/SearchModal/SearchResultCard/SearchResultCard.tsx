import Link from "next/link";
import styles from "./SearchResultCard.module.scss";

interface SearchResultCardProps {
    name: string;
    year: number;
    id: number;
    callback: () => void;
}

export default function SearchResultCard({ name, year, id, callback }:SearchResultCardProps){
    return (
        <Link href={`/movie/${id}`} onClick={callback}>
            <div className={styles.container}>
                    icon
                    <div>{name}</div>
                    <div>{year}</div>
            </div>
        </Link>
    );
};

