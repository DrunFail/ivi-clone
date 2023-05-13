export interface IWindowFilm {
    zhanr: TWindowFilm[];
    zhanr2: TWindowFilm[];
    country: TWindowFilm[];
    year: TWindowFilm[];
}

export type TWindowFilm = {
    id: number;
    name: string;
};
