import NavMenuList from '../NavMenuList/NavMenuList';
import styles from './NavMenuWithAccordion.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import AccordionItem from '../../../../UI/AccordionItem/AccordionItem';
import NavigationBlockTitle from '../../../Footer/NavigationBlockTitle/NavigationBlockTitle';
import { NavbarLink } from '../../../../../models/global';

export default function NavMenuWithAccordion({ navMenu }: { navMenu: NavbarLink[] }) {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testId="nav-acc-hamb">
            {navMenu.map((link, index) =>
                link.data ? (
                    <AccordionItem
                        key={index}
                        heading={<NavigationBlockTitle>{t(`header.navbar.${link.name}`)}</NavigationBlockTitle>}
                        content={
                            <div style={{ marginBlockStart: '20px' }}>
                                <NavMenuList
                                    genres={link.data.genres}
                                    country={link.data.country}
                                    years={link.data.years}
                                    aside={link.data.aside}
                                    typeContent={link.name}
                                />
                            </div>
                        }
                        testId="nav-menu-acc"
                    />
                ) : (
                    <NavigationBlockTitle key={index}>
                        <Link href={link.link}>{t(`header.navbar.${link.name}`)}</Link>
                    </NavigationBlockTitle>
                ),
            )}
        </div>
    );
}
