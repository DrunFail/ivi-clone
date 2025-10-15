import Link from 'next/link';
import styles from './Navbar.module.scss';
import { NavbarLink } from '../../../../../models/global';
import { useTranslations } from 'next-intl';

interface NavbarProps {
    navLinkData: NavbarLink[];
}
export default function Navbar({ navLinkData }: NavbarProps) {
    const t = useTranslations();
    return (
        <nav className={styles.navbar} data-testid="header-navbar">
            <ul>
                {navLinkData.map((menuItem, idx) => (
                    <li key={idx}>
                        <Link href={menuItem.link}>{t(`header.navbar.${menuItem.name}`)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
