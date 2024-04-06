import { LinkData } from "../models/global";
import { Country } from "../models/types";
import { getLang } from "../store/slices/switchLang";
import { calculateCountryName } from "../utils/calculateCountryName";
import { useAppSelector } from "./reduxHook";

export default function useTransformCountries(countriesList: Country[]):LinkData[] {
    const lang = useAppSelector(getLang())
    const transformData = countriesList.map(country => {
        const name = calculateCountryName(country, lang);
        const link = "";
        return {name,link,id: country.id}
    })
    const sortedData = transformData.sort((a,b) => a.name.localeCompare(b.name))
    return sortedData;
}