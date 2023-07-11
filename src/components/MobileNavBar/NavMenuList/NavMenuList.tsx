import { LinkData } from "../../../models/global";
import DropdownList from "../../Header/components/navbar/DropdownList/DropdownList";
import styles from "./NavMenuList.module.scss";

interface NavMenuListProps {
    genres: LinkData[];
    country: LinkData[];
    years: LinkData[];
    aside: LinkData[];
}

export default function NavMenuList({genres,country,years,aside }:NavMenuListProps) {
    return (
        <div className={styles.container}>
            <DropdownList title="Жанры" oneColumn linkDataList={genres} />
            <div className={styles.group}>
                <DropdownList title="Страны" oneColumn linkDataList={country} />
                <DropdownList title="Годы" oneColumn linkDataList={years} />
            </div>

            <DropdownList oneColumn linkDataList={aside} />
        </div>
    );
}