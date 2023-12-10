import { FormattedMessage } from "react-intl";
import SupportBlock from "../../../../Footer/SupportBlock/SupportBlock";
import AccordionItem from "../../../../UI/AccordionItem/AccordionItem";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";

export default function ServiceBlockAccordion() {
    return (
        <AccordionItem
            heading={
                <NavBarModalTitle>
                    <FormattedMessage id="Support" />
                </NavBarModalTitle>
            }
            content={
                <SupportBlock variant="tablet" />
            }
            testId="service-block-hamb"
        />

    );
}