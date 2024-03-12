import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { getLang } from "../../../store/slices/switchLang";
import Button from "../../UI/Button/Button";

interface SlideProps {
    styles: { [key: string]: string };
    filmData: any;
}

/** Компонент, содержащий слайдер, отображаемый на главной странице. */
const Slide = ({ styles, filmData }: SlideProps) => {
    const lang = useSelector(getLang());
    const genreLink = "/movies/" + filmData.genreRu;

    return (
        <Link href={genreLink} className={styles.slide}>
            <img className={styles.slide__banner} src={filmData.banner} alt={lang === "Ru" ? filmData.nameRu : filmData.nameEn} />
            <div className={styles.slide__textBlock}>
                <p className={styles.slide__title}>
                    {lang === "Ru" ? filmData.nameRu : filmData.nameEn}
                </p>
                <p className={styles.slide__call}>
                    {lang === "Ru" ? filmData.callRu : filmData.callEn}
                </p>
                <div>
                    <Button as="button"  color="red">
                        <FormattedMessage id="WatchInTheGalery" />
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default Slide;
