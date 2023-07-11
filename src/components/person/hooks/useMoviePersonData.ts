import { useSelector } from "react-redux";
import { PersonFullInfo} from "../../../models/IPerson";
import { getLang } from "../../../store/switchLang";

export default function useMoviePersonData({ personData }: {personData:PersonFullInfo}) {
    const lang = useSelector(getLang());
    console.log(personData)
    const personInfo = personData?.person
    const calculatePersonName = () => {
        if (lang === "Ru") {
            return `${personInfo?.nameRu}${personInfo?.nameEng ? (personInfo?.nameEng) : ""}`
        }
        const prop = `name${lang}`

        if (prop in personData?.person) {
            return `${personData?.person[prop] ??  personInfo?.nameRu}`
        } else {
            return `${personInfo?.nameRu}`
        }
    }

    const personName = calculatePersonName();



    return {
        personName,
        personProfession: personData?.person.profession,
        personPosterUrl: personData?.person?.posterUrl,
        personMovieAmount: personData?.films?.length,
        personMovieList: personData?.films
    }
}