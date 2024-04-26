import RootLayout from "../../components/RootLayout/RootLayout";

export default function MovieLayout({ children }: {children:React.ReactNode}) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}