'use client';

import { usePathname } from '@/i18n/navigation';
import { useEffect, useState } from 'react';

export default function CheckIsVisibleInterceptRoute({ children, id }: { children: React.ReactNode; id: string }) {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const path = usePathname();

    const [currentPath, setCurrentPath] = useState(path);
    useEffect(() => {
        const isNotInterceptingRoute = document.getElementById(id);
        if (!isNotInterceptingRoute) {
            setIsVisibleModal(true);
        }
    }, [path, id]);

    useEffect(() => {
        if (!isVisibleModal && path !== currentPath) location.reload();
    }, [currentPath, path, isVisibleModal, id]);

    return <>{isVisibleModal && children}</>;
}
