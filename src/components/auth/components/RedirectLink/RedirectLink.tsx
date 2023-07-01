import Link from "next/link";
import styles from "./RedirectLink.module.scss";

interface RedirectLinkProps {
    href: string,
    children: React.ReactNode,
    
}

export default function RedirectLink({ href, children}:RedirectLinkProps) {
    return (
        <Link href={href} className={styles.link}>{children}</Link>
    );
}