import styles from './Crumb.module.scss';
interface CrumbProps {
    children: React.ReactNode;
    active: boolean;
}
export default function Crumb({ children, active }: CrumbProps) {
    return <span className={`${styles.crumb} ${styles[active ? 'active' : 'last']}`}>{children}</span>;
}
