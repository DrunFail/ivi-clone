import { useState } from "react";
import { FormattedMessage } from "react-intl";
import useAuth from "../auth/hooks/useAuth";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import MyButton from "../UI/MyButton/MyButton";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import ProfileBlockIconWithDropdown from "./components/ProfileBlockIconWithDropdown/ProfileBlockIconWithDropdown";
import SearchWindow from "./components/SearchWindow/SearchWindow";
import { NAV_MENU } from "./consts/HeaderConst";
import styles from "./Header.module.scss";


export default function Header() {
    const [headerIsHover, setHeaderIsHover] = useState(false);

    const handlerHeaderHover = (status: boolean) => {
        setHeaderIsHover(status)
    }

    const auth = useAuth()?.auth;

    return (

        <div className={`${styles.content} ${styles[headerIsHover ? "hover" : ""]}`} >
            <HeaderLogo />

            <HeaderNavbar linkData={NAV_MENU} handlerHeaderHover={handlerHeaderHover} />

            <MyButton type="button">
                <FormattedMessage id="PayForASubscription" />
            </MyButton>

            <SearchWindow />

            <ProfileBlockIconWithDropdown handlerHeaderHover={handlerHeaderHover} />


           

            <LanguageSwitcher />
            
            </div>
           
        
    );
};
