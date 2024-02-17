import Image from "next/image";
import styles from "../../MovieList/components/MovieListItem/MovieListItem.module.scss";
import { useState } from "react";
import OverlaySimilar from "./OverlaySimilar/OverlaySimilar";
import Link from "next/link";
import { SimilarMovie } from "../../../../models/types";
import useSimilarItemData from "../hooks/useSimilarItemData";

interface SimilarItemProps {
    elem: SimilarMovie;
}

export default function SimilatItem({ elem }: SimilarItemProps) {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover((isHover) => !isHover);
    };

    const modifiedSimilarItem = useSimilarItemData({similarItem: elem })

    return (
        <Link href={modifiedSimilarItem.movieLink}>
            <div className={styles.item}>
                <div
                    className={styles.image_container}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <Image src={modifiedSimilarItem.posterUrl} alt="" fill />

                    
                    {isHover && <OverlaySimilar />}
                </div>
                <p>{modifiedSimilarItem.movieName}</p>
            </div>
        </Link>
    );
}
