export default function PositionContainer({ children, variant }: { children: React.ReactNode, variant: "content" | "container" }) {
    const value = variant === "content" ? "auto" : "100%";

   

    return (
        <div style={{ position: "absolute", top: "100%", left: "0", inlineSize: value, zIndex: "3"} }>{children}</div>
    );
}