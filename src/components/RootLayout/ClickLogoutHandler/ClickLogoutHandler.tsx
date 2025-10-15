'use client';

import { useRouter } from 'next/navigation';
import { logoutAction } from '../../auth/logoutAction';
import useAuth from '@/hooks/auth/useAuth';
export default function ClickLogoutHandler({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { setAuth } = useAuth();

    return (
        <div
            onClick={async () => {
                await logoutAction();
                setAuth(null);
                router.refresh();
            }}
        >
            {children}
        </div>
    );
}
