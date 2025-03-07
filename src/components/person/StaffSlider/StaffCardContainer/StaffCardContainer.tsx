import Link from "next/link";
import { Person } from "../../../../models/types";
import StaffCard from "../StaffCard/StaffCard";
import usePersonData from "../../../../hooks/person/usePersonData";

interface StaffCardContainerProps {
    elem: Person
}
export default function StaffCardContainer({ elem }: StaffCardContainerProps) {
    const modifiedPersonData = usePersonData(elem);
    return (
        <Link href={`/person/${modifiedPersonData.personId}`}>
            <StaffCard modifiedPersonData={modifiedPersonData} />
        </Link>

    );

}