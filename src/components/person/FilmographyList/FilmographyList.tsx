import styles from "./FilmographyList.module.scss";
import FilmographyItemCard from "../FilmographyItemCard/FilmographyItemCard";
import { PhilmographyItem } from "../../../models/IPerson";
import { MovieWithPerson } from "../../../models/types";

export default function FilmographyList({ personMovieList }: {personMovieList:MovieWithPerson[]}) {
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


