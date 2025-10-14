import Image from "next/image";
import styles from "./FilmographyItemCard.module.scss";
import { MovieWithPerson } from "../../../../models/types";
import Button from "../../../UI/core/Button/Button";
import { Link } from "@/i18n/navigation";

interface FilmographyItemCardProps {
    filmographyItem: MovieWithPerson;
    lang: "ru" | "en";
    dictRatingIvi: string;
    dictBtnDetails: string;
}
export default function FilmographyItemCard({ filmographyItem, lang, dictRatingIvi, dictBtnDetails }: FilmographyItemCardProps) {


    return (
        <Link href={"/movie/" + filmographyItem.kinopoiskId} className={styles.container}>
            <Image
                width={80}
                height={122}
                src={filmographyItem.posterUrl}
                alt=""
            />
            <div>
                <p className={styles.large}>
                    {filmographyItem.year}
                </p>
                <p className={styles.large}>
                    {lang === "ru" || filmographyItem.nameOriginal == null
                        ? filmographyItem.nameRu
                        : filmographyItem.nameOriginal}
                </p>
                <p className={styles.small}>
                    {dictRatingIvi}:{" "}
                    {filmographyItem.ratingKinopoisk}
                </p>
            </div>
            <Button as="button">
                {dictBtnDetails}
            </Button>
        </Link>
    );
};

