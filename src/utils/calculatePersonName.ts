import { Person } from "../models/types";

export const calculatePersonName = (personData: Person): string[] => {
    const currentName = personData.nameRu || "Нет данных";
    const splittedName = currentName.split(" ").slice(0, 2);
    return splittedName
}