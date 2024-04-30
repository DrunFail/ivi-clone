import Image from "next/image";
import styles from "./FilmographyItemCard.module.scss";
import Link from "next/link";
import { MovieWithPerson } from "../../../../models/types";
import Button from "../../../UI/core/Button/Button";

interface FilmographyItemCardProps {
    filmographyItem:  MovieWithPerson
}
export default function  FilmographyItemCard({ filmographyItem }:FilmographyItemCardProps){
    const lang = "Ru";
    
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
                            Рейтинг Иви:{" "}
                            {filmographyItem?.ratingKinopoisk}
                        </p>
                    </div>
            <Button as="button">
                подробнее
            </Button>
            </Link>
    );
};

