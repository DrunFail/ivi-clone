import Head from "next/head";
import { getLang } from "../store/switchLang";
import { useSelector } from "react-redux";
import PageSection from "../components/PageContainers/PageSection/PageSection";
import PromoSection from "../components/PromoSection/PromoSection";
import PageWrapper from "../components/PageContainers/PageWrapper/PageWrapper";
import TopTenSlider from "../components/Movie/TopTenSlider/TopTenSlider";
import MovieSlider from "../components/Movie/MovieSlider/MovieSlider";
import { TOP_10_DATA } from "../components/Movie/TopTenSlider/data";
import MainSlider from "../components/Movie/MainSlider/MainSlider";

const Index = (): React.ReactElement => {
    const lang = useSelector(getLang());

    return (
        <>
            <Head >
                <title>{lang === "Ru" ? "Главная страница" : "Main page"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
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
