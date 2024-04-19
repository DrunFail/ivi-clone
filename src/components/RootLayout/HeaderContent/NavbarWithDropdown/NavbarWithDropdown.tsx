import {useState } from "react";
import styles from "./NavbarWithDropdown.module.scss";
import Navbar from "./Navbar/Navbar";
import dynamic from "next/dynamic";
import { NavbarLink } from "../../../../models/global";
import HeaderPortal from "../portal/HeaderPortal";
import HeaderPortalWrapper from "../portal/HeaderPortalWrapper/HeaderPortalWrapper";

const HeaderNavbarDropdownContent = dynamic(() => 
    import("./HeaderNavbarDropdownContent/HeaderNavbarDropdownContent").then((mod) => mod.default)
)
interface HeaderNavbarWithDropdownProps {
    navLinkData: NavbarLink[],
}



export default function HeaderNavbarWithDropdown({ navLinkData }: HeaderNavbarWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const [focusLink, setFocusLink] = useState<NavbarLink | null>(null);

   

    
    const openNavDropdown = (menuItem: NavbarLink) => {
        setIsVisiblePortal(Boolean(menuItem.data));
        setFocusLink(menuItem)
    }
    const closeNavDropdown = () => {
        setIsVisiblePortal(false);
    }
    
   

    return (
        <div
            className={styles.container}
            onMouseLeave={closeNavDropdown}
            data-testid="navbar-dropdown"
        >
            <Navbar
                navLinkData={navLinkData}
                linkHoverHandler={openNavDropdown}
            />

            {isVisiblePortal && focusLink && focusLink.data &&
                <HeaderPortal>
                    <HeaderPortalWrapper>
                        <HeaderNavbarDropdownContent
                            currentLink={focusLink}
                            closeDropdown={closeNavDropdown}
                        />
                    </HeaderPortalWrapper>
                </HeaderPortal>
            }

        </div>

    );
}