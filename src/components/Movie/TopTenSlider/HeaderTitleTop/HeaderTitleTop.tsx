import Image from "next/image";
import SectionTitle from "../../../UI/SectionTitle/SectionTitle";

export default function HeaderTitleTop() {
    return (
        <SectionTitle>
            <Image src="/top10.svg" width={116} height={28} alt='top 10' />
            за неделю
        </SectionTitle>
    );
}
