import { GetStaticProps } from "next";
import HeadPerson from "../../components/person/HeadPerson/HeadPerson";
import useMoviePersonData from "../../components/person/hooks/useMoviePersonData";
import FilmographyList from "../../components/person/FilmographyList/FilmographyList";
import PersonPageContainer from "../../components/person/PersonPageContainers/PersonPageContainer";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../components/PageContainers/PageWrapper/PageWrapper";
import PersonPhoto from "../../components/person/PersonPhoto/PersonPhoto";
import PersonPageNamePerson from "../../components/person/PersonPageNamePerson/PersonPageNamePerson";
import FilmographyHeader from "../../components/person/FilmographyHeader/FilmographyHeader";
import FilmographyContainer from "../../components/person/FilmographyContainer/FilmographyContainer";
import { NewPersonAPI } from "../../api/newPersonAPI";
import { ParsedUrlQuery } from "querystring";
import { DetailedPerson} from "../../models/types";

interface PersonPageProps {
    person: DetailedPerson
}
export default function PersonPage({ person }: PersonPageProps) {
    const { personName, personProfession, personPosterUrl, personMovieAmount, personMovieList } = useMoviePersonData({ personData: person });

    return (
        <>
            <HeadPerson
                personName={personName}
                personProfession={personProfession}
            />
            <PageSection>
                <PageWrapper>
                    <PersonPageContainer>
                        <PersonPhoto
                            urlPersonPhoto={personPosterUrl}
                            variant="profile" />
                        <PersonPageNamePerson
                            personName={personName}
                        />
                    </PersonPageContainer>
                </PageWrapper>
            </PageSection>
            <PageSection>
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
            </PageSection>

        </>
    );
};

interface ContextParams extends ParsedUrlQuery {
    id: string
}

export async function getStaticPaths() {
    const persons = await NewPersonAPI.getAllPersonList()
    const paths = persons.map((person)=> ({
        params: {id: String(person.id) }
    }))
    return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as ContextParams
    const person = await NewPersonAPI.getPersonById(+id)
    return { props: {person}}
};
