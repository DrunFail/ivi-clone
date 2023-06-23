import Head from "next/head";
interface HeadPersonProps {
    personName: string,
    personProfession: string
}
const DEFAULT_TEXT_TITLE = ": фильмография,фото,биография."
export default function HeadPerson({personName, personProfession }:HeadPersonProps){
    return (
        <Head>
            <title>
                {personName}{DEFAULT_TEXT_TITLE}{personProfession}{"."}
            </title>
            <meta name="keywords" content={`${personName}.${personProfession}.`}></meta>
        </Head>
    );
};


