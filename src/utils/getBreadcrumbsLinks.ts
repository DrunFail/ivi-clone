import { CLIENT_GENRE_LIST } from "../constants/genreList";
import { MovieById } from "../models/types";
import { calculateMovieName } from "./calculateMovieName";
import { getKeyByValue } from "./getKeyByValue";

interface Props {
    movie: MovieById,
    lang: "ru" | "en",
    dict: any
}

const TYPE_MOVIE_LINK = {
    "FILM": "/movies/all",
    "TV_SERIES": "https://www.ivi.ru/series"
}


export function getBreadcrumbsLinks({ movie, lang,dict }: Props) {
    
    const typeMovie = movie.film.type;
    const typeMovieHref = TYPE_MOVIE_LINK[typeMovie]
    const movieGenre = movie.film.genres[0].id;
    const movieName = calculateMovieName(movie.film, lang);
    const mainTitle = dict.MyIvi;
    const typeMovieTitle = dict[`breadcrumbs.${typeMovie}`];

    const genreTitleKey = getKeyByValue(CLIENT_GENRE_LIST, movieGenre);
    const genreTitle = dict[`genre.${genreTitleKey}`];
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