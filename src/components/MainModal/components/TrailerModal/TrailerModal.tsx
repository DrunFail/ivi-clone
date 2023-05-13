import Image from "next/image";
import styles from "../../../Actors/Actors.module.scss";
import { useSelector } from "react-redux";
import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import { getFilm } from "../../../../store/film";
import Trailer from "../../../ui/TrailerMain/TrailerMain";

const TrailerModal: FC<{ callback: () => void }> = ({ callback }) => {
    const film = useSelector(getFilm());

    if (!film?.currentFilm?.trailers?.length) {
        return <></>;
    }

    return (
        <div className={styles.Actors__all}>
            <h1 onClick={() => callback()}>
                <FormattedMessage id="TrailerAndMaterial" />
            </h1>
            {film?.currentFilm?.trailers?.map((trailer) => (
                <Trailer
                    trailer={trailer.url}
                    site={trailer.site}
                    content={
                        <div className={styles.Actors__trariler}>
                            <Image
                                src={
                                    film?.currentFilm?.logoUrl ||
                                    film?.currentFilm.posterUrl
                                }
                                width={288}
                                height={166}
                                alt=""
                            />
                            <p>{trailer?.name}</p>
                        </div>
                    }
                />
            ))}
        </div>
    );
};

export default TrailerModal;
