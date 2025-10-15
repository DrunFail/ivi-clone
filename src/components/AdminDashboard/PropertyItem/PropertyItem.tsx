import styles from './PropertyItem.module.scss';

interface PropertyItemProps {
    children: React.ReactNode;
    description: string | number;
}

export default function PropertyItem({ children, description }: PropertyItemProps) {
    return (
        <div className={styles.item}>
            <span>{children}</span>
            {':'}
            {description}
        </div>
    );
}
