import Image from "next/image";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getFilm } from "../../../../store/film";
import Trailer from "../../../TrailerMain/TrailerMain";
import styles from "./TrailerModal.module.scss";

export default function TrailerModal({ callback }: { callback: () => void }) {
    const film = useSelector(getFilm());

    if (!film?.film?.trailers?.length) {
        return <></>;
    }

    return (
        <div className={styles.Actors__all}>
            <h1 onClick={() => callback()}>
                <FormattedMessage id="TrailerAndMaterial" />
            </h1>
            {film?.film?.trailers?.map((trailer) => (
                <Trailer
                    trailer={trailer.url}
                    site={trailer.site}
                    content={
                        <div className={styles.Actors__trariler}>
                            <Image
                                src={
                                    film?.film?.logoUrl ||
                                    film?.film.posterUrl
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


