import Image from "next/image";
import styles from "./CreatersPersonList.module.scss";
import { Person } from "../../../models/types";
import { calculatePersonName } from "../../../utils/calculatePersonName";
import { Link } from "@/i18n/navigation";

interface CreatersPersonListProps {
    personList: Person[],
    listTitle: string
}
export default function CreatersPersonList({ personList, listTitle }: CreatersPersonListProps) {
    return (
        <div className={styles.container}>
            <h3>
                {listTitle}
            </h3>
            <div className={styles.list}>
                {personList.map(person => {
                    const splittedName = calculatePersonName(person)
                    return (
                        <Link key={person.id} href={`/person/${person.id}`}>

                            <div className={styles.image}>
                                <Image
                                    src={person.posterUrl || ""}
                                    alt=""
                                    fill
                                />
                            </div>
                            <div>
                                {splittedName.map((name, index) => <span key={index} className={styles.personName}>{name}</span>)}
                            </div>

                        </Link>
                    )
                }
                )}
            </div>
        </div>

    );
}