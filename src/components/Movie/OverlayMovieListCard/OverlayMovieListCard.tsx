import DurationOverlay from "../../UI/movie/DurationOverlay/DurationOverlay";
import InfoProductOverlay from "../../UI/movie/InfoProductOverlay/InfoProductOverlay";
import MainAdvantage from "../../UI/movie/MainAdvantage/MainAdvantage";
import RatingOverlayContainer from "../../UI/movie/RaitingOverlayContainer/RatingOverlayContainer";
import RatingFromNumbers from "../../UI/movie/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../../UI/movie/RatingProgressBarBlock/RatingProgressBarBlock";
import styles from "./OverlayMovieListCard.module.scss";

interface OverlayMovieListCardProps {
    overlayMovieData?: {
        rating: string[],
        mainRatingPercentage: number,
        infoProduct: string,
        duration: string
    },
    icons: React.ReactNode
}
export default function OverlayMovieListCard({overlayMovieData,icons  }:OverlayMovieListCardProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    {icons}
                </div>

                {overlayMovieData &&
                    <div className={styles.info}>
                        <RatingOverlayContainer>
                            <RatingFromNumbers rating={overlayMovieData.rating} />
                            <RatingProgressBarBlock />
                        </RatingOverlayContainer>


                        <MainAdvantage
                            nameAdvantage="сюжет"
                            fillPercentage={overlayMovieData.mainRatingPercentage} />

                        <InfoProductOverlay
                            string={overlayMovieData.infoProduct} />

                        <DurationOverlay
                            duration={overlayMovieData.duration} />
                    </div>}
            </div>
        </div>
    
    );
}