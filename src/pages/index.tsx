import React, { useEffect, useState } from "react";
import styles from "./main.module.scss";
import Head from "next/head";
import TopTenSlider from "../components/TopTenSlider/TopTenSlider";
import { TOP_10_DATA } from "../components/TopTenSlider/data";
import { getLang } from "../store/switchLang";
import { useSelector } from "react-redux";
import PromoSection from "../components/promoSection/PromoSection";
import PageSection from "../components/pageContainers/pageSection/PageSection";
import PageSectionWrapper from "../components/pageContainers/pageSectionContainer/PageSectionContainer";
import { DATA } from "../components/movieList/data/data";
import { MovieItemTest } from "../components/movieList/interfaces/interfaces";
import MainSlider from "../components/ui/MainSlider/MainSlider";
import MovieSlider from "../components/MovieSlider/MovieSlider";

const Index = (): React.ReactElement => {
    const lang = useSelector(getLang());

    return (
        <>
            <Head >
                <title>{lang === "Ru" ? "Главная страница" : "Main page"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <section>
                <MainSlider styles={styles} />

                <PageSection>
                    <PageSectionWrapper>
                        <PromoSection />
                    </PageSectionWrapper>
                </PageSection>
                <PageSection>
                    <PageSectionWrapper>
                        <TopTenSlider
                            carouselId={"top10"}
                            data={TOP_10_DATA}
                            count={10}
                        />
                    </PageSectionWrapper>
                </PageSection>
                <PageSection>
                    <PageSectionWrapper>
                        <MovieSlider
                            carouselId={"comedy"}
                            genreId={2 }

                            href={"/movies/comedy"}
                            headingTitle={"Комедии"}
                        />
                    </PageSectionWrapper>
                </PageSection>
                <PageSection>
                    <PageSectionWrapper>
                        <MovieSlider
                            carouselId={"criminal"}
                            genreId={1 }
                            href={"/movies/crime"}
                            headingTitle={"Криминал"}
                        />
                    </PageSectionWrapper>
                </PageSection>

            </section>
        </>
    );
};

export default Index;
