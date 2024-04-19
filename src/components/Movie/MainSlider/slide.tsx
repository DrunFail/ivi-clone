import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { getLang } from "../../../store/slices/switchLang";
import Image from "next/image";
import Button from "../../UI/core/Button/Button";

interface SlideProps {
    styles: { [key: string]: string };
    filmData: any;
}

export default function Slide({ styles, filmData }: SlideProps) {
    const lang = useSelector(getLang());
    const genreLink = "/movies/" + filmData.genreRu;

    return (
        <Link href={genreLink} className={styles.slide}>
            <div style={{ position: "relative" }} className={styles.slide__banner}>
                <Image
                    src={`/mainSlider/${filmData.id}.webp`}
                    alt={lang === "Ru" ? filmData.nameRu : filmData.nameEn}
                    fill
                    priority
                    quality={70}
                />
            </div>
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
