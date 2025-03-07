import { useIntl } from "react-intl";
import { CLIENT_GENRE_LIST } from "../constants/genreList";
import { LinkData } from "../models/global";
import { useAppSelector } from "./reduxHook";
import { getLang } from "../store/slices/switchLang";
import { Genre } from "../models/types";
import { calculateGenreName } from "../utils/calculateGenreName";
import { getKeyByValue } from "../utils/getKeyByValue";

type GenreKey = keyof typeof CLIENT_GENRE_LIST;

export default function useTransformGenres(variant: "first" | "second", genreList:Genre[]) {
    const intl = useIntl();
    const lang = useAppSelector(getLang())
    if (variant === "first") {
        const getTranslateGenre = (key: GenreKey) => {
            const genreName = intl.formatMessage({ id: `genre.${key}` });
            return genreName
        }
        const getLinkGenre = (key: GenreKey) => {
            const genreName = getTranslateGenre(key);
            const genreLink = `/movies/${key}`
            return { name: genreName, link: genreLink, id: CLIENT_GENRE_LIST[key] }
        }

        const genres: LinkData[] = Object
            .keys(CLIENT_GENRE_LIST)
            .map((key) => getLinkGenre(key as GenreKey))
            .sort((a, b) => a.name.localeCompare(b.name))
        return genres;
    }
    if (variant === "second") {
        
        const transformData = genreList.map(genre => {
            const name = calculateGenreName(genre, lang);
            const linke = getKeyByValue(CLIENT_GENRE_LIST,genre.id)
            const link = `/movies/${linke}`;
            return { name, link }
        })
        const sortedData = transformData.sort((a, b) => a.name.localeCompare(b.name))
        return sortedData;
    }
    
}