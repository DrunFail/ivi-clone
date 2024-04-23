import { NavbarLink, NavbarLinkData } from "../../../../../models/global";
import DropdownList from "../../../../UI/DropdownList/DropdownList";
import DropdownListWithLine from "../DropdownListWithLine/DropdownListWithLine";
import styles from "./HeaderNavbarDropdownContent.module.scss";

interface HeaderNavbarDropdownContentProps {
    currentLink: NavbarLink,
    closeDropdown?: () => void
}

export default function HeaderNavbarDropdownContent({ currentLink, closeDropdown }: HeaderNavbarDropdownContentProps) {
  

    
    
    return (
        <div className={styles.container} data-testid="nav-dropdown">
            <div className={styles.left}>

                <DropdownList
                    title="header.genres"
                    linkDataList={currentLink.data!.genres}
                    onClick={closeDropdown}
                    testId="genres"
                    intlPrefix={currentLink.name === "movies" ? undefined : "genre" }
                    
                />

                <DropdownList
                    title="header.countries"
                    linkDataList={currentLink.data!.country}
                    oneColumn
                    onClick={closeDropdown}
                    testId="countries"
                    intlPrefix="genre"
                />
                <DropdownList
                    title="header.year"
                    linkDataList={currentLink.data!.years}
                    oneColumn
                    onClick={closeDropdown}
                    testId="year"
                    intlPrefix="year"
                />
            </div>

            <div className={styles.right}>
                <DropdownListWithLine>
                    <DropdownList
                        linkDataList={currentLink.data!.aside}
                        oneColumn
                        onClick={closeDropdown}
                        testId="aside"
                        intlPrefix="aside"
                    />
                </DropdownListWithLine>
            </div>

        </div>


    );
}