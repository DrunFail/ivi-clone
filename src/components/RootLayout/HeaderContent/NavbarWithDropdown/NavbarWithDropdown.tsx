"use client";

import { useEffect, useState } from "react";
import styles from "./NavbarWithDropdown.module.scss";
import dynamic from "next/dynamic";
import { NavbarLink } from "../../../../models/global";
import HeaderPortal from "../portal/HeaderPortal";
import HeaderPortalWrapper from "../portal/HeaderPortalWrapper/HeaderPortalWrapper";

const HeaderNavbarDropdownContent = dynamic(() =>
    import("./HeaderNavbarDropdownContent/HeaderNavbarDropdownContent").then((mod) => mod.default)
)
interface HeaderNavbarWithDropdownProps {
    navLinkData: NavbarLink[],
    children: React.ReactNode
}



export default function HeaderNavbarWithDropdown({ navLinkData,children }: HeaderNavbarWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const [focusLink, setFocusLink] = useState<NavbarLink | null>(null);
   
    const closeNavDropdown = () => {
        setIsVisiblePortal(false);
    }

    useEffect(() => {
        const navContainer = document.querySelector('[data-testid=navbar-dropdown]');
        if (!navContainer) {
            return;
        }
        const navItems = navContainer.querySelectorAll("a");
        navItems.forEach(item => item.onmouseenter = (e) => {
            const link = (e.target as HTMLAnchorElement).href;
            const currentLink = navLinkData.find(elem => elem.link !== "/" && link.includes(elem.link));
            if (!currentLink) {
                return;
            }
            setFocusLink(currentLink);
            setIsVisiblePortal(Boolean(currentLink.data));
        }
        );
    }, [navLinkData])

    return (
        <div
            className={styles.container}
            onMouseLeave={closeNavDropdown}
            data-testid="navbar-dropdown"
        >
            {children}

            {isVisiblePortal && focusLink?.data &&
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