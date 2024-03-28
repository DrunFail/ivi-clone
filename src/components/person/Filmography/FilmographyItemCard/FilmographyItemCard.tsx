import Image from "next/image";
import styles from "./FilmographyItemCard.module.scss";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import MemoizedFormattedMessage from "react-intl/src/components/message";
import { MovieWithPerson } from "../../../../models/types";
import { getLang } from "../../../../store/slices/switchLang";
import Button from "../../../UI/core/Button/Button";

interface FilmographyItemCardProps {
    filmographyItem:  MovieWithPerson
}
export default function  FilmographyItemCard({ filmographyItem }:FilmographyItemCardProps){
    const lang = useSelector(getLang());
    
    return (
        <Link href={"/movie/" + filmographyItem?.kinopoiskId} className={styles.container }>
                        <Image
                            width={80}
                            height={122}
                            src={filmographyItem?.posterUrl}
                            alt=""
                        />
                    <div>
                        <p className={styles.large}>
                            {filmographyItem?.year}
                        </p>
                        <p className={styles.large}>
                            {lang === "Ru" || filmographyItem?.nameOriginal == null
                                ? filmographyItem?.nameRu
                                : filmographyItem?.nameOriginal}
                        </p>
                        <p className={styles.small}>
                            <FormattedMessage id="RatingIvi" />:{" "}
                            {filmographyItem?.ratingKinopoisk}
                        </p>
                    </div>
            <Button as="button">
                <MemoizedFormattedMessage id="Detail" />
            </Button>
            </Link>
    );
};

