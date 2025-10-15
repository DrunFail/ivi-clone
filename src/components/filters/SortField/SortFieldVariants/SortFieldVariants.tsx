import styles from './SortFieldVariants.module.scss';
interface Props {
    children: React.ReactNode;
}

export default function SortFieldVariants({ children }: Props) {
    return (
        <div id="sortBy-variants" className={styles.dropdownArea} style={{ display: 'none' }}>
            {children}
        </div>
    );
}
