import { MovieAPI } from "../../../../../../../api/MovieAPI";
import MoviePageModal from "../../../../../../../components/Movie/MoviePageModal/MoviePageModal";
import MoviePageModalLayout from "../../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout";
import CreatersPersonList from "../../../../../../../components/person/CreatersPersonList/CreatersPersonList";
import CreatersTab from "../../../../../../../components/person/CreatersTab/CreatersTab";
import { getDictionary } from "../../../../../dictionaries";

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function ActorsPageModal({ params: { id, locale } }: { params: { id: string, locale: "en" | "ru" } }) {
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);

    const personList = movie.staff;

    const directorList = personList.filter(person => person.profession && person.profession.includes("Режиссер"));
    const actorList = personList.filter(person => person.profession && (person.profession.includes("Актер") || person.profession.includes("Актриса")));
    const writerList = personList.filter(person => person.profession && person.profession.includes("Сценарист"));


    return (
        <MoviePageModal>
            <MoviePageModalLayout
                movie={movie}
                dict={dict}
                lang={locale}
            >
           

                <CreatersTab>
                    <CreatersPersonList
                        personList={actorList}
                        listTitle={dict.actors} />
                    <CreatersPersonList
                        personList={directorList}
                        listTitle={dict.director} />
                    <CreatersPersonList
                        personList={writerList}
                        listTitle={dict.actors} />

                    </CreatersTab>
                
            </MoviePageModalLayout>
        </MoviePageModal>
        
    );
}


