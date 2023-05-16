import styles from "./OverlayMovieListItem.module.scss";
import useMovieData from "../../hooks/useMovieData";
import InfoProductOverlay from "../../UI/InfoProductOverlay/InfoProductOverlay";
import DurationOverlay from "../../UI/DurationOverlay/DurationOverlay";
import { MovieItemTest } from "../../interfaces/interfaces";
import MainAdvantage from "../../UI/MainAdvantage/MainAdvantage";
import RatingFromNumbers from "../../UI/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../../UI/RatingProgressBarBlock/RatingProgressBarBlock";
import RatingOverlayContainer from "../../UI/RaitingOverlayContainer/RatingOverlayContainer";

interface OverlaySliderItemProps {
    movieItem: MovieItemTest,
    children: React.ReactNode,
    infoVisible?: boolean
}

export default function OverlaySliderItem({ movieItem, children, infoVisible = true }: OverlaySliderItemProps) {
    const { infoString, durationString, rating, mainRatingPercentage } = useMovieData(movieItem);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    {children}
                </div>

                {infoVisible &&
                    <div className={styles.info}>
                        <RatingOverlayContainer>
                            <RatingFromNumbers rating={rating} />
                            <RatingProgressBarBlock />
                        </RatingOverlayContainer>


                        <MainAdvantage
                            nameAdvantage="сюжет"
                            fillPercentage={mainRatingPercentage} />

                        <InfoProductOverlay
                            string={infoString} />

                        <DurationOverlay
                            duration={durationString} />
                    </div>}
            </div>
        </div>
    );
}
