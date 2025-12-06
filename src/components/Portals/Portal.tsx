import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
}

const Portal = (props: PortalProps) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#portal');
        setMounted(true);
    }, []);

    // eslint-disable-next-line react-hooks/refs
    return mounted && ref.current
        ? createPortal(<>{props.children}</>, document?.querySelector('#Header') || document?.body)
        : null;
};

export default Portal;
