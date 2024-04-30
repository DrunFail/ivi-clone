import { DetailedPerson } from "../../../../models/types";
import { NewPersonAPI } from "../../../../api/newPersonAPI";
import HeadPerson from "../../../../components/person/HeadPerson/HeadPerson";
import PageSection from "../../../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../../../components/PageContainers/PageWrapper/PageWrapper";
import PageWrapperInner from "../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import PersonPageContainer from "../../../../components/person/PersonPageContainers/PersonPageContainer";
import Avatar from "../../../../components/UI/Avatar/Avatar";
import PersonPageNamePerson from "../../../../components/person/PersonPageNamePerson/PersonPageNamePerson";
import FilmographyContainer from "../../../../components/person/Filmography/FilmographyContainer/FilmographyContainer";
import FilmographyHeader from "../../../../components/person/Filmography/FilmographyHeader/FilmographyHeader";
import FilmographyList from "../../../../components/person/Filmography/FilmographyList/FilmographyList";

async function getPersonDataById(personId: number) {
    const person = await NewPersonAPI.getPersonById(personId);
    return person;
}

const calculatePersonName = (person:DetailedPerson,lang:string) => {
    if (lang.toLowerCase() === "ru") return person.person.nameRu;
    return person.person.nameEng ?? person.person.nameRu;
}


export default async function PersonPage({ params: { id,lang } }: { params: { id: string,lang:string } }) {
    const person =  await getPersonDataById(+id);
    const personName = calculatePersonName(person, "Ru");


    return (
        <>
            <HeadPerson
                personName={personName}
                personProfession={person.person.profession ?? ""}
            />
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
                            />
                            <FilmographyList
                                personMovieList={person.films}
                            />
                        </FilmographyContainer>
                    </PersonPageContainer>
                </PageWrapperInner>
            </PageSection>

        </>
    );
};
