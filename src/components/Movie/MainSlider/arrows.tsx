import { useSwiper } from "swiper/react";
import FontIcon from "../../UI/FontIcon/FontIcon";

interface ArrowsProps {
    styles: { [key: string]: string };
}

export default function Arrows({ styles }: ArrowsProps) {
    const swiper = useSwiper();

    return (
        <div className={styles.slider__arrowsCont}>
            <div className={styles.slider__arrowsRow}>
                <button
                    className={`${styles.slider__arrow} ${styles.slider__arrow_prev}`}
                    onClick={() => swiper.slidePrev()}
                >
                    <FontIcon variant="arrowLeft" size={32} />
                </button>
                <button
                    className={`${styles.slider__arrow} ${styles.slider__arrow_next}`}
                    onClick={() => swiper.slideNext()}
                >
                    <FontIcon variant="arrowRight" size={32} />
                </button>
            </div >
        </div>
    );
};
