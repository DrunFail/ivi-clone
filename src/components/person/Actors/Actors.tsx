import React, { FC } from "react";
import styles from "./Actors.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { getFilm } from "../../store/film";
import MyButton from "../UI/MyButton/MyButton";

const Actors: FC<{ callback: () => void }> = ({ callback }) => {
    const film = useSelector(getFilm());

    if (!film?.currentStaff?.length) {
        return <></>;
    }

    return (
        <div className={styles.Actors}>
            <div className={styles.Actors__all}>
                <h1 onClick={() => callback()}>
                    <FormattedMessage id="CreatersAndActors" />
                </h1>
                <div className={styles.Actors__container}>
                    {film?.currentStaff?.slice(0, 9).map((actor, i) => (
                        <Link
                            key={actor.person.id}
                            href={"/person/" + String(actor?.person?.personId)}
                        >
                            <div
                                key={String(actor.person.personId) + String(i)}
                                className={styles.Actors__unit}
                            >
                                <div>
                                    <Image
                                        src={actor?.person.posterUrl || ""}
                                        alt=""
                                        width={88}
                                        height={88}
                                    />
                                </div>
                                <p className={styles.Name}>{actor.person.nameRu}</p>
                                <p className={styles.Prof}>{actor.person.profession.split(",")[0]}</p>
                            </div>
                        </Link>
                    ))}
                    <div className={styles.Actors__visible}>
                        <MyButton
                            onClick={() => callback()}
                            type="footer"
                            figure="circle"
                            size="large"
                        >
                            <FormattedMessage id="More" />
                        </MyButton>
                    </div>
                    {Number(film?.currentStaff?.length) > 10 ? (
                        <div className={styles.Actors__unitMy}>
                            <MyButton
                                onClick={() => callback()}
                                type="footer"
                                figure="circle"
                                size="large"
                            >
                                <FormattedMessage id="More" />
                            </MyButton>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Actors;
