'use client';

import { useState } from 'react';
import styles from './Rating.module.scss';
import { useTranslations } from 'next-intl';
import Modal from '../UI/Modal/Modal';
interface RatingProps {
    ratingModalContent: React.ReactNode;
    ratingButton: React.ReactNode;
}

export default function Rating({ ratingModalContent, ratingButton }: RatingProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const t = useTranslations();

    const toggleVisibleModal = () => {
        setVisible((visible) => !visible);
    };

    return (
        <>
            <div onClick={toggleVisibleModal} className={styles.container}>
                {ratingButton}
            </div>
            <Modal callback={toggleVisibleModal} visible={visible}>
                {ratingModalContent}
            </Modal>
        </>
    );
}
