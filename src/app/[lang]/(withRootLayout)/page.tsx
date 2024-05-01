"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import MainSlider from "../../../components/Movie/MainSlider/MainSlider";
import PageWrapper from "../../../components/PageContainers/PageWrapper/PageWrapper";
import PromoSection from "../../../components/PromoSection/PromoSection";
import PageWrapperInner from "../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import TopTenSlider from "../../../components/Movie/TopTenSlider/TopTenSlider";
import { TOP_10_DATA } from "../../../components/Movie/TopTenSlider/data";
import { getLang } from "../../../store/slices/switchLang";

const MovieSlider = dynamic(() =>
    import("../../../components/Movie/MovieSlider/MovieSlider").then((mod) => mod.default))

export default function Page(){
    const lang = useSelector(getLang());

    return (
        <>
            <Head >
                <title>{lang === "Ru" ? "Главная страница" : "Main page"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
                <meta name="description" content="Фильмы онлайн в отличном качестве" />
            </Head>

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
                        <MovieSlider
                            genreId={2}
                            href={"/movies/comedy"}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <MovieSlider
                            genreId={1}
                            href={"/movies/crime"}
                        />
                    </PageWrapperInner>
                </PageWrapper>

            </PageSection>


        </>
    );
};
