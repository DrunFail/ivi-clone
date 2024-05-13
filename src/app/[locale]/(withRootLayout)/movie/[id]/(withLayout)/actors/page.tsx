import { MovieAPI } from "../../../../../../../api/MovieAPI";
import CreatersTab from "../../../../../../../components/componentsTab/CreatersTab/CreatersTab";
import MoviePageModalLayout from "../../../../../../../components/componentsTab/MoviePageModalLayout/MoviePageModalLayout";
import CreatersPersonList from "../../../../../../../components/person/CreatersPersonList/CreatersPersonList";
import { getDictionary } from "../../../../../dictionaries";



async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function ActorsPage({params:{ id,locale } }:{ params: { id:string,locale:"en" | "ru" } }) {
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);

    const personList = movie.staff;

    const directorList = personList.filter(person => person.profession && person.profession.includes("Режиссер"));
    const actorList = personList.filter(person => person.profession && (person.profession.includes("Актер") || person.profession.includes("Актриса")));
    const writerList = personList.filter(person => person.profession && person.profession.includes("Сценарист"));

    return (
        
          

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
            
       
    );
}