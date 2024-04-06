import { Movie } from "../models/types";

export const MOVIE_SINGLE:Movie = {
    kinopoiskId: 342,
    id: 1,
    type: "FILM",
    ratingKinopoiskVoteCount: 10,
    nameRu: "Криминальное чтиво",
    nameOriginal: "Pulp Fiction",
    posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/342.jpg",
    posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/342.jpg",
    coverUrl: "https://avatars.mds.yandex.net/get-ott/374297/2a0000017c07a0d5fb7317c327d00289ff07/orig",
    logoUrl: null,
    ratingKinopoisk: "8.6",
    year: 1994,
    filmLength: "154",
    genres: [
        {
            id: 1,
            genreNameRu: "криминал",
            genreNameEng: "crime",
            GenresFilms: {
                id: 121,
                filmId: 43,
                genreId: 1,
                createdAt: "2023-04-24T17:31:16.877Z",
                updatedAt: "2023-04-24T17:31:16.877Z"
            }
        },
        {
            id: 4,
            genreNameRu: "драма",
            genreNameEng: "drama",
            GenresFilms: {
                id: 120,
                filmId: 43,
                genreId: 4,
                createdAt: "2023-04-24T17:31:16.859Z",
                updatedAt: "2023-04-24T17:31:16.859Z"
            }
        }
    ],
    countries: [
        {
            id: 6,
            countryNameRu: "США",
            countryNameEng: "USA",
            CountriesFilms: {
                id: 61,
                filmId: 43,
                countryId: 6,
                createdAt: "2023-04-24T17:31:16.844Z",
                updatedAt: "2023-04-24T17:31:16.844Z"
            }
        }
    ]
}