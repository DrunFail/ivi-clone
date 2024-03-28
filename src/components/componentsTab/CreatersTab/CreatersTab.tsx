import { Person } from "../../../models/types";
import CreatersPersonList from "../../person/CreatersPersonList/CreatersPersonList";
import styles from "./CreatersTab.module.scss";

interface CreatersTabProps {
    personList: Person[]
}

export default function CreatersTab({ personList }:CreatersTabProps) {
    
    
    const directorList = personList.filter(person => person.profession && person.profession.includes("Режиссер"))
    const actorList = personList.filter(person => person.profession && (person.profession.includes("Актер") || person.profession.includes("Актриса")))
    const writerList = personList.filter(person => person.profession && person.profession.includes("Сценарист"))
    

    return (
        <div className={styles.container}>
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


