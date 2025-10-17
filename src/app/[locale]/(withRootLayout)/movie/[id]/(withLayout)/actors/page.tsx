import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { calculateMovieName } from '../../../../../../../utils/calculateMovieName';
import CreatersTab from '../../../../../../../components/person/CreatersTab/CreatersTab';
import CreatersPersonList from '../../../../../../../components/person/CreatersPersonList/CreatersPersonList';
import { movieAPI } from '@/lib/api/movieAPI';
import { notFound } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

type Props = {
    params: Promise<{ id: string; locale: 'ru' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, locale } = await params;
    const t = await getTranslations();
    const movie = await movieAPI.getMovieById(id);
    if (!movie) {
        notFound();
    }
    const movieName = calculateMovieName(movie.film, locale);
    return {
        title: t('page.actors.title', { movieName: movieName }),
        description: t('page.actors.description', { movieName }),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/movie/${movie.film.kinopoiskId}/actors`,
                en: `${BASE_URL}/en/movie/${movie.film.kinopoiskId}/actors`,
                'x-default': `${BASE_URL}/movie/${movie.film.kinopoiskId}/actors`,
            },
        },
    };
}

export default async function ActorsPage({ params }: { params: Promise<{ id: string; locale: 'en' | 'ru' }> }) {
    const { id, locale } = await params;
    const movie = await movieAPI.getMovieById(id);
    if (!movie) {
        return;
    }

    const t = await getTranslations();

    const personList = movie.staff;

    const directorList = personList.filter((person) => person.profession && person.profession.includes('Режиссер'));
    const actorList = personList.filter(
        (person) => person.profession && (person.profession.includes('Актер') || person.profession.includes('Актриса')),
    );
    const writerList = personList.filter((person) => person.profession && person.profession.includes('Сценарист'));

    return (
        <CreatersTab>
            <CreatersPersonList personList={actorList} listTitle={t('actors')} />
            <CreatersPersonList personList={directorList} listTitle={t('directors')} />
            <CreatersPersonList personList={writerList} listTitle={t('writers')} />
        </CreatersTab>
    );
}
