import { getTranslations } from 'next-intl/server';
import MoviePageModal from '../../../../../../../components/Movie/MoviePageModal/MoviePageModal';
import MoviePageModalLayout from '../../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout';
import CreatersPersonList from '../../../../../../../components/person/CreatersPersonList/CreatersPersonList';
import CreatersTab from '../../../../../../../components/person/CreatersTab/CreatersTab';
import { movieAPI } from '@/lib/api/movieAPI';

export default async function ActorsPageModal({ params }: { params: Promise<{ id: string; locale: 'en' | 'ru' }> }) {
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
        <MoviePageModal>
            <MoviePageModalLayout movie={movie} lang={locale}>
                <CreatersTab>
                    <CreatersPersonList personList={actorList} listTitle={t('actors')} />
                    <CreatersPersonList personList={directorList} listTitle={t('directors')} />
                    <CreatersPersonList personList={writerList} listTitle={t('writers')} />
                </CreatersTab>
            </MoviePageModalLayout>
        </MoviePageModal>
    );
}
