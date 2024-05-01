export default function Layout({ children, moviePageModal }: {children:React.ReactNode, moviePageModal: React.ReactNode}) {
    return (
        <>{children}{moviePageModal}</>
    
    );
}