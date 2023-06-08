import { zhanr } from "../../consts/HeaderConst";
import { HeaderDropdownList } from "../../interfaces/interfaces";
import DropdownList from "../DropdownList/DropdownList";
import DropdownListWithLine from "../DropdownListWithLine/DropdownListWithLine";
import HeaderDropdownWindow from "../HeaderDropdownWindow/HeaderDropdownWindow";
import styles from "./HeaderDropdown.module.scss";

interface HeaderDropdownProps {
    currentLink: HeaderDropdownList
}

export default function HeaderDropdown({ currentLink }: HeaderDropdownProps) {
    return (
        
            <div className={styles.container}>
                <div className={styles.left}>

                    <DropdownList title="Жанры" linkDataList={currentLink.genres} oneColumn={false} />

                    <DropdownList title="Страны" linkDataList={currentLink.country} oneColumn />
                    <DropdownList title="Годы" linkDataList={currentLink.years} oneColumn />
                </div>

                <div className={styles.right}>
                    <DropdownListWithLine>
                        <DropdownList linkDataList={currentLink.aside} oneColumn />
                    </DropdownListWithLine>
                </div>

            </div>
        
    );
}