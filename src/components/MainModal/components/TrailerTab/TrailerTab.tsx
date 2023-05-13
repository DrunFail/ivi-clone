import styles from "../../../TrailerMain/Trailer.module.scss";
import { useSelector } from "react-redux";
import React from "react";
import Image from "next/image";
import { getFilm } from "../../../../store/film";
import Trailer from "../../../TrailerMain/TrailerMain";

const TrailerTab = () => {
    const films = useSelector(getFilm());

    if (!films?.currentFilm?.trailers?.length) {
        return <></>;
    }

    return (
        <>
            {films?.currentFilm?.trailers?.map((trailer) => (
                <Trailer
                    trailer={trailer.url}
                    content={
                        <div className={styles.Actors__trariler}>
                            <Image
                                src={films?.currentFilm?.logoUrl || ""}
                                width={288}
                                height={166}
                                alt=""
                            />
                            <p>{trailer?.name}</p>
                        </div>
                    }
                />
            ))}
        </>
    );
};

export default TrailerTab;
