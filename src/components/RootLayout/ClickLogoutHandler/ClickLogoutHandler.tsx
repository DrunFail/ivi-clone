"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "../../auth/logoutAction";
export default function ClickLogoutHandler({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    
    return (
        <div onClick={async () => {
            await logoutAction();
            await router.refresh();
        }}>
            {children }
        </div>
    );
}