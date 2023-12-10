import styles from "./Footer.module.scss";
import SupportBlock from "./SupportBlock/SupportBlock";
import WatchMoviesLink from "./WatchMoviesLink/WatchMoviesLink";
import { FOOTER_NAV_MENU } from "./constants/footerConstants";
import DropdownList from "../UI/DropdownList/DropdownList";
import ButtonSocialBlock from "../UI/ButtonSocialBlock/ButtonSocialBlock";
import DownloadAppLinkBlock from "../UI/DownloadAppLinkBlock/DownloadAppLinkBlock";


export default function Footer() {
    return (
        <footer data-testid="main-footer">
            <div className={styles.top}>
                {FOOTER_NAV_MENU.map((elem, idx) =>
                    <DropdownList
                        key={idx}
                        linkDataList={elem.data.menu}
                        title={`footer.${elem.name}`}
                        oneColumn
                        intlPrefix="footer"
                        testId={elem.name }
                    />
                )}
                <SupportBlock
                    variant="desktop" />
                <WatchMoviesLink />
            </div>
            <div className={styles.bottom}>
                <DownloadAppLinkBlock
                    variant="desktop" />
                <ButtonSocialBlock />
            </div>
        </footer>
    );
};
