import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson, personRequest } from "../../store/person";
import { GetStaticProps } from "next";
import { PersonFullInfo } from "../../models/IPerson";
import { getAllPerson, getOnePerson } from "../../api/personApi";
import { IProps } from "../../models/IPropsMovie";
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

interface PersonPageProps {
    persons: PersonFullInfo
}
export default function PersonPage({ persons }: PersonPageProps) {
    const person = useSelector(getPerson());


    useEffect(() => {
        dispatch(personRequest(persons));
    }, [persons]);

    const dispatch = useDispatch();


    const { personName, personProfession, personPosterUrl, personMovieAmount, personMovieList } = useMoviePersonData({ personData: person });

    if (!person) {
        return <></>;
    }

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



export async function getStaticPaths() {
    const persons: PersonFullInfo[] = await getAllPerson();
    let paths: IProps[];
    if (persons.length) {
        paths = persons?.map(person => ({
            params: { id: String(person?.person?.id) }
        }));

        return {
            paths,
            fallback: true
        };
    }
    return {
        paths: [],
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    let data: null | PersonFullInfo = null;
    try {
        data = await getOnePerson(String(context?.params?.id || 0));
    } catch (err) { }

    if (!data) {
        return {
            notFound: true
        };
    } else if (!data.person) {
        return {
            notFound: true
        };
    }

    return {
        props: { persons: data }
    };
};
