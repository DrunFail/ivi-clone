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


const fetchMovieSetByGenre = async (genreId:number) => {
        const responseData = await MovieAPI.getFilteredMovie({ genreId})
    return responseData;
}

import type { Metadata } from 'next'
import MovieSliderSizeContainer from "../../../components/Movie/MovieSliderSizeContainer/MovieSliderSizeContainer";

export const metadata: Metadata = {
    title: 'Главная страница',
    description: 'Фильмы онлайн в отличном качестве',
}


export default async function Page({ params: { locale } }: { params: { locale:"en" | "ru" }}){
    const firstSet = await fetchMovieSetByGenre(2);
    const firstLink = getKeyByValue(CLIENT_GENRE_LIST, 2);
    const renderFirstLink = "/movies/" + CLIENT_GENRE_LIST[firstLink]
    const secondSet = await fetchMovieSetByGenre(1);
    const secondLink = getKeyByValue(CLIENT_GENRE_LIST, 1);
    const renderSecondLink = "/movies/" + CLIENT_GENRE_LIST[secondLink]

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
                        <Link href={renderFirstLink}>
                            <SectionTitle withArrow>
                                {"text"}
                            </SectionTitle>
                        </Link>
                        <MovieSlider
                            data={firstSet}
                            href={renderFirstLink}
                            />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <Link href={renderSecondLink}>
                            <SectionTitle withArrow>
                                {"text"}
                            </SectionTitle>
                        </Link>
                        <MovieSlider
                            data={secondSet}
                            href={renderSecondLink}
                        />
                    </PageWrapperInner>
                </PageWrapper>

            </PageSection>


        </>
    );
};
