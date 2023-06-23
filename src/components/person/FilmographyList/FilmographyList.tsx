import styles from "./FilmographyList.module.scss";
import FilmographyItemCard from "../FilmographyItemCard/FilmographyItemCard";
import { PhilmographyItem } from "../../../models/IPerson";

export default function FilmographyList({ personMovieList }: {personMovieList:PhilmographyItem[]}) {
    return (
        <div className={styles.container}>
            {personMovieList?.map(movie =>

                <FilmographyItemCard
                    key={movie.kinopoiskId}
                    filmographyItem={movie} />
            )}
        </div>
    );
};


