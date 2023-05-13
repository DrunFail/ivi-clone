import Image from "next/image";
import styles from "./Film.module.scss";
import React, { FC } from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { IPropsFilm } from "../../models/IPerson";
import { getLang } from "../../store/switchLang";
import MyButton from "../common/MyButton/MyButton";

const Film: FC<IPropsFilm> = ({ film }) => {
    const lang = useSelector(getLang());

    return (
        <div className={styles.Film}>
            <Link href={"/movie/" + film?.[0].id}>
                <div className={styles.Film__mainInfo}>
                    <div>
                        <Image
                            width={80}
                            height={122}
                            src={film?.[0]?.posterUrl}
                            alt=""
                        />
                    </div>
                    <div>
                        <p className={styles.Year}>
                            {film?.[0]?.year}
                        </p>
                        <p className={styles.Name}>
                            {lang === "Ru" || film?.[0]?.nameOriginal == null
                                ? film?.[0]?.nameRu
                                : film?.[0]?.nameOriginal}
                        </p>
                        <p className={styles.Rating}>
                            <FormattedMessage id="RatingIvi" />:{" "}
                            {film?.[0]?.ratingKinopoisk}
                        </p>
                    </div>
                </div>
                <div>
                    <MyButton type="footer" size="large">
                        <FormattedMessage id="Detail" />
                    </MyButton>
                </div>
            </Link>
        </div>
    );
};

export default Film;
