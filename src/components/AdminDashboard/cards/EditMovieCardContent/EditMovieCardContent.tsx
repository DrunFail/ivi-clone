import Image from "next/image";
import styles from "./EditMovieCardContent.module.scss";
import { Movie } from "../../../../models/types";
import TextFieldWithLabel from "../../../UI/TextFieldWithLabel/TextFieldWithLabel";
import { FormattedMessage } from "react-intl";
import MemoizedFormattedMessage from "react-intl/src/components/message";
import PropertyList from "../../PropertyList/PropertyList";
import PropertyItem from "../../PropertyItem/PropertyItem";

interface EditMovieCardContentProps {
    elem: Movie,
    countries: string,
    genres: string,
    newMovieName: { nameRu: string, nameOriginal: string | null },
    handleChangeNewMovieName: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function EditMovieCardContent({ elem, countries, genres, newMovieName, handleChangeNewMovieName }: EditMovieCardContentProps) {
    return (
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <Image src={elem.posterUrlPreview} fill alt={elem.nameRu} />
            </div>
            <PropertyList>
                
                <PropertyItem description={elem.kinopoiskId}>
                    <MemoizedFormattedMessage id="movie.kinopoiskId" />
                </PropertyItem>

                <PropertyItem description={elem.year }>
                    <MemoizedFormattedMessage id="movie.year" />
                </PropertyItem>

                <PropertyItem description={elem.ratingKinopoisk ?? 0 }>
                    <MemoizedFormattedMessage id="movie.rating" />
                </PropertyItem>

                <PropertyItem description={countries}>
                    <MemoizedFormattedMessage id="movie.countries" />
                </PropertyItem>

                <PropertyItem description={elem.filmLength ?? "unknown" }>
                    <MemoizedFormattedMessage id="movie.length" />
                </PropertyItem>

                <PropertyItem description={genres}>
                    <MemoizedFormattedMessage id="movie.genres" />
                </PropertyItem>

                <PropertyItem description={elem.nameRu }>
                    <MemoizedFormattedMessage id="movie.currentNameRu" />
                </PropertyItem>

                <TextFieldWithLabel
                    labelText={<FormattedMessage id="movie.newNameRu" />}
                    id="nameRu"
                    name="nameRu"
                    value={newMovieName.nameRu}
                    onChange={handleChangeNewMovieName}
                />

                <PropertyItem description={elem.nameOriginal ?? "unknown" }>
                    <MemoizedFormattedMessage id="movie.currentNameEng" />
                </PropertyItem>
                

                <TextFieldWithLabel
                    labelText={<FormattedMessage id="movie.newNameEng" />}
                    id="nameOriginal"
                    name="nameOriginal"
                    value={newMovieName.nameOriginal ?? ""}
                    onChange={handleChangeNewMovieName}
                />
            </PropertyList>

        </div>
    );
}