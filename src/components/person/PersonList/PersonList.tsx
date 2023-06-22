import { useSelector } from "react-redux";
import Link from "next/link";
import { getFilm } from "../../../store/film";
import PersonCard from "../PersonCard/PersonCard";
import { IStaff } from "../../../models";


export default function PersonList() {
    const films = useSelector(getFilm());
    return (
        <>
            {films?.staff?.slice(0, 4).map((person: IStaff) => (
                <Link
                    key={person.id}
                    href={`/person/${person.personId}`}>
                    <PersonCard personData={person} />
                    
                </Link>
            ))}
        </>
    );
};
