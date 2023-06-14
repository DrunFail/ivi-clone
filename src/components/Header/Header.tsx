import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useResize } from "../../hooks/useResize";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import MyButton from "../UI/MyButton/MyButton";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderNavbarWithDropdown from "./components/navbar/HeaderNavbarWithDropdown/HeaderNavbarWithDropdown";
import ProfileBlockIconWithDropdown from "./components/profile/ProfileBlockIconWithDropdown/ProfileBlockIconWithDropdown";
import SearchWithModal from "./components/search/SearchWithModal/SearchWithModal";
import { NAV_MENU } from "./constants/headerConstants";
import styles from "./Header.module.scss";


export default function Header() {
    const [headerIsHover, setHeaderIsHover] = useState(false);
    const size = useResize();

    const handlerHeaderHover = (status: boolean) => {
        setHeaderIsHover(status)
    }

    return (

        <div className={`${styles.content} ${styles[headerIsHover ? "hover" : ""]}`} >
            <HeaderLogo />
            <div style={{ display: "flex", blockSize: "100%" }}>
                {size > 1160 &&

                    <HeaderNavbarWithDropdown
                    navLinkData={NAV_MENU}
                    handlerHeaderHover={handlerHeaderHover} />

                }
            </div>
            <MyButton type="button">
                <FormattedMessage id="PayForASubscription" />
            </MyButton>

            <SearchWithModal />

            <ProfileBlockIconWithDropdown handlerHeaderHover={handlerHeaderHover} />




            <LanguageSwitcher />

        </div>


    );
};
