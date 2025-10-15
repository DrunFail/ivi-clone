import { Country } from '../models/types';

export const calculateCountryName = (country: Country, lang: string) => {
    return lang.toLowerCase() === 'ru' ? country.countryNameRu : country.countryNameEng;
};
