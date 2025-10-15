'use client';

import { usePathname } from 'next/navigation';

export default function SetCookierForRedirectAfterLogin({ children }: { children: React.ReactNode }) {
    const path = usePathname();

    return <div onClick={() => (document.cookie = `backLoginUrl=${path}`)}>{children}</div>;
}
