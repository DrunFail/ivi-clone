import DurationOverlay from "../MovieList/UI/DurationOverlay/DurationOverlay";
import InfoProductOverlay from "../MovieList/UI/InfoProductOverlay/InfoProductOverlay";
import MainAdvantage from "../MovieList/UI/MainAdvantage/MainAdvantage";
import RatingOverlayContainer from "../MovieList/UI/RaitingOverlayContainer/RatingOverlayContainer";
import RatingFromNumbers from "../MovieList/UI/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../MovieList/UI/RatingProgressBarBlock/RatingProgressBarBlock";
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