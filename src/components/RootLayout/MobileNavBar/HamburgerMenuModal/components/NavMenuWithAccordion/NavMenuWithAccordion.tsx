import { FormattedMessage } from "react-intl";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";
import NavMenuList from "../NavMenuList/NavMenuList";
import styles from "./NavMenuWithAccordion.module.scss";
import Link from "next/link";
import AccordionItem from "../../../../../UI/AccordionItem/AccordionItem";
import { NAV_MENU } from "../../../../../../constants/headerConstants";

export default function NavMenuWithAccordion() {
    return (
        <div className={styles.container} data-testId="nav-acc-hamb">
            {NAV_MENU.map((link, index) =>
                link.data
                    ? <AccordionItem
                        key={index}
                        heading={
                            <NavBarModalTitle>
                                <FormattedMessage id={`header.navbar.${link.name}`} />
                            </NavBarModalTitle>
                        }
                        content={
                            <div style={{ marginBlockStart: "20px" }}>
                                <NavMenuList
                                    genres={link.data.genres}
                                    country={link.data.country}
                                    years={link.data.years}
                                    aside={link.data.aside} />
                            </div>
                        }
                        testId="nav-menu-acc"
                    />
                    : <NavBarModalTitle key={index}>
                        <Link href={link.link}>
                            <FormattedMessage id={`header.navbar.${link.name}`} />
                        </Link>
                    </NavBarModalTitle>

            )}
        </div>
    );
}