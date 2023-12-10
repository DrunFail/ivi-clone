import { FormattedMessage } from "react-intl";
import { FOOTER_NAV_MENU } from "../../../../Footer/constants/footerConstants";
import AccordionItem from "../../../../UI/AccordionItem/AccordionItem";
import DropdownList from "../../../../UI/DropdownList/DropdownList";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";

export default function AboutBlockAccordion() {
    return (
        <AccordionItem
            heading={
                <NavBarModalTitle>
                    <FormattedMessage id={`footer.${FOOTER_NAV_MENU[0].name}`} />

                </NavBarModalTitle>
            }
            content={
                <div style={{ marginBlockStart: "20px" }}>
                    <DropdownList
                        linkDataList={FOOTER_NAV_MENU[0].data.menu}
                        intlPrefix="footer"
                        oneColumn
                    />
                </div>
            }
            testId="about-block-hamb"
        />
    );
}