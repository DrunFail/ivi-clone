import React from "react";
import styles from "../../../../../../components/movieList/components/overlayMovieListItem/OverlayMovieListItem.module.scss";
import ButtonStarOverlay from "../../../../../../components/MovieList/UI/buttonStarOverlay/ButtonStarOverlay";
import ButtonCircleOverlay from "../../../../../../components/MovieList/UI/buttonCircleOverlay/ButtonCircleOverlay";
import RaitingOverlay from "../../../../../../components/MovieList/UI/RaitingOverlay/RaitingOverlay";
import MainAdvantage from "../../../../../../components/MovieList/UI/mainAdvantageOverlay/MainAdvantageOverlay";
import { ISimiliar } from "../../../../../../models";
import ButtonBookmarkOverlay from "../../../../../../components/movieList/UI/buttonBookmarkOverlay/ButtonBookmarkOverlay";
import ButtonMagicOverlay from "../../../../../../components/movieList/UI/buttonMagicOverlay/ButtonMagicOverlay";

interface OverlaySliderItemProps {
    elem: ISimiliar;
    rand: number
}

const elemArr = {
    a: 1,
    b: 2,
    c: 3
};

export default function OverlaySimilar({ elem, rand }: OverlaySliderItemProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <ButtonBookmarkOverlay />
                    <ButtonMagicOverlay />
                    <ButtonStarOverlay />
                    <ButtonCircleOverlay />
                </div>
                <div className={styles.info}>
                    <RaitingOverlay
                        raiting={elem?.rating || rand.toFixed(1)}
                        raitingArr={elem?.ratingArr || elemArr}
                    />
                    <MainAdvantage />
                </div>
            </div>
        </div>
    );
}
