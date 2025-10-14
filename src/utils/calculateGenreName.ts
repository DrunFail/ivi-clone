import { Genre } from "../models/types";

export const calculateGenreName = (genre: Genre, lang: "ru" | "en") => {
   return lang.toLowerCase() === "ru"
        ? genre.genreNameRu
        : genre.genreNameEng
}