import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./CreatersPersonList.module.scss";
import { Person } from "../../../models/types";

interface CreatersPersonListProps {
    personList: Person[],
    intlId: string
}
export default function CreatersPersonList({ personList, intlId }: CreatersPersonListProps) {


    return (
        <>
            <h1>
                <FormattedMessage id={intlId} />
            </h1>
            <div className={styles.Creaters__rez}>
                {personList
                    .map(person =>
                        <Link key={person?.id} href={"/person/" + String(person?.id || 0)}>
                            <div
                                
                                className={styles.Actors__unit}
                            >
                                <div className="">
                                    <Image
                                        src={person?.posterUrl || ""}
                                        alt=""
                                        width={1128}
                                        height={1228}
                                    />
                                </div>
                                <p>{person.nameRu}</p>
                            </div>
                        </Link>
                    )}
            </div>
        </>

    );
}