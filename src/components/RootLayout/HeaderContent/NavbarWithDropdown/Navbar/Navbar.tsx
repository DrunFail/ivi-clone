import Link from "next/link";
import styles from "./Navbar.module.scss";
import { FormattedMessage } from "react-intl";
import { NavbarLink } from "../../../../../models/global";

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