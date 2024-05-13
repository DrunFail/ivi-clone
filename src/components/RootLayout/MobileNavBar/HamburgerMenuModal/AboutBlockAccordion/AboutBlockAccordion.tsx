import { useTranslations } from "next-intl";
import AccordionItem from "../../../../UI/AccordionItem/AccordionItem";
import NavigationBlockTitle from "../../../Footer/NavigationBlockTitle/NavigationBlockTitle";
import { FOOTER_NAV_MENU } from "../../../Footer/constants/footerConstants";
import DropdownList from "../../../../UI/DropdownList/DropdownList";

export default function AboutBlockAccordion() {
    const t = useTranslations();
    return (
        <AccordionItem
            heading={
                <NavigationBlockTitle>
                    {t(`footer.${FOOTER_NAV_MENU[0].name}`) }
                </NavigationBlockTitle>
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