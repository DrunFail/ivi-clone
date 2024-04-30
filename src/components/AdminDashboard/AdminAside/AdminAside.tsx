import Link from "next/link";
import { usePathname} from "next/navigation";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./AdminAside.module.scss";


export default function AdminAside({ menu }: { menu: { id: number, name: string, link: string }[] }) {
    const [currentLink, setCurrentLink] = useState("");
    const pathname = usePathname();
    
    useEffect(() => {
        const currentPage = menu.find(elem => pathname.includes(elem.name));
        if (currentPage) {
            setCurrentLink(currentPage.name)
        }

    },[pathname])
    
    const activeLinkClass = (nameLink: string) => {
        if (currentLink === nameLink) {
            return 'active'
        }
    }
    return (
        <nav className={styles.nav}>
            <ul >
                {menu.map(menu =>
                    <li key={menu.id}
                        className={styles[`li_${activeLinkClass(menu.name)}`]}>
                        
                        <Link href={menu.link}><FormattedMessage id={`${menu.name}`} /></Link>
                        
                    </li>)}
                
            </ul>
        </nav>

    );
}