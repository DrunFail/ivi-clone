'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './AdminAside.module.scss';
import { useTranslations } from 'next-intl';

export default function AdminAside({ menu }: { menu: { id: number; name: string; link: string }[] }) {
    const [currentLink, setCurrentLink] = useState('');
    const pathname = usePathname();
    const t = useTranslations();

    useEffect(() => {
        const currentPage = menu.find((elem) => pathname.includes(elem.name));
        if (currentPage) {
            setCurrentLink(currentPage.name);
        }
    }, [pathname, menu]);

    const activeLinkClass = (nameLink: string) => {
        if (currentLink === nameLink) {
            return 'active';
        }
    };
    return (
        <nav className={styles.nav}>
            <ul>
                {menu.map((menu) => (
                    <li key={menu.id} className={styles[`li_${activeLinkClass(menu.name)}`]}>
                        <Link href={menu.link}>{t(`${menu.name}`)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
