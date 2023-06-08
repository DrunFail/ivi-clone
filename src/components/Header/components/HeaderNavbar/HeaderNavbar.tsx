import Link from "next/link";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { NAV_MENU } from "../../consts/HeaderConst";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import HeaderDropdownWindow from "../HeaderDropdownWindow/HeaderDropdownWindow";
import useHeaderDropdownWindow from "../HeaderDropdownWindow/useHeaderDropdownWindow";
import styles from "./HeaderNavbar.module.scss";

interface HeaderNavbarProps {
    linkData: { name: string, link: string, dropdown: boolean }[],
    handlerHeaderHover: (status: boolean) => void
}

export default function HeaderNavbar({ linkData, handlerHeaderHover }: HeaderNavbarProps) {

    const { visible, handleVisible } = useHeaderDropdownWindow();
    const [focusLink, setFocusLink] = useState("");
    const currentLink = NAV_MENU.find(link => link.name === focusLink);


    const handle = (menuItem: any) => {
        handleVisible(menuItem.dropdown);
        handlerHeaderHover(menuItem.dropdown)
        setFocusLink(menuItem.name)
    }
    const handleF = () => {
        handleVisible(false);
        handlerHeaderHover(false);
    }



    return (
        <div style={{ display: "flex", blockSize: "100%" }}>
            <div style={{ display: "flex", alignItems: "center" }} onMouseLeave={handleF} >
                <nav className={styles.navbar} >
                    <ul>
                        {linkData.map(menuItem =>
                            <li>
                                <Link href={menuItem.link} className={styles.Header__p} onMouseEnter={() => handle(menuItem)}>
                                    <FormattedMessage id={`header.navbar.${menuItem.name}`} />
                                </Link>
                            </li>
                        )}

                    </ul>

                </nav>
                {visible &&
                    <HeaderDropdownWindow>
                        <HeaderDropdown currentLink={currentLink} />
                    </HeaderDropdownWindow>
                }
            </div>
        </div>
    );
}