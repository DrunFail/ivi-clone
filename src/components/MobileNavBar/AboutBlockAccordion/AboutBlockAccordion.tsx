import { FOOTER_NAV_MENU } from "../../Footer/constants/footerConstants";
import DropdownList from "../../Header/components/navbar/DropdownList/DropdownList";
import AccordionItem from "../../UI/AccordionItem/AccordionItem";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";

export default function AboutBlockAccordion() {
    return (
        <AccordionItem
            heading={
                <NavBarModalTitle>
                    {FOOTER_NAV_MENU[0].name}
                </NavBarModalTitle>
            }
            content={
                <DropdownList
                    linkDataList={FOOTER_NAV_MENU[0].data.menu}
                    oneColumn />
            } />
    );
}