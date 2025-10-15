'use client';

import { usePathname } from 'next/navigation';
import styles from './ActiveTab.module.scss';

interface ActiveTabProps {
    children: React.ReactNode;
    partPathname: string;
}
export default function ActiveTab({ children, partPathname }: ActiveTabProps) {
    const path = usePathname();
    const isActiveTab = path.includes(partPathname);
    return <div className={styles[isActiveTab ? 'active' : 'tab']}>{children}</div>;
}
