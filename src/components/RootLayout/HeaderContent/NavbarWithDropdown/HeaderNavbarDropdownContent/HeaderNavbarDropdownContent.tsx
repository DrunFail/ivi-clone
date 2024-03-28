import { NavbarLinkData } from "../../../../../models/global";
import DropdownList from "../../../../UI/DropdownList/DropdownList";
import DropdownListWithLine from "../DropdownListWithLine/DropdownListWithLine";
import styles from "./HeaderNavbarDropdownContent.module.scss";

interface HeaderNavbarDropdownContentProps {
    currentLink: NavbarLinkData,
    closeDropdown?: () => void
}

export default function HeaderNavbarDropdownContent({ currentLink, closeDropdown }: HeaderNavbarDropdownContentProps) {
  

    
    
    return (
        <div className={styles.container} data-testid="nav-dropdown">
            <div className={styles.left}>

                <DropdownList
                    title="header.genres"
                    linkDataList={currentLink.genres}
                    onClick={closeDropdown}
                    testId="genres"
                    
                />

                <DropdownList
                    title="header.countries"
                    linkDataList={currentLink.country}
                    oneColumn
                    onClick={closeDropdown}
                    testId="countries"
                    intlPrefix="genre"
                />
                <DropdownList
                    title="header.year"
                    linkDataList={currentLink.years}
                    oneColumn
                    onClick={closeDropdown}
                    testId="year"
                    intlPrefix="year"
                />
            </div>

            <div className={styles.right}>
                <DropdownListWithLine>
                    <DropdownList
                        linkDataList={currentLink.aside}
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