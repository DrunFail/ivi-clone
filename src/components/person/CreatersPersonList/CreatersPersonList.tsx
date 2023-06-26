import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { IStaff } from "../../../models";
import styles from "./CreatersPersonList.module.scss";

interface CreatersPersonListProps {
    personList: IStaff[],
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
                        <Link href={"/person/" + String(person.person?.id || 0)}>
                            <div
                                key={person.person?.id}
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