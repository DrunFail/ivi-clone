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

type Props = {
    params: { id: string, lang: "en" | "ru" }
}

const DEFAULT_TEXT_TITLE = ": фильмография,фото,биография."

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, lang } = params;
    const person = await getPersonDataById(+id);
    const personName = calculatePersonName(person, lang);
    return {
        title: `${personName}${ DEFAULT_TEXT_TITLE }${ person.person.profession ?? ""} .`,
        keywords: `${personName}.${person.person.profession ?? ""}.`
    }
}

async function getPersonDataById(personId: number) {
    const person = await NewPersonAPI.getPersonById(personId);
    return person;
}

const calculatePersonName = (person:DetailedPerson,lang:string) => {
    if (lang.toLowerCase() === "ru") return person.person.nameRu;
    return person.person.nameEng ?? person.person.nameRu;
}


export default async function PersonPage({ params: { id,lang } }: { params: { id: string,lang:"en" | "ru" } }) {
    const person =  await getPersonDataById(+id);
    const personName = calculatePersonName(person, lang);
    const dict = await getDictionary(lang);
   
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
                                        lang={lang}
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
