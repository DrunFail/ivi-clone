import { DetailedPerson } from "../../../../../models/types";
import { NewPersonAPI } from "../../../../../api/newPersonAPI";
import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../../../../components/PageContainers/PageWrapper/PageWrapper";
import PageWrapperInner from "../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import PersonPageContainer from "../../../../../components/person/PersonPageContainers/PersonPageContainer";
import Avatar from "../../../../../components/UI/Avatar/Avatar";
import PersonPageNamePerson from "../../../../../components/person/PersonPageNamePerson/PersonPageNamePerson";
import FilmographyContainer from "../../../../../components/person/Filmography/FilmographyContainer/FilmographyContainer";
import FilmographyHeader from "../../../../../components/person/Filmography/FilmographyHeader/FilmographyHeader";
import FilmographyList from "../../../../../components/person/Filmography/FilmographyList/FilmographyList";
import { getDictionary } from "../../../dictionaries";
import type { Metadata } from 'next'
import FilmographyItemCard from "../../../../../components/person/Filmography/FilmographyItemCard/FilmographyItemCard";
import { getTranslations } from "next-intl/server";

type Props = {
    params: { id: string, locale: "en" | "ru" }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, locale } = params;
    const t = await getTranslations();
    const person = await NewPersonAPI.getPersonById(+id);
    const personName = calculatePersonName(person, locale);
    const personProfession = person.person.profession ?? "";
    return {
        title: t("page.person.title", { personName, personProfession }),
        description: t("page.person.description", {personName})
    }
}

const calculatePersonName = (person:DetailedPerson,lang:string) => {
    if (lang.toLowerCase() === "ru") return person.person.nameRu;
    return person.person.nameEng ?? person.person.nameRu;
}


export default async function PersonPage({ params: { id,locale } }: { params: { id: string,locale:"en" | "ru" } }) {
    const person = await NewPersonAPI.getPersonById(+id);
    const personName = calculatePersonName(person, locale);
    const dict = await getDictionary(locale);
   
    return (
        <>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <PersonPageContainer>
                            <Avatar
                                urlAvatar={person.person.posterUrl}
                                variant="profile" />
                            <PersonPageNamePerson>
                                {personName}
                            </PersonPageNamePerson>
                        </PersonPageContainer>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapperInner>
                    <PersonPageContainer>
                        <FilmographyContainer>
                            <FilmographyHeader
                                personMovieAmount={person.films.length}
                                headerTitle={dict.FullFilmography}
                                amountTitle={dict.Films}
                            />
                            <FilmographyList>
                                {person.films.map(movie =>
                                    <FilmographyItemCard
                                        key={movie.kinopoiskId}
                                        filmographyItem={movie}
                                        lang={locale}
                                        dictBtnDetails={dict.Detail}
                                        dictRatingIvi={dict.RatingIvi}
                                    />
                                )}
                            </FilmographyList>
                        </FilmographyContainer>
                    </PersonPageContainer>
                </PageWrapperInner>
            </PageSection>
        </>
    );
};
