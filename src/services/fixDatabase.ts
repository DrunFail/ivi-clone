import axios from "axios";
import { domen } from "../constats";
import { IGenreObject } from "../models";

/** Функция запрашивает на сервере и возвращает объект жанров из базы данных. */
async function fixDatabase(): Promise<void> {
    await axios.post(`http://localhost:5000/api/movies/genres/18`, {
        genreNameEng: "western"
    });
    await axios.post(`http://localhost:5000/api/movies/countries/5`, {
        countryNameEng: "Ireland"
    });
}

export default fixDatabase;
