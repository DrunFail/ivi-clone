import { useTranslations } from "next-intl";
import styles from "./NavMenuList.module.scss";
import { LinkData } from "../../../../../models/global";
import NavigationBlockTitle from "../../../Footer/NavigationBlockTitle/NavigationBlockTitle";
import DropdownList from "../../../../UI/DropdownList/DropdownList";

interface NavMenuListProps {
    genres: LinkData[];
    country: LinkData[];
    years: LinkData[];
    aside: LinkData[];
    typeContent: string;
}

export default function NavMenuList({ genres, country, years, aside,typeContent }: NavMenuListProps) {
    const t = useTranslations();
    return (

        <div className={styles.container}>
            <div>
                <NavigationBlockTitle>
                    {t("header.genres")}
                </NavigationBlockTitle>
                <DropdownList
                    oneColumn
                    linkDataList={genres}
                    intlPrefix="genre"

                />
            </div>
            <div className={styles.group}>
                <div>
                    <NavigationBlockTitle>
                        {t("header.countries")}
                    </NavigationBlockTitle>

                    <DropdownList
                        oneColumn
                        linkDataList={country}
                        intlPrefix="genre"
                    />
                </div>
                <div>
                    <NavigationBlockTitle>
                        {t("header.year")}
                    </NavigationBlockTitle>

                    <DropdownList
                        oneColumn
                        linkDataList={years}
                        intlPrefix={`year.${typeContent}`}
                    />
                </div>
               

            </div>

            <DropdownList
                oneColumn
                linkDataList={aside}
                intlPrefix="aside"
            />
        </div>

    );
}