'use client';

import { useState } from 'react';
import ButtonHide from './ButtonHide/ButtonHide';

interface MovieHideInfoContainerProps {
    isHideText: React.ReactNode;
    notIsHideText: React.ReactNode;
    children?: React.ReactNode;
}

export default function MovieHideInfoContainer({ isHideText, notIsHideText, children }: MovieHideInfoContainerProps) {
    const [isHide, setIsHide] = useState(true);

    const isHideToggle = () => {
        setIsHide((isHide) => !isHide);
    };
    return (
        <>
            <div
                style={{
                    WebkitLineClamp: '6',
                    display: isHide ? '-webkit-box' : 'flex',
                    overflow: 'hidden',
                    flexDirection: 'column',
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                }}
            >
                {children}
            </div>

            <ButtonHide
                isHide={isHide}
                isHideToggle={isHideToggle}
                isHideText={isHideText}
                notIsHideText={notIsHideText}
            />
        </>
    );
}
