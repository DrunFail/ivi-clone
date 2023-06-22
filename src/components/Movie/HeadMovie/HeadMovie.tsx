import Head from "next/head";

interface HeadMovieProps {
    pageTitle: string,
    contentDescription: string
}
export default function HeadMovie({ pageTitle, contentDescription }: HeadMovieProps) {
    return (
        <Head>
            <title>
                {pageTitle}
                {" "}
                смотреть онлайн в хорошем HD качестве
            </title>
            <meta name="description" content={contentDescription}></meta>
        </Head>
    );
};


