import React, { useEffect, useState } from "react";
import styles from "./main.module.scss";
import Head from "next/head";
import TopTenSlider from "../components/TopTenSlider/TopTenSlider";
import { TOP_10_DATA } from "../components/TopTenSlider/data";
import { getLang } from "../store/switchLang";
import { useSelector } from "react-redux";
import PageSection from "../components/PageContainers/PageSection/PageSection";
import PromoSection from "../components/PromoSection/PromoSection";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import MainSlider from "../components/mainSlider/mainSlider";
import PageWrapper from "../components/PageContainers/PageWrapper/PageWrapper";

const Index = (): React.ReactElement => {
    const lang = useSelector(getLang());

    return (
        <>
            <Head >
                <title>{lang === "Ru" ? "Главная страница" : "Main page"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
           
                <MainSlider styles={styles} />

                <PageSection>
                    <PageWrapper>
                        <PromoSection />
                    </PageWrapper>
                </PageSection>
                <PageSection>
                    <PageWrapper>
                        <TopTenSlider
                            carouselId={"top10"}
                            data={TOP_10_DATA}
                            count={10}
                        />
                    </PageWrapper>
                </PageSection>
                <PageSection>
                    <PageWrapper>
                        <MovieSlider
                            carouselId={"comedy"}
                            genreId={2 }

                            href={"/movies/comedy"}
                            headingTitle={"Комедии"}
                        />
                    </PageWrapper>
                </PageSection>
                <PageSection>
                    <PageWrapper>
                        <MovieSlider
                            carouselId={"criminal"}
                            genreId={1 }
                            href={"/movies/crime"}
                            headingTitle={"Криминал"}
                        />
                    </PageWrapper>
                </PageSection>

           
        </>
    );
};

export default Index;
