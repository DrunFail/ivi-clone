import React from "react";
import styles from "./Creaters.module.scss";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { getFilm } from "../../../../../../store/film";
import Link from "next/link";

const Creaters = () => {
    const film = useSelector(getFilm());

    return (
        <div className={styles.Creaters}>
            <h1>
                <FormattedMessage id="Actors" />
            </h1>
            <div className={styles.Creaters__rez}>
                {film?.currentStaff?.filter((staff) => staff.professionKey === "ACTOR")
                    .map((actor) => (
                        <Link href={"/person/" + String(actor.person?.id || 0)}>
                            <div
                                key={actor.person?.id}
                                className={styles.Actors__unit}
                            >
                                <div className="">
                                    <Image
                                        src={actor?.person?.posterUrl || ""}
                                        alt=""
                                        width={1128}
                                        height={1228}
                                    />
                                </div>
                                <p>{actor.person.nameRu}</p>
                            </div>
                        </Link>
                    ))}
            </div>
            <h1>
                <FormattedMessage id="Director" />
            </h1>
            <div className={styles.Creaters__rez}>
                {film?.currentStaff
                    .filter((staff) => staff.professionKey === "DIRECTOR")
                    .map((actor) => (
                        <Link href={`/person/${actor?.person?.personId}`}>
                            <div
                                key={actor.person.id}
                                className={styles.Actors__unit}
                            >
                                <div className="">
                                    <Image
                                        src={actor?.person?.posterUrl || ""}
                                        alt=""
                                        width={1128}
                                        height={1228}
                                    />
                                </div>
                                <p>{actor?.person?.nameRu}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Creaters;
