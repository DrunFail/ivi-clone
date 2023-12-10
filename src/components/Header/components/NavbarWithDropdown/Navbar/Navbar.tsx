import Link from "next/link";
import { NavbarLink } from "../../../../../models/global";
import styles from "./Navbar.module.scss";
import { FormattedMessage } from "react-intl";

interface NavbarProps {
    navLinkData: NavbarLink[];
    linkHoverHandler?: (menuItem:NavbarLink) => void
}
export default function Navbar({navLinkData,linkHoverHandler }:NavbarProps) {
    return (
        <nav className={styles.navbar} data-testid='header-navbar'>
            <ul>
                {navLinkData.map((menuItem, idx) =>
                    <li key={idx}>
                        <Link
                            href={menuItem.link}
                            onMouseEnter={() => linkHoverHandler && linkHoverHandler(menuItem)}>
                            <FormattedMessage id={`header.navbar.${menuItem.name}`} />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}