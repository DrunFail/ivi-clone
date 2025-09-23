import { MovieById } from "../models/types";
import { calculateMovieName } from "../utils/calculateMovieName";
import { getKeyByValue } from "../utils/getKeyByValue";
import { CLIENT_GENRE_LIST } from "../constants/genreList";
import { useLocale, useTranslations } from "next-intl";

interface UseBreadCrumbsMoviePageProps {
    movie: MovieById | undefined
}
const TYPE_MOVIE_LINK = {
    "FILM": "/movies/all",
    "TV_SERIES": "https://www.ivi.ru/series"
}

export default function useBreadCrumbsMoviePage({ movie }: UseBreadCrumbsMoviePageProps) {
    const t = useTranslations();
    const lang = useLocale();
    if (!movie) return null;
    const typeMovie = movie.film.type;
    const typeMovieHref = TYPE_MOVIE_LINK[typeMovie]
    const movieGenre = movie.film.genres[0].id;
    const movieName = calculateMovieName(movie.film, lang);
    const mainTitle = t("MyIvi");
    const typeMovieTitle = t(`breadcrumbs.${typeMovie}`)

    const genreTitleKey = getKeyByValue(CLIENT_GENRE_LIST,movieGenre)
    const genreTitle = t(`genre.${genreTitleKey}`)

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
                href: ""
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
                href: ""
            }
        ]
    }
        

    

return returned;
}