import PageWrapper from '../../../../../components/PageContainers/PageWrapper/PageWrapper';
import PageSection from '../../../../../components/PageContainers/PageSection/PageSection';
import PageWrapperInner from '../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner';
import MoviePageGridTemplate from '../../../../../components/Movie/containers/MoviePageGridTemplate/MoviePageGridTemplate';
import MoviePageGridArea from '../../../../../components/Movie/containers/MoviePageGridArea/MoviePageGridArea';
import MoviePlayerStickyContainer from '../../../../../components/Movie/containers/MoviePlayerStickyContainer/MoviePlayerStickyContainer';
import CustomReactPlayer from '../../../../../components/CustomReactPlayer/CustomReactPlayer';
import Info from '../../../../../components/Movie/moviePageComponents/Info/Info';
import PersonListWithRating from '../../../../../components/person/PersonListWithRating/PersonListWithRating';
import ButtonPlayerBlock from '../../../../../components/Movie/ButtonPlayerBlock/ButtonPlayerBlock';
import MovieHideInfoContainer from '../../../../../components/Movie/MovieHideInfoContainer/MovieHideInfoContainer';
import MovieExtraInfoBlock from '../../../../../components/Movie/MovieExtraInfoBlock/MovieExtraInfoBlock';
import Rating from '../../../../../components/Rating/Rating';
import SimilarSlider from '../../../../../components/Movie/SimilarSlider/SimilarSlider';
import StaffSlider from '../../../../../components/person/StaffSlider/StaffSlider';
import WatchAnyDevice from '../../../../../components/WatchAnyDevice/WatchAnyDevice';
import { getLinksForPlayer } from '../../../../../utils/getLinksForPlayer';
import { calculateMovieName } from '../../../../../utils/calculateMovieName';
import SectionTitle from '../../../../../components/UI/SectionTitle/SectionTitle';
import { getDictionary } from '../../../dictionaries';
import BreadCrumbs from '../../../../../components/UI/BreadCrumbs/BreadCrumbs';
import SizeConditionContainer from '../../../../../components/SizeConditionContainer/SizeConditionContainer';
import type { Metadata } from 'next';
import CommentSlider from '../../../../../components/comment/CommentSlider/CommentSlider';
import { getTranslations } from 'next-intl/server';
import RatingModalContent from '../../../../../components/Rating/RatingModal/RatingModalContent';
import RatingLarge from '../../../../../components/Rating/RatingLarge/RatingLarge';
import RatingBlock from '../../../../../components/Rating/RatingBlock/RatingBlock';
import { Link } from '@/i18n/navigation';
import getBreadcrumbsLinks from '@/hooks/breadcrumbs/getBreadcrumbsLinks';
import { Locale } from '@/i18n/type';
import { movieAPI } from '@/lib/api/movieAPI';
import { notFound } from 'next/navigation';
import { transformMovieData } from '@/utils/movie/transformMovieData';
import { getSimilarMovieList } from '@/utils/movie/getSimilarMovieList';
import MovieDescription from '@/components/Movie/moviePageComponents/MovieDescription/MovieDescription';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

type Props = {
    params: Promise<{ id: string; locale: Locale }>;
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
        title: t('page.movie.title', { movieName }),
        description: t('page.movie.description', { movieName }),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/movie/${movie.film.kinopoiskId}`,
                en: `${BASE_URL}/en/movie/${movie.film.kinopoiskId}`,
                'x-default': `${BASE_URL}/en/movie/${movie.film.kinopoiskId}`,
            },
        },
    };
}
export default async function MoviePage({ params }: { params: Promise<{ id: string; locale: Locale }> }) {
    const { id, locale } = await params;
    const movie = await movieAPI.getMovieById(id);
    const dict = await getDictionary(locale);
    const t = await getTranslations();
    if (!movie) {
        notFound();
    }
    const { movieTitle, movieCountry, movieDuration, movieGenre, ageLimit } = transformMovieData({ movie, locale });

    const { firstTrailerLink, trailerLinkList } = getLinksForPlayer(movie.film.trailers);

    const breadCrumbsData = await getBreadcrumbsLinks({ movie });

    const similar = await getSimilarMovieList(movie);

    const personAmount = 5;
    const movieStaffSliced = movie.staff.length > personAmount ? movie.staff.slice(0, personAmount) : movie.staff;

    return (
        <PageWrapper>
            <PageSection>
                <BreadCrumbs breadcrumbs={breadCrumbsData.shortList} />
            </PageSection>

            <PageSection>
                <PageWrapperInner>
                    <MoviePageGridTemplate>
                        <MoviePageGridArea area="player">
                            <MoviePlayerStickyContainer>
                                <CustomReactPlayer videoUrl={firstTrailerLink} />
                            </MoviePlayerStickyContainer>
                        </MoviePageGridArea>

                        <MoviePageGridArea area="info">
                            <Info
                                movieTitle={movieTitle}
                                movieYear={movie.film.year}
                                movieDuration={movieDuration}
                                ageLimit={ageLimit}
                                movieCountry={movieCountry}
                                movieGenre={movieGenre}
                            />
                        </MoviePageGridArea>

                        <MoviePageGridArea area="person">
                            <PersonListWithRating
                                movieRating={movie.film.ratingKinopoisk ?? 5}
                                persons={movieStaffSliced}
                            />
                        </MoviePageGridArea>

                        <MoviePageGridArea area="buttons">
                            <ButtonPlayerBlock
                                variant={'tablet'}
                                movieName={movieTitle}
                                moviePosterUrl={movie.film.posterUrl}
                                movieYear={movie.film.year}
                            />
                        </MoviePageGridArea>

                        <MoviePageGridArea area="description">
                            <MovieHideInfoContainer isHideText="Детали о фильме" notIsHideText="Свернуть детали">
                                <MovieDescription>{movie.film.description}</MovieDescription>

                                <MovieExtraInfoBlock variant={'desktop'} />
                            </MovieHideInfoContainer>
                        </MoviePageGridArea>

                        <SizeConditionContainer more={1160}>
                            <MoviePageGridArea area="rating">
                                <Rating
                                    ratingButton={
                                        <RatingLarge>
                                            <RatingBlock ratingValue={+(movie.film.ratingKinopoisk ?? 5)} />
                                            <p>{t('RatingIvi')}</p>
                                            <div>
                                                <p>{t('Estimate')}</p>
                                            </div>
                                        </RatingLarge>
                                    }
                                    ratingModalContent={<RatingModalContent />}
                                />
                            </MoviePageGridArea>
                        </SizeConditionContainer>
                    </MoviePageGridTemplate>
                </PageWrapperInner>
            </PageSection>

            <PageSection>
                <PageWrapperInner>
                    <SectionTitle withArrow={false}>{t('WithFilm', { name: movieTitle })}</SectionTitle>
                    <SimilarSlider similarData={similar.rows} />
                </PageWrapperInner>
            </PageSection>

            <PageSection>
                <PageWrapperInner>
                    <Link href={`/movie/${id}/actors`} prefetch>
                        <SectionTitle withArrow={false}>{dict.CreatersAndActors}</SectionTitle>
                    </Link>
                    <StaffSlider data={movie.staff} />
                </PageWrapperInner>
            </PageSection>

            <PageSection>
                <PageWrapperInner>
                    <Link href={`/movie/${id}/review`}>
                        <SectionTitle withArrow={false}>{dict.review}</SectionTitle>
                    </Link>
                    <CommentSlider
                        commentData={movie.reviews}
                        movieName={movieTitle}
                        movieId={movie.film.kinopoiskId}
                    />
                </PageWrapperInner>
            </PageSection>
            <PageSection>
                <PageWrapperInner>
                    <WatchAnyDevice movieName={movieTitle} moviePosterUrl={movie.film.posterUrl} />
                </PageWrapperInner>
            </PageSection>
            <PageWrapperInner>
                <BreadCrumbs breadcrumbs={breadCrumbsData.fullList} isLastCrumbActive={false} />
            </PageWrapperInner>
        </PageWrapper>
    );
}
