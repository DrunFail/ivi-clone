'use client';

import React from 'react';
import { useResize } from '../../../hooks/useResize';

export default function CheckIsMobile({ mobileNav, footer }: { mobileNav: React.ReactNode; footer: React.ReactNode }) {
    const size = useResize();
    if (!size) return <></>;
    return <>{size > 1160 ? footer : mobileNav}</>;
}
