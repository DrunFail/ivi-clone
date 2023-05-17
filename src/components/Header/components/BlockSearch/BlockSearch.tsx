import Link from "next/link";
import { BsCameraReels } from "react-icons/bs";
import styles from "./BlockSearch.module.scss";

interface BlockSearchProps {
    name: string;
    year: number;
    id: number;
    callback: () => void;
}

export default function BlockSearch({ name, year, id, callback }:BlockSearchProps){
    return (
        <Link href={`/movie/${id}`} onClick={callback}>
            <div className={styles.BlockSearch}>
                <div className={styles.BlockSearch__icon}>
                    <BsCameraReels />
                </div>
                <div className={styles.BlockSearch__text}>
                    <div className={styles.Name}>{name}</div>
                    <div className={styles.Year}>{year}</div>
                </div>
            </div>
        </Link>
    );
};

