import { ICountries, IGenre, IGenreObject, ISimiliar, IStaff, ITrailers } from "../models";

export interface LinkData {
    name: string,
    link: string
}

export interface LinkDataWithDropdown extends LinkData {
    dropdown: boolean
}


export interface NavbarLinkData {
    country: LinkData[],
    genres: LinkData[],
    years: LinkData[],
    aside: LinkData[]
}
export interface NavbarLink {
    name: string,
    link: string,
    data: NavbarLinkData | null

}

export interface MoviePageData {
    film: {
        id: string | number;
        nameRu: string;
        nameOriginal: string;
        posterUrl: string;
        filmLength: string;
        year: number;
        ratingKinopoisk: string;
        logoUrl: string;
        kinopoiskVoutes: number;
        description: string;
        kinopoiskId: number;
        slogan: string;
        ratingAgeLimits: string;
        countries: ICountries[];
        trailers: ITrailers[];
        genre: IGenre[];
        similar: ISimiliar[];
        genres: IGenreObject[];
    };
    staff: IStaff[];
    reviews: {
        count: number;
        rows: IReviewsOne[];
    };
}

export interface CommentItem {
    id: number;
    filmId: number;
    text: string;
    name: string;
    reviews: CommentItem[];
    createdAt: string;
}