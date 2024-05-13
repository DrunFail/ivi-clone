"use client";

import useLogout from "../../../hooks/auth/useLogout";

export default function ClickLogoutHandler({ children }: {children:React.ReactNode}) {
    const handler = useLogout();
    return (
        <div onClick={handler }>
            {children }
        </div>
    );
}