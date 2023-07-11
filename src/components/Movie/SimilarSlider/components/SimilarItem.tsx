import Image from "next/image";
import styles from "../../MovieList/components/MovieListItem/MovieListItem.module.scss";
import React, { useState } from "react";
import OverlaySimilar from "./OverlaySimilar/OverlaySimilar";
import Link from "next/link";
import AgeRestriction from "../../MovieList/UI/AgeRestrictionOverlay/AgeRestriction";
import { ISimiliar } from "../../../models";

interface SimilarItemProps {
    elem: ISimiliar;
}

export default function SimilatItem({ elem }: SimilarItemProps) {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover((isHover) => !isHover);
    };

    const rand = React.useMemo<number>(() => {
        return Math.random() * 10;
    }, []);

    return (
        <Link href={`/movie/${elem?.filmId}`}>
            <div className={styles.item}>
                <div
                    className={styles.image_container}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <Image src={elem?.posterUrl} alt="" fill />

                    <AgeRestriction age={elem?.age} />
                    {isHover && <OverlaySimilar rand={rand} elem={elem} />}
                </div>
                <p>{elem?.nameRu}</p>
            </div>
        </Link>
    );
}
