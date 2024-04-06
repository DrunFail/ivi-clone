import styles from "./MoviePoster.module.scss";
import Image from "next/image";

interface MoviePosterProps {
    posterUrl: string
}
export default function MoviePoster({posterUrl }:MoviePosterProps) {
    return (
        <div className={styles.container}>
            <Image
                fill
                alt=""
                src={posterUrl || ""}
            />
        </div>
    );
}