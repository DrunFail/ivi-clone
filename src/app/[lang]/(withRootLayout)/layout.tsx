import RootLayout from "../../../components/RootLayout/RootLayout";

export default function MovieLayout(props: { children: React.ReactNode }) {
    return (
        <RootLayout>
                {props.children}
        </RootLayout>
    );
}