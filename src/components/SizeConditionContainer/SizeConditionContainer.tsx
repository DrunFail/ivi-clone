'use client';

import { useResize } from '../../hooks/useResize';

export default function SizeConditionContainer({
    children,
    less,
    more,
}: {
    children: React.ReactNode;
    less?: number;
    more?: number;
}) {
    const size = useResize();
    if (!size) return <></>;

    return (
        <>
            {less && size < less && children}
            {more && size > more && children}
        </>
    );
}
