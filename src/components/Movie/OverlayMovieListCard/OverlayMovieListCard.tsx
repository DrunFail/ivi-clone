import ButtonWithHint from '@/components/UI/ButtonWithHint/ButtonWithHint';
import FontIcon from '@/components/UI/FontIcon/FontIcon';
import DurationOverlay from '../../UI/movie/DurationOverlay/DurationOverlay';
import InfoProductOverlay from '../../UI/movie/InfoProductOverlay/InfoProductOverlay';
import MainAdvantage from '../../UI/movie/MainAdvantage/MainAdvantage';
import RatingOverlayContainer from '../../UI/movie/RaitingOverlayContainer/RatingOverlayContainer';
import RatingFromNumbers from '../../UI/movie/RatingFromNumbers/RatingFromNumbers';
import RatingProgressBarBlock from '../../UI/movie/RatingProgressBarBlock/RatingProgressBarBlock';
import styles from './OverlayMovieListCard.module.scss';

interface OverlayMovieListCardProps {
    overlayMovieData?: {
        rating: string[];
        mainRatingPercentage: number;
        infoProduct: string;
        duration: string;
    };
}
export default function OverlayMovieListCard({ overlayMovieData }: OverlayMovieListCardProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <ButtonWithHint description="button.hint.watchLater">
                        <FontIcon variant="bookmark2" size={20} />
                    </ButtonWithHint>
                    <ButtonWithHint description="button.hint.rate">
                        <FontIcon variant="star" size={20} />
                    </ButtonWithHint>
                    <ButtonWithHint description="button.hint.similar">
                        <FontIcon variant="magic_wand" size={20} />
                    </ButtonWithHint>
                    <ButtonWithHint description="button.hint.dislike">
                        <FontIcon variant="eye" size={20} />
                    </ButtonWithHint>
                </div>

                {overlayMovieData && (
                    <div className={styles.info}>
                        <RatingOverlayContainer>
                            <RatingFromNumbers rating={overlayMovieData.rating} />
                            <RatingProgressBarBlock />
                        </RatingOverlayContainer>

                        <MainAdvantage nameAdvantage="сюжет" fillPercentage={overlayMovieData.mainRatingPercentage} />

                        <InfoProductOverlay string={overlayMovieData.infoProduct} />

                        <DurationOverlay duration={overlayMovieData.duration} />
                    </div>
                )}
            </div>
        </div>
    );
}
