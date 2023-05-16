import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "../../../../../store/switchLang";
import { MovieItemTest } from "../../interfaces/interfaces";
import AgeRestriction from "../../UI/AgeRestrictionOverlay/AgeRestriction";
import styles from "./MovieListItem.module.scss";

interface MovieListItemProps {
    movieItem: MovieItemTest,
    children: React.ReactNode
}

export default function MovieListItem({ movieItem, children }: MovieListItemProps) {
    const lang = useSelector(getLang());
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(isHover => !isHover);
    };

    return (
        
        <div className={styles.item }>
            <div
                className={styles.image_container}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover} >

                <Image src={movieItem.posterUrlPreview} alt='' fill sizes="(max-width: 768px) 100vw" />
                <div className={styles.restriction }>
                    <AgeRestriction />
                </div>
                {isHover && children }
            </div>
            <p>{lang === "Ru" ? movieItem.nameRu : movieItem.nameOriginal ?? movieItem.nameRu }</p>
            </div>
       

    );
}
