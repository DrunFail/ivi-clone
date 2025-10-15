'use client';

import { useState } from 'react';
import Button from '../UI/core/Button/Button';
import FontIcon from '../UI/FontIcon/FontIcon';
import dynamic from 'next/dynamic';

const ShareModal = dynamic(() => import('./ShareModal/ShareModal').then((mod) => mod.default));

interface ShareButtonWithModalProps {
    posterUrl: string;
    nameRu: string;
    year: number;
}
export default function ShareButtonWithModal({ posterUrl, nameRu, year }: ShareButtonWithModalProps) {
    const [visible, setVisible] = useState(false);

    const isModalOpen = () => {
        setVisible(true);
    };

    const isModalClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button as="button" size="mini" onClick={isModalOpen} aria-label="поделиться ссылкой на фильм">
                <FontIcon variant="arrow" />
            </Button>
            <ShareModal
                visible={visible}
                isModalClose={isModalClose}
                urlMovieImage={posterUrl}
                movieName={nameRu}
                movieYear={year}
            />
        </>
    );
}
