import { Genre } from "../models/types";

export const calculateGenreName = (genre: Genre, lang: string) => {
   return lang.toLowerCase() === "ru"
        ? genre.genreNameRu
        : genre.genreNameEng
}