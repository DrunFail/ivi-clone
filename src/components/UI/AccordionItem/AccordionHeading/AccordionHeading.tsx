import Arrow from '../Arrow/Arrow';
import styles from './AccordionHeading.module.scss';

interface AccordionHeadingProps {
    toggleVisible: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    variant?: 'content' | 'spaceBetween';
}

export default function AccordionHeading({
    toggleVisible,
    isOpen,
    children,
    variant = 'content',
}: AccordionHeadingProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `;

    return (
        <div className={defaultClasses} onClick={toggleVisible}>
            {children}
            <Arrow visible={isOpen} />
        </div>
    );
}
