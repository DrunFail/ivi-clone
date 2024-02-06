import Link from "next/link";
import usePersonData from "../hooks/usePersonData";
import { Person } from "../../../../models/types";
import StaffCard from "../StaffCard/StaffCard";

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