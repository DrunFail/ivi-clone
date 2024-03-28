import Image from "next/image";
import styles from "./FilmTitleTop.module.scss";

interface FilmTitleTopProps {
    rating: number
}

export default function FilmTitleTop({ rating }:FilmTitleTopProps) {
    return (
        <div className={styles.title}>
            <Image src={`/top10/${rating}.png`} alt='' fill />
        </div>
    );
}
