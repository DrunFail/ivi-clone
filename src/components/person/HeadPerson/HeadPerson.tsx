import Head from "next/head";
import { useSelector } from "react-redux";
import React from "react";
import { getPerson } from "../../store/person";
import { getLang } from "../../store/switchLang";

const HeadPerson = () => {
    const person = useSelector(getPerson());
    const lang = useSelector(getLang());
    return (
        <Head>
            <title>
                {person?.person?.nameEng || lang === "En"
                    ? person?.person?.nameEng
                    : person?.person?.nameRu}
            </title>
            <meta name="keywords" content={person?.person?.proffession}></meta>
        </Head>
    );
};

export default HeadPerson;
