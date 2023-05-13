import React from "react";
import styles from "../../../MovieList/components/OverlayMovieListItem/OverlayMovieListItem.module.scss";
import { ISimiliar } from "../../../../models";
import ButtonBookmarkOverlay from "../../../MovieList/UI/ButtonBookmarkOverlay/ButtonBookmarkOverlay";
import ButtonCircleOverlay from "../../../MovieList/UI/ButtonCircleOverlay/ButtonCircleOverlay";
import ButtonMagicOverlay from "../../../MovieList/UI/ButtonMagicOverlay/ButtonMagicOverlay";
import ButtonStarOverlay from "../../../MovieList/UI/ButtonStarOverlay/ButtonStarOverlay";
import MainAdvantage from "../../../MovieList/UI/MainAdvantageOverlay/MainAdvantageOverlay";
import RaitingOverlay from "../../../MovieList/UI/RaitingOverlay/RaitingOverlay";

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
