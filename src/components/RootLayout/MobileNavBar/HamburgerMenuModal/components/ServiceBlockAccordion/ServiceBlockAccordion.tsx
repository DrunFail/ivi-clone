import { FormattedMessage } from "react-intl";
import SupportBlock from "../../../../Footer/SupportBlock/SupportBlock";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";
import AccordionItem from "../../../../../UI/AccordionItem/AccordionItem";

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