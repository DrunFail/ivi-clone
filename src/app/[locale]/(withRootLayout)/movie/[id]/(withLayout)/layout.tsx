import { MovieById } from '@/models/types';
import MoviePageModalLayout from '../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout';
import { getDictionary } from '../../../../dictionaries';
import { notFound } from 'next/navigation';
import { movieAPI } from '@/lib/api/movieAPI';

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string; locale: string }>;
}) {
    const { id, locale } = (await params) as { id: string; locale: 'ru' | 'en' };
    let movie: MovieById | undefined;
    try {
        movie = await movieAPI.getMovieById(id);
    } catch (error) {
        console.log(error);
        notFound();
    }
    if (!movie) {
        notFound();
    }
    const dict = await getDictionary(locale);

    return (
        <MoviePageModalLayout movie={movie} lang={locale}>
            <div id="not-inter">{children}</div>
        </MoviePageModalLayout>
    );
}
