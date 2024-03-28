import { Person } from "../../models/types";
import { calculatePersonName } from "../../utils/calculatePersonName";



const calculateProfession = (personData: Person): string => {
    const profession = personData.profession || "нет данных"
    return profession.split(",")[0].toLowerCase();
}

export default function usePersonData(personData: Person) {
    const profession = calculateProfession(personData)
    const splittedName = calculatePersonName(personData)

    return {
        profession,
        splittedName,
        personId: personData.personId,
        posterUrl: personData.posterUrl
    };
}

