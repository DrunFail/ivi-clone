import styles from "./MovieListItem.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import { MovieItemTest } from "../../interfaces/interfaces";
import AgeRestriction from "../../UI/AgeRestrictionOverlay/AgeRestriction";
import { useSelector } from "react-redux";
import { getLang } from "../../../../store/switchLang";

interface MovieListItemProps {
    elem: MovieItemTest,
    children: React.ReactNode
}

export default function MovieListItem({ elem, children }: MovieListItemProps) {
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

                <Image src={elem.posterUrlPreview} alt='' fill sizes="(max-width: 768px) 100vw" />

                <AgeRestriction />
                {isHover && children }
            </div>
            <p>{lang === "Ru" ? elem.nameRu : elem.nameOriginal ?? elem.nameRu }</p>
            </div>
       

    );
}
