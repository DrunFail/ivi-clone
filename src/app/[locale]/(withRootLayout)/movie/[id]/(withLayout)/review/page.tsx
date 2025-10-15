import { MovieAPI } from '../../../../../../../api/MovieAPI';
import { ReviewAPI } from '../../../../../../../api/ReviewAPI';

import type { Metadata } from 'next';
import { calculateMovieName } from '../../../../../../../utils/calculateMovieName';
import { getTranslations } from 'next-intl/server';
import CommentPageContent from '../../../../../../../components/comment/CommentPageContent/CommentPageContent';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

type Props = {
    params: Promise<{ id: string; locale: 'ru' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, locale } = await params;
    const t = await getTranslations();
    const movie = await MovieAPI.getMovieById(id);
    const movieName = calculateMovieName(movie.film, locale);
    return {
        title: t('page.comment.title', { movieName: movieName }),
        description: t('page.comment.description', { movieName }),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/movie/${movie.film.kinopoiskId}/review`,
                en: `${BASE_URL}/en/movie/${movie.film.kinopoiskId}/review`,
                'x-default': `${BASE_URL}/movie/${movie.film.kinopoiskId}/review`,
            },
        },
    };
}

export default async function ReviewPage({ params }: { params: Promise<{ id: string; locale: 'ru' | 'en' }> }) {
    const { id } = await params;
    const commentTree = await ReviewAPI.getReviewTreeByMovieId(+id);

    return <CommentPageContent movieKinopoiskId={+id} commentTree={commentTree.data} />;
}
