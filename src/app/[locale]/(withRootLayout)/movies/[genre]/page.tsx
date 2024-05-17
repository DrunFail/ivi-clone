import PageWrapper from "../../../../../components/PageContainers/PageWrapper/PageWrapper";
import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import PageWrapperInner from "../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import WatchPageHeader from "../../../../../components/UI/movie/WatchPageHeader/WatchPageHeader";
import WatchPageHeaderContainer from "../../../../../components/UI/movie/WatchPageHeaderContainer/WatchPageHeaderContainer";
import WatchPageGenreDescription from "../../../../../components/UI/movie/WatchPageGenreDescription/WatchPageGenreDescription";
import { useTranslations } from "next-intl";
import FiltersFieldWithFilteredMoviesContainer from "../../../../../components/filters/FiltersFieldWithFilteredMoviesContainer/FiltersFieldWithFilteredMoviesContainer";
import BreadcrumbsGenrePage from "../../../../../components/BreadcrumbsGenrePage/BreadcrumbsGenrePage";
import type { Metadata} from 'next'
import { getTranslations } from "next-intl/server";

type Props = {
    params: { genre: string }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const genre = params.genre;
    const t = await getTranslations()

    return {
        title: t("page.genre.title", { genre: t(`genre.${genre}.title`) }),
        description: t(`genre.${genre}.description`),
    }
}


export default function MoviesByGenre({ params: { genre } }: { params: {genre:string}}) {
    const t = useTranslations();

    return (
        <>
            <PageWrapper>
               <BreadcrumbsGenrePage />
            </PageWrapper>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <WatchPageHeader>
                            {t(`genre.${genre}.title`) }
                        </WatchPageHeader>
                        <WatchPageHeaderContainer>
                            <WatchPageGenreDescription>
                                {t(`genre.${genre}.description`) }
                            </WatchPageGenreDescription>
                        </WatchPageHeaderContainer>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <FiltersFieldWithFilteredMoviesContainer
                currentSelectedGenre={t(`genre.${genre}.title`)}
            />
        </>
    );
};