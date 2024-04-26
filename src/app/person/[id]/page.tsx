"use client";

import { DetailedPerson } from "../../../models/types";
import useMoviePersonData from "../../../hooks/person/useMoviePersonData";
import HeadPerson from "../../../components/person/HeadPerson/HeadPerson";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../../components/PageContainers/PageWrapper/PageWrapper";
import PageWrapperInner from "../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import PersonPageContainer from "../../../components/person/PersonPageContainers/PersonPageContainer";
import Avatar from "../../../components/UI/Avatar/Avatar";
import PersonPageNamePerson from "../../../components/person/PersonPageNamePerson/PersonPageNamePerson";
import FilmographyContainer from "../../../components/person/Filmography/FilmographyContainer/FilmographyContainer";
import FilmographyHeader from "../../../components/person/Filmography/FilmographyHeader/FilmographyHeader";
import FilmographyList from "../../../components/person/Filmography/FilmographyList/FilmographyList";
import { NewPersonAPI } from "../../../api/newPersonAPI";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function PersonPage() {
    const [person, setPerson] = useState<DetailedPerson>();
    const personId = useParams<{ id: string }>()!.id;

    useEffect(() => {
        async function getPersonDataById(personId: number) {
            const person = await NewPersonAPI.getPersonById(personId);
            setPerson(person)
        }

        getPersonDataById(+personId);
    },[personId])

    

    const personData = useMoviePersonData({ personData: person });
    if (!personData) return <></>;
    const { personName, personProfession, personPosterUrl, personMovieAmount, personMovieList } = personData;

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
