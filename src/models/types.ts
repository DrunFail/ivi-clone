export type Genre = {
    id: number,
    genreNameRu: string,
    genreNameEng: string,
    createdAt?: string,
    updatedAt?: string
}

export type Country = {
    id: number,
    countryNameRu: string,
    countryNameEng: string,
    createdAt?: string,
    updatedAt?: string
}
export type MovieGenre =  Genre & {
    GenresFilms: {
        id: number,
        filmId: number,
        genreId: number,
        createdAt: string,
        updatedAt: string
    }
}

export type MovieCountries = Country & {
    CountriesFilms: {
        id: number,
        filmId: number,
        countryId: number,
        createdAt: string,
        updatedAt: string
    }
}

type MovieType =
    | "FILM"
    | "TV_SERIES"


export type Movie = {
    id: number,
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string | null,
    ratingKinopoiskVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string | null,
    logoUrl: string | null,
    ratingKinopoisk: string | null,
    year: number,
    filmLength: string | null,
    type: MovieType,
    genres: MovieGenre[],
    countries: MovieCountries[]
}

export type MovieById = {
    film: Movie & {
        slogan: string | null,
        description: string,
        shortDescription: string | null,
        ratimgMpaa: null,
        ratingAgeLimits: string,
        budget: Budget[],
        similar: SimilarMovie[],
        trailers: Trailer[],
    },
    staff: Person[]
    reviews: {
        count: number,
        rows: []
    }
}


export type MovieSuggest = {
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    year: number
}

type PersonSex =
    | "MALE"
    | "FEMALE"

export type Person = {
    id: number,
    personId: number,
    nameRu: string,
    nameEng: string | null,
    sex: PersonSex,
    posterUrl: string,
    birthday: string | null,
    death: string | null,
    age: number,
    birthPlace: string | null,
    deathPlace: string | null,
    hasAwards: string,
    profession: string | null,
    createdAt?: string,
    updatedAt?: string
}

export type MovieWithPerson = {
    kinopoiskId: number,
    year: number,
    nameRu: string,
    nameOriginal: string | null,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string | null,
    logoUrl: string | null,
    ratingKinopoisk: string
}

export type DetailedPerson = {
    person: Person,
    films: MovieWithPerson[]
}

export type MoviePersonList = {
    id: number,
    personId: number,
    nameRu: string,
    nameEng: string | null,
    sex: PersonSex,
    posterUrl: string,
    birthday: null,
    death: null,
    age: number,
    birthPlace: null,
    deathPlace: null,
    hasAwards: string,
    profession: string
}

export type PersonSuggest = {
    personId: number,
    nameRu: string
}

type BudgetType =
    | "BUDGET"
    | "MARKETING"
    | "RUS"
    | "USA"
    | "WORLD"

type Budget = {
    id: number,
    type: BudgetType,
    amount: number,
    currencyCode: string,
    name: string,
    symbol: string,
    filmId: null,
    BudgetFilms: {
        id: number,
        filmId: number,
        budgetId: number,
        createdAt: string,
        updatedAt: string
    }
}

export type SimilarMovie = {
    id: number,
    filmId: number,
    nameRu: string,
    nameEng: string | null,
    nameOriginal: string | null,
    posterUrl: string,
    posterUrlPreview: string,
    similarFilmId: null,
    SimilarFilms: {
        id: number,
        kinopoiskId: number,
        similarFilmId: number,
        createdAt: string,
        updatedAt: string
    }
}

type TrailerType =
    | "YOUTUBE"
    | "KINOPOISK_WIDGET"
    | "UNKNOWN"

export type Trailer = {
    id: number,
    url: string,
    name: string,
    site: TrailerType,
    kinopoiskFilmId: number
}

export type ReviewAuthor = {
    id: number,
    username: string,
    name: string | null,
    lastName: string | null,
    favMovie: string | null,
    avatarId: number | null
}

export type Review = {
    id: number,
    filmId: number,
    parentId: number | null,
    title: string,
    text: string,
    childsNum: number,
    path: string,
    depth: number,
    profile: ReviewAuthor,
    createdAt: string,
    updatedAt: string,
    childs?: Review[]
}

export type ReviewTree =  Review & {
    
    
}

export type AuthLoginResponse = {
    token: string,
    userEmail: string,
    userRoles: string[]

}

export type AuthRegistrationResponse = {
    token: string,
    id: number
}

export type AuthRefreshResponse = {
    token: string
}

export type MovieSortBy =
    | "nameRu"
    | "year"
    | "ratingKinopoiskVoteCount"
    | "ratingKinopoisk"


export type MovieFilterParams = {
    page: number,
    genreId: number,
    countryId: number,
    DIRECTOR: string,
    ACTOR: string,
    directorId: number,
    actorId: number,
    orderBy: MovieSortBy,
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    size: number
}
