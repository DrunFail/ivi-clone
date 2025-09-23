"use client";

import { useEffect, useState } from "react";
import { usePathname } from "../../navigation";

export default function CheckIsVisibleInterceptRoute({ children,id }: {children:React.ReactNode,id:string}) {
    const [isVisibleModal, setIsVisibleModal] = useState(false);


    const path = usePathname();

    const [currentPath, setCurrentPath] = useState(path);
    useEffect(() => {
        const isNotInterceptingRoute = document.getElementById(id);
        if (!isNotInterceptingRoute) {
            setIsVisibleModal(true);
        }

    }, [path])

    useEffect(() => {
        if (!isVisibleModal && path !== currentPath) location.reload();
    }, [currentPath, path, isVisibleModal])


    return (
        <>
            {isVisibleModal && children}
        </>
    
    );
}