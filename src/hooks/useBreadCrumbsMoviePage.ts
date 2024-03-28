import {  useIntl } from "react-intl";
import { MovieById } from "../models/types";
import { useSelector } from "react-redux";
import { getLang } from "../store/slices/switchLang";
import { calculateMovieName } from "../utils/calculateMovieName";
import { getKeyByValue } from "../utils/getKeyByValue";
import { CLIENT_GENRE_LIST } from "../constants/genreList";

interface UseBreadCrumbsMoviePageProps {
    movie: MovieById
}
const TYPE_MOVIE_LINK = {
    "FILM": "/movies/all",
    "TV_SERIES": "https://www.ivi.ru/series"
}

export default function useBreadCrumbsMoviePage({ movie }: UseBreadCrumbsMoviePageProps) {
    const intl = useIntl();
    const lang = useSelector(getLang());
    const typeMovie = movie.film.type;
    const typeMovieHref = TYPE_MOVIE_LINK[typeMovie]
    const movieGenre = movie.film.genres[0].id;
    const movieName = calculateMovieName(movie.film, lang);
    const mainTitle = intl.formatMessage({ id: "MyIvi" });
    const typeMovieTitle = intl.formatMessage({ id: `breadcrumbs.${typeMovie}` })

    const genreTitleKey = getKeyByValue(CLIENT_GENRE_LIST,movieGenre)
    const genreTitle = intl.formatMessage({ id: `genre.${genreTitleKey}` })

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