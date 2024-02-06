import { Person } from "../../../../models/types";

const calculatePersonName = (personData: Person): string[] => {
    const currentName = personData.nameRu || "Нет данных";
    const splittedName = currentName.split(" ").slice(0, 2);
    return splittedName
}

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