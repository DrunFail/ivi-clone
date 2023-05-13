export interface IPersonData<T> {
    data: T;
}

export interface IRows {
    rows: IPerson[];
}

export interface IPerson {
    person: IOnePerson;
    films: [IFilm[]];
}

export interface IFilm {
    id: string;
    nameRu: string;
    nameOriginal: string;
    year: string;
    posterUrl: string;
    ratingKinopoisk: string;
}

export interface IPropsFilm {
    film: IFilm[];
}

export interface IPropsPerson {
    persons: IPerson;
}

export interface IOnePerson {
    id: string;
    nameRu: string;
    nameEng: string;
    proffession: string;
    posterUrl: string;
    img: string;
}
