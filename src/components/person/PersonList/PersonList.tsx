import Link from "next/link";
import PersonCard from "../PersonCard/PersonCard";
import { Person } from "../../../models/types";

export default function PersonList({ personList }: { personList: Person[] }) {
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
