import { IStaff } from "../../../models";
import CreatersPersonList from "../../person/CreatersPersonList/CreatersPersonList";
import styles from "./CreatersTab.module.scss";


export default function CreatersTab({ personList }: {personList:IStaff[]}) {
    

    const directorList = personList.filter(person => person.profession.includes("Режиссер"))
    const actorList = personList.filter(person => person.profession.includes("Актер") || person.profession.includes("Актриса"))
    const writerList = personList.filter(person => person.profession.includes("Сценарист"))
    

    return (
        <div className={styles.Creaters}>
            <CreatersPersonList
                personList={actorList}
                intlId="Actors" />
            <CreatersPersonList
                personList={directorList}
                intlId="Director" />
            <CreatersPersonList
                personList={writerList}
                intlId="Actors" />
        </div>
    );
};


