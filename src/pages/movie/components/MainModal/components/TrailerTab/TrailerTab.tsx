import ReactPlayer from "react-player";
import styles from "../../../../../../components/ui/TrailerMain/Trailer.module.scss";
import { useSelector } from "react-redux";
import React from "react";
import { getTrailer } from "../../../../../../store/trailer";
import { getFilm } from "../../../../../../store/film";
import Trailer from "../../../../../../components/ui/TrailerMain/TrailerMain";
import Image from "next/image";

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
