import React from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import youtube from "../../../../assets/SVG/Youtube/Youtube.svg";
import bookmark from "../../../../assets/SVG/Bookmark/Bookmark.svg";
import { useSelector } from "react-redux";
import { getFilm } from "../../../../store/film";
import TrailerMain from "../../../ui/TrailerMain/TrailerMain";
import MyButton from "../../../common/MyButton/MyButton";
import Share from "../../../ui/Share/Share";
import styles from '../../../../pages/movie/movies.module.scss';

const Buttons = () => {
    const films = useSelector(getFilm());

    return (
        <div className={styles.Movie__button}>
            <div>
                {films?.currentFilm?.trailers ? (
                    <TrailerMain
                        trailer={films?.currentFilm?.trailers?.[0].url || ""}
                        content={
                            <MyButton type="footer" size="medium">
                                <FormattedMessage id="trailer" />
                            </MyButton>
                        }
                    />
                ) : (
                    ""
                )}

                <MyButton type="footer" size="mini">
                    <Image src={bookmark} alt="" />
                </MyButton>
                <Share />
            </div>
            <div>
                <MyButton type="footer" size="medium">
                    <Image src={youtube} alt="" />
                    <FormattedMessage
                        id="freeFilm"
                        defaultMessage={"Бесплатные фильмы"}
                    />
                </MyButton>
            </div>
        </div>
    );
};

export default Buttons;
