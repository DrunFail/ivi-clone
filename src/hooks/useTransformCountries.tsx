import { useLocale } from 'next-intl';
import { LinkData } from '../models/global';
import { Country } from '../models/types';
import { calculateCountryName } from '../utils/calculateCountryName';

export default function useTransformCountries(countriesList: Country[]): LinkData[] {
    const lang = useLocale();
    const transformData = countriesList.map((country) => {
        const name = calculateCountryName(country, lang);
        const link = '';
        return { name, link, id: country.id };
    });
    const sortedData = transformData.sort((a, b) => a.name.localeCompare(b.name));
    return sortedData;
}
