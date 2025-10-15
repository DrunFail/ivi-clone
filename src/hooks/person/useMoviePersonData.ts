import { useLocale } from 'next-intl';
import { DetailedPerson } from '../../models/types';

export default function useMoviePersonData({ personData }: { personData: DetailedPerson | undefined }) {
    const lang = useLocale();

    if (!personData) return;
    const personInfo = personData.person;
    const calculatePersonName = () => {
        if (lang === 'Ru') {
            return `${personInfo.nameRu}${personInfo.nameEng ? personInfo.nameEng : ''}`;
        }
        const prop = `name${lang}`;

        if (prop in personData.person) {
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
        personProfession: personData.person.profession,
        personPosterUrl: personData.person.posterUrl,
        personMovieAmount: personData.films.length,
        personMovieList: personData.films
    }
}