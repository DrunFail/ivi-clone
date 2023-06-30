import { FormattedMessage } from "react-intl";
import { NAV_MENU } from "../../Header/constants/headerConstants";
import AccordionItem from "../../UI/AccordionItem/AccordionItem";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";
import NavMenuList from "../NavMenuList/NavMenuList";

export default function NavMenuWithAccordion() {
    return (
        <div style={{ display: "grid", rowGap: "30px" }}>
            {NAV_MENU.map((link, index) =>
                link.data
                    ? <AccordionItem
                        key={index }
                        heading={
                            <NavBarModalTitle>
                                <FormattedMessage id={`header.navbar.${link.name}`} />
                            </NavBarModalTitle>
                        }
                        content={
                            <NavMenuList
                                genres={link.data.genres}
                                country={link.data.country}
                                years={link.data.years}
                                aside={link.data.aside} />
                        }
                    />
                    : <NavBarModalTitle key={index }>
                        <a href={link.link}>{link.name}</a>
                    </NavBarModalTitle>

            )}
        </div>
    );
}