import React from "react";
import styles from "./OverlayMovieListItem.module.scss";
import ButtonActionOverlay from "../../UI/ButtonActionOverlay/ButtonActionOverlay";
import useMovieData from "../../hooks/useMovieData";
import RaitingOverlay from "../../UI/RaitingOverlay/RaitingOverlay";
import MainAdvantage from "../../UI/MainAdvantageOverlay/MainAdvantageOverlay";
import InfoProductOverlay from "../../UI/InfoProductOverlay/InfoProductOverlay";
import DurationOverlay from "../../UI/DurationOverlay/DurationOverlay";
import { MovieItemTest } from "../../interfaces/interfaces";

interface OverlaySliderItemProps {
    elem: MovieItemTest,
    children: React.ReactNode,
    infoVisible?: boolean
}

const elemArr = {
    a: 1,
    b: 2,
    c: 3
};

export default function OverlaySliderItem({ elem,children, infoVisible=true }: OverlaySliderItemProps) {
    const { infoString, durationString,rating} = useMovieData(elem);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    
                    {children}
                    </div>
                
                {infoVisible &&
                    <div className={styles.info}>
                        <RaitingOverlay
                            rating={rating}
                            ratingArr={elemArr}
                        />
                        <MainAdvantage />
                        <InfoProductOverlay string={infoString} />
                        <DurationOverlay duration={durationString} />
                    </div>}
            </div>
        </div>
    );
}
