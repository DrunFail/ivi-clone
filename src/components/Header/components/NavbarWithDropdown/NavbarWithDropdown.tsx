import { useState } from "react";
import styles from "./NavbarWithDropdown.module.scss";
import { NavbarLink } from "../../../../models/global";
import HeaderPortal from "../../portal/HeaderPortal";
import HeaderPortalWrapper from "../../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import HeaderNavbarDropdownContent from "./HeaderNavbarDropdownContent/HeaderNavbarDropdownContent";
import Navbar from "./Navbar/Navbar";

interface HeaderNavbarWithDropdownProps {
    navLinkData: NavbarLink[],
    handlerHeaderHover: (status: boolean) => void
}

export default function HeaderNavbarWithDropdown({ navLinkData, handlerHeaderHover }: HeaderNavbarWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const [focusLink, setFocusLink] = useState<NavbarLink | null>(null);
    /*const currentLink = navLinkData.find(link => link.name === focusLink);*/
    


    const openNavDropdown = (menuItem: NavbarLink) => {
        setIsVisiblePortal(Boolean(menuItem.data));
        handlerHeaderHover(Boolean(menuItem.data))
        setFocusLink(menuItem)
    }
    const closeNavDropdown = () => {
        setIsVisiblePortal(false);
        handlerHeaderHover(false);
    }

    

    return (

        <div className={styles.container} onMouseLeave={closeNavDropdown} data-testid="navbar-dropdown">
            <Navbar
                navLinkData={navLinkData}
                linkHoverHandler={openNavDropdown}
            />

            {isVisiblePortal && focusLink && focusLink.data &&
                <HeaderPortal>
                    <HeaderPortalWrapper>
                        <HeaderNavbarDropdownContent
                            currentLink={focusLink.data}
                            closeDropdown={closeNavDropdown}
                        />
                    </HeaderPortalWrapper>
                </HeaderPortal>
            }

        </div>

    );
}