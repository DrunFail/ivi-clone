import DropdownList from "../../Header/components/navbar/DropdownList/DropdownList";
import { FOOTER_NAV_MENU } from "../constants/footerConstants";
import ServiceContainer from "../ServiceContainer/ServiceContainer";
import WatchMoviesLink from "../WatchMoviesLink/WatchMoviesLink";
import styles from "./FooterTop.module.scss";

export default function FooterTop() {
    return (
        <div className={styles.container}>
            {FOOTER_NAV_MENU.map((elem, idx) =>
                <DropdownList
                    key={idx}
                    linkDataList={elem.data.menu}
                    title={elem.name}
                    oneColumn />
            )}
            <ServiceContainer variant="desktop"/>

            <WatchMoviesLink />
        </div>
    );
}