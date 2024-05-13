import { useTranslations } from "next-intl";
import { NavbarLink} from "../../../../../models/global";
import DropdownList from "../../../../UI/DropdownList/DropdownList";
import NavigationBlockTitle from "../../../Footer/NavigationBlockTitle/NavigationBlockTitle";
import DropdownListWithLine from "../DropdownListWithLine/DropdownListWithLine";
import styles from "./HeaderNavbarDropdownContent.module.scss";

interface HeaderNavbarDropdownContentProps {
    currentLink: NavbarLink,
    closeDropdown?: () => void
}

export default function HeaderNavbarDropdownContent({ currentLink, closeDropdown }: HeaderNavbarDropdownContentProps) {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testid="nav-dropdown">
            <div className={styles.left}>
            <div>
                <NavigationBlockTitle>
                    {t("header.genres") }
                </NavigationBlockTitle>
                <DropdownList
                    linkDataList={currentLink.data!.genres}
                    onClick={closeDropdown}
                    testId="genres"
                    intlPrefix={currentLink.name === "movies" ? undefined : "genre" }
                    
                />
                </div>
                <div>
                    <NavigationBlockTitle>
                        {t("header.countries")}
                    </NavigationBlockTitle>
                <DropdownList
                    linkDataList={currentLink.data!.country}
                    oneColumn
                    onClick={closeDropdown}
                    testId="countries"
                    intlPrefix="genre"
                    />
                </div>
                <div>
                    <NavigationBlockTitle>
                        {t("header.year")}
                    </NavigationBlockTitle>
                <DropdownList
                    linkDataList={currentLink.data!.years}
                    oneColumn
                    onClick={closeDropdown}
                    testId="year"
                    intlPrefix="year"
                    />
                </div>
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