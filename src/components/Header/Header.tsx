import Image from "next/image";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import user from "../../assets/SVG/Users/User.svg";
import useAuth from "../auth/hooks/useAuth";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import MyButton from "../UI/MyButton/MyButton";
import HeaderDropdown from "./components/HeaderDropdown/HeaderDropdown";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import HeaderWindow from "./components/HeaderWindow/HeaderWindow";
import SearchWindow from "./components/SearchWindow/SearchWindow";
import UserHeader from "./components/UserHeader/UserHeader";
import { NAV_MENU } from "./consts/HeaderConst";
import styles from "./Header.module.scss";

/** Component Header */

export default function Header() {
    const [visible, setVisible] = useState(false);
    const [focusLink, setFocusLink] = useState("");

    const handleVisibleTrue = (linkName: string) => {
        setFocusLink(linkName);
setVisible(true)
    }
    const handleVisibleFalse = () => {

setVisible(false)    }

    const currentLink = NAV_MENU.find(link => link.name === focusLink);
    console.log(currentLink)
    const auth  = useAuth()?.auth;

    return (
        
        <div className={styles.content} onMouseLeave={handleVisibleFalse }>
                
                    <HeaderLogo/>
                
                
            <HeaderNavbar handler={handleVisibleTrue} linkData={NAV_MENU} />
                
          
            
                <MyButton>
                    <FormattedMessage id="PayForASubscription" />
                </MyButton>
                
                    <SearchWindow />
                
                
                    <HeaderWindow
                        name={
                            <div className={styles.User}>
                                {auth?.token ? "U" : <Image src={user} alt="" />}
                            </div>
                        }
                    >
                        <UserHeader />
                    </HeaderWindow>
                
            <LanguageSwitcher />
            {visible && currentLink?.dropdown && <HeaderDropdown />}
            </div>
        
    );
};
