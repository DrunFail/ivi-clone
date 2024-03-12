import { useSelector } from "react-redux";
import { DetailedPerson} from "../../../models/types";
import { getLang } from "../../../store/slices/switchLang";

export default function useMoviePersonData({ personData }: {personData:DetailedPerson}) {
    const lang = useSelector(getLang());
    
    const personInfo = personData?.person
    const calculatePersonName = () => {
        if (lang === "Ru") {
            return `${personInfo?.nameRu}${personInfo?.nameEng ? (personInfo?.nameEng) : ""}`
        }
        const prop = `name${lang}`

        if (prop in personData?.person) {
            /* eslint-disable */
            //@ts-ignore
            return `${personData.person[prop] ??  personInfo.nameRu}`
        } else {
            return `${personInfo.nameRu}`
        }
    }

    const personName = calculatePersonName();



    return {
        personName,
        personProfession: personData?.person.profession,
        personPosterUrl: personData?.person.posterUrl,
        personMovieAmount: personData?.films.length,
        personMovieList: personData?.films
    }
}