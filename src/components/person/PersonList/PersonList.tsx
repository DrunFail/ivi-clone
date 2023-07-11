import Link from "next/link";
import PersonCard from "../PersonCard/PersonCard";
import { IStaff } from "../../../models";

export default function PersonList({ personList }: { personList: IStaff[] }) {
    return (
        <>
            {personList.slice(0, 4).map(person =>
                <Link
                    key={person.id}
                    href={`/person/${person.personId}`}>
                    <PersonCard personData={person} />

                </Link>
            )}
        </>
    );
};
