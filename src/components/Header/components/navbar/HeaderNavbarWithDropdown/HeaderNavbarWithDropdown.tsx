import Link from "next/link";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { NavbarLink } from "../../../../../models/global";
import HeaderDropdownWindow from "../../HeaderDropdownWindow/HeaderDropdownWindow";
import useHeaderDropdownWindow from "../../HeaderDropdownWindow/useHeaderDropdownWindow";
import HeaderNavbarDropdownContent from "../HeaderNavbarDropdownContent/HeaderNavbarDropdownContent";
import styles from "./HeaderNavbarWithDropdown.module.scss";

interface HeaderNavbarWithDropdownProps {
    navLinkData: NavbarLink[],
    handlerHeaderHover: (status: boolean) => void
}

export default function HeaderNavbarWithDropdown({ navLinkData, handlerHeaderHover }: HeaderNavbarWithDropdownProps) {

    const { visible, handleVisible } = useHeaderDropdownWindow();
    const [focusLink, setFocusLink] = useState("");
    const currentLink = navLinkData.find(link => link.name === focusLink);
    

    const handle = (menuItem: NavbarLink) => {
        handleVisible(Boolean(menuItem.data));
        handlerHeaderHover(Boolean(menuItem.data))
        setFocusLink(menuItem.name)
    }
    const handleF = () => {
        handleVisible(false);
        handlerHeaderHover(false);
    }



    return (
        
            <div style={{ display: "flex", alignItems: "center" }} onMouseLeave={handleF} >
                <nav className={styles.navbar} >
                    <ul>
                        {navLinkData.map((menuItem, idx) =>
                            <li key={idx}>
                                <Link href={menuItem.link} className={styles.Header__p} onMouseEnter={() => handle(menuItem)}>
                                    <FormattedMessage id={`header.navbar.${menuItem.name}`} />
                                </Link>
                            </li>
                        )}

                    </ul>

                </nav>
                {visible && currentLink &&
                    <HeaderDropdownWindow>
                        <HeaderNavbarDropdownContent currentLink={currentLink} />
                    </HeaderDropdownWindow>
                }
            </div>
       
    );
}