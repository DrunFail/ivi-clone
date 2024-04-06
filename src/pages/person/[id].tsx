import { GetStaticProps } from "next";
import HeadPerson from "../../components/person/HeadPerson/HeadPerson";
import PersonPageContainer from "../../components/person/PersonPageContainers/PersonPageContainer";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../components/PageContainers/PageWrapper/PageWrapper";
import PersonPageNamePerson from "../../components/person/PersonPageNamePerson/PersonPageNamePerson";
import { NewPersonAPI } from "../../api/newPersonAPI";
import { ParsedUrlQuery } from "querystring";
import { DetailedPerson} from "../../models/types";
import useMoviePersonData from "../../hooks/person/useMoviePersonData";
import PageWrapperInner from "../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import Avatar from "../../components/UI/Avatar/Avatar";
import FilmographyContainer from "../../components/person/Filmography/FilmographyContainer/FilmographyContainer";
import FilmographyHeader from "../../components/person/Filmography/FilmographyHeader/FilmographyHeader";
import FilmographyList from "../../components/person/Filmography/FilmographyList/FilmographyList";

interface PersonPageProps {
    person: DetailedPerson
}
export default function PersonPage({ person }: PersonPageProps) {
    const { personName, personProfession, personPosterUrl, personMovieAmount, personMovieList } = useMoviePersonData({ personData: person });

    return (
        <>
            <HeadPerson
                personName={personName}
                personProfession={personProfession ?? ""}
            />
            <PageSection>
                <PageWrapper>
                <PageWrapperInner>
                    <PersonPageContainer>
                        <Avatar
                            urlAvatar={personPosterUrl}
                            variant="profile" />
                            <PersonPageNamePerson>
                                {personName }
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
                            personMovieAmount={personMovieAmount}
                        />
                        <FilmographyList
                            personMovieList={personMovieList}
                        />
                    </FilmographyContainer>
                    </PersonPageContainer>
                </PageWrapperInner>
            </PageSection>

        </>
    );
};

interface ContextParams extends ParsedUrlQuery {
    id: string
}

export async function getStaticPaths() {
    const persons = await NewPersonAPI.getAllPersonList()
    const paths = persons.map((person) => ({
        params: { id: String(person.personId) }
    }))
    return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as ContextParams
    const person = await NewPersonAPI.getPersonById(+id)
    return { props: {person}}
};
