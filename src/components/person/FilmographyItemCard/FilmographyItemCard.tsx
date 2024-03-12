import Image from "next/image";
import styles from "./FilmographyItemCard.module.scss";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import ButtonDetails from "../../UI/ButtonDetails/ButtonDetails";
import { getLang } from "../../../store/slices/switchLang";
import { MovieWithPerson} from "../../../models/types";

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
                   <ButtonDetails />
            </Link>
    );
};

