import { LinkData } from "../../../../../../models/global";
import DropdownList from "../../../../../UI/DropdownList/DropdownList";
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
            
                <DropdownList
                    title="header.genres"
                    oneColumn
                    linkDataList={genres} />
            
            <div className={styles.group}>
                
                    <DropdownList
                        title="header.countries"
                        oneColumn
                        linkDataList={country} />
                
                
                    <DropdownList
                        title="header.year"
                        oneColumn
                        linkDataList={years} />
                
            </div>

                <DropdownList
                    oneColumn
                    linkDataList={aside} />
            </div>
        
    );
}