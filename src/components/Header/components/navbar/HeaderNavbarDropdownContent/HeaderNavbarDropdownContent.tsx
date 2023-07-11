import { NavbarLink } from "../../../../../models/global";
import DropdownList from "../DropdownList/DropdownList";
import DropdownListWithLine from "../DropdownListWithLine/DropdownListWithLine";
import styles from "./HeaderNavbarDropdownContent.module.scss";

interface HeaderNavbarDropdownContentProps {
    currentLink: NavbarLink
}

export default function HeaderNavbarDropdownContent({ currentLink }: HeaderNavbarDropdownContentProps) {
    return (
        <>
            { currentLink.data &&
                <div className={styles.container}>
                    <div className={styles.left}>

                        <DropdownList
                            title="Жанры"
                            linkDataList={currentLink.data.genres} />

                        <DropdownList
                            title="Страны"
                            linkDataList={currentLink.data.country}
                            oneColumn />
                        <DropdownList
                            title="Годы"
                            linkDataList={currentLink.data.years}
                            oneColumn />
                    </div>

                    <div className={styles.right}>
                        <DropdownListWithLine>
                            <DropdownList
                                linkDataList={currentLink.data.aside}
                                oneColumn />
                        </DropdownListWithLine>
                    </div>

                </div>

            }
        </>
    );
}