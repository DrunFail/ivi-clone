"use client";

import RootLayout from "../../components/RootLayout/RootLayout";

export default function PersonLayout({ children }: {children:React.ReactNode}) {
    return (
        <RootLayout>
            {children }
        </RootLayout>
    );
}