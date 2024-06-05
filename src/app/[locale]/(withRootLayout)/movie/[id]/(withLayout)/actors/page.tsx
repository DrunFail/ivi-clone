import { getTranslations } from "next-intl/server";
import { MovieAPI } from "../../../../../../../api/MovieAPI";
import CreatersTab from "../../../../../../../components/componentsTab/CreatersTab/CreatersTab";
import CreatersPersonList from "../../../../../../../components/person/CreatersPersonList/CreatersPersonList";
import { Metadata } from "next";
import { calculateMovieName } from "../../../../../../../utils/calculateMovieName";


type Props = {
    params: { id: string, locale: "ru" | "en" }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id;
    const locale = params.locale;
    const t = await getTranslations();
    const movie = await MovieAPI.getMovieById(id);
    const movieName = calculateMovieName(movie.film, locale);
    return {
        title: t("page.actors.title", { movieName: movieName }),
        description: t("page.actors.description", { movieName })
    }
}



export default async function ActorsPage({ params: { id, locale } }: { params: { id: string, locale: "en" | "ru" } }) {
    const movie = await MovieAPI.getMovieById(id);
    const t = await getTranslations();

    const personList = movie.staff;

    const directorList = personList.filter(person => person.profession && person.profession.includes("Режиссер"));
    const actorList = personList.filter(person => person.profession && (person.profession.includes("Актер") || person.profession.includes("Актриса")));
    const writerList = personList.filter(person => person.profession && person.profession.includes("Сценарист"));

    return (
        <CreatersTab>
            <CreatersPersonList
                personList={actorList}
                listTitle={t('actors')} />
            <CreatersPersonList
                personList={directorList}
                listTitle={t("director")} />
            <CreatersPersonList
                personList={writerList}
                listTitle={t("actors")} />
        </CreatersTab>
    );
}