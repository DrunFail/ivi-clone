'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Layout({
    children,
    moviePageModal,
}: {
    children: React.ReactNode;
    moviePageModal: React.ReactNode;
}) {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const path = usePathname();

    const [currentPath, setCurrentPath] = useState(path);
    useEffect(() => {
        const id = document.getElementById('not-inter');
        if (!id) {
            setIsVisibleModal(true);
        }
    }, [path]);

    useEffect(() => {
        if (!isVisibleModal && path !== currentPath) location.reload();
    }, [currentPath, path, isVisibleModal]);

    return (
        <>
            {children}
            {isVisibleModal && moviePageModal}
        </>
    );
}
