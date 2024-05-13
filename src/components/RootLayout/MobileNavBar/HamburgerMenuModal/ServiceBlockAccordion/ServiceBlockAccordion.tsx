import { useTranslations } from "next-intl";
import AccordionItem from "../../../../UI/AccordionItem/AccordionItem";
import NavigationBlockTitle from "../../../Footer/NavigationBlockTitle/NavigationBlockTitle";
import SupportBlock from "../../../Footer/SupportBlock/SupportBlock";

export default function ServiceBlockAccordion() {
    const t = useTranslations();
    return (
        <AccordionItem
            heading={
                <NavigationBlockTitle>
                    {t("Support") }
                </NavigationBlockTitle>
            }
            content={<SupportBlock/>}
            testId="service-block-hamb"
        />

    );
}