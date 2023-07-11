import Image from "next/image";
import { FormattedMessage } from "react-intl";
import styles from "./ProfileDropdownCard.module.scss";
interface ProfileDropdownCardProps {
    imgLink: string,
    imgDescription: string,
    idTranslate: string
}
export default function ProfileDropdownCard({ imgLink, imgDescription, idTranslate }:ProfileDropdownCardProps) {
    return (
        <div className={styles.card}>
            <Image src={`/profileDropdown/${imgLink}.svg`} alt={imgDescription} width={25} height={25} />
            <p className={styles.description}>
                <FormattedMessage id={idTranslate} />
            </p>
        </div>
    );
}