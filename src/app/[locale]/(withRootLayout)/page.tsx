import PageSection from '../../../components/PageContainers/PageSection/PageSection';
import MainSlider from '../../../components/Movie/MainSlider/MainSlider';
import PageWrapper from '../../../components/PageContainers/PageWrapper/PageWrapper';
import PromoSection from '../../../components/PromoSection/PromoSection';
import PageWrapperInner from '../../../components/PageContainers/PageWrapperInner/PageWrapperInner';
import TopTenSlider from '../../../components/Movie/TopTenSlider/TopTenSlider';
import { TOP_10_DATA } from '../../../components/Movie/TopTenSlider/data';
import { CLIENT_GENRE_LIST } from '../../../constants/genreList';
import { getKeyByValue } from '../../../utils/getKeyByValue';
import SectionTitle from '../../../components/UI/SectionTitle/SectionTitle';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import MovieSlider from '@/components/Movie/MovieSlider/MovieSlider';
import { movieAPI } from '@/lib/api/movieAPI';
import { ResponseWithCountAndRows } from '@/models/response';
import { Movie } from '@/models/types';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations();
    return {
        title: t('page.main.title'),
        description: t('page.main.description'),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru`,
                en: `${BASE_URL}/en`,
                'x-default': `${BASE_URL}/en`,
            },
        },
    };
}

const getMovieSet = async (genreId: number) => {
    const movieList = await movieAPI.getFilteredMovie({ genreId });
    const movieListGenreName = getKeyByValue(CLIENT_GENRE_LIST, genreId);
    const movieListLink = '/movies/' + movieListGenreName;
    return { movieList, movieListGenreName, movieListLink };
};

export default async function Page() {
    const t = await getTranslations();
    const [firstMovieSet, secondMovieSet] = await Promise.all([getMovieSet(2), getMovieSet(1)]);

    return (
        <PageWrapper>
            <PageSection>
                <MainSlider />
            </PageSection>
            <PageSection>
                <PromoSection />
            </PageSection>
            <PageSection>
                <PageWrapperInner>
                    <TopTenSlider data={TOP_10_DATA} />
                </PageWrapperInner>
            </PageSection>
            <PageSection>
                <PageWrapperInner>
                    <Link href={firstMovieSet.movieListLink}>
                        <SectionTitle withArrow>{t(`genre.${firstMovieSet.movieListGenreName}.short`)}</SectionTitle>
                    </Link>
                    <MovieSlider
                        data={firstMovieSet.movieList || ([] as unknown as ResponseWithCountAndRows<Movie>)}
                        href={firstMovieSet.movieListLink}
                    />
                </PageWrapperInner>
            </PageSection>
            <PageSection>
                <PageWrapperInner>
                    <Link href={secondMovieSet.movieListLink}>
                        <SectionTitle withArrow>{t(`genre.${secondMovieSet.movieListGenreName}.short`)}</SectionTitle>
                    </Link>
                    <MovieSlider
                        data={secondMovieSet.movieList || ([] as unknown as ResponseWithCountAndRows<Movie>)}
                        href={secondMovieSet.movieListLink}
                    />
                </PageWrapperInner>
            </PageSection>
        </PageWrapper>
    );
}
