interface FooterContainerProps {
    children: React.ReactNode
}

export default function FooterContainer({ children }: FooterContainerProps) {
    return (
        <footer>{children}</footer>
    );
}