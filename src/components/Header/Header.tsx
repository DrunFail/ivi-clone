import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useResize } from "../../hooks/useResize";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import { NAV_MENU } from "./constants/headerConstants";
import styles from "./Header.module.scss";
import { BsSearch } from "react-icons/bs";
import SearchButtonWithModal from "./components/SearchButtonWithModal/SearchButtonWithModal";
import HeaderPortalContainer from "./portal/HeaderPortalContainer";
import ProfileIconWithDropdown from "./components/ProfileIconWithDropdown/ProfileIconWithDropdown";
import NavbarWithDropdown from "./components/NavbarWithDropdown/NavbarWithDropdown";
import ButtonSubscription from "./components/ButtonSubscription/ButtonSubscription";


export default function Header() {
    const [headerIsHover, setHeaderIsHover] = useState(false);
    const size = useResize();

    const handlerHeaderHover = (status: boolean) => {
        setHeaderIsHover(status)
    }

    return (
        <header>
            <div className={styles[headerIsHover ? "hover" : "no-hover"]} >
                <div className={styles.content}>
                    <HeaderLogo />
                    <div className={styles.navbar}>
                        {size > 1160 &&
                            <NavbarWithDropdown
                                navLinkData={NAV_MENU}
                                handlerHeaderHover={handlerHeaderHover}
                            />
                        }
                    </div>
                    {size > 1160 &&

                        <>
                         <ButtonSubscription />

                    <SearchButtonWithModal>
                        <BsSearch />
                        <p>
                            {" "}
                            <FormattedMessage id="Search" />
                        </p>
                    </SearchButtonWithModal>

                    <ProfileIconWithDropdown
                        handlerHeaderHover={handlerHeaderHover} />
                    </>
                    }
                   
                   

                    <LanguageSwitcher />
                </div>
                <HeaderPortalContainer />
            </div>
        </header>

    );
};
