import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { MovieById } from "../../models/types";
import { calculateMovieName } from "../../utils/calculateMovieName";
import { getKeyByValue } from "../../utils/getKeyByValue";
import { CLIENT_GENRE_LIST } from "../../constants/genreList";

interface Props {
    movie: MovieById,
}

const TYPE_MOVIE_LINK = {
    "FILM": "/movies/all",
    "TV_SERIES": "https://www.ivi.ru/series"
}
export default async function useBreadcrumbsLinks({ movie }: Props) {
    const t = await getTranslations();
    const locale = useLocale();

    const typeMovie = movie.film.type;
    const typeMovieHref = TYPE_MOVIE_LINK[typeMovie]
    const movieGenre = movie.film.genres[0].id;
    const movieName = calculateMovieName(movie.film, locale);
    const mainTitle = t("MyIvi");
    const typeMovieTitle = t(`breadcrumbs.${typeMovie}`);

    const genreTitleKey = getKeyByValue(CLIENT_GENRE_LIST, movieGenre);
    const genreTitle = t(`genre.${genreTitleKey}.short`);
    const genreHref = `/movies/${genreTitleKey}`

    const returned = {
        fullList: [
            {
                children: mainTitle,
                href: "/"
            },
            {
                children: typeMovieTitle,
                href: typeMovieHref
            },
            {
                children: genreTitle,
                href: genreHref
            },
            {
                children: movieName,
                href: ""
            }
        ],
        shortList: [
            {
                children: typeMovieTitle,
                href: typeMovieHref
            },
            {
                children: genreTitle,
                href: genreHref
            }
        ]
    }
    return returned;
}