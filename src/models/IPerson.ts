export interface PersonListResponse {
    rows: PersonFullInfo[];
}

export interface PersonFullInfo {
    person: PersonPersonalInfo;
    films: PhilmographyItem[];
}

export interface PhilmographyItem {
    kinopoiskId: string;
    nameRu: string;
    nameOriginal: string;
    year: string;
    posterUrl: string;
    ratingKinopoisk: string;

}
export interface PersonPersonalInfo {
   

    id: number;
    personId: number;
    nameRu: string;
    nameEng: string | null;
    sex: "MALE" | "FEMALE";
    posterUrl: string;
    birthday: string;
    death: string | null;
    age: number;
    birthPlace: string | null;
    deathPlace: string | null;
    hasAwards: string;
    profession: string;
}
