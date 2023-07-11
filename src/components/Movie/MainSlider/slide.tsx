import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { IClassNames, IStringObject } from "../../../models";
import { getLang } from "../../../store/switchLang";
import translateGenre from "../../../utils/translateGenre";
import LinkButton from "../../LinkButton/linkButton";

interface SlideProps {
    styles: IClassNames;
    filmData: IStringObject;
}

/** Компонент, содержащий слайдер, отображаемый на главной странице. */
const Slide = ({ styles, filmData }: SlideProps) => {
    const lang = useSelector(getLang());
    const genreLink = "/movies/" + translateGenre(filmData.genreRu);

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
                    <LinkButton
                        text={<FormattedMessage id="WatchInTheGalery" />}
                        color="pink"
                        link={genreLink}
                        fake={true}
                    />
                </div>
            </div>
        </Link>
    );
};

export default Slide;
