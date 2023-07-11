import ServiceContainer from "../../Footer/ServiceContainer/ServiceContainer";
import AccordionItem from "../../UI/AccordionItem/AccordionItem";
import NavBarModalTitle from "../NavBarModalTitle/NavBarModalTitle";

export default function ServiceBlockAccordion() {
    return (
            <AccordionItem
                heading={
                    <NavBarModalTitle>
                    Support
                    </NavBarModalTitle>
                }
                content={
                    <ServiceContainer variant="tablet" />
                }
            />
            
    );
}