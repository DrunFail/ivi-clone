import dynamic from "next/dynamic";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import MainSlider from "../../../components/Movie/MainSlider/MainSlider";
import PageWrapper from "../../../components/PageContainers/PageWrapper/PageWrapper";
import PromoSection from "../../../components/PromoSection/PromoSection";
import PageWrapperInner from "../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import TopTenSlider from "../../../components/Movie/TopTenSlider/TopTenSlider";
import { TOP_10_DATA } from "../../../components/Movie/TopTenSlider/data";
import { MovieAPI } from "../../../api/MovieAPI";
import { CLIENT_GENRE_LIST } from "../../../constants/genreList";
import { getKeyByValue } from "../../../utils/getKeyByValue";
import Link from "next/link";
import SectionTitle from "../../../components/UI/SectionTitle/SectionTitle";

const MovieSlider = dynamic(() =>
    import("../../../components/Movie/MovieSlider/MovieSlider").then((mod) => mod.default))


import type { Metadata } from 'next'
import { getTranslations } from "next-intl/server";

type Props = {
    params: { id: string, locale: "en" | "ru" }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const t = await getTranslations();
    return {
        title: t("page.main.title"),
        description: t("page.main.description")
    }
}

const getMovieSet = async (genreId: number) => {
    const movieList = await MovieAPI.getFilteredMovie({ genreId });
    const movieListGenreName = getKeyByValue(CLIENT_GENRE_LIST, genreId);
    const movieListLink = "/movies/" + CLIENT_GENRE_LIST[movieListGenreName];
    return { movieList, movieListGenreName, movieListLink }
}


export default async function Page({ params: { locale } }: { params: { locale: "en" | "ru" } }) {
    const t = await getTranslations();
    
    const firstSet = await getMovieSet(2);
    const secondSet = await getMovieSet(1);

    return (
        <>
            <PageSection>
                <MainSlider />
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PromoSection />
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <TopTenSlider
                            data={TOP_10_DATA}
                            count={10}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <Link href={firstSet.movieListLink}>
                            <SectionTitle withArrow>
                                {t(`genre.${firstSet.movieListGenreName}.short`)}
                            </SectionTitle>
                        </Link>
                        <MovieSlider
                            data={firstSet.movieList}
                            href={firstSet.movieListLink}
                            />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <Link href={secondSet.movieListLink}>
                            <SectionTitle withArrow>
                                {t(`genre.${secondSet.movieListGenreName}.short`)}
                            </SectionTitle>
                        </Link>
                        <MovieSlider
                            data={secondSet.movieList}
                            href={secondSet.movieListLink}
                        />
                    </PageWrapperInner>
                </PageWrapper>

            </PageSection>


        </>
    );
};
